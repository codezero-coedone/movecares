const PAGES_ORIGIN = "https://movecares.pages.dev";
const ROOT_HOST = "movecares.com";
const WWW_HOST = "www.movecares.com";
const LANDING_HOSTS = [
  "busan.movecares.com",
  "haeundae.movecares.com",
  "seomyeon.movecares.com",
  "suyeong.movecares.com",
  "dongnae.movecares.com",
];

function canonicalHost(hostname) {
  return hostname === WWW_HOST ? ROOT_HOST : hostname;
}

function sitemapForHost(hostname) {
  const host = canonicalHost(hostname);
  const urls = host === ROOT_HOST ? [`https://${ROOT_HOST}/`, ...LANDING_HOSTS.map((item) => `https://${item}/`)] : [`https://${host}/`];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
}

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
    const host = incomingUrl.hostname.toLowerCase();

    if (incomingUrl.pathname === "/robots.txt") {
      return new Response(`User-agent: *\nAllow: /\n\nSitemap: https://${canonicalHost(host)}/sitemap.xml\n`, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-movecares-proxy": "cloudflare-worker",
        },
      });
    }

    if (incomingUrl.pathname === "/sitemap.xml") {
      return new Response(sitemapForHost(host), {
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-movecares-proxy": "cloudflare-worker",
        },
      });
    }

    const upstreamUrl = new URL(incomingUrl.pathname + incomingUrl.search, PAGES_ORIGIN);
    const upstreamRequest = new Request(upstreamUrl, request);
    upstreamRequest.headers.set("x-movecares-host", incomingUrl.hostname);

    const response = await fetch(upstreamRequest);
    const headers = new Headers(response.headers);
    headers.delete("x-robots-tag");
    headers.set("x-movecares-proxy", "cloudflare-worker");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
