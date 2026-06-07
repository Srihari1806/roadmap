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
    id: "musicbat",
    emoji: "🏏🎹",
    title: "The Musical Swing Analyst",
    subtitle: "Cricket · Music · Electronics · CSE · Edge Computing · Machine Learning",
    accentColor: "#06B6D4",
    deliverable: "Real-time cricket swing-to-audio feedback attachment (ESP32 + IMU + KNN edge classifier + Web Audio synth)",
    metaInsight: '"A cricket swing is not just physics—it has an inherent rhythm. Edge computing translates kinetics into acoustics."',
    layers: [
      {
        num: "1", icon: "🔌", title: "Low-Level Hardware Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Register Configuration",
        color: "#06B6D4",
        what: "Accessing raw physical IMU sensor vectors (MPU6050) over I2C on ESP32 registers.",
        analyze: ["I2C clock frequency configurations", "GPIO pin mappings and register offsets", "Direct buffer reads for accelerometer and gyroscope vectors"],
        metrics: ["Sensor polling rate (Hz)", "I2C read latency (us)", "Register transmission success rate %"],
        outputs: ["Working bare-metal MPU6050 I2C driver in C++", "Raw sensor streaming register logs", "Timing verification reports"]
      },
      {
        num: "2", icon: "⚙️", title: "Edge Filtering Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Signal Processing",
        color: "#06B6D4",
        what: "Implementing low-footprint Kalman or Complementary filters at the hardware edge to eliminate sensor noise.",
        analyze: ["IMU gyroscope drift profiles over time", "High-frequency noise from bat contact vibrations", "Filter coefficients optimization for dynamic response"],
        metrics: ["Signal-to-noise ratio (SNR) lift (dB)", "Mathematical execution time on ESP32 (us)", "Filter RAM overhead (bytes)"],
        outputs: ["C++ Complementary/Kalman filter class code", "Filtered vs raw motion data overlay graphs", "Noise profile benchmarks"]
      },
      {
        num: "3", icon: "🤖", title: "On-Device KNN Classifier",
        role: "AI / ML Engineer",
        analyticsType: "Edge Inference",
        color: "#14B8A6",
        what: "Running a low-footprint KNN classifier model on the ESP32 to recognize swing type.",
        analyze: ["Feature vectors sizing (accel peaks, angular velocity integration)", "Fixed-point math optimizations for embedded CPU", "Classification boundary margins"],
        metrics: ["Classification accuracy %", "Edge model inference delay (ms)", "Flash/RAM storage footprint (KB)"],
        outputs: ["Trained KNN model header file in C++", "Feature extraction python script", "Model accuracy analysis charts"]
      },
      {
        num: "4", icon: "📡", title: "Low-Power Telemetry Layer",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Low-Power Telemetry",
        color: "#06B6D4",
        what: "Establishing low-latency WebSockets connections to stream motion datasets from ESP32 to server gateways.",
        analyze: ["Wi-Fi RSSI signal strength impact on socket stability", "Protocol overhead of WebSocket frames vs raw TCP", "ESP32 deep sleep/low-power modes during idle"],
        metrics: ["Socket uptime %", "Telemetry packet latency (ms)", "Active power consumption (mA)"],
        outputs: ["C++ WebSockets client script", "Auto-reconnection logic module", "Network performance graphs"]
      },
      {
        num: "5", icon: "🔀", title: "WebSocket Ingestion Layer",
        role: "Backend Developer",
        analyticsType: "Real-Time Stream Ingestion",
        color: "#38BDF8",
        what: "Designing a Node.js server to ingest high-frequency telemetry data streams with minimum serialization overhead.",
        analyze: ["Node.js event loop lag under concurrent streams", "Buffer pooling strategies for client data frames", "Memory usage profile under telemetry load"],
        metrics: ["Broker message rate (packets/sec)", "Event loop delay (ms)", "Ingestion server uptime %"],
        outputs: ["Node.js WebSocket server script", "API payload schemas", "Load test reports"]
      },
      {
        num: "6", icon: "💾", title: "Time-Series Storage",
        role: "Database Administrator",
        analyticsType: "Time-Series Logging",
        color: "#10B981",
        what: "Configuring a database (TimescaleDB) to store high-frequency telemetry data efficiently.",
        analyze: ["Database partition keys by device and session", "Write speed vs storage footprint compression ratios", "Downsampling algorithms for historic logs"],
        metrics: ["Write latency (ms)", "TimescaleDB table compression ratio", "Index query lookups speed (ms)"],
        outputs: ["SQL TimescaleDB table schemas & DDL", "Continuous downsampling SQL queries", "Disk usage forecast graphs"]
      },
      {
        num: "7", icon: "🎵", title: "Web Audio Synth Engine",
        role: "Full Stack Developer",
        analyticsType: "Audio DSP Synthesis",
        color: "#2ECC71",
        what: "Designing the Web Audio API synthesis logic to map sensor parameters directly to synthesized chords and sound envelopes.",
        analyze: ["Mapping bat speed to oscillator frequencies", "Mapping bat tilt angles to synthesizer audio filter cutoffs", "Dynamic sound envelope trigger logic based on swing impact peaks"],
        metrics: ["Audio scheduler latency (ms)", "Synth oscillator count", "Dynamic frequency range (Hz)"],
        outputs: ["JavaScript Web Audio synthesizer module", "Audio parameter mapping configuration sheet", "Audio wave visualization files"]
      },
      {
        num: "8", icon: "📊", title: "3D Swing Path visualizer",
        role: "Full Stack Developer",
        analyticsType: "3D Kinematics Rendering",
        color: "#2ECC71",
        what: "Building a React-based monitoring dashboard using HTML5 Canvas/Three.js to render real-time swing vectors and audio waveforms.",
        analyze: ["Three.js 3D trace rendering execution speeds", "Chart state update throttling parameters", "Device screen layout responsiveness"],
        metrics: ["Dashboard rendering speed (FPS)", "Webpage memory utilization (MB)", "UI loading speed (LCP)"],
        outputs: ["React dashboard component code", "HTML5 Canvas rendering scripts", "Waveform overlay UI widget code"]
      },
      {
        num: "9", icon: "🏏", title: "Sports Analytics & Insights",
        role: "Sports Analyst",
        analyticsType: "Predictive Analytics",
        color: "#EF4444",
        what: "Building player swing efficiency models benchmarking bat speed against hit quality.",
        analyze: ["Correlation between swing velocity and classification outcomes", "Impact of grip rotation on swing path consistency", "Identifying optimal swing paths for different bowlers"],
        metrics: ["Swing efficiency score", "Grip consistency index", "Strike rate lift prediction %"],
        outputs: ["Swing performance analysis notebook", "Interactive efficiency scatter plots", "Player recommendation reports"]
      }
    ],
    deliverables: [
      { icon: "🔌", label: "ESP32 firmware code", desc: "MPU6050 I2C register driver, Kalman filter, and WebSockets transmission client in C++" },
      { icon: "🌐", label: "Real-time Web App", desc: "React dashboard showing 3D swing paths, real-time wave envelopes, and Web Audio synths" },
      { icon: "📊", label: "TimescaleDB instance", desc: "Dockerized SQL database storing millions of high-frequency bat coordinate entries" },
      { icon: "📄", label: "Case Study (PDF)", desc: "'Kinetic Synthesis: Edge Filtering and Real-Time Motion-to-Audio Translation in Sports'" }
    ],
    roleMap: [
      { section: "Low-level / DSP Firmware", role: "Embedded Systems & IoT Engineer" },
      { section: "Edge ML Classification", role: "AI / ML Engineer" },
      { section: "WebSocket Event Streaming", role: "Backend Developer" },
      { section: "Time-Series Logging", role: "Database Administrator" },
      { section: "Audio Synth & Dashboard", role: "Full Stack Developer" },
      { section: "Performance Analytics", role: "Sports Analyst" }
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
      { icon: "📊", label: "ELK SIEM Dashboard", desc: "Dockerized Elasticsearch, Logstash and Kibana monitoring dynamic attack maps" }
    ],
    roleMap: [
      { section: "Vulnerable Platform", role: "Cybersecurity Analyst / SOC" },
      { section: "Attack Scripts", role: "Cybersecurity Analyst / SOC" },
      { section: "Ingestion Pipelines", role: "Cybersecurity Analyst / SOC" },
      { section: "SIEM Infrastructure", role: "Cybersecurity Analyst / SOC" },
      { section: "Threat Visualizations", role: "Cybersecurity Analyst / SOC" },
      { section: "Mitigation Rules", role: "Cybersecurity Analyst / SOC" }
    ]
  },
  {
    id: "stagecontroller",
    emoji: "🎸💡",
    title: "Audience-Driven Stage Controller",
    subtitle: "Music · Electronics · CSE · Distributed IoT · WebSockets · DMX lights",
    accentColor: "#6366F1",
    deliverable: "Distributed decibel-sensing ESP32 venue nodes controlling DMX stage lighting and guitar pedal effects in real-time",
    metaInsight: '"Live performances are a conversation between the band and the crowd. We make that conversation literal through hardware feedback loops."',
    layers: [
      {
        num: "1", icon: "🔌", title: "Acoustic Sensor Node Array",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Acoustic Sensor Integration",
        color: "#6366F1",
        what: "Interfacing MAX4466 sound sensors with ESP32 microcontrollers over ADC and internal sampling registers.",
        analyze: ["ADC sampling frequencies configurations", "Microphone pre-amp gain calibration", "Raw sound voltage measurements"],
        metrics: ["ADC sampling frequency (kHz)", "Voltage read latency (us)", "Sensor accuracy variance %"],
        outputs: ["C++ ADC sampling driver script", "Sound pressure voltage logs", "Microphone calibration reports"]
      },
      {
        num: "2", icon: "⚙️", title: "Edge FFT & DSP Analysis",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Frequency Filtering",
        color: "#6366F1",
        what: "Running Fast Fourier Transforms on-device to isolate crowd cheering frequencies from guitar sound.",
        analyze: ["FFT bin resolution optimization", "Cheering pitch frequency range filtering rules", "Digital bandpass filter configuration"],
        metrics: ["FFT processing delay (ms)", "Frequency isolation accuracy %", "ESP32 CPU core utilization %"],
        outputs: ["C++ FFT calculation class code", "Frequency distribution charts", "Bandpass filter configurations"]
      },
      {
        num: "3", icon: "📡", title: "Mesh Telemetry Gateway",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Mesh Networking",
        color: "#6366F1",
        what: "Configuring ESP-NOW wireless mesh networks to link distributed decibel nodes to a central receiver gateway.",
        analyze: ["ESP-NOW payload structure design", "Packet collision avoidance protocols", "Mesh network latency vs node density"],
        metrics: ["ESP-NOW packet loss %", "Average node-to-gateway latency (ms)", "Network recovery time (ms)"],
        outputs: ["ESP-NOW mesh networking sender/receiver code", "Node topology layout diagrams", "Latency profiling reports"]
      },
      {
        num: "4", icon: "🔀", title: "Telemetry Brokerage",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Telemetry Routing",
        color: "#6366F1",
        what: "Configuring MQTT brokers (Mosquitto) and TLS certificates to route encrypted venue decibel telemetry to server clusters.",
        analyze: ["MQTT broker configurations under TLS", "Topic routing naming schemas for zones", "Broker rate limits for edge clients"],
        metrics: ["TLS handshake latency (ms)", "Broker message rate (packets/sec)", "Broker CPU and memory consumption"],
        outputs: ["Mosquitto broker config files", "TLS certificates commands script", "Broker metrics dashboard"]
      },
      {
        num: "5", icon: "⚡", title: "WebSockets Real-time Hub",
        role: "Backend Developer",
        analyticsType: "Real-Time Broadcast",
        color: "#38BDF8",
        what: "Developing WebSockets telemetry hubs in Node.js to broadcast real-time audio parameters to visualizers.",
        analyze: ["Node.js socket connections pooling strategies", "Event-driven payload schemas layout", "Socket transmission performance profiles"],
        metrics: ["Socket broadcast latency (ms)", "Concurrent client capacity", "Server connection memory (MB)"],
        outputs: ["Node.js WebSockets server script", "Socket API schema JSON", "Network benchmark graphs"]
      },
      {
        num: "6", icon: "🤖", title: "Zone Clustering Engine",
        role: "AI / ML Engineer",
        analyticsType: "Spatial Analysis",
        color: "#14B8A6",
        what: "Implementing spatial clustering models to map venue energy zones and categorize crowd vibes dynamically.",
        analyze: ["K-Means clustering algorithms sizing", "Clustering convergence rates under live streams", "Venue zoning mappings configurations"],
        metrics: ["Model execution time (ms)", "Clustering accuracy %", "Vibe classification confidence"],
        outputs: ["Python spatial clustering module code", "Venue energy zoning scripts", "Model validation reports"]
      },
      {
        num: "7", icon: "💡", title: "DMX Stage Automation",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Hardware Controller Integration",
        color: "#6366F1",
        what: "Writing scripts interfacing with serial DMX light controllers to map crowd decibels to stage color schemes.",
        analyze: ["DMX512 serial communication protocol offsets", "Light dimming and color transitions timing rules", "Light controller serial write command structures"],
        metrics: ["DMX command latency (ms)", "Light transition speed (ms)", "Serial port command execution rates"],
        outputs: ["C++ DMX controller driver code", "DMX channel mappings configuration", "Light show timing diagrams"]
      },
      {
        num: "8", icon: "🎸", title: "Audio DSP Integration",
        role: "Full Stack Developer",
        analyticsType: "Audio Hardware Automation",
        color: "#2ECC71",
        what: "Interfacing guitar MIDI controllers over TCP/IP to automatically modulate delay times and reverb decays based on crowd volume.",
        analyze: ["MIDI command structures mapping", "Modulation envelope rules mapping crowd decibels to MIDI CC", "Audio processor MIDI latency"],
        metrics: ["MIDI transmission latency (ms)", "Modulation accuracy %", "Pedal response delay (ms)"],
        outputs: ["Python MIDI mapping automation script", "MIDI CC channel mapping catalog", "Audio response profiling reports"]
      },
      {
        num: "9", icon: "🖥️", title: "Energy Visualization Dashboard",
        role: "Full Stack Developer",
        analyticsType: "Spatial Energy Mapping",
        color: "#2ECC71",
        what: "Building a React WebGL dashboard displaying a spatial heatmap of venue decibel levels and light status.",
        analyze: ["WebGL heatmap rendering execution speeds", "React components re-renders optimization rules", "Responsive dashboard viewport scaling rules"],
        metrics: ["Visualization frame rate (FPS)", "WebGL load latency (ms)", "Dashboard layout accessibility compliance %"],
        outputs: ["React dashboard code with WebGL visualizer", "Responsive dashboard layout files", "Heatmap shaders files"]
      }
    ],
    deliverables: [
      { icon: "🔌", label: "ESP32 firmware code", desc: "ESP-NOW nodes, I2S microphone sampling and edge FFT calculations in C++" },
      { icon: "🌐", label: "WebSockets Dashboard", desc: "Live web interface plotting crowd response peaks and mapping venue energy zones" },
      { icon: "⚙️", label: "DMX & MIDI Serial Bridges", desc: "Hardware interface scripts controlling stage lights and guitar pedals based on decibels" },
      { icon: "📄", label: "Economic Case Study", desc: "'Crowd-Driven Venues: Quantifying Crowd Engagement and Automated Hardware Feedback in BPL'" }
    ],
    roleMap: [
      { section: "Decibel Sensor Nodes", role: "Embedded Systems & IoT Engineer" },
      { section: "Telemetry Brokerage", role: "Cloud / DevOps Engineer" },
      { section: "Zone Clustering", role: "AI / ML Engineer" },
      { section: "Light/MIDI Controller Bridge", role: "Embedded Systems & IoT Engineer" },
      { section: "Real-time Visual Portal", role: "Full Stack Developer" }
    ]
  },
  {
    id: "foleystage",
    emoji: "🎬👣",
    title: "Automated Foley Sound Stage",
    subtitle: "Cinema · Electronics · CSE · FSR Sensors · STM32 · Python Sound Engine",
    accentColor: "#D946EF",
    deliverable: "Smart Foley Stage with modular floor grids and ultrasonic sensors syncing live footsteps to video timelines",
    metaInsight: '"Sound stages historically required manual recording. Automation brings spatial sensor matrices to dynamic cinematic audio synchronization."',
    layers: [
      {
        num: "1", icon: "🔌", title: "Sensor Matrix Grid",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Hardware Multiplexing",
        color: "#D946EF",
        what: "Multi-sensor array of Force Sensitive Resistors (FSRs) mapping spatial grid pressure.",
        analyze: ["Multiplexing row-column select lines", "GPIO configuration logic for matrix scanners", "Vulnerability to analog signal crosstalk"],
        metrics: ["Sensor scan rate (Hz)", "Analogue read latency (us)", "Sensor crosstalk rejection (dB)"],
        outputs: ["STM32 multiplexer driver in C", "Raw FSR raw voltage streams", "Hardware grid circuit diagram"]
      },
      {
        num: "2", icon: "⚙️", title: "ADC & Register Calibration",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Analog-to-Digital Calibration",
        color: "#D946EF",
        what: "Register-level STM32 ADC setup to scan sensor nodes at high-frequency and calibrate thresholds.",
        analyze: ["ADC sampling timing configurations", "Direct Memory Access (DMA) channel mappings", "ADC noise filters ruleset design"],
        metrics: ["ADC resolution bits", "DMA buffer transfer speeds", "ADC read error rates %"],
        outputs: ["STM32 ADC register configuration C code", "ADC DMA calibration profiles", "Register timing graphs"]
      },
      {
        num: "3", icon: "📡", title: "Ultrasonic Distance Tracking",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Distance Telemetry",
        color: "#D946EF",
        what: "Interfacing ultrasonic sensors to track foot elevation and vertical velocity vectors.",
        analyze: ["Echo pulse width timing configurations", "GPIO trigger-echo state transitions", "Ultrasonic noise filtering algorithms"],
        metrics: ["Distance resolution (mm)", "Sensor readout delays (ms)", "Measurement accuracy tolerance %"],
        outputs: ["STM32 ultrasonic sensor driver code", "Ultrasonic distance logs", "Sensor timing diagrams"]
      },
      {
        num: "4", icon: "📦", title: "Serial Payload Packaging",
        role: "Embedded Systems & IoT Engineer",
        analyticsType: "Protocol Serialization",
        color: "#D946EF",
        what: "Custom binary packet serialization over serial ports to reduce transmission latency.",
        analyze: ["Bit-level packet formatting for payload fields", "Checksum calculations rules (CRC8/CRC16)", "Serial baud rates configurations"],
        metrics: ["Serialization processing overhead", "Serial bus utilization %", "Payload transmission checksum errors %"],
        outputs: ["C binary packaging function script", "CRC checksum logic files", "Serial performance reports"]
      },
      {
        num: "5", icon: "🔀", title: "Python Ingestion Daemon",
        role: "Backend Developer",
        analyticsType: "Event Routing Daemon",
        color: "#38BDF8",
        what: "Building a Python daemon to parse serial packets and bridge hardware events to a local WebSockets hub.",
        analyze: ["Python serial port listener threads", "WebSocket frame packaging formats", "Telemetry queue buffering rules"],
        metrics: ["Bridge latency (ms)", "CPU utilization % of bridge daemon", "Queue overflow packet drops %"],
        outputs: ["Python serial parser script", "WebSocket interface module", "Performance testing logs"]
      },
      {
        num: "6", icon: "🤖", title: "AI Footstep Classifier",
        role: "AI / ML Engineer",
        analyticsType: "Pattern Classification",
        color: "#14B8A6",
        what: "Training Python classification models to map pressure profiles and foot timings to specific surface textures and gait speeds.",
        analyze: ["Pressure wave features extraction rules", "SVM/Random Forest model optimization parameters", "Surface classification model margins"],
        metrics: ["Classification accuracy %", "Classifier inference latency (ms)", "Model validation confidence"],
        outputs: ["Trained Python classifier code", "Features extractor python script", "Model accuracy matrices"]
      },
      {
        num: "7", icon: "🔊", title: "Audio Sample Triggering",
        role: "Backend Developer",
        analyticsType: "Dynamic Audio Dispatch",
        color: "#38BDF8",
        what: "Deploying the Python audio player engine to load and trigger high-fidelity WAV foley samples dynamically.",
        analyze: ["WAV playback latency optimization", "Dynamic audio volume/pitch scaling mapping", "Concurrency limits of player threads"],
        metrics: ["Playback latency (ms)", "Concurrent sample trigger limits", "Sound buffer utilization %"],
        outputs: ["Python Pygame/SoundDevice playback engine code", "Audio configuration JSON sheets", "Sound latency benchmarks"]
      },
      {
        num: "8", icon: "🖥️", title: "React Control Dashboard",
        role: "Full Stack Developer",
        analyticsType: "Cinematic Visualizations",
        color: "#2ECC71",
        what: "Building a React-based Foley dashboard displaying live pressure maps, step coordinate trails, and sound envelope overlays.",
        analyze: ["React state rendering of coordinates trails", "WebGL pressure map overlay designs", "Video player timeline control sync hooks"],
        metrics: ["Dashboard render frame rate (FPS)", "Video-sound sync offset (ms)", "LCP dashboard speed"],
        outputs: ["React dashboard component code", "WebGL pressure grid shader files", "Timeline control widgets"]
      },
      {
        num: "9", icon: "📐", title: "Media Workflow Analytics",
        role: "Media Analyst",
        analyticsType: "User Experience Optimization",
        color: "#D946EF",
        what: "Designing developer handoff specifications and auditing workflow latencies.",
        analyze: ["Recruiter portfolio presentation designs", "Foley artist click workflow friction points", "Handoff assets specifications layouts"],
        metrics: ["Handoff accessibility ratings", "Foley artist task completion times (sec)", "Asset exports loading delays"],
        outputs: ["Portfolio design specification guides", "Foley workflow case study reports", "Demos video rendering guides"]
      }
    ],
    deliverables: [
      { icon: "🔌", label: "STM32 firmware code", desc: "C/C++ code configuring multiplexed ADCs and serial communications loops" },
      { icon: "🐍", label: "Python Sound Engine", desc: "Script parsing raw inputs, running step classifiers, and triggering dynamic WAV samples" },
      { icon: "🌐", label: "React Video Dashboard", desc: "Web app showcasing video-foley sync timeline, pressure maps, and delay parameters" },
      { icon: "📄", label: "Analytical Paper", desc: "'Automating Foley: Low-Latency Spatial Sensors and Step Profiling in Cinema Production'" }
    ],
    roleMap: [
      { section: "Multiplexed Sensors", role: "Embedded Systems & IoT Engineer" },
      { section: "Serial Ingestion & Sound Engine", role: "Backend Developer" },
      { section: "Step Weight Classification", role: "AI / ML Engineer" },
      { section: "Visual Control Portal", role: "Full Stack Developer" },
      { section: "Foley Workflow Design", role: "UI/UX Designer" }
    ]
  }
];

// export default projectsData;
