import re
import json

def extract_projects(filename):
    try:
        with open(filename, encoding='utf-8') as f:
            text = f.read()
        m = re.search(r'const projectsData = \[(.*?)\];?\s*(?:// export default|const)', text, re.DOTALL)
        if not m:
            return ""
        content = m.group(1)
        
        parts = re.split(r'({\s*id:\s*["\']\w+["\'],?)', content)
        
        objs = {}
        for i in range(1, len(parts), 2):
            header = parts[i]
            body = parts[i+1]
            id_match = re.search(r'id:\s*["\'](\w+)["\']', header)
            if id_match:
                pid = id_match.group(1)
                full_str = header + body
                brace_count = 0
                end_idx = -1
                in_str = False
                escape = False
                for j, char in enumerate(full_str):
                    if escape:
                        escape = False
                        continue
                    if char == '\\':
                        escape = True
                        continue
                    if char in ('"', "'", '`'):
                        if not in_str:
                            in_str = char
                        elif in_str == char:
                            in_str = False
                    
                    if not in_str:
                        if char == '{':
                            brace_count += 1
                        elif char == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                end_idx = j
                                break
                if end_idx != -1:
                    objs[pid] = full_str[:end_idx+1]
        return objs
    except Exception as e:
        print("Error:", e)
        return {}

objs_html = extract_projects('index.html')
objs_js = extract_projects('projects_data.js')

all_objs = {}
all_objs.update(objs_js)
all_objs.update(objs_html)

hiremap_str = """{
    id: "hiremap",
    emoji: "💼",
    title: "Hiremap Portal",
    subtitle: "Placement · PRD · CI/CD · Firestore · Matching Algorithms",
    accentColor: "#10B981",
    deliverable: "Vercel Web App + Backlog + Case Study",
    metaInsight: '"Placement is not just a portal, it is an efficient student-job matching algorithm over scalable infrastructure."',
    layers: [
      {
        num: "1", icon: "📊", title: "Product Requirements & PRD",
        role: "Product Analyst",
        analyticsType: "Requirements Gathering",
        color: "#10B981",
        what: "Gathering user requirements from 50+ students to define PRD and align feature scopes.",
        analyze: ["Student pain points in placements", "Feature prioritization matrix", "Technical timelines mapping"],
        metrics: ["User interviews count", "Features prioritized", "Sprint timeline accuracy"],
        outputs: ["Product Requirements Document (PRD)", "Feature Backlog", "Sprint Timeline"]
      },
      {
        num: "2", icon: "🎨", title: "High-Fidelity Wireframes",
        role: "UI/UX Designer",
        analyticsType: "Interface Design",
        color: "#10B981",
        what: "Designing high-fidelity wireframes, responsive components and interactive layouts in Figma.",
        analyze: ["User journey flows", "Component library accessibility", "Responsive breakpoints"],
        metrics: ["Figma screens created", "Component reusability %", "WCAG compliance score"],
        outputs: ["Interactive Figma Prototype", "Design System Guidelines", "Developer Handoff Specs"]
      },
      {
        num: "3", icon: "✍️", title: "Landing Page Copywriting",
        role: "Copywriter",
        analyticsType: "Conversion Optimization",
        color: "#10B981",
        what: "Designed landing page headlines, CTA copy, and tooltips optimized to reduce student drop-offs.",
        analyze: ["Headline click-through rates", "A/B testing CTA variants", "Onboarding funnel drop-offs"],
        metrics: ["Landing page bounce rate", "Sign-up conversion %", "Time-to-onboard"],
        outputs: ["Copywriting Matrix", "A/B Test Results", "Optimized Landing Page Text"]
      },
      {
        num: "4", icon: "⚛️", title: "Frontend Architecture",
        role: "Full Stack Developer",
        analyticsType: "Component Development",
        color: "#10B981",
        what: "Implemented role-based auth, dynamic dashboards, and smooth UI transitions with Framer Motion.",
        analyze: ["React state management logic", "Framer Motion transition latency", "Role-based route protection"],
        metrics: ["Component render time (ms)", "Lighthouse performance score", "Dashboard load time"],
        outputs: ["React (Next.js) Web App", "Framer Motion animations", "Role-based Auth Wrapper"]
      },
      {
        num: "5", icon: "🗄️", title: "Backend API & Schema",
        role: "Backend Developer",
        analyticsType: "Database Engineering",
        color: "#10B981",
        what: "Implemented server-side API endpoints and Firestore schema rules to support recruitment pipelines.",
        analyze: ["NoSQL collection schemas", "API endpoint rate limiting", "Data fetching optimizations"],
        metrics: ["API response time (ms)", "Database read/write efficiency", "Endpoint error rate %"],
        outputs: ["Firestore Schema", "Serverless API Routes", "Backend Architecture Diagram"]
      },
      {
        num: "6", icon: "🤖", title: "Student-Job Matching Engine",
        role: "AI / ML Engineer",
        analyticsType: "Recommendation Systems",
        color: "#10B981",
        what: "Engineered keyword-matching algorithms and TF-IDF profile similarity scores to match students with jobs.",
        analyze: ["Resume parsing efficiency", "TF-IDF similarity distribution", "Job description keyword mapping"],
        metrics: ["Match accuracy %", "Algorithm execution time (ms)", "User satisfaction score"],
        outputs: ["Matching Algorithm Script", "Profile Similarity Matrix", "Recommendation Engine"]
      },
      {
        num: "7", icon: "🛡️", title: "RBAC & Security Auditing",
        role: "Cybersecurity Analyst / SOC",
        analyticsType: "Threat Modeling",
        color: "#10B981",
        what: "Audited role-based access control (RBAC) and Firestore security rules to prevent unauthorized data access.",
        analyze: ["OWASP top 10 vulnerabilities", "Firestore security rules coverage", "Session hijacking risks"],
        metrics: ["Security vulnerabilities found", "RBAC compliance %", "Audit completion time"],
        outputs: ["Security Audit Report", "Hardened Firestore Rules", "Threat Modeling Diagram"]
      },
      {
        num: "8", icon: "📈", title: "Usage Metrics & Logging",
        role: "Database Administrator",
        analyticsType: "Operational Analytics",
        color: "#10B981",
        what: "Connected Firebase database schema metrics, logging average registration counts and active session patterns.",
        analyze: ["Daily active users (DAU)", "Session length distributions", "Database query bottlenecks"],
        metrics: ["DAU / MAU ratio", "Average session duration", "Query latency (ms)"],
        outputs: ["Analytics Dashboard", "Usage Metrics Report", "Database Optimization Logs"]
      },
      {
        num: "9", icon: "☁️", title: "CI/CD & Deployment",
        role: "Cloud / DevOps Engineer",
        analyticsType: "Deployment Pipeline",
        color: "#10B981",
        what: "Designed CI/CD build scripts in GitHub Actions and configured Vercel deployment pipelines.",
        analyze: ["Build caching efficiency", "Automated test coverage in CI", "Deployment rollback mechanisms"],
        metrics: ["CI build time (sec)", "Deployment success rate %", "Test coverage %"],
        outputs: ["GitHub Actions YAML", "Vercel Deployment URL", "CI/CD Pipeline Architecture"]
      }
    ],
    deliverables: [
      { icon: "🌐", label: "Live Web App", desc: "Vercel-hosted Hiremap portal for students and recruiters" },
      { icon: "📄", label: "Product Backlog", desc: "Detailed PRD, wireframes, and feature sprints" },
      { icon: "📊", label: "Case Study", desc: "'Building an intelligent student placement matching engine'" }
    ],
    roleMap: [
      { section: "PRD & Features", role: "Product Analyst" },
      { section: "Wireframes", role: "UI/UX Designer" },
      { section: "Frontend Dev", role: "Full Stack Developer" },
      { section: "Matching AI", role: "AI / ML Engineer" },
      { section: "CI/CD Pipeline", role: "Cloud / DevOps Engineer" }
    ]
  }"""

sahitya_str = """{
    id: "sahitya",
    emoji: "✍️",
    title: "Sahitya Rachanalu",
    subtitle: "Literature · Culture · Next.js · Content Strategy · SEO",
    accentColor: "#F4A72A",
    deliverable: "Next.js Web App + 8-Pillar Calendar",
    metaInsight: '"Content is king, but distribution and SEO are the kingdom. Sahitya digitizes cultural heritage for modern attention spans."',
    layers: [
      {
        num: "1", icon: "📅", title: "8-Pillar Content Strategy",
        role: "Product Analyst",
        analyticsType: "Content Planning",
        color: "#F4A72A",
        what: "Defining 8 pillars of cultural content from novels to cinema analysis to ensure daily structured publishing.",
        analyze: ["Content categories engagement potential", "Publishing frequency vs audience retention", "Evergreen vs trending topics balance"],
        metrics: ["Content pillars defined", "Planned posts per week", "Estimated monthly active readers"],
        outputs: ["8-Pillar Content Calendar", "Editorial Guidelines", "Topic Ideation Matrix"]
      },
      {
        num: "2", icon: "🎨", title: "Cinematic UI/UX Design",
        role: "UI/UX Designer",
        analyticsType: "Visual Experience",
        color: "#F4A72A",
        what: "Designing a distraction-free, aesthetically pleasing reading interface tailored for Telugu literature.",
        analyze: ["Typography readability for Telugu script", "Dark mode vs light mode usage", "Navigation simplicity for long-form reading"],
        metrics: ["Figma screens designed", "User satisfaction score (prototype)", "Average read time proxy"],
        outputs: ["High-Fidelity Wireframes", "Typography Style Guide", "Interactive Prototype"]
      },
      {
        num: "3", icon: "⚛️", title: "Next.js MDX Platform",
        role: "Full Stack Developer",
        analyticsType: "Frontend Engineering",
        color: "#F4A72A",
        what: "Building a performant static-site generated platform using Next.js and MDX for rich content formatting.",
        analyze: ["MDX parsing performance", "Static Site Generation (SSG) build times", "Component reusability within articles"],
        metrics: ["Lighthouse performance score", "Page load time (ms)", "Build time (sec)"],
        outputs: ["Next.js Web Application", "Custom MDX Components", "Vercel Deployment"]
      },
      {
        num: "4", icon: "🔍", title: "SEO & Growth Engine",
        role: "Growth Analyst",
        analyticsType: "Search Optimization",
        color: "#F4A72A",
        what: "Implementing technical SEO, meta tags, and schema markup to capture organic search traffic.",
        analyze: ["Keyword search volume (Telugu literature)", "On-page SEO factors (H1, meta descriptions)", "Backlink strategies"],
        metrics: ["Organic search ranking", "Click-through rate (CTR)", "Domain authority score"],
        outputs: ["SEO Strategy Document", "Schema Markup Implementation", "Keyword Target List"]
      },
      {
        num: "5", icon: "✍️", title: "Creative Storytelling",
        role: "Creative Writer",
        analyticsType: "Content Creation",
        color: "#F4A72A",
        what: "Publishing original short stories, poetry, and cinema deep-dives in engaging formats.",
        analyze: ["Narrative arc engagement", "Reader drop-off points", "Emotional resonance indicators"],
        metrics: ["Articles published", "Average read time (mins)", "Social shares per post"],
        outputs: ["Published Short Stories", "Cinema Analysis Articles", "Cultural Essays"]
      },
      {
        num: "6", icon: "📢", title: "Social Media Distribution",
        role: "Copywriter",
        analyticsType: "Audience Acquisition",
        color: "#F4A72A",
        what: "Creating viral hooks, Instagram carousels, and Twitter threads to drive traffic to the main platform.",
        analyze: ["Platform-specific algorithm preferences", "Best times to post", "Engagement rate by post format"],
        metrics: ["Social media follower growth", "Referral traffic %", "Engagement rate"],
        outputs: ["Social Media Calendar", "Viral Hook Templates", "Platform-specific Copy"]
      },
      {
        num: "7", icon: "📊", title: "Readership Analytics",
        role: "Data Analyst",
        analyticsType: "User Behavior Tracking",
        color: "#F4A72A",
        what: "Integrating Google Analytics to track readership patterns, most popular pillars, and bounce rates.",
        analyze: ["Traffic sources (Organic vs Social)", "Bounce rate by content type", "User demographics and location"],
        metrics: ["Monthly page views", "Bounce rate %", "Pages per session"],
        outputs: ["GA4 Dashboard", "Monthly Readership Report", "Audience Insights"]
      },
      {
        num: "8", icon: "☁️", title: "Automated Deployments",
        role: "Cloud / DevOps Engineer",
        analyticsType: "CI/CD Infrastructure",
        color: "#F4A72A",
        what: "Setting up automated GitHub-to-Vercel deployment pipelines for seamless content updates.",
        analyze: ["Git branch strategies", "Automated testing before deployment", "Vercel edge caching"],
        metrics: ["Deployment success rate %", "Time to publish (mins)", "Cache hit ratio"],
        outputs: ["GitHub Actions CI", "Vercel Configurations", "Automated Publishing Workflow"]
      },
      {
        num: "9", icon: "💰", title: "Monetization Strategy",
        role: "Business Analyst",
        analyticsType: "Revenue Modeling",
        color: "#F4A72A",
        what: "Planning future monetization avenues like premium content, audiobooks, and merchandise.",
        analyze: ["Willingness to pay for premium content", "Ad revenue vs subscription models", "Merchandise profit margins"],
        metrics: ["Projected ARPU", "Conversion rate to premium %", "Customer lifetime value (CLV)"],
        outputs: ["Monetization Roadmap", "Revenue Projections", "Subscription Model Design"]
      }
    ],
    deliverables: [
      { icon: "🌐", label: "Live Platform", desc: "Next.js web app deployed on Vercel" },
      { icon: "📅", label: "Content Calendar", desc: "8-pillar strategy mapping 3 months of posts" },
      { icon: "📝", label: "Published Articles", desc: "Initial batch of stories and cinema reviews" }
    ],
    roleMap: [
      { section: "Content Strategy", role: "Product Analyst" },
      { section: "Platform Dev", role: "Full Stack Developer" },
      { section: "SEO & Growth", role: "Growth Analyst" },
      { section: "Creative Writing", role: "Creative Writer" },
      { section: "Analytics", role: "Data Analyst" }
    ]
  }"""

order = ['ipl', 'ott', 'ecom', 'bpl', 'hiremap', 'sahitya', 'musicbat', 'foleystage', 'stagecontroller', 'telemetry', 'threatshield', 'pipeline']

final_js = "const projectsData = [\n"
for i, pid in enumerate(order):
    if pid == 'hiremap':
        obj_str = hiremap_str
    elif pid == 'sahitya':
        obj_str = sahitya_str
    elif pid in all_objs:
        obj_str = all_objs[pid]
    else:
        print(f"MISSING {pid}")
        obj_str = "{}"
    
    final_js += "  " + obj_str
    if i < len(order) - 1:
        final_js += ",\n"
    else:
        final_js += "\n"
final_js += "];\n"

with open('projects_data.js', 'w', encoding='utf-8') as f:
    f.write(final_js)
    
print("Successfully wrote 12 projects to projects_data.js")
