# Deployment and maintenance

## Static build

Run from the repository root:

```bash
python3 tools/build.py
```

Use Cloudflare Pages with no framework preset, build command `python3 tools/build.py` and output directory `dist`. No application secrets or environment variables are required.

`dist/` is disposable generated output. The build refuses a symlink at that path and never removes the source directories. Tools, screenshots, repository metadata, internal reports and the legacy Apache configuration are not copied into the deployment package.

## Routes and error responses

Keep regular navigation and resource references portable: the source pages use relative `.html` links. Their public canonical URLs use the extensionless routes supported by Pages. Historical `.html` redirects are in `_redirects`.

Keep `404.html` at the output root. Do not replace it with a catch-all redirect or rewrite to the homepage: nonexistent content must remain an HTTP 404. The error page uses root-relative asset and recovery URLs so it still works when shown at a deeply nested missing path.

The local preview helper demonstrates clean paths and custom 404 responses; it does not reproduce every CDN behavior. Pages routing still requires an actual preview deployment test. [Cloudflare reference](https://developers.cloudflare.com/pages/configuration/serving-pages/).

## Headers, cache and external services

`_headers` restricts scripts/fonts to the site, blocks plugins and framing, sets MIME/referrer/permissions protections, and revalidates mutable unversioned files. Inline styles are permitted to preserve the existing static HTML architecture. There is no form submission endpoint; `form-action 'none'` must be reconsidered if a real form is introduced.

Google Maps is the remaining embedded external service. WhatsApp and Instagram are outgoing links; telephone links rely on the visitor's device. Review privacy and consent requirements with the owner before production. Do not add analytics or additional third-party services without reviewing those requirements.

The retained `.htaccess` documents the old Apache setup. Cloudflare Pages does not use it, and the build excludes it. [Headers reference](https://developers.cloudflare.com/pages/configuration/headers/).

## Domain, HTTPS and mail

The configured canonical domain is `ermitasumaq.com`, without `www`. Confirm that domain before changing DNS. The registrar can remain Hostinger; attaching the apex domain to Pages requires following Cloudflare's zone/nameserver procedure. Subdomains have a separate CNAME procedure. [Custom domains reference](https://developers.cloudflare.com/pages/configuration/custom-domains/).

Before any authorized change, record existing DNS, particularly MX, SPF, DKIM and DMARC. Configure the custom domain and certificates, then HTTP-to-HTTPS and `www`-to-apex redirects while preserving path and query parameters. Domain redirects belong in the Cloudflare zone, not this path-only `_redirects` file. Avoid long HSTS commitments until all relevant hosts have been verified.

Review `pages.dev` and preview indexing as well as the custom domain; do not assume DNS or certificate readiness from a successful local build.

## Post-deployment checklist

- Confirm HTTPS certificates, HTTP redirects and `www` behavior.
- Visit all four pages and historical `.html` URLs, including `carta.html?cat=bocadillos`.
- Test nonexistent URLs at the root and several path levels; confirm status 404, correct styling and working recovery links.
- Check CSS, JavaScript, fonts, gallery images, icons and both PDFs.
- Confirm canonical URLs, sitemap, robots and social metadata on the deployed domain.
- Inspect response security headers, compression and cache behavior.
- Verify the map location and actual reservation contact channels with the owner.
- Repeat mobile/keyboard tests and check Safari, Firefox and real devices.
- Measure deployed performance; local Lighthouse scores are not field Core Web Vitals.
- Have the owner verify commercial information and legal/privacy requirements before launch.

## Publication scope

Internal audit captures are deliberately ignored: they can contain machine paths and third-party request parameters. Portfolio screenshots under `docs/screenshots/` are the selected public visual evidence. Font licenses must remain with their corresponding WOFF2 files.

The repository contains source photographs and original PDFs for maintenance. Preserve their rights and verify permission before redistributing replacements. Do not publish credential files, tokens, personal development configuration or local agent/cloud state.
