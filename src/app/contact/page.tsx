import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BackLink, IconSquare } from "@/components/ui";
import { siteConfig, liveAiHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Quvel team about pricing, setup, or whether it fits your business.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="px-0 pt-[140px] pb-[110px]" style={{ minHeight: "85vh" }}>
      <div className="mx-auto w-full max-w-wrap px-6">
        <div className="reveal in mx-auto grid max-w-[980px] items-start gap-[52px] max-[860px]:gap-9 min-[861px]:grid-cols-[0.9fr_1.1fr]">
          <div>
            <BackLink />
            <h1 className="mb-[14px] font-display text-[clamp(30px,4vw,44px)] font-bold leading-[1.07] tracking-[-0.02em]">
              Get in Touch.
            </h1>
            <p className="mb-[26px] max-w-[420px] text-[16.5px] leading-[1.65] text-ink-soft">
              Questions about Quvel, pricing, or whether it fits your business? Send a
              message and we&apos;ll get back to you.
            </p>
            <div className="mb-[14px] flex items-center gap-3 text-[15px] text-ink-soft">
              <span className="[&_.iq]:mb-0 [&_.iq]:h-10 [&_.iq]:w-10 [&_.iq]:rounded-[11px]">
                <IconSquare name="mail" />
              </span>
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-accent">
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className="mb-[14px] flex items-center gap-3 text-[15px] text-ink-soft">
              <span className="[&_.iq]:mb-0 [&_.iq]:h-10 [&_.iq]:w-10 [&_.iq]:rounded-[11px]">
                <IconSquare name="phone" />
              </span>
              <a href={liveAiHref} className="font-medium text-accent">
                Call the AI Live
              </a>
            </div>
            <div className="mb-[14px] flex items-center gap-3 text-[15px] text-ink-soft">
              <span className="[&_.iq]:mb-0 [&_.iq]:h-10 [&_.iq]:w-10 [&_.iq]:rounded-[11px]">
                <IconSquare name="calendar" />
              </span>
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent"
              >
                Book a 30-minute demo
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
