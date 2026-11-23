// Single source of truth for everything the site says about Amod.
// Edit this file to change site copy. The chat assistant reads knowledge.ts, which is built from the same facts.

export const profile = {
  name: "Amod V. Aher",
  shortName: "Amod",
  location: "Dublin, Ireland",
  siteUrl: "https://amodaher.dev",
  email: "amodaher1234@gmail.com",
  linkedin: "https://www.linkedin.com/in/amodaher",
  github: "https://github.com/Amod069",
  availability: "Available full-time from January 2027",
  // Hero line under "Hi, I'm Amod."
  heroLine: "Two years in the ad-tech industry, now building ML models and AI agents in Dublin",
  tagline:
    "Data work from two sides: two years reporting ad-tech revenue at Media.net, and a year of building models at NCI: forecasting, carbon-aware scheduling, text classification and LLM agents.",
  roles: ["ML Engineer", "Data Scientist", "AI / LLM Engineer"],
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  context: string;
  question: string;
  metric: { value: string; label: string };
  summary: string;
  figures?: { src: string; alt: string; caption: string }[];
  video?: { src: string; poster: string; label: string };
  stack: string[];
  repo?: string;
  demo?: string;
  accent: "signal" | "decision";
};

export const featuredProjects: Project[] = [
  {
    slug: "irish-carbon",
    title: "Carbon-aware scheduling of data-centre workloads on the Irish grid",
    period: "Oct – Nov 2026",
    context: "NCI group project, with EirGrid and Open-Meteo data",
    question:
      "Data centres used about 23% of Ireland's metered electricity in 2025. Can weather forecasts predict clean hours a day ahead, and how much CO₂ do we save by shifting flexible jobs into them?",
    metric: { value: "r = −0.75", label: "CO₂ intensity vs wind share, over 21,241 hours" },
    summary:
      "Built from EirGrid data and 24-hour-ahead wind forecasts, June 2024 to November 2026. Forecasting models were compared with and without weather, their training energy measured with CodeCarbon, and flexible jobs simulated against the forecast.",
    stack: ["Python", "pandas", "SHAP", "CodeCarbon", "time-series forecasting"],
    video: { src: "/videos/carbon.mp4", poster: "/videos/carbon.jpg", label: "A week of Irish grid data, the 24-hour forecast and one job shifted to cleaner hours" },
    repo: "https://github.com/Amod069/-irish-carbon-ca",
    accent: "signal",
  },
  {
    slug: "decision-focused-m5",
    title: "Decision-focused deep learning for retail inventory",
    period: "Aug 2026",
    context: "M5 / Walmart sales data, 5,748 item-store series",
    question:
      "Should a retailer train its model to forecast demand accurately, or to make cheap ordering decisions? These are not the same goal.",
    metric: { value: "6–18%", label: "cheaper ordering than the seasonal-naive baseline" },
    summary:
      "Compared a forecast-then-optimise LSTM with one trained end-to-end on the newsvendor cost, across four cost ratios and 5,748 series, with bootstrap confidence intervals and paired significance tests.",
    stack: ["PyTorch", "LSTM", "bootstrap CIs", "22 unit tests", "reproducible pipeline"],
    video: { src: "/videos/m5.mp4", poster: "/videos/m5.jpg", label: "Ordering cost at four cost ratios, and the intermittent-demand result" },
    repo: "https://github.com/Amod069/decision-focused-m5",
    accent: "decision",
  },
  {
    slug: "mindscan",
    title: "MindScan: twelve classifiers, three datasets, one text box",
    period: "Apr 2026",
    context: "NCI research project; a research prototype, not a clinical tool",
    question:
      "How much does a transformer actually buy you over TF-IDF and a linear model on mental-health text, and does the answer change by task?",
    metric: { value: "12", label: "models compared: LogReg, SVM, XGBoost and XLM-RoBERTa on each of 3 datasets" },
    summary:
      "Logistic Regression, a linear SVM, XGBoost and XLM-RoBERTa, each trained on three public datasets and served together from one Flask app. A research prototype, not a clinical tool.",
    stack: ["scikit-learn", "XGBoost", "HuggingFace Transformers", "Flask"],
    video: { src: "/videos/mindscan.mp4", poster: "/videos/mindscan.jpg", label: "Macro F1 for the twelve models across the three datasets" },
    repo: "https://github.com/Amod069/MindScan",
    accent: "signal",
  },
  {
    slug: "laya-foresight",
    title: "Laya Foresight: predicting claim escalations before the phone rings",
    period: "Mar 2026",
    context: "Laya Healthcare hackathon, team project",
    question:
      "A health-insurance claim is a black box for the customer. Anxiety turns into app refreshes, re-uploads and expensive support calls. Can we see it coming?",
    metric: { value: "48 h", label: "ahead: who is likely to call support, scored on every active claim" },
    summary:
      "A risk classifier scores open claims from app behaviour, claim details and escalation history. An AI agent then works each risky case: it alerts the support team, sends the customer an update, and asks a person when it isn't sure.",
    stack: ["FastAPI", "gpt-4o-mini (GitHub Models)", "SQL", "React + Vite"],
    video: { src: "/videos/laya.mp4", poster: "/videos/laya.jpg", label: "Laya Foresight dashboard working one case, with placeholder data" },
    repo: "https://github.com/Laya-hackathon/laya-foresight",
    accent: "decision",
  },
];

export const earlierProjects = [
  {
    title: "Laptop price predictor",
    years: "2021 – 2023",
    summary: "Regression model → Streamlit app → Flask REST API → Android app calling it. One idea, carried all the way to a phone.",
    repo: "https://github.com/Amod069/LAPTOP_PRICE_PREDICTOR",
  },
  {
    title: "Olympic data analysis",
    years: "2023",
    summary: "Streamlit exploration of 120 years of Summer Olympics, deployed on Streamlit Cloud.",
    repo: "https://github.com/Amod069/olympic-analysis-web-app",
  },
  {
    title: "E-Seva",
    years: "2023",
    summary: "Android app connecting citizens with municipal corporators: scheme information and complaint routing, on Firebase.",
    repo: "https://github.com/Amod069/E-Seva",
  },
];

export const experience = [
  {
    role: "M.Sc. Artificial Intelligence",
    org: "National College of Ireland, Dublin",
    period: "Jan 2026 – Jan 2027",
    points: [
      "Current average 75%. Machine Learning, Data Analytics for AI, Programming for AI, Data Governance & Ethics, Emerging AI Technologies & Sustainability.",
      "Research and group projects: decision-focused forecasting, carbon-aware scheduling, mental-health text classification.",
    ],
  },
  {
    role: "Business Operations Analyst",
    org: "Media.net, Mumbai (programmatic advertising)",
    period: "Nov 2023 – Jan 2026",
    points: [
      "Owned daily, weekly and monthly KPI, revenue and billing reporting in SQL, Tableau, Looker and Google Sheets, where accuracy decided what partners were invoiced.",
      "Cleaned and validated DSP data from Criteo, Amazon, Rubicon and DeepIntent; traced bidder–publisher discrepancies to root cause and fixed them with the ops team.",
      "Automated recurring reports with Python, Apps Script and JavaScript, including a pipeline that pulled emailed CSVs straight into the daily reporting sheet.",
      "Ran bidder and publisher experiments that contributed to a 10% rise in team revenue; worked with IPG, Dentsu and Horizon Media on margin management that lifted agency-team profit by 5%.",
    ],
  },
  {
    role: "B.E. Computer Engineering",
    org: "Savitribai Phule Pune University, Nashik",
    period: "2020 – 2023",
    points: ["CGPA 8.58 / 10. Preceded by a Diploma in Computer Engineering at Government Polytechnic Mumbai (85%)."],
  },
  {
    role: "Data Analyst Intern",
    org: "iNeuron (remote)",
    period: "Oct 2021 – Jan 2022",
    points: ["Turned business requirements into BRDs and dashboard wireframes; analysed healthcare and airport-flight datasets."],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Machine learning", items: ["PyTorch", "scikit-learn", "XGBoost", "HuggingFace Transformers", "time-series forecasting", "decision-focused learning", "SHAP"] },
  { group: "LLMs and agents", items: ["Anthropic Claude API", "prompt design", "human-in-the-loop agent workflows", "Vercel AI SDK"] },
  { group: "Data", items: ["SQL", "MySQL", "MongoDB", "pandas", "NumPy", "ETL", "data cleansing", "KPI and billing reporting"] },
  { group: "BI", items: ["Tableau", "Power BI", "Looker", "Advanced Excel", "Google Sheets"] },
  { group: "Building", items: ["Python", "TypeScript", "FastAPI", "Flask", "Streamlit", "React", "Next.js", "Android", "Firebase"] },
  { group: "Cloud and tooling", items: ["Google Cloud", "Microsoft Azure", "Docker", "Git", "Vercel", "CodeCarbon"] },
];

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "Tableau Desktop Certified Associate",
  "Microsoft Azure Machine Learning",
  "AI on Microsoft Azure",
  "ChatGPT Prompt Engineering for Developers (DeepLearning.AI)",
];

// LinkedIn posts shown in "On LinkedIn" as cards: one photo (public/linkedin/*.webp, 4:3), a title, a one-line summary.
// Order: the Give(a)Go hackathon win first, then newest first.
export type LinkedInPost = { urn: string; title: string; summary: string; image: string; alt: string; tag?: string };

export const linkedinPosts: LinkedInPost[] = [
  {
    urn: "urn:li:ugcPost:7456753803304964096",
    title: "Won Give(a)Go Zero to Agent: Dublin",
    summary: "In a few hours our team shipped an agent that cleans uploaded data and builds a live dashboard.",
    image: "/linkedin/hackathon.webp",
    alt: "The winning team at Give(a)Go Zero to Agent: Dublin, giving thumbs up, with photos of the demo",
    tag: "Hackathon win",
  },
  {
    urn: "urn:li:ugcPost:7498830118627344384",
    title: "Agentic AI at Accenture, The Dock",
    summary: "What makes an AI system agentic, and how data scientists actually solve client problems.",
    image: "/linkedin/accenture.webp",
    alt: "Amod at Accenture's The Dock in Dublin, under the Fáilte go dtí An Duga sign",
  },
  {
    urn: "urn:li:ugcPost:7489768341176303616",
    title: "The Art of the Possible at Meta Dublin",
    summary: "A panel on creativity as a career advantage when AI gives everyone the same answers.",
    image: "/linkedin/meta.webp",
    alt: "Amod at Meta's Dublin office beside a large thumbs-up sign, and the panel on stage",
  },
  {
    urn: "urn:li:ugcPost:7476235388441800705",
    title: "SearchIRL #6 at dentsu Dublin",
    summary: "International SEO and how AI search breaks one prompt into many queries.",
    image: "/linkedin/dentsu.webp",
    alt: "Amod beside the dentsu lectern and the SearchIRL #6 screen",
  },
];
