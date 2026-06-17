import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const distRoot = resolve(repoRoot, "dist");
const siteOrigin = "https://movecares.com";
const generatedAt = new Date().toISOString();
const phoneDisplay = "010-6782-5758";
const phoneHref = "tel:01067825758";

const canonicalHosts = [
  "https://movecares.com/",
  "https://busan.movecares.com/",
  "https://haeundae.movecares.com/",
  "https://seomyeon.movecares.com/",
  "https://suyeong.movecares.com/",
  "https://dongnae.movecares.com/",
];

const regionNames = [
  "부산",
  "해운대",
  "서면",
  "광안리",
  "수영",
  "동래",
  "남포동",
  "사상",
  "연산동",
  "기장",
  "사하",
  "센텀",
  "부산진구",
  "금정구",
  "북구",
  "강서구",
  "영도",
  "송정",
  "마린시티",
  "광복동",
];

const servicePages = [
  ["부산-아로마마사지", "부산 아로마마사지", "부산 아로마마사지 방문 상담", "은은한 아로마 오일 중심의 휴식 관리 상담"],
  ["부산-스포츠마사지", "부산 스포츠마사지", "부산 스포츠마사지 방문 상담", "활동량이 많은 이용자를 위한 컨디션 관리 상담"],
  ["부산-목어깨마사지", "부산 목어깨마사지", "부산 목어깨마사지 방문 상담", "목과 어깨 피로 중심의 방문 관리 상담"],
  ["부산-호텔방문마사지", "부산 호텔 방문 마사지", "부산 호텔 방문 마사지 예약 안내", "숙소와 호텔 방문 가능 여부를 사전에 확인하는 예약 상담"],
  ["부산-방문마사지", "부산 방문마사지", "부산 방문마사지 예약 상담", "자택, 숙소, 호텔 이용 전 확인사항을 안내하는 방문 상담"],
  ["부산-출장마사지-가격", "부산 출장마사지 가격", "부산 출장마사지 가격 상담", "지역, 시간, 관리 유형에 따른 예약 전 요금 상담"],
  ["부산-출장마사지-예약", "부산 출장마사지 예약", "부산 출장마사지 예약 방법", "전화 문의부터 방문 전 확인까지 이어지는 예약 안내"],
  ["부산-마사지-예약상담", "부산 마사지 예약 상담", "부산 마사지 예약 상담", "건전한 웰니스 목적의 방문 관리 예약 상담"],
].map(([slug, keyword, h1, intent]) => ({ slug, keyword, h1, intent }));

const seoPages = [
  ...regionNames.map((region) => ({
    slug: `${region}-출장마사지`,
    keyword: `${region} 출장마사지`,
    h1: `${region} 출장마사지 예약 상담`,
    intent: `${region} 인근 자택, 숙소, 호텔 방문 가능 여부와 운영 시간을 전화로 확인하는 상담`,
    region,
  })),
  ...servicePages,
];

const faqItems = [
  ["부산 출장마사지 예약은 어떻게 하나요?", "전화 문의로 이용 지역, 희망 시간, 장소, 관리 유형을 먼저 확인한 뒤 예약 가능 여부를 안내합니다."],
  ["해운대와 서면도 가능한가요?", "해운대, 서면, 광안리, 동래, 남포동 등 주요 지역은 위치와 시간에 따라 상담 후 확인합니다."],
  ["호텔 방문도 가능한가요?", "숙소와 호텔은 방문 가능 여부와 현장 규정을 먼저 확인한 뒤 상담하는 것을 기준으로 합니다."],
  ["불법 서비스도 제공하나요?", "제공하지 않습니다. 무브케어는 건전한 웰니스 방문 관리 상담 기준으로만 안내합니다."],
];

const sourceIndex = await readFile(join(distRoot, "index.html"), "utf8");
const styleTags = extractStyleTags(sourceIndex);

for (const page of seoPages) {
  const outputPath = join(distRoot, page.slug, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderSeoPage(page, styleTags), "utf8");
}

await writeFile(join(distRoot, "robots.txt"), renderRobots(), "utf8");
await writeFile(join(distRoot, "sitemap.xml"), renderSitemap(), "utf8");
await mkdir(join(repoRoot, "receipts"), { recursive: true });
await writeFile(
  join(repoRoot, "receipts", "movecares-static-seo-network-v2.json"),
  JSON.stringify(
    {
      status: "PASS_STATIC_SEO_NETWORK_GENERATED",
      generatedAt,
      siteOrigin,
      officialRemote: "https://github.com/codezero-coedone/movecares.git",
      canonicalHostCount: canonicalHosts.length,
      staticSeoPageCount: seoPages.length,
      sitemapLocCount: canonicalHosts.length + seoPages.length,
      routes: seoPages.map((page) => ({ slug: page.slug, url: canonicalFor(page), keyword: page.keyword })),
      safety: {
        legalWellnessFraming: true,
        fakeAvailabilityClaim: false,
        adDependency: false,
      },
    },
    null,
    2,
  ),
  "utf8",
);

console.log(`STATIC_SEO_NETWORK PASS ${seoPages.length} pages ${siteOrigin}`);

function renderSeoPage(page, styleTags) {
  const canonical = canonicalFor(page);
  const title = `${page.h1} | 무브케어`;
  const description = `${page.keyword} 예약 상담 안내. 부산 방문 마사지 가능 지역, 운영 시간, 숙소 방문 가능 여부, 이용 전 확인사항을 건전 웰니스 기준으로 정리했습니다.`;
  const linkedRegions = seoPages
    .filter((item) => item.region && item.slug !== page.slug)
    .slice(0, 12)
    .map((item) => `<a href="/${escapeAttr(item.slug)}/">${escapeHtml(item.keyword)}</a>`)
    .join("");
  const linkedServices = servicePages
    .filter((item) => item.slug !== page.slug)
    .map((item) => `<a href="/${escapeAttr(item.slug)}/">${escapeHtml(item.keyword)}</a>`)
    .join("");
  const jsonLd = [
    organizationJsonLd(),
    serviceJsonLd(page, description),
    breadcrumbJsonLd(page),
    faqJsonLd(),
  ];

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    <link rel="sitemap" type="application/xml" href="${siteOrigin}/sitemap.xml" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    <meta name="twitter:card" content="summary_large_image" />
    ${styleTags}
    <style>
      body { margin: 0; background: #f8f3eb; color: #23262b; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      a { color: inherit; }
      .seo-static-header { position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; gap: 18px; align-items: center; padding: 18px clamp(18px, 5vw, 72px); background: rgba(255, 252, 247, 0.94); border-bottom: 1px solid rgba(35, 38, 43, 0.1); backdrop-filter: blur(12px); }
      .seo-static-logo { font-weight: 900; text-decoration: none; letter-spacing: 0.02em; }
      .seo-static-header nav { display: flex; flex-wrap: wrap; gap: 12px; font-size: 14px; color: #62584f; }
      .seo-static-header nav a { text-decoration: none; font-weight: 700; }
      .seo-static-main { width: min(1080px, calc(100% - 32px)); margin: 0 auto; padding: 44px 0 56px; }
      .seo-static-hero { padding: clamp(28px, 6vw, 72px); border: 1px solid rgba(35, 38, 43, 0.12); border-radius: 28px; background: linear-gradient(135deg, #fffaf2, #efe3d3); box-shadow: 0 24px 80px rgba(35, 38, 43, 0.08); }
      .seo-static-eyebrow { margin: 0 0 14px; color: #9b6b3d; font-weight: 900; letter-spacing: 0.08em; font-size: 13px; text-transform: uppercase; }
      h1 { margin: 0; font-size: clamp(34px, 6vw, 72px); line-height: 1.04; letter-spacing: -0.02em; }
      h2 { margin: 0 0 14px; font-size: clamp(22px, 3vw, 34px); letter-spacing: -0.01em; }
      p { line-height: 1.78; color: #4f463d; }
      section { margin-top: 34px; }
      ul { margin: 0; padding-left: 20px; line-height: 1.9; color: #4f463d; }
      .seo-static-call { display: inline-flex; margin-top: 18px; padding: 14px 20px; border-radius: 999px; background: #23262b; color: #fff; text-decoration: none; font-weight: 900; }
      .seo-static-linkgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
      .seo-static-linkgrid a { padding: 14px 16px; border: 1px solid rgba(35, 38, 43, 0.1); border-radius: 16px; background: rgba(255, 255, 255, 0.76); text-decoration: none; font-weight: 800; color: #3b342e; }
      details { border: 1px solid rgba(35, 38, 43, 0.1); border-radius: 18px; background: rgba(255, 255, 255, 0.72); padding: 16px 18px; margin-bottom: 10px; }
      summary { cursor: pointer; font-weight: 900; }
      .seo-static-footer { padding: 28px 18px; text-align: center; color: #6f655b; border-top: 1px solid rgba(35, 38, 43, 0.08); }
      @media (max-width: 720px) { .seo-static-header { align-items: flex-start; flex-direction: column; } .seo-static-main { padding-top: 24px; } }
    </style>
    ${jsonLd.map((entry) => `<script type="application/ld+json">${escapeScript(JSON.stringify(entry))}</script>`).join("\n    ")}
  </head>
  <body>
    <header class="seo-static-header">
      <a href="/" class="seo-static-logo">무브케어</a>
      <nav aria-label="주요 SEO 페이지">
        <a href="/부산-출장마사지/">부산 출장마사지</a>
        <a href="/해운대-출장마사지/">해운대</a>
        <a href="/서면-출장마사지/">서면</a>
        <a href="/부산-출장마사지-예약/">예약</a>
      </nav>
    </header>
    <main class="seo-static-main">
      <section class="seo-static-hero">
        <p class="seo-static-eyebrow">${escapeHtml(page.keyword)}</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.intent)}을 기준으로 안내합니다. 과장된 가능 지역이나 허위 후기는 사용하지 않고, 예약 전 확인 가능한 정보만 정리합니다.</p>
        <a class="seo-static-call" href="${phoneHref}">전화 문의 ${phoneDisplay}</a>
      </section>
      <section>
        <h2>${escapeHtml(page.keyword)} 이용 전 확인</h2>
        <p>${escapeHtml(page.keyword)} 검색 이용자는 위치, 방문 가능 시간, 관리 유형, 숙소 방문 가능 여부를 빠르게 확인하려는 경우가 많습니다. 무브케어는 부산 방문 마사지 예약 상담 흐름에 맞춰 지역과 시간, 이용 장소를 먼저 확인합니다.</p>
        <ul>
          <li>방문 지역과 세부 주소 확인</li>
          <li>희망 시간과 당일 예약 가능 여부 상담</li>
          <li>자택, 숙소, 호텔 방문 규정 확인</li>
          <li>건전 웰니스 방문 관리 기준 안내</li>
        </ul>
      </section>
      <section>
        <h2>부산 지역별 출장마사지 안내</h2>
        <div class="seo-static-linkgrid">${linkedRegions}</div>
      </section>
      <section>
        <h2>서비스별 예약 상담</h2>
        <div class="seo-static-linkgrid">${linkedServices}</div>
      </section>
      <section>
        <h2>FAQ</h2>
        ${faqItems.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("")}
      </section>
    </main>
    <footer class="seo-static-footer">
      <p>무브케어 | 부산 출장 마사지 예약 상담 | 불법·퇴폐 서비스 제공 안 함</p>
    </footer>
  </body>
</html>
`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
}

function renderSitemap() {
  const canonicalUrls = [
    ...canonicalHosts,
    ...seoPages.map((page) => canonicalFor(page)),
  ];
  const urls = canonicalUrls
    .map((url, index) => `  <url>
    <loc>${url}</loc>
    <lastmod>${generatedAt.slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${index === 0 ? "1.0" : "0.8"}</priority>
  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function extractStyleTags(html) {
  return [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map((match) => match[0]).join("\n    ");
}

function canonicalFor(page) {
  return `${siteOrigin}/${encodeURI(page.slug)}/`;
}

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "부산 무브케어 출장마사지",
    telephone: phoneDisplay,
    url: siteOrigin,
    description: "부산 출장 마사지 예약 상담과 건전 웰니스 방문 관리 안내",
  };
}

function serviceJsonLd(page, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.keyword,
    serviceType: "방문 마사지 예약 상담",
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "부산 무브케어 출장마사지",
      telephone: phoneDisplay,
      url: siteOrigin,
    },
    areaServed: page.region || "부산",
    url: canonicalFor(page),
    description,
  };
}

function breadcrumbJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteOrigin },
      { "@type": "ListItem", position: 2, name: page.keyword, item: canonicalFor(page) },
    ],
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function escapeScript(value) {
  return value.replaceAll("</script", "<\\/script");
}
