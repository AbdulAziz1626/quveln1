import type { Metadata } from "next";
import { LegalLayout, legalUpdated } from "@/components/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quvel collects, uses, and protects information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated={legalUpdated}>
      <p>
        Quvel (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides an AI-powered
        call-answering and appointment-booking service for businesses. This policy explains
        what information we collect, why we collect it, and how we handle it. We keep our
        practices simple and only collect what we need to run the service.
      </p>
      <h2>1. Information We Collect</h2>
      <p>We collect information in two ways:</p>
      <ul>
        <li>
          <strong>From businesses that use Quvel:</strong> your name, business name, email,
          phone number, business hours, services, pricing, and calendar or booking details
          you provide so the AI can answer on your behalf.
        </li>
        <li>
          <strong>From callers who reach a Quvel-powered line:</strong> phone number, the
          content of the call (including a recording or transcript where permitted by law),
          and any details the caller shares to book or ask about a service.
        </li>
      </ul>
      <h2>2. How We Use Information</h2>
      <p>
        We use the information we collect to answer calls, qualify and book appointments,
        transfer urgent calls, confirm bookings, and improve the accuracy and quality of the
        service. We do not sell personal information.
      </p>
      <h2>3. Call Recordings and Transcripts</h2>
      <p>
        Where the law requires notice or consent for recording, it is the responsibility of
        the business using Quvel to ensure callers are properly notified. We process
        recordings and transcripts solely to deliver and improve the service.
      </p>
      <h2>4. Sharing</h2>
      <p>
        We share information only with service providers who help us operate Quvel (for
        example, telephony, calendar, and infrastructure providers), and only to the extent
        needed to run the service. We may disclose information where required by law.
      </p>
      <h2>5. Data Retention</h2>
      <p>
        We keep information for as long as needed to provide the service and to meet legal,
        accounting, or reporting obligations. Businesses may request deletion of their data
        as described below.
      </p>
      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect information. No
        system is perfectly secure, but we work to safeguard the data entrusted to us.
      </p>
      <h2>7. Your Choices</h2>
      <p>
        Businesses may request access to, correction of, or deletion of their information at
        any time. Callers with questions about how their information was handled should
        contact the business they called, or reach us directly.
      </p>
      <h2>8. Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
      <p style={{ marginTop: 30, fontSize: 14 }}>
        <em>
          This policy is provided as a general starting point and is not legal advice. Have
          it reviewed by a qualified professional before relying on it for your business.
        </em>
      </p>
    </LegalLayout>
  );
}
