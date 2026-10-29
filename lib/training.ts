// Corporate training page content. Client names and years come from
// `corporateTraining` in lib/resume.ts; this file adds the detail shown
// on /corporate-training. Edit the text here.

import { corporateTraining } from "./resume";

type ClientDetail = {
  sector: string;
  text: string;
  /** Logo file name in public/logos, without the extension (.svg, .png, .webp or .jpg). */
  logo: string;
};

const details: Record<string, ClientDetail> = {
  "The Hong Kong Jockey Club": {
    logo: "hkjc",
    sector: "Racing, sports entertainment and charity",
    text: "AI training for business staff, delivered in 2024, 2025 and 2026.",
  },
  "Sony (HK) Limited": {
    logo: "sony",
    sector: "Consumer electronics and entertainment",
    text: "AI workshops for staff across business units, focused on building an AI mindset and on practical, real-world business applications.",
  },
  "AEL Engineering Limited": {
    logo: "ael",
    sector: "Engineering",
    text: "AI training for business staff, delivered in 2024.",
  },
  "Chance Century Education and Training": {
    logo: "ccet",
    sector: "Education and training",
    text: "AI training, delivered in 2026.",
  },
};

export const clients = corporateTraining.map((c) => ({
  org: c.org,
  years: c.years.split(", "),
  ...(details[c.org] ?? { sector: "", text: "", logo: "" }),
}));

export const years = Array.from(new Set(clients.flatMap((c) => c.years))).sort();

export const approach = [
  {
    title: "Built around your team's work",
    text: "Sessions use the tasks, documents and tools your staff already work with, so what they learn applies on Monday.",
  },
  {
    title: "Mindset first",
    text: "What AI is good at, where it fails, and how to check its output before relying on it.",
  },
  {
    title: "Hands-on practice",
    text: "Staff work through real business examples themselves, rather than watching demos.",
  },
  {
    title: "Safe and responsible use",
    text: "Protecting company and customer data, and working within your organisation's AI policy.",
  },
];
