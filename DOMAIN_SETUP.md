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

## Vercel setup

Attach all hosts above to the same Vercel project. The app detects the hostname at runtime and renders the correct surface.

The SPA rewrite is already configured in `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
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

Set DNS records according to the deployment provider's instructions. For Vercel, apex and subdomain records are normally added after the domains are attached in the project settings.
