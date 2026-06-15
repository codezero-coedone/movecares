import type { ServiceItem } from "../data/landingPages";

type IconProps = {
  name: ServiceItem["icon"] | "menu" | "chat" | "star";
  className?: string;
};

export function Icon({ name, className = "h-7 w-7" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "phone") return <svg {...common}><path d="M22 16.9v2.4a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.6 2 2 0 0 1 4.1 1.4h2.4a2 2 0 0 1 2 1.7l.4 2.7a2 2 0 0 1-.6 1.8L7.2 8.8a16 16 0 0 0 8 8l1.2-1.1a2 2 0 0 1 1.8-.6l2.7.4a2 2 0 0 1 1.1 1.4Z" /></svg>;
  if (name === "chat") return <svg {...common}><path d="M21 12a7.5 7.5 0 0 1-7.5 7.5H8l-5 3 1.4-5A7.5 7.5 0 1 1 21 12Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (name === "home") return <svg {...common}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>;
  if (name === "person") return <svg {...common}><circle cx="12" cy="7" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></svg>;
  if (name === "calendar") return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M9 16l2 2 4-5" /></svg>;
  if (name === "lock") return <svg {...common}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
  if (name === "map") return <svg {...common}><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15M15 6v15" /></svg>;
  if (name === "leaf") return <svg {...common}><path d="M5 21c7-2 12-7 14-17-10 2-15 7-17 14 4 0 7-1 10-4" /></svg>;
  if (name === "body") return <svg {...common}><path d="M8 21c1-5 1-8-1-12M16 21c-1-5-1-8 1-12" /><path d="M6 8c3 3 9 3 12 0M12 4v17" /></svg>;
  if (name === "lotus") return <svg {...common}><path d="M12 21c-5-2-8-5-8-9 4 0 6 2 8 9Z" /><path d="M12 21c5-2 8-5 8-9-4 0-6 2-8 9Z" /><path d="M12 21c-3-5-3-10 0-15 3 5 3 10 0 15Z" /></svg>;
  if (name === "hand") return <svg {...common}><path d="M7 11V5a2 2 0 0 1 4 0v6" /><path d="M11 10V4a2 2 0 0 1 4 0v8" /><path d="M15 11V7a2 2 0 0 1 4 0v7a8 8 0 0 1-8 8H9a6 6 0 0 1-5.3-3.2L3 17.5a2 2 0 0 1 3.4-2.1L8 18" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
  return <svg {...common}><path d="m12 2 3 6 7 .9-5 4.8 1.2 6.8L12 17l-6.2 3.5L7 13.7 2 8.9 9 8l3-6Z" /></svg>;
}

export function LogoMark({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center text-warm">
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 7c6 9 6 18 0 28-6-10-6-19 0-28Z" />
          <path d="M32 35C21 25 15 18 14 9c10 3 18 12 18 26Z" />
          <path d="M32 35c11-10 17-17 18-26-10 3-18 12-18 26Z" />
          <path d="M14 36c7 13 17 18 18 18s11-5 18-18" />
        </svg>
      </div>
      <div>
        <p className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-text-main"}`}>{compact ? "무브케어" : "부산 무브케어 출장마사지"}</p>
        {!compact && <p className={`text-xs tracking-[0.12em] ${light ? "text-white/55" : "text-text-muted"}`}>PREMIUM HOME MASSAGE</p>}
      </div>
    </div>
  );
}
