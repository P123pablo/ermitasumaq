#!/usr/bin/env python3
"""Package only public static files; no npm/build dependencies required."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'dist'
FILES = ['index.html', 'carta.html', 'nosotros.html', 'reservas.html', '404.html',
         'robots.txt', 'sitemap.xml', 'site.webmanifest', '_headers', '_redirects']

def build():
    # Recreate only the generated deployment directory, never the source tree.
    if OUTPUT.is_symlink():
        raise RuntimeError('dist must not be a symlink')
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for name in FILES:
        shutil.copy2(ROOT / name, OUTPUT / name)
    for name in ['assets', 'css', 'js']:
        shutil.copytree(ROOT / name, OUTPUT / name)
    print(f'Static site ready: {OUTPUT}')

if __name__ == '__main__':
    build()
