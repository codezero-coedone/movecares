import { FIXED_DOMAINS, LANDING_HOST_BY_SUBDOMAIN } from "../data/domainConfig";
import { pageBySubdomain, ROOT_DOMAIN, type LandingPage } from "../data/landingPages";

export function normalizeHost(hostname: string) {
  return hostname.toLowerCase().replace(/:\d+$/, "");
}

export function isLocalPreviewHost(hostname: string) {
  const host = normalizeHost(hostname);
  return host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host.endsWith(".local");
}

export function getLandingPageByHost(hostname: string): LandingPage | undefined {
  const host = normalizeHost(hostname);
  const entry = Object.entries(LANDING_HOST_BY_SUBDOMAIN).find(([, domain]) => domain === host);
  if (!entry) return undefined;
  return pageBySubdomain.get(entry[0] as LandingPage["subdomain"]);
}

export function isRootHost(hostname: string) {
  const host = normalizeHost(hostname);
  return host === FIXED_DOMAINS.root || host === FIXED_DOMAINS.www;
}

export function getCanonicalHostForCurrentHost(hostname: string) {
  const host = normalizeHost(hostname);
  if (host === FIXED_DOMAINS.www) return FIXED_DOMAINS.root;
  return host.endsWith(ROOT_DOMAIN) ? host : FIXED_DOMAINS.root;
}

