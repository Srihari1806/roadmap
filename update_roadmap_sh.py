import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v7.3) - SURGICAL SQL & DESCRIPTIONS
# ─────────────────────────────────────────────────────────────────

# 1. CURRICULA & TOPICS
tuf_dsa_topics = [
    "Basics - Language", "Logic Building", "STL/Collections", "Selection Sort", "Bubble Sort", 
    "Insertion Sort", "Easy Arrays", "Medium Arrays", "Hard Arrays", "BS on 1D Arrays", 
    "BS on Answers", "BS on 2D Arrays", "Strings - Basic", "Strings - Medium",
    "Singly LL", "Doubly LL", "Medium LL Problems", "Basic Recursion", "Subsets",
    "Bit Manipulation", "Stack and Queues", "Sliding Window"
]

tuf_sql_topics = [
    "Basic SELECT & Filtering", "Sorting & Limiting Data", "Inner Joins", "Left/Right/Full Joins",
    "GROUP BY & Aggregations", "HAVING Clause", "String Functions", "Date & Time Functions",
    "Subqueries & Nested Queries", "Common Table Expressions (CTEs)", "Window Functions: RANK",
    "Window Functions: ROW_NUMBER", "Set Operators (UNION/INTERSECT)", "CASE Statements"
]

tuf_apt_curriculum = [
    {"topic": "Logical: Number Series", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Number System", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Sentence Rearrangement", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/passage-sentence-rearrangement/basic?subject=verbal-ability"},
    {"topic": "Logical: Coding-Decoding", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/coding-decoding/basic?subject=logical-reasoning"},
    {"topic": "Quant: Percentages", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/percentages/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Reading Comprehension", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/reading-comprehension/basic?subject=verbal-ability"},
    {"topic": "Logical: Blood Relations", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/blood-relations/basic?subject=logical-reasoning"},
    {"topic": "Quant: Profit & Loss", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/profit-loss/basic?subject=quantitative-aptitude"},
    {"topic": "Mock Test: Aptitude 1", "link": "https://takeuforward.org/plus/mock-test/quantitative-aptitude/mock-1-aptitude?subject=mock-test"}
]

ibm_schedule = [
    {"name": "C1: Intro to Data Analytics", "days": 4, "link": "https://www.coursera.org/learn/introduction-to-data-analytics", "desc": "Understanding data analyst roles, tools, and the data ecosystem."},
    {"name": "C2: Excel Basics", "days": 4, "link": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm", "desc": "Mastering spreadsheets, formulas, and basic data cleaning."},
    {"name": "C3: Data Viz with Excel & Cognos", "days": 5, "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos", "desc": "Building interactive dashboards and visual stories using Excel/Cognos."},
    {"name": "C4: Python for Data Science", "days": 8, "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai", "desc": "Python foundations: types, loops, functions, and libraries for data."},
    {"name": "C5: Python Project", "days": 2, "link": "https://www.coursera.org/learn/python-project-for-data-science", "desc": "Applied Python: Building a real-world data science mini-project."},
    {"name": "C6: Databases and SQL", "days": 6, "link": "https://www.coursera.org/learn/sql-data-science", "desc": "Database foundations and SQL querying for data analysis."},
    {"name": "C7: Data Analysis with Python", "days": 6, "link": "https://www.coursera.org/learn/data-analysis-with-python", "desc": "EDA, Pandas, and data wrangling techniques in Python."},
    {"name": "C8: Data Viz with Python", "days": 6, "link": "https://www.coursera.org/learn/python-for-data-visualization", "desc": "Advanced plotting with Matplotlib, Seaborn, and Plotly."},
    {"name": "C9: Capstone Project", "days": 7, "link": "https://www.coursera.org/learn/ibm-data-analyst-capstone-project", "desc": "End-to-end data analysis project following the full lifecycle."},
    {"name": "C10: Generative AI", "days": 3, "link": "https://www.coursera.org/learn/generative-ai-enhance-your-data-analytics-career", "desc": "Using AI tools to accelerate cleaning, analysis, and reporting."},
    {"name": "C11: Career Guide & Interview", "days": 5, "link": "https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-analyst", "desc": "Professional branding, resume optimization, and mock interview prep."}
]

math_stats_curriculum = [
    {"task": "Mean, Median, Mode", "desc": "Central tendencies: How to represent average performance.", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Std Deviation & MAD", "desc": "Volatility & Spread: Measuring consistency in datasets.", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Dist & Z Score", "desc": "Probability: Identifying outliers and standardizing scales.", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm Basics", "desc": "Data Scaling: Handling extreme values and exponential growth.", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "A/B Testing", "desc": "Decision Science: Scientific validation of product changes.", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Hypothesis Testing", "desc": "Statistical Proof: Determining if results are significant.", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"}
]

project_statements = {
    "IPL Analytics": {
        "Analyse": ["Player consistency (5yrs)", "Venue win probability", "Toss impact on RR", "PP Spinner efficiency", "Death over strike rates"],
        "Build": ["KPI: Player Radar Chart", "SQL: Venue History Matrix", "Heatmap: Runs per Over", "Predictor: Score ranges", "KPI: Match-up Odds"],
        "Output": ["McKinsey-style Pitch Deck", "Strategic Team Report", "Batting Order Analysis", "Win-Probability Matrix", "Star Player ROI Study"]
    },
    "OTT Dashboard": {
        "Analyse": ["Churn rate by genre", "Sentiment vs Watch-time", "Completion rates by region", "Marketing ROI by platform", "Niche genre growth trends"],
        "Build": ["Viz: Churn Funnel", "SQL: Sentiment Join Table", "KPI: Region-wise retention", "Viz: Marketing ROI Scatter", "KPI: Growth Velocity"],
        "Output": ["Content Strategy Doc", "Marketing Optimization Report", "Retention Playbook", "Genre investment roadmap", "Competitor teardown"]
    }
}

tuf_dsa_link = "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
tuf_sql_link = "https://takeuforward.org/plus/sql-data-engineering"

# 2. GENERATE DATA
weeks_data = []
day_idx = 0
ibm_daily = []
for course in ibm_schedule:
    for _ in range(course['days']): ibm_daily.append(course)

for w in range(1, 10):
    days = []
    for d in range(1, 8):
        day_num = day_idx + 1
        if day_num > 60: break
        
        dsa = tuf_dsa_topics[day_idx % len(tuf_dsa_topics)]
        sql_sub = tuf_sql_topics[day_idx % len(tuf_sql_topics)]
        apt = tuf_apt_curriculum[day_idx % len(tuf_apt_curriculum)]
        math = math_stats_curriculum[day_idx % len(math_stats_curriculum)]
        ibm = ibm_daily[day_idx % len(ibm_daily)] if day_idx < len(ibm_daily) else ibm_daily[-1]
        
        p_name = "IPL Analytics" if day_idx < 21 else ("OTT Dashboard" if day_idx < 42 else "E-com Platform")
        statements = project_statements.get(p_name, project_statements["IPL Analytics"])
        rot_step = day_idx % 3
        
        type_labels = ["Analyse", "Build", "Output"]
        p_task = f"🏗️ {p_name}: {type_labels[rot_step].upper()}"
        p_desc = f"Solve 4-5 business problems for {p_name}: " + " | ".join(statements[type_labels[rot_step]])

        tasks = [
            {"time": "6–9am", "task": f"🎓 IBM: {ibm['name']}", "type": "ibm", "link": ibm['link'], "desc": ibm['desc']},
            {"time": "9–10am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link, "desc": f"Revision: Master {dsa} coding patterns via TUF A2Z Sheet."},
            {"time": "10–11am", "task": f"🧠 Aptitude: {apt['topic']}", "type": "aptitude", "link": apt['link'], "desc": f"Focus: Solve problems on {apt['topic']} via TUF Plus."},
            {"time": "11am–12pm", "task": f"📊 Math: {math['task']}", "type": "math", "link": math['link'], "desc": math['desc']},
            {"time": "1–4pm", "task": p_task, "type": "project", "desc": p_desc},
            {"time": "4–6pm", "task": f"🛠️ SQL Revision: {sql_sub}", "type": "sql", "link": tuf_sql_link, "desc": f"Practice surgical SQL: Master {sql_sub} techniques on TUF."}
        ]
        
        days.append({
            "day": day_num,
            "title": f"Day {day_num}: {dsa} & {sql_sub}",
            "tasks": tasks,
            "outcome": f"Track mastery in {dsa}, {sql_sub}, and {p_name} execution."
        })
        day_idx += 1
        
    if days:
        weeks_data.append({"week": w, "label": f"Phase {w}", "theme": "Execution", "color": "BLUE" if w%2==0 else "PURPLE", "days": days})

# 3. UPDATE FRONTEND
weeks_js = "const weeks = " + json.dumps(weeks_data, indent=2) + ";"
weeks_js = re.sub(r'"color": "(BLUE|PURPLE|GREEN|ACCENT|RED)"', r'"color": \1', weeks_js)

def update_file(path):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    s_idx = content.find("const weeks = [")
    if s_idx != -1:
        e_arr_idx = content.rfind("];", s_idx, content.find("const finalChecklist =")) + 2
        content = content[:s_idx] + weeks_js + "\n\n" + content[e_arr_idx:]
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print(f"Updated {os.path.basename(path)}")

update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx')
update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html')
