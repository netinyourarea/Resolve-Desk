import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/resolvedesk/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | ResolveDesk" },
    { name: "description", content: "Learn how ResolveDesk handles information when you use our independent shopping guidance website and tools." },
    { property: "og:title", content: "Privacy Policy | ResolveDesk" },
    { property: "og:description", content: "ResolveDesk privacy information for website visitors and customers seeking independent shopping guidance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LegalPage page="privacy-policy" />;
}