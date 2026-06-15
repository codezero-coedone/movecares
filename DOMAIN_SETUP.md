# movecares.com domain routing

This app is a single Vite/TanStack React deployment that serves the main site and five landing pages by hostname.

## Production host map

| Host | Surface |
| --- | --- |
| `movecares.com` | Main Movecare homepage |
| `www.movecares.com` | Optional alias for the main homepage |
| `busan.movecares.com` | 부산 출장 마사지 landing |
| `haeundae.movecares.com` | 해운대 출장 마사지 landing |
| `seomyeon.movecares.com` | 서면 출장 마사지 landing |
| `suyeong.movecares.com` | 수영 출장 마사지 landing |
| `dongnae.movecares.com` | 동래 출장 마사지 landing |

## Cloudflare runtime setup

The React app is deployed to Cloudflare Pages project `movecares`.
Production traffic is currently served by a Cloudflare Worker proxy on the custom domains.
The app detects the browser hostname at runtime and renders the correct surface.

The SPA rewrite is already configured in `public/_redirects`:

```txt
/* /index.html 200
```

## Canonical URLs

The canonical URLs are production-fixed:

- `https://movecares.com/`
- `https://busan.movecares.com/`
- `https://haeundae.movecares.com/`
- `https://seomyeon.movecares.com/`
- `https://suyeong.movecares.com/`
- `https://dongnae.movecares.com/`

Local QA routes remain available:

- `/busan-chuljang-massage`
- `/haeundae-chuljang-massage`
- `/seomyeon-chuljang-massage`
- `/suyeong-chuljang-massage`
- `/dongnae-chuljang-massage`
- `/landing-index`

## DNS and Worker note

Current Pages origin:

- `movecares.pages.dev`

Current public-domain serving path:

```txt
custom domain DNS -> movecares-dns-anchor Cloudflare Tunnel DNS record -> movecares-domain-proxy Worker route -> movecares.pages.dev
```

The Worker script lives at:

- `workers/movecares-domain-proxy.js`

The Worker is deployed with these routes:

- `movecares.com/*`
- `www.movecares.com/*`
- `busan.movecares.com/*`
- `haeundae.movecares.com/*`
- `seomyeon.movecares.com/*`
- `suyeong.movecares.com/*`
- `dongnae.movecares.com/*`

The Worker adds this response header for smoke checks:

- `x-movecares-proxy: cloudflare-worker`

Note: Cloudflare Pages custom-domain records may still show `pending` because DNS points to the tunnel anchor rather than directly to `movecares.pages.dev`. Public traffic is still live through the Worker route.
