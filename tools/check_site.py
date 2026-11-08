#!/usr/bin/env python3
"""Check local references, metadata and static deployment constraints offline."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import struct
import subprocess
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PAGES = ['index.html', 'carta.html', 'nosotros.html', 'reservas.html', '404.html']
ROUTES = {'/': 'index.html', '/carta': 'carta.html', '/nosotros': 'nosotros.html', '/reservas': 'reservas.html'}
errors = []
references = 0

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.nodes = []
        self.ids = set()
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.nodes.append((tag, attrs))
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append(f'{self.path.name}: duplicate id {attrs["id"]}')
            self.ids.add(attrs['id'])

docs = {name: Document(ROOT / name) for name in PAGES}
def check_reference(source, value):
    global references
    if not value:
        errors.append(f'{source}: empty reference')
        return
    parsed = urlsplit(value)
    if parsed.scheme or parsed.netloc:
        return
    route = unquote(parsed.path)
    if source != '404.html' and route.startswith('/'):
        errors.append(f'{source}: root-relative reference breaks portable opening: {value}')
    if route.startswith('/'):
        relative = ROUTES.get(route, route.lstrip('/'))
        target = ROOT / relative
    else:
        target = (ROOT / source).parent / route if route else ROOT / source
    references += 1
    if not target.is_file():
        errors.append(f'{source}: missing {value}')
    elif parsed.fragment and target.name in docs and parsed.fragment not in docs[target.name].ids:
        errors.append(f'{source}: missing fragment {value}')

for name, doc in docs.items():
    nodes = doc.nodes
    for tag, attrs in nodes:
        for attr in ['href', 'src', 'data-image']:
            if attr in attrs:
                check_reference(name, attrs[attr])
        if 'srcset' in attrs:
            for candidate in attrs['srcset'].split(','):
                check_reference(name, candidate.strip().split()[0])
        if tag == 'img' and 'alt' not in attrs:
            errors.append(f'{name}: image missing alt')
        if any(key.startswith('on') for key in attrs):
            errors.append(f'{name}: inline event handler')
    for tag in ['h1', 'main', 'title']:
        if sum(node == tag for node, _ in nodes) != 1:
            errors.append(f'{name}: expected one {tag}')
    if name != '404.html':
        canonical = [a['href'] for t, a in nodes if t == 'link' and a.get('rel') == 'canonical']
        expected = 'https://ermitasumaq.com' + next(k for k, v in ROUTES.items() if v == name)
        if canonical != [expected]:
            errors.append(f'{name}: inconsistent canonical {canonical}')
    for content in re.findall(r'<script type="application/ld\+json">(.*?)</script>', doc.path.read_text(), re.S):
        json.loads(content)
    for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', doc.path.read_text()):
        check_reference(name, url)
for css in (ROOT / 'css').glob('*.css'):
    for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        check_reference(str(css.relative_to(ROOT)), url)
manifest = json.loads((ROOT / 'site.webmanifest').read_text())
for icon in manifest['icons']:
    p = ROOT / icon['src'].lstrip('/')
    width, height = struct.unpack('>II', p.read_bytes()[16:24])
    if icon['sizes'] != f'{width}x{height}':
        errors.append(f'Incorrect icon size: {icon["src"]}')
urls = [e.text for e in ET.parse(ROOT / 'sitemap.xml').iter() if e.tag.endswith('}loc')]
if set(urls) != {'https://ermitasumaq.com'+r for r in ROUTES}:
    errors.append('Sitemap does not match canonical routes')
for script in (ROOT / 'js').glob('*.js'):
    subprocess.run(['node', '--check', str(script)], check=True)
subprocess.run(['node', str(ROOT / 'tools/test-hours.cjs')], check=True)
for path in (ROOT / 'assets').rglob('*'):
    if path.is_file() and path.stat().st_size > 25 * 1024 * 1024:
        errors.append(f'Asset exceeds 25 MiB: {path}')
for name in ['_headers', '_redirects', '404.html']:
    if not (ROOT / name).is_file(): errors.append(f'Missing {name}')
print(json.dumps({'pages': len(docs), 'local_references_checked': references, 'errors': errors}, indent=2))
raise SystemExit(bool(errors))
