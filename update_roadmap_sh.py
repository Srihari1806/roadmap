import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v8.2) - MOCK TEST EXPANSION
# ─────────────────────────────────────────────────────────────────

# 1. CURRICULA DEFINITIONS
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

# COMPREHENSIVE APTITUDE CURRICULUM (NO REPETITION + 60 MOCKS)
tuf_apt_curriculum = []

# Core Lessons (Logical, Quant, Verbal)
lessons = [
    {"topic": "LR: Number Series", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Number System", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Sentence Rearrangement", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/passage-sentence-rearrangement/basic?subject=verbal-ability"},
    {"topic": "LR: Missing Numbers", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Percentages", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/percentages/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Reading Comprehension", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/reading-comprehension/basic?subject=verbal-ability"},
    {"topic": "LR: Odd One Out", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Profit & Loss", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/profit-loss/basic?subject=quantitative-aptitude"},
    {"topic": "LR: Coding-Decoding", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/coding-decoding/basic?subject=logical-reasoning"},
    {"topic": "Quant: Ratio & Proportion", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/ratio-proportion/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Grammar & Usage", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/grammar/basic?subject=verbal-ability"},
    {"topic": "LR: Blood Relations", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/blood-relations/basic?subject=logical-reasoning"},
    {"topic": "Quant: Time & Work", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/time-work/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Vocabulary", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/vocabulary/basic?subject=verbal-ability"},
    {"topic": "LR: Direction Sense", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/direction-sense/basic?subject=logical-reasoning"},
    {"topic": "Quant: Time & Distance", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/time-distance/basic?subject=quantitative-aptitude"},
    {"topic": "LR: Syllogism", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/syllogism/basic?subject=logical-reasoning"},
    {"topic": "Quant: Data Interpretation", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/data-interpretation/basic?subject=quantitative-aptitude"},
    {"topic": "LR: Seating Arrangement", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/seating-arrangement/basic?subject=logical-reasoning"},
]
tuf_apt_curriculum.extend(lessons)

# Inject Mocks (20 for each category)
for i in range(1, 21):
    tuf_apt_curriculum.append({"topic": f"Quant Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/quantitative-aptitude/mock-{i}-aptitude?subject=mock-test"})
    tuf_apt_curriculum.append({"topic": f"LR Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/logical-reasoning/mock-{i}-logical?subject=mock-test"})
    tuf_apt_curriculum.append({"topic": f"Verbal Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/verbal-ability/mock-{i}-verbal?subject=mock-test"})

# (IBM schedule, math curriculum, project statements, phase titles follow same logic as v8.1)
ibm_schedule = [
    {"name": "C1: Intro to Data Analytics", "days": 4, "link": "https://www.coursera.org/learn/introduction-to-data-analytics", "desc": "Course 1: Exploring roles, data types, and the analyst ecosystem."},
    {"name": "C2: Excel Basics", "days": 4, "link": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm", "desc": "Course 2: Mastering data cleaning, formulas, and spreadsheet logic."},
    {"name": "C3: Data Viz with Excel & Cognos", "days": 5, "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos", "desc": "Course 3: Building interactive dashboards and storytelling with data."},
    {"name": "C4: Python for Data Science", "days": 8, "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai", "desc": "Course 4: Python fundamentals, data structures, and foundational libraries."},
    {"name": "C5: Python Project", "days": 2, "link": "https://www.coursera.org/learn/python-project-for-data-science", "desc": "Course 5: Applying Python to a real-world stock/revenue analysis project."},
    {"name": "C6: Databases and SQL", "days": 6, "link": "https://www.coursera.org/learn/sql-data-science", "desc": "Course 6: Querying relational databases for professional insights."},
    {"name": "C7: Data Analysis with Python", "days": 6, "link": "https://www.coursera.org/learn/data-analysis-with-python", "desc": "Course 7: EDA, model development, and evaluation with Python."},
    {"name": "C8: Data Viz with Python", "days": 6, "link": "https://www.coursera.org/learn/python-for-data-visualization", "desc": "Course 8: Mastering Matplotlib, Seaborn, and Dash for reporting."},
    {"name": "C9: Capstone Project", "days": 7, "link": "https://www.coursera.org/learn/ibm-data-analyst-capstone-project", "desc": "Course 9: Final industry-style capstone following all data phases."},
    {"name": "C10: Generative AI", "days": 3, "link": "https://www.coursera.org/learn/generative-ai-enhance-your-data-analytics-career", "desc": "Course 10: Leveraging LLMs to automate cleaning and presentation."},
    {"name": "C11: Career Guide & Interview", "days": 5, "link": "https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-analyst", "desc": "Course 11: Professional branding and interview excellence."}
]

math_stats_curriculum = [
    {"task": "Mean, Median, Mode", "desc": "Stats 1: Central tendency concepts from the YT playlist.", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Std Deviation & MAD", "desc": "Stats 2: Data dispersion and consistency analysis.", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Dist & Z Score", "desc": "Stats 3: Standardizing datasets and probability modeling.", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm Basics", "desc": "Math 1: Scaling skewed data for linear modeling.", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "A/B Testing", "desc": "Analysis 1: Statistical validation for product experiments.", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Hypothesis Testing", "desc": "Analysis 2: Determining statistical significance levels.", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"}
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

phase_titles = {
    1: "Phase 1: Foundations & IPL Analysis",
    2: "Phase 2: Advanced SQL & IPL Build",
    3: "Phase 3: OTT Insights & Python Mastery",
    4: "Phase 4: OTT Build & Advanced Viz",
    5: "Phase 5: E-commerce Strategy & Capstone",
    6: "Phase 6: E-commerce Build & Gen AI",
    7: "Phase 7: Portfolio & Professional Branding",
    8: "Phase 8: Job Hunt & Interview Readiness"
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
            {"time": "9–10am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link, "desc": f"Master {dsa} patterns via TUF A2Z."},
            {"time": "10–11am", "task": f"🧠 Aptitude: {apt['topic']}", "type": "aptitude", "link": apt['link'], "desc": f"Revision: Master {apt['topic']} via Takeuforward Plus."},
            {"time": "11am–12pm", "task": f"📊 Math: {math['task']}", "type": "math", "link": math['link'], "desc": math['desc']},
            {"time": "1–4pm", "task": p_task, "type": "project", "desc": p_desc},
            {"time": "4–6pm", "task": f"🛠️ SQL Revision: {sql_sub}", "type": "sql", "link": tuf_sql_link, "desc": f"Master {sql_sub} techniques on TUF."}
        ]
        
        days.append({
            "day": day_num,
            "title": f"Day {day_num}: {dsa} & {sql_sub}",
            "tasks": tasks,
            "outcome": f"Built depth in {dsa} & {sql_sub}."
        })
        day_idx += 1
        
    if days:
        week_num = len(weeks_data) + 1
        weeks_data.append({
            "week": week_num,
            "label": phase_titles.get(week_num, f"Phase {week_num}"),
            "theme": "Execution",
            "color": "BLUE" if week_num%2==0 else "PURPLE",
            "days": days
        })

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
