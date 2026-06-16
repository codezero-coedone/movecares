import { useRouterState } from "@tanstack/react-router";
import { getLandingHref, getMainHref, landingPages, PHONE_DISPLAY, PHONE_TEL, ROOT_ORIGIN, type FaqItem, type LandingPage, type ServiceItem, type StepItem } from "../data/landingPages";
import { getLandingPageByHost } from "../lib/hostMapping";
import { Icon, LogoMark } from "./Icons";

export function CallButton({ label = "전화 문의", dark = true, large = false }: { label?: string; dark?: boolean; large?: boolean }) {
  return (
    <a
      href={PHONE_TEL}
      aria-label={`${label} ${PHONE_DISPLAY}`}
      className={[
        "inline-flex items-center justify-center gap-3 rounded-[1.15rem] border px-5 font-extrabold tracking-[-0.02em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm active:scale-[0.99]",
        large ? "min-h-[64px] text-lg" : "min-h-[54px] text-base",
        dark ? "border-charcoal bg-charcoal text-white shadow-cta hover:bg-[#121417]" : "border-border-mid bg-white/88 text-text-main shadow-[0_10px_28px_rgba(35,38,43,0.055)] hover:border-warm/60",
      ].join(" ")}
    >
      <Icon name="phone" className="h-5 w-5" />
      <span>{label}</span>
      {large && <span className="font-bold tracking-wide">{PHONE_DISPLAY}</span>}
    </a>
  );
}

export function Header({ dense = false, compact = false }: { dense?: boolean; compact?: boolean }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hostPage = typeof window !== "undefined" ? getLandingPageByHost(window.location.hostname) : undefined;
  const isActive = (page: LandingPage) => pathname === page.route || hostPage?.id === page.id;
  const navItems = landingPages.map((page) => ({ href: getLandingHref(page), page, label: page.h1.replace(" 출장 마사지", "") }));

  return (
    <header className="movecare-glass-header sticky top-0 z-40 border-b border-border-soft/90 bg-main/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <a href={getMainHref()} className="shrink-0">
          <LogoMark compact={compact} />
        </a>
        <nav className="hidden items-center gap-2 rounded-full border border-border-soft bg-white/65 p-1 shadow-[0_10px_30px_rgba(35,38,43,0.04)] lg:flex" aria-label="지역 랜딩">
          {navItems.map((item) => (
            <a
              key={item.page.id}
              href={item.href}
              data-active={isActive(item.page) ? "true" : undefined}
              className="movecare-nav-link rounded-full px-3.5 py-2 text-xs font-bold text-text-sub transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={`${ROOT_ORIGIN}/`} className="hidden rounded-full border border-border-soft bg-white/70 px-3.5 py-2 text-xs font-extrabold text-text-sub shadow-[0_8px_24px_rgba(35,38,43,0.035)] transition hover:border-warm/55 hover:text-charcoal md:inline-flex">
          공식 홈
        </a>
        {dense ? (
          <a href={PHONE_TEL} className="hidden text-center sm:block">
            <span className="block text-lg font-semibold text-text-main">{PHONE_DISPLAY}</span>
            <span className="text-xs text-text-muted">운영 가능 시간 상담</span>
          </a>
        ) : null}
        <div className="flex items-center gap-2 sm:gap-3">
          {!dense && <a href={PHONE_TEL} className="hidden rounded-[1.05rem] bg-charcoal px-4 py-3 text-sm font-extrabold text-white shadow-cta sm:inline-flex">전화 문의</a>}
          <a href={PHONE_TEL} className="inline-flex min-h-11 items-center gap-2 rounded-[1.05rem] border border-border-mid bg-white/88 px-3 text-sm font-extrabold text-charcoal shadow-[0_10px_24px_rgba(35,38,43,0.055)] sm:hidden" aria-label={`전화 문의 ${PHONE_DISPLAY}`}>
            <Icon name="phone" className="h-4 w-4" />
            전화
          </a>
        </div>
      </div>
    </header>
  );
}

export function RegionChips({ chips, centered = false }: { chips: string[]; centered?: boolean }) {
  return (
    <div className={["flex flex-wrap gap-3", centered ? "justify-center" : ""].join(" ")}>
      {chips.map((chip) => (
        <span key={chip} className="rounded-full border border-border-soft bg-white/90 px-5 py-2 text-sm font-extrabold text-text-main shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_22px_rgba(35,38,43,0.045)] transition hover:-translate-y-0.5 hover:border-warm/55">
          {chip}
        </span>
      ))}
    </div>
  );
}

export function ServiceCard({ item, tall = false }: { item: ServiceItem; tall?: boolean }) {
  return (
    <article className={["movecare-service-card rounded-[1.65rem] border border-border-soft bg-white/92 p-4 text-left shadow-soft backdrop-blur", tall ? "min-h-[260px]" : "min-h-[228px]"].join(" ")}>
      <div className="movecare-service-card__media mb-5 grid min-h-[104px] place-items-center overflow-hidden rounded-[1.35rem] bg-surface-2 text-warm ring-1 ring-border-soft">
        <span className="movecare-service-card__glow" aria-hidden />
        <span className="movecare-service-card__line" aria-hidden />
        <span className="movecare-service-card__stone movecare-service-card__stone--one" aria-hidden />
        <span className="movecare-service-card__stone movecare-service-card__stone--two" aria-hidden />
        <span className="relative z-[1] grid h-16 w-16 place-items-center rounded-full bg-white/80 text-warm shadow-[0_14px_35px_rgba(199,169,122,0.24)]">
          <Icon name={item.icon} className="h-8 w-8" />
        </span>
      </div>
      <h3 className="text-lg font-black tracking-[-0.03em] text-text-main">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-sub">{item.body}</p>
      {item.note && <p className="mt-4 inline-flex rounded-full border border-border-soft bg-surface-2 px-3 py-1 text-xs font-bold text-charcoal">{item.note}</p>}
    </article>
  );
}

export function TrustBadges({ items, boxed = true }: { items: ServiceItem[]; boxed?: boolean }) {
  return (
    <section className={boxed ? "movecare-trust-panel rounded-[1.7rem] border border-border-soft bg-white/90 p-5 shadow-soft backdrop-blur" : ""}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center rounded-2xl border-border-soft px-2 py-4 text-center transition hover:bg-surface-2 md:border-r md:last:border-r-0">
            <span className="mb-3 grid h-11 w-11 place-items-center rounded-2xl border border-border-soft bg-white text-warm shadow-[0_10px_24px_rgba(199,169,122,0.13)]">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <b className="text-sm font-black text-text-main">{item.title}</b>
            <span className="mt-1 text-xs leading-5 text-text-sub">{item.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StepFlow({ steps, numbered = true }: { steps: StepItem[]; numbered?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {steps.map((step, index) => (
        <article key={step.title} className="movecare-step-card relative overflow-hidden rounded-[1.65rem] border border-border-soft bg-white/92 p-6 text-center backdrop-blur">
          <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-warm/70 to-transparent" aria-hidden />
          {numbered && <span className="absolute left-1/2 top-0 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-warm text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>}
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-surface-2 text-charcoal ring-1 ring-border-soft">
            <Icon name={step.icon} className="h-7 w-7" />
          </div>
          <h3 className="font-black text-text-main">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-text-sub">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="overflow-hidden rounded-[1.65rem] border border-border-soft bg-white/92 shadow-soft backdrop-blur">
      {items.map((item, index) => (
        <details key={item.q} className="group border-b border-border-soft last:border-b-0">
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-black text-text-main outline-none transition hover:bg-surface-2 focus-visible:bg-surface-2">
            <span>Q. {item.q}</span>
            <span className="text-xl font-light text-text-muted transition group-open:rotate-45">+</span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-6 text-text-sub">A. {item.a}</p>
          {index === -1 && null}
        </details>
      ))}
    </div>
  );
}

export function StickyCallBar({ split = false }: { split?: boolean }) {
  return (
    <div className="fixed bottom-6 right-6 z-30 hidden w-[min(380px,calc(100%-48px))] md:block">
      <div className="movecare-sticky-call flex items-center justify-between gap-3 rounded-[1.45rem] bg-charcoal p-3 text-white shadow-cta">
        <div className="flex min-w-0 items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[1rem] bg-white text-charcoal"><Icon name="phone" className="h-5 w-5" /></span>
          <div className="min-w-0">
            <p className="text-xs text-white/70">빠른 상담 & 예약</p>
            <p className="truncate text-lg font-bold tracking-wide">{PHONE_DISPLAY}</p>
          </div>
        </div>
        {split ? (
          <a href={PHONE_TEL} className="rounded-[1rem] bg-white px-4 py-3 text-sm font-bold text-charcoal">전화</a>
        ) : (
          <a href={PHONE_TEL} className="rounded-[1rem] bg-white px-4 py-3 text-sm font-bold text-charcoal">전화</a>
        )}
      </div>
    </div>
  );
}

export function SectionTitle({ label, centered = false }: { label: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="mb-3 text-xs font-black tracking-[0.2em] text-warm">MOVECARE</p>
      <h2 className="text-2xl font-black tracking-[-0.045em] text-text-main md:text-4xl">{label}</h2>
    </div>
  );
}

export function LandingTabBar() {
  return (
    <nav className="movecare-tabbar" aria-label="모바일 빠른 상담">
      <a className="movecare-tabbar__item movecare-tabbar__item--primary" href={PHONE_TEL} aria-label={`전화 문의 ${PHONE_DISPLAY}`}>
        <Icon name="phone" className="h-5 w-5" />
        전화 문의
      </a>
      <a className="movecare-tabbar__item" href="#reservation" aria-label="상담 방법 보기">
        <Icon name="calendar" className="h-5 w-5" />
        상담 안내
      </a>
    </nav>
  );
}
