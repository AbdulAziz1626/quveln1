/**
 * Single source of truth for site-wide configuration.
 * Change the live AI number, demo link, or contact email here only —
 * every button and link across the site reads from this object.
 */
export const siteConfig = {
  name: "Quvel",
  tagline: "AI Receptionists for Service Businesses",
  description:
    "Quvel is an AI receptionist for service businesses. It answers every call, books appointments, qualifies leads, and works 24/7 so you never lose another customer.",
  url: "https://getquvel.com",
  demoUrl: "https://cal.com/abdulaziz-4o5puo/30minute-demo",
  liveAiTel: "+14582168617",
  contactEmail: "hello@getquvel.com",
} as const;

export const liveAiHref = `tel:${siteConfig.liveAiTel}`;
