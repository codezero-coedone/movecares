import { useEffect } from "react";
import { BRAND, PHONE_DISPLAY, ROOT_ORIGIN, getLandingCanonical, type LandingPage } from "../data/landingPages";

export function usePageSeo(page: LandingPage) {
  useEffect(() => {
    const canonical = getLandingCanonical(page);
    document.title = page.title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", page.description);
    setMeta("robots", "index, follow");

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    document.querySelectorAll("[data-seo-jsonld]").forEach((node) => node.remove());
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.dataset.seoJsonld = "faq";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
    document.head.appendChild(faqScript);

    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.dataset.seoJsonld = "business";
    businessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: BRAND,
      telephone: PHONE_DISPLAY,
      url: canonical,
      areaServed: page.chips,
      description: page.description,
    });
    document.head.appendChild(businessScript);
  }, [page]);
}

export function useHomeSeo() {
  useEffect(() => {
    document.title = "무브케어 | 부산 프리미엄 방문 케어";

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", "무브케어 공식 홈페이지입니다. 부산 주요 지역 방문 케어 상담, 지역별 랜딩, 전화 문의와 예약 안내를 확인해 보세요.");
    setMeta("robots", "index, follow");

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${ROOT_ORIGIN}/`;

    document.querySelectorAll("[data-seo-jsonld]").forEach((node) => node.remove());
    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.dataset.seoJsonld = "business";
    businessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: BRAND,
      telephone: PHONE_DISPLAY,
      url: `${ROOT_ORIGIN}/`,
      areaServed: ["부산", "해운대", "서면", "수영", "동래"],
      description: "부산 주요 지역 방문 케어 상담과 예약 안내를 제공하는 무브케어 공식 홈페이지입니다.",
    });
    document.head.appendChild(businessScript);
  }, []);
}
