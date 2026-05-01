import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v5.0) - MICRO-PRECISION
# ─────────────────────────────────────────────────────────────────

# 1. CURRICULA & LINK DEFINITIONS
ibm_courses = [
    {"name": "C1: Intro to Data Analytics", "link": "https://www.coursera.org/learn/introduction-to-data-analytics"},
    {"name": "C2: Excel Basics", "link": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm"},
    {"name": "C3: Data Viz with Excel & Cognos", "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos"},
    {"name": "C4: Python for Data Science", "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai"},
    {"name": "C5: Python Project", "link": "https://www.coursera.org/learn/python-project-for-data-science"},
    {"name": "C6: Databases and SQL", "link": "https://www.coursera.org/learn/sql-data-science"},
    {"name": "C7: Data Analysis with Python", "link": "https://www.coursera.org/learn/data-analysis-with-python"},
    {"name": "C8: Data Viz with Python", "link": "https://www.coursera.org/learn/python-for-data-visualization"},
    {"name": "C9: Capstone Project", "link": "https://www.coursera.org/learn/ibm-data-analyst-capstone-project"},
    {"name": "C10: Generative AI", "link": "https://www.coursera.org/learn/generative-ai-enhance-your-data-analytics-career"},
    {"name": "C11: Career Guide & Interview", "link": "https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-analyst"}
]

tuf_dsa_link = "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
tuf_dsa_topics = [
    "Basics - Language", "Logic Building", "STL/Collections", "Selection Sort", "Bubble Sort", 
    "Insertion Sort", "Easy Arrays", "Medium Arrays", "Hard Arrays", "BS on 1D Arrays", 
    "BS on Answers", "BS on 2D Arrays", "Strings - Basic", "Strings - Medium",
    "Singly LL", "Doubly LL", "Medium LL Problems", "Basic Recursion", "Subsets",
    "Bit Manipulation", "Stack and Queues", "Sliding Window"
]

tuf_apt_link = "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning&sidebar=open"
tuf_apt_topics = [
    "Number Series", "Missing Numbers", "Odd One Out", "Coding-Decoding", "Blood Relations",
    "Direction Sense", "Syllogism", "Seating Arrangement", "Percentages", "Profit & Loss", 
    "Ratio & Proportion", "Time & Work", "Time & Distance", "Data Interpretation"
]

tuf_sql_link = "https://takeuforward.org/plus/sql-data-engineering"

math_stats_curriculum = [
    {"task": "Mean, Median, Mode, Percentile", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Std Deviation & MAD", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Distribution & Z Score", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm Basics", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "Log Normal Dist", "link": "https://www.youtube.com/watch?v=xtTX69JZ92w"},
    {"task": "Cosine Similarity", "link": "https://www.youtube.com/watch?v=m_CooIRM3UI"},
    {"task": "A/B Testing", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Outlier Detection (Z Score)", "link": "https://www.youtube.com/watch?v=m7KWxX23zCU"},
    {"task": "Hypothesis Testing", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"}
]

# 2. GENERATE 60 DAYS OF MICRO-PRECISION DATA
weeks_data = []
day_idx = 0

for w in range(1, 10): # Enough for 60+ days
    days = []
    for d in range(1, 8):
        day_num = day_idx + 1
        if day_num > 60: break
        
        # Curricula Rotation
        dsa = tuf_dsa_topics[day_idx % len(tuf_dsa_topics)]
        apt = tuf_apt_topics[day_idx % len(tuf_apt_topics)]
        math = math_stats_curriculum[day_idx % len(math_stats_curriculum)]
        ibm = ibm_courses[day_idx % len(ibm_courses)]
        
        # Morning Tracks
        tasks = [
            {"time": "6–7am", "task": f"🎓 IBM: {ibm['name']}", "type": "ibm", "link": ibm['link']},
            {"time": "7–8am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link},
            {"time": "8–9am", "task": f"🧠 Aptitude: {apt}", "type": "aptitude", "link": tuf_apt_link},
            {"time": "9–10am", "task": f"📊 Math: {math['task']}", "type": "math", "link": math['link']}
        ]
        
        # Project Blocks (3-Day Precision Rotation)
        project_num = (day_idx // 14) + 1
        project_names = {1: "IPL Analytics", 2: "OTT Dashboard", 3: "E-com Platform", 4: "Financial Insights"}
        p_name = project_names.get(project_num, "Final Portfolio")
        
        day_in_project = day_idx % 14
        layer_num = (day_in_project // 3) + 1
        rotation_step = day_in_project % 3 # 0: Analyse, 1: Build, 2: Output
        
        if rotation_step == 0:
            p_task = f"🏗️ {p_name} (L{layer_num}): ANALYSE 4-5 business statements."
        elif rotation_step == 1:
            p_task = f"🏗️ {p_name} (L{layer_num}): BUILD 4-5 Metrics/KPIs."
        else:
            p_task = f"🏗️ {p_name} (L{layer_num}): GENERATE 4-5 Outputs/Insights."

        tasks.append({"time": "10am–1pm", "task": p_task, "type": "project"})
        tasks.append({"time": "2–5pm", "task": f"🛠️ Technical: Master {p_name} SQL/BI patterns.", "type": "sql", "link": tuf_sql_link})
        
        days.append({
            "day": day_num,
            "title": f"Day {day_num}: {p_name} Sprints",
            "tasks": tasks,
            "outcome": "Track mastery and layered project build."
        })
        day_idx += 1
        
    if days:
        weeks_data.append({
            "week": w,
            "label": f"Phase {w}",
            "theme": "Skill Execution",
            "color": "BLUE" if w%2==0 else "PURPLE",
            "days": days
        })

# 3. UPDATE FRONTEND FILES
weeks_js = "const weeks = " + json.dumps(weeks_data, indent=2) + ";"
weeks_js = re.sub(r'"color": "(BLUE|PURPLE|GREEN|ACCENT|RED)"', r'"color": \1', weeks_js)

def update_file(path):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # Replace Weeks
    s_marker, e_marker = "const weeks = [", "const finalChecklist ="
    s_idx = content.find(s_marker)
    e_idx = content.find(e_marker)
    if s_idx != -1 and e_idx != -1:
        e_arr_idx = content.rfind("];", s_idx, e_idx) + 2
        content = content[:s_idx] + weeks_js + "\n\n" + content[e_arr_idx:]
        
    # Update Filters (Sanitized)
    f_marker, fe_marker = "const filters = [", "];"
    fs_idx = content.find(f_marker)
    if fs_idx != -1:
        fe_idx = content.find(fe_marker, fs_idx) + 2
        new_filters = 'const filters = ["All", "dsa", "sql", "aptitude", "ibm", "math", "project"];'
        content = content[:fs_idx] + new_filters + content[fe_idx:]

    # Update Guidance Text
    p_text = "Project layers are built in 3-day precision cycles: Day 1 (Analyse 4-5 statements), Day 2 (Build 4-5 metrics), Day 3 (Generate 4-5 outputs)."
    content = re.sub(r'Each Layer.*?moving to the next\.', p_text, content)
    content = re.sub(r'Each project is built.*?\.', p_text, content)

    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print(f"Updated {os.path.basename(path)}")

update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx')
update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html')
