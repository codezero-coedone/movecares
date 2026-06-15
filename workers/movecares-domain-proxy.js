const PAGES_ORIGIN = "https://movecares.pages.dev";

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
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
