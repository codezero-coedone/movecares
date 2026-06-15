export const PHONE_DISPLAY = "010-6782-5758";
export const PHONE_TEL = "tel:01067825758";
export const BRAND = "부산 무브케어 출장마사지";
export const BRAND_SHORT = "무브케어";
export const BRAND_SUB = "PREMIUM HOME MASSAGE";
export const ROOT_DOMAIN = "movecares.com";
export const ROOT_ORIGIN = `https://${ROOT_DOMAIN}`;

export type ServiceItem = {
  title: string;
  body: string;
  note?: string;
  icon: "leaf" | "body" | "lotus" | "hand" | "shield" | "clock" | "home" | "person" | "calendar" | "phone" | "lock" | "map";
};

export type StepItem = {
  title: string;
  body: string;
  icon: ServiceItem["icon"];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type LandingPage = {
  id: "lp01" | "lp02" | "lp03" | "lp04" | "lp05";
  route: string;
  subdomain: "busan" | "haeundae" | "seomyeon" | "suyeong" | "dongnae";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  sub: string;
  body: string;
  chips: string[];
  services: ServiceItem[];
  trust: ServiceItem[];
  steps: StepItem[];
  faqs: FaqItem[];
  variant: "representative" | "premium" | "editorial" | "trust" | "minimal";
};

const commonServices: ServiceItem[] = [
  { title: "아로마 관리", body: "은은한 아로마 케어로 긴장 완화와 편안한 휴식을 돕습니다.", note: "이용 시간 조율 가능", icon: "leaf" },
  { title: "스포츠 관리", body: "활동적인 일상 회복을 위한 근육 이완 중심의 웰니스 케어입니다.", note: "상담 시 안내", icon: "body" },
  { title: "릴렉스 관리", body: "하루 피로를 부드럽게 풀어주는 안정적인 휴식 관리입니다.", note: "맞춤 상담 가능", icon: "lotus" },
  { title: "피로 회복 관리", body: "목, 어깨, 허리 등 일상 피로가 많은 부위에 집중합니다.", note: "컨디션별 조율", icon: "hand" },
];

const safeFaqs: FaqItem[] = [
  { q: "서비스는 합법적으로 운영되나요?", a: "네. 무브케어는 휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어 안내만 제공합니다." },
  { q: "예약은 어떻게 진행되나요?", a: "전화로 지역과 희망 시간을 확인한 뒤 가능한 일정과 이용 방식을 안내합니다." },
  { q: "관리 시간은 얼마나 걸리나요?", a: "상담 시 희망 시간과 컨디션을 확인해 적절한 이용 시간을 안내합니다." },
  { q: "비용은 어떻게 되나요?", a: "지역, 시간, 관리 종류에 따라 달라질 수 있어 전화 상담으로 안내합니다." },
];

export const landingPages: LandingPage[] = [
  {
    id: "lp01",
    route: "/busan-chuljang-massage",
    subdomain: "busan",
    title: "부산 출장 마사지 | 부산 방문 마사지 예약 안내",
    description: "부산 출장 마사지 예약 안내 페이지입니다. 지역 확인, 전화 문의, 서비스 안내와 예약 절차를 확인해 보세요.",
    h1: "부산 출장 마사지",
    eyebrow: "집에서 받는 프리미엄 케어",
    sub: "부산 주요 지역 방문 마사지 예약 상담을 안내합니다.",
    body: "건전한 웰니스 방문 관리 기준으로 지역, 시간, 코스 가능 여부를 전화 상담 시 확인합니다.",
    chips: ["해운대", "서면", "수영", "동래", "기장"],
    services: commonServices,
    trust: [
      { title: "건전 운영 기준", body: "웰니스 목적 안내", icon: "shield" },
      { title: "방문 관리 상담", body: "코스별 이용 안내", icon: "person" },
      { title: "개인정보 보호", body: "상담 정보 안전 관리", icon: "lock" },
      { title: "운영 시간 확인", body: "예약 가능 여부 안내", icon: "clock" },
    ],
    steps: [
      { title: "상담 문의", body: "전화로 지역과 시간을 알려주세요.", icon: "phone" },
      { title: "예약 확정", body: "가능 일정 확인 후 예약을 확정합니다.", icon: "calendar" },
      { title: "관리사 방문", body: "약속 시간에 맞춰 방문합니다.", icon: "person" },
      { title: "맞춤 관리", body: "컨디션에 맞춰 케어를 진행합니다.", icon: "home" },
    ],
    faqs: safeFaqs,
    variant: "representative",
  },
  {
    id: "lp02",
    route: "/haeundae-chuljang-massage",
    subdomain: "haeundae",
    title: "해운대 출장 마사지 | 부산 방문 마사지 상담 안내",
    description: "해운대 출장 마사지 예약 상담 안내. 부산 주요 지역 방문 관리, 전화 문의와 서비스 안내를 확인해 보세요.",
    h1: "해운대 출장 마사지",
    eyebrow: "프리미엄 홈케어 웰니스",
    sub: "해운대 및 부산 주요 지역에서 편안한 웰니스 방문 관리를 안내합니다.",
    body: "지역과 시간을 먼저 확인하고, 고객님의 일정에 맞는 방문 케어 상담을 도와드립니다.",
    chips: ["해운대", "서면", "수영", "동래", "남포", "사상", "부산진구", "연제구", "기장"],
    services: commonServices,
    trust: [
      { title: "검증된 전문 관리사", body: "1:1 맞춤 안내", icon: "shield" },
      { title: "24시간 예약 가능", body: "언제든 빠른 확인", icon: "clock" },
      { title: "안심 & 프라이빗", body: "상담 정보 보호", icon: "lock" },
      { title: "고객 맞춤 케어", body: "컨디션별 조율", icon: "lotus" },
    ],
    steps: [
      { title: "전화 문의", body: "010-6782-5758로 상담합니다.", icon: "phone" },
      { title: "지역 확인", body: "해운대 및 방문 가능 지역을 확인합니다.", icon: "map" },
      { title: "시간 조율", body: "희망 이용 시간을 조율합니다.", icon: "calendar" },
      { title: "방문 케어", body: "예약된 장소에서 안내된 케어를 진행합니다.", icon: "home" },
    ],
    faqs: [
      { q: "예약은 어떻게 하나요?", a: "전화 문의 후 지역과 시간을 확인해 예약 가능 여부를 안내합니다." },
      { q: "몇 시까지 예약 가능한가요?", a: "상담은 24시간 가능하며 실제 방문 가능 시간은 지역과 일정에 따라 안내합니다." },
      { q: "추가 비용이 발생하나요?", a: "지역과 이용 조건에 따라 달라질 수 있어 상담 시 사전에 안내합니다." },
      { q: "출장 가능 지역은 어디인가요?", a: "해운대, 서면, 수영, 동래 등 부산 주요 지역을 중심으로 상담합니다." },
    ],
    variant: "premium",
  },
  {
    id: "lp03",
    route: "/seomyeon-chuljang-massage",
    subdomain: "seomyeon",
    title: "서면 출장 마사지 | 부산 방문 마사지 상담 안내",
    description: "서면 출장 마사지 상담 페이지입니다. 부산 중심권 방문 케어, 지역 확인, 예약 절차와 전화 상담을 안내합니다.",
    h1: "서면 출장 마사지",
    eyebrow: "도심 속 편안한 방문 케어",
    sub: "서면과 부산 중심 지역에서 이동 없이 받는 프리미엄 웰니스 상담.",
    body: "복잡한 이동 없이 원하는 장소와 시간을 확인하고, 안전한 전화 상담으로 예약을 도와드립니다.",
    chips: ["서면", "부산진구", "연제구", "수영", "동래", "해운대", "남포"],
    services: [
      { title: "빠른 상담", body: "친절하고 신속한 1:1 전화 안내를 제공합니다.", icon: "phone" },
      { title: "방문 케어", body: "원하는 장소로 방문 가능한 일정을 확인합니다.", icon: "home" },
      { title: "웰니스 안내", body: "체계적인 방문 관리 범위를 안내합니다.", icon: "person" },
      { title: "간편 예약", body: "전화 한 번으로 지역과 시간을 조율합니다.", icon: "calendar" },
    ],
    trust: [
      { title: "부산 중심권 상담", body: "서면 인근 빠른 확인", icon: "map" },
      { title: "운영 시간 상담", body: "예약 가능 여부 안내", icon: "clock" },
      { title: "프라이버시 보호", body: "상담 정보 보호", icon: "lock" },
      { title: "합법 웰니스", body: "안전한 방문 케어", icon: "shield" },
    ],
    steps: [
      { title: "상담 신청", body: "전화로 문의를 남겨주세요.", icon: "phone" },
      { title: "시간 & 지역 확인", body: "원하는 장소와 시간을 확인합니다.", icon: "calendar" },
      { title: "방문 & 케어", body: "예약된 장소에서 편안한 케어를 시작합니다.", icon: "home" },
    ],
    faqs: safeFaqs,
    variant: "editorial",
  },
  {
    id: "lp04",
    route: "/suyeong-chuljang-massage",
    subdomain: "suyeong",
    title: "수영 출장 마사지 | 신속 방문 케어 상담",
    description: "수영 출장 마사지 예약 상담 페이지입니다. 지역 안내, 서비스 소개, 예약 방법과 FAQ를 확인해 보세요.",
    h1: "수영 출장 마사지",
    eyebrow: "건전한 웰니스 방문 케어",
    sub: "바쁜 일정 속, 이동 없이 받는 전문 케어.",
    body: "수영과 부산 주요 지역에서 방문 가능 여부를 빠르게 확인하고 예약 상담을 안내합니다.",
    chips: ["해운대", "서면", "수영", "동래", "남포", "사상", "부산진구", "연제구", "기장", "사하"],
    services: [
      { title: "건전 운영 안내", body: "웰니스 목적의 서비스 범위를 안내합니다.", icon: "shield" },
      { title: "방문 관리 상담", body: "상담 후 적합한 관리 일정을 안내합니다.", icon: "person" },
      { title: "편리한 방문 케어", body: "원하시는 장소로 방문 가능 여부를 확인합니다.", icon: "home" },
      { title: "유연한 예약", body: "원하시는 시간에 맞춘 상담을 도와드립니다.", icon: "clock" },
    ],
    trust: [
      { title: "건전 운영 기준", body: "웰니스 상담 안내", icon: "shield" },
      { title: "1:1 맞춤", body: "컨디션별 상담", icon: "person" },
      { title: "신속 방문", body: "지역 확인 후 안내", icon: "map" },
      { title: "상담 가능", body: "24시간 문의", icon: "phone" },
    ],
    steps: [
      { title: "전화 문의", body: "전화 또는 버튼으로 문의합니다.", icon: "phone" },
      { title: "시간 및 지역 확인", body: "방문 가능한 지역과 시간을 확인합니다.", icon: "map" },
      { title: "방문 일정 안내", body: "일정에 맞춰 방문 가능 여부를 안내합니다.", icon: "person" },
      { title: "방문 및 케어", body: "예약 장소에서 편안한 케어를 진행합니다.", icon: "home" },
    ],
    faqs: [
      { q: "서비스는 합법적으로 운영되나요?", a: "네. 휴식과 피로 회복을 위한 합법적인 웰니스 방문 케어만 안내합니다." },
      { q: "어떤 장소에서 받을 수 있나요?", a: "자택, 숙소 등 상담 시 확인된 장소 기준으로 가능 여부를 안내합니다." },
      { q: "예약은 언제까지 가능한가요?", a: "상담은 24시간 가능하며 실제 예약 가능 시간은 지역별 일정에 따라 안내합니다." },
      { q: "결제는 어떻게 하나요?", a: "결제 방식은 상담 시 이용 조건과 함께 안내합니다." },
      { q: "테라피스트는 남성/여성 선택이 가능한가요?", a: "가능 여부는 일정과 지역 상황에 따라 상담 시 확인합니다." },
    ],
    variant: "trust",
  },
  {
    id: "lp05",
    route: "/dongnae-chuljang-massage",
    subdomain: "dongnae",
    title: "동래 출장 마사지 | 빠른 전화 연결 랜딩",
    description: "동래 출장 마사지 전화 문의 중심 랜딩 페이지입니다. 간단한 서비스 안내, 지역 안내, FAQ와 전화 연결 CTA를 제공합니다.",
    h1: "동래 출장 마사지",
    eyebrow: "빠른 전화 연결",
    sub: "동래와 부산 주요 지역 방문 마사지 예약 상담을 빠르게 안내합니다.",
    body: "복잡한 절차 없이 전화 상담으로 동래 방문 가능 지역과 시간을 빠르게 확인하세요.",
    chips: ["해운대", "서면", "수영", "동래", "남포", "센텀", "사상", "부산진구"],
    services: commonServices.slice(0, 3),
    trust: [
      { title: "방문 관리 안내", body: "체계적 상담", icon: "person" },
      { title: "원하는 장소", body: "방문 가능 확인", icon: "home" },
      { title: "유연한 시간", body: "일정 조율", icon: "clock" },
      { title: "프라이버시 보장", body: "상담 정보 보호", icon: "lock" },
    ],
    steps: [
      { title: "전화 문의", body: "빠르게 상담을 연결합니다.", icon: "phone" },
      { title: "지역 확인", body: "동래 및 인근 가능 지역을 확인합니다.", icon: "map" },
      { title: "예약 안내", body: "가능 시간을 안내합니다.", icon: "calendar" },
    ],
    faqs: [
      { q: "예약은 어떻게 하나요?", a: "전화 문의 후 지역과 시간을 확인하면 예약 가능 여부를 안내합니다." },
      { q: "서비스 시간은 얼마나 되나요?", a: "이용 시간은 상담 시 희망 일정과 컨디션을 기준으로 안내합니다." },
      { q: "이용 요금은 어떻게 되나요?", a: "지역과 이용 조건에 따라 달라질 수 있어 전화 상담으로 안내합니다." },
      { q: "어떤 장소에서 이용할 수 있나요?", a: "상담 시 확인된 자택, 숙소 등 방문 가능한 장소 기준으로 안내합니다." },
    ],
    variant: "minimal",
  },
];

export const pageByRoute = new Map(landingPages.map((page) => [page.route, page]));
export const pageBySubdomain = new Map(landingPages.map((page) => [page.subdomain, page]));

export function getLandingOrigin(page: LandingPage) {
  return `https://${page.subdomain}.${ROOT_DOMAIN}`;
}

export function getLandingCanonical(page: LandingPage) {
  return `${getLandingOrigin(page)}/`;
}

export function normalizeHostname(hostname: string) {
  return hostname.toLowerCase().replace(/:\d+$/, "");
}

export function isLocalPreviewHost(hostname: string) {
  const host = normalizeHostname(hostname);
  return host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host.endsWith(".local");
}

export function getPageByHostname(hostname: string) {
  const host = normalizeHostname(hostname);
  const suffix = `.${ROOT_DOMAIN}`;
  if (!host.endsWith(suffix)) return undefined;
  const subdomain = host.slice(0, -suffix.length);
  return pageBySubdomain.get(subdomain as LandingPage["subdomain"]);
}

export function getLandingHref(page: LandingPage) {
  if (typeof window !== "undefined" && isLocalPreviewHost(window.location.hostname)) return page.route;
  return getLandingCanonical(page);
}

export function getMainHref() {
  if (typeof window !== "undefined" && isLocalPreviewHost(window.location.hostname)) return "/";
  return `${ROOT_ORIGIN}/`;
}
