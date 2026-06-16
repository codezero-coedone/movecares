export function HeroWellnessVisual({ mode = "therapist" }: { mode?: "therapist" | "objects" }) {
  if (mode === "objects") {
    return (
      <div className="movecare-hero-visual movecare-hero-visual--objects relative min-h-[286px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-surface-2 to-[#ebe5dc] md:min-h-[336px]">
        <div className="absolute inset-0 movecare-visual-grid" aria-hidden />
        <div className="absolute left-6 top-6 rounded-2xl border border-border-soft bg-white/82 px-4 py-3 shadow-soft backdrop-blur">
          <p className="text-[10px] font-black tracking-[0.2em] text-warm">HOME CARE</p>
          <p className="mt-1 text-xs font-semibold text-text-main">방문 케어 세팅</p>
        </div>
        <div className="absolute right-7 top-8 h-16 w-28 rounded-[1.4rem] border border-white/80 bg-white/52 shadow-soft" />
        <div className="absolute left-8 right-8 top-[44%] h-1 rounded-full bg-white/80 shadow-[0_12px_35px_rgba(35,38,43,0.08)]" />
        <div className="absolute inset-x-8 bottom-9 h-24 rounded-[999px] bg-[#e7ded1] shadow-[inset_0_18px_30px_rgba(255,255,255,0.62)]" />
        <div className="absolute bottom-[5.2rem] left-14 h-16 w-44 rounded-[2rem] bg-white shadow-soft" />
        <div className="absolute bottom-[7.25rem] left-24 h-12 w-32 rounded-[2rem] bg-white/96 ring-1 ring-border-soft" />
        <div className="absolute bottom-[6.25rem] right-14 h-32 w-[4.1rem] rounded-t-[1.2rem] bg-gradient-to-b from-[#8b5a31] to-[#54321d] shadow-soft" />
        <div className="absolute bottom-[8.1rem] right-[8.6rem] h-24 w-14 rounded-t-[1rem] bg-gradient-to-b from-[#a66a38] to-[#6d3f21] shadow-soft" />
        <div className="absolute bottom-[6.25rem] right-[12.8rem] h-[4.8rem] w-[4.8rem] rounded-full bg-[#fff3d3] shadow-[0_0_46px_rgba(199,169,122,0.46)]" />
        <div className="absolute right-24 top-[5.4rem] h-24 w-24 rounded-full bg-[#f3efe8] blur-sm" />
        <div className="absolute left-12 top-20 h-24 w-16 rounded-full border border-border-mid/80" />
        <div className="absolute right-8 bottom-10 rounded-2xl border border-white/65 bg-white/74 px-4 py-3 text-right shadow-soft backdrop-blur">
          <p className="text-[10px] font-black tracking-[0.18em] text-warm">CLEAN ROUTINE</p>
          <p className="mt-1 text-xs font-semibold text-text-main">예약 전 안내 기준</p>
        </div>
      </div>
    );
  }
  return (
    <div className="movecare-hero-visual relative min-h-[318px] overflow-hidden rounded-[2.1rem] border border-white/75 bg-gradient-to-br from-white via-[#f7f3ed] to-[#e7ded1] md:min-h-[416px]">
      <div className="absolute inset-0 movecare-visual-grid" aria-hidden />
      <div className="absolute right-0 -top-10 h-56 w-56 rounded-full bg-white/60 blur-2xl" aria-hidden />
      <div className="absolute -left-16 bottom-4 h-56 w-56 rounded-full bg-[#f2dfbf]/56 blur-2xl" aria-hidden />

      <div className="absolute left-7 right-7 top-7 h-24 rounded-[1.6rem] border border-white/75 bg-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
      <div className="absolute left-12 top-10 h-16 w-32 rounded-full bg-[#f0e7db]" />
      <div className="absolute right-8 top-8 rounded-2xl border border-border-soft bg-white/82 px-4 py-3 shadow-soft backdrop-blur">
        <p className="text-[10px] font-black tracking-[0.2em] text-warm">PRIVATE</p>
        <p className="mt-1 text-xs font-semibold text-text-main">예약 상담</p>
      </div>

      <div className="absolute inset-y-12 left-[55%] w-px bg-gradient-to-b from-transparent via-white/75 to-transparent" />
      <div className="absolute bottom-[5.2rem] left-10 right-10 h-28 rounded-[999px] bg-[#e8ded0] shadow-[inset_0_22px_36px_rgba(255,255,255,0.65)]" />
      <div className="absolute bottom-[4.25rem] right-8 h-24 w-56 rounded-[100%] border border-border-mid/70 bg-white/86 shadow-soft" />
      <div className="absolute bottom-[5.4rem] right-20 h-16 w-44 rounded-[999px] bg-white shadow-soft" />
      <div className="absolute bottom-[8.2rem] right-[8.4rem] h-12 w-32 rounded-[999px] bg-white/95 ring-1 ring-border-soft" />

      <div className="absolute bottom-[8.5rem] left-16 h-28 w-16 rounded-t-2xl bg-gradient-to-b from-[#906037] to-[#57341f] shadow-soft" />
      <div className="absolute bottom-[9.6rem] left-[8.6rem] h-24 w-12 rounded-t-2xl bg-gradient-to-b from-[#704524] to-[#4a2e1a] shadow-soft" />
      <div className="absolute bottom-[5.9rem] left-[5.9rem] h-12 w-32 rounded-[999px] bg-[#c7a97a]/58 blur-[1px]" />

      <div className="absolute bottom-[6rem] left-[47%] h-20 w-20 rounded-full bg-[#fff4d8] shadow-[0_0_48px_rgba(199,169,122,0.5)]" />
      <div className="absolute bottom-[6.9rem] left-[50%] h-12 w-12 rounded-full bg-white/72" />
      <div className="absolute right-8 bottom-8 rounded-2xl border border-white/70 bg-white/78 px-4 py-3 text-right shadow-soft backdrop-blur">
        <p className="text-[10px] font-black tracking-[0.18em] text-warm">BUSAN</p>
        <p className="mt-1 text-xs font-semibold text-text-main">방문 가능 지역 확인</p>
      </div>
    </div>
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
