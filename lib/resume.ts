// Résumé content, from Ken's CV. Edit here to update the /resume page.

export const headline =
  "BSc | MSc | FRM | Teacher of AI agents and agentic AI | ML in Python | LLM agents, forecasting and executive dashboards";

export const languages =
  "English (fluent), Cantonese (native), Mandarin (fluent); strong written English and Chinese";

export const summary =
  "AI agent and agentic AI professional with 15+ years in Python, machine learning, forecasting and data analytics, building practical AI tools for faster decisions and taking them from prototype to production. In the Group Treasury of AIA, supported two workstreams (PCFM and OCM) across multiple business units: machine-learning forecasting in production, Power BI and Python dashboards for management, surplus liquidity released and manual reporting automated. Supported requirements and testing for every module of the Liquidity Analytics Platform on Microsoft Azure, from user requirement gathering through SIT, UAT, go-live and hypercare. At HKU SPACE, teaches students to design LLM and AI-agent prototypes with tool calling, including open-source labs on GitHub with security controls and automated adversarial tests. BSc in Statistics and Operations Research; Master of Statistics (HKU); FRM certified.";

export type Role = {
  title: string;
  org: string;
  dates: string;
  points: { label?: string; text: string }[];
};

export const experience: Role[] = [
  {
    title: "External Consultant – Senior Project Data Analyst, Group Treasury",
    org: "AIA Group Limited",
    dates: "Aug 2021 – Oct 2026",
    points: [
      {
        label: "Platform delivery (LAP)",
        text: "Supported requirements and testing for all modules of the Liquidity Analytics Platform, live across multiple business units: bank balance updates, cash flow forecasting, OCM, PCFM, LQA, dashboards and a user-activity audit log. Covered user requirement gathering, functional specifications, SIT, UAT, go-live and hypercare in the Project Taurus team.",
      },
    ],
  },
];

export const partTime: Role[] = [
  {
    title: "Lecturer (Part-time), AI and Machine Learning",
    org: "HKU SPACE, The University of Hong Kong",
    dates: "Jan 2023 – Present",
    points: [
      {
        text: "Design and deliver 16 postgraduate and professional modules, including Agentic AI for FinTech and Business Applications; AI and ML with Business and Financial Applications; and Big Data Applications and Financial Analytics.",
      },
    ],
  },
  {
    title: "Senior Research Analyst (Part-time)",
    org: "The Hang Seng University of Hong Kong",
    dates: "Jul 2023 – Present",
    points: [
      {
        text: "Applied quantitative research using statistical models and hypothesis testing (see Publication).",
      },
    ],
  },
];

export const modules: { code: string; title: string }[] = [
  { code: "FINA4162", title: "Big Data Applications and Financial Analytics" },
  { code: "FINA4166", title: "Fundamentals of FinTech" },
  { code: "FINA5114", title: "Business Analytics and Web Scraping" },
  { code: "FINA5140", title: "Web 3.0 and FinTech" },
  { code: "FINA5141", title: "Web 4.0 for Finance and Business Applications" },
  { code: "FINA5143", title: "AI and ML with Business and Financial Applications" },
  { code: "FINA5164", title: "Agentic AI for FinTech and Business Applications" },
  { code: "FINA6290", title: "RegTech Applications in Finance" },
  { code: "FINA9373", title: "Training Workshop on AI, Machine Learning" },
  { code: "FINA9377", title: "Training Workshop on Machine Learning for Corporate Planning" },
  { code: "FINA9392", title: "Workshop on AI and Digital Economy: New Applications and Opportunities for SMEs" },
  { code: "FINA9400", title: "Training Workshop on Practical Deep Learning for Business: Predictive Models, NLP, Sentiment Analysis & RL" },
  { code: "IMAT4050", title: "Big Data and Marketing Analytics (Advanced Diploma in Big Data Analytics and Application)" },
  { code: "IMAT4053", title: "Graph Analytics for Big Data (Advanced Diploma in Big Data Analytics and Applications)" },
  { code: "IMAT4057", title: "Introduction to Big Data Applications and Analytics" },
  { code: "IMAT6160", title: "Big Data Analytics (Postgraduate Diploma in Information Technology)" },
];

export const talks: { year: string; zh: string; en: string; url: string }[] = [
  {
    year: "2024",
    zh: "未來金融導航：GenAI、Web3 與數碼金融的演進",
    en: "Navigating Future Finance: The Evolution of GenAI, Web3 and Digital Finance",
    url: "https://www.youtube.com/watch?v=a18Wi3DiEls",
  },
  {
    year: "2025",
    zh: "智能金融新時代：AI 與 Web3 的未來發展",
    en: "The New Era of Intelligent Finance: The Future of AI and Web3",
    url: "https://www.youtube.com/watch?v=sYg3sdhrBkE",
  },
  {
    year: "2026",
    zh: "智能金融新時代：Web4 與 AI 智能體的未來發展",
    en: "The New Era of Intelligent Finance: The Future of Web4 and AI Agents",
    url: "https://www.youtube.com/watch?v=snaJ95qHkns",
  },
];

export const corporateTraining: { org: string; years: string }[] = [
  { org: "The Hong Kong Jockey Club", years: "2024, 2025, 2026" },
  { org: "Sony (HK) Limited", years: "2025, 2026" },
  { org: "AEL Engineering Limited", years: "2024" },
  { org: "Chance Century Education and Training", years: "2026" },
];

export const research = {
  title: "The Effect of IFRS 17 on Risk Trade-offs in the Insurance Industry",
  status: "Under review",
  detail:
    "Co-authored with a faculty professor, The Hang Seng University of Hong Kong. Under review.",
};

export const education: { degree: string; school: string; years: string }[] = [
  {
    degree: "Master of Statistics (Risk Management theme)",
    school: "The University of Hong Kong",
    years: "2009–2010",
  },
  {
    degree: "Bachelor of Science (Hons) in Statistics and Operations Research",
    school: "Hong Kong Baptist University",
    years: "2006–2009",
  },
];

export const certifications = [
  "FRM® (Financial Risk Manager), Certified",
  "CFA® Level III Candidate",
  "SAS® Certified Data Modeler",
  "SAS® Certified Advanced Programmer",
  "SAS® Certified Business Analyst",
];

export const awards: { name: string; from: string }[] = [
  { name: "Outstanding Teacher Award 2025–2026", from: "HKU SPACE" },
];

export const skills: { area: string; items: string }[] = [
  {
    area: "Agentic AI and LLMs",
    items:
      "AI agents and agentic design patterns; LLMs (GPT, Claude); function and tool calling and tool orchestration via OpenAI-compatible APIs; agent frameworks (LangChain); prompt and context engineering; guardrails and human-in-the-loop; token-cost evaluation; RAG; vector stores; embeddings",
  },
  {
    area: "Python and data management",
    items:
      "Python for automated workflows and data handling; SQL; Spark/PySpark; multi-source data extraction from ERP (SAP), data marts and external market data; validation, reconciliation and data quality",
  },
  {
    area: "Practical ML and forecasting",
    items:
      "Forecasting models; scikit-learn; XGBoost; TensorFlow; PyTorch; model evaluation (MAE, sMAPE); core MLOps practices: validation, live monitoring, drift detection, retraining triggers and human review",
  },
  {
    area: "Executive insights and visualisation",
    items:
      "Power BI dashboards and KPI frameworks for management; Python and Chart.js web dashboards and data visualisations; translating complex metrics for senior stakeholders",
  },
  {
    area: "Automation",
    items:
      "Python automation of manual reporting and recurring data workflows, from extraction, validation and reconciliation to finished reports; process redesign and automation in a finance transformation programme; AI agents that automate multi-step tasks through tool calling, with human approval for sensitive actions; automated adversarial and integration testing (Python unittest)",
  },
];
