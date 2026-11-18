import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/resolvedesk/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact ResolveDesk | Independent Shopping Guidance" },
    { name: "description", content: "Contact ResolveDesk for independent guidance with online shopping, delivery, return, and order questions." },
    { property: "og:title", content: "Contact ResolveDesk | Independent Shopping Guidance" },
    { property: "og:description", content: "Start a conversation about your online shopping concern and prepare for your next step." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});