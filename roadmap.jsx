const { useState, Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('React error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          color: '#EF4444',
          background: '#0A0A0F',
          padding: '40px',
          fontFamily: 'monospace',
          lineHeight: 1.6,
          minHeight: '100vh',
        }}>
          <h2 style={{ marginTop: 0 }}>Something went wrong:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}


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
    "label": "Phase 1: Skill Sprints (7 Days - 7 Skills)",
    "theme": "Skill Mastery",
    "color": PURPLE,
    "days": [
      {
        "day": 1, "title": "Day 1: Excel Mastery",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Excel for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/excel-for-data-analytics", "desc": "Mastering Pivot Tables, XLOOKUP, and Data Cleaning." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Number System Basics + Mock 1", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Clean a messy 10k row dataset in Excel", "type": "project" }
        ],
        "outcome": "Mastered Excel automation."
      },
      {
        "day": 2, "title": "Day 2: SQL Foundations",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: SQL for Data Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/sql-for-data-analytics", "desc": "Joins, Aggregations, and CTEs." },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Divisibility & Remainder + Mock 2", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Solve 50 SQL problems on AnalystBuilder", "type": "project" }
        ],
        "outcome": "Mastered complex SQL queries."
      },
      {
        "day": 3, "title": "Day 3: Power BI",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Power BI Mastery", "type": "analytics", "link": "https://www.analystbuilder.com/courses/power-bi-for-data-analytics" },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: LCM & HCF Applications + Mock 3", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Build a Sales Dashboard in Power BI", "type": "project" }
        ],
        "outcome": "Built interactive Power BI dashboards."
      },
      {
        "day": 4, "title": "Day 4: Tableau",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Tableau for Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/tableau-for-data-analytics" },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Unit Digits & Powers + Mock 4", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Re-create Sales Dashboard in Tableau", "type": "project" }
        ],
        "outcome": "Mastered visual storytelling."
      },
      {
        "day": 5, "title": "Day 5: Python",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Python for Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/python-for-data-analytics" },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Percentages Basics + Mock 5", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/percentages/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Clean and Analyze a dataset in Jupyter", "type": "project" }
        ],
        "outcome": "Able to perform EDA in Python."
      },
      {
        "day": 6, "title": "Day 6: Math & Statistics",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Math/Stats Foundations", "type": "analytics", "link": "https://www.analystbuilder.com/courses/math-and-statistics-for-data-analytics" },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Profit & Loss (Part 1) + Mock 6", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/profit-and-loss/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Perform an A/B Test in Python", "type": "project" }
        ],
        "outcome": "Understood the math behind data."
      },
      {
        "day": 7, "title": "Day 7: Gen AI & Tools",
        "tasks": [
          { "time": "6\u20139am", "task": "📊 AnalystBuilder: Gen AI for Analytics", "type": "analytics", "link": "https://www.analystbuilder.com/courses/generative-ai-for-data-analytics" },
          { "time": "10\u201311am", "task": "\ud83e\udde0 Aptitude: Quant: Profit & Loss (Advanced) + Mock 7", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/profit-and-loss/basic?subject=quantitative-aptitude&sidebar=open" },
          { "time": "1\u20134pm", "task": "\ud83c\udfd7\ufe0f Practice: Use AI to automate data tasks", "type": "project" }
        ],
        "outcome": "10x productivity with AI tools."
      }
    ]
  },
  {
    "week": 2,
    "label": "Phase 2: IPL Analytics Engine (Role-Based Deep Dive)",
    "theme": "Execution",
    "color": BLUE,
    "days": [
      { "day": 8, "title": "Day 8: IPL Sports & Fan Psychology", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Simple Interest + Mock 8", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/interest/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layers 1 & 2: Sports + Behavioral Intelligence", "type": "project", "desc": "Build Clutch Index leaderboard | Analyze Star Dependency (Dhoni/Kohli effect) | Map emotional spikes vs match events.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Mastered clutch metrics & star-driven fan engagement." },
      { "day": 9, "title": "Day 9: IPL Product & Gamification", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Compound Interest + Mock 9", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/interest/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layer 3: Product Intelligence (Dopamine Loops)", "type": "project", "desc": "Map user journey Match\u2192Fantasy\u2192Reels | Analyze prediction psychology mechanics | Retention curve per match type.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Built retention engineering & dopamine loop models." },
      { "day": 10, "title": "Day 10: IPL Second-Screen & Attention", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Ratio & Proportion + Mock 10", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/ratio-and-proportion/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layers 4 & 5: Platform + Attention Economy", "type": "project", "desc": "Analyze parallel app behavior (Fantasy/Reddit) | Map ad timing vs peak intensity | Hype Index (Search + Social Mentions).", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Mapped Hype Index vs Peak Attention peaks." },
      { "day": 11, "title": "Day 11: IPL Broadcast & Business", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Mixtures & Alligations + Mock 11", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/alligations-and-mixtures/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layers 6 & 7: Media + Business Intelligence", "type": "project", "desc": "Analyze commentator hype vs retention | Media rights (Digital vs TV) splits | Franchise valuation growth 2010\u21922024.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Completed media storytelling & revenue engine analysis." },
      { "day": 12, "title": "Day 12: IPL Brand Economy & Strategy", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Averages + Mock 12", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/averages/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layers 8 & 9: Brand + Economic Strategy", "type": "project", "desc": "Player Brand Pull Index (Social vs Performance) | Venue economics (Tourism/F&B impact) | Movie vs IPL cannibalization.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Mapped player brand power & macro-economic footprint." },
      { "day": 13, "title": "Day 13: IPL AI & Dashboard Build", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Partnership & Share + Mock 13", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/partnership/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL Layer 10: AI Intelligence & Dashboard", "type": "project", "desc": "Build match hype prediction engine | Highlight virality forecasting | Integrated Multi-Role Dashboard with 10 detailed layers.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "AI-powered 10-layer predictive dashboard live." },
      { "day": 14, "title": "Day 14: IPL Intelligence Ecosystem Report", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Problems on Ages + Mock 14", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/problems-on-ages/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: IPL 'Attention Economy' Strategic Report", "type": "project", "desc": "Compile 15-page McKinsey-style report on the IPL Intelligence Ecosystem | Focus on causal chains from event to revenue.", "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-time-dataset" }], "outcome": "Project 1 finished with elite 10-layer ecosystem report." }
    ]
  },
  {
    "week": 3,
    "label": "Phase 3: OTT vs Theatre Intelligence (Role-Based Deep Dive)",
    "theme": "Execution",
    "color": PURPLE,
    "days": [
      { "day": 15, "title": "Day 15: OTT Layer 1: Data Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Time & Work (Basics) + Mock 15", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/time-and-work/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Layer 1: Data Analyst (Genre & Revenue)", "type": "project", "desc": "Analyze Genre vs Revenue (Action vs Romance) | regional vs national content rise | Box Office trajectory vs IMDb ratings.", "dataset": "https://www.kaggle.com/datasets/shivamb/netflix-shows" }] },
      { "day": 16, "title": "Day 16: OTT Layer 2: Product Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Time & Work (Advanced) + Mock 16", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/time-and-work/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Layer 2: Product Analyst (Sentiment & Booking)", "type": "project", "desc": "Map BookMyShow funnel: Browse\u2192Select\u2192Book | Sentiment analysis (VADER) per film | Price sensitivity Urban vs Rural.", "info": "https://www.bookmyshow.com/" }] },
      { "day": 17, "title": "Day 17: OTT Layer 3: Business Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Pipes & Cisterns + Mock 17", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/time-and-work/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Layer 3: Business Analyst (Multiplex vs Single)", "type": "project", "desc": "Occupancy % Multiplex vs Single Screen | F&B margin (40-50%) impact | Premium vs budget seat price sensitivity.", "info": "https://www.pvrcinemas.com/investors" }] },
      { "day": 18, "title": "Day 18: OTT Layer 4: Growth Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Time, Speed & Distance + Mock 18", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/speed-time-and-distance/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Layer 4: Growth Analyst (Marketing ROI)", "type": "project", "desc": "Trailer views vs Opening weekend correlation | Viral reel challenges impact | Meme marketing efficacy analysis.", "info": "https://www.youtube.com/c/NetflixIndia" }] },
      { "day": 19, "title": "Day 19: OTT Layer 5: Strategy Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Relative Speed & Trains + Mock 19", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/speed-time-and-distance/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Layer 5: Strategy Analyst (Lifecycle & COVID)", "type": "project", "desc": "Theatre-to-OTT window shrinkage (60\u21928 weeks) | Post-COVID hybrid release model | OTT subscriber growth curve 2019-2024.", "info": "https://www.pwc.in/industries/entertainment-and-media.html" }] },
      { "day": 20, "title": "Day 20: OTT Dashboard", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Boats & Streams + Mock 20", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/speed-time-and-distance/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Multi-Domain Tableau Storyboard", "type": "project", "desc": "Build Genre trends vs COVID timeline | Sentiment vs Revenue scatter plot | Interactive geographic occupancy map.", "link": "https://public.tableau.com/en-us/gallery" }] },
      { "day": 21, "title": "Day 21: OTT Final Case Study", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Circular Motion & Races + Mock 21", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/speed-time-and-distance/basic?subject=quantitative-aptitude&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: OTT Financial & Strategy Whitepaper", "type": "project", "desc": "Case study: 'Why theatres survive the OTT era' | LTV calculation for OTT subscribers | Risk vs Reward matrix.", "info": "https://www.variety.com/v/digital/" }] }
    ]
  },
  {
    "week": 4,
    "label": "Phase 4: E-Commerce + Ads System (Role-Based Deep Dive)",
    "theme": "Execution",
    "color": GREEN,
    "days": [
      { "day": 22, "title": "Day 22: E-com Layer 1: Data Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Number Series + Mock 22", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 1: Data Analyst (Seasonal Sales)", "type": "project", "desc": "Festival sales heatmap by category | GMV spike % vs normal weeks | Mobile vs Fashion performance delta.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 23, "title": "Day 23: E-com Layer 2: Business Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Alphabet Series & Analogies + Mock 23", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/analogies/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 2: Business Analyst (Pricing & Anchoring)", "type": "project", "desc": "Anchor pricing psychology (29,999 vs 50,000) | Fake vs Real discount detection | Price elasticity per segment.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 24, "title": "Day 24: E-com Layer 3: Growth Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Coding-Decoding + Mock 24", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/coding-decoding/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 3: Growth Analyst (Ads & Attribution)", "type": "project", "desc": "Instagram Reels vs Story ads conversion | CAC & ROAS analysis | Impressions\u2192Clicks\u2192Purchase funnel.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 25, "title": "Day 25: E-com Layer 4: Product Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Blood Relations + Mock 25", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/blood-relations/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 4: Product Analyst (Consumer Psych Funnel)", "type": "project", "desc": "Cart abandonment patterns (70%+) | Urgency/FOMO triggers impact | Subscription stickiness (Prime/Flipkart Plus).", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 26, "title": "Day 26: E-com Layer 5: Financial Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Direction Sense + Mock 26", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/direction-sense/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 5: Financial Analyst (Unit Economics & LTV)", "type": "project", "desc": "LTV / CAC ratio per customer segment | Subscription ARPU analysis | Repeat purchase rate vs Acquisition cost.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 27, "title": "Day 27: E-com Layer 6: Strategy Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Syllogisms (Basics) + Mock 27", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/syllogism/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 6: Strategy Analyst (Market Shifts)", "type": "project", "desc": "Quick Commerce rise (Blinkit/Instamart) | Time vs Price consumer decision shift | Kirana store footfall loss data.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { "day": 28, "title": "Day 28: E-com Layer 7: Business Analyst", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Syllogisms (Advanced) + Mock 28", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/syllogism/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: E-com Layer 7: Business Analyst (Conglomerates)", "type": "project", "desc": "Reliance vs Tata vs Adani ecosystem war | Logistics & Data control analysis | Strategy comparison matrix.", "dataset": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] }
    ]
  },
  {
    "week": 5,
    "label": "Phase 5: Band Premier League (BPL Ecosystem)",
    "theme": "Primary Data",
    "color": ACCENT,
    "days": [
      { "day": 29, "title": "Day 29: BPL Layer 1 & 2: Market & Demand", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Linear Seating Arrangement + Mock 29", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/seating-arrangement/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL Layer 1 (Market) & Layer 2 (Demand) Analysis", "type": "project", "desc": "Map Hyderabad venue density by area | Show frequency per venue type | Footfall segment (Student vs Prof).", "dataset": "https://www.google.com/maps/search/live+music+venues+hyderabad" }], "outcome": "Mapped Hyderabad venue density & traffic." },
      { "day": 30, "title": "Day 30: BPL Layer 3 & 4: Supply & Matchmaking", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Circular Seating Arrangement + Mock 30", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/seating-arrangement/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL Layer 3 (Bands) & Layer 4 (Optimization) Build", "type": "project", "desc": "Active bands per genre survey | Pricing vs Gig frequency | Build slot optimization & scheduling model.", "info": "https://www.insider.in/hyderabad" }], "outcome": "Built scheduling & slot optimization model." },
      { "day": 31, "title": "Day 31: BPL Layer 5 & 6: Revenue & Funnel", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Complex Puzzles (Matrix) + Mock 31", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/puzzles/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL Layer 5 (Revenue) & Layer 6 (Booking Funnel)", "type": "project", "desc": "Break-even per show analysis | Pricing vs capacity strategy | Aware\u2192Book\u2192Attend funnel drop-offs.", "info": "https://www.zomato.com/hyderabad/live-music" }], "outcome": "Completed pricing strategy & drop-off analysis." },
      { "day": 32, "title": "Day 32: BPL Layer 7 & 8: Growth & Ecosystem", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Clocks (Angles & Mirrors) + Mock 32", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/clocks/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL Layer 7 (Growth) & Layer 8 (Macro Impact)", "type": "project", "desc": "Social media engagement vs attendance | Influencer reach-to-booking ratio | Venue revenue uplift analysis.", "info": "https://www.f6s.com/companies/music/india/hyderabad" }], "outcome": "Economic impact model & growth curves complete." },
      { "day": 33, "title": "Day 33: BPL Dashboard Build", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Calendars (Odd Days) + Mock 33", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/calendars/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL Interactive Matchmaking Dashboard", "type": "project", "desc": "Live portal for venue/band scheduling | Interactive map of hotspots | Real-time matchmaking scoring.", "link": "https://www.glideapps.com/" }], "outcome": "Live analytics portal for venue/bands." },
      { "day": 34, "title": "Day 34: BPL Economic Report", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Cubes & Dice + Mock 34", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/cubes-and-dice/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Project: BPL 15-page Primary Data Deep-Dive", "type": "project", "desc": "Compile primary survey data | 'The Live Music Economy of Hyderabad' report | Recommendation for venue owners.", "info": "https://www.statista.com/outlook/dmo/eservices/event-tickets/india" }], "outcome": "Finished professional industry report." },
      { "day": 35, "title": "Day 35: BPL Launch & Pitch", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Data Sufficiency + Mock 35", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/data-sufficiency/basic?subject=logical-reasoning&sidebar=open" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Strategy: BPL LinkedIn Viral Breakdown", "type": "project", "desc": "LinkedIn visual storytelling | Primary data insight carousel | Outreach to venue partners.", "info": "https://www.linkedin.com/pulse/topics/analytics-5/" }], "outcome": "Primary data project live & shared." }
    ]
  },
  {
    "week": 6,
    "label": "Phase 6: Personal Portfolio Launch (Branding)",
    "theme": "Branding",
    "color": BLUE,
    "days": [
      { "day": 36, "title": "Day 36: Portfolio UI", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Sentence Correction + Mock 36", "type": "aptitude", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/passage-sentence-rearrangement/basic?subject=verbal-ability&sidebar=open" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: Hero & Architecture Build", "type": "project" }] },
      { "day": 37, "title": "Day 37: Portfolio Projects", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Error Spotting + Mock 37", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: 4-Project Hub Integration", "type": "project" }] },
      { "day": 38, "title": "Day 38: Portfolio Proof", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Reading Comprehension (Basics) + Mock 38", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: Skill Viz & Proof Build", "type": "project" }] },
      { "day": 39, "title": "Day 39: Portfolio Content", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Reading Comprehension (Advanced) + Mock 39", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: Sahitya Hub Integration", "type": "project" }] },
      { "day": 40, "title": "Day 40: Portfolio Resume", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Para Jumbles + Mock 40", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: Resume Downloads Build", "type": "project" }] },
      { "day": 41, "title": "Day 41: Portfolio SEO", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Synonyms & Antonyms + Mock 41", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Portfolio: Analytics & SEO Setup", "type": "project" }] },
      { "day": 42, "title": "Day 42: Portfolio Launch", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Verbal: Idioms & Cloze Test + Mock 42", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Branding: LinkedIn Grand Reveal", "type": "project" }] }
    ]
  },
  {
    "week": 7,
    "label": "Phase 7: Sahitya Rachanalu Build (Creative/Tech)",
    "theme": "Creative",
    "color": PURPLE,
    "days": [
      { "day": 43, "title": "Day 43: Sahitya Reading", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Statement & Conclusion + Mock 43", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Sahitya: Reading Module Build", "type": "project" }] },
      { "day": 44, "title": "Day 44: Sahitya Lyrics", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Cause & Effect + Mock 44", "type": "aptitude" }, { "time": "1\u20136pm", "task": "\ud83c\udfd7\ufe0f Sahitya: Lyrics Split-View Build", "type": "project" }] },
      { "day": 45, "title": "Day 45: Sahitya Cinepedia", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Input-Output + Mock 45", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Sahitya: Film Wiki UI Build", "type": "project" }] },
      { "day": 46, "title": "Day 46: Sahitya Fictionary", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Venn Diagrams + Mock 46", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Sahitya: Dialogue Card Build", "type": "project" }] },
      { "day": 47, "title": "Day 47: Sahitya Media", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Binary Logic + Mock 47", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Sahitya: Meme/GIF Keyboard Build", "type": "project" }] },
      { "day": 48, "title": "Day 48: Sahitya Content", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Decision Making + Mock 48", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Sahitya: MDX Article Feed Build", "type": "project" }] },
      { "day": 49, "title": "Day 49: Sahitya Launch", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: LR: Critical Reasoning + Mock 49", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Branding: Founder Reveal Day", "type": "project" }] }
    ]
  },
  {
    "week": 8,
    "label": "Phase 8: Polishing, Strategy & The Launch",
    "theme": "Final Sprints",
    "color": GREEN,
    "days": [
      { "day": 50, "title": "Day 50: Advanced Upgrades", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: DI: Tables & Formatting + Mock 50", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Upgrade: IPL/OTT/E-com ML & NLP Predictive Build", "type": "project" }] },
      { "day": 51, "title": "Day 51: Advanced Pipelines", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: DI: Bar Graphs & Histograms + Mock 51", "type": "aptitude" }, { "time": "1\u20136pm", "task": "📊 AnalystBuilder: Snowflake/DBT Advanced Build", "type": "analytics" }] },
      { "day": 52, "title": "Day 52: Showcase & Target Research", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: DI: Pie Charts & Degree Conversions + Mock 52", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Strategy: Journey Showcase & Company Reports Build", "type": "project" }] },
      { "day": 53, "title": "Day 53: Technical Mock Interviews", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: DI: Line Graphs & Mixed Charts + Mock 53", "type": "aptitude" }, { "time": "1\u20136pm", "task": "📊 Practice: SQL & Technical Mock Sprints", "type": "analytics" }] },
      { "day": 54, "title": "Day 54: Business Case Sprints", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Permutation & Combination + Mock 54", "type": "aptitude" }, { "time": "1\u20136pm", "task": "📊 Practice: Case Interview & Strategy Sprints", "type": "analytics" }] },
      { "day": 55, "title": "Day 55: High-Intent Application Blitz", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Probability (Coins & Cards) + Mock 55", "type": "aptitude" }, { "time": "9am\u20136pm", "task": "🏗️ Strategy: 20+ High-Intent Applications", "type": "project" }] },
      { "day": 56, "title": "Day 56: Maintenance & QA", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Geometry Basics + Mock 56", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Polish: Full System Bug fixing & QA", "type": "project" }] },
      { "day": 57, "title": "Day 57: Referral & Networking", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Mensuration 2D & 3D + Mock 57", "type": "aptitude" }, { "time": "9am\u20136pm", "task": "🏗️ Strategy: Referral Outreach Blitz", "type": "project" }] },
      { "day": 58, "title": "Day 58: Catch-up & Final Polish", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Quadratic Eq & Logarithms + Mock 58", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Catch-up on backlog & Resume Metric Polish", "type": "project" }] },
      { "day": 59, "title": "Day 59: Final Deployment", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: Quant: Progressions (AP/GP/HP) + Mock 59", "type": "aptitude" }, { "time": "1\u20136pm", "task": "🏗️ Final Vercel & Production Sync", "type": "project" }] },
      { "day": 60, "title": "Day 60: Hired Mindset Day", "tasks": [{ "time": "9am\u201310am", "task": "\ud83e\udde0 Aptitude: DI: Caselets & Final Review + Mock 60", "type": "aptitude" }, { "time": "9am\u201312pm", "task": "🎉 Goal: Reflection & Career Launch", "type": "project" }] }
    ]
  }
];
const finalChecklist = [
  { item: "IPL Analytics Project (10 layers)", category: "Projects", done: false },
  { item: "OTT vs Theatre Project (9 layers)", category: "Projects", done: false },
  { item: "E-Commerce + Ads Project (9 layers)", category: "Projects", done: false },
  { item: "BPL Ecosystem Project (8 layers)", category: "Projects", done: false },
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
  analytics: BLUE,
  project: GREEN,
  aptitude: "#F97316",
  sql: PURPLE,
  portfolio: BLUE,
  creative: PURPLE,
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
    metaInsight: '"IPL is not a cricket tournament. It is an interconnected attention economy."',
    layers: [
      {
        num: "1", icon: "📊", title: "Sports Intelligence Layer",
        role: "Sports Analyst",
        analyticsType: "Descriptive & Exploratory",
        color: "#4A9EFF",
        what: "On-field decision intelligence & clutch performance",
        analyze: ["Player impact vs salary (ROI per crore)", "Pressure performance — death overs, chase vs defend", "Venue bias — spin vs pace dominance", "Toss vs win probability correlation"],
        metrics: ["Clutch Index (Pressure Runs + Death Impact)", "ROI = Runs+Wickets / Salary", "Strike Rate under pressure", "Win % by toss decision"],
        outputs: ["Clutch Index Leaderboard", "Heatmaps — player scoring zones", "'The Undervalued XI' report", "Win probability graph — over by over"],
      },
      {
        num: "2", icon: "🎭", title: "Fan Psychology Layer",
        role: "Behavioral Analyst",
        analyticsType: "Psychographic & Sentiment",
        color: "#EC4899",
        what: "Analyze emotional spikes and hero dependency",
        analyze: ["Hero dependency — Dhoni/Kohli engagement pull", "Rivalry intensity (MI vs CSK) sentiment spikes", "Nostalgia effect — veteran player retention", "Crowd energy impact on home advantage"],
        metrics: ["Star Dependency Index", "Emotional Spike Index", "Fan Loyalty Score", "Sentiment Velocity"],
        outputs: ["Fan Sentiment Heatmap", "Star vs Team engagement ratio", "Rivalry Impact Case Study"],
      },
      {
        num: "3", icon: "📱", title: "Product & Gamification Engine",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Behavioral",
        color: "#A855F7",
        what: "Retention engineering and dopamine loops",
        analyze: ["User participation mechanics — polls, contests", "Prediction psychology — 'Watch & Win' loops", "Retention curves per match phase", "Drop-off points — when viewers leave"],
        metrics: ["Avg watch time per match", "Prediction accuracy vs retention", "Dopamine Loop Score", "Fantasy team creation rate"],
        outputs: ["Engagement Funnel (Awareness→Dopamine→Retention)", "Retention graphs per match phase", "Gamification mechanics report"],
      },
      {
        num: "4", icon: "📺", title: "Second-Screen Economy",
        role: "Platform Analyst",
        analyticsType: "Causal & Engagement",
        color: "#F4A72A",
        what: "Parallel app behavior and meme velocity",
        analyze: ["Fantasy app engagement during live overs", "Meme velocity — social reaction timing", "Parallel app behavior (Twitter/Reddit discussions)", "Reel virality of match moments"],
        metrics: ["Hype Index (Search + Mentions + Views)", "Parallel App usage ratio", "Meme Velocity Score", "Social Spike Timing"],
        outputs: ["Hype Index Timeline", "Second-Screen Engagement Map", "Viral Moment attribution model"],
      },
      {
        num: "5", icon: "🎯", title: "Attention Economy Engine",
        role: "Attention Analyst",
        analyticsType: "Diagnostic & Timing",
        color: "#2ECC71",
        what: "Monetizing peaks in viewer attention",
        analyze: ["Ad placement timing vs match intensity", "Strategic timeout engagement levels", "Celebrity spikes — camera focus on stars", "Final-over attention peaks"],
        metrics: ["Peak Attention Index", "Ad Recall Score Proxy", "Timeout Engagement %", "Celebrity Spike Score"],
        outputs: ["Attention Intensity Graph", "Ad Timing Optimization Map", "Peak Attention breakdown report"],
      },
      {
        num: "6", icon: "📈", title: "Broadcast & Media Intelligence",
        role: "Media Analyst",
        analyticsType: "Retention Engineering",
        color: "#14B8A6",
        what: "Storytelling and retention through broadcasting",
        analyze: ["Commentator hype moments — volume/tone impact", "Camera timing — focusing on emotions vs action", "Media rights splits (Digital vs TV)", "Replay probability of viral moments"],
        metrics: ["Retention Engineering Score", "Commentary Hype Index", "Camera Focus Efficiency", "Replay Probability"],
        outputs: ["Broadcast Storytelling Map", "Media Rights revenue waterfall", "'Why Dhoni reactions are replayed' analysis"],
      },
      {
        num: "7", icon: "💰", title: "Business & Revenue Intelligence",
        role: "Business Analyst",
        analyticsType: "Financial & ROI",
        color: "#F97316",
        what: "Franchise valuation and sponsorship ROI",
        analyze: ["Media rights value splits", "Sponsorship layers — title, jersey, digital", "Franchise valuation growth 2010→2024", "Revenue per viewer (ARPV)"],
        metrics: ["Brand Pull Score", "Revenue per match", "Franchise Valuation CAGR", "Sponsorship ROI per category"],
        outputs: ["Franchise Valuation Timeline", "Revenue breakdown waterfall", "Brand Pull vs Win Rate matrix"],
      },
      {
        num: "8", icon: "📦", title: "Player Brand Economy",
        role: "Brand Analyst",
        analyticsType: "Influencer & Growth",
        color: "#EC4899",
        what: "Monetizing individual player brands",
        analyze: ["Instagram growth vs on-field performance", "Endorsement pull of emerging stars", "Social conversion score — follower to fan", "Brand pull of specific franchises"],
        metrics: ["Brand Pull Index", "Social Conversion Score", "Sponsorship Attractiveness", "Engagement Growth Rate"],
        outputs: ["Player Brand Power Ranking", "Performance vs Social Growth scatter", "Emerging Star Brand Potential report"],
      },
      {
        num: "9", icon: "🏟️", title: "Strategy & Economic Intelligence",
        role: "Strategy Analyst",
        analyticsType: "Macro & Impact",
        color: "#EF4444",
        what: "Venue economics and tourism impact",
        analyze: ["Stadium occupancy vs local economy impact", "Tourism effect — travel/hotel spikes in match cities", "IPL vs Movie Industry revenue cannibalization", "Impact on OTT release calendars"],
        metrics: ["Tourism Impact Index", "Seasonal GMV Shift", "Movie Box Office Depression %", "Local Business Spike Score"],
        outputs: ["Economic Ecosystem Map", "Industry comparison charts", "Seasonal economy timeline"],
      },
      {
        num: "10", icon: "🤖", title: "AI Intelligence Layer",
        role: "AI Analyst",
        analyticsType: "Predictive & Prescriptive",
        color: "#6366F1",
        what: "Match hype and engagement forecasting",
        analyze: ["Match recommendation loops (Netflix style)", "Match hype prediction for upcoming fixtures", "Highlight virality forecasting", "Retention mechanics optimization"],
        metrics: ["Match Recommendation Score", "Replay Probability", "Highlight Virality Score", "Engagement Forecast Accuracy"],
        outputs: ["Match Hype Prediction Engine", "Highlight Virality Heatmap", "AI-driven retention strategy"],
      },
    ],
    deliverables: [
      { icon: "🌐", label: "Live Website", desc: "Vercel-hosted interactive site — all 10 layers as separate pages with charts + filters" },
      { icon: "📊", label: "Power BI Dashboard", desc: "Multi-role intelligence dashboard with 10 detailed slicers" },
      { icon: "📝", label: "Blog Series", desc: "'IPL: The Attention Economy' · 'Why Dhoni is a Retention Engineer' · 'The Clutch Index'" },
      { icon: "📄", label: "Deep Report (PDF)", desc: "15-page McKinsey-style 'IPL Intelligence Ecosystem' report" },
      { icon: "📱", label: "LinkedIn Series", desc: "10-part visual breakdown of each intelligence layer" },
    ],
    roleMap: [
      { section: "Sports Intelligence", role: "Sports Analyst" },
      { section: "Product + Attention", role: "Product Analyst" },
      { section: "Growth + Virality", role: "Growth Analyst" },
      { section: "Business + Revenue", role: "Business Analyst" },
      { section: "Strategy + Economics", role: "Strategy Analyst" },
      { section: "AI Intelligence", role: "AI Analyst" },
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
        role: "Data Analyst",
        analyticsType: "Descriptive & Exploratory",
        color: "#4A9EFF",
        what: "What genres actually win — theatres vs OTT",
        analyze: ["Genre vs revenue — Action, Romance, Thriller, Comedy", "Pan-India vs niche regional content", "Telugu, Tamil rise vs Hindi dominance"],
        metrics: ["Revenue per genre", "OTT completion rate proxy (ratings count)", "Regional vs national opening ratio"],
        outputs: ["Genre vs revenue bar chart", "OTT completion rate by genre", "Insight: 'Mass content wins theatres, niche thrives on OTT'"],
      },
      {
        num: "2", icon: "⭐", title: "Reviews & Sentiment Impact",
        role: "Product Analyst",
        analyticsType: "Causal & Diagnostic",
        color: "#EC4899",
        what: "Reviews don't just rate films — they decide revenue",
        analyze: ["IMDb ratings vs box office trajectory", "Critics vs audience score gap", "Social media sentiment vs occupancy"],
        metrics: ["Day 1 vs Day 3 revenue drop %", "Rating vs revenue correlation coefficient", "Sentiment score (VADER) per film"],
        outputs: ["Rating vs revenue scatter plot", "Sentiment vs box office trend line", "Insight: 'Hype opens, reviews sustain'"],
      },
      {
        num: "3", icon: "🎟️", title: "Distribution — Multiplex vs Single Screen",
        role: "Business Analyst",
        analyticsType: "Exploratory & Market",
        color: "#F4A72A",
        what: "Urban watches content, rural celebrates cinema",
        analyze: ["Urban (PVR/INOX) vs Rural (single screen) occupancy", "Price sensitivity — premium vs budget seats", "Content type preference by screen tier"],
        metrics: ["ATP (Avg Ticket Price) by tier", "Occupancy % — Multiplex vs Single Screen", "Regional language share of screens"],
        outputs: ["Urban vs rural revenue split chart", "Occupancy comparison bar chart", "Insight: 'Urban watches content, rural celebrates cinema'"],
      },
      {
        num: "4", icon: "📱", title: "Booking Behavior Funnel",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Funnel",
        color: "#2ECC71",
        what: "Intent is high — pricing and timing decide conversion",
        analyze: ["BookMyShow funnel: Search→Browse→Select→Book→Watch", "Weekend vs weekday booking patterns", "Group booking vs solo behavior"],
        metrics: ["Funnel drop-off % at each stage", "Booking-to-show time gap", "Advance booking % vs walk-in %"],
        outputs: ["Booking heatmap — time vs demand", "Funnel drop-off diagram", "Insight: 'Intent is high, but pricing decides conversion'"],
      },
      {
        num: "5", icon: "🔗", title: "Full Content Lifecycle",
        role: "Strategy / Market Analyst",
        analyticsType: "Inferential & Trends",
        color: "#14B8A6",
        what: "Theatre window to OTT gap has collapsed 60→8 weeks",
        analyze: ["Pre→Release→Reviews→OTT→Re-watch timeline", "Theatre window shrinkage 2019 vs 2024", "Re-watch patterns on OTT"],
        metrics: ["Days from release to OTT", "Revenue % earned in Week 1 vs Week 2+", "OTT views spike timing post-theatre"],
        outputs: ["Revenue lifecycle curve", "Engagement-over-time chart", "Insight: 'Theatres capture peak, OTT captures memory'"],
      },
      {
        num: "6", icon: "📈", title: "Marketing & Promotion Strategies",
        role: "Growth / Marketing Analyst",
        analyticsType: "Causal & Attribution",
        color: "#F97316",
        what: "Promotion doesn't just inform — it creates cultural moments",
        analyze: ["Trailer launch vs opening weekend correlation", "College tours, fan events, viral reel challenges", "Meme marketing — pre-release to post-release"],
        metrics: ["YouTube trailer views vs Day 1 BO", "Engagement spike on promo events", "Hashtag reach vs opening collection"],
        outputs: ["Promotion vs engagement spike graph", "Campaign type vs success matrix", "Insight: 'Promotion creates cultural moments, not just awareness'"],
      },
      {
        num: "7", icon: "🧠", title: "Demographics Analysis",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Segmentation",
        color: "#A855F7",
        what: "Different age groups consume same content for different reasons",
        analyze: ["15–25: reels, hype, action | 25–40: story, realism | 40+: drama, emotion", "Genre preference by age group", "OTT vs theatre usage by demographic"],
        metrics: ["Age-segment revenue share", "Platform preference % by age group", "Genre completion rate by segment"],
        outputs: ["Age vs content preference chart", "Platform vs age usage heatmap", "Insight: 'Same film, different consumption reasons by age'"],
      },
      {
        num: "8", icon: "🦠", title: "COVID Impact & Recovery",
        role: "Business Analyst",
        analyticsType: "Causal & Macro",
        color: "#EF4444",
        what: "COVID didn't kill theatres — it forced evolution",
        analyze: ["Pre-COVID: theatre dominant | During: OTT boom | Post: hybrid", "OTT subscriber growth 2019→2024", "Theatre footfall recovery curve"],
        metrics: ["YoY OTT subscriber growth %", "Theatre recovery footfall index", "Hybrid content release % post-COVID"],
        outputs: ["Year vs OTT growth line chart", "Theatre recovery curve", "Insight: 'COVID forced the evolution of distribution'"],
      },
      {
        num: "9", icon: "💰", title: "Business Model Comparison",
        role: "Financial Analyst",
        analyticsType: "Prescriptive & Financial",
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
      { section: "Demographics", role: "Product Analyst" },
      { section: "Marketing ROI", role: "Growth Analyst" },
      { section: "Business Models", role: "Financial Analyst" },
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
        num: "1", icon: "🛍️", title: "Seasonal Sales Analysis",
        role: "Data Analyst",
        analyticsType: "Descriptive & Exploratory",
        color: "#F4A72A",
        what: "Festivals are engineered demand spikes, not organic ones",
        analyze: ["Diwali / Big Billion Days / Great Indian Sale spikes", "Category performance: mobiles > fashion > appliances", "Normal vs festival day GMV delta"],
        metrics: ["GMV spike % vs normal week", "Order volume by category", "AOV (Avg Order Value) during sale vs normal"],
        outputs: ["Festival sales heatmap by category", "GMV spike timeline chart", "Insight: 'Urgency is manufactured, not accidental'"],
      },
      {
        num: "2", icon: "💸", title: "Pricing & Anchoring Strategy",
        role: "Business Analyst",
        analyticsType: "Diagnostic & Behavioral",
        color: "#4A9EFF",
        what: "Anchoring psychology drives more sales than actual discounts",
        analyze: ["Fake vs real discount detection in dataset", "Anchor pricing: ₹50,000 → ₹29,999 psychology", "Limited-time urgency mechanics"],
        metrics: ["Discount % offered vs actual price change", "Conversion rate lift with countdown timers", "Price elasticity by category"],
        outputs: ["Fake vs real discount scatter", "'Psychology of ₹29,999' analysis", "Insight: 'Price anchoring > actual savings in conversion'"],
      },
      {
        num: "3", icon: "📱", title: "Ads Impact & Conversion",
        role: "Growth / Marketing Analyst",
        analyticsType: "Causal & Attribution",
        color: "#EC4899",
        what: "Reels ads are the highest converting format in e-commerce",
        analyze: ["Ad impressions → clicks → purchases funnel", "Influencer vs brand ads conversion", "Reels ads vs Story ads performance"],
        metrics: ["CTR (Click-Through Rate) by ad format", "CAC (Customer Acquisition Cost)", "ROAS (Return on Ad Spend)"],
        outputs: ["Ad funnel conversion chart", "Format vs conversion comparison", "Insight: 'Reels ads outperform every format in discovery-to-purchase'"],
      },
      {
        num: "4", icon: "🧠", title: "Consumer Psychology Funnel",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Funnel",
        color: "#A855F7",
        what: "FOMO and urgency are engineered — not felt",
        analyze: ["Cart abandonment patterns (industry: 70%+ abandonment)", "FOMO effect — stock alerts, countdown timers", "Subscription model stickiness (Prime, Flipkart Plus)"],
        metrics: ["Cart abandonment rate by category", "Conversion lift from urgency triggers", "Subscription retention rate proxy"],
        outputs: ["Conversion funnel chart", "Cart abandonment analysis", "Insight: 'Urgency drives conversion more than discount'"],
      },
      {
        num: "5", icon: "💰", title: "Unit Economics & LTV",
        role: "Financial Analyst",
        analyticsType: "Predictive & Financial",
        color: "#2ECC71",
        what: "LTV and retention, not just first sale, determine profitability",
        analyze: ["AOV, Conversion Rate, Repeat customer %", "Subscription model revenue vs transactional", "LTV by customer segment"],
        metrics: ["LTV / CAC ratio", "Repeat purchase rate", "Subscription ARPU (Avg Revenue Per User)"],
        outputs: ["LTV vs CAC comparison chart", "Revenue model breakdown", "Insight: 'Subscriptions convert buyers into ecosystems'"],
      },
      {
        num: "6", icon: "⚡", title: "Quick Commerce Market Shift",
        role: "Strategy / Market Analyst",
        analyticsType: "Exploratory & Market",
        color: "#14B8A6",
        what: "Time is replacing price as the #1 purchase decision factor",
        analyze: ["Blinkit vs Instamart vs BigBasket — speed, UI, trust", "10–20 min delivery: convenience over price shift", "Planned buying → instant buying behavior change"],
        metrics: ["AOV per platform", "Delivery SLA vs industry avg", "Category strength per platform"],
        outputs: ["Platform comparison matrix", "Time vs price consumer decision chart", "Insight: 'Quick commerce increases frequency, not basket size'"],
      },
      {
        num: "7", icon: "🏪", title: "Impact on Offline Market",
        role: "Strategy / Market Analyst",
        analyticsType: "Causal & Macro",
        color: "#F97316",
        what: "Offline is not dying — it is being absorbed into online ecosystems",
        analyze: ["Kirana store footfall loss — data points", "Price competition from e-commerce platforms", "JioMart model — kirana onboarding"],
        metrics: ["Kirana store count change YoY", "Average footfall decline %", "Platform-onboarded kirana % growth"],
        outputs: ["Offline vs online market share chart", "Kirana absorption model", "Insight: 'Offline is not dying, it is becoming a delivery node'"],
      },
      {
        num: "8", icon: "🏢", title: "Conglomerate Ecosystem Game",
        role: "Business Analyst",
        analyticsType: "Diagnostic & Strategic",
        color: "#EF4444",
        what: "This is not apps vs apps — it's ecosystems vs ecosystems",
        analyze: ["Reliance: Jio+JioMart+retail ecosystem", "Tata: BigBasket+Tata Neu+trust brand", "DMart: low-cost offline efficiency", "Adani: backend supply chain control"],
        metrics: ["Market share % by segment", "Ecosystem reach (services bundled)", "Revenue per ecosystem user"],
        outputs: ["Conglomerate strategy comparison matrix", "Ecosystem map visualization", "Insight: 'The battle is won in logistics and data, not UI'"],
      },
      {
        num: "9", icon: "🧬", title: "Prescriptive Strategy",
        role: "Strategy / Market Analyst",
        analyticsType: "Prescriptive & Final",
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
      { section: "Consumer Psych", role: "Product Analyst" },
      { section: "Quick Commerce", role: "Strategy Analyst" },
      { section: "Conglomerates", role: "Business Analyst" },
    ]
  },
  {
    id: "bpl",
    emoji: "🎸",
    title: "Band Premier League (BPL)",
    subtitle: "Music · Market · Product · Revenue · Ecosystem",
    accentColor: "#F4A72A",
    deliverable: "Primary data collection project — Venue & Band Matchmaking System",
    metaInsight: '"Live music is not just entertainment. It is a repeatable business model and a cultural economy."',
    layers: [
      {
        num: "1", icon: "🟢", title: "Market & Supply Foundation",
        role: "Data Analyst",
        analyticsType: "Descriptive & Exploratory",
        color: "#2ECC71",
        what: "Ground reality of the Hyderabad live music scene",
        analyze: ["Venue density by area", "Show frequency per venue type (Pub/Cafe)", "Live music vs non-music venue ratio"],
        metrics: ["Venues per sq km", "% shows per week", "Avg gigs per month"],
        outputs: ["Venue density map", "Shows per week trend graph"]
      },
      {
        num: "2", icon: "🔵", title: "Demand & Audience Behavior",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Behavioral",
        color: "#4A9EFF",
        what: "Why people attend live music",
        analyze: ["Footfall per venue (Weekend vs Weekday)", "Audience segmentation (Student/Professional)", "Motivation: Vibe vs Price vs Artist"],
        metrics: ["Avg attendance per show", "Peak time traffic", "Customer Lifetime Value (CLV) proxy"],
        outputs: ["Footfall heatmap", "Time vs Attendance trendline"]
      },
      {
        num: "3", icon: "🟡", title: "Supply Side (Bands & Artists)",
        role: "Data Analyst",
        analyticsType: "Exploratory & Supply",
        color: "#F4A72A",
        what: "The artist economy and gig sourcing",
        analyze: ["Active bands per genre", "Band pricing vs gig frequency", "Primary gig sourcing channels"],
        metrics: ["Gig-to-band ratio", "Avg earnings per genre", "Band churn rate"],
        outputs: ["Genre availability matrix", "Band income distribution"]
      },
      {
        num: "4", icon: "🟣", title: "Matchmaking & Optimization",
        role: "Product Analyst",
        analyticsType: "Predictive & Prescriptive",
        color: "#A855F7",
        what: "The 'IPL System' layer — slot optimization",
        analyze: ["Optimal band-venue pairing", "Scheduling to avoid clashing", "Slot utilization efficiency"],
        metrics: ["Slot fill rate", "Match score (Band-Venue fit)", "Predicted attendance per slot"],
        outputs: ["Optimal show calendar", "Scheduling model"]
      },
      {
        num: "5", icon: "🔴", title: "Revenue & Business Model",
        role: "Business Analyst",
        analyticsType: "Descriptive & Financial",
        color: "#EF4444",
        what: "The money behind the music",
        analyze: ["Break-even per show", "Revenue streams: Tickets, F&B share, Sponsorship", "Pricing strategy vs venue capacity"],
        metrics: ["Revenue per match", "Profit margin per venue tier", "ROI on sponsorship"],
        outputs: ["Revenue waterfall chart", "Profit/Show scenario analysis"]
      },
      {
        num: "6", icon: "🟠", title: "Funnel & Product Analytics",
        role: "Product Analyst",
        analyticsType: "Diagnostic & Funnel",
        color: "#F97316",
        what: "The booking journey (BookMyShow style)",
        analyze: ["Awareness → Interest → Booking → Attendance", "Drop-off points in the booking journey", "Conversion lift from promo triggers"],
        metrics: ["Funnel conversion %", "Booking-to-show lead time", "Repeat booking rate"],
        outputs: ["Conversion funnel diagram", "Drop-off heatmaps"]
      },
      {
        num: "7", icon: "🟤", title: "Growth & Marketing Strategy",
        role: "Growth Analyst",
        analyticsType: "Causal & Attribution",
        color: "#78350F",
        what: "Driving virality through reels and influencers",
        analyze: ["Social media engagement vs attendance", "Meme marketing impact on ticket sales", "Campaign ROI per channel"],
        metrics: ["Engagement velocity", "Influencer reach-to-booking ratio", "CAC (Customer Acquisition Cost)"],
        outputs: ["Campaign ROI comparison", "Engagement vs Attendance scatter plot"]
      },
      {
        num: "8", icon: "⚫", title: "Ecosystem Impact",
        role: "Strategy / Market Analyst",
        analyticsType: "Prescriptive & Macro",
        color: "#1F2937",
        what: "Your edge — the big picture economic impact",
        analyze: ["Venue revenue uplift during shows", "Artist income growth over time", "Local economy (F&B) impact"],
        metrics: ["Revenue uplift %", "Artist income CAGR", "Market share growth"],
        outputs: ["Economic impact report", "System growth curves"]
      }
    ],
    deliverables: [
      { icon: "📊", label: "Primary Dataset", desc: "Real-world survey & ground-zero data from 50+ venues" },
      { icon: "🌐", label: "BPL Matchmaking Site", desc: "Live portal for venue/band scheduling & analytics" },
      { icon: "📄", label: "Economic Report", desc: "'The Live Music Economy of Hyderabad' — 15-page deep-dive" },
      { icon: "📱", label: "LinkedIn Series", desc: "Primary data insights sharing — 'Why venue X beats venue Y'" }
    ],
    roleMap: [
      { section: "Market & Supply", role: "Data Analyst" },
      { section: "Demand & Funnel", role: "Product Analyst" },
      { section: "Revenue Model", role: "Business Analyst" },
      { section: "Campaign ROI", role: "Growth Analyst" },
      { section: "Macro Impact", role: "Strategy Analyst" }
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
    { id: "All", label: "All Tasks" },
    { id: "analytics", label: "📊 Data Analytics Tracker", match: ["AnalystBuilder", "SQL:", "Excel", "Power BI", "Tableau", "Python", "Math/Stats", "Gen AI"] },
    { id: "project", label: "🏗️ Project/Portfolio", match: ["Project", "🏗️", "Portfolio", "Sahitya"] },
    { id: "aptitude", label: "🧠 Aptitude (60 Mocks)", match: ["Aptitude:", "Mock"] },
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
            May 1 → June 30 · 4 Projects · 2 Platforms · 20+ Applications
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
                { label: "Projects", value: "4+", color: BLUE },
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
                { emoji: "🏏", title: "IPL Analytics", week: "Weeks 1–2+8", layers: "7 layers", output: "Dashboard + Report + 3 blogs", color: ACCENT },
                { emoji: "🎬", title: "OTT vs Theatre", week: "Weeks 3+8", layers: "9 layers", output: "Dashboard + Report + 2 blogs", color: PURPLE },
                { emoji: "🛒", title: "E-Commerce", week: "Weeks 4+8", layers: "9 layers", output: "Dashboard + Report + 2 blogs", color: GREEN },
                { emoji: "🎸", title: "BPL Ecosystem", week: "Weeks 5+8", layers: "8 layers", output: "Dashboard + Dataset + Report", color: "#F4A72A" },
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
                { project: "BPL", sources: "Primary Data (Survey Monkey / Google Forms), Local Venue Listings, Artist pricing reports, Field interviews" },
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
              All 4 link back to your portfolio. Click any layer to see the full execution plan.
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
                    <li><strong>Projects:</strong> 4 live website links (IPL, OTT, E-Commerce, BPL) with STAR summaries</li>
                    <li><strong>Skills:</strong> SQL · Python · Power BI · Tableau · Excel — with proof links</li>
                    <li><strong>Creative:</strong> Sahitya Rachanalu as "Founder" project</li>
                    <li><strong>Resume:</strong> 2 versions — Data Analyst + Product Analyst focus</li>
                    <li><strong>Blog:</strong> Latest 3 posts auto-pulled from Medium/Substack</li>
                  </ul>
                </div>
                <div style={{ background: "#1a1a2e", padding: 16, borderRadius: 8 }}>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>ARCHITECTURE PLAN</div>
                  {[
                    { label: "4 Project Sub-Sites", desc: "Each project is a separate Vercel site — ipl.yourdomain.com, bpl.yourdomain.com etc." },
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Roadmap />
  </ErrorBoundary>
);
