import { BackLink } from "@/components/ui";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-0 pt-[130px] pb-[110px]" style={{ minHeight: "80vh" }}>
      <div className="reveal in mx-auto max-w-[760px] px-6">
        <BackLink />
        <h1 className="mb-2 font-display text-[clamp(30px,4vw,42px)] font-bold leading-[1.07] tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mb-[34px] text-sm text-ink-faint">Last updated: {updated}</p>
        <div className="[&_a]:text-accent [&_h2]:mb-[10px] [&_h2]:mt-[30px] [&_h2]:font-display [&_h2]:text-[20px] [&_h2]:font-bold [&_li]:mb-1.5 [&_li]:text-[15.5px] [&_li]:leading-[1.7] [&_li]:text-ink-soft [&_p]:mb-[13px] [&_p]:text-[15.5px] [&_p]:leading-[1.7] [&_p]:text-ink-soft [&_ul]:mb-[13px] [&_ul]:ml-[22px] [&_ul]:list-disc">
          {children}
        </div>
      </div>
    </section>
  );
}

export const legalUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
