import type { IconName } from "@/components/Icon";

export interface FaqItem {
  q: string;
  a: string;
}

export interface IndustryFeature {
  t: string;
  d: string;
  icon: IconName;
}

export interface TranscriptLine {
  ai: boolean;
  who: string;
  msg: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  heroTitle: string;
  heroSub: string;
  problems: IndustryFeature[];
  steps: IndustryFeature[];
  transcript: TranscriptLine[];
  features: IndustryFeature[];
  faq: FaqItem[];
}

export const homeFaq: FaqItem[] = [
  {
    q: "Does Quvel replace my receptionist?",
    a: "No. Quvel handles the calls your team can't get to—after hours, during busy periods, or when everyone's already on the phone. It works alongside your staff so no call goes unanswered.",
  },
  {
    q: "Can it book appointments?",
    a: "Yes. Quvel checks your availability and books appointments directly into your calendar during the call, then confirms the details with the customer.",
  },
  {
    q: "What about emergency calls?",
    a: "Quvel recognizes urgent situations and transfers the caller to you or your on-call team right away, so real emergencies never wait.",
  },
  {
    q: "Does it work after hours?",
    a: "Yes. Quvel answers 24/7—nights, weekends, and holidays—so you capture customers who call when your office is closed.",
  },
  {
    q: "Does it sound natural?",
    a: "Yes. Quvel speaks in a clear, natural voice and holds a normal conversation. Most callers simply feel like they reached a helpful receptionist. Call the live line and judge for yourself.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are up and running quickly. We configure Quvel with your services, hours, and booking details, then connect it to your line.",
  },
  {
    q: "Can I use my existing number?",
    a: "Yes. Quvel works with your current business number—there's nothing for your customers to learn or dial differently.",
  },
  {
    q: "Is there a contract?",
    a: "We keep things simple and flexible. Book a demo and we'll walk through the options that fit your business.",
  },
];

export const industries: Industry[] = [
  {
    slug: "auto-repair",
    name: "Auto Repair",
    icon: "wrench",
    heroTitle: "Never Miss Another Repair Job.",
    heroSub:
      "Quvel answers every call, books inspections and services, and keeps your bays full—so customers never end up at the shop down the street.",
    problems: [
      { t: "Techs Can't Answer", d: "Your team is under a hood or on a lift—not by the phone when a new customer calls.", icon: "users" },
      { t: "Missed Calls", d: "A ringing phone with no answer sends drivers straight to a competitor.", icon: "phoneMissed" },
      { t: "Lost Repair Jobs", d: "Every unanswered call is a brake job, diagnostic, or service that books somewhere else.", icon: "userX" },
    ],
    steps: [
      { t: "Customer Calls", d: "A driver calls about a repair or service.", icon: "phone" },
      { t: "Quvel Answers", d: "It gathers the vehicle and issue, and checks your schedule.", icon: "check" },
      { t: "Appointment Booked", d: "The inspection or service is booked into your calendar.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "Hi, my brakes are squealing. Can I get them looked at this week?" },
      { ai: true, who: "Quvel", msg: "Absolutely. I can book a brake inspection. Is your car a sedan, SUV, or truck?" },
      { ai: false, who: "Customer", msg: "It's a Honda Accord." },
      { ai: true, who: "Quvel", msg: "Great. I have Thursday at 9 AM or Friday at 2 PM. Which works better?" },
      { ai: false, who: "Customer", msg: "Thursday at 9 works." },
      { ai: true, who: "Quvel", msg: "You're booked for a brake inspection Thursday at 9 AM. We'll see you then." },
    ],
    features: [
      { t: "Oil Change Booking", d: "Books routine oil changes and services straight into your schedule.", icon: "calendar" },
      { t: "Brake Service", d: "Captures brake complaints and books inspections on the spot.", icon: "wrench" },
      { t: "Diagnostics", d: "Logs the customer's symptoms so techs know what to expect.", icon: "filter" },
      { t: "Business Hours", d: "Answers questions about hours, location, and availability.", icon: "clock" },
      { t: "Emergency Transfers", d: "Sends urgent breakdowns straight to your team.", icon: "transfer" },
      { t: "Appointment Confirmation", d: "Confirms every booking so customers actually show up.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel book different service types?", a: "Yes—oil changes, brake work, diagnostics, and general services all book directly into your calendar." },
      { q: "What if a car won't start and it's urgent?", a: "Quvel recognizes urgent breakdowns and transfers the caller to your team right away." },
      { q: "Can it answer pricing questions?", a: "Quvel shares the pricing details you provide and books the appointment so your advisor can confirm." },
      { q: "Does it work after the shop closes?", a: "Yes. Quvel answers 24/7 and books jobs even when your bays are closed for the night." },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: "thermometer",
    heroTitle: "Never Miss Another Service Call.",
    heroSub:
      "Quvel answers every call, books repairs and maintenance, and routes no-heat and no-cool emergencies to your team—day or night.",
    problems: [
      { t: "Techs in the Field", d: "Your crews are on jobs, not sitting by the phone when a new call comes in.", icon: "users" },
      { t: "Missed Calls", d: "When the AC dies in July, the first company to answer wins the job.", icon: "phoneMissed" },
      { t: "Lost Service Calls", d: "Every missed ring is a repair or install that goes to a competitor.", icon: "userX" },
    ],
    steps: [
      { t: "Customer Calls", d: "A homeowner calls about heating or cooling.", icon: "phone" },
      { t: "Quvel Answers", d: "It captures the problem and checks your availability.", icon: "check" },
      { t: "Appointment Booked", d: "The service call lands in your calendar.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "My AC stopped working and it's really hot in here." },
      { ai: true, who: "Quvel", msg: "I'm sorry to hear that. Is it blowing warm air, or not turning on at all?" },
      { ai: false, who: "Customer", msg: "Not turning on at all." },
      { ai: true, who: "Quvel", msg: "Understood. I can get a technician out today. Is 1 PM or 4 PM better?" },
      { ai: false, who: "Customer", msg: "1 PM, please." },
      { ai: true, who: "Quvel", msg: "You're booked for a service call today at 1 PM. Help is on the way." },
    ],
    features: [
      { t: "AC Repair Booking", d: "Books cooling repairs fast when the heat is on.", icon: "thermometer" },
      { t: "Heating Service", d: "Captures no-heat calls and schedules a visit.", icon: "zap" },
      { t: "Maintenance Plans", d: "Books seasonal tune-ups and recurring maintenance.", icon: "calendar" },
      { t: "Business Hours", d: "Answers questions about service areas and hours.", icon: "clock" },
      { t: "Emergency Transfers", d: "Routes no-heat and no-cool emergencies to your team.", icon: "transfer" },
      { t: "Appointment Confirmation", d: "Confirms every visit so nothing slips.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel handle emergency no-heat calls?", a: "Yes. It identifies emergencies and transfers the caller to your on-call tech immediately." },
      { q: "Can it book seasonal maintenance?", a: "Yes—Quvel books tune-ups and recurring maintenance directly into your schedule." },
      { q: "Does it work in peak season?", a: "That's when it matters most. Quvel answers every call during heat waves and cold snaps, so no job is lost." },
      { q: "Can it answer service-area questions?", a: "Yes. Quvel confirms whether you cover a customer's area using the details you provide." },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: "droplet",
    heroTitle: "Never Miss Another Plumbing Customer.",
    heroSub:
      "Quvel answers every call, books repairs, and routes burst pipes and leaks to your team—so urgent jobs never go to voicemail.",
    problems: [
      { t: "Plumbers on Jobs", d: "Your team is on a job site, not able to grab the phone mid-repair.", icon: "users" },
      { t: "Missed Calls", d: "A leaking pipe won't wait—customers call the next plumber on the list.", icon: "phoneMissed" },
      { t: "Lost Jobs", d: "Every missed call is a repair or install booked by someone else.", icon: "userX" },
    ],
    steps: [
      { t: "Customer Calls", d: "A homeowner calls about a plumbing problem.", icon: "phone" },
      { t: "Quvel Answers", d: "It captures the issue and checks your schedule.", icon: "check" },
      { t: "Appointment Booked", d: "The job is booked into your calendar.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "I have a pipe leaking under my kitchen sink." },
      { ai: true, who: "Quvel", msg: "I can help with that. Is water actively leaking right now, or has it stopped?" },
      { ai: false, who: "Customer", msg: "Still dripping, but I put a bucket under it." },
      { ai: true, who: "Quvel", msg: "Good thinking. I can send a plumber today. Does 11 AM or 3 PM work?" },
      { ai: false, who: "Customer", msg: "11 AM is perfect." },
      { ai: true, who: "Quvel", msg: "You're booked for today at 11 AM. A plumber will be out to fix that leak." },
    ],
    features: [
      { t: "Leak Repair Booking", d: "Captures leaks and books repairs quickly.", icon: "droplet" },
      { t: "Drain Service", d: "Books drain cleaning and clog removal.", icon: "filter" },
      { t: "Water Heater Jobs", d: "Schedules water heater repair and replacement.", icon: "thermometer" },
      { t: "Business Hours", d: "Answers questions about service areas and availability.", icon: "clock" },
      { t: "Emergency Transfers", d: "Routes burst pipes and floods to your team fast.", icon: "transfer" },
      { t: "Appointment Confirmation", d: "Confirms every job so customers are ready.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel handle burst-pipe emergencies?", a: "Yes. It recognizes emergencies like burst pipes and flooding and transfers the caller to you immediately." },
      { q: "Can it book standard repairs?", a: "Yes—leaks, drains, and water heater jobs all book directly into your calendar." },
      { q: "Does it answer after hours?", a: "Yes. Quvel answers 24/7, so late-night water emergencies always reach a real path to help." },
      { q: "Can it collect job details?", a: "Yes. Quvel gathers the problem details so your plumber arrives prepared." },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: "zap",
    heroTitle: "Never Miss Another Electrical Job.",
    heroSub:
      "Quvel answers every call, books electrical work, and routes safety emergencies to your team—so no job or hazard goes unanswered.",
    problems: [
      { t: "Electricians on Site", d: "Your team is wiring a job, not free to answer a new call.", icon: "users" },
      { t: "Missed Calls", d: "A power problem is urgent—customers call the next electrician fast.", icon: "phoneMissed" },
      { t: "Lost Jobs", d: "Every unanswered call is work that books with a competitor.", icon: "userX" },
    ],
    steps: [
      { t: "Customer Calls", d: "A customer calls about an electrical issue.", icon: "phone" },
      { t: "Quvel Answers", d: "It captures the problem and checks availability.", icon: "check" },
      { t: "Appointment Booked", d: "The job is scheduled into your calendar.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "Half the outlets in my house just stopped working." },
      { ai: true, who: "Quvel", msg: "I can help. Have you noticed any burning smell or sparking?" },
      { ai: false, who: "Customer", msg: "No smell, just no power on that side." },
      { ai: true, who: "Quvel", msg: "Okay. I can schedule an electrician. Is tomorrow 10 AM or 2 PM better?" },
      { ai: false, who: "Customer", msg: "10 AM works." },
      { ai: true, who: "Quvel", msg: "You're booked for tomorrow at 10 AM. An electrician will take a look." },
    ],
    features: [
      { t: "Panel & Wiring Jobs", d: "Books panel upgrades and wiring work.", icon: "zap" },
      { t: "Outlet & Lighting", d: "Schedules outlet, switch, and lighting repairs.", icon: "home" },
      { t: "Inspections", d: "Books electrical inspections and estimates.", icon: "filter" },
      { t: "Business Hours", d: "Answers questions about hours and service areas.", icon: "clock" },
      { t: "Emergency Transfers", d: "Routes sparking and safety hazards to your team.", icon: "transfer" },
      { t: "Appointment Confirmation", d: "Confirms every job so customers are ready.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel flag electrical emergencies?", a: "Yes. If a caller reports sparking, burning smells, or a safety hazard, Quvel transfers them to your team right away." },
      { q: "Can it book estimates?", a: "Yes—Quvel books inspections and estimates directly into your schedule." },
      { q: "Does it work outside business hours?", a: "Yes. Quvel answers 24/7 so urgent power issues always reach help." },
      { q: "Can it capture job details?", a: "Yes. Quvel collects the problem details so your electrician arrives prepared." },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: "home",
    heroTitle: "Never Miss Another Roofing Lead.",
    heroSub:
      "Quvel answers every call, books inspections and estimates, and routes storm-damage emergencies to your team—so no lead slips away.",
    problems: [
      { t: "Crews on Roofs", d: "Your team is on a job, not able to answer a ringing phone.", icon: "users" },
      { t: "Missed Calls", d: "After a storm, the first roofer to answer wins the contract.", icon: "phoneMissed" },
      { t: "Lost Leads", d: "Every missed call is an inspection or repair booked elsewhere.", icon: "userX" },
    ],
    steps: [
      { t: "Customer Calls", d: "A homeowner calls about a roof problem.", icon: "phone" },
      { t: "Quvel Answers", d: "It captures the issue and checks your schedule.", icon: "check" },
      { t: "Appointment Booked", d: "The inspection or estimate is booked.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "We had a storm last night and I think my roof is leaking." },
      { ai: true, who: "Quvel", msg: "I'm sorry to hear that. Is water coming into the house right now?" },
      { ai: false, who: "Customer", msg: "A little, in the upstairs ceiling." },
      { ai: true, who: "Quvel", msg: "I'll get an inspector out quickly. Does tomorrow morning or afternoon work?" },
      { ai: false, who: "Customer", msg: "Morning is better." },
      { ai: true, who: "Quvel", msg: "You're booked for a roof inspection tomorrow morning. We'll take care of it." },
    ],
    features: [
      { t: "Inspection Booking", d: "Books roof inspections directly into your schedule.", icon: "filter" },
      { t: "Repair Estimates", d: "Schedules estimates for repairs and replacements.", icon: "home" },
      { t: "Storm Damage", d: "Captures storm-damage calls and books fast.", icon: "zap" },
      { t: "Business Hours", d: "Answers questions about service areas and hours.", icon: "clock" },
      { t: "Emergency Transfers", d: "Routes active leaks and hazards to your team.", icon: "transfer" },
      { t: "Appointment Confirmation", d: "Confirms every visit so customers are ready.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel handle storm-damage surges?", a: "Yes. When calls spike after a storm, Quvel answers every one and books inspections so no lead is lost." },
      { q: "Can it book estimates?", a: "Yes—Quvel schedules inspections and repair estimates straight into your calendar." },
      { q: "Does it work after hours?", a: "Yes. Quvel answers 24/7, capturing leads that call outside business hours." },
      { q: "Can it flag active leaks?", a: "Yes. Quvel treats active leaks as urgent and routes them to your team quickly." },
    ],
  },
  {
    slug: "dental",
    name: "Dental",
    icon: "tooth",
    heroTitle: "Never Miss Another Patient.",
    heroSub:
      "Quvel answers every call, books cleanings and appointments, and routes dental emergencies to your team—so your chairs stay full.",
    problems: [
      { t: "Front Desk Swamped", d: "Your staff is with patients, not always free to answer the phone.", icon: "users" },
      { t: "Missed Calls", d: "A patient who can't reach you simply calls another practice.", icon: "phoneMissed" },
      { t: "Empty Chairs", d: "Every missed call is a cleaning or appointment booked elsewhere.", icon: "userX" },
    ],
    steps: [
      { t: "Patient Calls", d: "A patient calls to book or ask a question.", icon: "phone" },
      { t: "Quvel Answers", d: "It gathers the details and checks your schedule.", icon: "check" },
      { t: "Appointment Booked", d: "The visit is booked into your calendar.", icon: "calendar" },
    ],
    transcript: [
      { ai: false, who: "Customer", msg: "Hi, I'd like to book a cleaning for next week." },
      { ai: true, who: "Quvel", msg: "I'd be happy to help. Are you a new or existing patient?" },
      { ai: false, who: "Customer", msg: "Existing—I've been in before." },
      { ai: true, who: "Quvel", msg: "Welcome back. I have Tuesday at 10 AM or Wednesday at 3 PM. Which works?" },
      { ai: false, who: "Customer", msg: "Wednesday at 3." },
      { ai: true, who: "Quvel", msg: "You're booked for a cleaning Wednesday at 3 PM. We'll see you then." },
    ],
    features: [
      { t: "Cleaning Booking", d: "Books routine cleanings and checkups.", icon: "calendar" },
      { t: "New Patients", d: "Guides new patients through booking a first visit.", icon: "users" },
      { t: "Appointment Changes", d: "Handles reschedules and cancellations smoothly.", icon: "transfer" },
      { t: "Office Hours", d: "Answers questions about hours, location, and insurance.", icon: "clock" },
      { t: "Emergency Transfers", d: "Routes dental emergencies to your team quickly.", icon: "phone" },
      { t: "Appointment Confirmation", d: "Confirms every visit to reduce no-shows.", icon: "check" },
    ],
    faq: [
      { q: "Can Quvel book cleanings and checkups?", a: "Yes. Quvel books routine visits directly into your practice's schedule." },
      { q: "Can it handle dental emergencies?", a: "Yes. Quvel recognizes emergencies and transfers the patient to your team right away." },
      { q: "Can it help new patients?", a: "Yes. Quvel guides new patients through booking their first appointment and collects what you need." },
      { q: "Does it work after office hours?", a: "Yes. Quvel answers 24/7, so patients can book even when your front desk is closed." },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const heroCall: TranscriptLine[] = [
  { ai: false, who: "Caller", msg: "Hi, do you have time for a brake inspection this week?" },
  { ai: true, who: "Quvel", msg: "Absolutely. I have Thursday 9 AM or Friday 2 PM—which works better?" },
  { ai: false, who: "Caller", msg: "Thursday at 9." },
  { ai: true, who: "Quvel", msg: "You're booked for Thursday at 9 AM. See you then." },
];
