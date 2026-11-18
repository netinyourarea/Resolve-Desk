import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/resolvedesk/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ResolveDesk | Independent Online Shopping Guidance" },
      { name: "description", content: "Independent guidance for online order, delivery, return, and refund questions. Get organized and find a clear next step." },
      { property: "og:title", content: "ResolveDesk | Independent Online Shopping Guidance" },
      { property: "og:description", content: "Understand your shopping concern, organize useful information, and prepare for what comes next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});