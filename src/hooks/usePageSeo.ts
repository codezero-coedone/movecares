import { useEffect } from "react";
import { BRAND, PHONE_DISPLAY, ROOT_ORIGIN, getLandingCanonical, type LandingPage } from "../data/landingPages";
import { homeFaqs } from "../data/homeContent";

const HERO_IMAGE_URL = `${ROOT_ORIGIN}/images/movecares-premium-wellness-hero.webp`;

export function usePageSeo(page: LandingPage) {
  useEffect(() => {
    const canonical = getLandingCanonical(page);
    document.title = page.title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("name", "description", page.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", HERO_IMAGE_URL);
    setMeta("property", "og:image:width", "1280");
    setMeta("property", "og:image:height", "960");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE_URL);

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
    const canonical = `${ROOT_ORIGIN}/`;
    const title = "부산출장마사지 | 무브케어 방문 마사지 예약";
    const description = "부산 출장 마사지와 방문 마사지 예약 상담을 안내하는 무브케어 공식 홈페이지입니다. 지역별 상담, 전화 문의, 예약 절차를 확인해 보세요.";

    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", HERO_IMAGE_URL);
    setMeta("property", "og:image:width", "1280");
    setMeta("property", "og:image:height", "960");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE_URL);

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
      mainEntity: homeFaqs.map((faq) => ({
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
      areaServed: ["부산", "해운대", "서면", "수영", "동래"],
      description,
    });
    document.head.appendChild(businessScript);
  }, []);
}
