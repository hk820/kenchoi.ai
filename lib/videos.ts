// Details for the YouTube page. Titles and links come from `talks` in
// lib/resume.ts; this file adds the video ID, date and a short summary.

export const channel = {
  name: "HKU SPACE",
  url: "https://www.youtube.com/@HKUSPACEOfficial",
};

export type VideoDetail = {
  id: string; // YouTube video ID
  date: string;
  series: string;
  summary: string;
  topics: string[];
};

export const videoDetails: Record<string, VideoDetail> = {
  "https://www.youtube.com/watch?v=a18Wi3DiEls": {
    id: "a18Wi3DiEls",
    date: "8 June 2024",
    series: "Open SPACE 2024",
    summary:
      "How generative AI and Web3 are reshaping finance: AI for personalised investment strategies and risk assessment, and Web3 tools such as smart contracts, digital identities and tokenised assets that change how ownership and transparency work.",
    topics: ["Generative AI", "Web3", "Digital finance"],
  },
  "https://www.youtube.com/watch?v=sYg3sdhrBkE": {
    id: "sYg3sdhrBkE",
    date: "7 June 2025",
    series: "Open SPACE 2025",
    summary:
      "How generative AI is making financial services more efficient and more personal, and how Web3 and blockchain enable decentralised financial services that are more open, transparent and accessible.",
    topics: ["Generative AI", "Blockchain", "Inclusive finance"],
  },
  "https://www.youtube.com/watch?v=snaJ95qHkns": {
    id: "snaJ95qHkns",
    date: "6 June 2026",
    series: "Open SPACE 2026",
    summary:
      "AI agents as digital co-workers in finance, analysing information, making recommendations and running workflows for fraud detection, credit risk, product design and planning, and what Web4 could mean for how people and machines work together.",
    topics: ["AI agents", "Web4", "Future of work"],
  },
};
