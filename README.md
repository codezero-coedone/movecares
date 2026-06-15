# Movecare landing system

`movecares.com` main site and five regional landing pages built with Vite, React, TypeScript, Tailwind CSS, TanStack Router, and TanStack Query.

## Routes

Local QA routes:

- `/`
- `/landing-index`
- `/busan-chuljang-massage`
- `/haeundae-chuljang-massage`
- `/seomyeon-chuljang-massage`
- `/suyeong-chuljang-massage`
- `/dongnae-chuljang-massage`

Production host routing:

- `https://movecares.com/`
- `https://busan.movecares.com/`
- `https://haeundae.movecares.com/`
- `https://seomyeon.movecares.com/`
- `https://suyeong.movecares.com/`
- `https://dongnae.movecares.com/`

## Commands

```bash
npm install
npm run build
npm run lint
npm run dev -- --port 5176
```

## Notes

- All phone CTAs use `tel:01067825758`.
- No screenshot replay or full-reference-image background is used.
- SEO canonical URLs are fixed to the production domain/subdomain map.
- See `DOMAIN_SETUP.md` for deployment domain wiring.
