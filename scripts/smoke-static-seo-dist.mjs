import { access, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const repoRoot = resolve(process.cwd());
const distRoot = join(repoRoot, "dist");
const receiptPath = join(repoRoot, "receipts", "movecares-static-seo-smoke-v2.json");
const expectedOrigin = "https://movecares.com";
const heroImagePath = join(distRoot, "images", "movecares-premium-wellness-hero.webp");
const heroImageUrl = `${expectedOrigin}/images/movecares-premium-wellness-hero.webp`;
const requiredRoutes = [
  "부산-출장마사지",
  "해운대-출장마사지",
  "서면-출장마사지",
  "광안리-출장마사지",
  "동래-출장마사지",
  "부산-출장마사지-예약",
  "부산-출장마사지-가격",
  "부산-호텔방문마사지",
];
const requiredHosts = [
  "https://movecares.com/",
  "https://busan.movecares.com/",
  "https://haeundae.movecares.com/",
  "https://seomyeon.movecares.com/",
  "https://suyeong.movecares.com/",
  "https://dongnae.movecares.com/",
];
const forbiddenPatterns = [
  /TODO_DOMAIN/i,
  /<loc>\/<\/loc>/,
  /window\.location\.origin/,
  /태국미녀/,
  /내상제로/,
  /NF영입/,
  /20대/,
];

const checks = [];
await access(distRoot);
await access(heroImagePath);
const sitemap = await readFile(join(distRoot, "sitemap.xml"), "utf8");
const robots = await readFile(join(distRoot, "robots.txt"), "utf8");
checks.push(assert("sitemap has movecares origin", sitemap.includes(`${expectedOrigin}/`)));
checks.push(assert("robots points sitemap", robots.includes(`Sitemap: ${expectedOrigin}/sitemap.xml`)));
checks.push(assert("sitemap has expanded urls", (sitemap.match(/<url>/g) || []).length >= 30));
checks.push(assert("premium hero image asset exists", true));

for (const host of requiredHosts) {
  checks.push(assert(`sitemap host ${host}`, sitemap.includes(`<loc>${host}</loc>`)));
}

for (const route of requiredRoutes) {
  const file = join(distRoot, route, "index.html");
  const html = await readFile(file, "utf8");
  const canonical = `${expectedOrigin}/${encodeURI(route)}/`;
  checks.push(assert(`${route} title`, /<title>[^<]+무브케어<\/title>/.test(html)));
  checks.push(assert(`${route} h1`, /<h1>[^<]+<\/h1>/.test(html)));
  checks.push(assert(`${route} canonical`, html.includes(`rel="canonical" href="${canonical}"`)));
  checks.push(assert(`${route} og image`, html.includes(`property="og:image" content="${heroImageUrl}"`)));
  checks.push(assert(`${route} twitter image`, html.includes(`name="twitter:image" content="${heroImageUrl}"`)));
  checks.push(assert(`${route} jsonld`, html.includes("application/ld+json")));
  checks.push(assert(`${route} static content`, html.includes("건전 웰니스") && html.includes("전화 문의")));
  checks.push(assert(`${route} no hydration overwrite script`, !html.includes('type="module"')));
  for (const pattern of forbiddenPatterns) {
    checks.push(assert(`${route} no ${pattern}`, !pattern.test(html)));
  }
}

for (const pattern of forbiddenPatterns) {
  checks.push(assert(`sitemap no ${pattern}`, !pattern.test(sitemap)));
  checks.push(assert(`robots no ${pattern}`, !pattern.test(robots)));
}

const passed = checks.every((check) => check.pass);
const receipt = {
  status: passed ? "PASS_STATIC_SEO_DIST_SMOKE" : "FAIL_STATIC_SEO_DIST_SMOKE",
  checkedAt: new Date().toISOString(),
  distRoot,
  expectedOrigin,
  requiredRoutes,
  requiredHosts,
  checks,
  finalJudgment: passed ? "PASS" : "FAIL",
};
await writeFile(receiptPath, JSON.stringify(receipt, null, 2), "utf8");

if (!passed) {
  console.error(JSON.stringify(receipt, null, 2));
  process.exit(1);
}

console.log(`STATIC_SEO_DIST_SMOKE PASS ${requiredRoutes.length} required routes`);

function assert(name, pass) {
  return { name, pass: Boolean(pass) };
}
