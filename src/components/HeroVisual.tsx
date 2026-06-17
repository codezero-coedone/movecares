export function HeroWellnessVisual({ mode = "therapist" }: { mode?: "therapist" | "objects" }) {
  const compact = mode === "objects";
  return (
    <figure
      className={[
        "movecare-hero-visual movecare-hero-photo relative overflow-hidden rounded-[2.1rem] border border-white/75 bg-[#f4ead8]",
        compact ? "min-h-[286px] md:min-h-[336px]" : "min-h-[318px] md:min-h-[416px]",
      ].join(" ")}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,253,248,0.04), rgba(255,253,248,0) 58%), url('/images/movecares-premium-wellness-hero.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src="/images/movecares-premium-wellness-hero.webp"
        alt="부산 출장마사지 예약 상담을 위한 프리미엄 웰니스 방문 케어 공간"
        width="1280"
        height="960"
        className="absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,0.04),rgba(255,253,248,0)_55%,rgba(18,19,21,0.12)),radial-gradient(circle_at_18%_18%,rgba(255,244,216,0.18),transparent_34%)]" aria-hidden />
      <div className="absolute inset-x-6 top-6 flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-white/35 bg-white/82 px-4 py-3 shadow-soft backdrop-blur-md">
          <p className="text-[10px] font-black tracking-[0.2em] text-warm">{compact ? "HOME CARE" : "PRIVATE"}</p>
          <p className="mt-1 text-xs font-semibold text-text-main">{compact ? "프리미엄 방문 케어" : "예약 상담"}</p>
        </div>
        <div className="hidden rounded-full border border-white/25 bg-charcoal/60 px-4 py-2 text-[11px] font-black tracking-[0.16em] text-white shadow-soft backdrop-blur-md sm:block">
          BUSAN WELLNESS
        </div>
      </div>
      <figcaption className="absolute bottom-7 right-7 hidden max-w-[210px] rounded-2xl border border-white/35 bg-white/84 px-4 py-3 text-right shadow-soft backdrop-blur-md sm:block">
        <p className="text-[10px] font-black tracking-[0.18em] text-warm">BUSAN</p>
        <p className="mt-1 text-xs font-semibold text-text-main">해운대·서면·수영 예약 상담</p>
      </figcaption>
    </figure>
  );
}

export function MapSilhouette() {
  return (
    <div className="relative min-h-[210px] overflow-hidden rounded-3xl border border-border-soft bg-surface-2 p-6 shadow-soft">
      <div className="absolute inset-0 movecare-visual-grid opacity-60" aria-hidden />
      <svg viewBox="0 0 360 220" className="absolute inset-0 h-full w-full text-border-mid/70" fill="currentColor">
        <path d="M182 22c24 18 53 10 71 35 13 18 8 44 36 61 21 13 38 26 32 48-7 24-37 26-59 20-24-7-40 13-63 18-28 6-46-10-68-22-18-10-46 2-67-13-17-12-19-38 1-51 22-14 13-40 32-57 22-20 53-5 85-39Z" opacity=".48" />
      </svg>
      {[
        ["37%", "43%"],
        ["55%", "36%"],
        ["48%", "62%"],
        ["68%", "50%"],
      ].map(([left, top], index) => (
        <span key={index} className="absolute grid h-9 w-9 place-items-center rounded-full bg-charcoal text-white shadow-soft" style={{ left, top }}>
          <span className="h-3 w-3 rounded-full bg-white" />
        </span>
      ))}
      <div className="relative ml-auto max-w-[180px] pt-10">
        <p className="text-xl font-semibold text-text-main">부산 전 지역 신속 방문</p>
        <p className="mt-3 text-sm leading-6 text-text-sub">원하시는 장소로 빠르게 찾아갑니다.</p>
      </div>
    </div>
  );
}
