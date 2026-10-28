export type Block = { p: string } | { ul: string[] };

export type Project = {
  slug: string;
  title: string;
  /** One line, used on project cards. */
  summary: string;
  githubUrl: string;
  tags: string[];
  demo?: {
    href: string;
    label: string;
    note: string;
  };
  /** Headline numbers shown near the top of the project page. */
  facts?: { value: string; label: string }[];
  sections: { heading: string; blocks: Block[] }[];
  builtWith: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-stress-testing",
    title: "Portfolio Stress Testing",
    summary:
      "Replays 8 past crises and runs what-if market shocks on a multi-asset portfolio, with an interactive report that works in any browser.",
    githubUrl: "https://github.com/hk820/portfolio-stress-testing",
    tags: ["Risk", "Scenario analysis", "Factor models", "Python"],
    demo: {
      href: "/demos/portfolio-stress-test.html",
      label: "Open the interactive report",
      note: "A snapshot using prices to 30 Sep 2026. For learning, not investment advice.",
    },
    facts: [
      { value: "8", label: "past crises replayed on today's portfolio" },
      { value: "5", label: "market factors behind every what-if shock" },
      { value: "−24.6%", label: "worst case in the example run (2008 crisis)" },
    ],
    sections: [
      {
        heading: "The question",
        blocks: [
          {
            p: "If a past crisis happened again tomorrow, or markets were hit by a shock that has never happened, how much would a portfolio of stocks, bonds, commodities and real estate lose, and where would the loss come from?",
          },
        ],
      },
      {
        heading: "What I built",
        blocks: [
          {
            p: "A Python tool that stress-tests a portfolio of exchange-traded funds and cash in the two standard ways risk teams use:",
          },
          {
            ul: [
              "Historical replay: applies what actually happened in 8 crises, from the Global Financial Crisis to the 2025 US tariff shock, to today's portfolio weights.",
              "Factor shocks: estimates each holding's sensitivity to five market factors (S&P 500, US 10-year Treasury yield, Brent oil, US dollar, gold) from five years of weekly data, then applies shocks such as “S&P 500 −20%” or “10-year yield +100 bp”.",
            ],
          },
          {
            p: "Each shock is shown two ways: isolated, where only the named factors move, and correlated, where the other factors move by the amount they have typically moved alongside it.",
          },
          {
            p: "The output is a single HTML report with charts and sliders that runs in any browser, plus an Excel workbook with every number. Automated tests check the maths against made-up prices.",
          },
        ],
      },
      {
        heading: "What it showed",
        blocks: [
          {
            p: "Example run: a $1,000,000 multi-asset portfolio of 10 funds plus cash, with prices to 30 Sep 2026.",
          },
          {
            ul: [
              "The worst case was a replay of the Global Financial Crisis: −24.6%, a loss of about $246,000.",
              "A 5% stronger US dollar costs 0.7% on its own, but 3.7% once the market moves that usually come with it are included. The correlation assumption can matter more than the shock itself.",
            ],
          },
        ],
      },
      {
        heading: "Who it's for",
        blocks: [
          {
            p: "Portfolio managers, private banks and investment committees that need a quick, explainable “what if” before a decision.",
          },
        ],
      },
      {
        heading: "What it leaves out",
        blocks: [
          {
            p: "The model is linear, so a large crash is treated as a scaled-up small one. Correlations change over time: in 2022 stocks and bonds fell together, which did not happen in 2008. Results are in US dollars, and only assets are stressed, not liabilities. It is for learning and discussion, not investment advice.",
          },
        ],
      },
    ],
    builtWith: "Python, Yahoo Finance data, Excel, HTML and JavaScript",
  },
  {
    slug: "portfolio-review-rebalancing",
    title: "Portfolio Review & Rebalancing",
    summary:
      "Reviews a portfolio against the client's risk profile and goals, forecasts 12 months ahead, measures risk and produces a buy, sell or hold plan as PDF and Excel reports.",
    githubUrl: "https://github.com/hk820/portfolio-review-rebalancing",
    tags: ["Portfolio management", "Risk", "Forecasting", "Python"],
    facts: [
      { value: "6", label: "steps from raw data to a client-ready report" },
      { value: "20,000", label: "simulated years in the forward-looking risk check" },
      { value: "3", label: "ways of measuring VaR and CVaR, side by side" },
    ],
    sections: [
      {
        heading: "The question",
        blocks: [
          {
            p: "Is a client's portfolio still right for their risk profile and goals, and if not, exactly what should they buy, sell or hold?",
          },
        ],
      },
      {
        heading: "What I built",
        blocks: [
          {
            p: "A Python program that runs a full portfolio review in six steps, from raw market data to a report a client can read:",
          },
          {
            ul: [
              "Checks the client set-up (holdings, risk profile, goals) and explains any mistake in plain English.",
              "Downloads ten years of prices, interest rates, volatility, oil and the US dollar from Yahoo Finance, and inflation data from the US Federal Reserve (FRED). A geopolitical-risk index can be added.",
              "Forecasts each asset class 12 months ahead: expected returns built from today's yields, valuations and inflation, and volatility from a GARCH(1,1) model.",
              "Measures risk looking back (a 10-year backtest) and looking forward (20,000 simulated years): Value at Risk and CVaR three ways, maximum drawdown, risk contributions and stress tests.",
              "Recommends trades: any asset class more than 2 percentage points from its target weight is bought or sold back to target, rounded to whole fund units.",
              "Writes a client-ready PDF report of about 10 pages, with a pass or not-met check of each client objective, and an Excel workbook whose trade list recalculates when you change a target.",
            ],
          },
          {
            p: "If the data source is unreachable it reuses its last download, or runs on clearly labelled demo data so a session can continue. Automated tests check the maths.",
          },
        ],
      },
      {
        heading: "Who it's for",
        blocks: [
          {
            p: "Wealth managers, private banks and advisers who prepare regular portfolio reviews and want them consistent, transparent and quick to produce.",
          },
        ],
      },
      {
        heading: "What it leaves out",
        blocks: [
          {
            p: "Each asset class is represented by one fund, so the specific risk of individual shares is not measured. The forecasts are simple, transparent models, not predictions to rely on, and market data can contain errors or delays. It is an educational project: its reports are not investment advice.",
          },
        ],
      },
    ],
    builtWith: "Python, Yahoo Finance and FRED data, PDF and Excel reports",
  },
  {
    slug: "ai-agent-guardrail-lab",
    title: "AI Agent Guardrail Lab",
    summary:
      "A tool-calling AI agent for a simulated refund workflow, with ten categories of guardrails and automated adversarial tests.",
    githubUrl: "https://github.com/hk820/AI_Agent_Guardrail_Lab",
    tags: ["AI agents", "LLM safety", "Tool calling", "Python"],
    facts: [
      { value: "10", label: "guardrail categories, enforced in code" },
      { value: "4", label: "fixed tools the model is allowed to call" },
      { value: "0", label: "third-party Python packages to install" },
    ],
    sections: [
      {
        heading: "The question",
        blocks: [
          {
            p: "How do you let an AI agent take actions in a regulated workflow, such as issuing a refund, without simply trusting the model to behave?",
          },
        ],
      },
      {
        heading: "What I built",
        blocks: [
          {
            p: "A Python agent with a browser chat screen and a live guardrail monitor, wrapped around a simulated refund workflow. The model can only call four fixed tools, and Python checks every call, so the limits hold even if the model is talked into ignoring its instructions. The ten guardrail categories:",
          },
          {
            ul: [
              "Input checks: length limits, known override attempts and masking of personal data.",
              "Tool checks: fixed tool names with exact argument fields and types.",
              "Permissions: role-based access and refund eligibility rules.",
              "Output checks: masking of secrets and personal data in replies.",
              "Execution limits: no shell, code execution, web browsing or payment tools.",
              "Human approval: an exact, frozen proposal approved with a single-use token that expires.",
              "Budgets: caps on model and tool calls, request size, output length and time.",
              "Memory: off by default; at most three cleaned-up turns, held only in memory.",
              "Audit: a metadata-only log that stops the agent if it cannot be written.",
              "Fail-safe stops on invalid responses, errors or exhausted budgets, with no automatic retries.",
            ],
          },
          {
            p: "Automated adversarial tests feed the agent scripted hostile model replies, so the controls are tested without spending API credit. An offline demo mode runs with no API key, and a live mode connects to an OpenAI-compatible API.",
          },
        ],
      },
      {
        heading: "Who it's for",
        blocks: [
          {
            p: "Banks, insurers and other regulated firms prototyping AI agents, and students learning how to make agents safe to deploy.",
          },
        ],
      },
      {
        heading: "What it leaves out",
        blocks: [
          {
            p: "These are teaching controls, not a guarantee: the patterns that catch override attempts and personal data are incomplete and can misclassify text. It runs on your own computer only, not as a production service, and every refund is simulated. The live connection is covered by tests against a mocked API.",
          },
        ],
      },
    ],
    builtWith: "Python (standard library only), HTML, CSS and JavaScript, OpenAI-compatible tool calling",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
