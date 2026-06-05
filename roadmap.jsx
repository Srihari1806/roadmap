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

const months = [
  {
    month: 1,
    title: "Jun 2026: Foundations & IPL Data Analytics",
    theme: "Data Collection & Exploratory Analysis",
    color: BLUE,
    focusRoles: ["Data Analyst", "Sports Analyst"],
    projects: ["IPL Analytics Dashboard (Layers 1-3)"],
    skills: ["SQL Basics", "Python (Pandas/NumPy)", "Data Cleaning"],
    tasks: [
      { task: "Learn SQL basics (SELECT, JOINs, Group By)", type: "sql" },
      { task: "Learn Python Pandas & Matplotlib basics", type: "analytics" },
      { task: "Clean & Prep IPL dataset (2008-2026)", type: "project" },
      { task: "Build Sports Intelligence & Fan Psychology Layers", type: "project" },
      { task: "Publish 1st Kaggle Notebook with commentary", type: "portfolio" }
    ]
  },
  {
    month: 2,
    title: "Jul 2026: Advanced Sports Analytics & BPL",
    theme: "Benchmarking & Storytelling",
    color: PURPLE,
    focusRoles: ["Sports Analyst", "Product Analyst"],
    projects: ["IPL Analytics (Layers 4-10)", "BPL Analytics"],
    skills: ["Advanced Pandas", "Data Storytelling", "Power BI / Tableau Basics"],
    tasks: [
      { task: "Learn Power BI/Tableau for basic dashboards", type: "analytics" },
      { task: "Complete IPL Business & AI Intelligence Layers", type: "project" },
      { task: "BPL Analysis: Cross-dataset benchmarking", type: "project" },
      { task: "Draft 'IPL: The Attention Economy' PDF report", type: "creative" },
      { task: "Deploy IPL Streamlit/React Dashboard", type: "portfolio" }
    ]
  },
  {
    month: 3,
    title: "Aug 2026: E-Commerce & Business KPIs",
    theme: "Funnel Analysis & Revenue Metrics",
    color: GREEN,
    focusRoles: ["Business Analyst", "Data Analyst"],
    projects: ["E-Commerce Analytics (Layers 1-4)"],
    skills: ["Advanced SQL (CTEs, Window Functions)", "Business Metrics (GMV, AOV)", "Excel (Advanced)"],
    tasks: [
      { task: "Master Advanced SQL and Excel Modeling", type: "sql" },
      { task: "E-Commerce: Seasonal Sales & Pricing Analysis", type: "project" },
      { task: "E-Commerce: Ads Impact & Funnel Drops", type: "project" },
      { task: "Build Excel models for pricing scenarios", type: "analytics" },
      { task: "Publish LinkedIn Case Study on E-Commerce pricing", type: "creative" }
    ]
  },
  {
    month: 4,
    title: "Sep 2026: Growth & Financial Modeling",
    theme: "LTV, CAC & Conglomerate Strategy",
    color: ACCENT,
    focusRoles: ["Growth Analyst", "Financial Analyst", "Strategy Analyst"],
    projects: ["E-Commerce Analytics (Layers 5-9)"],
    skills: ["Cohort Analysis", "Financial Modeling Basics", "A/B Testing Basics"],
    tasks: [
      { task: "Learn Cohort Analysis & A/B Testing foundations", type: "analytics" },
      { task: "E-Commerce: LTV vs CAC Unit Economics", type: "project" },
      { task: "E-Commerce: Quick Commerce & Conglomerate Strategy", type: "project" },
      { task: "Deploy E-Commerce Dashboard & Whitepaper", type: "portfolio" }
    ]
  },
  {
    month: 5,
    title: "Oct 2026: OTT Content & Product Analytics",
    theme: "Retention & Churn Modeling",
    color: RED,
    focusRoles: ["Product Analyst", "Data Analyst"],
    projects: ["OTT Platform Analytics (Layers 1-5)"],
    skills: ["Product Metrics (DAU/MAU, Retention)", "Sentiment Analysis", "Amplitude/Mixpanel Concepts"],
    tasks: [
      { task: "Study Retention, Churn & Engagement Metrics", type: "analytics" },
      { task: "OTT: Genre vs Revenue & Demographics", type: "project" },
      { task: "OTT: Booking Funnel & Sentiment Analysis", type: "project" },
      { task: "Tableau Dashboard for OTT Insights", type: "portfolio" }
    ]
  },
  {
    month: 6,
    title: "Nov-Dec 2026: OTT Strategy & Launch",
    theme: "Macro Economics & Interview Prep",
    color: BLUE,
    focusRoles: ["Strategy Analyst", "Business Analyst"],
    projects: ["OTT Platform Analytics (Layers 6-9)", "Portfolio Launch"],
    skills: ["Interview Prep", "Case Studies", "Refining all skills"],
    tasks: [
      { task: "OTT: COVID Impact & Business Model Comparison", type: "project" },
      { task: "Complete OTT 12-page Deep Report", type: "creative" },
      { task: "Deploy Final Portfolio with all 4 projects", type: "portfolio" },
      { task: "Mock Interviews & Resume Polishing", type: "aptitude" },
      { task: "Start applying to 20+ High-Intent Roles", type: "project" }
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
// This file defines the deep-dive layers for the three core projects.
// Each layer is mapped to one of the 7 Analyst Roles and one of the 7 Core Analytics Types.

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
{
    label: "Live Website", desc: "Vercel-hosted interactive site — all 10 layers as separate pages with charts + filters" },
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
    ],
    resolvedBugs: [
      {
        title: "Franchise Abbreviation Mismatch (teamShort Bug)",
        cause: "Inside the telemetry aggregation path, getPlayerTeam() returned abbreviated franchise names (e.g. 'RCB'). The teamShort() helper only mapped full names, which caused it to fall back to space-splitting, returning 'R' instead of 'RCB'. This resulted in zero match slices and scaled all player statistics to '0 runs · SR 0'.",
        fix: "Updated the teamShort() function inside lib/aggregates.ts to immediately validate and return already abbreviated franchise keys."
      },
      {
        title: "Michael Hussey Nationality Classification Bug",
        cause: "Michael Hussey (Australian) was misclassified as an Indian player because his name was missing from the isIndianPlayer helper's overseasNames exclusion array in stats.tsx.",
        fix: "Added 'hussey' to the overseasNames array in stats.tsx to correctly filter by nationality."
      },
      {
        title: "MS Dhoni Scorecard Discrepancy (33 vs 28 runs)",
        cause: "During the 2013 CSK vs RCB Chidambaram Match, Dhoni's runs mis-aggregated to 28 runs instead of 33. This was caused by React Query cache key mismatches which failed to load accurate ball-by-ball queries from Match 598012.",
        fix: "Synchronized frontend query cache keys with backend route parameters to ensure accurate on-demand calculations."
      },
      {
        title: "Smart Slicing UI Consolidation",
        cause: "Independent tabs for 'Scoring Areas' and 'Phases' were redundant and cluttered the CricViz-style telemetry layout.",
        fix: "Removed standalone tabs and converted them into top-level drop-down filter slices. Added a dedicated 'Balls faced' sorting column and 'Innings' (Chasing vs Defending) context filter."
      }
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
    deliverable: "Interactive website with 9 analysis modules — embedded in portfolio",
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

const CREATIVE_ROLES_DATA = {
  "Content Writer": {
    desc: "Blogs, posts, LinkedIn articles",
    certs: ["HubSpot Content Marketing", "Google Analytics (GA4)"],
    milestones: [
      { month: "June", work: "Setup Medium & LinkedIn. Write 2 data-driven SEO articles on career search techniques." },
      { month: "July", work: "Write 3 blog posts on Telugu literature growth trends using Sahitya Rachanalu data." },
      { month: "August", work: "Publish 2 long-form case studies on E-Commerce user conversion rates." },
      { month: "September", work: "Write 4 technical blogs explaining DBMS schemas and SQL window functions." },
      { month: "October", work: "Publish 3 articles on Prompt Engineering applications for content creation." },
      { month: "November", work: "Draft an e-book outline on 'ECS Student Guide to Analytics Landing Roles'." },
      { month: "December", work: "Publish full content portfolio with 10+ live article links on personal website." }
    ]
  },
  "Creative Writer": {
    desc: "Stories, scripts, reel concepts",
    certs: ["Sahitya Rachanalu Writer Badge", "Fountain Scriptwriting Academy Certificate"],
    milestones: [
      { month: "June", work: "Publish 2 short stories in Telugu on Sahitya Rachanalu community page." },
      { month: "July", work: "Draft a 5-minute dialogue-only script outlining subtext and visual pacing." },
      { month: "August", work: "Create 3 viral video/reel scripts with hooks, visual cues, and CTA lines." },
      { month: "September", work: "Write a complete narrative short-story based on Hyderabad local musicians (BPL)." },
      { month: "October", work: "Design character bible and episode breakdown for a 5-part web series." },
      { month: "November", work: "Draft full pilot episode script (15-20 pages) formatted using Fountain." },
      { month: "December", work: "Compile a digital anthology of Telugu/English stories for portfolio launch." }
    ]
  },
  "Copywriter": {
    desc: "Captions, ads, punchlines, marketing lines",
    certs: ["Adweek Copywriting Masterclass", "Google Ads Search Certification"],
    milestones: [
      { month: "June", work: "Write 5 alternative landing page headlines and CTA copy variations for HireMap." },
      { month: "July", work: "Create a copy spreadsheet with 15 ad hooks for student recruitment portals." },
      { month: "August", work: "Draft e-commerce push notification copies and cart recovery email swipes." },
      { month: "September", work: "Analyze and document CTR improvements from 3 different caption styles." },
      { month: "October", work: "Write promotional taglines for local music events (BPL) targeting Gen-Z." },
      { month: "November", work: "Create copy strategy guide for 3 hypothetical SaaS product launches." },
      { month: "December", work: "Assemble copy swipe file with 50+ conversion copy templates and ads." }
    ]
  },
  "Script Writer": {
    desc: "YouTube, reels, short films, ads",
    certs: ["YouTube Creator Academy Cert", "LinkedIn Video Scripting Specialist"],
    milestones: [
      { month: "June", work: "Write 2 YouTube script outlines using hook-body-transition-CTA formats." },
      { month: "July", work: "Draft script for 5-minute video detailing player metrics for IPL datasets." },
      { month: "August", work: "Create 6 short-form video (Reel/TikTok) script templates with audio/visual cues." },
      { month: "September", work: "Script a technical explainer video for databases (PostgreSQL vs MongoDB)." },
      { month: "October", work: "Write script for a collaborative podcast episode focusing on creator economy." },
      { month: "November", work: "Draft script for a 3-part educational mini-series on data analytics." },
      { month: "December", work: "Launch script repository containing 10 production-ready video scripts." }
    ]
  },
  "Screenplay / Story Writer": {
    desc: "Films, web series (long term)",
    certs: ["Sundance Collab Screenwriting Certificate", "Final Draft Certified User"],
    milestones: [
      { month: "June", work: "Draft a 1-page logline and structural beat-sheet for a web series concept." },
      { month: "July", work: "Write Act I (10 pages) of web series pilot in Fountain script format." },
      { month: "August", work: "Outline Act II subplots and tension graphs for the web series." },
      { month: "September", work: "Complete detailed character arcs and relationship charts." },
      { month: "October", work: "Write Act III and finalize the first draft of the pilot episode (25 pages)." },
      { month: "November", work: "Format and polish the pilot script; seek peer reviews on Sahitya Rachanalu." },
      { month: "December", work: "Assemble web series Bible (Character sheets, Season Arc, Pilot Script) for pitching." }
    ]
  },
  "Lyricist": {
    desc: "Songs, indie music, reels",
    certs: ["Berklee College: Songwriting Certificate", "Sahitya Rachanalu Lyrics Contributor"],
    milestones: [
      { month: "June", work: "Write 2 song concepts (theme, structure, rhyming scheme) in Telugu/English." },
      { month: "July", work: "Draft lyrics for a Telugu indie song and publish on Sahitya Rachanalu." },
      { month: "August", work: "Create 3 viral musical hook lines for Instagram Reels/TikTok audio trends." },
      { month: "September", work: "Write complete lyrics for a song themed around Hyderabad's local band scene." },
      { month: "October", work: "Build Spotify-style interactive lyric-card visual layouts (React components)." },
      { month: "November", work: "Collaborate with a local band to write lyrics for a live performance." },
      { month: "December", work: "Publish digital Lyric Book PDF containing 10 original compositions." }
    ]
  },
  "Sports Content Writer": {
    desc: "Cricket pages, apps, sites",
    certs: ["Kaggle Sports Contributor Badge", "Sports Journalism Basics"],
    milestones: [
      { month: "June", work: "Write 3 statistical match previews comparing bowler econ rates in powerplays." },
      { month: "July", work: "Publish mid-season IPL auction performance reviews on Kaggle/Substack." },
      { month: "August", work: "Write player profile deep-dives focusing on strike rates against spin." },
      { month: "September", work: "Create interactive match analysis reports with graphs (Streamlit links)." },
      { month: "October", work: "Write 2 Substack newsletter issues analyzing team qualification scenarios." },
      { month: "November", work: "Create interactive quiz content and trivia copy for sports pages." },
      { month: "December", work: "Compile Sports Content Portfolio containing 5 analytical articles and a Substack page." }
    ]
  },
  "Film Critic / Reviewer": {
    desc: "YouTube, blogs, pages, analytics overlay",
    certs: ["IMDb Top Reviewer Badge", "Film Criticism & Studies Certification"],
    milestones: [
      { month: "June", work: "Write 2 film reviews focusing on screenplay structure and character arcs." },
      { month: "July", work: "Draft a director profile deep-dive analyzing recurring visual motifs." },
      { month: "August", work: "Design graphic overlays and analysis slides for video essays." },
      { month: "September", work: "Build interactive cinematic watch-list database in Notion/HTML." },
      { month: "October", work: "Write a script for a 10-minute video essay on color theory in cinema." },
      { month: "November", work: "Publish 4 Telugu film reviews on Sahitya Rachanalu." },
      { month: "December", work: "Compile film critic portfolio featuring 10+ reviews and 2 video scripts." }
    ]
  },
  "Social Media Strategist": {
    desc: "Ideas + captions + content calendars",
    certs: ["HubSpot Social Media Certification", "Google Analytics (GA4) Certification"],
    milestones: [
      { month: "June", work: "Conduct social media audit report for Sahitya Rachanalu profile." },
      { month: "July", work: "Create a 1-month content calendar (15 posts) in Google Sheets." },
      { month: "August", work: "Design analytics dashboards tracking engagement rates and reach." },
      { month: "September", work: "Pitch growth strategy plan containing user-generated content ideas." },
      { month: "October", work: "Setup automated cross-posting workflows using Make/Zapier." },
      { month: "November", work: "Design 30-day Reels growth strategy doc with conversion tracking." },
      { month: "December", work: "Launch full brand social media kit including templates and guides." }
    ]
  }
};

function Roadmap() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [expandedMonthTask, setExpandedMonthTask] = useState(null);
  const [checklist, setChecklist] = useState(finalChecklist.map(i => ({ ...i })));
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [domainFilter, setDomainFilter] = useState("All");
  const [selectedCreativeRole, setSelectedCreativeRole] = useState("Content Writer");
  

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

  const allTasksCount = months.reduce((sum, m) => sum + m.tasks.length, 0);
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
    { id: "skillmap", label: "🗺️ Skill Map", href: "./skill-map.html" },
    { id: "projects", label: "🚀 Projects Deep-Dive" },
    { id: "platforms", label: "🌐 Platforms & Portfolio" },
    { id: "creative", label: "🎨 Creative Hub" },
    { id: "content-os", label: "✍️ Content OS" },
    { id: "monthly", label: "📅 6-Month Plan" },
    { id: "skills", label: "🛠️ Skills" },
    { id: "resume", label: "📄 Resume System" },
  ];

  const toggleCheck = (idx) => {
    setChecklist(prev => prev.map((item, i) => i === idx ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(i => i.done).length;
  const progress = Math.round((completedCount / checklist.length) * 100);

  const currentMonthData = months[selectedMonth];

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
              6-Month Execution Roadmap
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5, fontFamily: "'DM Mono', monospace" }}>
            Srihari's <span style={{ color: ACCENT }}>Analyst</span> Launch Plan
          </h1>
          <p style={{ margin: "6px 0 0", color: MUTED, fontSize: 12 }}>
             180 Days · 4+ Projects · 2 Platforms · 4 Target Roles
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: 89, zIndex: 99 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
          {tabs.map(tab => {
            const isExternal = Boolean(tab.href);
            const isActive = !isExternal && activeTab === tab.id;
            const tabStyle = {
              background: "none",
              border: "none",
              color: isActive ? ACCENT : MUTED,
              padding: "14px 20px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "inherit",
              letterSpacing: 0.5,
              borderBottom: isActive ? `2px solid ${ACCENT}` : "2px solid transparent",
              transition: "all 0.2s",
            };

            return isExternal ? (
              <a key={tab.id} href={tab.href} style={{ ...tabStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                {tab.label}
              </a>
            ) : (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={tabStyle}>{tab.label}</button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Stats bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Days", value: "180", color: ACCENT },
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
              6-Month Master Timeline
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {months.map((m, idx) => (
                <div key={idx} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${m.color}`,
                  borderRadius: 8,
                  padding: "14px 16px",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }} onClick={() => { setActiveTab("monthly"); setSelectedMonth(idx); }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = m.color}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.borderLeftColor = m.color; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ color: m.color, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
                        MONTH {m.month} ·
                      </span>
                      <span style={{ marginLeft: 8, fontWeight: 700, fontSize: 14 }}>{m.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        background: `${m.color}20`,
                        color: m.color,
                        padding: "3px 10px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 700,
                      }}>{m.theme}</span>
                      <span style={{ fontSize: 11, color: MUTED }}>
                        {m.tasks.length} tasks →
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
        {activeTab === "monthly" && (
          <div>
            {/* Segregation Strategy */}
            <div style={{
              background: "linear-gradient(135deg, #12121E 0%, #0A0A0F 100%)",
              border: `1px solid ${ACCENT}`,
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: ACCENT, margin: "0 0 12px 0" }}>⏱️ 6-Month Execution Planner</h3>
              <p style={{ fontSize: 13, color: TEXT, margin: "0 0 16px 0", lineHeight: 1.5 }}>
                Monthly focus areas to master the 4 projects and 7 roles. Track your high-level progression below.
              </p>
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
                <span style={{ fontSize: 13, fontWeight: 700 }}>Overall Planner Progress</span>
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
                {completedTasksCount} / {allTasksCount} monthly tasks completed
              </div>
            </div>

            {/* Month selector */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {months.map((m, idx) => (
                <button key={idx} onClick={() => setSelectedMonth(idx)} style={{
                  background: selectedMonth === idx ? m.color : CARD,
                  border: `1px solid ${selectedMonth === idx ? m.color : BORDER}`,
                  color: selectedMonth === idx ? "#000" : MUTED,
                  padding: "8px 16px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "inherit",
                }}>M{m.month}</button>
              ))}
            </div>

            {/* Month header */}
            <div style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${currentMonthData.color}`,
              borderRadius: 8,
              padding: "16px 20px",
              marginBottom: 20,
            }}>
              <div style={{ color: currentMonthData.color, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
                MONTH {currentMonthData.month}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>{currentMonthData.title}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{currentMonthData.theme}</div>
              
              <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                <div style={{ fontSize: 11, color: TEXT }}>
                  <strong style={{ color: currentMonthData.color }}>Projects:</strong> {currentMonthData.projects.join(", ")}
                </div>
                <div style={{ fontSize: 11, color: TEXT }}>
                  <strong style={{ color: currentMonthData.color }}>Skills:</strong> {currentMonthData.skills.join(", ")}
                </div>
                <div style={{ fontSize: 11, color: TEXT }}>
                  <strong style={{ color: currentMonthData.color }}>Roles:</strong> {currentMonthData.focusRoles.join(", ")}
                </div>
              </div>
            </div>

            {/* Tasks list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {currentMonthData.tasks.map((task, i) => {
                const taskId = `m${currentMonthData.month}-t${i}`;
                const isDone = !!completedTasks[taskId];
                const isExpanded = expandedMonthTask === taskId;
                return (
                  <div key={i} style={{
                    background: isDone ? "#0d2e1a" : CARD,
                    border: `1px solid ${isDone ? GREEN + "60" : BORDER}`,
                    borderLeft: `4px solid ${isDone ? GREEN : (taskTypeColors[task.type] || ACCENT)}`,
                    borderRadius: 8,
                    padding: "14px 16px",
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }} onClick={() => setExpandedMonthTask(isExpanded ? null : taskId)}>
                    <div 
                      onClick={(e) => { e.stopPropagation(); toggleTask(taskId); }}
                      style={{
                        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                        border: `2px solid ${isDone ? GREEN : BORDER}`,
                        background: isDone ? GREEN : "transparent",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#000", fontSize: 11, fontWeight: 900
                      }}>
                      {isDone ? "✓" : ""}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: 14, fontWeight: 700, lineHeight: 1.4,
                        color: isDone ? GREEN : TEXT,
                        textDecoration: isDone ? "line-through" : "none",
                        opacity: isDone ? 0.7 : 1
                      }}>{task.task}</div>
                    </div>
                    <div style={{
                      background: `${taskTypeColors[task.type] || MUTED}20`,
                      color: taskTypeColors[task.type] || MUTED,
                      padding: "4px 10px",
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

        {/* CONTENT OS TAB */}
        {activeTab === "content-os" && (() => {
          const pillars = [
            { id: 1, emoji: "🎬", name: "Film Analysis Essays", color: "#F4A72A", roles: ["Writer", "Critic", "Research Writer", "Story Editor"], count: "10–12", topics: ["Arjun Reddy: Tragedy of Self-Destruction", "Baahubali's World-Building", "KGF: Mythology of a Self-Made God", "Pushpa: Working-Class Hero", "Dil Chahta Hai at 25", "Mani Ratnam's Visual Language"] },
            { id: 2, emoji: "🧠", name: "Character Psychology", color: "#A78BFA", roles: ["Creative Writer", "Screenplay Writer", "Narrative Designer"], count: "8", topics: ["Dhoni: Psychology of Stillness", "Arjun Reddy: Narcissistic Genius?", "Walter White: Moral Collapse", "Kabir Singh vs Arjun Reddy"] },
            { id: 3, emoji: "📜", name: "Screenplay Breakdowns", color: "#34D399", roles: ["Script Writer", "Screenplay Writer", "Creative Producer"], count: "8", topics: ["3 Idiots: Hook Writing Masterclass", "Dil Chahta Hai: Ensemble Dynamics", "ZNMD: Road Trip as Pressure Cooker", "Ala Vaikunthapurramuloo Decoded"] },
            { id: 4, emoji: "🎵", name: "Lyrics Vault", color: "#FB7185", roles: ["Lyricist", "Creative Writer"], count: "12–15", topics: ["Srivalli Decoded", "Saranga Dariya Analysis", "Original: Loss/Nostalgia", "Original: Ambition/Longing", "Kesariya: Romantic Ambiguity"] },
            { id: 5, emoji: "🏑", name: "IPL Analytics Hub", color: "#38BDF8", roles: ["Sports Writer", "Research Writer", "Content Strategist"], count: "10", topics: ["Dhoni Nostalgia Premium", "MI vs CSK Data Story", "RCB Tragedy in Numbers", "IPL Revenue Model Decoded", "What Makes a Viral Match Moment?"] },
            { id: 6, emoji: "🎯", name: "Brand/Product Teardowns", color: "#FB923C", roles: ["Copywriter", "SEO Writer", "Brand Storyteller"], count: "8", topics: ["Zomato Copywriting Playbook", "Swiggy vs Zomato Brand War", "boAt's D2C Rise", "Cred Exclusivity Strategy", "Duolingo Viral Strategy"] },
            { id: 7, emoji: "📈", name: "Creator Economy Essays", color: "#4ADE80", roles: ["Content Strategist", "Social Media Strategist", "Growth Marketer"], count: "8", topics: ["1000 True Fans 2026", "Why Instagram Reach is Dead", "Second Screen Economy", "LinkedIn's Creator Moment", "Regional Creator Wave"] },
            { id: 8, emoji: "📖", name: "Sahitya Founder Journal", color: "#E879F9", roles: ["Creative Director", "Producer", "Community Builder"], count: "6", topics: ["Why I'm Building Sahitya", "Content Architecture First", "The Language Problem", "Growing Before Launch", "6 Months In: What Changed"] },
          ];
          const monthly = [
            { month: "Jun", theme: "Foundation", count: 7, color: "#F4A72A", types: ["2 Film Essays", "1 Brand Teardown", "1 IPL Article", "1 Founder Journal", "2 Lyrics"] },
            { month: "Jul", theme: "Storytelling", count: 8, color: "#A78BFA", types: ["2 Character Studies", "2 Screenplay Breakdowns", "1 Short Story", "2 Lyrics", "1 Founder Journal"] },
            { month: "Aug", theme: "Marketing", count: 7, color: "#34D399", types: ["2 Brand Teardowns", "2 UX Teardowns", "1 SEO Article", "2 Creator Essays"] },
            { month: "Sep", theme: "Media & Creator", count: 8, color: "#38BDF8", types: ["1 Content Calendar", "2 Campaign Breakdowns", "10 Reel Concepts", "2 Podcast Scripts"] },
            { month: "Oct–Nov", theme: "Leadership", count: 5, color: "#FB923C", types: ["1 Web Series Universe", "1 Character Bible", "1 Story World Doc", "1 Production Plan"] },
            { month: "Dec", theme: "Authority", count: 8, color: "#E879F9", types: ["2 Research Essays", "2 Film Deep Dives", "2 IPL Deep Dives", "1 Vision Document"] },
          ];
          const certs = [
            { name: "Google Data Analytics Professional", platform: "Coursera", by: "Aug", track: "Analytics", color: "#4ADE80" },
            { name: "HubSpot Digital Marketing", platform: "HubSpot Academy", by: "Aug", track: "Creative/Growth", color: "#FB923C" },
            { name: "Google Project Management Professional", platform: "Coursera", by: "Sep", track: "Product/BA", color: "#38BDF8" },
            { name: "Microsoft/LinkedIn Generative AI", platform: "LinkedIn Learning", by: "Oct", track: "Tech/Analytics", color: "#A78BFA" },
            { name: "Deloitte Data Analytics (Forage)", platform: "Forage", by: "Dec", track: "Analytics", color: "#F4A72A" },
          ];
          const weekly = [
            { day: "MON", action: "Research", detail: "Films · Sports · Marketing · Save to Notion", color: "#38BDF8" },
            { day: "TUE", action: "Insights", detail: "Observation → Insight → Article Idea pipeline", color: "#A78BFA" },
            { day: "WED", action: "Write Analytics", detail: "Film essay OR IPL article OR Brand teardown (600–900w)", color: "#F4A72A" },
            { day: "THU", action: "Write Creative", detail: "Character study OR Screenplay OR Lyrics (400–600w)", color: "#FB7185" },
            { day: "FRI", action: "Write Strategy", detail: "Creator essay OR Founder journal OR UX teardown", color: "#34D399" },
            { day: "SAT", action: "Curate & Archive", detail: "Edit + Store in Notion + LinkedIn carousel outline", color: "#FB923C" },
            { day: "SUN", action: "Publish", detail: "Sahitya Rachanalu primary → LinkedIn/Medium cross-post", color: "#E879F9" },
          ];
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Header */}
              <div style={{ background: "linear-gradient(135deg, #1a0a2e, #0A0A0F)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>CREATIVE PORTFOLIO OPERATING SYSTEM</div>
                <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 800 }}>8 Pillars · 25 Roles · 80–100 Artifacts</h2>
                <p style={{ margin: 0, color: MUTED, fontSize: 12, lineHeight: 1.6 }}>Every piece of content does double or triple role duty. One system, all 25 creative/content roles covered by December 2026.</p>
                <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
                  {[{v:"8",l:"Content Pillars"},{v:"25",l:"Roles Covered"},{v:"80–100",l:"Total Artifacts"},{v:"5",l:"Certifications"},{v:"6",l:"Months"}].map(s => (
                    <div key={s.l} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: ACCENT }}>{s.v}</div>
                      <div style={{ fontSize: 10, color: MUTED, letterSpacing: 0.5 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8 Pillars Grid */}
              <div>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>THE 8 PORTFOLIO PILLARS</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {pillars.map(p => (
                    <div key={p.id} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 8, padding: 14, borderLeft: `3px solid ${p.color}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 18 }}>{p.emoji}</span>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: p.color }}>{p.name}</div>
                          <div style={{ fontSize: 10, color: MUTED }}>Target: {p.count} pieces</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                        {p.roles.map(r => <span key={r} style={{ fontSize: 9, background: p.color + "20", color: p.color, padding: "2px 6px", borderRadius: 3, border: `1px solid ${p.color}30` }}>{r}</span>)}
                      </div>
                      <div style={{ fontSize: 10, color: MUTED, lineHeight: 1.6 }}>
                        {p.topics.slice(0,3).map((t,i) => <div key={i} style={{ paddingLeft: 6, borderLeft: `1px solid ${BORDER}` }}>↳ {t}</div>)}
                        {p.topics.length > 3 && <div style={{ color: p.color, fontSize: 9, marginTop: 2 }}>+{p.topics.length - 3} more topics planned</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6-Month Content Calendar */}
              <div>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>6-MONTH CONTENT CALENDAR</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {monthly.map(m => (
                    <div key={m.month} style={{ background: CARD, border: `1px solid ${m.color}40`, borderRadius: 8, padding: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                        <div style={{ fontSize: 14, fontWeight: 800, color: m.color }}>{m.month}</div>
                        <div style={{ fontSize: 10, background: m.color + "20", color: m.color, padding: "2px 6px", borderRadius: 3 }}>{m.count} pieces</div>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8 }}>{m.theme}</div>
                      {m.types.map((t,i) => <div key={i} style={{ fontSize: 10, color: MUTED, padding: "2px 0" }}>· {t}</div>)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly OS */}
              <div>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>WEEKLY CONTENT OPERATING SYSTEM</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
                  {weekly.map(w => (
                    <div key={w.day} style={{ background: CARD, border: `1px solid ${w.color}40`, borderRadius: 8, padding: 10, textAlign: "center" }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: w.color, marginBottom: 4 }}>{w.day}</div>
                      <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{w.action}</div>
                      <div style={{ fontSize: 9, color: MUTED, lineHeight: 1.4 }}>{w.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification Timeline */}
              <div>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>CERTIFICATION TIMELINE (Curated — No Redundancy)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {certs.map(c => (
                    <div key={c.name} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 8, padding: 14, display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ minWidth: 44, textAlign: "center" }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: c.color }}>{c.by}</div>
                        <div style={{ fontSize: 9, color: MUTED }}>target</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 700 }}>{c.name}</div>
                        <div style={{ fontSize: 10, color: MUTED, marginTop: 2 }}>{c.platform} · Track: {c.track}</div>
                      </div>
                      <span style={{ fontSize: 9, background: c.color + "20", color: c.color, padding: "2px 8px", borderRadius: 3, border: `1px solid ${c.color}30`, whiteSpace: "nowrap" }}>{c.track}</span>
                    </div>
                  ))}
                  <div style={{ padding: "10px 14px", background: "#0A0A0F", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 11, color: MUTED }}>
                    ⛔ <strong style={{ color: "#FFF" }}>Skip:</strong> IBM SQL (redundant with Google DA), Microsoft 365 Fundamentals (too basic), AWS Prompt Engineering (use LinkedIn AI badge instead)
                  </div>
                </div>
              </div>

              {/* End-state tracker */}
              <div style={{ background: "linear-gradient(135deg, #1a2e0a, #0A0A0F)", border: `1px solid #34D39940`, borderRadius: 10, padding: 20 }}>
                <div style={{ color: "#34D399", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>END-STATE PORTFOLIO — DECEMBER 2026</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {[["Film Analyses","10–12"],["Character Studies","8"],["Screenplay Breakdowns","8"],["Brand Teardowns","8"],["IPL Articles","10"],["Creator Economy Essays","8"],["Founder Journals","6"],["Lyrics","12–15"],["Story/Script Concepts","5–10"],["Universe/World Docs","2–3"]].map(([k,v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", background: CARD, borderRadius: 4, fontSize: 11 }}>
                      <span style={{ color: MUTED }}>{k}</span>
                      <span style={{ color: "#34D399", fontWeight: 700 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: "10px 14px", background: "#34D39910", border: `1px solid #34D39940`, borderRadius: 6, fontSize: 12, fontWeight: 700, textAlign: "center", color: "#34D399" }}>
                  Total: 80–100 portfolio artifacts · All 25 creative/content roles credibly covered
                </div>
              </div>
            </div>
          );
        })()}

        {/* CREATIVE TAB */}
        {activeTab === "resume" && (
          <div style={{ marginTop: 8 }}>
            <ResumeATSAnalyzer />
          </div>
        )}

        {activeTab === "creative" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Creative Content Hub
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 18 }}>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>WRITING ROLES & CERTIFICATIONS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, maxHeight: "420px", overflowY: "auto", paddingRight: 6 }}>
                  {[
                    { role: "Content Writer", desc: "Blogs, posts, LinkedIn articles", cert: "Google DA Professional + HubSpot Digital Marketing" },
                    { role: "Creative Writer", desc: "Stories, scripts, reel concepts", cert: "Sahitya Rachanalu + Berklee Songwriting (planned)" },
                    { role: "Copywriter", desc: "Captions, ads, punchlines, marketing lines", cert: "Adweek Copywriting + Google Ads Search ✅" },
                    { role: "Script Writer", desc: "YouTube, reels, short films, ads", cert: "YouTube Creator Academy (planned)" },
                    { role: "Screenplay / Story Writer", desc: "Films, web series (long term)", cert: "Screenplay breakdown portfolio" },
                    { role: "Lyricist", desc: "Songs, indie music, reels", cert: "Lyrics Vault — original songs" },
                    { role: "Sports Content Writer", desc: "Cricket pages, apps, sites", cert: "Kaggle IPL Notebook + Sports Portfolio" },
                    { role: "Film Critic / Reviewer", desc: "YouTube, blogs, pages, analytics overlay", cert: "Film Analysis Essay Portfolio (10–12 pieces)" },
                    { role: "Social Media Strategist", desc: "Ideas, captions, content calendars", cert: "HubSpot Social Media ✅ + HubSpot Digital Marketing" },
                    { role: "Content Strategist", desc: "Brand growth, content mapping, editorial plans", cert: "Google Analytics GA4 ✅ + HubSpot Digital Marketing" }
                  ].map(r => (
                    <div key={r.role} style={{ paddingBottom: 10, borderBottom: `1px solid ${BORDER}40` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#FFF" }}>{r.role}</span>
                        <span style={{ fontSize: 11, color: MUTED }}>{r.desc}</span>
                      </div>
                      <div style={{ fontSize: 10, color: ACCENT, marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color: "#475569", textTransform: "uppercase", fontSize: 8, letterSpacing: 0.5 }}>Certificates:</span>
                        <span style={{ background: ACCENT + "15", padding: "1px 6px", borderRadius: 2, border: `1px solid ${ACCENT}30` }}>{r.cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
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

const BASE_SKILLS = ["Python (basics)", "React", "TypeScript", "HTML/CSS", "Git/GitHub", "MS Excel", "SEO Writing", "Content Strategy", "Content Calendar Management"];

const MONTH_SKILLS = {
  june: ["Logical Reasoning", "Advanced SQL", "Excel Power Query", "Schema Design (Process Mapping)", "Complexity Analysis", "OOPs", "Brand Messaging & Copywriting"],
  july: ["Quantitative Aptitude", "Python (Pandas/Seaborn)", "EDA & Data Interpretation", "KPI Design (Product Metrics)", "JavaScript (Core & DOM)", "DBMS"],
  august: ["Verbal Ability", "Power BI & Data Visualization", "DAX Modeling", "Funnel & Retention Analytics", "React hooks", "Operating Systems"],
  september: ["Google Analytics & GA4", "SEO Architecture & Keyword Research", "A/B Testing", "LTV/CAC Metrics", "HubSpot Marketing Automation", "Node.js", "Express", "MongoDB", "Computer Networks"],
  october: ["NLP & Text Analytics", "Prompt Engineering", "Make/Zapier Automations", "REST APIs & PostgreSQL", "Audience Research & Campaign Planning", "Greedy/DP Algorithms", "LLD"],
  november: ["Predictive Modeling", "Financial Literacy & Accounting basics", "Data Storytelling & Stakeholder Communication", "Financial Modeling & Time Series Forecasting", "Advanced Trees/Trie", "HLD"],
  december: ["Consolidation & Case Studies (Business Problem Framing)", "System Design Mock Interviews", "Backtracking", "Divide and Conquer", "Mock Aptitude Tests"]
};

function getDynamicSummary(role, monthIndex) {
  const summaries = {
    "Data Analyst": "KIIT ECS student (2027) specializing in database schema design, SQL wrangling, and interactive dashboards. Proven ability to translate complex sports and product datasets into actionable visualizations.",
    "Product Analyst": "KIIT ECS student (2027) focused on product analytics. Experienced in tracking user conversion funnels, onboarding flows, D1/D7/D30 retention metrics, and designing A/B test experiments.",
    "Business Analyst": "KIIT ECS student (2027) skilled in business problem framing, reporting, and data storytelling. Experienced in mapping process flows and translating analytical insights for corporate stakeholders.",
    "Growth Analyst": "KIIT ECS student (2027) specializing in user acquisition metrics. Experienced in organic community building, ad conversion funnels, CAC/LTV attribution models, and GA4 telemetry.",
    "Sports Analyst": "KIIT ECS student (2027) passionate about sports data. Specialized in player performance benchmarking, expected value modeling, and processing large-scale cricket datasets using Python.",
    "Financial Analyst": "KIIT ECS student (2027) with strong foundations in unit economics, financial modeling, and scenario analysis. Experienced in building automated dashboards to track AOV and GMV metrics.",
    "Content Strategist": "KIIT ECS student (2027) and founder of Sahitya Rachanalu. Expert in creator community scaling, content calendars optimization, organic distribution, and audience engagement telemetry.",
    "SEO Analyst": "KIIT ECS student (2027) specializing in search traffic growth. Experienced in keyword discovery, page indexing optimizations, technical SEO site audits, and ranking analysis."
  };
  
  const base = summaries[role] || summaries["Data Analyst"];
  if (monthIndex < 3) {
    return base + " (Currently building foundation in core analytical databases and basic Python data tools.)";
  } else if (monthIndex < 6) {
    return base + " (Actively deploying intermediate models and funnel dashboards on Vercel.)";
  } else {
    return base + " (Full system portfolio deployed. Ready to drive immediate business value.)";
  }
}

function getDynamicTitle(role) {
  const titles = {
    "Data Analyst": "Data Analyst | Sports Analytics & SQL",
    "Product Analyst": "Product Analyst | Product Metrics & A/B Testing",
    "Business Analyst": "Business Analyst | Business Strategy & Reporting",
    "Growth Analyst": "Growth Analyst | User Acquisition & Content Strategy",
    "Sports Analyst": "Sports Analyst | Player Performance & Cricket Data",
    "Financial Analyst": "Financial Analyst | Unit Economics & Modeling",
    "Content Strategist": "Content Strategist | Brand Growth & Writing",
    "SEO Analyst": "SEO Analyst | SEO Architecture & Web Traffic"
  };
  return titles[role] || "Analyst | Product & Growth | Sports Data";
}

function getDynamicSkills(role, monthIndex) {
  let current = [...BASE_SKILLS];
  if (monthIndex >= 1) current = [...current, ...MONTH_SKILLS.june];
  if (monthIndex >= 2) current = [...current, ...MONTH_SKILLS.july];
  if (monthIndex >= 3) current = [...current, ...MONTH_SKILLS.august];
  if (monthIndex >= 4) current = [...current, ...MONTH_SKILLS.september];
  if (monthIndex >= 5) current = [...current, ...MONTH_SKILLS.october];
  if (monthIndex >= 6) current = [...current, ...MONTH_SKILLS.november];
  if (monthIndex >= 7) current = [...current, ...MONTH_SKILLS.december];

  let learning = [];
  if (monthIndex === 0) learning = MONTH_SKILLS.june;
  else if (monthIndex === 1) learning = MONTH_SKILLS.july;
  else if (monthIndex === 2) learning = MONTH_SKILLS.august;
  else if (monthIndex === 3) learning = MONTH_SKILLS.september;
  else if (monthIndex === 4) learning = MONTH_SKILLS.october;
  else if (monthIndex === 5) learning = MONTH_SKILLS.november;
  else if (monthIndex === 6) learning = MONTH_SKILLS.december;

  const currentSet = new Set(current.map(s => s.toLowerCase()));
  const learningSet = new Set(learning.map(s => s.toLowerCase()));

  let allFuture = [];
  if (monthIndex < 1) allFuture = [...allFuture, ...MONTH_SKILLS.june];
  if (monthIndex < 2) allFuture = [...allFuture, ...MONTH_SKILLS.july];
  if (monthIndex < 3) allFuture = [...allFuture, ...MONTH_SKILLS.august];
  if (monthIndex < 4) allFuture = [...allFuture, ...MONTH_SKILLS.september];
  if (monthIndex < 5) allFuture = [...allFuture, ...MONTH_SKILLS.october];
  if (monthIndex < 6) allFuture = [...allFuture, ...MONTH_SKILLS.november];
  if (monthIndex < 7) allFuture = [...allFuture, ...MONTH_SKILLS.december];

  const planned = allFuture.filter(s => !currentSet.has(s.toLowerCase()) && !learningSet.has(s.toLowerCase()));

  // Re-ordering logic: put must_have keywords of the active role first
  const req = roleRequirements[role];
  if (req) {
    const priorityKeywords = req.ats_keywords.map(kw => kw.toLowerCase());
    
    const sortFunc = (a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      
      const aPriority = priorityKeywords.some(kw => aLower.includes(kw) || kw.includes(aLower.split(" ")[0]));
      const bPriority = priorityKeywords.some(kw => bLower.includes(kw) || kw.includes(bLower.split(" ")[0]));
      
      if (aPriority && !bPriority) return -1;
      if (!aPriority && bPriority) return 1;
      return 0;
    };
    
    current.sort(sortFunc);
    learning.sort(sortFunc);
    planned.sort(sortFunc);
  }

  return { current, learning, planned };
}

function getDynamicProjects(role, monthIndex) {
  const list = [];
  
  const isDA = role === "Data Analyst";
  const isPA = role === "Product Analyst";
  const isBA = role === "Business Analyst";
  const isGA = role === "Growth Analyst";
  const isSA = role === "Sports Analyst";
  const isFA = role === "Financial Analyst";
  const isCS = role === "Content Strategist";
  const isSEO = role === "SEO Analyst";

  const hiremap = {
    id: "hiremap",
    title: "HireMap — Placement Web App",
    status: "Completed",
    tags: ["React 19", "TypeScript", "Firebase", "Vite", "Framer Motion"],
    bullets: [
      "Built frontend of a placement-focused web app for students — live at hiremap-eight.vercel.app",
      isPA 
        ? "Contributed directly to product definition: user persona analysis, friction-free onboarding, and click tracking metrics"
        : isBA 
        ? "Gathered user requirements from 50+ students to define PRD and align feature scopes with technical timelines"
        : "Implemented role-based auth, dynamic dashboards, and smooth UI transitions with Framer Motion",
      isDA 
        ? "Connected Firebase database schema metrics, logging average registration counts and active session patterns"
        : "Contributed to product thinking: user flow, onboarding design, and feature prioritization",
    ],
    skills_demonstrated: ["Frontend Dev", "Product Thinking", "Deployment (Vercel)"],
  };

  const sahitya = {
    id: "sahitya",
    title: "Sahitya Rachanalu — Telugu Literary Community",
    status: "Founder | Ongoing",
    tags: ["Content Strategy", "Community Building", "Growth", "Telugu"],
    bullets: [
      "Founded and scaled a Telugu literary content community from scratch",
      isGA || isSEO || isCS
        ? "Curated SEO-driven organic content calendar, driving 20%+ month-on-month growth in user engagement and community reach"
        : "Curated and published original literary content; drove organic growth through consistent programming",
      isDA || isBA
        ? "Monitored visitor demographics, peak traffic times, and retention indices using Google Sheets trackers"
        : "Demonstrated: content calendar management, audience engagement, and creator community strategy",
    ],
    skills_demonstrated: ["Content Strategy", "Community Growth", "Brand Building", "Organic Distribution"],
  };

  // IPL
  let iplStatus = "";
  let iplBullets = [];
  if (monthIndex === 0) {
    iplStatus = "Planned (Start: June 2026)";
    iplBullets = [
      isSA 
        ? "Planned: Process ball-by-ball IPL telemetry datasets to evaluate player efficiency models"
        : "Planned: Analyze 2008–2026 IPL dataset to surface trends in batting, bowling, and season performance",
      "Planned: Build interactive visualizations of player performance and team metrics in Streamlit"
    ];
  } else if (monthIndex === 1) {
    iplStatus = "In Progress (June 2026)";
    iplBullets = [
      isDA || isSA
        ? "Gathered and cleaned historical IPL match data and player auction rosters using Python (Pandas)"
        : "Gathered historical IPL match stats and player salary records",
      isDA 
        ? "Designed normalized star schema database models mapping matches to ball-by-ball delivery facts"
        : "Designed database tables mapping matches to players and team parameters",
      isSA 
        ? "Formulating expected performance indicators (valuation index) to benchmark auction costs against output strike rates"
        : "Drafting metrics to evaluate player value-for-money trends"
    ];
  } else {
    iplStatus = "Completed";
    iplBullets = [
      "Analyzed 2008–2026 IPL dataset (ipl.csv) to surface trends in batting, bowling, and season performance",
      isDA 
        ? "Built relational database schemas with optimized indexes, reducing query response times by 30%"
        : isPA 
        ? "Analyzed partnership durations and team batting orders to map event sequences and batting drop-offs"
        : isBA 
        ? "Formulated valuation equations to audit auction spending efficiencies, identifying 12+ overpriced assets"
        : isGA 
        ? "Wrote high-traction analytical blog articles on player salaries, generating 4,000+ views in cricket communities"
        : isSA 
        ? "Benchmarked player value-for-money index using batting strike rates, bowling average partitions, and auction costs"
        : "Built interactive visualizations: top scorers, team win rates, and season-wise run trends",
      isSA 
        ? "Published findings as a public Kaggle notebook with storytelling commentary and expected-run metrics"
        : "Published findings as a public Kaggle notebook with storytelling commentary"
    ];
  }
  
  const ipl = {
    id: "ipl",
    title: "IPL Analytics Dashboard",
    status: iplStatus,
    tags: ["Python", "Pandas", "Matplotlib", "Kaggle", "Sports Analytics"],
    bullets: iplBullets,
    skills_demonstrated: ["SQL-style wrangling", "Python/Pandas", "Data Visualization", "Sports Domain Knowledge"]
  };

  // BPL
  let bplStatus = "";
  let bplBullets = [];
  if (monthIndex === 0) {
    bplStatus = "Planned";
    bplBullets = ["Planned: Build matchmaking scheduling system for live entertainment and local bands"];
  } else if (monthIndex === 1) {
    bplStatus = "In Progress (June 2026)";
    bplBullets = [
      "Mapped live music density, pub locations, and capacity sizes across Hyderabad",
      isDA 
        ? "Drafted primary SQL table schemas and mapping keys linking bands to available scheduling slots"
        : "Drafted primary schema relationships mapping bands to available slots"
    ];
  } else if (monthIndex === 2) {
    bplStatus = "In Progress (July 2026)";
    bplBullets = [
      isPA || isBA || isCS
        ? "Conducted survey on 100+ crowd attendees to identify motivation factors (vibe vs price vs artist)"
        : "Conducted surveys of 100+ crowd attendees on event preferences and pricing constraints",
      "Visualized crowd motivation patterns and peak occupancy curves for venues"
    ];
  } else if (monthIndex === 3) {
    bplStatus = "In Progress (August 2026)";
    bplBullets = [
      isDA || isBA || isFA
        ? "Compiled Musician catalog indexing active bands, pricing tiers, and genre competencies in a normalized database"
        : "Compiled Musician catalog indexing active bands, pricing tiers, and genre competencies",
      "Formulated venue-band fit coefficients to optimize venue lineups"
    ];
  } else if (monthIndex === 4) {
    bplStatus = "In Progress (September 2026)";
    bplBullets = [
      isPA || isDA
        ? "Developed scheduling allocation algorithm (conflict solver) to prevent double-booking slots"
        : "Developed allocation algorithm to solve venue calendar booking conflicts",
      "Integrated matching algorithms prioritizing venue capacity limitations and target margins"
    ];
  } else if (monthIndex === 5) {
    bplStatus = "In Progress (October 2026)";
    bplBullets = [
      isFA || isBA
        ? "Calculated break-even ticket targets and F&B profit share vs fixed hiring fee projections"
        : "Calculated break-even ticket targets under tiered pricing structures",
      "Constructed venue F&B profit share vs fixed hiring fee models"
    ];
  } else if (monthIndex === 6) {
    bplStatus = "In Progress (November 2026)";
    bplBullets = [
      isPA || isGA
        ? "Built booking funnel user tracking (BookMyShow style) to map cart drop-offs and attribute conversion lifts"
        : "Built booking funnel user tracking (BookMyShow style) to map cart drop-offs",
      "Attributed booking conversion gains during marketing campaigns and promo activations"
    ];
  } else {
    bplStatus = "Completed (December 2026)";
    bplBullets = [
      isPA 
        ? "Optimized checkout booking funnel, reducing transaction friction points and boosting conversion rate by 14%"
        : isBA || isFA
        ? "Built financial projection solver forecasting break-even gig allocations for Tier 1 and Tier 2 local venues"
        : isGA 
        ? "Conducted attribution analysis on reels ad impressions, reducing CAC by 18% during weekend ticket promotions"
        : "Built venue & band matchmaking system combining audience demand and supply models",
      "Published Hyderabad Live Music Economic Impact Report containing pricing tier simulations",
      "Live portal facilitates slot scheduling and automated conflict resolution for booking agents"
    ];
  }

  const bpl = {
    id: "bpl",
    title: "BPL (Band Premier League) Analytics",
    status: bplStatus,
    tags: ["Music Analytics", "Product Analytics", "Market Matchmaking"],
    bullets: bplBullets,
    skills_demonstrated: ["Market Modeling", "Survey Design", "Allocation Algorithms", "Scheduling Optimization"]
  };

  // E-Commerce
  let ecomStatus = "";
  let ecomBullets = [];
  if (monthIndex < 3) {
    ecomStatus = "Planned (Starts August 2026)";
    ecomBullets = ["Planned: Formulate transaction funnel optimization models and pricing elasticity dashboards"];
  } else if (monthIndex === 3) {
    ecomStatus = "In Progress (August 2026)";
    ecomBullets = [
      "Scraped Flipkart and Amazon product review catalogs for sentiment tracking",
      isDA || isPA
        ? "Mapped user transaction funnels from ad impressions to cart adds and checkouts using SQL"
        : "Mapped user transaction funnels from ad impressions to cart adds and checkouts"
    ];
  } else {
    ecomStatus = "Completed";
    ecomBullets = [
      isDA 
        ? "Analyzed Big Billion Days sales datasets using window functions and CTEs to identify pricing elasticity"
        : isPA 
        ? "Identified key funnel leakage points where 15% of checkout additions dropped due to shipping transparent pricing"
        : isBA 
        ? "Demonstrated that urgency mechanics and price anchors drive conversions significantly over generic discounts"
        : isGA 
        ? "Analyzed Reels ad attribution, revealing Reels CTR converts 2.5x higher than story ad formats"
        : "Analyzed Big Billion Days sales datasets to identify price anchoring and consumer biases",
      isDA || isPA || isBA
        ? "Built interactive cohort retention and conversion dashboards mapping checkout abandonments across categories"
        : "Built interactive funnel conversion dashboards mapping cart abandonments across categories",
      isFA || isBA
        ? "Calculated unit economics and lifetime value (LTV/CAC ratio) to optimize marketing spend allocations"
        : "Optimized CAC allocation recommendations based on attribution channel ROAS analysis"
    ];
  }

  const ecom = {
    id: "ecom",
    title: "E-Commerce Analytics Project",
    status: ecomStatus,
    tags: ["SQL", "Power BI", "Funnel Analytics", "Attribution"],
    bullets: ecomBullets,
    skills_demonstrated: ["Funnel Diagnostics", "DAX Modeling", "Customer Acquisition Cost", "Marketing ROI"]
  };

  // OTT
  let ottStatus = "";
  let ottBullets = [];
  if (monthIndex < 5) {
    ottStatus = "Planned (Starts October 2026)";
    ottBullets = ["Planned: Build OTT streaming retention predictions and theatrical revenue correlations"];
  } else if (monthIndex === 5) {
    ottStatus = "In Progress (October 2026)";
    ottBullets = [
      "Parsed IMDb and Netflix title databases for genre/language distributions",
      "Aggregated box office statistics for theatrical releases and streaming release window gaps"
    ];
  } else {
    ottStatus = "Completed";
    ottBullets = [
      isDA || isSEO || isCS
        ? "Correlated YouTube movie trailer search sentiment scores with opening box office collections using Python NLP libraries"
        : "Correlated YouTube movie trailer sentiment scores with opening box office collections",
      isPA || isBA
        ? "Designed predictive user churn model mapping viewing metrics, account logins, and billing periods"
        : "Designed churn prediction model based on user engagement metrics and billing periods",
      isPA 
        ? "Built recommendation system engine with collaborative filtering vectors to optimize feature conversions"
        : "Built final recommendation system engine based on user preference vectors"
    ];
  }

  const ott = {
    id: "ott",
    title: "OTT vs Theatre Platform Analytics",
    status: ottStatus,
    tags: ["NLP", "Recommendation System", "Content Strategy", "Churn Modeling"],
    bullets: ottBullets,
    skills_demonstrated: ["Sentiment Mining", "Product Retention", "Predictive Analytics", "Collaborative Filtering"]
  };

  list.push(ipl, bpl, ecom, ott, hiremap, sahitya);
  return list;
}

const roleRequirements = {
  "Data Analyst": {
    color: "#3B82F6",
    must_have: ["SQL", "Python/Pandas", "Data Visualization", "Excel/Sheets", "Statistical Analysis", "Dashboard tools (Tableau/Power BI)"],
    good_to_have: ["dbt", "BigQuery/Snowflake", "A/B Testing", "Cohort Analysis"],
    ats_keywords: ["SQL", "Python", "data analysis", "visualization", "dashboard", "metrics", "KPI", "Excel", "Tableau", "Power BI", "statistical analysis", "cohort", "funnel"],
  },
  "Product Analyst": {
    color: "#8B5CF6",
    must_have: ["SQL", "Product Metrics (DAU/MAU/Retention)", "A/B Testing", "Python or Excel", "User Journey Mapping", "Funnel Analysis"],
    good_to_have: ["Amplitude/Mixpanel", "Figma", "Market Research", "PRD writing"],
    ats_keywords: ["product analytics", "user retention", "A/B testing", "funnel", "DAU", "MAU", "churn", "feature adoption", "product metrics", "user journey", "SQL", "Python"],
  },
  "Business Analyst": {
    color: "#10B981",
    must_have: ["SQL", "Excel", "Business Problem Framing", "Stakeholder Communication", "Data Storytelling", "Process Mapping"],
    good_to_have: ["Power BI", "Python", "Financial Modeling basics", "Case Study frameworks"],
    ats_keywords: ["business analysis", "stakeholder", "process improvement", "data-driven", "SQL", "Excel", "reporting", "KPI", "insights", "requirement gathering", "documentation"],
  },
  "Growth Analyst": {
    color: "#F59E0B",
    must_have: ["SEO", "Content Strategy", "Google Analytics", "Social Media Analytics", "A/B Testing (copy)", "Excel/Sheets"],
    good_to_have: ["HubSpot/similar", "Email marketing tools", "Canva/Figma", "Cohort tracking"],
    ats_keywords: ["content strategy", "SEO", "growth", "GTM", "organic", "engagement", "retention", "funnel", "conversion", "analytics", "social media", "community"],
  },
  "Sports Analyst": {
    color: "#EF4444",
    must_have: ["Python/Pandas", "Sports Domain Knowledge (IPL/PKL)", "Data Visualization", "Statistical Thinking", "SQL"],
    good_to_have: ["R", "Tableau/Power BI", "Web Scraping (BeautifulSoup)", "Expected Value modeling"],
    ats_keywords: ["sports analytics", "cricket", "IPL", "player performance", "Python", "data modeling", "visualizations", "statistical analysis", "sports data", "Kaggle"],
  },
  "Financial Analyst": {
    color: "#6366F1",
    must_have: ["Excel (Advanced)", "Financial Modeling", "Accounting basics", "Python (yfinance)", "SQL", "Data Interpretation"],
    good_to_have: ["Bloomberg Terminal familiarity", "DCF", "Ratio Analysis", "Power BI"],
    ats_keywords: ["financial modeling", "Excel", "valuation", "DCF", "ratio analysis", "P&L", "forecasting", "financial analysis", "Python", "SQL", "investment analysis"],
  },
  "Content Strategist": {
    color: "#EC4899",
    must_have: ["Content Strategy", "Google Analytics (GA4)", "HubSpot Marketing Automation", "SEO", "Content Calendar Management", "Brand Messaging"],
    good_to_have: ["HubSpot Marketing", "SEMrush", "A/B Testing", "Audience Research & Campaign Planning"],
    ats_keywords: ["content strategy", "SEO", "audience research", "campaign planning", "content calendar", "analytics", "engagement", "brand messaging", "HubSpot"],
  },
  "SEO Analyst": {
    color: "#14B8A6",
    must_have: ["SEO", "Google Analytics", "Keyword Research", "On-page Optimization", "Technical SEO"],
    good_to_have: ["SEMrush/Ahrefs", "Search Console", "Content Strategy", "Link Building"],
    ats_keywords: ["SEO", "keyword research", "on-page", "technical SEO", "Google Analytics", "search console", "organic traffic", "rankings", "backlinks"],
  },
};

function ResumeATSAnalyzer() {
  const [activeRole, setActiveRole] = useState("Data Analyst");
  const [activeTab, setActiveTab] = useState("resume");
  const [monthProgress, setMonthProgress] = useState(7); // Default to December (Full)
  
  const dynamicResume = {
    name: "Srihari [Last Name]",
    title: getDynamicTitle(activeRole),
    contact: {
      email: "srihari@email.com",
      linkedin: "linkedin.com/in/srihari",
      github: "github.com/srihari",
      location: "Bhubaneswar / Mumbai",
    },
    summary: getDynamicSummary(activeRole, monthProgress),
    education: {
      degree: "B.Tech — Electronics & Computer Science",
      college: "KIIT University, Bhubaneswar",
      year: "2023 – 2027",
      cgpa: "7.3",
    },
    projects: getDynamicProjects(activeRole, monthProgress),
    skills: getDynamicSkills(activeRole, monthProgress)
  };

  const role = roleRequirements[activeRole];
  const allCurrentSkills = new Set(dynamicResume.skills.current.map(s => s.toLowerCase()));
  const allLearningSkills = new Set(dynamicResume.skills.learning.map(s => s.toLowerCase()));

  const matchSkill = (mustHaveSkill, learnedSet) => {
    const sl = mustHaveSkill.toLowerCase();
    return [...learnedSet].some(s => {
      const sLower = s.toLowerCase();
      
      // Direct / Substring matches
      if (sLower === sl) return true;
      if (sLower.includes(sl) || sl.includes(sLower)) return true;
      
      // SQL
      if (sl === "sql" && sLower.includes("sql")) return true;
      
      // Python & Pandas
      if (sl.includes("python") && sLower.includes("python")) return true;
      if (sl.includes("pandas") && sLower.includes("pandas")) return true;
      
      // Excel & Sheets
      if ((sl.includes("excel") || sl.includes("sheets")) && (sLower.includes("excel") || sLower.includes("sheets"))) return true;
      
      // Dashboards / Viz
      if (sl.includes("dashboard") && (sLower.includes("power bi") || sLower.includes("tableau") || sLower.includes("dashboard") || sLower.includes("visualization"))) return true;
      if (sl.includes("visualization") && (sLower.includes("power bi") || sLower.includes("tableau") || sLower.includes("seaborn") || sLower.includes("matplotlib") || sLower.includes("visualization"))) return true;
      
      // Stats / Analysis / Thinking
      if (sl.includes("statistical") && (sLower.includes("eda") || sLower.includes("pandas") || sLower.includes("stats") || sLower.includes("quantitative") || sLower.includes("reasoning") || sLower.includes("math"))) return true;
      if (sl.includes("statistics") && (sLower.includes("eda") || sLower.includes("pandas") || sLower.includes("stats") || sLower.includes("quantitative") || sLower.includes("reasoning"))) return true;
      if (sl.includes("interpretation") && (sLower.includes("eda") || sLower.includes("pandas") || sLower.includes("interpretation"))) return true;
      if (sl.includes("thinking") && (sLower.includes("stats") || sLower.includes("quantitative") || sLower.includes("reasoning") || sLower.includes("math"))) return true;
      
      // Product metrics / Funnel / Cohort / Analytics
      if (sl.includes("product metrics") && (sLower.includes("kpi") || sLower.includes("funnel") || sLower.includes("ltv/cac") || sLower.includes("analytics") || sLower.includes("metrics") || sLower.includes("retention"))) return true;
      if (sl.includes("funnel") && sLower.includes("funnel")) return true;
      if (sl.includes("retention") && sLower.includes("retention")) return true;
      
      // A/B Testing
      if (sl.includes("a/b testing") && sLower.includes("a/b testing")) return true;
      
      
      // SEO & Content Strategy
      if (sl.includes("seo") && sLower.includes("seo")) return true;
      if (sl.includes("content strategy") && sLower.includes("content strategy")) return true;
      if (sl.includes("social media") && (sLower.includes("content strategy") || sLower.includes("growth") || sLower.includes("social media"))) return true;

      // Content Calendar & Brand Messaging
      if (sl.includes("content calendar") && (sLower.includes("content calendar") || sLower.includes("content strategy") || sLower.includes("editorial"))) return true;
      if (sl.includes("brand messaging") && (sLower.includes("brand messaging") || sLower.includes("copywriting") || sLower.includes("brand"))) return true;

      // Analytics Tools (GA4, Power BI, Tableau)
      if (sl.includes("analytics tools") && (sLower.includes("analytics") || sLower.includes("ga4") || sLower.includes("power bi") || sLower.includes("tableau"))) return true;
      if (sl.includes("google analytics") && (sLower.includes("google analytics") || sLower.includes("ga4"))) return true;

      // HubSpot
      if (sl.includes("hubspot") && (sLower.includes("hubspot") || sLower.includes("marketing automation"))) return true;

      // User Journey / Process Mapping
      if (sl.includes("user journey") && (sLower.includes("funnel") || sLower.includes("process") || sLower.includes("schema design"))) return true;
      if (sl.includes("process mapping") && (sLower.includes("schema design") || sLower.includes("process") || sLower.includes("workflow") || sLower.includes("design"))) return true;

      // Business Framing / Stakeholder / Storytelling
      if (sl.includes("business problem") && (sLower.includes("case study") || sLower.includes("case studies") || sLower.includes("storytelling") || sLower.includes("framing") || sLower.includes("consolidation"))) return true;
      if (sl.includes("stakeholder") && (sLower.includes("storytelling") || sLower.includes("communication"))) return true;
      if (sl.includes("storytelling") && sLower.includes("storytelling")) return true;

      // Sports Domain
      if (sl.includes("sports domain") && (sLower.includes("ipl") || sLower.includes("sports") || sLower.includes("analytics"))) return true;
      if (sl.includes("sports") && (sLower.includes("ipl") || sLower.includes("sports") || sLower.includes("analytics"))) return true;
      
      // Financial
      if (sl.includes("financial modeling") && (sLower.includes("financial") || sLower.includes("forecasting") || sLower.includes("modeling"))) return true;
      if (sl.includes("accounting") && (sLower.includes("financial literacy") || sLower.includes("accounting"))) return true;

      // Audience / Campaign / Keyword / Technical SEO
      if (sl.includes("audience research") && (sLower.includes("analytics") || sLower.includes("seo") || sLower.includes("audience") || sLower.includes("campaign"))) return true;
      if (sl.includes("campaign planning") && (sLower.includes("content strategy") || sLower.includes("seo") || sLower.includes("campaign"))) return true;
      if (sl.includes("keyword research") && (sLower.includes("seo") || sLower.includes("keyword"))) return true;
      if (sl.includes("optimization") && (sLower.includes("seo") || sLower.includes("optimization"))) return true;
      
      return false;
    });
  };

  const getSkillStatus = (skill, currentSet, learningSet) => {
    if (matchSkill(skill, currentSet)) return "have";
    if (matchSkill(skill, learningSet)) return "learning";
    return "gap";
  };

  const mustHaveAnalysis = role.must_have.map(skill => ({
    skill,
    status: getSkillStatus(skill, allCurrentSkills, allLearningSkills),
  }));
  const goodToHaveAnalysis = role.good_to_have.map(skill => ({
    skill,
    status: getSkillStatus(skill, allCurrentSkills, allLearningSkills),
  }));

  const haveCount = mustHaveAnalysis.filter(s => s.status === "have").length;
  const learningCount = mustHaveAnalysis.filter(s => s.status === "learning").length;
  const gapCount = mustHaveAnalysis.filter(s => s.status === "gap").length;
  const atsScore = Math.round(((haveCount + learningCount * 0.5) / role.must_have.length) * 100);

  const calculateAtsScore = (roleName) => {
    const roleReq = roleRequirements[roleName];
    if (!roleReq) return 0;
    const have = roleReq.must_have.filter(skill => matchSkill(skill, allCurrentSkills)).length;
    const learning = roleReq.must_have.filter(skill => matchSkill(skill, allLearningSkills)).length;
    return Math.round(((have + learning * 0.5) / roleReq.must_have.length) * 100);
  };

  return (
    <div style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace", background: "#0A0A0F", minHeight: "100vh", color: "#E2E8F0", padding: "0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0A0A0F; } ::-webkit-scrollbar-thumb { background: #334155; }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: inherit; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 10px 20px; transition: all 0.2s; }
        .tab-btn.active { color: #F8FAFC; border-bottom: 2px solid #F8FAFC; }
        .tab-btn.inactive { color: #475569; border-bottom: 2px solid transparent; }
        .role-chip { border: none; cursor: pointer; font-family: inherit; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; transition: all 0.2s; }
        .tag { font-size: 9px; letter-spacing: 1px; text-transform: uppercase; padding: 3px 8px; background: #1E293B; color: #64748B; border-radius: 2px; }
        .section-label { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #475569; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #1E293B; }
        .skill-badge { font-size: 9px; letter-spacing: 1px; padding: 4px 10px; border-radius: 2px; display: inline-block; }
        .project-card { background: #0F1724; border: 1px solid #1E293B; border-radius: 4px; padding: 20px; margin-bottom: 12px; transition: border-color 0.2s; }
        .project-card:hover { border-color: #334155; }
        .ats-bar-bg { background: #1E293B; border-radius: 2px; height: 6px; width: 100%; }
        .ats-bar-fill { height: 6px; border-radius: 2px; transition: width 0.8s ease; }
        .status-dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; margin-right: 8px; flex-shrink: 0; }
      `}</style>

      <div style={{ background: "#050508", borderBottom: "1px solid #1E293B", padding: "32px 40px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, letterSpacing: 4, color: "#F8FAFC", lineHeight: 1 }}>{dynamicResume.name}</div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748B", textTransform: "uppercase", marginTop: 6 }}>{dynamicResume.title}</div>
              <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                {Object.entries(dynamicResume.contact).map(([k, v]) => (
                  <span key={k} style={{ fontSize: 10, color: "#475569", letterSpacing: 1 }}>
                    <span style={{ color: "#334155" }}>{k.toUpperCase()} // </span>{v}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 9, letterSpacing: 2, color: "#475569", textTransform: "uppercase", marginBottom: 4 }}>ATS Readiness</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: role.color, lineHeight: 1 }}>{atsScore}%</div>
              <div style={{ fontSize: 9, color: "#475569", letterSpacing: 1 }}>for {activeRole}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1E293B" }}>
            {["resume", "ats-gap", "roadmap"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`tab-btn ${activeTab === tab ? "active" : "inactive"}`}>
                {tab === "resume" ? "📄 Resume" : tab === "ats-gap" ? "🎯 ATS Gap Analysis" : "🗺 Skill Roadmap"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 40px" }}>

        {/* Month Progress Selector */}
        <div style={{ background: "#0F1724", border: "1px solid #1E293B", borderRadius: 4, padding: "16px 20px", marginBottom: 28 }}>
          <div style={{ fontSize: 9, letterSpacing: 2, color: "#475569", textTransform: "uppercase", marginBottom: 12 }}>
            Simulate Resume Progress (Month-by-Month Skills & Projects)
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["June (Beg)", "End of June", "End of July", "End of August", "End of September", "End of October", "End of November", "End of December"].map((label, idx) => (
              <button
                key={idx}
                onClick={() => setMonthProgress(idx)}
                style={{
                  background: monthProgress === idx ? "#F4A72A" : "#1A202C",
                  color: monthProgress === idx ? "#000" : "#94A3B8",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "8px 14px",
                  borderRadius: 2,
                  transition: "all 0.2s"
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <div className="section-label">Target Role</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {Object.entries(roleRequirements).map(([name, data]) => (
              <button
                key={name}
                onClick={() => setActiveRole(name)}
                className="role-chip"
                style={{
                  background: activeRole === name ? data.color + "22" : "#0F1724",
                  color: activeRole === name ? data.color : "#475569",
                  border: `1px solid ${activeRole === name ? data.color : "#1E293B"}`,
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "resume" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32 }}>
            <div>
              <div style={{ marginBottom: 32 }}>
                <div className="section-label">Profile</div>
                <p style={{ fontSize: 12, lineHeight: 1.8, color: "#94A3B8" }}>{dynamicResume.summary}</p>
              </div>

              <div>
                <div className="section-label">Projects</div>
                {dynamicResume.projects.map(p => (
                  <div key={p.id} className="project-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#F1F5F9", letterSpacing: 0.5 }}>{p.title}</div>
                        <div style={{ fontSize: 10, color: "#475569", marginTop: 2, letterSpacing: 1 }}>{p.status}</div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {p.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                      {p.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: 11, color: "#64748B", lineHeight: 1.7, paddingLeft: 14, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "#334155" }}>›</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ marginBottom: 28 }}>
                <div className="section-label">Education</div>
                <div style={{ fontSize: 12, color: "#F1F5F9", fontWeight: 600, marginBottom: 4 }}>{dynamicResume.education.degree}</div>
                <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.8 }}>
                  {dynamicResume.education.college}<br />
                  {dynamicResume.education.year}<br />
                  <span style={{ color: "#475569" }}>CGPA: </span>{dynamicResume.education.cgpa}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <div className="section-label">Current Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {dynamicResume.skills.current.map(s => (
                    <span key={s} className="skill-badge" style={{ background: "#0F2A1F", color: "#34D399", border: "1px solid #064E3B" }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <div className="section-label">Currently Learning</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {dynamicResume.skills.learning.map(s => (
                    <span key={s} className="skill-badge" style={{ background: "#1C1A0A", color: "#FCD34D", border: "1px solid #713F12" }}>{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="section-label">Planned to Learn</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {dynamicResume.skills.planned.map(s => (
                    <span key={s} className="skill-badge" style={{ background: "#0F1724", color: "#475569", border: "1px solid #1E293B" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ats-gap" && (
          <div>
            <div style={{ background: "#0F1724", border: `1px solid ${role.color}33`, borderRadius: 4, padding: 24, marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: "#475569", textTransform: "uppercase", marginBottom: 4 }}>ATS Score for {activeRole}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: role.color, lineHeight: 1 }}>{atsScore}<span style={{ fontSize: 20, color: "#475569" }}>%</span></div>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  {[{ label: "Have", count: haveCount, color: "#34D399" }, { label: "Learning", count: learningCount, color: "#FCD34D" }, { label: "Gap", count: gapCount, color: "#F87171" }].map(item => (
                    <div key={item.label} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: item.color, lineHeight: 1 }}>{item.count}</div>
                      <div style={{ fontSize: 9, letterSpacing: 2, color: "#475569", textTransform: "uppercase" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ats-bar-bg">
                <div className="ats-bar-fill" style={{ width: `${atsScore}%`, background: role.color }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <div className="section-label">Must-Have Skills</div>
                {mustHaveAnalysis.map(({ skill, status }) => (
                  <div key={skill} style={{ display: "flex", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #0F1724" }}>
                    <span className="status-dot" style={{ background: status === "have" ? "#34D399" : status === "learning" ? "#FCD34D" : "#F87171" }} />
                    <span style={{ fontSize: 11, color: status === "have" ? "#94A3B8" : status === "learning" ? "#FCD34D" : "#F87171", flex: 1 }}>{skill}</span>
                    <span style={{ fontSize: 9, letterSpacing: 1, color: status === "have" ? "#34D399" : status === "learning" ? "#F59E0B" : "#EF4444", textTransform: "uppercase" }}>
                      {status === "have" ? "✓ Have" : status === "learning" ? "⟳ Learning" : "✗ Gap"}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="section-label">Good-to-Have Skills</div>
                {goodToHaveAnalysis.map(({ skill, status }) => (
                  <div key={skill} style={{ display: "flex", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #0F1724" }}>
                    <span className="status-dot" style={{ background: status === "have" ? "#34D399" : status === "learning" ? "#FCD34D" : "#475569" }} />
                    <span style={{ fontSize: 11, color: status === "have" ? "#94A3B8" : status === "learning" ? "#FCD34D" : "#475569", flex: 1 }}>{skill}</span>
                    <span style={{ fontSize: 9, letterSpacing: 1, color: status === "have" ? "#34D399" : status === "learning" ? "#F59E0B" : "#334155", textTransform: "uppercase" }}>
                      {status === "have" ? "✓ Have" : status === "learning" ? "⟳ Learning" : "· Planned"}
                    </span>
                  </div>
                ))}

                <div style={{ marginTop: 24 }}>
                  <div className="section-label">ATS Keywords to Use</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {role.ats_keywords.map(kw => (
                      <span key={kw} className="skill-badge" style={{ background: role.color + "15", color: role.color, border: `1px solid ${role.color}30` }}>{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "roadmap" && (
          <div>
            {/* Role Eligibility Grid */}
            <div style={{ background: "#0F1724", border: "1px solid #1E293B", borderRadius: 4, padding: 20, marginBottom: 28 }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#94A3B8", textTransform: "uppercase", marginBottom: 16 }}>
                💼 Role Eligibility Overview (At Selected Milestone)
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {Object.keys(roleRequirements).map(rName => {
                  const score = calculateAtsScore(rName);
                  let statusLabel = "";
                  let statusColor = "";
                  if (score >= 75) {
                    statusLabel = "✓ Eligible & Match Ready";
                    statusColor = "#34D399"; // Green
                  } else if (score >= 50) {
                    statusLabel = "⟳ Partially Match (Learning)";
                    statusColor = "#FCD34D"; // Yellow
                  } else {
                    statusLabel = "✗ Gap / In Training";
                    statusColor = "#EF4444"; // Red
                  }
                  
                  const isCurrentTarget = activeRole === rName;

                  return (
                    <div 
                      key={rName} 
                      onClick={() => setActiveRole(rName)}
                      style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        padding: "12px 16px", 
                        background: isCurrentTarget ? "#1E293B" : "#090D16", 
                        border: isCurrentTarget ? `1px solid ${roleRequirements[rName].color}` : "1px solid #1E293B",
                        borderRadius: 4,
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: isCurrentTarget ? "#FFF" : "#94A3B8" }}>{rName}</div>
                        <div style={{ fontSize: 9, color: statusColor, marginTop: 4, fontWeight: 600 }}>{statusLabel}</div>
                      </div>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: statusColor, marginLeft: 12 }}>{score}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <div className="section-label">Project Timeline & Skill Build</div>
              {[
                { month: "Now → Jun 2026", project: "IPL Analytics Dashboard", skills: ["Python/Pandas", "Matplotlib/Seaborn", "Kaggle", "Data Storytelling"], color: "#3B82F6", status: "active" },
                { month: "Jun → Jul 2026", project: "BPL Analytics", skills: ["Cross-dataset joins", "Player benchmarking", "Aggregations", "Notebook narrative"], color: "#8B5CF6", status: "next" },
                { month: "Aug → Sep 2026", project: "E-Commerce Analytics", skills: ["SQL (must!)", "Funnel analysis", "Cohort retention", "Business KPIs", "Power BI/Tableau"], color: "#10B981", status: "planned" },
                { month: "Oct → Nov 2026", project: "OTT Platform Analytics", skills: ["Content analytics", "Churn modeling", "Feature adoption", "Mixpanel-style metrics"], color: "#F59E0B", status: "planned" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                  <div style={{ width: 130, flexShrink: 0, paddingTop: 4 }}>
                    <div style={{ fontSize: 9, color: item.color, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>{item.month}</div>
                    <div style={{ width: 2, height: 60, background: item.color + "30", margin: "8px 0 0 4px" }} />
                  </div>
                  <div style={{ background: "#0F1724", border: `1px solid ${item.color}22`, borderRadius: 4, padding: 16, flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#F1F5F9" }}>{item.project}</div>
                      </div>
                      <span style={{ fontSize: 9, letterSpacing: 1, textTransform: "uppercase", color: item.color, background: item.color + "15", padding: "2px 8px", borderRadius: 2 }}>{item.status}</span>
                    </div>
                    <div style={{ fontSize: 10, color: "#475569", marginBottom: 8 }}>Skills you'll build:</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {item.skills.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#0F0A1F", border: "1px solid #3B0764", borderRadius: 4, padding: 20 }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#7C3AED", textTransform: "uppercase", marginBottom: 12 }}>⚡ Priority Action: Learn SQL Now</div>
              <p style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.8 }}>
                SQL is the single most impactful skill to learn immediately. It appears as a must-have in <strong style={{ color: "#C4B5FD" }}>5 out of 6</strong> analyst roles you're targeting. Use Mode Analytics or SQLZoo — 30 min/day for 30 days will get you interview-ready.
              </p>
              <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["SQLZoo (free)", "Mode Analytics SQL Tutorial", "StrataScratch (practice)", "LeetCode Easy SQL (50 Qs)"].map(r => (
                  <span key={r} className="skill-badge" style={{ background: "#2E1065", color: "#A78BFA", border: "1px solid #4C1D95" }}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CombinedApp() {
  return (
    <ErrorBoundary>
      <Roadmap />
    </ErrorBoundary>
  );
}
