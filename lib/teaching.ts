// Teaching page content. Module codes, titles, talks and training clients
// come from lib/resume.ts; this file groups the modules by topic.

export const topics = [
  "AI and machine learning",
  "Big data and analytics",
  "FinTech, Web3 and RegTech",
] as const;

export type Topic = (typeof topics)[number];

export const moduleTopic: Record<string, Topic> = {
  FINA5143: "AI and machine learning",
  FINA5164: "AI and machine learning",
  FINA9373: "AI and machine learning",
  FINA9377: "AI and machine learning",
  FINA9392: "AI and machine learning",
  FINA9400: "AI and machine learning",
  FINA4162: "Big data and analytics",
  FINA5114: "Big data and analytics",
  IMAT4050: "Big data and analytics",
  IMAT4053: "Big data and analytics",
  IMAT4057: "Big data and analytics",
  IMAT6160: "Big data and analytics",
  FINA4166: "FinTech, Web3 and RegTech",
  FINA5140: "FinTech, Web3 and RegTech",
  FINA5141: "FinTech, Web3 and RegTech",
  FINA6290: "FinTech, Web3 and RegTech",
};

/** Open-source projects built as hands-on labs students run in VS Code. */
export const labs = [
  {
    title: "AI Agent Guardrail Lab",
    text: "Students attack a tool-calling AI agent and watch ten categories of guardrails stop it, with automated adversarial tests.",
    href: "/projects/ai-agent-guardrail-lab",
  },
  {
    title: "Portfolio Stress Testing",
    text: "Students replay past crises and run their own market shocks on a multi-asset portfolio, with an interactive report.",
    href: "/projects/portfolio-stress-testing",
  },
  {
    title: "Portfolio Review & Rebalancing",
    text: "Students take a client portfolio from raw market data to forecasts, risk measures and a buy, sell or hold plan.",
    href: "/projects/portfolio-review-rebalancing",
  },
];
