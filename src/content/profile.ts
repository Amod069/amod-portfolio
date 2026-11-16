// Single source of truth for everything the site says about Amod.
// Edit this file to change site copy. The chat assistant reads knowledge.ts, which is built from the same facts.

export const profile = {
  name: "Amod V. Aher",
  shortName: "Amod",
  location: "Dublin, Ireland",
  siteUrl: "https://amodaher.vercel.app",
  email: "amodaher1234@gmail.com",
  linkedin: "https://www.linkedin.com/in/amodaher",
  github: "https://github.com/Amod069",
  availability: "Available full-time from January 2027",
  tagline:
    "Data work from two sides: two years reporting ad-tech revenue at Media.net, and a year of building models at NCI — forecasting, carbon-aware scheduling, text classification, an LLM agent.",
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
  stack: string[];
  repo?: string;
  demo?: string;
  accent: "signal" | "decision";
};

export const featuredProjects: Project[] = [
  {
    slug: "decision-focused-m5",
    title: "Decision-focused deep learning for retail inventory",
    period: "Aug 2026",
    context: "M5 / Walmart sales data, 5,748 item-store series",
    question:
      "Should a retailer train its model to forecast demand accurately, or to make cheap ordering decisions? These are not the same goal.",
    metric: { value: "6–18%", label: "cheaper ordering than the seasonal-naive baseline" },
    summary:
      "Compared a predict-then-optimise LSTM against one trained end-to-end on the newsvendor cost itself, across four cost ratios. On average the two are statistically indistinguishable, and end-to-end costs 4× more to train. But on intermittent-demand items under high cost asymmetry, end-to-end wins significantly (+2.4% at 10:1, p < 1e-5).",
    stack: ["PyTorch", "LSTM", "bootstrap CIs", "22 unit tests", "reproducible pipeline"],
    repo: "https://github.com/Amod069/decision-focused-m5",
    accent: "decision",
  },
  {
    slug: "irish-carbon",
    title: "Carbon-aware scheduling of data-centre workloads on the Irish grid",
    period: "Oct – Nov 2026",
    context: "NCI group project · EirGrid + Open-Meteo data",
    question:
      "Data centres used about 23% of Ireland's metered electricity in 2025. Can weather forecasts predict clean hours a day ahead, and how much CO₂ do we save by shifting flexible jobs into them?",
    metric: { value: "r = −0.75", label: "CO₂ intensity vs wind share, over 21,241 hours" },
    summary:
      "Built the dataset from EirGrid's dashboard and 24-hour-ahead wind forecasts for four wind-farm regions (Jun 2024 – Nov 2026). Trained forecasters with and without weather features, accounted for their own training energy with CodeCarbon, explained them with SHAP, and simulated shifting batch jobs into predicted low-carbon hours.",
    figures: [
      {
        src: "/figures/co2_vs_wind_share.webp",
        alt: "Scatter plot of grid CO₂ intensity against wind share of demand, showing a strong negative relationship.",
        caption: "CO₂ intensity falls as wind share rises (r = −0.75).",
      },
      {
        src: "/figures/scheduler_savings.webp",
        alt: "Bar chart of simulated CO₂ savings from shifting flexible jobs into predicted low-carbon hours.",
        caption: "Simulated savings from shifting flexible jobs into predicted clean hours.",
      },
    ],
    stack: ["Python", "pandas", "SHAP", "CodeCarbon", "time-series forecasting"],
    repo: "https://github.com/Amod069/-irish-carbon-ca",
    accent: "signal",
  },
  {
    slug: "laya-foresight",
    title: "Laya Foresight: predicting claim escalations before the phone rings",
    period: "Mar 2026",
    context: "Laya Healthcare hackathon · team project",
    question:
      "A health-insurance claim is a black box for the customer. Anxiety turns into app refreshes, re-uploads and expensive support calls. Can we see it coming?",
    metric: { value: "48 h", label: "ahead: who is likely to call support, scored on every active claim" },
    summary:
      "A risk classifier scores claims from behavioural signals (logins, status reloads, uploads), claim signals and escalation history. A Claude-powered agent then ranks at-risk customers for the support team and drafts a reassuring update, approved by a human before it is sent. Shipped with a SQL logging pipeline, a real-time simulation and a React dashboard.",
    stack: ["FastAPI", "Anthropic API", "SQL", "React + Vite"],
    repo: "https://github.com/Laya-hackathon/laya-foresight",
    accent: "decision",
  },
  {
    slug: "mindscan",
    title: "MindScan: twelve classifiers, three datasets, one text box",
    period: "Apr 2026",
    context: "NCI research project · research prototype, not a clinical tool",
    question:
      "How much does a transformer actually buy you over TF-IDF and a linear model on mental-health text, and does the answer change by task?",
    metric: { value: "12", label: "models compared: LogReg, SVM, XGBoost and XLM-RoBERTa on each of 3 datasets" },
    summary:
      "One input text is scored for depression type (6 classes), binary depression and suicide-risk signals, each by four model families trained on separate public datasets. Served from a Flask app so the comparison can be run live.",
    stack: ["scikit-learn", "XGBoost", "HuggingFace Transformers", "Flask"],
    repo: "https://github.com/Amod069/MindScan",
    accent: "signal",
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
    org: "Media.net, Mumbai · programmatic advertising",
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

// LinkedIn posts shown in "On LinkedIn". Official embed URNs, native 504px width; hackathon win first.
export const linkedinPosts: { urn: string; height: number; title: string }[] = [
  { urn: "urn:li:ugcPost:7476235388441800705", height: 1194, title: "Laya Healthcare hackathon win" },
  { urn: "urn:li:ugcPost:7498830118627344384", height: 1026, title: "LinkedIn post" },
  { urn: "urn:li:ugcPost:7489768341176303616", height: 1047, title: "LinkedIn post" },
  { urn: "urn:li:ugcPost:7456753803304964096", height: 963, title: "LinkedIn post" },
];
