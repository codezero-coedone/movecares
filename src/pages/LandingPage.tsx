import type { ReactNode } from "react";
import { BRAND_SUB, PHONE_DISPLAY, PHONE_TEL, type LandingPage } from "../data/landingPages";
import { usePageSeo } from "../hooks/usePageSeo";
import { CallButton, FAQAccordion, Header, LandingTabBar, RegionChips, SectionTitle, ServiceCard, StepFlow, StickyCallBar, TrustBadges } from "../components/Common";
import { HeroWellnessVisual, MapSilhouette } from "../components/HeroVisual";
import { Icon, LogoMark } from "../components/Icons";

function AnchorButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[54px] items-center justify-center rounded-[1.15rem] border border-border-mid bg-white/88 px-5 text-base font-extrabold tracking-[-0.02em] text-text-main shadow-[0_10px_28px_rgba(35,38,43,0.055)] transition hover:border-warm/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm active:scale-[0.99]"
    >
      {label}
    </a>
  );
}

function Shell({ children, stickySplit = false }: { children: ReactNode; stickySplit?: boolean }) {
  return (
    <div className="movecare-store-shell min-h-screen text-text-main">
      {children}
      <StickyCallBar split={stickySplit} />
      <LandingTabBar />
    </div>
  );
}

function Footer({ dark = true }: { dark?: boolean }) {
  const muted = dark ? "text-white/70" : "text-text-sub";
  const faint = dark ? "text-white/50" : "text-text-muted";
  const border = dark ? "border-white/15" : "border-border-mid";
  return (
    <footer className={dark ? "bg-charcoal text-white" : "border-t border-border-soft bg-white text-text-main"}>
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr_0.5fr]">
        <div>
          <LogoMark compact light={dark} />
          <p className={`mt-4 text-sm ${muted}`}>{BRAND_SUB}</p>
          <p className={`mt-5 text-sm ${muted}`}>부산 방문 마사지 예약 상담 안내</p>
          <p className={`mt-5 text-xs ${faint}`}>© 2026 MOVECARE. All rights reserved.</p>
        </div>
        <div className={`grid gap-3 text-sm ${muted}`}>
          <span>서비스 안내</span>
          <span>이용 안내</span>
          <span>자주 묻는 질문</span>
        </div>
        <a href={PHONE_TEL} className={`self-start rounded-2xl border ${border} px-5 py-3 text-center text-sm font-bold`}>전화 문의</a>
      </div>
    </footer>
  );
}

function Hero({ page, centered = false, objectVisual = false }: { page: LandingPage; centered?: boolean; objectVisual?: boolean }) {
  if (centered) {
    return (
      <section className="mx-auto max-w-[920px] px-5 pb-10 pt-14 text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-warm">{page.eyebrow}</p>
        <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-text-main md:text-7xl">{page.h1}</h1>
        <p className="mx-auto mt-6 max-w-[640px] text-lg leading-8 text-text-sub">{page.sub}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton label="지금 전화하기" large />
          <AnchorButton href="#reservation" label="상담 방법 보기" />
        </div>
        <div className="movecare-quick-proof mx-auto mt-8 grid max-w-[760px] grid-cols-3 gap-3 text-left">
          {page.trust.slice(0, 3).map((item) => (
            <div key={item.title} className="rounded-2xl border border-border-soft bg-white/82 p-4 shadow-soft">
              <Icon name={item.icon} className="h-6 w-6 text-warm" />
              <b className="mt-3 block text-sm text-text-main">{item.title}</b>
              <p className="mt-1 text-xs leading-5 text-text-sub">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="movecare-hero relative overflow-hidden border-b border-border-soft bg-gradient-to-br from-main via-white to-[#eee7dd]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div className="relative z-10">
          <p className="text-base font-semibold tracking-wide text-warm">{page.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-text-main md:text-7xl">{page.h1}</h1>
          <p className="mt-6 max-w-[520px] text-lg leading-8 text-text-sub">{page.sub}</p>
          <p className="mt-2 max-w-[520px] text-base leading-7 text-text-sub">{page.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton label={`전화 문의 ${PHONE_DISPLAY}`} />
            <AnchorButton href="#reservation" label="상담 방법 보기" />
          </div>
        </div>
        <div className="relative">
          <HeroWellnessVisual mode={objectVisual ? "objects" : "therapist"} />
          <div className="movecare-hero-float movecare-hero-float--left">
            <span>지역 확인</span>
            <b>{page.chips.slice(0, 3).join(" · ")}</b>
          </div>
          <div className="movecare-hero-float movecare-hero-float--right">
            <span>상담 연결</span>
            <b>{PHONE_DISPLAY}</b>
          </div>
        </div>
      </div>
    </section>
  );
}

function RepresentativePage({ page }: { page: LandingPage }) {
  usePageSeo(page);
  return (
    <Shell>
      <Header compact />
      <Hero page={page} />
      <main className="mx-auto grid max-w-[1180px] gap-10 px-5 py-10">
        <section id="areas" className="text-center scroll-mt-24">
          <p className="mb-5 text-sm font-medium text-text-sub">부산 전 지역 출장 가능</p>
          <RegionChips chips={page.chips} centered />
        </section>
        <TrustBadges items={page.trust} />
        <section id="services" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="무브케어 서비스" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{page.services.map((item) => <ServiceCard key={item.title} item={item} />)}</div>
        </section>
        <section id="reservation" className="grid gap-8 scroll-mt-24">
          <SectionTitle label="예약 절차" centered />
          <StepFlow steps={page.steps} />
        </section>
        <section id="faq" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="자주 묻는 질문" />
          <FAQAccordion items={page.faqs} />
        </section>
        <section className="rounded-3xl border border-border-soft bg-white p-6 shadow-soft md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-charcoal text-white"><Icon name="phone" /></span>
            <div>
              <p className="font-semibold text-text-main">부산 방문 마사지 예약 상담이 필요하신가요?</p>
              <p className="mt-1 text-sm text-text-sub">이용 지역과 시간을 확인한 뒤 가능 여부를 안내합니다.</p>
            </div>
          </div>
          <CallButton label={`전화 문의 ${PHONE_DISPLAY}`} />
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

function PremiumPage({ page }: { page: LandingPage }) {
  usePageSeo(page);
  return (
    <Shell stickySplit>
      <Header dense />
      <Hero page={page} />
      <main className="mx-auto grid max-w-[1180px] gap-10 px-5 py-10">
        <TrustBadges items={page.trust} />
        <section id="areas" className="grid gap-5 scroll-mt-24">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle label="부산 전 지역 방문 가능" />
            <span className="text-sm font-medium text-text-sub">지역 전체 보기 &gt;</span>
          </div>
          <RegionChips chips={page.chips} />
        </section>
        <section id="services" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="맞춤형 프리미엄 케어" />
          <div className="grid gap-5 md:grid-cols-4">{page.services.map((item) => <ServiceCard key={item.title} item={item} tall />)}</div>
          <p className="text-center text-sm text-text-muted">* 시간은 고객 맞춤 조절 가능합니다.</p>
        </section>
        <section id="reservation" className="grid gap-5 rounded-[2rem] border border-border-mid bg-white p-8 shadow-soft md:grid-cols-[0.8fr_1fr] md:items-center scroll-mt-24">
          <div className="grid h-28 w-28 place-items-center rounded-full border border-border-soft bg-surface-2 text-charcoal">
            <Icon name="phone" className="h-12 w-12" />
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xl font-semibold text-text-main">지금 바로 전화 문의</p>
              <p className="mt-2 text-4xl font-bold tracking-tight">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-text-sub">24시간 상담 및 예약 가능</p>
            </div>
            <CallButton label="전화 문의" />
          </div>
        </section>
        <section id="faq" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="자주 묻는 질문" />
          <FAQAccordion items={page.faqs} />
        </section>
      </main>
      <div className="border-t border-border-soft bg-white px-5 py-5">
        <div className="mx-auto grid max-w-[1180px] gap-4 text-sm text-text-sub md:grid-cols-3">
          <span>예약 즉시 확정 | 빠르고 간단한 예약</span>
          <span>현금 · 카드 · 계좌이체 | 상담 시 안내</span>
          <span>고객 맞춤 케어 | 상태에 맞춘 1:1 관리</span>
        </div>
      </div>
      <Footer dark={false} />
    </Shell>
  );
}

function EditorialPage({ page }: { page: LandingPage }) {
  usePageSeo(page);
  return (
    <Shell>
      <Header compact />
      <Hero page={page} objectVisual />
      <main className="mx-auto grid max-w-[1180px] gap-12 px-5 py-10">
        <section id="areas" className="grid gap-5 text-center scroll-mt-24">
          <p className="text-lg text-text-sub">서면 중심권 출장 가능</p>
          <RegionChips chips={page.chips} centered />
        </section>
        <section id="services" className="scroll-mt-24"><TrustBadges items={page.services} /></section>
        <section id="reservation" className="grid gap-8 border-y border-border-soft py-10 scroll-mt-24">
          <SectionTitle label="예약 방법" centered />
          <StepFlow steps={page.steps} />
        </section>
        <section className="rounded-3xl border border-border-soft bg-white p-6 shadow-soft md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">지금 바로 편안함을 경험하세요</p>
            <p className="mt-2 text-text-sub">24시간 상담 가능 | 지역과 시간을 먼저 확인합니다.</p>
          </div>
          <CallButton label={`전화 문의 ${PHONE_DISPLAY}`} />
        </section>
        <section id="faq" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="자주 묻는 질문" />
          <FAQAccordion items={page.faqs} />
        </section>
      </main>
      <Footer />
    </Shell>
  );
}

function TrustPage({ page }: { page: LandingPage }) {
  usePageSeo(page);
  return (
    <Shell stickySplit>
      <Header dense compact />
      <Hero page={page} />
      <main className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10">
        <section className="rounded-3xl bg-charcoal p-6 text-white shadow-cta md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm text-white/65">지금 바로 전화 상담</p>
            <p className="mt-2 text-4xl font-bold">{PHONE_DISPLAY}</p>
            <p className="mt-2 text-white/65">24시간 상담 가능</p>
          </div>
          <a href={PHONE_TEL} className="mt-5 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-charcoal md:mt-0">지금 전화하기</a>
        </section>
        <section id="services" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="서비스 소개" />
          <TrustBadges items={page.services} />
        </section>
        <section id="areas" className="grid gap-5 rounded-3xl border border-border-soft bg-white p-6 shadow-soft md:grid-cols-[1fr_1.1fr] md:items-center scroll-mt-24">
          <div>
            <SectionTitle label="서비스 가능 지역" />
            <div className="mt-5"><RegionChips chips={page.chips} /></div>
          </div>
          <MapSilhouette />
        </section>
        <section id="reservation" className="grid gap-7 scroll-mt-24">
          <SectionTitle label="예약 방법" />
          <StepFlow steps={page.steps} />
        </section>
        <section id="faq" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="자주 묻는 질문" />
          <FAQAccordion items={page.faqs} />
        </section>
        <a href={PHONE_TEL} className="rounded-3xl bg-charcoal px-8 py-6 text-center text-xl font-bold text-white shadow-cta">수영 출장 마사지 전화 연결</a>
      </main>
      <Footer dark={false} />
    </Shell>
  );
}

function MinimalPage({ page }: { page: LandingPage }) {
  usePageSeo(page);
  return (
    <Shell stickySplit>
      <Header compact />
      <Hero page={page} centered />
      <main className="mx-auto grid max-w-[1040px] gap-9 px-5 pb-12">
        <section id="areas" className="scroll-mt-24"><RegionChips chips={page.chips} centered /></section>
        <section id="reservation" className="grid gap-5 rounded-[2rem] border border-border-mid bg-white/88 p-5 shadow-soft md:grid-cols-[0.95fr_1.05fr] md:items-center scroll-mt-24">
          <HeroWellnessVisual mode="objects" />
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-warm">FAST WELLNESS ROUTE</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-text-main">동래 중심 빠른 방문 상담</h2>
            <p className="mt-4 leading-7 text-text-sub">{page.body}</p>
            <div className="mt-6"><CallButton label={`전화 문의 ${PHONE_DISPLAY}`} /></div>
          </div>
        </section>
        <section id="services" className="grid gap-5 sm:grid-cols-3 scroll-mt-24">{page.services.map((item) => <ServiceCard key={item.title} item={item} />)}</section>
        <section className="rounded-3xl border border-border-soft bg-white p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-4">
            {page.trust.map((item) => (
              <div key={item.title} className="text-center">
                <Icon name={item.icon} className="mx-auto h-8 w-8 text-warm" />
                <b className="mt-3 block text-text-main">{item.title}</b>
                <p className="mt-1 text-sm text-text-sub">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="faq" className="grid gap-5 scroll-mt-24">
          <SectionTitle label="자주 묻는 질문" centered />
          <FAQAccordion items={page.faqs} />
        </section>
      </main>
    </Shell>
  );
}

export function LandingPageView({ page }: { page: LandingPage }) {
  if (page.variant === "premium") return <PremiumPage page={page} />;
  if (page.variant === "editorial") return <EditorialPage page={page} />;
  if (page.variant === "trust") return <TrustPage page={page} />;
  if (page.variant === "minimal") return <MinimalPage page={page} />;
  return <RepresentativePage page={page} />;
}
