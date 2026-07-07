import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-0 pt-[160px] text-center" style={{ minHeight: "80vh" }}>
      <div className="mx-auto w-full max-w-wrap px-6">
        <p className="mb-[14px] text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">
          404
        </p>
        <h1 className="mb-[18px] font-display text-[clamp(28px,3.8vw,42px)] font-bold tracking-[-0.02em]">
          Page not found.
        </h1>
        <p className="mx-auto mb-9 max-w-[600px] text-[clamp(16.5px,1.9vw,19px)] leading-[1.65] text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[14px] bg-ink px-[26px] py-[15px] text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-black"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
