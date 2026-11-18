import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Menu,
  RotateCcw,
  Phone,
  MessageCircleMore,
  PackageCheck,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  WalletCards,
  X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/resolvedesk-hero.jpg";
import parcelPhoto from "@/assets/resolvedesk-parcel.jpg";
import orderPhoto from "@/assets/resolvedesk-order.jpg";
import deliveryPhoto from "@/assets/resolvedesk-delivery.jpg";

const phoneLabel = "(833) 581-2461";
const phoneHref = "tel:8335812461";

const links = [
  { href: "#shopping-issues", label: "Shopping issues" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faqs", label: "FAQs" },
];

function BrandMark() {
  return (
    <span aria-hidden="true" className="rd-brand-mark">
      <span />
      <span />
      <span />
    </span>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link aria-label="ResolveDesk home" to="/" className={`rd-brand ${footer ? "rd-brand-footer" : ""}`}>
      <BrandMark />
      <span>Resolve<span className="rd-brand-light">Desk</span></span>
    </Link>
  );
}

function CallLink({ label = "Call ResolveDesk", prominent = false }: { label?: string; prominent?: boolean }) {
  return (
    <Button asChild size="lg" variant={prominent ? "coral" : "deep"} className="rd-call-button">
      <a href={phoneHref}>
        {label} <span className="rd-call-number">{phoneLabel}</span> <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function StickyCallButton() {
  return (
    <a aria-label={`Call ResolveDesk at ${phoneLabel}`} className="rd-sticky-call" href={phoneHref}>
      <Phone aria-hidden="true" />
      <span>Call {phoneLabel}</span>
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="rd-header">
      <div className="rd-header-inner">
        <Brand />
        <nav aria-label="Main navigation" className={`rd-nav ${menuOpen ? "rd-nav-open" : ""}`}>
          {links.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="rd-header-actions">
          <span className="rd-header-phone">{phoneLabel}</span>
          <CallLink label="Call" />
          <Button
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rd-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            size="icon"
            variant="outline"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const legalLinks = [
    { to: "/privacy-policy", label: "Privacy policy" },
    { to: "/terms-of-service", label: "Terms of service" },
    { to: "/disclaimer", label: "Disclaimer" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <footer className="rd-footer">
      <div className="rd-container">
        <div className="rd-footer-grid">
          <div className="rd-footer-brand-block">
            <Brand footer />
            <p>Independent guidance for the moments when online shopping doesn’t go to plan.</p>
          </div>
          <div className="rd-footer-col">
            <h2>Explore</h2>
            <a href="/#shopping-issues">Shopping issues</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#faqs">FAQs</a>
          </div>
          <div className="rd-footer-col">
            <h2>Good to know</h2>
            {legalLinks.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </div>
          <div className="rd-footer-call">
            <span className="rd-footer-label">A clear place to start</span>
            <a href={phoneHref}>{phoneLabel}</a>
            <CallLink label="Call ResolveDesk" prominent />
          </div>
        </div>
        <div className="rd-footer-disclosure">
          ResolveDesk is an independent assistance and informational service. We are not a retailer, marketplace, payment processor, or delivery company. We cannot guarantee refunds, replacements, deliveries, or outcomes.
        </div>
        <div className="rd-footer-bottom">
          <span>© 2026 ResolveDesk. All rights reserved.</span>
          <span>Independent. Informational. Here to help you prepare.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={`rd-section-heading ${centered ? "rd-center" : ""}`}>
      <span className="rd-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="rd-hero">
      <div className="rd-container rd-hero-grid">
        <div className="rd-hero-copy">
          <span className="rd-eyebrow rd-eyebrow-light">Independent shopping assistance</span>
          <h1>Online shopping problems? <em>Let’s find your next step.</em></h1>
          <p>Waiting on an order, confused about a refund, or dealing with a delivery problem? ResolveDesk helps you understand your options and prepare for the next step.</p>
          <div className="rd-hero-actions">
            <CallLink label="Call ResolveDesk" prominent />
            <a className="rd-text-link rd-text-link-light" href="#shopping-issues">Explore shopping issues <ArrowDownRight aria-hidden="true" /></a>
          </div>
          <div className="rd-hero-trust"><ShieldCheck aria-hidden="true" /> Independent guidance. Clear information. Practical next steps.</div>
        </div>
        <div className="rd-hero-visual">
          <img alt="A woman taking a moment to review her phone at home" fetchPriority="high" height={1152} src={heroPhoto} width={1536} />
          <div className="rd-image-caption"><span className="rd-caption-icon"><Sparkles aria-hidden="true" /></span><span>Clear guidance<br />for your next step</span><ArrowUpRight aria-hidden="true" /></div>
          <span className="rd-hero-note">A calmer way<br />to figure it out.</span>
        </div>
        <div className="rd-hero-footnote"><span>01 / 04</span><span>Good things start with a little clarity</span><a href="#shopping-issues" aria-label="Scroll to shopping issues"><ArrowDownRight aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}

const issueItems = [
  { title: "Order not received", copy: "Your confirmation is here, but your package hasn’t arrived.", icon: PackageSearch },
  { title: "Delivery & tracking", copy: "Make sense of tracking updates or delayed shipments.", icon: Truck },
  { title: "Returns & refunds", copy: "Understand return windows, refund procedures, and questions to ask.", icon: RotateCcw },
  { title: "Payment questions", copy: "Questions about billing, charges, or payment confirmations?", icon: WalletCards },
  { title: "Damaged or incorrect items", copy: "Received something damaged, incomplete, or not quite right?", icon: PackageCheck },
  { title: "Account access guidance", copy: "Having trouble signing in to your shopping account?", icon: ShieldCheck },
  { title: "Missing delivery", copy: "Your tracking says delivered, but you can’t locate your package.", icon: ShoppingBag },
];

function IssuesSection() {
  return (
    <section className="rd-issues rd-section" id="shopping-issues">
      <div className="rd-container">
        <PageHeading eyebrow="Here’s where to start" title="What’s happening with your order?" copy="Choose the situation that best describes what you’re dealing with. We’ll help you understand what to look into next." />
        <div className="rd-issues-grid">
          {issueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="rd-issue-item" key={item.title}>
                <span className="rd-issue-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="rd-issue-icon"><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a className="rd-issue-link" href={phoneHref}>Call for guidance <ArrowRight aria-hidden="true" /></a>
              </article>
            );
          })}
          <div className="rd-issues-aside">
            <span className="rd-aside-mark"><MessageCircleMore aria-hidden="true" /></span>
            <p>No two situations are quite alike. Start by laying out the details that matter to you.</p>
            <a className="rd-text-link" href="#how-it-works">See how it works <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { number: "01", title: "Explain the issue", copy: "Tell us what happened with your order so you can focus on the details that matter." },
  { number: "02", title: "Understand your options", copy: "Get general guidance on information to review, documents to prepare, and questions to ask." },
  { number: "03", title: "Take your next step", copy: "Approach the relevant retailer or service provider with clearer information." },
];

function ProcessSection() {
  return (
    <section className="rd-section rd-process" id="how-it-works">
      <div className="rd-container">
        <PageHeading eyebrow="Simple by design" title="A little clarity can change what comes next." copy="A grounded starting point, and a clearer conversation when you’re ready." />
        <div className="rd-timeline">
          {processSteps.map((step) => (
            <article className="rd-step" key={step.number}>
              <span className="rd-step-marker">{step.number}</span>
              <div><span className="rd-step-label">Step {step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
            </article>
          ))}
        </div>
        <div className="rd-process-action"><CallLink /></div>
      </div>
    </section>
  );
}

function CallBanner() {
  return (
    <section className="rd-banner-wrap">
      <div className="rd-container">
        <div className="rd-call-banner">
          <span className="rd-eyebrow">Here when you need a starting point</span>
          <div className="rd-banner-grid">
            <div><h2>Not sure where to start?<br /><em>Let’s make a call.</em></h2><p>Explain your shopping concern. We can help you consider what information to gather and which next steps may be worth exploring.</p></div>
            <div className="rd-banner-phone"><span>Talk it through</span><a href={phoneHref}>{phoneLabel}</a><CallLink label="Call now:" /></div>
          </div>
          <span className="rd-banner-seal" aria-hidden="true"><Headphones /></span>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="rd-section rd-why">
      <div className="rd-container rd-why-grid">
        <div className="rd-why-photos">
          <img alt="A customer opens a delivery at home" className="rd-photo-main" height={1152} loading="lazy" src={parcelPhoto} width={1536} />
          <img alt="A customer reviewing order details on a laptop" className="rd-photo-inset" height={1152} loading="lazy" src={orderPhoto} width={1536} />
          <span className="rd-photo-index">A little clearer,<br />step by step.</span>
        </div>
        <div className="rd-why-copy">
          <PageHeading eyebrow="Why choose ResolveDesk" title="Clearer guidance when online shopping gets complicated." copy="Support that helps you feel more prepared, without pretending to have all the answers." />
          <div className="rd-benefit-list">
            <div><span>01</span><div><h3>Straightforward explanations</h3><p>Understand common shopping procedures without unnecessary complexity.</p></div></div>
            <div><span>02</span><div><h3>Help organizing information</h3><p>Know which order details and documents may be useful to have nearby.</p></div></div>
            <div><span>03</span><div><h3>Guidance for your next conversation</h3><p>Prepare questions and information before you contact the relevant retailer.</p></div></div>
            <div><span>04</span><div><h3>Simple tools for planning</h3><p>Use practical resources to keep the next steps in view.</p></div></div>
          </div>
          <p className="rd-independent-note"><ShieldCheck aria-hidden="true" /> ResolveDesk is independent and cannot access retailer systems or make decisions on a retailer’s behalf.</p>
        </div>
      </div>
      <img alt="A parcel waiting at the entrance to a bright home" className="rd-delivery-strip" height={1152} loading="lazy" src={deliveryPhoto} width={1536} />
    </section>
  );
}

const faqs = [
  ["Is ResolveDesk an official retailer support service?", "ResolveDesk is an independent shopping assistance and guidance service. It is not affiliated with, endorsed by, or operated by any retailer or marketplace."],
  ["Can ResolveDesk issue my refund?", "No. Refunds are processed by the retailer or payment provider according to their applicable policies. We can help you understand general procedures and prepare questions."],
  ["Can you access my shopping account?", "No. ResolveDesk does not access or control your personal shopping accounts. Never share your password or verification codes with us."],
  ["Can you help with a missing delivery?", "We can help you understand common delivery issues and organize information you may need when contacting the retailer or delivery provider."],
  ["What if I received a damaged or incorrect product?", "We can explain general steps for documenting the issue and preparing a return, replacement, or refund inquiry."],
  ["Is a refund guaranteed?", "No. Refund decisions depend on the retailer’s policies, purchase conditions, and applicable consumer protections."],
  ["How do I get started?", "Call ResolveDesk and explain your concern. We can help you identify relevant information and possible next steps."],
  ["Do you represent online shopping companies?", "No. ResolveDesk operates independently and does not represent or impersonate retailers, marketplaces, or delivery providers."],
] as const;

function FaqSection() {
  return (
    <section className="rd-section rd-faq" id="faqs">
      <div className="rd-container rd-faq-layout">
        <div className="rd-faq-intro"><PageHeading eyebrow="The useful details" title="A few things worth knowing." copy="Straight answers about what we can—and can’t—do." /><a className="rd-text-link" href="/disclaimer">Read our disclaimer <ArrowUpRight aria-hidden="true" /></a></div>
        <Accordion collapsible className="rd-faq-list" type="single">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index + 1}`}>
              <AccordionTrigger><span><small>{String(index + 1).padStart(2, "0")}</small>{question}</span></AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalContact() {
  return (
    <section className="rd-final-contact">
      <div aria-hidden="true" className="rd-final-ring" />
      <div className="rd-container rd-final-content">
        <span className="rd-eyebrow rd-eyebrow-light">Whenever you’re ready to talk</span>
        <h2>Your next step starts<br />with a conversation.</h2>
        <p>Whether you have a delivery question, a return concern, or an order issue, start by explaining what happened.</p>
        <a className="rd-final-phone" href={phoneHref}>{phoneLabel} <ArrowUpRight aria-hidden="true" /></a>
        <CallLink label="Call ResolveDesk" prominent />
        <span className="rd-final-footnote">Independent guidance. No guarantees. Just a clear place to begin.</span>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IssuesSection />
        <ProcessSection />
        <CallBanner />
        <WhySection />
        <FaqSection />
        <FinalContact />
      </main>
      <SiteFooter />
    </>
  );
}

const legalPages = {
  "privacy-policy": {
    eyebrow: "Your information",
    title: "Privacy policy",
    intro: "This policy describes how ResolveDesk handles information when you visit this website or contact us. It is written for the service as described here and should be reviewed against actual business practices before publication.",
    updated: "Last updated: November 2026",
    sections: [
      ["Information you choose to share", "This website does not collect information through forms and does not require an account. If you contact us by phone, we may receive the information you decide to share in that conversation."],
      ["How information may be used", "Information you choose to send may be used to respond to your inquiry, provide the guidance you requested, and maintain the safety and operation of this website. Do not share shopping account passwords, payment card details, verification codes, or other sensitive credentials."],
      ["Website activity and cookies", "The website may receive basic technical information required to deliver a page, such as your browser type and the page requested. [Confirm whether the published website uses analytics, advertising, cookies, or similar tracking before launch, and update this section if it does.]"],
      ["Sharing and retention", "ResolveDesk does not sell personal information. Information may be handled by service providers necessary to operate communications and the website, subject to their applicable arrangements. [Add confirmed retention practices, service providers, and contact channels before publishing this policy.]"],
      ["Your choices", "You may choose not to share personal information beyond what is needed to contact you. Privacy rights depend on where you live and the actual business location and practices; [add the applicable rights request process and response contact after confirming them]."],
      ["Children and changes", "This service is intended for a general consumer audience and is not directed to children under 13. We may update this policy when our practices or legal requirements change. The effective date above should be updated whenever the policy is revised."],
      ["Contact about privacy", "Contact ResolveDesk using the details on the Contact page. [Add and confirm a business contact address and the applicable privacy contact before this policy is published.]"],
    ],
  },
  "terms-of-service": {
    eyebrow: "Before you use our service",
    title: "Terms of service",
    intro: "These terms describe the intended use of the ResolveDesk website and general shopping-assistance service. They are a working draft for the service described here and should be reviewed for the actual business and the laws that apply before publication.",
    updated: "Last updated: November 2026",
    sections: [
      ["What ResolveDesk provides", "ResolveDesk offers independent, general informational guidance by phone to help consumers organize information and prepare questions about common online-shopping issues. We may suggest information to review and ways to prepare for contacting the retailer or service provider involved."],
      ["Independent service and limits", "ResolveDesk is not a retailer, marketplace, delivery company, payment provider, law firm, or official support team for another company. We do not access or control shopping accounts, shipping systems, or payment accounts. Only the relevant business can make decisions under its policies or process a refund, return, replacement, delivery update, or account change."],
      ["No outcome or professional-advice guarantee", "Information on this website is general and is not legal, financial, or professional advice. Individual policies, purchase terms, and consumer rights vary. We do not promise a particular result, response time, refund, replacement, delivery, or other outcome."],
            ["Using this site", "Use the website lawfully and do not interfere with its operation, attempt to gain unauthorized access, or provide information you are not entitled to share. Do not share passwords, full payment-card information, or verification codes when you call."],
      ["Website content and availability", "We aim to keep the website useful, but information can be incomplete, change, or become out of date. The site and tools are offered as available and may be changed or unavailable from time to time."],
      ["Details to confirm", "[Add confirmed governing-law, dispute-resolution, limitation-of-liability, company identity, and service-contact language after obtaining appropriate legal review. Do not treat this draft as a complete jurisdiction-specific contract.]"],
      ["Contact", "For questions about these terms, use the contact details on the Contact page. The terms should display a confirmed effective date and be made available before the service is used."],
    ],
  },
  disclaimer: {
    eyebrow: "Clear about what we do",
    title: "Disclaimer",
    intro: "A straightforward description of the boundaries of ResolveDesk’s independent shopping-assistance service.",
    updated: "Last updated: November 2026",
    sections: [
      ["Independent informational assistance", "ResolveDesk is an independent assistance and informational service. We are not a retailer, marketplace, payment processor, delivery company, or official retailer support service, and we are not affiliated with or endorsed by those businesses."],
      ["No access to external accounts", "We do not access, control, or act within your online-shopping accounts, retailer systems, payment accounts, or delivery-provider systems. Do not share your password, one-time codes, or sensitive payment information."],
      ["General information, not decisions", "Guidance is general information to help you organize your situation and prepare questions. The retailer, marketplace, payment provider, or delivery provider involved makes decisions under its own processes and terms. ResolveDesk cannot issue or authorize refunds, returns, replacements, delivery changes, or account actions."],
      ["No guaranteed result", "Return eligibility, delivery outcomes, payment decisions, and refunds depend on the relevant business’s policies, purchase conditions, and applicable consumer protections. ResolveDesk cannot guarantee a refund, replacement, delivery, response, or other outcome."],
            ["No legal or financial advice", "The information on this website is not legal, financial, or professional advice. If you need advice about your rights or a financial matter, consult a qualified professional in your area."],
      ["Contact", "For questions about this disclaimer or independent guidance, visit our Contact page. [Confirm and publish appropriate contact details before launch.]"],
    ],
  },
} as const;

type LegalPageName = keyof typeof legalPages;

export function LegalPage({ page }: { page: LegalPageName }) {
  const content = legalPages[page];
  return (
    <><SiteHeader /><main className="rd-document">
      <div className="rd-container">
        <div className="rd-document-heading"><span className="rd-eyebrow">{content.eyebrow}</span><h1>{content.title}</h1><p>{content.intro}</p><span className="rd-document-updated">{content.updated}</span></div>
        <div className="rd-document-layout">
          <aside><span>In this document</span>{content.sections.map(([title]) => <a key={title} href={`#${toSlug(title)}`}>{title}</a>)}</aside>
          <div className="rd-document-body">{content.sections.map(([title, copy]) => <section id={toSlug(title)} key={title}><h2>{title}</h2><p>{copy}</p></section>)}</div>
        </div>
        <a className="rd-text-link rd-document-back" href="/">Back to ResolveDesk <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </main><SiteFooter /></>
  );
}

function toSlug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ContactPage() {
  return (
    <><SiteHeader /><main className="rd-document rd-contact-page">
      <div className="rd-container">
        <div className="rd-contact-hero"><div><span className="rd-eyebrow">A conversation is a good place to start</span><h1>Get in touch.</h1><p>Tell us a little about the shopping concern you’re working through. We can help you identify useful information and prepare for your next conversation.</p></div><img alt="A calm, thoughtfully arranged home delivery area" height={1152} loading="lazy" src={deliveryPhoto} width={1536} /></div>
        <div className="rd-contact-grid">
          <div className="rd-contact-way"><span className="rd-tool-icon"><Headphones aria-hidden="true" /></span><h2>Call ResolveDesk</h2><p>Explain what happened and what you are trying to understand.</p><a href={phoneHref}>{phoneLabel} <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="rd-contact-way"><span className="rd-tool-icon rd-tool-icon-coral"><MessageCircleMore aria-hidden="true" /></span><h2>Before you reach out</h2><p>Keep your order details nearby if you wish, but never share passwords, verification codes, or full payment-card details.</p><a href="/disclaimer">Read the service disclaimer <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <div className="rd-contact-placeholder"><ShieldCheck aria-hidden="true" /><p>This contact page lists (833) 581-2461. Confirm that (833) 581-2461 is the correct business number before publishing.</p></div>
      </div>
    </main><SiteFooter /></>
  );
}