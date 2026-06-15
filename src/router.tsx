import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { getPageByHostname, landingPages } from "./data/landingPages";
import { HomePage } from "./pages/HomePage";
import { LandingIndex } from "./pages/LandingIndex";
import { LandingPageView } from "./pages/LandingPage";

function RootOutlet() {
  return <Outlet />;
}

const rootRoute = createRootRoute({
  component: RootOutlet,
  notFoundComponent: () => <RootEntry />,
});

function RootEntry() {
  const page = typeof window !== "undefined" ? getPageByHostname(window.location.hostname) : undefined;
  return page ? <LandingPageView page={page} /> : <HomePage />;
}

const busanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/busan-chuljang-massage",
  component: () => <LandingPageView page={landingPages[0]} />,
});

const haeundaeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/haeundae-chuljang-massage",
  component: () => <LandingPageView page={landingPages[1]} />,
});

const seomyeonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/seomyeon-chuljang-massage",
  component: () => <LandingPageView page={landingPages[2]} />,
});

const suyeongRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suyeong-chuljang-massage",
  component: () => <LandingPageView page={landingPages[3]} />,
});

const dongnaeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dongnae-chuljang-massage",
  component: () => <LandingPageView page={landingPages[4]} />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: RootEntry,
});

const landingIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/landing-index",
  component: LandingIndex,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  landingIndexRoute,
  busanRoute,
  haeundaeRoute,
  seomyeonRoute,
  suyeongRoute,
  dongnaeRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
