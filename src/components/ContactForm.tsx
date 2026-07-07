"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const biz = (form.elements.namedItem("biz") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !msg) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Quvel inquiry from ${name}${biz ? " — " + biz : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nBusiness: ${biz || "—"}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[20px] border border-line bg-white p-8 shadow-card"
    >
      <Field label="Name" htmlFor="name">
        <input id="name" name="name" type="text" placeholder="Your name" required className={inputClass} />
      </Field>
      <Field label="Business name" htmlFor="biz">
        <input id="biz" name="biz" type="text" placeholder="Your business" className={inputClass} />
      </Field>
      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" placeholder="you@business.com" required className={inputClass} />
      </Field>
      <Field label="Message" htmlFor="msg">
        <textarea
          id="msg"
          name="msg"
          rows={5}
          placeholder="Tell us about your business and what you need…"
          required
          className={`${inputClass} resize-y`}
        />
      </Field>
      {error && <p className="mb-3 text-[13.5px] font-medium text-red-600">{error}</p>}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-ink px-[26px] py-[15px] text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(16,24,40,0.22)]"
      >
        <Icon name="send" size={18} /> Send Message
      </button>
      <p className="mt-3 text-center text-[12.5px] text-ink-faint">
        Opens your email app with the message ready to send to {siteConfig.contactEmail}.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-[11px] border border-line bg-white px-[14px] py-3 text-[15px] text-ink transition-all placeholder:text-ink-faint focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)]";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-[18px]">
      <label htmlFor={htmlFor} className="mb-[7px] block text-[13.5px] font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
