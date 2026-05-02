const { useState } = React;

const ACCENT = "#F4A72A";
const BG = "#0A0A0F";
const CARD = "#111118";
const BORDER = "#1E1E2E";
const TEXT = "#E8E8F0";
const MUTED = "#6B6B8A";
const GREEN = "#2ECC71";
const BLUE = "#4A9EFF";
const PURPLE = "#A855F7";
const RED = "#EF4444";

const weeks = [
  {
    "week": 1,
    "label": "Phase 1: Skill Sprints (The Analyst Foundations)",
    "theme": "Skill Mastery",
    "color": PURPLE,
    "days": [
      {
        "day": 1, "title": "Day 1: Excel Mastery - Cleaning & Automation",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Excel for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/excel-for-data-analytics", "desc": "Mastering Pivot Tables, VLOOKUP/XLOOKUP, and Data Cleaning." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Arrays - Easy", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Arrays - Easy." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: LR: Number Series", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning", "desc": "Revise LR: Number Series." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Clean a messy 10k row dataset in Excel", "type": "project", "desc": "Apply all AnalystBuilder concepts to a raw CSV." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: SELECT & Filtering", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master SELECT & Filtering." }
        ],
        "outcome": "Mastered Excel Data Cleaning & Pivot logic."
      },
      {
        "day": 2, "title": "Day 2: SQL Foundations - Querying & Logic",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: SQL for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/sql-for-data-analytics", "desc": "Joins, Aggregations, CTEs, and Window Functions." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Arrays - Medium", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Arrays - Medium." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Number System", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude", "desc": "Revise Quant: Number System." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Solve 50 SQL problems on AnalystBuilder", "type": "project", "desc": "Build the logical muscle for complex data retrieval." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Sorting & Limiting", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Sorting & Limiting." }
        ],
        "outcome": "Able to query complex datasets with multiple joins."
      },
      {
        "day": 3, "title": "Day 3: Power BI - Interactive Dashboards",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Power BI for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/power-bi-for-data-analytics", "desc": "DAX, Data Modeling, and Visualization Best Practices." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Arrays - Hard", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Arrays - Hard." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Verbal: Sentence Rearrangement", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/passage-sentence-rearrangement/basic?subject=verbal-ability", "desc": "Revise Verbal: Sentence Rearrangement." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Build a simple Sales Dashboard", "type": "project", "desc": "Connect Excel/SQL data to Power BI and build 3 charts." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Aggregations Depth", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Aggregations Depth." }
        ],
        "outcome": "Built first interactive Power BI dashboard."
      },
      {
        "day": 4, "title": "Day 4: Tableau - Visual Storytelling",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Tableau for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/tableau-for-data-analytics", "desc": "Calculated Fields, Parameters, and Storytelling." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Binary Search - 1D", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Binary Search - 1D." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: LR: Missing Numbers", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning", "desc": "Revise LR: Missing Numbers." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Re-create Power BI dashboard in Tableau", "type": "project", "desc": "Understand the differences and strengths of both tools." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: GROUP BY & HAVING", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master GROUP BY & HAVING." }
        ],
        "outcome": "Understood the nuances of Tableau vs Power BI."
      },
      {
        "day": 5, "title": "Day 5: Python - The Analyst's Swiss Army Knife",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Python for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/python-for-data-analytics", "desc": "Pandas, NumPy, and Matplotlib/Seaborn basics." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Binary Search - Answers", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Binary Search - Answers." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Percentages", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/percentages/basic?subject=quantitative-aptitude", "desc": "Revise Quant: Percentages." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Clean and Analyze a dataset in Jupyter", "type": "project", "desc": "Use Pandas for EDA and basic visualizations." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Inner & Self Joins", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Inner & Self Joins." }
        ],
        "outcome": "Able to perform end-to-end EDA in Python."
      },
      {
        "day": 6, "title": "Day 6: Math & Stats - The Logic of Analytics",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Math & Stats for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/math-and-statistics-for-data-analytics", "desc": "Probability, Hypothesis Testing, and Central Tendency." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Binary Search - 2D", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Binary Search - 2D." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant Mock 1", "type": "aptitude", "link": "https://takeuforward.org/plus/mock-test/quantitative-aptitude/mock-1-aptitude?subject=mock-test", "desc": "Revise Quant Mock 1." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Perform an A/B Test in Python", "type": "project", "desc": "Apply hypothesis testing to a synthetic marketing dataset." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Left/Right Joins", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Left/Right Joins." }
        ],
        "outcome": "Understood the math behind data insights."
      },
      {
        "day": 7, "title": "Day 7: Gen AI & LLMs - Future-Proofing",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Gen AI for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/generative-ai-for-data-analytics", "desc": "Prompt Engineering, Code Generation, and Data Interpretation." },
          { "time": "9\u201310am", "task": "\u2694\ufe0f DSA: Strings - Basic", "type": "dsa", "link": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", "desc": "Master Strings - Basic." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: LR Mock 1", "type": "aptitude", "link": "https://takeuforward.org/plus/mock-test/logical-reasoning/mock-1-logical?subject=mock-test", "desc": "Revise LR Mock 1." },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Use AI to automate 3 tedious data tasks", "type": "project", "desc": "Code generation, documentation, and report summary." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Subqueries", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Subqueries." }
        ],
        "outcome": "Learned to 10x productivity using AI."
      }
    ]
  },
  {
    "week": 2,
    "label": "Phase 2: IPL Analytics Engine (Execution)",
    "theme": "Execution",
    "color": BLUE,
    "days": [
      {
        "day": 8, "title": "Day 8: IPL Data - Cleaning & SQL Schema",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 Review: Advanced SQL Window Functions", "type": "analytics", "link": "https://www.analystbuilder.com/courses/sql-for-data-analytics", "desc": "Focus on RANK, DENSE_RANK, and LEAD/LAG." },
          { "time": "1\u20134pm", "task": "🏗️ IPL: Layer 1 - On-Field Intelligence", "type": "project", "desc": "Calculate ROI per crore, Venue win probability, and Pressure performance." },
          { "time": "4\u20136pm", "task": "\ud83d\udee0\ufe0f SQL: Correlated Subqueries", "type": "sql", "link": "https://takeuforward.org/plus/sql-data-engineering", "desc": "Master Correlated Subqueries." }
        ],
        "outcome": "Built the base SQL engine for IPL Analytics."
      },
      { "day": 9, "title": "Day 9: IPL Layer 2 - Product Analytics", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ IPL: Layer 2 - Engagement Spikes", "type": "project", "desc": "Analyze peak concurrency and drop-off points." }], "outcome": "Mapped viewer behavior to match moments." },
      { "day": 10, "title": "Day 10: IPL Layer 3 - Business Engine", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ IPL: Layer 3 - Revenue Model", "type": "project", "desc": "Analyze franchise valuation and media rights." }], "outcome": "Calculated the economic impact of the IPL." },
      { "day": 11, "title": "Day 11: IPL Layer 4 - Growth Strategy", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ IPL: Layer 4 - Marketing virality", "type": "project", "desc": "Meme economy and social media spikes." }], "outcome": "Built a growth report for IPL brands." },
      { "day": 12, "title": "Day 12: IPL Layer 5 - Macro Strategy", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ IPL: Layer 5 - Industry Impact", "type": "project", "desc": "IPL vs OTT release cycles." }], "outcome": "Completed the 5-layer macro analysis." },
      { "day": 13, "title": "Day 13: IPL Dashboard - Power BI Build", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ IPL: Interactive Dashboard", "type": "project", "desc": "Consolidate all 5 layers into a single Power BI file." }], "outcome": "Built the full interactive IPL Engine." },
      { "day": 14, "title": "Day 14: IPL Report - McKinsey Style", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ IPL: Final Consulting Report", "type": "project", "desc": "Convert data into 15-page strategy PDF." }], "outcome": "Finished Week 2 with a professional deliverable." }
    ]
  },
  {
    "week": 3,
    "label": "Phase 3: OTT vs Theatre Intelligence (Execution)",
    "theme": "Execution",
    "color": PURPLE,
    "days": [
      { "day": 15, "title": "Day 15: OTT Layer 1 - Content Genre", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ OTT: Genre vs Revenue", "type": "project", "desc": "Compare Action vs Romance success." }], "outcome": "Identified genre-platform fit." },
      { "day": 16, "title": "Day 16: OTT Layer 2 - Sentiment Analysis", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ OTT: IMDb vs Box Office", "type": "project", "desc": "Correlation between ratings and revenue." }], "outcome": "Proved the Word-of-Mouth effect." },
      { "day": 17, "title": "Day 17: OTT Layer 3 - Distribution", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ OTT: Single Screen vs Multiplex", "type": "project", "desc": "Urban vs Rural demand mapping." }], "outcome": "Mapped demand across screen tiers." },
      { "day": 18, "title": "Day 18: OTT Layer 4 - Booking Funnel", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ OTT: BookMyShow Funnel", "type": "project", "desc": "Drop-off at pricing page analysis." }], "outcome": "Optimized the booking conversion funnel." },
      { "day": 19, "title": "Day 19: OTT Layer 5-6 - Lifecycle & Marketing", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ OTT: Theatre window shrinkage", "type": "project", "desc": "Pre-COVID vs Post-COVID distribution." }], "outcome": "Calculated the window-to-OTT impact." },
      { "day": 20, "title": "Day 20: OTT Dashboard - Tableau Build", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ OTT: Interactive Viz", "type": "project", "desc": "Build all 9 analysis modules in Tableau." }], "outcome": "Built a premium Tableau story." },
      { "day": 21, "title": "Day 21: OTT Case Study & Reports", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ OTT: Deep-Dive Case Study", "type": "project", "desc": "Final report on 'Why Theatres Survive'." }], "outcome": "Finished Week 3 with a high-end case study." }
    ]
  },
  {
    "week": 4,
    "label": "Phase 4: E-Commerce + Ads System (Execution)",
    "theme": "Execution",
    "color": GREEN,
    "days": [
      { "day": 22, "title": "Day 22: E-com Layer 1 - Seasonal Sales", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ E-com: Festival Spikes", "type": "project", "desc": "Diwali vs Normal day GMV analysis." }], "outcome": "Quantified the Festival Effect." },
      { "day": 23, "title": "Day 23: E-com Layer 2 - Pricing Psychology", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ E-com: Anchoring Analysis", "type": "project", "desc": "₹50k vs ₹29,999 conversion lift." }], "outcome": "Proved the price anchoring theory." },
      { "day": 24, "title": "Day 24: E-com Layer 3 - Instagram Ads", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ E-com: Reels vs Story conversion", "type": "project", "desc": "CAC and ROAS calculation." }], "outcome": "Identified the highest ROI ad format." },
      { "day": 25, "title": "Day 25: E-com Layer 4 - Consumer Psych", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ E-com: Cart Abandonment", "type": "project", "desc": "Patterns by category (Fashion vs Tech)." }], "outcome": "Found abandonment root causes." },
      { "day": 26, "title": "Day 26: E-com Layer 5-8 - Logistics & Ecosystems", "tasks": [{ "time": "1\u20134pm", "task": "🏗️ E-com: Quick Commerce (Blinkit)", "type": "project", "desc": "Delivery SLA vs Trust analysis." }], "outcome": "Mapped the rise of instant delivery." },
      { "day": 27, "title": "Day 27: E-com Dashboard - Power BI", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ E-com: Full System Dashboard", "type": "project", "desc": "Consolidate all 8 layers." }], "outcome": "Built the definitive E-com Analyst dashboard." },
      { "day": 28, "title": "Day 28: E-com Meta-Insight Report", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ E-com: The Ecosystem Battle", "type": "project", "desc": "Final report on Tata vs Reliance vs Adani." }], "outcome": "Finished Week 4 with a macro-business report." }
    ]
  },
  {
    "week": 5,
    "label": "Phase 5: Personal Portfolio Launch (Branding)",
    "theme": "Branding",
    "color": BLUE,
    "days": [
      { "day": 29, "title": "Day 29: Portfolio UI - Next.js & Tailwind", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Hero & Architecture", "type": "project", "desc": "Setup Next.js site with dark theme." }], "outcome": "Hosted first version on Vercel." },
      { "day": 30, "title": "Day 30: Portfolio - Projects Page", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Project Cards", "type": "project", "desc": "Link IPL, OTT, and E-com sub-sites." }], "outcome": "Connected 3 major projects to hub." },
      { "day": 31, "title": "Day 31: Portfolio - Skills & Proof", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Skill Visualization", "type": "project", "desc": "Interactive chart showing tool mastery." }], "outcome": "Added visual proof of skills." },
      { "day": 32, "title": "Day 32: Portfolio - Creative Section", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Content Hub", "type": "project", "desc": "Section for Sahitya Rachanalu & Writing." }], "outcome": "Integrated creative work with tech." },
      { "day": 33, "title": "Day 33: Portfolio - Resume & ATS", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Resume Downloads", "type": "project", "desc": "Add Analyst + Product focused resumes." }], "outcome": "Optimized for application flow." },
      { "day": 34, "title": "Day 34: Portfolio - Analytics & SEO", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Portfolio: Tracking Setup", "type": "project", "desc": "Vercel Analytics + Google Search Console." }], "outcome": "Ready for recruiter traffic tracking." },
      { "day": 35, "title": "Day 35: Portfolio Launch - LinkedIn Day", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Branding: The Grand Reveal", "type": "project", "desc": "Write the 'Why I built this' LinkedIn post." }], "outcome": "Went live to the professional world." }
    ]
  },
  {
    "week": 6,
    "label": "Phase 6: Sahitya Rachanalu Build (Creative/Tech)",
    "theme": "Creative",
    "color": PURPLE,
    "days": [
      { "day": 36, "title": "Day 36: Sahitya: Novels & Audiobooks UI", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Reading Module", "type": "project", "desc": "Distraction-free reading experience." }], "outcome": "Built a premium literature UI." },
      { "day": 37, "title": "Day 37: Sahitya: Lyrics & Meaning Engine", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Lyrics Sidebar", "type": "project", "desc": "Original + translation split view." }], "outcome": "Built the most detailed lyrics engine." },
      { "day": 38, "title": "Day 38: Sahitya: Cinepedia Database", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Film Wiki UI", "type": "project", "desc": "Thematic analysis format." }], "outcome": "Reimagined the film database." },
      { "day": 39, "title": "Day 39: Sahitya: Fictionary UI", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Dialogue Cards", "type": "project", "desc": "Card-flip UI for viral expressions." }], "outcome": "Created interactive cultural snippets." },
      { "day": 40, "title": "Day 40: Sahitya: Meme/GIF Keyboard", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Cultural Expressions", "type": "project", "desc": "Custom shareable emoji hub." }], "outcome": "Built a shareable cultural engine." },
      { "day": 41, "title": "Day 41: Sahitya: Writeups & SEO", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Content Feed", "type": "project", "desc": "MDX powered article system." }], "outcome": "Optimized for literary search." },
      { "day": 42, "title": "Day 42: Sahitya: Launch Strategy", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Branding: Sahitya Reveal", "type": "project", "desc": "Launch 'Founder @ Sahitya Rachanalu'." }], "outcome": "Established creative authority." }
    ]
  },
  {
    "week": 7,
    "label": "Phase 7: Polishing & Advanced Upgrades (Analytical)",
    "theme": "Polishing",
    "color": GREEN,
    "days": [
      { "day": 43, "title": "Day 43: IPL Upgrade: Predictive Score Ranges", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Upgrade: Machine Learning", "type": "project", "desc": "Add a simple Linear Regression for scores." }], "outcome": "Added predictive intelligence to IPL." },
      { "day": 44, "title": "Day 44: OTT Upgrade: Sentiment NLP", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Upgrade: Text Analytics", "type": "project", "desc": "Use VADER for automated review scoring." }], "outcome": "Automated the sentiment layer." },
      { "day": 45, "title": "Day 45: E-com Upgrade: Dynamic Pricing", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Upgrade: Pricing Model", "type": "project", "desc": "Simulate price elasticity dashboards." }], "outcome": "Built a dynamic business model." },
      { "day": 46, "title": "Day 46: Advanced SQL & Data Eng (Bonus)", "tasks": [{ "time": "1\u20136pm", "task": "📊 AnalystBuilder: DBT & Snowflake", "type": "analytics", "link": "https://www.analystbuilder.com/courses/snowflake-for-data-analytics", "desc": "Modern data stack foundations." }], "outcome": "Learned to build data pipelines." },
      { "day": 47, "title": "Day 47: Portfolio Upgrade: Dark UI Polish", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Portfolio: Framer Motion", "type": "project", "desc": "Add high-end cinematic transitions." }], "outcome": "Achieved a premium SaaS look." },
      { "day": 48, "title": "Day 48: Sahitya Upgrade: Audio Integration", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Sahitya: Audio Player", "type": "project", "desc": "Embedded audiobooks/song snippets." }], "outcome": "Added a sensory layer to Sahitya." },
      { "day": 49, "title": "Day 49: Resume/LinkedIn Deep Polish", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Branding: Metric-Driven CV", "type": "project", "desc": "Add project metrics like 'ROAS optimized by 15%'." }], "outcome": "Ready for high-tier applications." }
    ]
  },
  {
    "week": 8,
    "label": "Phase 8: Execution & Final Polish (Strategy)",
    "theme": "Execution",
    "color": ACCENT,
    "days": [
      { "day": 50, "title": "Day 50: The Master Showcase Post", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Branding: The 8-week journey", "type": "project", "desc": "Consolidated video/carousel of all work." }], "outcome": "Maximized network reach." },
      { "day": 51, "title": "Day 51: Target Company Research", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Strategy: Personalized Reports", "type": "project", "desc": "Build a mini-report for a specific company." }], "outcome": "Created a unique application hook." },
      { "day": 52, "title": "Day 52: Interview Simulation (SQL/Tech)", "tasks": [{ "time": "1\u20136pm", "task": "📊 Practice: Live Coding Mock", "type": "analytics", "desc": "Simulate a 1-hour high-pressure coding test." }], "outcome": "Polished technical communication." },
      { "day": 53, "title": "Day 53: Interview Simulation (Case Prep)", "tasks": [{ "time": "1\u20136pm", "task": "📊 Practice: Business Case Mock", "type": "analytics", "desc": "Solve a 'Why is revenue down?' case." }], "outcome": "Polished business logic." },
      { "day": 54, "title": "Day 54: Application Blitz - Batch 1", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Strategy: High-intent applications", "type": "project", "desc": "Send to top 10 dream companies." }], "outcome": "Started the application engine." },
      { "day": 55, "title": "Day 55: Portfolio Maintenance & Feedback", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Polish: Bug fixing & UI tweaks", "type": "project", "desc": "Final check across all device sizes." }], "outcome": "Zero-error production code." },
      { "day": 56, "title": "Day 56: Final Review & Mental Prep", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Strategy: Review of all work", "type": "project", "desc": "Go through all 50+ outcomes." }], "outcome": "Peak confidence for interviews." },
      { "day": 57, "title": "Day 57: Buffer / Catch-up Day", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Catch-up on missing tasks", "type": "project" }], "outcome": "Cleared the backlog." },
      { "day": 58, "title": "Day 58: Cold Outreach Blitz", "tasks": [{ "time": "9am\u20136pm", "task": "🏗️ Strategy: Referral networking", "type": "project" }], "outcome": "Secured 3 potential referrals." },
      { "day": 59, "title": "Day 59: Portfolio Deployment Check", "tasks": [{ "time": "1\u20136pm", "task": "🏗️ Final Vercel sync", "type": "project" }], "outcome": "Perfect live links." },
      { "day": 60, "title": "Day 60: Hired Mindset Day", "tasks": [{ "time": "9am\u201312pm", "task": "\ud83c\udf89 Goal: Reflection & Next steps", "type": "project" }], "outcome": "Course complete. Career start." }
    ]
  }
];
const finalChecklist = [
  { item: "IPL Analytics Project (5 layers)", category: "Projects", done: false },
  { item: "OTT vs Theatre Project (9 layers)", category: "Projects", done: false },
  { item: "E-Commerce + Ads Project (9 layers)", category: "Projects", done: false },
  { item: "PKL Mini-Project (bonus)", category: "Projects", done: false },
  { item: "IPL Streamlit Dashboard (live)", category: "Dashboards", done: false },
  { item: "OTT Streamlit Dashboard (live)", category: "Dashboards", done: false },
  { item: "E-Commerce Streamlit Dashboard (live)", category: "Dashboards", done: false },
  { item: "2 Tableau Public Dashboards", category: "Dashboards", done: false },
  { item: "IPL 10-page Deep Report (PDF)", category: "Reports", done: false },
  { item: "OTT 12-page Deep Report (PDF)", category: "Reports", done: false },
  { item: "E-Commerce 10-page Deep Report (PDF)", category: "Reports", done: false },
  { item: "10 Published Blogs", category: "Content", done: false },
  { item: "3 LinkedIn Case Study write-ups", category: "Content", done: false },
  { item: "Portfolio Website Live (Vercel)", category: "Portfolio", done: false },
  { item: "Sahitya Rachanalu Platform Live", category: "Portfolio", done: false },
  { item: "LinkedIn Profile Complete + Active", category: "Applications", done: false },
  { item: "Resume (2 versions) Updated", category: "Applications", done: false },
  { item: "15+ Job Applications Sent", category: "Applications", done: false },
  { item: "SQL Intermediate-Advanced Level", category: "Skills", done: false },
  { item: "Python/pandas Applied Level", category: "Skills", done: false },
];

const taskTypeColors = {
  setup: "#6B7280",
  data: BLUE,
  learn: PURPLE,
  build: GREEN,
  output: ACCENT,
  think: "#F97316",
  research: "#14B8A6",
  write: "#EC4899",
  design: "#A855F7",
  review: "#EF4444",
  apply: GREEN,
  practice: "#F97316",
  track: "#6B7280",
  content: "#EC4899",
  analytics: BLUE,
  ibm: PURPLE,
  network: BLUE,
  plan: "#14B8A6",
  reflect: ACCENT,
  watch: "#FF0000",
};

// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// Insert this block just before `function Roadmap()` in roadmap.jsx

const projectsData = [
  {
    id: "ipl",
    emoji: "🏏",
    title: "IPL Analytics Engine",
    subtitle: "Sports · Product · Business · Growth · Strategy",
    accentColor: "#F4A72A",
    deliverable: "Interactive website hosted on Vercel — all dashboards, reports and blogs redirect from portfolio",
    metaInsight: '"IPL is not cricket. It is a product, a media empire, and an economic ecosystem."',
    layers: [
      {
        num: "1", icon: "📊", title: "On-Field Data Intelligence",
        role: "Sports / Performance Analyst",
        color: "#4A9EFF",
        what: "Decision intelligence, not just player stats",
        analyze: ["Player impact vs salary (ROI per crore)", "Toss vs win probability", "Venue bias — spin vs pace dominance", "Pressure performance — death overs, chase vs defend"],
        metrics: ["Strike Rate under pressure", "Economy rate in powerplay vs death", "Win % by toss decision per venue", "ROI = Runs+Wickets / Salary (crores)"],
        outputs: ["Heatmaps — player scoring zones", "Win probability graph — over by over", "'The Undervalued XI' report", "Clutch Index leaderboard"],
      },
      {
        num: "2", icon: "📱", title: "IPL as a Product",
        role: "Product / User Behavior Analyst",
        color: "#A855F7",
        what: "Think like Hotstar / Dream11, not a cricket fan",
        analyze: ["User journey: match → highlights → fantasy → reels", "Drop-off points — when viewers leave", "Engagement spikes — last overs, wickets, Dhoni entry"],
        metrics: ["Avg watch time per match", "Retention curve per match type", "Peak concurrency estimate", "Fantasy team creation rate"],
        outputs: ["Funnel diagram: Awareness→Tune-in→Engage→Share", "Retention graphs per match phase", "'Why IPL beats OTT shows in engagement' report"],
      },
      {
        num: "3", icon: "💰", title: "Business & Revenue Engine",
        role: "Business / Financial Analyst",
        color: "#F4A72A",
        what: "Separate yourself from 90% of analysts",
        analyze: ["Media rights value (broadcaster splits)", "Sponsorship layers — title, jersey, digital", "Franchise valuation growth 2010→2024", "Ticket + merchandising revenue"],
        metrics: ["Revenue per match", "Revenue per viewer", "Brand value CAGR per franchise", "Sponsorship ROI per category"],
        outputs: ["Revenue breakdown waterfall chart", "Franchise valuation comparison timeline", "'Why RCB earns more without trophies?' case study"],
      },
      {
        num: "4", icon: "📈", title: "Growth & Marketing Strategy",
        role: "Growth / Marketing Analyst",
        color: "#2ECC71",
        what: "Creativity + strategy mindset combined",
        analyze: ["Why IPL dominates summer — seasonality", "Brand campaigns — Swiggy, CRED, Dream11 ads", "Meme economy + reels virality", "Correlation: match moments vs social spikes"],
        metrics: ["Hashtag trend velocity", "Influencer reach vs conversion estimate", "Ad recall score proxy", "Social spike timing vs match event"],
        outputs: ["Social media spike timeline graphs", "Campaign breakdown case studies", "'How IPL hijacks internet attention' report"],
      },
      {
        num: "5", icon: "🌍", title: "Macro Impact",
        role: "Strategy / Market Research Analyst",
        color: "#F97316",
        what: "No one does this. Make it your differentiator.",
        analyze: ["IPL vs movie industry revenue — summer window", "Impact on OTT release calendar", "Fantasy + betting economy size", "Local business impact — restaurants, bars"],
        metrics: ["Seasonal GMV shift in entertainment", "OTT subscriber gain during IPL months", "Movie box office depression % during IPL weeks"],
        outputs: ["Industry comparison charts", "Seasonal economy timeline", "'IPL as an Economic Ecosystem' report"],
      },
    ],
    deliverables: [
      { icon: "🌐", label: "Live Website", desc: "Vercel-hosted interactive site — all 5 layers as separate pages with charts + filters" },
      { icon: "📊", label: "Power BI Dashboard", desc: "Player stats, venue heatmap, team performance — interactive with slicers" },
      { icon: "📝", label: "Blog Series", desc: "'Why CSK builds better teams' · 'IPL is not cricket, it's a product' · 'The Undervalued XI'" },
      { icon: "📄", label: "Deep Report (PDF)", desc: "10–15 page McKinsey-style consulting report" },
      { icon: "📱", label: "LinkedIn Carousels", desc: "5-slide visual breakdowns of key insights" },
    ],
    roleMap: [
      { section: "Player + Match Data", role: "Data Analyst" },
      { section: "Viewer Behavior", role: "Product Analyst" },
      { section: "Revenue + Franchise", role: "Business Analyst" },
      { section: "Ads + Engagement", role: "Growth Analyst" },
      { section: "Industry Impact", role: "Strategy Analyst" },
    ]
  },
  {
    id: "ott",
    emoji: "🎬",
    title: "OTT vs Theatre Intelligence",
    subtitle: "Content · Audience · Distribution · Business · COVID Impact",
    accentColor: "#A855F7",
    deliverable: "Interactive website with 9 analysis modules — linked from portfolio",
    metaInsight: '"Theatres capture the peak. OTT captures the memory."',
    layers: [
      {
        num: "1", icon: "🎭", title: "Content Performance + Genre Analysis",
        role: "Content / Data Analyst",
        color: "#4A9EFF",
        what: "What genres actually win — theatres vs OTT",
        analyze: ["Genre vs revenue — Action, Romance, Thriller, Comedy", "Pan-India vs niche regional content", "Telugu, Tamil rise vs Hindi dominance"],
        metrics: ["Revenue per genre", "OTT completion rate proxy (ratings count)", "Regional vs national opening ratio"],
        outputs: ["Genre vs revenue bar chart", "OTT completion rate by genre", "Insight: 'Mass content wins theatres, niche thrives on OTT'"],
      },
      {
        num: "2", icon: "⭐", title: "Reviews & Word-of-Mouth Impact",
        role: "Data / Sentiment Analyst",
        color: "#EC4899",
        what: "Reviews don't just rate films — they decide revenue",
        analyze: ["IMDb ratings vs box office trajectory", "Critics vs audience score gap", "Social media sentiment vs occupancy"],
        metrics: ["Day 1 vs Day 3 revenue drop %", "Rating vs revenue correlation coefficient", "Sentiment score (VADER) per film"],
        outputs: ["Rating vs revenue scatter plot", "Sentiment vs box office trend line", "Insight: 'Hype opens, reviews sustain'"],
      },
      {
        num: "3", icon: "🎟️", title: "Distribution — Multiplex vs Single Screen",
        role: "Business / Market Analyst",
        color: "#F4A72A",
        what: "Urban watches content, rural celebrates cinema",
        analyze: ["Urban (PVR/INOX) vs Rural (single screen) occupancy", "Price sensitivity — premium vs budget seats", "Content type preference by screen tier"],
        metrics: ["ATP (Avg Ticket Price) by tier", "Occupancy % — Multiplex vs Single Screen", "Regional language share of screens"],
        outputs: ["Urban vs rural revenue split chart", "Occupancy comparison bar chart", "Insight: 'Urban watches content, rural celebrates cinema'"],
      },
      {
        num: "4", icon: "📱", title: "Booking Behavior Funnel",
        role: "Product / UX Analyst",
        color: "#2ECC71",
        what: "Intent is high — pricing and timing decide conversion",
        analyze: ["BookMyShow funnel: Search→Browse→Select→Book→Watch", "Weekend vs weekday booking patterns", "Group booking vs solo behavior"],
        metrics: ["Funnel drop-off % at each stage", "Booking-to-show time gap", "Advance booking % vs walk-in %"],
        outputs: ["Booking heatmap — time vs demand", "Funnel drop-off diagram", "Insight: 'Intent is high, but pricing decides conversion'"],
      },
      {
        num: "5", icon: "🔗", title: "Full Content Lifecycle",
        role: "Strategy / Content Analyst",
        color: "#14B8A6",
        what: "Theatre window to OTT gap has collapsed 60→8 weeks",
        analyze: ["Pre→Release→Reviews→OTT→Re-watch timeline", "Theatre window shrinkage 2019 vs 2024", "Re-watch patterns on OTT"],
        metrics: ["Days from release to OTT", "Revenue % earned in Week 1 vs Week 2+", "OTT views spike timing post-theatre"],
        outputs: ["Revenue lifecycle curve", "Engagement-over-time chart", "Insight: 'Theatres capture peak, OTT captures memory'"],
      },
      {
        num: "6", icon: "📈", title: "Marketing & Promotion Strategies",
        role: "Growth / Marketing Analyst",
        color: "#F97316",
        what: "Promotion doesn't just inform — it creates cultural moments",
        analyze: ["Trailer launch vs opening weekend correlation", "College tours, fan events, viral reel challenges", "Meme marketing — pre-release to post-release"],
        metrics: ["YouTube trailer views vs Day 1 BO", "Engagement spike on promo events", "Hashtag reach vs opening collection"],
        outputs: ["Promotion vs engagement spike graph", "Campaign type vs success matrix", "Insight: 'Promotion creates cultural moments, not just awareness'"],
      },
      {
        num: "7", icon: "🧠", title: "Demographics Analysis",
        role: "Product / Audience Analyst",
        color: "#A855F7",
        what: "Different age groups consume same content for different reasons",
        analyze: ["15–25: reels, hype, action | 25–40: story, realism | 40+: drama, emotion", "Genre preference by age group", "OTT vs theatre usage by demographic"],
        metrics: ["Age-segment revenue share", "Platform preference % by age group", "Genre completion rate by segment"],
        outputs: ["Age vs content preference chart", "Platform vs age usage heatmap", "Insight: 'Same film, different consumption reasons by age'"],
      },
      {
        num: "8", icon: "🦠", title: "COVID Impact Analysis",
        role: "Business / Strategy Analyst",
        color: "#EF4444",
        what: "COVID didn't kill theatres — it forced evolution",
        analyze: ["Pre-COVID: theatre dominant | During: OTT boom | Post: hybrid", "OTT subscriber growth 2019→2024", "Theatre footfall recovery curve"],
        metrics: ["YoY OTT subscriber growth %", "Theatre recovery footfall index", "Hybrid content release % post-COVID"],
        outputs: ["Year vs OTT growth line chart", "Theatre recovery curve", "Insight: 'COVID forced the evolution of distribution'"],
      },
      {
        num: "9", icon: "💰", title: "Business Model Comparison",
        role: "Financial / Business Analyst",
        color: "#2ECC71",
        what: "OTT optimizes lifetime value — theatres maximize moment value",
        analyze: ["OTT: subscription tiers, ad revenue, content spend", "Theatre: ticket revenue, F&B margin 40–50%, real estate costs", "Risk vs reward per model"],
        metrics: ["Revenue per subscriber (OTT)", "Revenue per screen per show (Theatre)", "Content spend as % of revenue"],
        outputs: ["Revenue model comparison chart", "Risk vs reward matrix", "Insight: 'OTT optimizes LTV, theatres optimize moments'"],
      },
    ],
    deliverables: [
      { icon: "🌐", label: "Live Website", desc: "9-module interactive site with all charts — Vercel hosted, linked from portfolio" },
      { icon: "📊", label: "Tableau Dashboard", desc: "Genre trends, sentiment vs revenue, COVID timeline, demographic breakdown" },
      { icon: "🎯", label: "Case Study (MANDATORY)", desc: "Pick 1 film: Pre-release hype → Opening → Reviews impact → OTT shift timeline" },
      { icon: "📄", label: "Reports (PDF)", desc: "'Why theatres survive OTT era' · 'Reviews vs Revenue' · 'COVID reshaped entertainment'" },
      { icon: "📱", label: "LinkedIn Series", desc: "5-slide carousels per insight — 9 posts total" },
    ],
    roleMap: [
      { section: "Content + Reviews", role: "Data Analyst" },
      { section: "Booking Funnel", role: "Product Analyst" },
      { section: "Demographics", role: "Audience Analyst" },
      { section: "Marketing ROI", role: "Growth Analyst" },
      { section: "Business Models", role: "Business Analyst" },
    ]
  },
  {
    id: "ecom",
    emoji: "🛒",
    title: "E-Commerce + Ads System",
    subtitle: "Sales · Psychology · Quick Commerce · Offline Impact · Conglomerates",
    accentColor: "#2ECC71",
    deliverable: "Interactive website with 9 analysis modules — redirects from portfolio",
    metaInsight: '"E-commerce is not selling products. It is controlling attention, behavior, logistics, and ecosystems."',
    layers: [
      {
        num: "1", icon: "🛍️", title: "Seasonal Sales — Festival vs Normal",
        role: "Data / Business Analyst",
        color: "#F4A72A",
        what: "Festivals are engineered demand spikes, not organic ones",
        analyze: ["Diwali / Big Billion Days / Great Indian Sale spikes", "Category performance: mobiles > fashion > appliances", "Normal vs festival day GMV delta"],
        metrics: ["GMV spike % vs normal week", "Order volume by category", "AOV (Avg Order Value) during sale vs normal"],
        outputs: ["Festival sales heatmap by category", "GMV spike timeline chart", "Insight: 'Urgency is manufactured, not accidental'"],
      },
      {
        num: "2", icon: "💸", title: "Pricing + Discount Strategy",
        role: "Data / Behavioral Analyst",
        color: "#4A9EFF",
        what: "Anchoring psychology drives more sales than actual discounts",
        analyze: ["Fake vs real discount detection in dataset", "Anchor pricing: ₹50,000 → ₹29,999 psychology", "Limited-time urgency mechanics"],
        metrics: ["Discount % offered vs actual price change", "Conversion rate lift with countdown timers", "Price elasticity by category"],
        outputs: ["Fake vs real discount scatter", "'Psychology of ₹29,999' analysis", "Insight: 'Price anchoring > actual savings in conversion'"],
      },
      {
        num: "3", icon: "📱", title: "Instagram Ads Impact",
        role: "Growth / Marketing Analyst",
        color: "#EC4899",
        what: "Reels ads are the highest converting format in e-commerce",
        analyze: ["Ad impressions → clicks → purchases funnel", "Influencer vs brand ads conversion", "Reels ads vs Story ads performance"],
        metrics: ["CTR (Click-Through Rate) by ad format", "CAC (Customer Acquisition Cost)", "ROAS (Return on Ad Spend)"],
        outputs: ["Ad funnel conversion chart", "Format vs conversion comparison", "Insight: 'Reels ads outperform every format in discovery-to-purchase'"],
      },
      {
        num: "4", icon: "🧠", title: "Consumer Psychology",
        role: "Behavioral / Product Analyst",
        color: "#A855F7",
        what: "FOMO and urgency are engineered — not felt",
        analyze: ["Cart abandonment patterns (industry: 70%+ abandonment)", "FOMO effect — stock alerts, countdown timers", "Subscription model stickiness (Prime, Flipkart Plus)"],
        metrics: ["Cart abandonment rate by category", "Conversion lift from urgency triggers", "Subscription retention rate proxy"],
        outputs: ["Conversion funnel chart", "Cart abandonment analysis", "Insight: 'Urgency drives conversion more than discount'"],
      },
      {
        num: "5", icon: "💰", title: "Revenue Strategy",
        role: "Business / Financial Analyst",
        color: "#2ECC71",
        what: "LTV and retention, not just first sale, determine profitability",
        analyze: ["AOV, Conversion Rate, Repeat customer %", "Subscription model revenue vs transactional", "LTV by customer segment"],
        metrics: ["LTV / CAC ratio", "Repeat purchase rate", "Subscription ARPU (Avg Revenue Per User)"],
        outputs: ["LTV vs CAC comparison chart", "Revenue model breakdown", "Insight: 'Subscriptions convert buyers into ecosystems'"],
      },
      {
        num: "6", icon: "⚡", title: "Quick Commerce Deep Dive",
        role: "Strategy / Product Analyst",
        color: "#14B8A6",
        what: "Time is replacing price as the #1 purchase decision factor",
        analyze: ["Blinkit vs Instamart vs BigBasket — speed, UI, trust", "10–20 min delivery: convenience over price shift", "Planned buying → instant buying behavior change"],
        metrics: ["AOV per platform", "Delivery SLA vs industry avg", "Category strength per platform"],
        outputs: ["Platform comparison matrix", "Time vs price consumer decision chart", "Insight: 'Quick commerce increases frequency, not basket size'"],
      },
      {
        num: "7", icon: "🏪", title: "Impact on Offline Market",
        role: "Market Research / Strategy Analyst",
        color: "#F97316",
        what: "Offline is not dying — it is being absorbed into online ecosystems",
        analyze: ["Kirana store footfall loss — data points", "Price competition from e-commerce platforms", "JioMart model — kirana onboarding"],
        metrics: ["Kirana store count change YoY", "Average footfall decline %", "Platform-onboarded kirana % growth"],
        outputs: ["Offline vs online market share chart", "Kirana absorption model", "Insight: 'Offline is not dying, it is becoming a delivery node'"],
      },
      {
        num: "8", icon: "🏢", title: "Big Conglomerate Game",
        role: "Strategy / Business Analyst",
        color: "#EF4444",
        what: "This is not apps vs apps — it's ecosystems vs ecosystems",
        analyze: ["Reliance: Jio+JioMart+retail ecosystem", "Tata: BigBasket+Tata Neu+trust brand", "DMart: low-cost offline efficiency", "Adani: backend supply chain control"],
        metrics: ["Market share % by segment", "Ecosystem reach (services bundled)", "Revenue per ecosystem user"],
        outputs: ["Conglomerate strategy comparison matrix", "Ecosystem map visualization", "Insight: 'The battle is won in logistics and data, not UI'"],
      },
      {
        num: "9", icon: "🧬", title: "Meta Insight — The Full System",
        role: "All Roles Combined",
        color: "#A855F7",
        what: "Connect all 8 layers into one unified narrative",
        analyze: ["How attention → behavior → logistics → ecosystem forms a loop", "Which companies own each layer", "What breaks the loop (regulation, trust, competition)"],
        metrics: ["Customer journey touchpoints controlled per platform", "Lock-in index (how many services bundle together)", "Switching cost proxy"],
        outputs: ["Ecosystem control map", "Full system narrative report", "Insight: 'E-commerce is attention + behavior + logistics + ecosystem control'"],
      },
    ],
    deliverables: [
      { icon: "🌐", label: "Live Website", desc: "9-module site with all analysis, charts and insights — Vercel hosted, portfolio linked" },
      { icon: "📊", label: "Power BI Dashboard", desc: "Festival sales heatmaps, funnel drop-offs, CAC analysis, platform comparison" },
      { icon: "📝", label: "Insights (5–7 must)", desc: "Urgency drives conversion · Quick commerce = frequency not size · Anchoring > discount" },
      { icon: "💡", label: "Recommendations", desc: "Optimize for reels ads · Push urgency-based UI · Target subscription for LTV" },
      { icon: "📄", label: "Deep Report (PDF)", desc: "'The Psychology of Big Billion Days' — 10 pages consulting style" },
    ],
    roleMap: [
      { section: "Sales + Pricing", role: "Data Analyst" },
      { section: "Ads Funnel", role: "Growth Analyst" },
      { section: "Consumer Psych", role: "Behavioral Analyst" },
      { section: "Quick Commerce", role: "Strategy Analyst" },
      { section: "Conglomerates", role: "Business Analyst" },
    ]
  }
];


const skillsRoadmap = [
  {
    role: "Data Analyst",
    icon: "📊",
    color: BLUE,
    tools: [
      { name: "SQL", desc: "SELECT, JOINs, CTEs, Window Functions, subqueries. The non-negotiable core skill.", level: "Advanced", weeks: "1–2" },
      { name: "Python (Pandas + NumPy)", desc: "Data cleaning, EDA, groupby, merge, visualization pipelines.", level: "Intermediate", weeks: "2" },
      { name: "Power BI", desc: "Star schema, DAX measures, interactive dashboards, Power Query.", level: "Intermediate", weeks: "2–3" },
      { name: "Excel", desc: "XLOOKUP, Pivot Tables, Power Query, What-If analysis.", level: "Advanced", weeks: "1" },
      { name: "Matplotlib / Seaborn", desc: "Static charts, heatmaps, scatter plots for Python-native reporting.", level: "Intermediate", weeks: "2" },
    ]
  },
  {
    role: "Product Analyst",
    icon: "🚀",
    color: PURPLE,
    tools: [
      { name: "Product Metrics", desc: "DAU/MAU, retention, funnel drop-off, engagement spikes, session analysis.", level: "Advanced", weeks: "3–5" },
      { name: "A/B Testing", desc: "Hypothesis setup, p-values, statistical significance, experiment design.", level: "Intermediate", weeks: "1, 7" },
      { name: "SQL (Product Focus)", desc: "Funnel queries, cohort analysis, event tracking tables.", level: "Advanced", weeks: "1–3" },
      { name: "Mixpanel / Amplitude concepts", desc: "Event-based analytics, user journeys, retention curves.", level: "Conceptual", weeks: "5–7" },
      { name: "Python (Plotly)", desc: "Interactive charts for product dashboards and stakeholder reports.", level: "Intermediate", weeks: "2–3" },
    ]
  },
  {
    role: "Business Analyst",
    icon: "💼",
    color: ACCENT,
    tools: [
      { name: "Excel (Advanced)", desc: "Financial modeling, scenario analysis, Goal Seek, Solver.", level: "Advanced", weeks: "1" },
      { name: "Power BI (Storytelling)", desc: "KPI cards, drill-throughs, executive-level narrative dashboards.", level: "Advanced", weeks: "2–3, 9–10" },
      { name: "SQL (Reporting)", desc: "Aggregations, monthly reports, YoY comparisons, business KPIs.", level: "Intermediate", weeks: "1–2" },
      { name: "Data Storytelling", desc: "STAR method presentations, McKinsey-style reports, insight framing.", level: "Advanced", weeks: "4–6" },
      { name: "Market Research", desc: "Pytrends, public datasets, annual reports, competitive analysis.", level: "Intermediate", weeks: "3–5" },
    ]
  },
  {
    role: "Growth Analyst",
    icon: "📈",
    color: GREEN,
    tools: [
      { name: "Marketing Analytics", desc: "CAC, LTV, ROAS, ad funnel modeling (Impressions→Click→Purchase).", level: "Intermediate", weeks: "5" },
      { name: "Google Analytics concepts", desc: "Traffic sources, bounce rate, conversion tracking, UTM parameters.", level: "Conceptual", weeks: "6–7" },
      { name: "Python (Pytrends + APIs)", desc: "Keyword trend analysis, social spike detection, brand tracking.", level: "Intermediate", weeks: "3" },
      { name: "Cohort & Retention Analysis", desc: "D1/D7/D30 retention, churn modeling, reactivation funnels.", level: "Intermediate", weeks: "4–5" },
      { name: "Content Analytics", desc: "Viral coefficient, engagement rate, share curves, meme economy.", level: "Conceptual", weeks: "3, 7–8" },
    ]
  },
  {
    role: "Strategy / Data Engineering (Bonus)",
    icon: "⚙️",
    color: RED,
    tools: [
      { name: "dbt (Data Build Tool)", desc: "SQL-based transformations, models, tests, lineage graphs.", level: "Beginner", weeks: "12–13 (16W)" },
      { name: "Apache Airflow", desc: "DAG scheduling, pipeline orchestration, dependency management.", level: "Beginner", weeks: "12–13 (16W)" },
      { name: "Snowflake", desc: "Cloud data warehouse, virtual warehouses, roles, stages.", level: "Beginner", weeks: "12–13 (16W)" },
      { name: "AI / Forecasting", desc: "Time series (Prophet/ARIMA), Power BI built-in forecast, ChatGPT workflows.", level: "Beginner", weeks: "14 (16W)" },
      { name: "Star Schema / Data Modeling", desc: "Fact vs dimension tables, Kimball methodology, Power BI relationships.", level: "Intermediate", weeks: "2, 11 (16W)" },
    ]
  },
];

// ─── ProjectCard Component ────────────────────────────────────────────────────
function ProjectCard({ proj }) {
  const [expanded, setExpanded] = React.useState(null);
  return (
    <div style={{ background: CARD, border: `2px solid ${proj.accentColor}`, borderRadius: 12, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 32 }}>{proj.emoji}</span>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{proj.title}</h2>
          <p style={{ margin: 0, color: proj.accentColor, fontSize: 11, fontWeight: 700 }}>{proj.subtitle}</p>
        </div>
      </div>
      <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "10px 14px", marginBottom: 16, fontSize: 12, color: MUTED }}>
        🌐 <strong style={{ color: proj.accentColor }}>Delivery:</strong> {proj.deliverable}
      </div>

      {/* Layers */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {proj.layers.map((layer, i) => (
          <div key={i} style={{ border: `1px solid ${expanded === i ? layer.color : BORDER}`, borderRadius: 8, overflow: "hidden", transition: "border-color 0.2s" }}>
            <div onClick={() => setExpanded(expanded === i ? null : i)} style={{ padding: "12px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", background: expanded === i ? layer.color + "18" : "transparent" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>{layer.icon}</span>
                <div>
                  <span style={{ fontSize: 11, color: layer.color, fontWeight: 700 }}>LAYER {layer.num} · </span>
                  <span style={{ fontSize: 13, fontWeight: 800 }}>{layer.title}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, background: layer.color + "25", color: layer.color, padding: "2px 8px", borderRadius: 4, fontWeight: 700 }}>{layer.role}</span>
                <span style={{ color: MUTED }}>{expanded === i ? "−" : "+"}</span>
              </div>
            </div>
            {expanded === i && (
              <div style={{ borderTop: `1px solid ${BORDER}`, padding: "14px 16px" }}>
                <div style={{ fontSize: 12, color: layer.color, fontStyle: "italic", marginBottom: 12 }}>💡 {layer.what}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>ANALYZE</div>
                    {layer.analyze.map((a, j) => <div key={j} style={{ fontSize: 11, color: TEXT, padding: "3px 0", borderBottom: `1px solid ${BORDER}20` }}>• {a}</div>)}
                  </div>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>METRICS TO BUILD</div>
                    {layer.metrics.map((m, j) => <div key={j} style={{ fontSize: 11, color: ACCENT, padding: "3px 0", borderBottom: `1px solid ${BORDER}20` }}>📐 {m}</div>)}
                  </div>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>OUTPUTS</div>
                    {layer.outputs.map((o, j) => <div key={j} style={{ fontSize: 11, color: GREEN, padding: "3px 0", borderBottom: `1px solid ${BORDER}20` }}>✓ {o}</div>)}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Deliverables */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>FINAL DELIVERABLES</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {proj.deliverables.map((d, i) => (
            <div key={i} style={{ background: "#1a1a2e", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ fontSize: 14 }}>{d.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, marginLeft: 4 }}>{d.label}</span>
              <div style={{ fontSize: 10, color: MUTED, marginTop: 2 }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Map */}
      <div>
        <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>ROLE MAP</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {proj.roleMap.map((r, i) => (
            <div key={i} style={{ background: proj.accentColor + "20", border: `1px solid ${proj.accentColor}40`, borderRadius: 4, padding: "4px 10px", fontSize: 10 }}>
              <span style={{ color: MUTED }}>{r.section} → </span>
              <span style={{ color: proj.accentColor, fontWeight: 700 }}>{r.role}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "10px 14px", marginTop: 14, fontSize: 12, fontStyle: "italic", color: TEXT }}>
        {proj.metaInsight}
      </div>
    </div>
  );
}

function Roadmap() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [checklist, setChecklist] = useState(finalChecklist.map(i => ({ ...i })));
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [domainFilter, setDomainFilter] = useState("All");
  const [expandedDayTask, setExpandedDayTask] = useState(null);

  const [completedTasks, setCompletedTasks] = React.useState(() => {
    try {
      const saved = localStorage.getItem("roadmap_tasks_v2");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("roadmap_tasks_v2", JSON.stringify(completedTasks));
    } catch(e) {}
  }, [completedTasks]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const allTasksCount = weeks.reduce((sum, w) => sum + w.days.reduce((dSum, d) => dSum + d.tasks.length, 0), 0);
  const completedTasksCount = Object.values(completedTasks).filter(Boolean).length;
  const tasksProgress = allTasksCount > 0 ? Math.round((completedTasksCount / allTasksCount) * 100) : 0;

  const domains = [
    { id: "All", label: "All Tasks (Normal View)" },
    { id: "analytics_tracker", label: "📊 Data Analytics Tracker", match: ["AnalystBuilder", "IBM:"] },
    { id: "dsa", label: "⚔️ DSA Track", match: ["DSA:"] },
    { id: "sql", label: "🗄️ SQL Track", match: ["SQL", "Technical:"] },
    { id: "aptitude", label: "🧠 Aptitude", match: ["Aptitude:"] },
    { id: "math", label: "📊 Math/Stats", match: ["Math:"] },
    { id: "project", label: "🏗️ Projects", match: ["Project", "🏗️"] },
  ];



  const tabs = [
    { id: "overview", label: "🗺️ Overview" },
    { id: "projects", label: "🚀 Projects Deep-Dive" },
    { id: "platforms", label: "🌐 Platforms & Portfolio" },
    { id: "creative", label: "🎨 Creative Hub" },
    { id: "daily", label: "📅 Daily Plan" },
    { id: "skills", label: "🛠️ Skills" },
    { id: "checklist", label: "✅ Checklist" },
  ];

  const toggleCheck = (idx) => {
    setChecklist(prev => prev.map((item, i) => i === idx ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(i => i.done).length;
  const progress = Math.round((completedCount / checklist.length) * 100);

  const currentWeekData = weeks[selectedWeek];
  const currentDayData = selectedDay !== null
    ? currentWeekData?.days?.find(d => d.day === selectedDay)
    : null;

  const checklistCategories = [...new Set(finalChecklist.map(i => i.category))];

  return (
    <div style={{
      background: BG,
      minHeight: "100vh",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      color: TEXT,
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #0A0A0F 0%, #12121E 50%, #0A0A0F 100%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "24px 24px 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 20 }}>🚀</span>
            <span style={{ color: ACCENT, fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase" }}>
              60-Day Execution Roadmap
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5, fontFamily: "'DM Mono', monospace" }}>
            Srihari's <span style={{ color: ACCENT }}>Analyst</span> Launch Plan
          </h1>
          <p style={{ margin: "6px 0 0", color: MUTED, fontSize: 12 }}>
            May 1 → June 30 · 3 Projects · 2 Platforms · 15+ Applications
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: 89, zIndex: 99 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: "none",
              border: "none",
              color: activeTab === tab.id ? ACCENT : MUTED,
              padding: "14px 20px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "inherit",
              letterSpacing: 0.5,
              borderBottom: activeTab === tab.id ? `2px solid ${ACCENT}` : "2px solid transparent",
              transition: "all 0.2s",
            }}>{tab.label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Stats bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Days", value: "60", color: ACCENT },
                { label: "Projects", value: "3+", color: BLUE },
                { label: "Platforms", value: "2", color: PURPLE },
                { label: "Target Roles", value: "4", color: GREEN },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${stat.color}`,
                  borderRadius: 8,
                  padding: "16px 12px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginTop: 2, letterSpacing: 1 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* SUCCESS BLUEPRINT */}
            <div style={{
              background: "linear-gradient(135deg, #1e1e3f, #0d0d1f)",
              border: `1px solid ${BLUE}50`,
              borderRadius: 12,
              padding: 24,
              marginBottom: 32,
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: -20, right: -20, fontSize: 100, opacity: 0.1 }}>🏆</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: BLUE, marginBottom: 8, marginTop: 0 }}>🧠 Guaranteed Success Blueprint</h2>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, maxWidth: "80%", marginBottom: 20 }}>
                I have curated the <strong>Gold Standard</strong> resources for you. To achieve 100% knowledge acquisition, follow this execution framework blindly:
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { title: "Active Recall", icon: "⚡", desc: "Never just watch. For every 10 mins of video, spend 20 mins building the code yourself. Output is the only metric of learning." },
                  { title: "The 'Stuck' Rule", icon: "🛑", desc: "Stuck? 30 mins: Debug yourself. 60 mins: Search Google/Docs. 90 mins: Ask AI. Don't move to next task until the current one works." },
                  { title: "Project First", icon: "🏗️", desc: "Theory is secondary. If you learn a SQL Join today, it MUST appear in your IPL or OTT project by tonight. Context is king." },
                ].map(rule => (
                  <div key={rule.title} style={{ background: "#ffffff0a", padding: 16, borderRadius: 8, border: "1px solid #ffffff10" }}>
                    <div style={{ fontSize: 20, marginBottom: 8 }}>{rule.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: ACCENT, marginBottom: 4 }}>{rule.title}</div>
                    <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{rule.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly timeline */}
            <h2 style={{ fontSize: 13, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginBottom: 16 }}>
              8-Week Master Timeline
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {weeks.map((week, idx) => (
                <div key={idx} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${week.color}`,
                  borderRadius: 8,
                  padding: "14px 16px",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }} onClick={() => { setActiveTab("daily"); setSelectedWeek(idx); setSelectedDay(null); }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = week.color}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.borderLeftColor = week.color; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ color: week.color, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
                        WEEK {week.week} ·
                      </span>
                      <span style={{ marginLeft: 8, fontWeight: 700, fontSize: 14 }}>{week.label}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        background: `${week.color}20`,
                        color: week.color,
                        padding: "3px 10px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 700,
                      }}>{week.theme}</span>
                      <span style={{ fontSize: 11, color: MUTED }}>
                        {week.days.length} days →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project quick-ref */}
            <h2 style={{ fontSize: 13, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginTop: 32, marginBottom: 16 }}>
              Project Quick Reference
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { emoji: "🏏", title: "IPL Analytics", week: "Weeks 1–2+7", layers: "7 layers", output: "Dashboard + Report + 3 blogs", color: ACCENT },
                { emoji: "🎬", title: "OTT vs Theatre", week: "Weeks 3+7", layers: "9 layers", output: "Dashboard + Report + 2 blogs", color: PURPLE },
                { emoji: "🛒", title: "E-Commerce", week: "Weeks 4+8", layers: "9 layers", output: "Dashboard + Report + 2 blogs", color: GREEN },
              ].map(p => (
                <div key={p.title} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `2px solid ${p.color}`,
                  borderRadius: 8,
                  padding: 16,
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{p.emoji}</div>
                  <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: p.color, marginBottom: 8 }}>{p.week} · {p.layers}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{p.output}</div>
                </div>
              ))}
            </div>

            {/* Data sources */}
            <h2 style={{ fontSize: 13, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginTop: 32, marginBottom: 16 }}>
              Key Data Sources
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
              {[
                { project: "IPL", sources: "Kaggle (ipl.csv), ESPN Cricinfo, Cricbuzz salary data, BCCI press releases, pytrends" },
                { project: "OTT", sources: "Kaggle (IMDb, Netflix), Box Office Mojo, PVR INOX annual reports, BARC data, cinemagoer" },
                { project: "E-Commerce", sources: "Kaggle (Amazon reviews, Flipkart catalog), company press releases, Baymard Institute, public funding data" },
                { project: "PKL", sources: "Kaggle PKL datasets, kabaddi.com, Pro Kabaddi League official site" },
              ].map(s => (
                <div key={s.project} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: 14,
                }}>
                  <div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.project}</div>
                  <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.6 }}>{s.sources}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <h2 style={{ fontSize: 13, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginTop: 32, marginBottom: 16 }}>
              Full Tech Stack
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { name: "Python", cat: "Analysis" }, { name: "pandas", cat: "Analysis" }, { name: "matplotlib/seaborn", cat: "Analysis" },
                { name: "Plotly", cat: "Viz" }, { name: "Streamlit", cat: "Dashboards" }, { name: "SQL/SQLite", cat: "Data" },
                { name: "Excel", cat: "Analysis" }, { name: "Tableau Public", cat: "Dashboards" }, { name: "Power BI", cat: "Dashboards" },
                { name: "React + Tailwind", cat: "Portfolio" }, { name: "Next.js", cat: "Sahitya" }, { name: "Vercel", cat: "Deploy" },
                { name: "GitHub", cat: "Version Control" }, { name: "TextBlob/VADER", cat: "NLP" }, { name: "pytrends", cat: "Research" },
                { name: "Canva", cat: "Design" }, { name: "Figma", cat: "Design" }, { name: "Medium", cat: "Blogs" },
              ].map(tool => (
                <span key={tool.name} style={{
                  background: "#1a1a2e",
                  border: `1px solid ${BORDER}`,
                  color: TEXT,
                  padding: "5px 10px",
                  borderRadius: 4,
                  fontSize: 11,
                }}>
                  <span style={{ color: MUTED }}>{tool.cat} · </span>{tool.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* DAILY TAB */}
        {activeTab === "daily" && (
          <div>
            {/* Segregation Strategy */}
            <div style={{
              background: "linear-gradient(135deg, #12121E 0%, #0A0A0F 100%)",
              border: `1px solid ${ACCENT}`,
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: ACCENT, margin: "0 0 12px 0" }}>⏱️ The 4-Block Daily Segregation System</h3>
              <p style={{ fontSize: 13, color: TEXT, margin: "0 0 16px 0", lineHeight: 1.5 }}>
                Do not mix tasks. Stick to these 4 strict time blocks to balance Interview Prep, Analytics, Web Dev, and Creativity:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                <div style={{ background: CARD, border: `1px solid ${RED}`, padding: 12, borderRadius: 6 }}>
                  <div style={{ color: RED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BLOCK 0: EARLY (7 AM - 9 AM)</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>Interview Prep</div>
                  <div style={{ fontSize: 12, color: MUTED }}>Focus: DSA & Aptitude.<br/>Rule: Pass the written test.</div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BLUE}`, padding: 12, borderRadius: 6 }}>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BLOCK 1: CORE (9 AM - 1 PM)</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>The Logical Block</div>
                  <div style={{ fontSize: 12, color: MUTED }}>Focus: Analytics, SQL, Python, Tableau.<br/>Rule: Hard logic & data only (Project 3).</div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${PURPLE}`, padding: 12, borderRadius: 6 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BLOCK 2: AFTERNOON (2 PM - 5 PM)</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>The Building Block</div>
                  <div style={{ fontSize: 12, color: MUTED }}>Focus: React, Next.js, Figma, UI/UX.<br/>Rule: Visual feedback & dev only (Project 1).</div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${GREEN}`, padding: 12, borderRadius: 6 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BLOCK 3: EVENING (6 PM - 8 PM)</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>The Creative Block</div>
                  <div style={{ fontSize: 12, color: MUTED }}>Focus: Writing, Presentations, Reading.<br/>Rule: Free-flowing creativity (Project 2).</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              padding: "16px 20px",
              marginBottom: 20,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Overall Task Progress</span>
                <span style={{ color: GREEN, fontWeight: 800, fontSize: 14 }}>{tasksProgress}%</span>
              </div>
              <div style={{ background: "#1a1a2e", borderRadius: 4, height: 6, overflow: "hidden" }}>
                <div style={{
                  background: `linear-gradient(90deg, ${ACCENT}, ${GREEN})`,
                  height: "100%",
                  width: `${tasksProgress}%`,
                  transition: "width 0.3s ease",
                }}></div>
              </div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 8 }}>
                {completedTasksCount} / {allTasksCount} daily tasks completed
              </div>
            </div>

            {/* Domain Filter */}
            <div style={{ marginBottom: 20 }}>
              <select 
                value={domainFilter} 
                onChange={e => { setDomainFilter(e.target.value); setSelectedDay(null); }}
                style={{
                  background: CARD,
                  color: TEXT,
                  border: `1px solid ${BORDER}`,
                  padding: "8px 12px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                {domains.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
            </div>

            {domainFilter === "All" ? (
              <>
                {/* Week selector */}
                <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                  {weeks.map((week, idx) => (
                    <button key={idx} onClick={() => { setSelectedWeek(idx); setSelectedDay(null); }} style={{
                      background: selectedWeek === idx ? week.color : CARD,
                      border: `1px solid ${selectedWeek === idx ? week.color : BORDER}`,
                      color: selectedWeek === idx ? "#000" : MUTED,
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "inherit",
                    }}>W{week.week}</button>
                  ))}
                </div>

                {/* Week header */}
                <div style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${currentWeekData.color}`,
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 20,
                }}>
                  <div style={{ color: currentWeekData.color, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
                    WEEK {currentWeekData.week}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>{currentWeekData.label}</div>
                  <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{currentWeekData.theme}</div>
                </div>

                {/* Day grid */}
                {!currentDayData && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 20 }}>
                    {currentWeekData.days.map(day => (
                      <div key={day.day} onClick={() => setSelectedDay(day.day)} style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: 16,
                        cursor: "pointer",
                        transition: "border-color 0.2s, transform 0.1s",
                      }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = currentWeekData.color}
                        onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
                      >
                        <div style={{ fontSize: 11, color: currentWeekData.color, fontWeight: 700 }}>DAY {day.day}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, marginBottom: 8 }}>{day.title}</div>
                        <div style={{ fontSize: 11, color: MUTED, marginBottom: 10 }}>
                          {day.tasks.length} tasks
                        </div>
                        <div style={{
                          background: "#1a1a2e",
                          borderRadius: 4,
                          padding: "8px 10px",
                          fontSize: 11,
                          color: GREEN,
                          lineHeight: 1.4,
                        }}>
                          ✓ {day.outcome}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ margin: "0 0 12px 0", color: ACCENT }}>Tracking: {domains.find(d => d.id === domainFilter)?.label}</h3>
                {weeks.flatMap(w => w.days).flatMap(d => 
                  d.tasks.filter(t => domains.find(dom => dom.id === domainFilter)?.match.some(m => t.task.includes(m) || d.title.includes(m)))
                  .map((t, i) => {
                    const originalTaskIndex = d.tasks.findIndex(orig => orig.task === t.task && orig.time === t.time);
                    const taskId = `d${d.day}-t${originalTaskIndex}`;
                    const isDone = !!completedTasks[taskId];
                    const isExpanded = expandedDayTask === taskId;
                    return (
                      <div key={`${d.day}-${i}`} style={{
                        background: isDone ? "#0d2e1a" : CARD,
                        border: `1px solid ${isDone ? GREEN + "60" : BORDER}`,
                        borderLeft: `4px solid ${isDone ? GREEN : (taskTypeColors[t.type] || ACCENT)}`,
                        borderRadius: 8,
                        padding: "14px 16px",
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }} onClick={() => setExpandedDayTask(isExpanded ? null : taskId)}>
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleTask(taskId); }}
                          style={{
                            width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 4,
                            border: `2px solid ${isDone ? GREEN : BORDER}`,
                            background: isDone ? GREEN : "transparent",
                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#000", fontSize: 11, fontWeight: 900
                          }}>
                          {isDone ? "✓" : ""}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 10, color: MUTED, marginBottom: 2 }}>{t.time}</div>
                          <div style={{ 
                            fontSize: 14, fontWeight: 700, lineHeight: 1.4,
                            color: isDone ? GREEN : TEXT,
                            textDecoration: isDone ? "line-through" : "none",
                            opacity: isDone ? 0.7 : 1 
                          }}>{t.task}</div>
                          
                          {isExpanded && (
                            <div style={{ marginTop: 12, padding: "10px", background: "#1a1a2e", borderRadius: 6, border: `1px solid ${BORDER}` }}>
                               {t.desc && (
                                <div style={{ fontSize: 11, color: TEXT, lineHeight: 1.5, marginBottom: 10 }}>
                                  <div style={{ fontWeight: 800, color: ACCENT, marginBottom: 4 }}>💡 TASK DETAILS:</div>
                                  {t.desc.split(' | ').map((part, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                                      <span style={{ color: MUTED }}>•</span>
                                      <span>{part.replace('Goal: ', '')}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {(t.link || t.dataset || t.info) && (
                                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                  {t.link && (
                                    <a 
                                      href={t.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: ACCENT + "20", color: ACCENT, padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      {t.type === "ibm" || t.type === "math" || t.type === "watch" ? "WATCH ↗" : "PRACTICE ↗"}
                                    </a>
                                  )}
                                  {t.dataset && (
                                    <a 
                                      href={t.dataset} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: "#FFD43B20", color: "#FFD43B", padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      DATASET ↗
                                    </a>
                                  )}
                                  {t.info && (
                                    <a 
                                      href={t.info} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: "#4dabf720", color: "#4dabf7", padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      INFO ↗
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div style={{
                          background: `${taskTypeColors[t.type] || MUTED}20`,
                          color: taskTypeColors[t.type] || MUTED,
                          padding: "2px 8px",
                          borderRadius: 4,
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}>{t.type}</div>
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Day detail */}
            {currentDayData && (
              <div>
                <button onClick={() => setSelectedDay(null)} style={{
                  background: "none",
                  border: `1px solid ${BORDER}`,
                  color: MUTED,
                  padding: "6px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "inherit",
                  marginBottom: 16,
                }}>← Back to week</button>

                <div style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${currentWeekData.color}`,
                  borderRadius: 8,
                  padding: "20px",
                  marginBottom: 16,
                }}>
                  <div style={{ fontSize: 11, color: currentWeekData.color, fontWeight: 700 }}>DAY {currentDayData.day}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, margin: "4px 0 8px" }}>{currentDayData.title}</div>
                  <div style={{
                    background: "#0d2e1a",
                    border: `1px solid ${GREEN}40`,
                    borderRadius: 6,
                    padding: "10px 14px",
                    fontSize: 12,
                    color: GREEN,
                  }}>
                    🎯 End Goal: {currentDayData.outcome}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {currentDayData.tasks.filter(t => 
                    domainFilter === "All" || domains.find(dom => dom.id === domainFilter)?.match.some(m => t.task.includes(m) || currentDayData.title.includes(m))
                  ).map((task, i) => {
                    const taskId = `d${currentDayData.day}-t${i}`;
                    const isDone = !!completedTasks[taskId];
                    const isExpanded = expandedDayTask === taskId;
                    return (
                      <div key={i} style={{
                        background: isDone ? "#0d2e1a" : CARD,
                        border: `1px solid ${isDone ? GREEN + "60" : BORDER}`,
                        borderLeft: `4px solid ${isDone ? GREEN : (taskTypeColors[task.type] || ACCENT)}`,
                        borderRadius: 8,
                        padding: "14px 16px",
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }} onClick={() => setExpandedDayTask(isExpanded ? null : taskId)}>
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleTask(taskId); }}
                          style={{
                            width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 4,
                            border: `2px solid ${isDone ? GREEN : BORDER}`,
                            background: isDone ? GREEN : "transparent",
                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#000", fontSize: 11, fontWeight: 900
                          }}>
                          {isDone ? "✓" : ""}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 10, color: MUTED, marginBottom: 2 }}>{task.time}</div>
                          <div style={{ 
                            fontSize: 14, fontWeight: 700, lineHeight: 1.4,
                            color: isDone ? GREEN : TEXT,
                            textDecoration: isDone ? "line-through" : "none",
                            opacity: isDone ? 0.7 : 1
                          }}>{task.task}</div>
                          
                          {isExpanded && (
                            <div style={{ marginTop: 12, padding: "10px", background: "#1a1a2e", borderRadius: 6, border: `1px solid ${BORDER}` }}>
                               {task.desc && (
                                <div style={{ fontSize: 11, color: TEXT, lineHeight: 1.5, marginBottom: 10 }}>
                                  <div style={{ fontWeight: 800, color: ACCENT, marginBottom: 4 }}>💡 TASK DETAILS:</div>
                                  {task.desc.split(' | ').map((part, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                                      <span style={{ color: MUTED }}>•</span>
                                      <span>{part.replace('Goal: ', '')}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {(task.link || task.dataset || task.info) && (
                                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                  {task.link && (
                                    <a 
                                      href={task.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: ACCENT + "20", color: ACCENT, padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      {task.type === "ibm" || task.type === "math" || task.type === "watch" ? "WATCH ↗" : "PRACTICE ↗"}
                                    </a>
                                  )}
                                  {task.dataset && (
                                    <a 
                                      href={task.dataset} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: "#FFD43B20", color: "#FFD43B", padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      DATASET ↗
                                    </a>
                                  )}
                                  {task.info && (
                                    <a 
                                      href={task.info} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      style={{ 
                                        fontSize: 10, background: "#4dabf720", color: "#4dabf7", padding: "4px 10px", borderRadius: 4, textDecoration: "none", fontWeight: 800
                                      }}>
                                      INFO ↗
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div style={{
                          background: `${taskTypeColors[task.type] || MUTED}20`,
                          color: taskTypeColors[task.type] || MUTED,
                          padding: "2px 8px",
                          borderRadius: 4,
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}>{task.type}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === "skills" && (
          <div>
            <p style={{ color: MUTED, fontSize: 12, marginBottom: 24, lineHeight: 1.7 }}>
              You're not learning skills in isolation — every tool is applied directly to one of the 3 projects.
              Theory minimum. Application maximum. Click a role to expand.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {skillsRoadmap.map((role, idx) => (
                <div key={role.role} style={{
                  background: CARD,
                  border: `1px solid ${expandedSkill === idx ? role.color : BORDER}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}>
                  <div onClick={() => setExpandedSkill(expandedSkill === idx ? null : idx)} style={{
                    padding: "16px 20px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 20 }}>{role.icon}</span>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 800 }}>{role.role}</div>
                        <div style={{ fontSize: 11, color: role.color, marginTop: 2 }}>{role.tools.length} key tools</div>
                      </div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18 }}>{expandedSkill === idx ? "−" : "+"}</span>
                  </div>
                  {expandedSkill === idx && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "16px 20px" }}>
                      {role.tools.map(tool => (
                        <div key={tool.name} style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          padding: "10px 0",
                          borderBottom: `1px solid ${BORDER}`,
                        }}>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700 }}>{tool.name}</div>
                            <div style={{ fontSize: 11, color: MUTED, marginTop: 3 }}>{tool.desc}</div>
                          </div>
                          <div style={{ textAlign: "right", minWidth: 120 }}>
                            <div style={{
                              background: `${role.color}20`,
                              color: role.color,
                              padding: "2px 8px",
                              borderRadius: 4,
                              fontSize: 10,
                              fontWeight: 700,
                              marginBottom: 4,
                            }}>{tool.level}</div>
                            <div style={{ fontSize: 10, color: MUTED }}>Weeks {tool.weeks}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Learning resources */}
            <h2 style={{ fontSize: 13, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginTop: 32, marginBottom: 16 }}>
              Go-To Learning Resources (Free)
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
              {[
                { skill: "SQL", resource: "Mode Analytics SQL Tutorial + HackerRank SQL" },
                { skill: "Python", resource: "Kaggle Learn Python + pandas (3 days each)" },
                { skill: "Product Thinking", resource: "Lenny's Newsletter + Reforge blog (free articles)" },
                { skill: "Business Analysis", resource: "PVR/Hotstar annual reports + Forbes India" },
                { skill: "Tableau", resource: "Tableau Public official training videos" },
                { skill: "Power BI", resource: "Microsoft Learn Power BI (free, 6 hrs)" },
                { skill: "Case Prep", resource: "Analyst prep: Exponent.io (free articles)" },
                { skill: "Dashboards", resource: "Streamlit docs (30 min to first app)" },
              ].map(r => (
                <div key={r.skill} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: 12,
                }}>
                  <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700 }}>{r.skill}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.5 }}>{r.resource}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHECKLIST TAB */}
        {activeTab === "checklist" && (
          <div>
            {/* Progress */}
            <div style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Day 60 Completion Progress</span>
                <span style={{ color: ACCENT, fontWeight: 800, fontSize: 16 }}>{progress}%</span>
              </div>
              <div style={{ background: "#1a1a2e", borderRadius: 4, height: 8, overflow: "hidden" }}>
                <div style={{
                  background: `linear-gradient(90deg, ${ACCENT}, ${GREEN})`,
                  height: "100%",
                  width: `${progress}%`,
                  borderRadius: 4,
                  transition: "width 0.3s",
                }}></div>
              </div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 8 }}>
                {completedCount} / {checklist.length} deliverables completed
              </div>
            </div>

            {checklistCategories.map(category => (
              <div key={category} style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 11, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginBottom: 10 }}>
                  {category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {checklist.map((item, i) => item.category === category && (
                    <div key={i} onClick={() => toggleCheck(i)} style={{
                      background: item.done ? "#0d2e1a" : CARD,
                      border: `1px solid ${item.done ? GREEN + "60" : BORDER}`,
                      borderRadius: 6,
                      padding: "12px 16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      transition: "all 0.2s",
                    }}>
                      <div style={{
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        border: `2px solid ${item.done ? GREEN : BORDER}`,
                        background: item.done ? GREEN : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: 11,
                        color: "#000",
                        fontWeight: 900,
                      }}>{item.done ? "✓" : ""}</div>
                      <span style={{
                        fontSize: 13,
                        color: item.done ? GREEN : TEXT,
                        textDecoration: item.done ? "line-through" : "none",
                        opacity: item.done ? 0.7 : 1,
                      }}>{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {progress === 100 && (
              <div style={{
                background: "linear-gradient(135deg, #0d2e1a, #1a3a0a)",
                border: `1px solid ${GREEN}`,
                borderRadius: 8,
                padding: 24,
                textAlign: "center",
                marginTop: 24,
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
                <div style={{ color: GREEN, fontSize: 16, fontWeight: 800 }}>Day 60 Complete!</div>
                <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>You're application-ready. Go get hired.</div>
              </div>
            )}
          </div>
        )}
        
        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.7, marginBottom: 8 }}>
              Each project is delivered as a <strong style={{color: ACCENT}}>live website on Vercel</strong> — not just a PPT.
              All 3 link back to your portfolio. Click any layer to see the full execution plan.
            </p>
            {projectsData.map(proj => (
              <ProjectCard key={proj.id} proj={proj} />
            ))}
          </div>
        )}

                {/* PLATFORMS TAB */}
        {activeTab === "platforms" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${BLUE}`, padding: 24, borderRadius: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>1. Personal Portfolio Website</h2>
              <p style={{ color: BLUE, fontSize: 12, margin: "0 0 16px" }}>Tech · Analytics · Strategy — your central hub</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>TECH STACK</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {["Next.js / React", "Tailwind CSS", "Vercel Hosting", "Chart.js / Recharts", "Framer Motion"].map(t => (
                      <span key={t} style={{ background: "#1a1a2e", border: `1px solid ${BORDER}`, padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>PAGES</div>
                  <ul style={{ paddingLeft: 18, fontSize: 12, lineHeight: 1.8, color: TEXT }}>
                    <li><strong>Hero:</strong> "Data Analyst & Product Thinker — turning data into decisions"</li>
                    <li><strong>Projects:</strong> 3 live website links (IPL, OTT, E-Commerce) with STAR summaries</li>
                    <li><strong>Skills:</strong> SQL · Python · Power BI · Tableau · Excel — with proof links</li>
                    <li><strong>Creative:</strong> Sahitya Rachanalu as "Founder" project</li>
                    <li><strong>Resume:</strong> 2 versions — Data Analyst + Product Analyst focus</li>
                    <li><strong>Blog:</strong> Latest 3 posts auto-pulled from Medium/Substack</li>
                  </ul>
                </div>
                <div style={{ background: "#1a1a2e", padding: 16, borderRadius: 8 }}>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>ARCHITECTURE PLAN</div>
                  {[
                    { label: "3 Project Sub-Sites", desc: "Each project is a separate Vercel site — ipl.yourdomain.com etc." },
                    { label: "Portfolio Hub", desc: "Central site with cards linking to each project site + Sahitya" },
                    { label: "Analytics Tracking", desc: "Vercel Analytics to track which project recruiters visit most" },
                    { label: "Dark Theme + Glassmorphism", desc: "Cinematic scroll-reveal, micro-animations, premium feel" },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: MUTED }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, padding: 24, borderRadius: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>2. Sahitya Rachanalu</h2>
              <p style={{ color: PURPLE, fontSize: 12, margin: "0 0 16px" }}>Creative Platform — Telugu literature, cinema, music & culture</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  {[
                    { icon: "📖", label: "Novels / Audiobooks", desc: "Chapter-by-chapter release. Singers dubbed. Distraction-free reading UI. Purchasable links." },
                    { icon: "🎵", label: "Lyrics Engine", desc: "Spotify-style layout. Original lyrics + meaning sidebar. Other singers data dashboard." },
                    { icon: "🎬", label: "Cinepedia", desc: "Wikipedia for films — new format. Thematic analysis, cultural impact, director deep-dives." },
                    { icon: "💬", label: "Fictionary", desc: "Famous dialogues and expressions — card-flip UI. Why they went viral breakdown." },
                    { icon: "😄", label: "Meme / GIF Keyboard", desc: "Custom cultural emojis and expressions — shareable, unique to Telugu culture." },
                    { icon: "✍️", label: "Writeups", desc: "Articles, script analyses, anime-format series, blogs. All SEO-optimized." },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700 }}>{item.label}</div>
                        <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#2e1a2e", padding: 16, borderRadius: 8 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>INTEGRATION PLAN</div>
                  {[
                    { label: "Cross-Link", desc: "Portfolio → Sahitya under 'Founder @ Creative Platform'" },
                    { label: "Sub-domain", desc: "sahityarachanalu.com — separate Vercel project" },
                    { label: "Content Engine", desc: "Write 1 article/week — pipeline into LinkedIn + Medium" },
                    { label: "Cinepedia Launch", desc: "3 film deep-dives first — Telugu (2) + Hindi (1)" },
                    { label: "Tech Stack", desc: "Next.js + MDX for content, JSON for film DB, Tailwind" },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: MUTED }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

                {/* CREATIVE TAB */}
        {activeTab === "creative" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Creative Content Hub
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>WRITING ROLES TO TARGET</div>
                {[
                  { role: "Content Writer", desc: "Blogs, posts, LinkedIn articles" },
                  { role: "Creative Writer", desc: "Stories, scripts, reel concepts" },
                  { role: "Copywriter", desc: "Captions, ads, punchlines, marketing lines" },
                  { role: "Script Writer", desc: "YouTube, reels, short films, ads" },
                  { role: "Screenplay / Story Writer", desc: "Films, web series (long term)" },
                  { role: "Lyricist", desc: "Songs, indie music, reels" },
                  { role: "Sports Content Writer", desc: "Cricket pages, apps, sites" },
                  { role: "Film Critic / Reviewer", desc: "YouTube, blogs, pages, analytics overlay" },
                  { role: "Social Media Strategist", desc: "Ideas + captions + content calendars" },
                ].map(r => (
                  <div key={r.role} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>{r.role}</span>
                    <span style={{ fontSize: 11, color: MUTED, maxWidth: 160, textAlign: "right" }}>{r.desc}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, marginBottom: 12 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>10 CONTENT TOPICS (500–800 words each)</div>
                  {[
                    "Script/Screenplay Analysis — 'Why the interval bang in [Film] works'",
                    "Character Psychology — 'Why audiences root for grey characters (Pushpa)'",
                    "Film Economics — 'Pan-India Blockbusters: Marketing genius or cultural shift?'",
                    "E-Commerce Psychology — 'The anatomy of cart abandonment'",
                    "Product Teardowns — 'Why BookMyShow UI is built for FOMO'",
                    "Creator Economy — 'How meme pages became movie promoters'",
                    "Visual Storytelling — 'Color theory in cinema'",
                    "Sports Analytics — 'IPL as a product: 4 hours of engineered engagement'",
                    "Music + Tech — 'How Spotify's algorithm shapes what we hear'",
                    "Personal Journey — 'Why I built Sahitya Rachanalu'",
                  ].map((t, i) => (
                    <div key={i} style={{ fontSize: 11, color: MUTED, padding: "4px 0", borderBottom: `1px solid ${BORDER}20` }}>
                      {i + 1}. {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0A0A0F)", border: `1px solid ${BLUE}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: BLUE }}>🎬 Creative Portfolio Presentation Formats</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { icon: "🎬", label: "Video Opening", desc: "Cinematic template-style portfolio intro with motion design" },
                  { icon: "📚", label: "Books / Audiobooks", desc: "Film-script format, chapter releases, purchasable links" },
                  { icon: "🎨", label: "Visual Storyboards", desc: "AI-generated + manual editing for concept visualization" },
                  { icon: "🎵", label: "Music Dashboard", desc: "Spotify-style layout — lyrics + singers + streaming data" },
                  { icon: "🏏", label: "IPL Content Hub", desc: "Dedicated section: job roles, match reports, insights" },
                  { icon: "🎭", label: "Movies Watch List", desc: "Curated cinematic list with thematic notes and ratings" },
                ].map(item => (
                  <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div style={{ fontSize: 12, fontWeight: 700, marginTop: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: ${BORDER}; border-radius: 2px; }
      `}</style>
    </div>
  );
}
