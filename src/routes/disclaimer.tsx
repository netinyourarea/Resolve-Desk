import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/resolvedesk/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "Service Disclaimer | ResolveDesk" },
    { name: "description", content: "Read the boundaries of ResolveDesk’s independent informational shopping guidance service." },
    { property: "og:title", content: "Service Disclaimer | ResolveDesk" },
    { property: "og:description", content: "ResolveDesk is independent and cannot access retailer systems, issue refunds, or guarantee outcomes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return <LegalPage page="disclaimer" />;
}