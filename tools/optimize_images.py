#!/usr/bin/env python3
"""Rebuild visual derivatives with Pillow (optional asset-maintenance tool)."""
from pathlib import Path
import json
import shutil
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
metrics = []
for source in sorted((ROOT / 'assets').rglob('*.png')):
    if 'logos' in source.parts or source.stem == 'sports_match':
        continue
    image = Image.open(source).convert('RGB')
    output = source.with_suffix('.webp')
    image.save(output, 'WEBP', quality=92, method=6)
    metrics.append({'source': str(source.relative_to(ROOT)), 'output': str(output.relative_to(ROOT)),
                    'source_bytes': source.stat().st_size, 'output_bytes': output.stat().st_size,
                    'width': image.width, 'height': image.height})
    for width in [480, 960, 1440]:
        if width < image.width:
            height = round(image.height * width / image.width)
            image.resize((width, height), Image.Resampling.LANCZOS).save(
                source.with_name(f'{source.stem}-{width}.webp'), 'WEBP', quality=92, method=6)
shutil.copyfile(ROOT / 'assets/generated/tapas_spread.png', ROOT / 'assets/generated/tapas_spread.jpg')
logo = Image.open(ROOT / 'assets/logos/logo_principal.png').convert('RGBA')
for size, name in [(32, 'favicon-32'), (180, 'apple-touch-icon'), (192, 'icon-192'), (512, 'icon-512')]:
    logo.resize((size, size), Image.Resampling.LANCZOS).save(ROOT / f'assets/logos/{name}.png', optimize=True)
logo.resize((192, 192), Image.Resampling.LANCZOS).save(ROOT / 'assets/logos/logo-192.webp', 'WEBP', lossless=True, method=6)
logo.resize((512, 512), Image.Resampling.LANCZOS).save(ROOT / 'assets/logos/logo-512.webp', 'WEBP', lossless=True, method=6)
(ROOT / 'audit').mkdir(exist_ok=True)
(ROOT / 'audit/image-optimization.json').write_text(json.dumps(metrics, indent=2)+'\n')
