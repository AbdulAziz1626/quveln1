import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHead, IconSquare } from "@/components/ui";
import { CardGrid, Steps, FinalCta } from "@/components/sections";
import { CallCard } from "@/components/CallCard";
import { CallButton } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { homeFaq, industries } from "@/data/industries";
import type { IndustryFeature } from "@/data/industries";

const problems: IndustryFeature[] = [
  { t: "Busy Team", d: "Your staff is already working. When the phone rings, no one is free to pick it up.", icon: "users" },
  { t: "Missed Call", d: "The call goes to voicemail—and most customers never leave a message.", icon: "phoneMissed" },
  { t: "Customer Chooses Competitor", d: "They hang up and call the next business that answers. That job is gone.", icon: "userX" },
];

const steps: IndustryFeature[] = [
  { t: "Customer Calls", d: "A new customer calls your business.", icon: "phone" },
  { t: "Quvel Answers", d: "It answers instantly and handles the conversation.", icon: "check" },
  { t: "Appointment Booked", d: "The job lands in your calendar—automatically.", icon: "calendar" },
];

const features: IndustryFeature[] = [
  { t: "Answers Every Call", d: "No ring goes unanswered—day, night, weekend, or holiday.", icon: "phone" },
  { t: "Books Appointments", d: "Schedules jobs straight into your calendar during the call.", icon: "calendar" },
  { t: "Transfers Urgent Calls", d: "Routes real emergencies to your team right away.", icon: "transfer" },
  { t: "Qualifies Leads", d: "Gathers the details you need before the call ends.", icon: "filter" },
  { t: "Answers FAQs", d: "Handles hours, location, and common questions instantly.", icon: "message" },
  { t: "Works 24/7", d: "Always on, so you never lose a customer to voicemail.", icon: "clock" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem */}
      <section id="problem" className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead
            title="Every Missed Call Is Lost Revenue."
            sub="Most customers won't leave a voicemail. They call the next business on the list."
          />
          <CardGrid items={problems} numbered />
        </div>
      </section>

      {/* Solution */}
      <section id="how" className="px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead eyebrow="The Solution" title="Meet Quvel." />
          <Steps steps={steps} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title="Everything Quvel Handles." />
          <CardGrid items={features} />
        </div>
      </section>

      {/* Live demo */}
      <section id="hear" className="px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead eyebrow="Live Demo" title="Talk to Quvel Right Now." />
          <div className="reveal mx-auto grid max-w-[920px] items-center gap-12 max-[820px]:gap-8 min-[821px]:grid-cols-2">
            <div className="max-[820px]:text-center">
              <h3 className="mb-[14px] font-display text-[clamp(23px,2.8vw,30px)] font-bold tracking-[-0.02em]">
                Hear it for yourself.
              </h3>
              <p className="mb-[26px] text-[16.5px] leading-[1.65] text-ink-soft">
                No sign-up, no recording, no sales pitch. Call the live line and have a
                real conversation with Quvel—ask about hours, book an appointment, or
                throw it a curveball. This is exactly what your customers will hear.
              </p>
              <div className="flex flex-wrap gap-[14px] max-[820px]:justify-center max-[480px]:flex-col">
                <CallButton />
              </div>
            </div>
            <CallCard />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-bg-alt px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title="Built for Service Businesses." />
          <div className="stagger grid gap-5 min-[861px]:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                aria-label={`${ind.name} — learn more`}
                className="flex cursor-pointer flex-col gap-[14px] rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-hover"
              >
                <IconSquare name={ind.icon} />
                <h3 className="font-display text-[18.5px] font-bold tracking-[-0.02em]">
                  {ind.name}
                </h3>
                <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-0 py-[110px] max-[768px]:py-[76px]">
        <div className="mx-auto w-full max-w-wrap px-6">
          <SectionHead title="Frequently Asked Questions." />
          <Faq items={homeFaq} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
