import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it.each([
    ["/", "/"],
    ["/contact", "/contact"],
    ["/disclaimer", "/disclaimer"],
    ["/privacy-policy", "/privacy-policy"],
    ["/terms-of-service", "/terms-of-service"],
  ])("matches a page for %s", (path, routeId) => {
    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe(routeId);
  });

  it("falls back to the root (not found) for unknown paths", () => {
    expect(router.matchRoutes("/nope").at(-1)?.routeId).toBe(rootRouteId);
  });
});
