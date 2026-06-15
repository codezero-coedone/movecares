import { useEffect } from "react";
import { ROOT_ORIGIN, getLandingHref, landingPages } from "../data/landingPages";
import { Header, LandingTabBar } from "../components/Common";

export function LandingIndex() {
  useEffect(() => {
    document.title = "랜딩 페이지 5종 | 부산 무브케어 QA";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "부산 무브케어 출장마사지 랜딩 페이지 5종 QA 링크 모음입니다.";
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, follow";
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${ROOT_ORIGIN}/landing-index`;
    document.querySelectorAll("[data-seo-jsonld]").forEach((node) => node.remove());
  }, []);

  return (
    <div className="movecare-store-shell min-h-screen text-text-main">
      <Header compact />
      <main className="mx-auto max-w-[900px] px-5 py-12">
        <p className="text-sm font-semibold text-warm">QA INDEX</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text-main">랜딩 페이지 5종</h1>
        <p className="mt-4 text-text-sub">운영 메인페이지가 아니라 QA용 링크 모음입니다.</p>
        <div className="mt-8 grid gap-4">
          {landingPages.map((page) => (
            <a key={page.route} href={getLandingHref(page)} className="rounded-3xl border border-border-soft bg-white p-5 shadow-soft transition hover:border-border-mid">
              <span className="text-xs font-semibold text-warm">{page.id.toUpperCase()}</span>
              <h2 className="mt-2 text-xl font-semibold text-text-main">{page.h1}</h2>
              <p className="mt-2 text-sm text-text-sub">{page.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-charcoal">{page.subdomain}.movecares.com</span>
            </a>
          ))}
        </div>
      </main>
      <LandingTabBar />
    </div>
  );
}
