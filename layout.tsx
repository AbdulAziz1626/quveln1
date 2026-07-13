import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, SectionHead, IconSquare, CtaRow } from "@/components/ui";
import { CardGrid, Steps, Transcript, FinalCta } from "@/components/sections";
import { Faq } from "@/components/Faq";
import { industries, getIndustry } from "@/data/industries";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  const title = `${ind.name} AI Receptionist — Never Miss a Call`;
  return {
    title,
    description: `${ind.heroSub} Quvel answers every call, books appointments, and qualifies leads 24/7 for ${ind.name.toLowerCase()} businesses.`,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description: ind.heroSub,
      url: `${siteConfig.url}/industries/${ind.slug}`,
      images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description: ind.heroSub,
      images: [`${siteConfig.url}/og-image.png`],
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ind.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-white px-0 pb-[84px] pt-[140px]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,24,40,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(16,24,40,0.035) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 75% 65% at 50% 40%,#000 25%,transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 50% 40%,#000 25%,transparent 72%)",
            }}
          />
        </div>
        <div className="relative z-[2] mx-auto w-full max-w-wrap px-6 text-center">
          <div className="reveal in flex flex-col items-center">
            <BackLink />
            <div className="mb-5">
              <IconSquare name={ind.icon} large />
            </div>
            <span className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-soft shadow-sm">
              {ind.name}
            </span>
            <h1 className="mb-5 max-w-[840px] font-display text-[clamp(38px,4.8vw,60px)] font-bold leading-[1.07] tracking-[-0.02em] text-balance">
              {ind.heroTitle}
            </h1>
            <p className="mx-auto mb-9 max-w-[600px] text-[clamp(16.5px,1.9vw,19px)] leading-[1.65] text-ink-soft">
              {ind.heroSub}
            </p>
            <CtaRow />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title="The Calls You Can't Afford to Miss." />
          <CardGrid items={ind.problems} numbered />
        </div>
      </section>

      {/* How it helps */}
      <section className="px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead eyebrow="How Quvel Helps" title="Three Simple Steps." />
          <Steps steps={ind.steps} />
        </div>
      </section>

      {/* Conversation */}
      <section className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead eyebrow="Real Conversation" title="How a Call Sounds." />
          <Transcript lines={ind.transcript} />
        </div>
      </section>

      {/* Features */}
      <section className="px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title={`Built for ${ind.name}.`} />
          <CardGrid items={ind.features} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title={`${ind.name} Questions.`} />
          <Faq items={ind.faq} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
