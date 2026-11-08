#!/usr/bin/env python3
"""Local clean-URL preview, including security headers. Not a Pages emulator."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote
import os

ROOT = Path(__file__).resolve().parents[1]

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        route = unquote(urlsplit(self.path).path)
        if route in ['/carta', '/nosotros', '/reservas']:
            self.path = route + '.html'
        super().do_GET()

    def end_headers(self):
        # Match the single global block used by this project; Cloudflare still
        # needs a real deployment check for redirect/header behavior.
        for line in (ROOT / '_headers').read_text().splitlines():
            if line.startswith('  ') and ': ' in line:
                key, value = line.strip().split(': ', 1)
                self.send_header(key, value)
        super().end_headers()

    def send_error(self, code, message=None, explain=None):
        if code != 404:
            return super().send_error(code, message, explain)
        content = (ROOT / '404.html').read_bytes()
        self.send_response(404)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(content)

if __name__ == '__main__':
    os.chdir(ROOT)
    print('Local preview: http://127.0.0.1:8081', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8081), Handler).serve_forever()
