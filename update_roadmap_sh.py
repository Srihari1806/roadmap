import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v7.1) - HYPER-PRECISION
# ─────────────────────────────────────────────────────────────────

# 1. CURRICULA & TOPICS
tuf_dsa_topics = [
    "Basics - Language", "Logic Building", "STL/Collections", "Selection Sort", "Bubble Sort", 
    "Insertion Sort", "Easy Arrays", "Medium Arrays", "Hard Arrays", "BS on 1D Arrays", 
    "BS on Answers", "BS on 2D Arrays", "Strings - Basic", "Strings - Medium",
    "Singly LL", "Doubly LL", "Medium LL Problems", "Basic Recursion", "Subsets",
    "Bit Manipulation", "Stack and Queues", "Sliding Window"
]

tuf_apt_topics = [
    "Number Series", "Missing Numbers", "Odd One Out", "Coding-Decoding", "Blood Relations",
    "Direction Sense", "Syllogism", "Seating Arrangement", "Percentages", "Profit & Loss", 
    "Ratio & Proportion", "Time & Work", "Time & Distance", "Data Interpretation"
]

ibm_schedule = [
    {"name": "C1: Intro to Data Analytics", "hours": 11, "days": 4, "link": "https://www.coursera.org/learn/introduction-to-data-analytics"},
    {"name": "C2: Excel Basics", "hours": 13, "days": 4, "link": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm"},
    {"name": "C3: Data Viz with Excel & Cognos", "hours": 16, "days": 5, "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos"},
    {"name": "C4: Python for Data Science", "hours": 24, "days": 8, "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai"},
    {"name": "C5: Python Project", "hours": 7, "days": 2, "link": "https://www.coursera.org/learn/python-project-for-data-science"},
    {"name": "C6: Databases and SQL", "hours": 18, "days": 6, "link": "https://www.coursera.org/learn/sql-data-science"},
    {"name": "C7: Data Analysis with Python", "hours": 17, "days": 6, "link": "https://www.coursera.org/learn/data-analysis-with-python"},
    {"name": "C8: Data Viz with Python", "hours": 19, "days": 6, "link": "https://www.coursera.org/learn/python-for-data-visualization"},
    {"name": "C9: Capstone Project", "hours": 20, "days": 7, "link": "https://www.coursera.org/learn/ibm-data-analyst-capstone-project"},
    {"name": "C10: Generative AI", "hours": 8, "days": 3, "link": "https://www.coursera.org/learn/generative-ai-enhance-your-data-analytics-career"},
    {"name": "C11: Career Guide & Interview", "hours": 10, "days": 5, "link": "https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-analyst"}
]

math_stats_curriculum = [
    {"task": "Mean, Median, Mode", "desc": "Foundational stats: Central tendencies and data distributions.", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Std Deviation & MAD", "desc": "Measuring variance: How spread out is your data?", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Dist & Z Score", "desc": "Bell curves: Probability, standardizing, and confidence.", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm Basics", "desc": "Essential for handling skewed financial/engagement data.", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "A/B Testing", "desc": "Hypothesis testing in the real world: Which version wins?", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Hypothesis Testing", "desc": "Validating claims: P-values and significance levels.", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"}
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
tuf_apt_link = "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning&sidebar=open"
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
        apt = tuf_apt_topics[day_idx % len(tuf_apt_topics)]
        math = math_stats_curriculum[day_idx % len(math_stats_curriculum)]
        ibm = ibm_daily[day_idx % len(ibm_daily)] if day_idx < len(ibm_daily) else ibm_daily[-1]
        
        p_name = "IPL Analytics" if day_idx < 21 else ("OTT Dashboard" if day_idx < 42 else "E-com Platform")
        statements = project_statements.get(p_name, project_statements["IPL Analytics"])
        rot_step = day_idx % 3
        
        type_labels = ["Analyse", "Build", "Output"]
        p_task = f"🏗️ {p_name}: {type_labels[rot_step].upper()}"
        p_desc = " | ".join(statements[type_labels[rot_step]])

        tasks = [
            {"time": "6–9am", "task": f"🎓 IBM: {ibm['name']}", "type": "ibm", "link": ibm['link'], "desc": f"3-hour session on {ibm['name']}. Progress: {round((day_idx/60)*100)}% of Cert."},
            {"time": "9–10am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link, "desc": f"Revision: {dsa} via TUF A2Z Sheet."},
            {"time": "10–11am", "task": f"🧠 Aptitude: {apt}", "type": "aptitude", "link": tuf_apt_link, "desc": f"Logical Reasoning: {apt} via TUF Plus."},
            {"time": "11am–12pm", "task": f"📊 Math: {math['task']}", "type": "math", "link": math['link'], "desc": math['desc']},
            {"time": "1–4pm", "task": p_task, "type": "project", "desc": p_desc},
            {"time": "4–6pm", "task": f"🛠️ SQL Revision", "type": "sql", "link": tuf_sql_link, "desc": "Project-specific SQL queries on TUF."}
        ]
        
        days.append({
            "day": day_num,
            "title": f"Day {day_num}: {dsa} & {ibm['name']}",
            "tasks": tasks,
            "outcome": f"Track mastery and {p_name} execution."
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
