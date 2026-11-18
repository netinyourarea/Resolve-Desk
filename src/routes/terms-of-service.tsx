import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/resolvedesk/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({ meta: [
    { title: "Terms of Service | ResolveDesk" },
    { name: "description", content: "Review the terms for using ResolveDesk’s independent online shopping assistance and planning tools." },
    { property: "og:title", content: "Terms of Service | ResolveDesk" },
    { property: "og:description", content: "Understand the scope and limitations of ResolveDesk’s independent shopping assistance service." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage page="terms-of-service" />;
}