const PAGES_ORIGIN = "https://movecares.pages.dev";
const ROOT_HOST = "movecares.com";
const WWW_HOST = "www.movecares.com";
const PHONE_DISPLAY = "010-6782-5758";
const LANDING_HOSTS = [
  "busan.movecares.com",
  "haeundae.movecares.com",
  "seomyeon.movecares.com",
  "suyeong.movecares.com",
  "dongnae.movecares.com",
];
const STATIC_SEO_SLUGS = [
  "부산-출장마사지",
  "해운대-출장마사지",
  "서면-출장마사지",
  "광안리-출장마사지",
  "수영-출장마사지",
  "동래-출장마사지",
  "남포동-출장마사지",
  "사상-출장마사지",
  "연산동-출장마사지",
  "기장-출장마사지",
  "사하-출장마사지",
  "센텀-출장마사지",
  "부산진구-출장마사지",
  "금정구-출장마사지",
  "북구-출장마사지",
  "강서구-출장마사지",
  "영도-출장마사지",
  "송정-출장마사지",
  "마린시티-출장마사지",
  "광복동-출장마사지",
  "부산-아로마마사지",
  "부산-스포츠마사지",
  "부산-목어깨마사지",
  "부산-호텔방문마사지",
  "부산-방문마사지",
  "부산-출장마사지-가격",
  "부산-출장마사지-예약",
  "부산-마사지-예약상담",
];

const COMMON_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "부산 무브케어 출장마사지",
  telephone: PHONE_DISPLAY,
  serviceType: ["방문 마사지", "웰니스 방문 관리"],
};

const HEAD_BY_KEY = {
  home: {
    title: "부산출장마사지 | 무브케어 방문 마사지 예약",
    description: "부산 출장 마사지와 방문 마사지 예약 상담을 안내하는 무브케어 공식 홈페이지입니다. 지역별 상담, 전화 문의, 예약 절차를 확인해 보세요.",
    canonical: "https://movecares.com/",
    areaServed: ["부산", "해운대", "서면", "수영", "동래"],
    faqs: [
      ["무브케어는 어떤 서비스를 안내하나요?", "휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어 상담을 안내합니다."],
      ["부산 어느 지역 상담이 가능한가요?", "해운대, 서면, 수영, 동래 등 부산 주요 생활권을 중심으로 지역별 가능 여부를 확인합니다."],
      ["예약 전 무엇을 확인하나요?", "희망 지역, 시간, 이용 목적, 관리 유형을 전화 상담으로 확인합니다."],
      ["전화 상담 정보는 어떻게 관리되나요?", "상담에 필요한 최소 정보만 확인하며 개인정보 보호를 우선합니다."],
    ],
  },
  busan: {
    title: "부산 출장마사지 | 해운대·서면·수영 방문 마사지 예약",
    description: "부산 출장 마사지 예약 상담 안내입니다. 해운대, 서면, 수영, 동래 등 주요 지역 확인과 전화 문의, 예약 절차를 확인해 보세요.",
    canonical: "https://busan.movecares.com/",
    areaServed: ["부산", "해운대", "서면", "수영", "동래", "기장"],
    faqs: [
      ["서비스는 합법적으로 운영되나요?", "네. 무브케어는 휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어 안내만 제공합니다."],
      ["예약은 어떻게 진행되나요?", "전화로 지역과 희망 시간을 확인한 뒤 가능한 일정과 이용 방식을 안내합니다."],
      ["부산 어느 지역을 먼저 확인하면 되나요?", "해운대, 서면, 수영, 동래 등 현재 계신 생활권과 희망 시간을 알려주시면 방문 가능 여부를 먼저 확인합니다."],
      ["서비스 범위는 어떻게 제한되나요?", "무브케어는 휴식과 피로 회복 목적의 합법 웰니스 방문 케어만 안내하며, 불법·퇴폐 서비스는 제공하지 않습니다."],
    ],
  },
  haeundae: {
    title: "해운대 출장마사지 | 부산 무브케어 방문 마사지 상담",
    description: "해운대 출장 마사지 예약 상담 안내. 센텀, 마린시티, 장산, 우동, 중동 생활권 방문 관리와 전화 문의를 확인해 보세요.",
    canonical: "https://haeundae.movecares.com/",
    areaServed: ["해운대", "센텀", "마린시티", "장산", "우동", "중동"],
    faqs: [
      ["예약은 어떻게 하나요?", "전화 문의 후 지역과 시간을 확인해 예약 가능 여부를 안내합니다."],
      ["몇 시까지 예약 가능한가요?", "실제 방문 가능 시간은 지역과 일정에 따라 전화 상담 시 안내합니다."],
      ["추가 비용이 발생하나요?", "지역과 이용 조건에 따라 달라질 수 있어 상담 시 사전에 안내합니다."],
      ["해운대 어느 생활권까지 상담하나요?", "센텀, 마린시티, 장산, 우동, 중동 등 해운대권을 중심으로 현재 위치와 시간을 확인합니다."],
    ],
  },
  seomyeon: {
    title: "서면 출장마사지 | 부산 방문 마사지 예약 상담",
    description: "서면 출장 마사지 상담 페이지입니다. 부산진구, 전포, 부전, 범천 등 도심 생활권 방문 케어와 전화 상담을 안내합니다.",
    canonical: "https://seomyeon.movecares.com/",
    areaServed: ["서면", "부산진구", "전포", "부전", "범천"],
    faqs: [
      ["서면 중심권도 빠른 상담이 가능한가요?", "서면, 전포, 부전, 범천 등 부산진구 생활권을 기준으로 방문 가능 여부를 확인합니다."],
      ["도심 일정 중에도 예약 상담이 가능한가요?", "희망 시간과 장소를 알려주시면 일정 전후로 가능한 이용 방식을 안내합니다."],
      ["서비스는 합법적으로 운영되나요?", "네. 무브케어는 휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어 안내만 제공합니다."],
      ["예약은 어떻게 진행되나요?", "전화로 지역과 희망 시간을 확인한 뒤 가능한 일정과 이용 방식을 안내합니다."],
    ],
  },
  suyeong: {
    title: "수영 출장마사지 | 프리미엄 방문 케어 상담",
    description: "수영 출장 마사지 예약 상담 페이지입니다. 광안리, 남천, 민락 등 수영 생활권 방문 케어와 FAQ를 확인해 보세요.",
    canonical: "https://suyeong.movecares.com/",
    areaServed: ["수영", "광안리", "남천", "민락", "망미"],
    faqs: [
      ["서비스는 합법적으로 운영되나요?", "네. 휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어만 안내합니다."],
      ["수영 생활권은 어디까지 확인하나요?", "수영, 광안리, 남천, 민락 등 현재 위치를 기준으로 방문 가능 여부를 확인합니다."],
      ["예약은 언제까지 가능한가요?", "실제 예약 가능 시간은 지역별 일정에 따라 전화 상담 시 안내합니다."],
      ["결제는 어떻게 하나요?", "결제 방식은 상담 시 이용 조건과 함께 안내합니다."],
      ["관리 유형은 선택이 가능한가요?", "가능 여부는 일정과 지역 상황에 따라 상담 시 확인합니다."],
    ],
  },
  dongnae: {
    title: "동래 출장마사지 | 빠른 전화 문의 방문 마사지",
    description: "동래 출장 마사지 전화 문의 중심 랜딩 페이지입니다. 온천장, 명륜, 사직 생활권 지역 안내와 빠른 전화 CTA를 제공합니다.",
    canonical: "https://dongnae.movecares.com/",
    areaServed: ["동래", "온천장", "명륜", "사직", "안락"],
    faqs: [
      ["예약은 어떻게 하나요?", "전화 문의 후 지역과 시간을 확인하면 예약 가능 여부를 안내합니다."],
      ["서비스 시간은 얼마나 되나요?", "이용 시간은 상담 시 희망 일정과 컨디션을 기준으로 안내합니다."],
      ["이용 요금은 어떻게 되나요?", "지역과 이용 조건에 따라 달라질 수 있어 전화 상담으로 안내합니다."],
      ["동래 어느 지역을 확인하나요?", "동래, 온천장, 명륜, 사직 등 현재 위치와 희망 시간을 기준으로 방문 가능 여부를 안내합니다."],
    ],
  },
  landingIndex: {
    title: "랜딩 페이지 5종 | 부산 무브케어 QA",
    description: "부산 무브케어 지역별 랜딩 페이지 QA 인덱스입니다.",
    canonical: "https://movecares.com/landing-index",
    robots: "noindex, nofollow",
    areaServed: ["부산"],
    faqs: [],
    omitJsonLd: true,
  },
};

const KEY_BY_HOST = {
  [ROOT_HOST]: "home",
  [WWW_HOST]: "home",
  "busan.movecares.com": "busan",
  "haeundae.movecares.com": "haeundae",
  "seomyeon.movecares.com": "seomyeon",
  "suyeong.movecares.com": "suyeong",
  "dongnae.movecares.com": "dongnae",
};

const KEY_BY_PATH = {
  "/busan-chuljang-massage": "busan",
  "/haeundae-chuljang-massage": "haeundae",
  "/seomyeon-chuljang-massage": "seomyeon",
  "/suyeong-chuljang-massage": "suyeong",
  "/dongnae-chuljang-massage": "dongnae",
  "/landing-index": "landingIndex",
};

function canonicalHost(hostname) {
  return hostname === WWW_HOST ? ROOT_HOST : hostname;
}

function sitemapForHost(hostname) {
  const host = canonicalHost(hostname);
  const urls = host === ROOT_HOST
    ? [
        `https://${ROOT_HOST}/`,
        ...LANDING_HOSTS.map((item) => `https://${item}/`),
        ...STATIC_SEO_SLUGS.map((slug) => `https://${ROOT_HOST}/${encodeURI(slug)}/`),
      ]
    : [`https://${host}/`];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
}

function headConfigFor(hostname, pathname) {
  const key = KEY_BY_PATH[pathname] || KEY_BY_HOST[hostname] || "home";
  return HEAD_BY_KEY[key] || HEAD_BY_KEY.home;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonScript(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function buildHead(config) {
  const robots = config.robots || "index, follow";
  const business = {
    ...COMMON_BUSINESS,
    url: config.canonical,
    areaServed: config.areaServed,
    description: config.description,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const lines = [
    `<title>${escapeHtml(config.title)}</title>`,
    `<meta name="description" content="${escapeHtml(config.description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(config.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(config.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(config.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtml(config.canonical)}" />`,
  ];

  if (!config.omitJsonLd) {
    lines.push(`<script type="application/ld+json" data-worker-seo="faq">${jsonScript(faq)}</script>`);
    lines.push(`<script type="application/ld+json" data-worker-seo="business">${jsonScript(business)}</script>`);
  }

  return `\n    ${lines.join("\n    ")}\n`;
}

function stripManagedHead(html) {
  return html
    .replace(/<title[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+(?:name|property)=["'](?:description|robots|og:title|og:description|og:type|og:url)["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
}

function injectHead(html, config) {
  const cleanHtml = stripManagedHead(html);
  const managedHead = buildHead(config);
  if (cleanHtml.includes("</head>")) return cleanHtml.replace("</head>", `${managedHead}</head>`);
  return `${managedHead}${cleanHtml}`;
}

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
    const host = incomingUrl.hostname.toLowerCase();

    if (incomingUrl.pathname === "/robots.txt") {
      return new Response(`User-agent: *\nAllow: /\n\nSitemap: https://${canonicalHost(host)}/sitemap.xml\n`, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-movecares-proxy": "cloudflare-worker",
        },
      });
    }

    if (incomingUrl.pathname === "/sitemap.xml") {
      return new Response(sitemapForHost(host), {
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-movecares-proxy": "cloudflare-worker",
        },
      });
    }

    const upstreamUrl = new URL(incomingUrl.pathname + incomingUrl.search, PAGES_ORIGIN);
    const upstreamRequest = new Request(upstreamUrl, request);
    upstreamRequest.headers.set("x-movecares-host", incomingUrl.hostname);

    const response = await fetch(upstreamRequest);
    const headers = new Headers(response.headers);
    headers.delete("x-robots-tag");
    headers.set("x-movecares-proxy", "cloudflare-worker");

    const contentType = headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    const html = await response.text();
    const config = headConfigFor(host, incomingUrl.pathname);
    const injectedHtml = injectHead(html, config);
    headers.delete("content-length");
    headers.set("content-type", "text/html; charset=utf-8");

    return new Response(injectedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
