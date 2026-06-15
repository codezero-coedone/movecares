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

## Cloudflare Pages setup

Attach all hosts above to the same Cloudflare Pages project: `movecares`. The app detects the hostname at runtime and renders the correct surface.

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

## DNS note

The current Cloudflare Pages target is:

- `movecares.pages.dev`

Create or verify these records in Cloudflare DNS, unless the Pages custom-domain screen shows a different validation target:

| Name | Type | Target |
| --- | --- | --- |
| `@` | CNAME | `movecares.pages.dev` |
| `www` | CNAME | `movecares.pages.dev` |
| `busan` | CNAME | `movecares.pages.dev` |
| `haeundae` | CNAME | `movecares.pages.dev` |
| `seomyeon` | CNAME | `movecares.pages.dev` |
| `suyeong` | CNAME | `movecares.pages.dev` |
| `dongnae` | CNAME | `movecares.pages.dev` |

Cloudflare supports CNAME flattening at the apex. Keep proxy enabled unless Pages validation explicitly asks otherwise.
