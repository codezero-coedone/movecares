import { BRAND_SUB, PHONE_DISPLAY, PHONE_TEL, getLandingHref, landingPages } from "../data/landingPages";
import { homeFaqs } from "../data/homeContent";
import { useHomeSeo } from "../hooks/usePageSeo";
import { CallButton, FAQAccordion, Header, LandingTabBar, SectionTitle, ServiceCard, StickyCallBar, TrustBadges } from "../components/Common";
import { HeroWellnessVisual } from "../components/HeroVisual";
import { Icon, LogoMark } from "../components/Icons";

const homeTrust = [
  { title: "지역별 상담 분리", body: "부산 주요 권역별 안내", icon: "map" as const },
  { title: "전화 전환 중심", body: "빠른 예약 가능 여부 확인", icon: "phone" as const },
  { title: "합법 웰니스", body: "건전한 방문 케어 안내", icon: "shield" as const },
  { title: "개인정보 보호", body: "상담 정보 안전 관리", icon: "lock" as const },
];

const homeServices = [
  { title: "아로마 관리", body: "편안한 휴식을 위한 부드러운 웰니스 케어를 안내합니다.", note: "상담 시 안내", icon: "leaf" as const },
  { title: "스포츠 관리", body: "활동 후 피로 회복을 돕는 방문 케어 상담을 제공합니다.", note: "시간 조율 가능", icon: "body" as const },
  { title: "릴렉스 관리", body: "일상 긴장을 낮추는 안정적인 관리 일정을 안내합니다.", note: "맞춤 상담", icon: "lotus" as const },
];

export function HomePage() {
  useHomeSeo();

  return (
    <div className="movecare-store-shell min-h-screen text-text-main">
      <Header dense compact />
      <main>
        <section className="movecare-hero relative overflow-hidden border-b border-border-soft">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative z-10">
              <div className="mb-8">
                <LogoMark />
                <p className="mt-3 text-sm font-semibold tracking-[0.24em] text-warm">{BRAND_SUB}</p>
              </div>
              <p className="text-base font-semibold tracking-wide text-warm">MOVecares OFFICIAL</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-text-main md:text-7xl">부산 출장 마사지</h1>
              <p className="mt-6 max-w-[540px] text-lg leading-8 text-text-sub">
                무브케어 공식 홈페이지입니다. 해운대, 서면, 수영, 동래 등 부산 주요 생활권의 방문 마사지 상담과 예약 절차를 한곳에서 확인하세요.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton label={`전화 문의 ${PHONE_DISPLAY}`} />
                <a href="#areas" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl border border-border-mid bg-white px-5 text-base font-semibold text-text-main">
                  <Icon name="map" className="h-5 w-5" />
                  지역 선택
                </a>
              </div>
            </div>
            <div className="relative">
              <HeroWellnessVisual />
              <div className="movecare-hero-float movecare-hero-float--left">
                <span>대표 상담</span>
                <b>{PHONE_DISPLAY}</b>
              </div>
              <div className="movecare-hero-float movecare-hero-float--right">
                <span>도메인</span>
                <b>movecares.com</b>
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="mx-auto grid max-w-[1180px] gap-6 px-5 py-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle label="지역별 랜딩" />
            <p className="max-w-[520px] text-sm leading-6 text-text-sub">
              각 지역 페이지는 독립 서브도메인으로 분리됩니다. 운영 도메인 기준 canonical도 서브도메인 루트로 고정했습니다.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {landingPages.map((page) => (
              <a key={page.id} href={getLandingHref(page)} className="group overflow-hidden rounded-3xl border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-border-mid">
                <span className="break-all text-xs font-bold tracking-[0.16em] text-warm">{page.subdomain}.MOVECARES.COM</span>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-text-main">{page.h1.replace(" 출장 마사지", "")}</h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-text-sub">{page.sub}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-charcoal">
                  페이지 열기
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-5 pb-12">
          <TrustBadges items={homeTrust} />
          <div className="grid gap-5 md:grid-cols-3">
            {homeServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
          <section className="grid gap-5">
            <SectionTitle label="공식 안내 FAQ" />
            <FAQAccordion items={homeFaqs} />
          </section>
          <section className="rounded-[2rem] border border-border-mid bg-charcoal p-7 text-white shadow-cta md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/65">공식 대표 전화</p>
              <p className="mt-2 text-4xl font-bold tracking-tight">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-sm text-white/65">도메인 연결 후에도 모든 CTA는 동일한 전화 링크로 유지됩니다.</p>
            </div>
            <a href={PHONE_TEL} className="mt-6 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-charcoal md:mt-0">지금 전화하기</a>
          </section>
        </section>
      </main>
      <StickyCallBar split />
      <LandingTabBar />
    </div>
  );
}
