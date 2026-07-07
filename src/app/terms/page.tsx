import type { Metadata } from "next";
import { LegalLayout, legalUpdated } from "@/components/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Quvel.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated={legalUpdated}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of Quvel. By using the
        service, you agree to these Terms. If you do not agree, do not use the service.
      </p>
      <h2>1. The Service</h2>
      <p>
        Quvel provides an AI receptionist that answers calls, books appointments, qualifies
        leads, answers common questions, and transfers urgent calls on behalf of your
        business, based on the information you provide during setup.
      </p>
      <h2>2. Your Responsibilities</h2>
      <ul>
        <li>Provide accurate business information, hours, pricing, and booking details.</li>
        <li>Ensure you have the right to forward or connect your business phone line to Quvel.</li>
        <li>
          Comply with all laws that apply to your business, including any call-recording
          notice or consent requirements in your area.
        </li>
      </ul>
      <h2>3. Acceptable Use</h2>
      <p>
        You agree not to use Quvel for any unlawful, deceptive, or harmful purpose, and not to
        misrepresent the service to your callers in a way that violates the law.
      </p>
      <h2>4. Availability</h2>
      <p>
        We work to keep Quvel available and accurate, but we do not guarantee uninterrupted or
        error-free service. The AI may occasionally misunderstand a caller; you are
        responsible for reviewing bookings and following up where needed.
      </p>
      <h2>5. Fees</h2>
      <p>
        Any fees, billing terms, and cancellation terms will be set out in the plan or
        agreement you accept when you sign up. We aim to keep pricing simple and transparent.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Quvel is provided &quot;as is,&quot; and we
        are not liable for indirect, incidental, or consequential damages arising from your
        use of the service, including missed or mishandled calls.
      </p>
      <h2>7. Termination</h2>
      <p>
        You may stop using Quvel at any time. We may suspend or end access if these Terms are
        violated or if required to protect the service or others.
      </p>
      <h2>8. Changes</h2>
      <p>
        We may update these Terms as the service evolves. Continued use after an update means
        you accept the revised Terms.
      </p>
      <h2>9. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
      <p style={{ marginTop: 30, fontSize: 14 }}>
        <em>
          These Terms are a general starting point and are not legal advice. Have them
          reviewed by a qualified professional before relying on them for your business.
        </em>
      </p>
    </LegalLayout>
  );
}
