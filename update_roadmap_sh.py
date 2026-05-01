import json
import os
import re

# ─────────────────────────────────────────────────────────────────
# DATA ANALYST ROADMAP GENERATOR (v4.0)
# Ecosystem: Takeuforward (DSA, SQL, Apt) | Codebasics (Math/Stats)
# ─────────────────────────────────────────────────────────────────

# 1. TRACK LINKS & TOPICS
tuf_dsa_link = "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
tuf_dsa_topics = [
    "Step 1: Basics - Language", "Step 1: Basics - Logic Building", "Step 1: Basics - STL/Collections",
    "Step 2: Selection Sort", "Step 2: Bubble Sort", "Step 2: Insertion Sort",
    "Step 3: Easy Arrays", "Step 3: Medium Arrays", "Step 3: Hard Arrays",
    "Step 4: BS on 1D Arrays", "Step 4: BS on Answers", "Step 4: BS on 2D Arrays",
    "Step 5: Strings - Basic", "Step 5: Strings - Medium",
    "Step 6: Singly LL", "Step 6: Doubly LL", "Step 6: Medium LL Problems",
    "Step 7: Basic Recursion", "Step 7: Subsets/Combinations",
    "Step 8: Bit Manipulation", "Step 9: Stack and Queues", "Step 10: Sliding Window"
]

tuf_apt_link = "https://takeuforward.org/plus/aptitude/logical-reasoning/series-missing-numbers-odd-one-out/basic?subject=logical-reasoning&sidebar=open"
tuf_apt_topics = [
    "Number Series", "Missing Numbers", "Odd One Out", "Coding-Decoding", "Blood Relations",
    "Direction Sense", "Syllogism", "Seating Arrangement", "Arithmetic: Percentages",
    "Arithmetic: Profit & Loss", "Arithmetic: Ratio & Proportion", "Arithmetic: Time & Work"
]

tuf_sql_link = "https://takeuforward.org/plus/sql-data-engineering"

math_stats_curriculum = [
    {"task": "Median, Mean, Mode, Percentile", "link": "https://www.youtube.com/watch?v=t4LOv9h-FJM"},
    {"task": "Standard Deviation & MAD", "link": "https://www.youtube.com/watch?v=yCDevFTNbC0"},
    {"task": "Normal Distribution & Z Score", "link": "https://www.youtube.com/watch?v=okhrFgaUwio"},
    {"task": "Logarithm Basics", "link": "https://www.youtube.com/watch?v=KzQQCtgzQbw"},
    {"task": "Log Normal Distribution", "link": "https://www.youtube.com/watch?v=xtTX69JZ92w"},
    {"task": "Sin/Cos/Tan Explained", "link": "https://www.youtube.com/watch?v=o6nFv0UfEdI"},
    {"task": "Cosine Similarity & Distance", "link": "https://www.youtube.com/watch?v=m_CooIRM3UI"},
    {"task": "A/B Testing Explained", "link": "https://www.youtube.com/watch?v=eiIhTbFP0ls"},
    {"task": "Modified Z Score Outliers", "link": "https://www.youtube.com/watch?v=m7KWxX23zCU"},
    {"task": "Hypothesis Testing Fundamentals", "link": "https://www.youtube.com/watch?v=fb8BSFr0isg"}
]

ibm_cert_link = "https://www.coursera.org/professional-certificates/ibm-data-analyst"

# 2. GENERATE 60 DAYS OF DATA
weeks_data = []
for w in range(1, 9):
    days = []
    for d in range(1, 8 if w < 9 else 5): # Ensure ~60 days total
        day_num = (w-1)*7 + d
        if day_num > 60: break
        
        # Select topics
        dsa = tuf_dsa_topics[(day_num-1) % len(tuf_dsa_topics)]
        apt = tuf_apt_topics[(day_num-1) % len(tuf_apt_topics)]
        math = math_stats_curriculum[(day_num-1) % len(math_stats_curriculum)]
        
        # Build tasks
        tasks = [
            {"time": "6–7am", "task": "🎓 IBM Cert: Module Mastery", "type": "ibm", "link": ibm_cert_link},
            {"time": "7–8am", "task": f"⚔️ DSA: {dsa}", "type": "dsa", "link": tuf_dsa_link},
            {"time": "8–9am", "task": f"🧠 Aptitude: {apt}", "type": "aptitude", "link": tuf_apt_link},
            {"time": "9–10am", "task": f"📊 Math/Stats: {math['task']}", "type": "math", "link": math['link']}
        ]
        
        # Core Work Blocks (SQL / Projects)
        if day_num <= 14:
            tasks.append({"time": "10am–1pm", "task": "Project 1 (IPL): Layered Build - solve 10 business statements.", "type": "project"})
            tasks.append({"time": "2–5pm", "task": "SQL Practice on TUF: Foundations", "type": "sql", "link": tuf_sql_link})
        elif day_num <= 28:
            tasks.append({"time": "10am–1pm", "task": "Project 2 (OTT): Layered Build - solve 10 business statements.", "type": "project"})
            tasks.append({"time": "2–5pm", "task": "Advanced SQL on TUF: Joins & CTEs", "type": "sql", "link": tuf_sql_link})
        else:
            tasks.append({"time": "10am–1pm", "task": "Project 3 (E-com): Layered Build - solve 10 business statements.", "type": "project"})
            tasks.append({"time": "2–5pm", "task": "Portfolio & Resume Build on GitHub", "type": "portfolio"})
            
        days.append({
            "day": day_num,
            "title": f"Day {day_num}: Building Depth",
            "tasks": tasks,
            "outcome": "Daily tracks and project layer completed."
        })
        
    weeks_data.append({
        "week": w,
        "label": f"Phase {w}",
        "theme": "Skill Mastery & Project Build",
        "color": "BLUE" if w%2==0 else "PURPLE",
        "days": days
    })

# 3. UPDATE FRONTEND FILES
weeks_js = "const weeks = " + json.dumps(weeks_data, indent=2) + ";"
# Fix variables
weeks_js = re.sub(r'"color": "(BLUE|PURPLE|GREEN|ACCENT|RED)"', r'"color": \1', weeks_js)

def update_file(path):
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # 1. Replace Weeks
    s_marker, e_marker = "const weeks = [", "const finalChecklist ="
    s_idx = content.find(s_marker)
    e_idx = content.find(e_marker)
    if s_idx != -1 and e_idx != -1:
        e_arr_idx = content.rfind("];", s_idx, e_idx) + 2
        content = content[:s_idx] + weeks_js + "\n\n" + content[e_arr_idx:]
        
    # 2. Update Filters
    f_marker = "const filters = ["
    fe_marker = "];"
    fs_idx = content.find(f_marker)
    fe_idx = content.find(fe_marker, fs_idx) + 2
    if fs_idx != -1:
        new_filters = 'const filters = ["All", "dsa", "sql", "aptitude", "ibm", "math", "project", "portfolio", "content"];'
        content = content[:fs_idx] + new_filters + content[fe_idx:]

    # 3. Update Project Layering Text
    p_text = "Each Layer (1-9) is designed to be completed in 1–3 days. Target: Solve 10–15 specific business statements per layer."
    content = re.sub(r'Each project is built.*?\.', p_text, content)

    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print(f"Updated {os.path.basename(path)}")

update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx')
update_file('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html')
