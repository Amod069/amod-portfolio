import { profile, featuredProjects, earlierProjects, experience, skills, certifications } from "./profile";

/**
 * The full knowledge pack the assistant can answer from.
 * Built from profile.ts so site copy and chatbot facts never drift apart.
 * Phase 1: whole pack in the system prompt (small enough; cached by the provider).
 * Phase 2 (planned): chunk + embed + retrieve.
 */
export function buildKnowledge(): string {
  const parts: string[] = [];

  parts.push(`# ${profile.name}
Location: ${profile.location}
Roles sought: ${profile.roles.join(", ")}
${profile.availability}. Open to hybrid working.
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Summary: ${profile.tagline}`);

  parts.push(`# Experience and education (most recent first)
${experience.map((e) => `## ${e.role} — ${e.org} (${e.period})\n${e.points.map((p) => `- ${p}`).join("\n")}`).join("\n\n")}

Additional detail on Media.net: programmatic advertising company; Amod collected and analysed DSP partner data (Criteo, Amazon, Rubicon, DeepIntent) covering spend, impressions and partner performance; built Tableau, Looker and Google Sheets dashboards; wrote SQL for daily/weekly/monthly KPI, revenue and billing reports; developed automated reporting with Python, Google Apps Script and JavaScript; monitored automated batches and fixed failed runs; gathered requirements and wrote specifications; presented findings to non-technical stakeholders.
Earlier education: Diploma in Computer Engineering, Government Polytechnic Mumbai (2017–2020), 85.43%.`);

  parts.push(`# Featured projects
${featuredProjects
  .map(
    (p) => `## ${p.title} (${p.period})
Context: ${p.context}
Question: ${p.question}
Key number: ${p.metric.value} — ${p.metric.label}
${p.summary}
Stack: ${p.stack.join(", ")}
${p.repo ? `Code: ${p.repo}` : ""}`,
  )
  .join("\n\n")}

Extra detail, decision-focused M5 project: FOODS category, California stores; cost ratios 1:1, 2:1, 5:1, 10:1; seasonal-naive vs LSTM-PTO vs LSTM-E2E mean newsvendor cost per item-day e.g. 10:1 → 5.532 / 4.595 / 4.551; strict temporal split with 28-day fixed forecast origin; leakage guards; demand classified by Syntetos–Boylan patterns; E2E needs one model per cost ratio (4× compute).
Extra detail, Irish carbon project: module H9ETS "Emerging AI Technologies and Sustainability"; data from EirGrid Smart Grid Dashboard (CO₂ intensity, emissions, wind, demand, solar at 15-min resolution averaged to hourly) and Open-Meteo previous-run 24h-ahead wind forecasts at Donegal, Mayo, Kerry, Cork; 21,241 hourly rows Jun 2024–Nov 2026; CO₂ intensity mean 195 g/kWh (range 22–471); wind share of demand ~32% on average; handles DST hour duplication; fills missing intensity as emissions ÷ demand with a flag; models compared with and without weather forecasts; CodeCarbon measures the forecaster's own training energy; scheduler simulation shifts flexible jobs into predicted low-carbon hours.
Extra detail, Laya Foresight: built at a Laya Healthcare customer-care hackathon (Mar 2026) as a team; risk bands High/Medium/Low; signals include app logins, status page reloads, document uploads, claim type, days since submission, estimated amount, prior escalations; Claude API drafts outreach, human approves before dispatch; FastAPI + Uvicorn backend, React 18 + Vite dashboard, SQL schema and logging pipeline, simulation script.
Extra detail, MindScan: NCI H9DAI research project; datasets: Nusrat et al. 2024 (14,983 tweets, 6-class depression type), albertobellardini Kaggle (10,314 tweets, binary depression), nikhileswarkomati Kaggle (50,000 Reddit posts, binary suicide risk); models per dataset: Logistic Regression, LinearSVC, XGBoost, XLM-RoBERTa; TF-IDF features for classical models; Flask app; academic prototype, explicitly not a clinical tool.`);

  parts.push(`# Earlier projects
${earlierProjects.map((e) => `- ${e.title} (${e.years}): ${e.summary} ${e.repo}`).join("\n")}
- Give(a)Go Zero to Agent: Dublin hackathon (about May 2026): Amod's team won. In a few hours they shipped a natural-language DataOps agent: drop in a CSV or Excel file or connect a data source, and the agent understands the data, cleans it, surfaces insights and pushes everything to a live dashboard. Built on the Lua AI platform and deployed with v0 by Vercel.
- Events in Dublin Amod has attended and written about on LinkedIn: an agentic-AI evening at Accenture's The Dock (Projector Global Community), "The Art of the Possible: Creativity as a Career Advantage" at Meta Dublin (the D2 collective), and SearchIRL #6 on international SEO and AI search at dentsu Dublin.
- Finance complaints dashboard (Tableau): analysed a US insurer's complaints by category and state; credit-card disputes were the largest category at 19.68%.`);

  parts.push(`# Skills
${skills.map((g) => `${g.group}: ${g.items.join(", ")}`).join("\n")}

# Certifications
${certifications.join("; ")}

# Languages
English (fluent)`);

  return parts.join("\n\n");
}
