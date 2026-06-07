// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// This file defines the deep-dive layers for the core projects.
// Each layer is mapped to one of the target roles and core analytics types.

const projectsData = [
  {
    id: "ipl",
    emoji: "🏏",
    title: "IPL Analytics Engine",
    subtitle: "Sports · Product · Business · Growth · Strategy · Machine Learning",
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
        role: "AI / ML Engineer",
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
      { section: "AI Intelligence", role: "AI / ML Engineer" },
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
    subtitle: "Content · Audience · Distribution · Business · COVID Impact · ML Sentiment",
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
        role: "Strategy Analyst",
        analyticsType: "Inferential & Trends",
        color: "#14B8A6",
        what: "Theatre window to OTT gap has collapsed 60→8 weeks",
        analyze: ["Pre→Release→Reviews→OTT→Re-watch timeline", "Theatre window shrinkage 2019 vs 2024", "Re-watch patterns on OTT"],
        metrics: ["Days from release to OTT", "Revenue % earned in Week 1 vs Week 2+", "OTT views spike timing post-theatre"],
        outputs: ["Revenue lifecycle curve", "Engagement-over-time chart", "Insight: 'Theatres capture peak, OTT captures memory'"],
      },
      {
        num: "6", icon: "📈", title: "Marketing & Promotion Strategies",
        role: "Growth Analyst",
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
      { section: "Sentiment Models", role: "AI / ML Engineer" },
    ]
  },
  {
    id: "ecom",
    emoji: "🛒",
    title: "E-Commerce + Ads System",
    subtitle: "Sales · Psychology · Quick Commerce · DevOps Pipelines · Conglomerates",
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
        role: "Growth Analyst",
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
        role: "Strategy Analyst",
        analyticsType: "Exploratory & Market",
        color: "#14B8A6",
        what: "Time is replacing price as the #1 purchase decision factor",
        analyze: ["Blinkit vs Instamart vs BigBasket — speed, UI, trust", "10–20 min delivery: convenience over price shift", "Planned buying → instant buying behavior change"],
        metrics: ["AOV per platform", "Delivery SLA vs industry avg", "Category strength per platform"],
        outputs: ["Platform comparison matrix", "Time vs price consumer decision chart", "Insight: 'Quick commerce increases frequency, not basket size'"],
      },
      {
        num: "7", icon: "🏪", title: "Impact on Offline Market",
        role: "Strategy Analyst",
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
        num: "9", icon: "🧬", title: "Prescriptive Strategy & deployment",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Prescriptive & Infrastructure",
        color: "#A855F7",
        what: "Automated scaling deployment configuration & cross-system loop checking",
        analyze: ["Dockerizing e-commerce catalog modules", "GitHub Actions pipeline configurations for web assets", "Auto-scaling web traffic limits"],
        metrics: ["Infrastructure response latency (ms)", "Rolling deployment success rate %", "Resource efficiency"],
        outputs: ["Docker Compose templates", "GitHub Actions deployment logs", "System monitoring dashboard"]
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
      { section: "Deployment Pipeline", role: "Cloud / DevOps Engineer" },
    ]
  },
  {
    id: "bpl",
    emoji: "🎸",
    title: "Band Premier League (BPL)",
    subtitle: "Music · Market · Product · Revenue · Scheduling Algorithm · UI Design",
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
        role: "SDE (Intern)",
        analyticsType: "Predictive & Prescriptive",
        color: "#A855F7",
        what: "The 'IPL System' layer — slot optimization algorithm",
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
        num: "6", icon: "🟢", title: "Figma Component & UI Mapping",
        role: "UI/UX Designer",
        analyticsType: "Interactive Prototypes",
        color: "#D946EF",
        what: "Designing the booking portal layout and interactive slots schedule",
        analyze: ["Mobile-first layout sizing", "Typography systems for venue maps", "Figma component auto-layout constraints"],
        metrics: ["Usability index", "Interactive transitions latency (ms)", "Interface accessibility rating"],
        outputs: ["Figma interactive high-fidelity dashboard prototype", "UI component library specifications", "Design token variables spreadsheet"]
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
        role: "Strategy Analyst",
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
      { section: "Macro Impact", role: "Strategy Analyst" },
      { section: "Matchmaking Algorithm", role: "SDE (Intern)" },
      { section: "Interface Design", role: "UI/UX Designer" }
    ]
  },
  {
    id: "telemetry",
    emoji: "🔌",
    title: "The Smart Telemetry Box",
    subtitle: "Embedded · Signal Processing · Network Protocols · Time-Series DB · Real-Time Dashboard",
    accentColor: "#06B6D4",
    deliverable: "Live Edge-Computing Sports Telemetry Tracker (ESP32/STM32 + IMU sensor + MQTT + real-time Canvas charts)",
    metaInsight: '"Hardware is just the collector. The value is created in real-time signals, low-latency transmission, and edge analysis."',
    layers: [
      {
        num: "1", icon: "🔌", title: "Low-Level Hardware Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Register Configuration",
        color: "#06B6D4",
        what: "Accessing raw physical IMU data directly via I2C/SPI protocols on STM32/ESP32 register levels.",
        analyze: ["Clock configuration and register offsets", "I2C/SPI bus clock frequency timing", "Raw data output registers for acceleration and gyroscope vectors"],
        metrics: ["Data acquisition rate (Hz)", "Bus communication latency (us)", "Register read success rate %"],
        outputs: ["Working bare-metal I2C register driver in C", "Raw accelerometer x-y-z stream logs", "Timing verification graphs"]
      },
      {
        num: "2", icon: "⚙️", title: "Edge Filtering Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Signal Processing",
        color: "#06B6D4",
        what: "Implementing low-footprint Kalman or Complementary filters at the hardware edge to eliminate sensor noise.",
        analyze: ["IMU gyroscope drift over time", "High-frequency noise from motor vibrations", "Filter coefficients optimization for dynamic response"],
        metrics: ["Signal-to-noise ratio (SNR) lift (dB)", "Mathematical operation execution time (us)", "Memory allocation overhead (bytes)"],
        outputs: ["C implementation of Complementary/Kalman filter", "Filtered vs raw motion data overlay charts", "Optimized filter coefficient configurations"]
      },
      {
        num: "3", icon: "📦", title: "Packet Compression Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Data Optimization",
        color: "#06B6D4",
        what: "Serializing and compressing sensor streams to reduce wireless transmission payload sizes.",
        analyze: ["Bitwise packing algorithms for sensor floats", "Protobuf vs JSON serialization size comparison", "Frequency of delta-compression vs full updates"],
        metrics: ["Payload compression ratio", "Serialization/deserialization CPU cycles", "Packet drop rate under limited bandwidth"],
        outputs: ["Custom C bit-packing function", "Protobuf message definitions", "Compression efficiency benchmark report"]
      },
      {
        num: "4", icon: "📡", title: "Firmware Network Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Communication Protocols",
        color: "#06B6D4",
        what: "Establishing secure, lightweight MQTT network connections with the ESP32 Wi-Fi module.",
        analyze: ["Wi-Fi RSSI signal strength impact on transmission stability", "MQTT Quality of Service (QoS 0 vs 1 vs 2) performance tradeoffs", "Reconnection handshake time and backoff loops"],
        metrics: ["MQTT connection uptime %", "Average packet round-trip time (RTT)", "Power consumption during transmission (mA)"],
        outputs: ["Robust ESP32 Wi-Fi auto-reconnect logic", "MQTT publish/subscribe script in C/Arduino", "Network latency profile graph"]
      },
      {
        num: "5", icon: "🔀", title: "Broker & Ingestion Layer",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Infrastructure Routing",
        color: "#6366F1",
        what: "Setting up and scaling an MQTT Broker (Mosquitto) to route incoming device payloads to server streams.",
        analyze: ["Broker CPU/Memory load under high topic counts", "Rate-limiting rules for misbehaving edge nodes", "Access Control List (ACL) security mappings"],
        metrics: ["Concurrent device capacity", "Throughput rate (packets/sec)", "Broker queue size overflows"],
        outputs: ["Secure Mosquitto broker configuration script", "TLS certificate generation commands", "Throughput performance metrics Dashboard"]
      },
      {
        num: "6", icon: "⚡", title: "Backend Streaming Layer",
        role: "Backend Developer",
        analyticsType: "Event-Driven Processing",
        color: "#38BDF8",
        what: "Designing a Node.js and Socket.io microservice to stream telemetry data from MQTT queues to client dashboards.",
        analyze: ["Node.js event-loop blocking under high-frequency sockets", "Memory leakage across active socket connections", "Broker-to-Socket message propagation delay"],
        metrics: ["Websocket message latency (ms)", "CPU utilization % per 1k clients", "Active socket count"],
        outputs: ["Node.js server with integrated MQTT client & Websocket server", "Websocket message event payload schemas", "Latency profile reports"]
      },
      {
        num: "7", icon: "💾", title: "Time-Series Logging Layer",
        role: "Database Administrator",
        analyticsType: "Storage Optimization",
        color: "#10B981",
        what: "Configuring a time-series database (InfluxDB or TimescaleDB) to store high-frequency telemetry data efficiently.",
        analyze: ["Database write performance under continuous streams", "Partitioning strategies for raw metrics by device", "Data retention policies and downsampling intervals"],
        metrics: ["Write latency (ms)", "Disk compression ratio", "Index lookup query response times"],
        outputs: ["TimescaleDB partition and schema DDL", "InfluxDB downsampling continuous queries", "Storage usage forecasts"]
      },
      {
        num: "8", icon: "📊", title: "Real-Time Dashboard Layer",
        role: "Full Stack Developer",
        analyticsType: "Descriptive Visualization",
        color: "#2ECC71",
        what: "Building a React-based monitoring dashboard displaying real-time sports telemetry charts.",
        analyze: ["React component re-render performance for high-frequency chart inputs", "Canvas-based (ChartJS/HTML5 Canvas) vs SVG rendering speeds", "State update throttling rules"],
        metrics: ["Dashboard frame rate (FPS)", "Webpage memory utilization (MB)", "Dashboard loading speed (LCP)"],
        outputs: ["React dashboard with real-time Canvas charts", "Responsive telemetry tracking UI components", "Interactive speed and angle widgets"]
      },
      {
        num: "9", icon: "🎯", title: "Sports Analytics Layer",
        role: "Sports Analyst",
        analyticsType: "Predictive Analytics",
        color: "#EF4444",
        what: "Mapping accelerometer/gyroscope vector shapes to swing speeds and predicting athlete stroke types.",
        analyze: ["Vector acceleration signatures for different swings", "Classification accuracy of KNN/Random Forest models", "Features correlation (peak acceleration vs hit velocity)"],
        metrics: ["Model prediction accuracy %", "Inference delay on backend (ms)", "F1 score for swing classification"],
        outputs: ["Scikit-learn swing classification model", "Feature engineering python script", "Sports swing efficiency analysis case study"]
      }
    ],
    deliverables: [
      { icon: "🔌", label: "Telemetry Device", desc: "ESP32 firmware code and custom register drivers (C/C++)" },
      { icon: "🌐", label: "Real-time Site", desc: "Websocket streaming dashboard mapping bat motion vectors" },
      { icon: "📊", label: "Timescale DB", desc: "Dockerized PostgreSQL database storing millions of coordinate values" },
      { icon: "📄", label: "Analytical Case Study", desc: "'Edge Filtering and Kalman Drift Mitigation in Motion Tracking'" }
    ],
    roleMap: [
      { section: "Low-level / Firmware", role: "Embedded Systems & IoT Engineer" },
      { section: "Broker / Routing", role: "Cloud / DevOps Engineer" },
      { section: "Event Streaming", role: "Backend Developer" },
      { section: "DB Logging", role: "Database Administrator" },
      { section: "Frontend Dashboard", role: "Full Stack Developer" },
      { section: "Prediction Models", role: "AI / ML Engineer" }
    ]
  },
  {
    id: "threatshield",
    emoji: "🛡️",
    title: "The Live OWASP Threat Shield",
    subtitle: "Cybersecurity · Log Parsing Agent · Attack Emulation · Splunk / ELK SIEM · Active Hardening",
    accentColor: "#F43F5E",
    deliverable: "Deliberately vulnerable Node.js application + python automated scanner + raw log tailing intrusion dashboard",
    metaInsight: '"True security is not about writing a report. It is about actively monitoring access logs, parsing payloads, and detecting threats in real-time."',
    layers: [
      {
        num: "1", icon: "🕸️", title: "Vulnerable Application Layer",
        role: "Backend Developer",
        analyticsType: "Application Vulnerabilities",
        color: "#38BDF8",
        what: "Designing and deploying a Node.js full-stack web application deliberately configured with OWASP vulnerabilities.",
        analyze: ["SQL Injection entry points on login/search inputs", "Cross-Site Scripting (XSS) input reflection", "Insecure Session management and cookie tokens"],
        metrics: ["Vulnerability count", "Exploitation success rate %", "Session hijacking window (mins)"],
        outputs: ["Vulnerable Node.js web application code", "Vulnerability mapping diagram", "Local sandbox configuration script"]
      },
      {
        num: "2", icon: "💥", title: "Automated Attack Simulator",
        role: "Cybersecurity Analyst / SOC",
        analyticsType: "Threat Emulation",
        color: "#F43F5E",
        what: "Writing automated python scripts to systematically target vulnerabilities and generate attack traffic.",
        analyze: ["Brute-force password guessing algorithms", "SQLi evasion encoding (URL encoding, double encoding)", "XSS payload injection patterns"],
        metrics: ["Attack requests per minute", "Evasion detection rate", "Payload execution success rate %"],
        outputs: ["Python automated exploit scripts", "JSON catalog of payload vectors", "Traffic volume metrics graph"]
      },
      {
        num: "3", icon: "📝", title: "Log Formatting & Capture",
        role: "Database Administrator",
        analyticsType: "Audit Logging",
        color: "#10B981",
        what: "Configuring web servers (Nginx/Node) to write structured access logs detailing incoming headers and payloads.",
        analyze: ["Log schema requirements for forensics (IP, payload, headers, user-agent)", "Performance overhead of detailed logging", "Log rotation and permission locking"],
        metrics: ["Log entry generation latency (ms)", "Disk space footprint per 1M logs", "Log preservation rate %"],
        outputs: ["Nginx custom log format configurations", "Node.js Winston logging middleware", "Log rotation scripts"]
      },
      {
        num: "4", icon: "🕵️", title: "Log Analysis Agent",
        role: "Cybersecurity Analyst / SOC",
        analyticsType: "Behavioral Monitoring",
        color: "#F43F5E",
        what: "Building a Python monitoring daemon that tails active log files and parses them in real-time.",
        analyze: ["Regex matching efficiencies for large log files", "Buffer sizes and stream polling rates", "Event parsing schemas (extracting IP, timestamp, query string)"],
        metrics: ["Tailing latency (ms)", "Agent CPU utilization %", "Log parsing error rate %"],
        outputs: ["Python log-tailing background agent code", "Regex matching ruleset catalog", "Parsing test coverage suite"]
      },
      {
        num: "5", icon: "🛡️", title: "Signature Detection Engine",
        role: "Cybersecurity Analyst / SOC",
        analyticsType: "Intrusion Detection",
        color: "#F43F5E",
        what: "Developing detection algorithms to identify suspicious payloads (like SQLi strings, XSS scripts, or command characters).",
        analyze: ["SQL Injection signature patterns (e.g., `' OR '1'='1`)", "Script tags and event handlers (`<script>`, `onerror`) in queries", "Rate-based thresholds for brute-force tracking"],
        metrics: ["False positive rate %", "Detection accuracy (Precision/Recall)", "Signature matching speed (us)"],
        outputs: ["Security signature rules engine code", "Threat classification mapping", "False-positive analysis report"]
      },
      {
        num: "6", icon: "📢", title: "Alerting & Webhooks",
        role: "Backend Developer",
        analyticsType: "Notification Routing",
        color: "#38BDF8",
        what: "Integrating real-time webhook alerting to dispatch high-priority notifications on critical intrusion events.",
        analyze: ["Alert throttling thresholds to prevent alert fatigue", "Webhook routing payloads formatting", "Retry logic and logging of failed webhook posts"],
        metrics: ["Notification delivery latency (ms)", "Alert volume per incident", "Alert notification success rate %"],
        outputs: ["Alert dispatcher class code", "Slack/Discord webhook integration configurations", "Alert throttling schema"]
      },
      {
        num: "7", icon: "📊", title: "SIEM Indexing Layer",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Log Consolidation",
        color: "#6366F1",
        what: "Ingesting security events into an Elasticsearch & Kibana (ELK) or Splunk cluster for centralized tracking.",
        analyze: ["Elasticsearch index mapping configurations", "Query performance of security dashboards", "Retention filters and index rollups"],
        metrics: ["Index ingestion rate (events/sec)", "Search query response time (ms)", "Disk index compression efficiency"],
        outputs: ["Elasticsearch mapping schema JSON", "SIEM ingestion pipeline configs", "Retention cleanup script"]
      },
      {
        num: "8", icon: "🖥️", title: "Security Dashboard UI",
        role: "Full Stack Developer",
        analyticsType: "Security Visualization",
        color: "#2ECC71",
        what: "Designing an interactive React application displaying threat maps, attack graphs, and blocked IPs.",
        analyze: ["Live-updating React components for incoming attacks", "Geolocation API integration from IP addresses", "Charts layout (attack type bar graphs, logs table)"],
        metrics: ["UI update latency (ms)", "Browser page load time", "Active component state counts"],
        outputs: ["React threat dashboard dashboard code", "Interactive Leaflet map displaying attack locations", "Chart configurations (Recharts/Chart.js)"]
      },
      {
        num: "9", icon: "🔒", title: "Hardening & Active Mitigation",
        role: "Cybersecurity Analyst / SOC",
        analyticsType: "Active Mitigation",
        color: "#F43F5E",
        what: "Implementing network and application-level controls to block attackers dynamically.",
        analyze: ["Dynamic firewall blocking script (iptables/fail2ban APIs)", "WAF (Web Application Firewall) rule structures", "SQL parameterized query patches"],
        metrics: ["Mitigation action response time (sec)", "% traffic blocked", "Security posture audit score"],
        outputs: ["Fail2ban dynamic blocking script", "SQL query parameterization patch files", "Security hardening compliance report"]
      }
    ],
    deliverables: [
      { icon: "🕸️", label: "Vulnerable App", desc: "React+Express web sandbox deliberately packed with 12 vulnerability ports" },
      { icon: "🐍", label: "Attack Simulator", desc: "Python automated attack scanner generating SQLi, XSS and directory traversals" },
      { icon: "🕵️", label: "Intrusion Agent", desc: "Live background log parsing agent written in Python with Discord integrations" },
      { icon: "📊", label: "SIEM Console", desc: "Local Kibana configuration dashboard index mapping ongoing attack vectors" }
    ],
    roleMap: [
      { section: "Vulnerable App Design", role: "Backend Developer" },
      { section: "Attack Scripts", role: "Cybersecurity Analyst / SOC" },
      { section: "Structured Logging", role: "Database Administrator" },
      { section: "Incident Monitoring", role: "Cybersecurity Analyst / SOC" },
      { section: "Central Logging SIEM", role: "Cloud / DevOps Engineer" },
      { section: "React Admin Shield", role: "Full Stack Developer" }
    ]
  },
  {
    id: "pipeline",
    emoji: "☁️",
    title: "The Auto-Scaling Multi-Service Pipeline",
    subtitle: "DevOps · multi-stage Docker · GitHub Actions CI/CD · AWS Architecture · Grafana Analytics",
    accentColor: "#6366F1",
    deliverable: "Automated containerized GitOps pipeline deploying three microservices onto AWS with Prometheus monitoring",
    metaInsight: '"Code that does not scale automatically is a liability. DevOps bridges raw code to robust, auto-scaling production infrastructure."',
    layers: [
      {
        num: "1", icon: "🐳", title: "Microservices Containerization",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Build Optimization",
        color: "#6366F1",
        what: "Writing optimized, secure multi-stage Dockerfiles for frontend web and backend API microservices.",
        analyze: ["Docker image layers and cache invalidation order", "Alpine/Distroless base images security", "Multi-stage build outputs sizing"],
        metrics: ["Docker image size (MB)", "Image build time (sec)", "Vulnerability scan count"],
        outputs: ["Multi-stage Dockerfile for React/Vite", "Multi-stage Dockerfile for Node.js", "Docker image size optimization logs"]
      },
      {
        num: "2", icon: "⛓️", title: "Multi-Service Orchestration",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Local Orchestration",
        color: "#6366F1",
        what: "Defining local multi-container environments using Docker Compose for developers.",
        analyze: ["Service startup order dependencies (DB -> API -> UI)", "Network isolating rules for internal services", "Persistent data volumes mappings"],
        metrics: ["Service launch boot time (sec)", "Network throughput (MB/sec)", "Disk mount latency"],
        outputs: ["Docker Compose development configuration script", "Environment variables template", "Startup sequence test logs"]
      },
      {
        num: "3", icon: "🔄", title: "CI Pipeline Quality Gates",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Quality Engineering",
        color: "#6366F1",
        what: "Designing GitHub Actions workflows to execute tests, audits, and formatting checks.",
        analyze: ["Test suite parallelization strategies", "Linting & formatting checks rulesets", "Code coverage analytics metrics"],
        metrics: ["Pipeline runtime (min)", "Test execution success rate %", "Code coverage %"],
        outputs: ["GitHub Actions CI workflow YAML", "Jest test runner configurations", "SonarQube/code quality reports"]
      },
      {
        num: "4", icon: "📦", title: "Container Registry Distribution",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Image Management",
        color: "#6366F1",
        what: "Setting up secure container registries (Docker Hub/AWS ECR) to host build images.",
        analyze: ["ECR IAM policies and credentials mapping", "Image tag numbering conventions (SHA vs SemVer)", "Image vulnerability lifecycle scanning"],
        metrics: ["Registry upload bandwidth", "Vulnerability count in images", "Registry access latency (ms)"],
        outputs: ["GitHub Actions push-to-ECR configuration", "AWS ECR registry configurations", "Image vulnerability scan metrics"]
      },
      {
        num: "5", icon: "☁️", title: "AWS Infrastructure Layer",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Cloud Architecture",
        color: "#6366F1",
        what: "Orchestrating virtual private networks, security groups, and cloud instances on AWS.",
        analyze: ["Subnetting splits (public vs private subnets)", "Security group rules (port 80/443 ingress, egress rules)", "IAM role boundary maps"],
        metrics: ["Provisioning runtime (min)", "AWS cost forecasts ($/month)", "Network latency between services (ms)"],
        outputs: ["AWS VPC Network Architecture Diagram", "Security group mappings", "IAM policy configuration files"]
      },
      {
        num: "6", icon: "🚢", title: "CD Rolling Deployments",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Release Management",
        color: "#6366F1",
        what: "Configuring GitOps automated deployment scripts for zero-downtime rolling updates.",
        analyze: ["Rolling vs Blue-Green update patterns", "Health check probes and startup delay parameters", "Database migration version control scripts"],
        metrics: ["Deployment cycle duration (sec)", "Deployment uptime during updates %", "Rollback execution speed (sec)"],
        outputs: ["GitOps deployment automation script", "Health check route endpoints in backend", "Zero-downtime test reports"]
      },
      {
        num: "7", icon: "⚖️", title: "Auto-Scaling & Load Balancing",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Resiliency Architecture",
        color: "#6366F1",
        what: "Setting up load balancers and auto-scaling rules to handle traffic spikes.",
        analyze: ["Auto-scaling thresholds (CPU > 70%, Memory > 80%)", "Load balancer health check intervals", "Target group registration speeds"],
        metrics: ["Auto-scaling response latency (sec)", "Server CPU/Memory load averages", "Load balancer response times (ms)"],
        outputs: ["Auto-scaling rule definitions", "AWS ALB configuration details", "Traffic spike simulation logs"]
      },
      {
        num: "8", icon: "📈", title: "Metrics Harvesting Layer",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Infrastructure Metrics",
        color: "#6366F1",
        what: "Deploying Prometheus nodes and exporters to continuously harvest system metrics.",
        analyze: ["Prometheus scraper intervals configuration", "Metrics cardinality constraints", "Storage requirements for historical metrics"],
        metrics: ["Metrics collection latency (ms)", "Scraping success rate %", "Card cardinality indices"],
        outputs: ["Prometheus configuration script", "Docker stats exporter configs", "Metrics extraction charts"]
      },
      {
        num: "9", icon: "📊", title: "Grafana Dashboards",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Infrastructure Analytics",
        color: "#6366F1",
        what: "Building rich analytical Grafana panels graphing cluster resource consumption and traffic spikes.",
        analyze: ["PromQL query efficiency for dashboard panels", "Alert manager routing thresholds", "Panel UI responsiveness layout"],
        metrics: ["Dashboard load latency (ms)", "Active alert count", "Panel query execution speed (ms)"],
        outputs: ["Grafana dashboard JSON exports", "PromQL alert definition files", "Infrastructure status reports"]
      }
    ],
    deliverables: [
      { icon: "🐳", label: "Docker Configs", desc: "Optimized Dockerfiles, multi-service Compose files, and network isolation setups" },
      { icon: "🔄", label: "GitActions CI/CD", desc: "Automated pipelines pushing versions to container registries and triggering cloud updates" },
      { icon: "☁️", label: "Terraform Specs", desc: "Declarative AWS cluster topology mapping VPCs, subnets, EC2 scales, and load balancers" },
      { icon: "📊", label: "Grafana Panel", desc: "Central server monitoring system collecting CPU, RAM, traffic, and error metrics" }
    ],
    roleMap: [
      { section: "Container Builds", role: "Cloud / DevOps Engineer" },
      { section: "Quality Testing CI", role: "Cloud / DevOps Engineer" },
      { section: "AWS Infrastructure", role: "Cloud / DevOps Engineer" },
      { section: "Scale Architecture", role: "Cloud / DevOps Engineer" },
      { section: "Grafana Analytics", role: "Cloud / DevOps Engineer" }
    ]
  },
  {
    id: "figma",
    emoji: "🎨",
    title: "High-Fidelity Interactive Figma Ecosystem",
    subtitle: "UI/UX · component library · auto-layout variables · interactive prototype · developer handoff",
    accentColor: "#D946EF",
    deliverable: "Complete modular design system and clickable responsive prototype for digital community/streaming platform",
    metaInsight: '"Design is not how it looks; it is how it behaves, scales across viewports, and maintains visual consistency across team handoffs."',
    layers: [
      {
        num: "1", icon: "👥", title: "User Research & Personas",
        role: "UI/UX Designer",
        analyticsType: "Qualitative Research",
        color: "#D946EF",
        what: "Conducting user interviews and constructing empathy maps and detailed target persona cards.",
        analyze: ["User pain points in current digital streaming apps", "Demographic variables (age, device familiarity)", "Core tasks and success criteria mapping"],
        metrics: ["User interview completion count", "Persona representative validation %", "Friction points identified count"],
        outputs: ["User Empathy Map templates", "3 detailed User Persona cards", "User Research Insights report"]
      },
      {
        num: "2", icon: "🗂️", title: "Information Architecture",
        role: "UI/UX Designer",
        analyticsType: "Navigational Architecture",
        color: "#D946EF",
        what: "Mapping app structures, navigation systems, and workflows using card sorting.",
        analyze: ["Navigation depth index tradeoffs", "Card sorting results and labeling hierarchies", "Search path efficiency models"],
        metrics: ["Navigation path length", "Task completion route efficiency", "Card categorization consensus %"],
        outputs: ["App Site Map Diagram", "Navigational Flow Chart layouts", "Card Sorting analysis matrix"]
      },
      {
        num: "3", icon: "✍️", title: "Low-Fidelity Wireframes",
        role: "UI/UX Designer",
        analyticsType: "Structural Ideation",
        color: "#D946EF",
        what: "Sketching quick mobile & desktop layouts to establish basic element spacing and visual hierarchy.",
        analyze: ["Layout grids (12-column desktop vs 4-column mobile)", "Placement priorities for key CTAs", "White-space ratios and density comparisons"],
        metrics: ["Wireframe iterations generated", "Validation session feedback count", "% area allocated to key actions"],
        outputs: ["18 desktop + mobile paper sketches", "Digital Low-Fidelity layout templates", "Structure evaluation notes"]
      },
      {
        num: "4", icon: "🎨", title: "Typography & Tokens stylesheet",
        role: "UI/UX Designer",
        analyticsType: "Design Standardization",
        color: "#D946EF",
        what: "Setting up a strict typography stylesheet, responsive spacing scales, and dark/light color variables.",
        analyze: ["Typography scale readability (12px to 48px modular scales)", "Contrast ratios for accessibility (WCAG AAA standards)", "Semantic naming rules for token variables"],
        metrics: ["WCAG contrast compliance %", "Figma variable count", "Style application consistency score %"],
        outputs: ["Figma typographic scale sheet", "Light/Dark mode color variable library", "Responsive spacing documentation"]
      },
      {
        num: "5", icon: "🧱", title: "Figma Component Library",
        role: "UI/UX Designer",
        analyticsType: "Component Engineering",
        color: "#D946EF",
        what: "Creating component libraries with state variants, auto-layout variables, and sizing constraints.",
        analyze: ["Auto-layout nesting strategies for cards", "Component variant properties design", "Responsive resizing rule sets (fill container, hug contents)"],
        metrics: ["Auto-layout usage rate %", "Dynamic component variant counts", "Library synchronization time (sec)"],
        outputs: ["Synchronized Figma component library", "Dynamic responsive UI card variants", "Component property maps"]
      },
      {
        num: "6", icon: "⚡", title: "Micro-Interactions Design",
        role: "UI/UX Designer",
        analyticsType: "Behavioral Design",
        color: "#D946EF",
        what: "Designing and animating fine-grained component micro-interactions in Figma.",
        analyze: ["Easing curves and duration timing (e.g. 200ms ease-out)", "Animated feedback on button clicks & inputs", "Hover state transitions and tooltip delays"],
        metrics: ["Interaction duration (ms)", "User click verification rates %", "Component micro-animation frames count"],
        outputs: ["Interactive Search Input components", "Figma prototype link showcasing transitions", "Micro-interaction timing sheet"]
      },
      {
        num: "7", icon: "📱", title: "Responsive Layout Mockups",
        role: "UI/UX Designer",
        analyticsType: "Viewport Adaptation",
        color: "#D946EF",
        what: "Adapting high-fidelity layout files across desktop (1440px), tablet (768px), and mobile (375px) breakpoints.",
        analyze: ["Hamburger menu vs navigation bar responsive breakpoints", "Content wrapping and card scaling limits", "Font scaling behaviors by viewport"],
        metrics: ["Breakpoints supported count", "Responsive grid compliance %", "Adaptability score %"],
        outputs: ["High-fidelity mobile layout designs", "High-fidelity tablet layouts", "High-fidelity desktop layouts"]
      },
      {
        num: "8", icon: "🔗", title: "High-Fidelity Interactive Prototype",
        role: "UI/UX Designer",
        analyticsType: "Interactive Simulation",
        color: "#D946EF",
        what: "Linking design pages together using smart-animate in Figma to model end-to-end user journeys.",
        analyze: ["Smart-animate transition flows", "Navigation link routing loops", "Prototype load speed optimizations"],
        metrics: ["Prototype interaction steps count", "Task completion rates on prototype %", "Prototype loading latency (sec)"],
        outputs: ["Fully clickable desktop user journey prototype link", "Fully clickable mobile prototype link", "User testing session log"]
      },
      {
        num: "9", icon: "📐", title: "Developer Handoff Guide",
        role: "UI/UX Designer",
        analyticsType: "Handoff Specification",
        color: "#D946EF",
        what: "Creating developer handoff specs detailing CSS variables, layout behaviors, and assets exports.",
        analyze: ["Figma Dev Mode annotations", "Assets exports formats (SVG, PNG)", "Accessibility guidelines check (WCAG)"],
        metrics: ["Handoff checklist compliance %", "Handoff review sessions count", "Handoff assets count"],
        outputs: ["Figma Handoff Specification notes", "Zip file of SVG/PNG assets", "WCAG compliance statement"]
      }
    ],
    deliverables: [
      { icon: "🎨", label: "Component Library", desc: "Structured Figma file detailing text scales, mode variables, and modular grid tokens" },
      { icon: "📱", label: "Interactive Prototype", desc: "End-to-end clickable flow mapping desktop streaming search and mobile filters" },
      { icon: "📄", label: "Research map", desc: "'Empathy maps, user journeys, personas, and navigation depth analysis report'" }
    ],
    roleMap: [
      { section: "Audience Profiling", role: "UI/UX Designer" },
      { section: "App Structure Map", role: "UI/UX Designer" },
      { section: "Visual Style Sheet", role: "UI/UX Designer" },
      { section: "Library Architecture", role: "UI/UX Designer" },
      { section: "Responsive Grids", role: "UI/UX Designer" },
      { section: "Clickable Journeys", role: "UI/UX Designer" }
    ]
  }
];

// export default projectsData;
