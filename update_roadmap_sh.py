import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v8.5) - PINPOINT RESOURCE LINKS
# ─────────────────────────────────────────────────────────────────

# 1. CURRICULA & TOPICS
tuf_dsa_link = "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
tuf_sql_link = "https://takeuforward.org/plus/sql-data-engineering"

tuf_dsa_topics = [
    "Arrays - Easy", "Arrays - Medium", "Arrays - Hard", "Binary Search - 1D", 
    "Binary Search - Answers", "Binary Search - 2D", "Strings - Basic", "Strings - Medium",
    "Singly LL", "Doubly LL", "LL Medium", "Recursion", "Subsets", "Bit Manipulation", 
    "Stacks", "Queues", "Sliding Window", "Hashing", "Two Pointers", "Greedy", 
    "Sorting", "Math for DSA", "Time Complexity", "Searching", "Heaps"
]

tuf_sql_topics = [
    "SELECT & Filtering", "Sorting & Limiting", "Aggregations Depth", "GROUP BY & HAVING",
    "Inner & Self Joins", "Left/Right Joins", "Subqueries", "Correlated Subqueries",
    "CTEs Foundations", "Window Functions: RANK", "Window Functions: LEAD/LAG",
    "Window Functions: Partition", "String Functions", "Date/Time Functions",
    "CASE Statements", "Set Operators", "Type Casting", "Handling NULLs",
    "Constraints & Keys", "Transaction Basics"
]

tuf_apt_curriculum = []
lessons = [
    {"topic": "LR: Number Series", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Number System", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/numbers/basic?subject=quantitative-aptitude"},
    {"topic": "Verbal: Sentence Rearrangement", "link": "https://takeuforward.org/plus/aptitude/verbal-ability/passage-sentence-rearrangement/basic?subject=verbal-ability"},
    {"topic": "LR: Missing Numbers", "link": "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning"},
    {"topic": "Quant: Percentages", "link": "https://takeuforward.org/plus/aptitude/quantitative-aptitude/percentages/basic?subject=quantitative-aptitude"}
]
tuf_apt_curriculum.extend(lessons)
for i in range(1, 21):
    tuf_apt_curriculum.append({"topic": f"Quant Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/quantitative-aptitude/mock-{i}-aptitude?subject=mock-test"})
    tuf_apt_curriculum.append({"topic": f"LR Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/logical-reasoning/mock-{i}-logical?subject=mock-test"})
    tuf_apt_curriculum.append({"topic": f"Verbal Mock {i}", "link": f"https://takeuforward.org/plus/mock-test/verbal-ability/mock-{i}-verbal?subject=mock-test"})

ibm_schedule = [
    {"name": "C1: Intro to Data Analytics", "days": 4, "link": "https://www.coursera.org/learn/introduction-to-data-analytics", "desc": "Ecosystem and tools."},
    {"name": "C2: Excel Basics", "days": 4, "link": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm", "desc": "Cleaning and formulas."},
    {"name": "C3: Data Viz with Excel & Cognos", "days": 5, "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos", "desc": "Storytelling with data."},
    {"name": "C4: Python for Data Science", "days": 8, "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai", "desc": "Python foundations."},
    {"name": "C5: Python Project", "days": 2, "link": "https://www.coursera.org/learn/python-project-for-data-science", "desc": "Applied implementation."},
    {"name": "C6: Databases and SQL", "days": 6, "link": "https://www.coursera.org/learn/sql-data-science", "desc": "Querying relational data."},
    {"name": "C7: Data Analysis with Python", "days": 6, "link": "https://www.coursera.org/learn/data-analysis-with-python", "desc": "EDA and modeling."},
    {"name": "C8: Data Viz with Python", "days": 6, "link": "https://www.coursera.org/learn/python-for-data-visualization", "desc": "Advanced plotting."},
    {"name": "C9: Capstone Project", "days": 7, "link": "https://www.coursera.org/learn/ibm-data-analyst-capstone-project", "desc": "End-to-end capstone."},
    {"name": "C10: Generative AI", "days": 3, "link": "https://www.coursera.org/learn/generative-ai-enhance-your-data-analytics-career", "desc": "Leveraging AI."},
    {"name": "C11: Career Guide & Interview", "days": 5, "link": "https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-analyst", "desc": "Professional excellence."}
]

math_stats_curriculum = [
    {"task": "Mean, Median, Mode", "desc": "Central tendency.", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Std Deviation & Variance", "desc": "Dataset volatility.", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Dist & Z-Score", "desc": "Standardizing scales.", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm & Scaling", "desc": "Handling skewed data.", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "A/B Testing Basics", "desc": "Scientific validation.", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Hypothesis Testing", "desc": "Significance determining.", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"},
    {"task": "Correlation", "desc": "Variable relationships.", "link": "https://www.youtube.com/watch?v=P_iMSYQonko"},
    {"task": "Central Limit Theorem", "desc": "Sampling foundations.", "link": "https://www.youtube.com/watch?v=JNm3M9CQWRE"}
]

project_resources = {
    "IPL Analytics": {
        "dataset": "https://www.kaggle.com/datasets/patrickb122/ipl-all-match-dataset",
        "info": "https://www.espncricinfo.com/series/indian-premier-league-2024-1410320",
        "Analyse": ["Player consistency (5yrs)", "Venue win probability", "Toss impact on RR", "PP Spinner efficiency", "Death over strike rates"],
        "Build": ["KPI: Player Radar Chart", "SQL: Venue History Matrix", "Heatmap: Runs per Over", "Predictor: Score ranges", "KPI: Match-up Odds"],
        "Output": ["McKinsey-style Pitch Deck", "Strategic Team Report", "Batting Order Analysis", "Win-Probability Matrix", "Star Player ROI Study"]
    },
    "OTT Dashboard": {
        "dataset": "https://www.kaggle.com/datasets/shivamb/netflix-shows",
        "info": "https://www.justwatch.com/in",
        "Analyse": ["Churn rate by genre", "Sentiment vs Watch-time", "Completion rates by region", "Marketing ROI by platform", "Niche genre growth trends"],
        "Build": ["Viz: Churn Funnel", "SQL: Sentiment Join Table", "KPI: Region-wise retention", "Viz: Marketing ROI Scatter", "KPI: Growth Velocity"],
        "Output": ["Content Strategy Doc", "Marketing Optimization Report", "Retention Playbook", "Genre investment roadmap", "Competitor teardown"]
    }
}

phase_titles = {
    1: "Phase 1: Foundations & IPL Analytics",
    2: "Phase 2: Advanced SQL & IPL Build",
    3: "Phase 3: OTT Insights & Python Mastery",
    4: "Phase 4: OTT Build & Advanced Viz",
    5: "Phase 5: E-commerce Strategy & Capstone",
    6: "Phase 6: E-commerce Build & Gen AI",
    7: "Phase 7: Portfolio & Professional Branding",
    8: "Phase 8: Job Hunt & Interview Readiness"
}

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
        p_res = project_resources.get(p_name, project_resources["IPL Analytics"])
        rot_step = day_idx % 3
        
        type_labels = ["Analyse", "Build", "Output"]
        p_task = f"🏗️ {p_name}: {type_labels[rot_step].upper()}"
        p_desc = f"Goal: " + " | ".join(p_res[type_labels[rot_step]])

        tasks = [
            {"time": "6–9am", "task": f"🎓 IBM: {ibm['name']}", "type": "ibm", "link": ibm['link'], "desc": ibm['desc']},
            {"time": "9–10am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link, "desc": f"Master {dsa}."},
            {"time": "10–11am", "task": f"🧠 Aptitude: {apt['topic']}", "type": "aptitude", "link": apt['link'], "desc": f"Revise {apt['topic']}."},
            {"time": "11am–12pm", "task": f"📊 Math: {math['task']}", "type": "math", "link": math['link'], "desc": math['desc']},
            {"time": "1–4pm", "task": p_task, "type": "project", "desc": p_desc, "dataset": p_res.get("dataset"), "info": p_res.get("info")},
            {"time": "4–6pm", "task": f"🛠️ SQL Revision: {sql_sub}", "type": "sql", "link": tuf_sql_link, "desc": f"Master {sql_sub}."}
        ]
        
        days.append({"day": day_num, "title": f"Day {day_num}: {dsa} & {sql_sub}", "tasks": tasks, "outcome": f"Built depth in {p_name}."})
        day_idx += 1
        
    if days:
        week_num = len(weeks_data) + 1
        weeks_data.append({"week": week_num, "label": phase_titles.get(week_num, f"Phase {week_num}"), "theme": "Execution", "color": "BLUE" if week_num%2==0 else "PURPLE", "days": days})

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

# 1. Update the local React file with new data
jsx_path = 'c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx'
update_file(jsx_path)

# 2. Sync the complete React logic into index.html so the deployed site works
html_path = 'c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html'
if os.path.exists(jsx_path) and os.path.exists(html_path):
    with open(jsx_path, 'r', encoding='utf-8') as f: jsx_content = f.read()
    with open(html_path, 'r', encoding='utf-8') as f: html_content = f.read()
    
    s_idx = html_content.find('<script type="text/babel">')
    e_idx = html_content.find('</script>', s_idx)
    
    if s_idx != -1 and e_idx != -1:
        new_html = html_content[:s_idx + 26] + '\\n' + jsx_content + '\\n' + html_content[e_idx:]
        with open(html_path, 'w', encoding='utf-8') as f: f.write(new_html)
        print(f"Synced roadmap.jsx logic into index.html")
