import re

tuf_dsa_topics = [
  # Days 1-14
  "A2Z: Step 1 - Basics (C++, Java, Python)", "A2Z: Step 1 - Logic Building",
  "A2Z: Step 2 - Sorting Techniques (Bubble, Selection)", "A2Z: Step 2 - Sorting (Merge, Quick)",
  "A2Z: Step 3 - Arrays (Easy Problems)", "A2Z: Step 3 - Arrays (Medium Problems)",
  "A2Z: Step 3 - Arrays (Hard Problems)", "A2Z: Step 4 - Binary Search (1D Arrays)",
  "A2Z: Step 4 - Binary Search (2D Arrays)", "A2Z: Step 4 - BS on Search Space",
  "A2Z: Step 5 - Strings (Basic)", "A2Z: Step 5 - Strings (Medium)",
  "A2Z: Step 6 - LinkedList (Single LL)", "A2Z: Step 6 - LinkedList (Double LL)",
  # Days 15-28
  "A2Z: Step 6 - LinkedList (Medium & Hard)", "A2Z: Step 7 - Recursion (PatternWise)",
  "A2Z: Step 7 - Recursion (Hard)", "A2Z: Step 8 - Bit Manipulation (Concepts)",
  "A2Z: Step 8 - Bit Manipulation (Problems)", "A2Z: Step 9 - Stack & Queues (Learning)",
  "A2Z: Step 9 - Stack & Queues (Pre-In-Post-fix)", "A2Z: Step 9 - Monotonic Stack",
  "A2Z: Step 10 - Sliding Window (Fixed)", "A2Z: Step 10 - Sliding Window (Variable)",
  "A2Z: Step 11 - Heaps (Learning & Medium)", "A2Z: Step 11 - Heaps (Hard Problems)",
  "A2Z: Step 12 - Greedy Algorithms (Easy)", "A2Z: Step 12 - Greedy Algorithms (Medium/Hard)",
  # Days 29-42
  "A2Z: Step 13 - Binary Trees (Traversals)", "A2Z: Step 13 - Binary Trees (Medium/Hard)",
  "A2Z: Step 14 - Binary Search Trees (Concepts)", "A2Z: Step 14 - Binary Search Trees (Problems)",
  "A2Z: Step 15 - Graphs (Concepts)", "A2Z: Step 15 - Graphs (BFS/DFS Problems)",
  "A2Z: Step 15 - Graphs (Shortest Path/MST)", "A2Z: Step 16 - DP (1D & 2D)",
  "A2Z: Step 16 - DP (Strings & Subsequences)", "A2Z: Step 17 - Tries",
  "DSA Revision: Top 50 Array/String Questions", "DSA Revision: Top 50 Linked List Questions",
  "DSA Revision: Top 50 Stack/Queue Questions", "DSA Revision: Top 50 Tree Questions",
  # Days 43-60
  "DSA Revision: Top 50 Graph/DP Questions", "Mock Interview: Leetcode Easy Set",
  "Mock Interview: Leetcode Medium Set", "Mock Interview: Amazon DSA Questions",
  "Mock Interview: Google DSA Questions", "Mock Interview: Meta DSA Questions",
  "Mock Interview: Microsoft DSA Questions", "Mock Test: DSA Written Round 1",
  "Mock Test: DSA Written Round 2", "Mock Test: DSA Written Round 3",
  "Speed Test: 2 Mediums in 45 Mins", "Speed Test: 1 Hard in 45 Mins",
  "Review Weakness: Graphs & DP", "Review Weakness: Trees & BST",
  "Review Weakness: Sliding Window", "Review Weakness: Binary Search",
  "Final Polish: Strivers SDE Sheet Part 1", "Final Polish: Strivers SDE Sheet Part 2",
  "Final Polish: Strivers SDE Sheet Part 3", "Final Polish: Strivers SDE Sheet Part 4"
]

tuf_core_topics = [
  # PHASE 1: Excel & Python (Aligns with IPL Project)
  "Excel: XLOOKUP & Advanced Formulas", "Excel: Advanced Pivot Tables",
  "Excel: Power Query Basics", "Excel: Data Validation & Macros",
  "Python: Data Types, Loops, Functions", "Python: Pandas Data Cleaning",
  "Python: Pandas GroupBy & Merging", "Python: Matplotlib/Seaborn Viz",
  "Python: Handling Missing Data", "Python: Advanced Pandas Techniques",
  "Python: Web Scraping basics (BeautifulSoup)", "Python: API Requests (Requests lib)",
  "Python: EDA (Exploratory Data Analysis)", "Python: Project 1 Data Prep",
  
  # PHASE 2: SQL Foundations (Aligns with OTT Project)
  "TUF SQL: Getting Started & Foundations", "TUF SQL: Core Database Structures",
  "TUF SQL: Querying Essentials (SELECT, SORT)", "TUF SQL: Aggregation (GROUP BY, SUM)",
  "TUF SQL: Functions (Math, Conditional)", "TUF SQL: DDL & DML Operations",
  "TUF SQL: Set Operations (UNION, INTERSECT)", "TUF SQL: INNER & LEFT JOINs",
  "TUF SQL: OUTER JOINs & Complex Joins", "TUF SQL: Subqueries (Nested Queries)",
  "TUF SQL: CTEs (Common Table Expressions)", "TUF SQL: Dates and Time Manipulation",
  "TUF SQL: Window Functions (RANK, ROW_NUMBER)", "TUF SQL: JSON in SQL",
  
  # PHASE 3: Power BI & Advanced SQL (Aligns with E-Commerce Project)
  "PowerBI: Connect SQL Server / Datasets", "PowerBI: Data Transformation in PQ",
  "PowerBI: Star Schema & Modeling", "PowerBI: DAX (CALCULATE & Filter Context)",
  "PowerBI: DAX Time Intelligence", "PowerBI: Advanced DAX Measures",
  "PowerBI: Dashboard Layout & UX", "PowerBI: Row-level Security",
  "Advanced SQL: Query Optimization", "Advanced SQL: Indexing & Performance",
  "Advanced SQL: Stored Procedures", "Advanced SQL: Triggers & Views",
  "Advanced SQL: Hard LeetCode SQL 1", "Advanced SQL: Hard LeetCode SQL 2",
  
  # PHASE 4: DBMS, Stats & Aptitude (Aligns with Final Job Prep Phase)
  "DBMS: ACID Properties & Transactions", "DBMS: Normalization (1NF, 2NF, 3NF)",
  "DBMS: Concurrency Control", "DBMS: SQL vs NoSQL Differences",
  "Stats: Mean, Median, Mode, Variance", "Stats: Probability & Distributions",
  "Stats: Hypothesis Testing (p-value)", "Stats: A/B Testing Setup & Analysis",
  "Aptitude: Number Systems & Percentages", "Aptitude: Ratios & Proportions",
  "Aptitude: Time, Speed & Distance", "Aptitude: Time & Work",
  "Aptitude: Profit & Loss", "Aptitude: Logical Reasoning (Syllogisms)",
  "Aptitude: Data Interpretation (Charts)", "TUF SQL: Interview Situational Qs (Hard)",
  "Mock Interview: SQL & DBMS Round", "Mock Interview: Data Case Study Round"
]

weeks_data = [
    # WEEK 1
    {
        "week": 1,
        "label": "Roadmap.sh Part 1",
        "theme": "Math, Excel & SQL",
        "color": "BLUE",
        "days": [
            {
                "title": "Math & Statistics Fundamentals",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Descriptive Stats: Mean, Median, Mode, Variance, Standard Deviation.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Probability Basics: Probability distributions, Normal distribution, Z-scores.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Inferential Stats: Hypothesis testing, p-values, A/B testing theory.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Calculate stats on a sample dataset using pen and paper or calculator.", "type": "practice"},
                    {"time": "5–6pm", "task": "Document notes on Notion/GitHub. Roadmap.sh Math section complete.", "type": "output"}
                ],
                "outcome": "Solid foundation in data mathematics and statistics."
            },
            {
                "title": "Excel Advanced Part 1",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Excel Basics: Data entry, formatting, basic formulas (SUM, AVERAGE, COUNT).", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Advanced Formulas: VLOOKUP, HLOOKUP, XLOOKUP, INDEX-MATCH.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Logic: IF, AND, OR, nested IFs, Conditional Formatting.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Download a messy sales dataset and clean/format it using formulas.", "type": "practice"},
                    {"time": "5–6pm", "task": "Save Excel workbook as 'Day2_Excel_Advanced.xlsx'.", "type": "output"}
                ],
                "outcome": "Mastery of essential and advanced Excel formulas."
            },
            {
                "title": "Excel Advanced Part 2 (Power Query)",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Pivot Tables: Summarizing data, calculated fields, Pivot Charts.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Power Query: Importing data, merging tables, unpivoting columns.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Data Validation & What-If Analysis (Goal Seek, Scenario Manager).", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Build a dynamic Excel dashboard using Pivot Charts and Slicers.", "type": "build"},
                    {"time": "5–6pm", "task": "Push dashboard screenshots to GitHub. Roadmap.sh Excel section complete.", "type": "output"}
                ],
                "outcome": "Can build dynamic dashboards and clean data inside Excel."
            },
            {
                "title": "Databases & SQL Part 1",
                "tasks": [
                    {"time": "9–11am", "task": "Understand Relational Databases (RDBMS). Primary Keys vs Foreign Keys.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Basic SQL: SELECT, FROM, WHERE, LIMIT, ORDER BY.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Aggregations: GROUP BY, HAVING, SUM, COUNT, AVG, MIN, MAX.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Solve 5 basic SQL query problems on HackerRank.", "type": "practice"},
                    {"time": "5–6pm", "task": "Document SQL basics in a markdown file.", "type": "output"}
                ],
                "outcome": "Ability to query and filter basic datasets using SQL."
            },
            {
                "title": "SQL Part 2: Joins & Relations",
                "tasks": [
                    {"time": "9–11am", "task": "Learn JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Subqueries: Using queries inside WHERE, SELECT, and FROM clauses.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn CTEs (Common Table Expressions): Using the WITH clause for readability.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Write 3 queries joining multiple tables (e.g., Customers + Orders).", "type": "build"},
                    {"time": "5–6pm", "task": "Push complex queries to GitHub repository.", "type": "output"}
                ],
                "outcome": "Can merge multiple tables and write readable complex queries."
            },
            {
                "title": "SQL Part 3: Advanced SQL",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK().", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Advanced Window Functions: LEAD(), LAG(), running totals.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Data Types, CAST, String manipulations (SUBSTRING, CONCAT), Date functions.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Solve 3 advanced SQL problems on Leetcode (Hard difficulty).", "type": "practice"},
                    {"time": "5–6pm", "task": "Roadmap.sh SQL section complete. Update LinkedIn skills.", "type": "output"}
                ],
                "outcome": "Mastered window functions and advanced SQL capabilities."
            },
            {
                "title": "Week 1 Review & Mini-Project",
                "tasks": [
                    {"time": "9–11am", "task": "Review Math, Excel, and SQL notes. Identify any weak points.", "type": "review"},
                    {"time": "11am–1pm", "task": "Mini-Project: Export an SQL query result to CSV, import to Excel, use Power Query to clean.", "type": "build"},
                    {"time": "2–4pm", "task": "Mini-Project: Build a final Pivot Dashboard from that data.", "type": "build"},
                    {"time": "4–5pm", "task": "Write LinkedIn post: 'Week 1 of Data Analyst Roadmap: Mastered Excel & SQL'.", "type": "content"},
                    {"time": "5–6pm", "task": "Rest and prepare for Week 2 (BI & Python).", "type": "reflect"}
                ],
                "outcome": "Successfully integrated SQL extraction with Excel visualization."
            }
        ]
    },
    # WEEK 2
    {
        "week": 2,
        "label": "Roadmap.sh Part 2",
        "theme": "Power BI, Python & Data Viz",
        "color": "PURPLE",
        "days": [
            {
                "title": "Data Visualization Principles",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Chart Types: When to use Bar, Line, Scatter, Pie, Histogram.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Design Principles: Cognitive load, Data-ink ratio, Color theory (categorical vs sequential).", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Data Storytelling: How to highlight insights, use titles effectively, guide the eye.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Critique 3 bad charts online and sketch improvements.", "type": "practice"},
                    {"time": "5–6pm", "task": "Document Data Viz principles. Roadmap.sh Data Viz section complete.", "type": "output"}
                ],
                "outcome": "Understand the theory behind effective data communication."
            },
            {
                "title": "Power BI Part 1",
                "tasks": [
                    {"time": "9–11am", "task": "Install Power BI Desktop. Learn to connect data sources (Excel, CSV, SQL).", "type": "setup"},
                    {"time": "11am–1pm", "task": "Learn Data Modeling: Creating relationships (1-to-many), Star Schema.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Power Query in Power BI: Transforming data, changing types, appending queries.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Build 3 basic visuals (Bar chart, Line chart, KPI card).", "type": "build"},
                    {"time": "5–6pm", "task": "Save the .pbix file. Push to GitHub.", "type": "output"}
                ],
                "outcome": "Can load data, build a Star Schema, and create basic visuals in Power BI."
            },
            {
                "title": "Power BI Part 2 (DAX)",
                "tasks": [
                    {"time": "9–11am", "task": "Learn DAX Basics: Calculated Columns vs Measures. Context (Row vs Filter).", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Essential DAX: CALCULATE, FILTER, SUMX, ALL.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Time Intelligence DAX: YTD, MTD, SAMEPERIODLASTYEAR.", "type": "learn"},
                    {"time": "4–5pm", "task": "Practice: Build an interactive Sales Dashboard with slicers and tooltips.", "type": "build"},
                    {"time": "5–6pm", "task": "Roadmap.sh BI Tools section complete. Publish to Power BI service (optional).", "type": "output"}
                ],
                "outcome": "Mastered DAX and interactive dashboard creation in Power BI."
            },
            {
                "title": "Python Basics",
                "tasks": [
                    {"time": "9–11am", "task": "Install VS Code, Python, Jupyter. Learn Variables, Data Types, Operators.", "type": "setup"},
                    {"time": "11am–1pm", "task": "Learn Control Flow: If/Else, For loops, While loops.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Data Structures: Lists, Dictionaries, Tuples, Sets.", "type": "learn"},
                    {"time": "4–5pm", "task": "Learn Functions: def, arguments, return values, lambda functions.", "type": "learn"},
                    {"time": "5–6pm", "task": "Practice: Write 5 small Python scripts (e.g., calculator, palindrome checker).", "type": "build"}
                ],
                "outcome": "Solid grasp of Python programming fundamentals."
            },
            {
                "title": "Python for Data (Pandas)",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Numpy: Arrays, vectorized operations, basic math functions.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Pandas Basics: Series, DataFrames, read_csv, head, info, describe.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Data Manipulation: Filtering rows, selecting columns, handling missing values (.isna).", "type": "learn"},
                    {"time": "4–5pm", "task": "Learn Aggregation: groupby(), agg(), merge(), concat().", "type": "learn"},
                    {"time": "5–6pm", "task": "Practice: Perform basic EDA on a Kaggle dataset using Pandas.", "type": "build"}
                ],
                "outcome": "Can clean and manipulate tabular data using Pandas."
            },
            {
                "title": "Python Data Visualization",
                "tasks": [
                    {"time": "9–11am", "task": "Learn Matplotlib: plt.plot, plt.bar, labels, titles, subplots.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn Seaborn: sns.histplot, sns.boxplot, sns.heatmap. Styling and themes.", "type": "learn"},
                    {"time": "2–4pm", "task": "Practice: Recreate the Data Viz principles you learned on Day 8 using Python.", "type": "build"},
                    {"time": "4–5pm", "task": "Learn Plotly (Optional): Basic interactive charts.", "type": "learn"},
                    {"time": "5–6pm", "task": "Roadmap.sh Programming section complete. Export Jupyter notebook.", "type": "output"}
                ],
                "outcome": "Able to generate static and interactive charts purely in Python."
            },
            {
                "title": "Week 2 Review & Roadmap Checkpoint",
                "tasks": [
                    {"time": "9–11am", "task": "Review Power BI and Python notes. You are now officially 'Analyst Ready'.", "type": "review"},
                    {"time": "11am–1pm", "task": "Download IPL Dataset for Week 3. Do a quick 30-min EDA in Pandas to warm up.", "type": "data"},
                    {"time": "2–4pm", "task": "Set up GitHub repositories for the 3 main projects (IPL, OTT, E-commerce).", "type": "setup"},
                    {"time": "4–5pm", "task": "Write LinkedIn post: 'Completed the roadmap.sh Data Analyst curriculum. Now building projects.'", "type": "content"},
                    {"time": "5–6pm", "task": "Rest. The intense project building phase starts tomorrow.", "type": "reflect"}
                ],
                "outcome": "Roadmap.sh curriculum complete. Ready for real-world execution."
            }
        ]
    },
    # WEEK 3
    {
        "week": 3,
        "label": "IPL Analytics Engine",
        "theme": "Applying Python + SQL + BI",
        "color": "ACCENT",
        "days": [
            {
                "title": "Data Cleaning & On-Field Analysis",
                "tasks": [
                    {"time": "9–11am", "task": "Load IPL CSV. Explore shape, columns, nulls. Standardize team names in Pandas.", "type": "data"},
                    {"time": "11am–1pm", "task": "Build: Top 10 run scorers, top wicket takers, win rate by toss decision.", "type": "build"},
                    {"time": "2–4pm", "task": "Build: Venue bias analysis (avg score by venue, spin vs pace dominance).", "type": "build"},
                    {"time": "4–5pm", "task": "Write 3 SQL queries replicating the Pandas results to practice both skills.", "type": "build"},
                    {"time": "5–6pm", "task": "Document findings in a README. Push to GitHub.", "type": "output"}
                ],
                "outcome": "IPL dataset cleaned. On-field analysis complete."
            },
            {
                "title": "Player Value & Pressure Analysis",
                "tasks": [
                    {"time": "9–11am", "task": "Research IPL auction data. Merge salaries with player performance data.", "type": "data"},
                    {"time": "11am–1pm", "task": "Calculate ROI: Runs/wickets per crore spent. Identify undervalued players.", "type": "build"},
                    {"time": "2–4pm", "task": "Analyze Death Overs (16-20): Strike rates under pressure. Clutch Index.", "type": "build"},
                    {"time": "4–5pm", "task": "Build: Scatter plot (Salary vs Performance Score) using Seaborn.", "type": "build"},
                    {"time": "5–6pm", "task": "Write Insight: 'Top 5 Undervalued Players'. Save as blog draft.", "type": "output"}
                ],
                "outcome": "Player value model built. First blog drafted."
            },
            {
                "title": "Product Metrics: IPL Viewer Funnel",
                "tasks": [
                    {"time": "9–11am", "task": "Map IPL to product: viewers = users, matches = sessions. Create synthetic funnel data.", "type": "think"},
                    {"time": "11am–1pm", "task": "Model viewer funnel: Awareness → Tune-in → Engagement → Reels sharing.", "type": "build"},
                    {"time": "2–4pm", "task": "Map engagement spikes: Which match events drive peaks (wickets, sixes).", "type": "build"},
                    {"time": "4–5pm", "task": "Export clean data for Power BI visualization tomorrow.", "type": "data"},
                    {"time": "5–6pm", "task": "Write Insight: 'Why IPL beats OTT in engagement metrics'.", "type": "output"}
                ],
                "outcome": "Product analytics lens applied to IPL viewership."
            },
            {
                "title": "Business Revenue & Marketing",
                "tasks": [
                    {"time": "9–11am", "task": "Research IPL revenue: media rights, sponsorships, ticketing. Build Excel model.", "type": "research"},
                    {"time": "11am–1pm", "task": "Analyze brand category performance (Dream11, CRED) during IPL.", "type": "build"},
                    {"time": "2–4pm", "task": "Use pytrends API: Pull IPL-related keyword spikes across seasons.", "type": "build"},
                    {"time": "4–5pm", "task": "Build franchise valuation comparison chart (2010 vs 2024).", "type": "build"},
                    {"time": "5–6pm", "task": "Compile all Python layers into one master Jupyter notebook.", "type": "output"}
                ],
                "outcome": "Business & Growth analysis complete. Master notebook ready."
            },
            {
                "title": "Power BI Dashboard Build",
                "tasks": [
                    {"time": "9–11am", "task": "Load all cleaned IPL datasets into Power BI. Create Star Schema.", "type": "build"},
                    {"time": "11am–1pm", "task": "Write DAX measures for Win Rate, Average Score, Player ROI.", "type": "build"},
                    {"time": "2–4pm", "task": "Build visual dashboard: Player Stats, Venue Analysis, Team Performance.", "type": "build"},
                    {"time": "4–5pm", "task": "Add interactive filters (season, team, player). Apply premium dark theme.", "type": "design"},
                    {"time": "5–6pm", "task": "Publish dashboard to Power BI service. Add link to GitHub.", "type": "output"}
                ],
                "outcome": "Interactive Power BI Dashboard is LIVE."
            },
            {
                "title": "Deep Report Generation",
                "tasks": [
                    {"time": "9–11am", "task": "Start 10-page IPL report: Exec Summary, 4 Analysis Layers, Insights. (Canva/Word)", "type": "write"},
                    {"time": "11am–1pm", "task": "Insert charts from Power BI and Python, export as professional PDF.", "type": "write"},
                    {"time": "2–4pm", "task": "Record a 3-minute video of yourself presenting the dashboard (Loom).", "type": "practice"},
                    {"time": "4–5pm", "task": "Setup OTT Project Folder. Download IMDb & Box Office datasets.", "type": "setup"},
                    {"time": "5–6pm", "task": "Write LinkedIn Post: 'IPL Analytics Engine is LIVE'. Share dashboard & video.", "type": "content"}
                ],
                "outcome": "IPL Project officially wrapped. Report published."
            },
            {
                "title": "Week 3 Review & OTT Setup",
                "tasks": [
                    {"time": "9–11am", "task": "Review IPL outputs. Identify what SQL/Power BI gaps remain.", "type": "review"},
                    {"time": "11am–1pm", "task": "Explore OTT Datasets. Write data dictionary. Handle nulls in Pandas.", "type": "data"},
                    {"time": "2–4pm", "task": "Plan OTT project structure (Genre, Sentiment, Revenue).", "type": "plan"},
                    {"time": "4–5pm", "task": "Do 3 Leetcode SQL window function problems to maintain edge.", "type": "practice"},
                    {"time": "5–6pm", "task": "Rest and reflect. Project 1 is fully done.", "type": "reflect"}
                ],
                "outcome": "Ready for OTT Project. SQL/Python skills assessed."
            }
        ]
    },
    # WEEK 4
    {
        "week": 4,
        "label": "OTT vs Theatre",
        "theme": "Content + Audience Intelligence",
        "color": "PURPLE",
        "days": [
            {
                "title": "OTT Data Deep Cleaning + Genre Analysis",
                "tasks": [
                    {"time": "9–11am", "task": "Final clean of IMDb + Box Office datasets. Merge on movie title + year. Handle duplicates.", "type": "data"},
                    {"time": "11am–1pm", "task": "Genre performance analysis: revenue by genre, completion rate proxy by ratings count.", "type": "build"},
                    {"time": "2–4pm", "task": "Pan-India vs regional film analysis: Telugu, Tamil vs Hindi box office trends 2018–2024.", "type": "build"},
                    {"time": "4–5pm", "task": "Build: Genre vs revenue bar chart using Seaborn.", "type": "build"},
                    {"time": "5–6pm", "task": "Write insight: 'Mass content wins theatres, niche content thrives on OTT'.", "type": "output"}
                ],
                "outcome": "OTT Layer 1 complete. Genre intelligence report written."
            },
            {
                "title": "Reviews + Sentiment Analysis",
                "tasks": [
                    {"time": "9–11am", "task": "Collect: IMDb user reviews for 20 major films using cinemagoer Python library.", "type": "data"},
                    {"time": "11am–1pm", "task": "Run VADER sentiment analysis on reviews. Score each film: positive/negative/neutral %.", "type": "build"},
                    {"time": "2–4pm", "task": "Correlate: sentiment score vs opening weekend box office. Find pattern.", "type": "build"},
                    {"time": "4–5pm", "task": "Build: Day 1 vs Day 3 revenue drop analysis. Which films held vs collapsed?", "type": "build"},
                    {"time": "5–6pm", "task": "Write insight: 'Hype Opens, Reviews Sustain'. Save as blog draft.", "type": "output"}
                ],
                "outcome": "Sentiment analysis model built. Review-revenue correlation established."
            },
            {
                "title": "Booking Funnel + COVID Impact",
                "tasks": [
                    {"time": "9–11am", "task": "Model BookMyShow funnel (public data): Search → Browse → Select → Book → Watch.", "type": "build"},
                    {"time": "11am–1pm", "task": "Build: Weekend vs weekday booking behavior analysis using SQL aggregations.", "type": "build"},
                    {"time": "2–4pm", "task": "COVID impact: Collect pre/during/post-COVID OTT subscriber data. Build timeline.", "type": "data"},
                    {"time": "4–5pm", "task": "Build: Theatre recovery curve 2021–2024. OTT subscriber growth curve.", "type": "build"},
                    {"time": "5–6pm", "task": "Write insight: 'COVID didn't kill theatres — it forced evolution'.", "type": "output"}
                ],
                "outcome": "Booking funnel modeled. COVID impact timeline visualized."
            },
            {
                "title": "Content Lifecycle + Business Models",
                "tasks": [
                    {"time": "9–11am", "task": "Build content lifecycle chart: Teaser → Release → Reviews → OTT → Re-watch.", "type": "build"},
                    {"time": "11am–1pm", "task": "Analyze: Theatre window to OTT gap (2019 vs 2024). How has it shrunk?", "type": "build"},
                    {"time": "2–4pm", "task": "OTT business model: subscription tiers, ad-supported revenue, content spend.", "type": "research"},
                    {"time": "4–5pm", "task": "Theatre business model: ticket revenue, F&B margin (40–50%), real estate costs.", "type": "research"},
                    {"time": "5–6pm", "task": "Write insight: 'OTT optimizes lifetime value, theatres maximize moment value'.", "type": "output"}
                ],
                "outcome": "Business model comparison complete. Data ready for dashboard."
            },
            {
                "title": "Tableau Dashboard Build",
                "tasks": [
                    {"time": "9–11am", "task": "Load OTT data into Tableau Public. (Diversifying BI skills).", "type": "build"},
                    {"time": "11am–1pm", "task": "Build Genre Trends, Sentiment vs Revenue scatter plot, COVID Timeline.", "type": "build"},
                    {"time": "2–4pm", "task": "Add dashboard actions, filters, and tooltips. Ensure clean layout.", "type": "design"},
                    {"time": "4–5pm", "task": "Publish to Tableau Public. Link from GitHub.", "type": "output"},
                    {"time": "5–6pm", "task": "Write LinkedIn post: 'Why I used Tableau for this project instead of Power BI'.", "type": "content"}
                ],
                "outcome": "OTT Tableau dashboard live."
            },
            {
                "title": "OTT Deep Report",
                "tasks": [
                    {"time": "9–11am", "task": "Write OTT report: 8 pages covering Content, Audience, Sentiment, Revenue.", "type": "write"},
                    {"time": "11am–1pm", "task": "Insert Tableau visualizations and Python outputs.", "type": "write"},
                    {"time": "2–4pm", "task": "Add case study appendix: RRR global OTT journey vs Theatre journey.", "type": "write"},
                    {"time": "4–5pm", "task": "Format, design cover, export as PDF.", "type": "design"},
                    {"time": "5–6pm", "task": "Upload to portfolio. Project 2 officially complete.", "type": "output"}
                ],
                "outcome": "OTT deep report published."
            },
            {
                "title": "Week 4 Review & E-Commerce Prep",
                "tasks": [
                    {"time": "9–11am", "task": "Review Week 4. Check Tableau vs Power BI preferences.", "type": "review"},
                    {"time": "11am–1pm", "task": "Collect E-commerce data: Flipkart/Amazon public sales data (Kaggle).", "type": "data"},
                    {"time": "2–4pm", "task": "Research: Quick commerce market size data (Blinkit, Zepto, Swiggy Instamart).", "type": "research"},
                    {"time": "4–5pm", "task": "Set up e-commerce project folder. Build data dictionary.", "type": "setup"},
                    {"time": "5–6pm", "task": "Write project plan: Funnel + Pricing + Quick Commerce.", "type": "plan"}
                ],
                "outcome": "E-commerce data architecture complete. Ready for Week 5."
            }
        ]
    },
    # WEEK 5
    {
        "week": 5,
        "label": "E-Commerce Project",
        "theme": "Consumer Psychology + Growth",
        "color": "GREEN",
        "days": [
            {
                "title": "Seasonal Sales + Pricing Analysis",
                "tasks": [
                    {"time": "9–11am", "task": "Build festival vs normal sales comparison using SQL: categories, GMV, order volume.", "type": "build"},
                    {"time": "11am–1pm", "task": "Anchor pricing analysis: Document fake vs real discount patterns in dataset.", "type": "build"},
                    {"time": "2–4pm", "task": "Build: 'Psychology of ₹29,999' analysis. Odd pricing impact.", "type": "build"},
                    {"time": "4–5pm", "task": "Build festival sales heatmap by category in Python.", "type": "build"},
                    {"time": "5–6pm", "task": "Write insight: 'How e-commerce uses urgency and anchoring to engineer sales'.", "type": "output"}
                ],
                "outcome": "Seasonal + pricing psychology layer complete."
            },
            {
                "title": "Consumer Funnel + Cart Abandonment",
                "tasks": [
                    {"time": "9–11am", "task": "Model e-commerce funnel: Awareness → Search → View → Cart → Checkout.", "type": "build"},
                    {"time": "11am–1pm", "task": "Analyze cart abandonment rates (industry benchmarks vs sample data).", "type": "research"},
                    {"time": "2–4pm", "task": "Map FOMO triggers: countdown timers, stock alerts. Use data to prove effectiveness.", "type": "build"},
                    {"time": "4–5pm", "task": "Build: Conversion funnel chart in Excel to practice advanced charting.", "type": "build"},
                    {"time": "5–6pm", "task": "Write: 'The Anatomy of Cart Abandonment'.", "type": "output"}
                ],
                "outcome": "Consumer funnel model built in Excel."
            },
            {
                "title": "Digital Marketing + Ads Funnel",
                "tasks": [
                    {"time": "9–11am", "task": "Research Instagram ad formats (Reels, Carousel). CPM/CPC benchmarks.", "type": "research"},
                    {"time": "11am–1pm", "task": "Model: Ad spend → impression → click → purchase funnel. Calculate CAC.", "type": "build"},
                    {"time": "2–4pm", "task": "Build: Influencer vs brand ad conversion comparison (mock or sample data).", "type": "build"},
                    {"time": "4–5pm", "task": "Write SQL queries to find highest LTV (Lifetime Value) customer segments.", "type": "build"},
                    {"time": "5–6pm", "task": "Write: 'Why Reels ads outperform everything else in e-commerce'.", "type": "output"}
                ],
                "outcome": "Digital ads analysis complete. Ad funnel model built."
            },
            {
                "title": "Quick Commerce Deep Dive",
                "tasks": [
                    {"time": "9–11am", "task": "Research Blinkit, Instamart, Zepto market data. GMV, city presence.", "type": "research"},
                    {"time": "11am–1pm", "task": "Build Quick commerce comparison matrix: speed, AOV, category strength.", "type": "build"},
                    {"time": "2–4pm", "task": "Analyze Dark store economics: Cost per delivery vs traditional logistics.", "type": "research"},
                    {"time": "4–5pm", "task": "Build: 'Time vs Price' consumer decision matrix.", "type": "build"},
                    {"time": "5–6pm", "task": "Write: 'Time is replacing price as the #1 purchase decision factor'.", "type": "output"}
                ],
                "outcome": "Quick commerce business model documented."
            },
            {
                "title": "Conglomerate Strategy + Offline Impact",
                "tasks": [
                    {"time": "9–11am", "task": "Map conglomerate strategies: Reliance (JioMart), Tata (BigBasket).", "type": "research"},
                    {"time": "11am–1pm", "task": "Analyze Impact on kirana stores — footfall loss, hybrid models.", "type": "build"},
                    {"time": "2–4pm", "task": "Compile all e-commerce data into a master SQL database for final querying.", "type": "build"},
                    {"time": "4–5pm", "task": "Export clean views for dashboarding.", "type": "data"},
                    {"time": "5–6pm", "task": "Write meta insight: 'E-commerce is controlling attention and logistics'.", "type": "output"}
                ],
                "outcome": "Conglomerate layer complete. Database ready for BI."
            },
            {
                "title": "E-Commerce Dashboard + Report Build",
                "tasks": [
                    {"time": "9–11am", "task": "Build Power BI dashboard: Funnel Drop-offs, Seasonal Heatmaps, CAC Analysis.", "type": "build"},
                    {"time": "11am–1pm", "task": "Publish dashboard to Power BI Service.", "type": "output"},
                    {"time": "2–4pm", "task": "Write E-commerce Deep Report (8 pages). Combine insights and visuals.", "type": "write"},
                    {"time": "4–5pm", "task": "Format in Canva, export as PDF, upload to portfolio folder.", "type": "design"},
                    {"time": "5–6pm", "task": "Write LinkedIn post: 'E-commerce Growth Analytics Project Complete'.", "type": "content"}
                ],
                "outcome": "Project 3 completely finished. Power BI skills reinforced."
            },
            {
                "title": "Week 5 Audit & Portfolio Setup",
                "tasks": [
                    {"time": "9–11am", "task": "Audit all 3 projects: Ensure SQL files, Jupyter notebooks, and PDFs are in GitHub.", "type": "review"},
                    {"time": "11am–1pm", "task": "Design portfolio website structure in Figma (Home, Projects, About).", "type": "plan"},
                    {"time": "2–4pm", "task": "Write CV bullet points for all 3 projects using XYZ formula.", "type": "write"},
                    {"time": "4–5pm", "task": "Research Next.js, React, and Tailwind CSS basics for Week 6.", "type": "learn"},
                    {"time": "5–6pm", "task": "Celebrate! The core Data Analyst portfolio is fully built.", "type": "reflect"}
                ],
                "outcome": "Projects audited. Ready for Web Dev phase."
            }
        ]
    },
    # WEEK 6
    {
        "week": 6,
        "label": "Web Portfolio & Brand",
        "theme": "React, UI/UX & Deployment",
        "color": "BLUE",
        "days": [
            {
                "title": "Learn UI/UX & Tailwind CSS",
                "tasks": [
                    {"time": "9–11am", "task": "Learn UI/UX Basics: Color theory, typography, whitespace, Dark themes.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Learn HTML/CSS Basics: Flexbox, Grid, semantic tags.", "type": "learn"},
                    {"time": "2–4pm", "task": "Learn Tailwind CSS: Utility classes, custom configurations, responsive design.", "type": "learn"},
                    {"time": "4–5pm", "task": "Design System: Finalize colors (Accent, Dark BG) for your portfolio.", "type": "design"},
                    {"time": "5–6pm", "task": "Export assets from Figma.", "type": "output"}
                ],
                "outcome": "Solidified web design and styling fundamentals."
            },
            {
                "title": "React & Next.js Foundation",
                "tasks": [
                    {"time": "9–11am", "task": "React Refresher: Components, props, useState, useEffect.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Next.js Basics: App Router, Server vs Client components.", "type": "learn"},
                    {"time": "2–4pm", "task": "Setup Project: Init Next.js + Tailwind. Install Framer Motion, React Icons.", "type": "setup"},
                    {"time": "4–5pm", "task": "Build global layout, navbar, and footer components.", "type": "build"},
                    {"time": "5–6pm", "task": "Deploy empty skeleton to Vercel.", "type": "output"}
                ],
                "outcome": "Next.js app created and deployed live."
            },
            {
                "title": "Build Portfolio Core UI",
                "tasks": [
                    {"time": "9–11am", "task": "Build Hero Section: Typing text, floating elements, resume CTA.", "type": "build"},
                    {"time": "11am–1pm", "task": "Build Skills Section: Interactive progress bars for SQL, Python, Power BI.", "type": "build"},
                    {"time": "2–4pm", "task": "Build Projects Grid: Cards for IPL, OTT, E-commerce with glassmorphism.", "type": "build"},
                    {"time": "4–5pm", "task": "Add Framer Motion scroll-reveal animations.", "type": "build"},
                    {"time": "5–6pm", "task": "Test responsiveness on mobile and tablet.", "type": "build"}
                ],
                "outcome": "Core UI built with animations."
            },
            {
                "title": "Integrate Projects & Resume",
                "tasks": [
                    {"time": "9–11am", "task": "Integrate Dashboards: Embed or link Streamlit/Tableau/Power BI dashboards.", "type": "build"},
                    {"time": "11am–1pm", "task": "Link Deep Reports: Ensure PDFs open cleanly from the project cards.", "type": "build"},
                    {"time": "2–4pm", "task": "Upload updated PDF Resume. Ensure download button works.", "type": "build"},
                    {"time": "4–5pm", "task": "Write 'About Me' section detailing your shift to Analytics + Tech.", "type": "write"},
                    {"time": "5–6pm", "task": "Push to GitHub, trigger Vercel deploy.", "type": "output"}
                ],
                "outcome": "Data projects fully integrated into tech portfolio."
            },
            {
                "title": "SEO & Personal Brand Engine",
                "tasks": [
                    {"time": "9–11am", "task": "SEO Setup: Add meta tags, Open Graph images, semantic HTML.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Add Google Analytics/Vercel Analytics to track recruiter visits.", "type": "setup"},
                    {"time": "2–4pm", "task": "LinkedIn Overhaul: Add professional photo, Canva banner, update Headline.", "type": "build"},
                    {"time": "4–5pm", "task": "Pin Portfolio URL, IPL Dashboard, and E-commerce report to Featured section.", "type": "build"},
                    {"time": "5–6pm", "task": "Write LinkedIn post: 'My Data Analyst Portfolio is Live'.", "type": "content"}
                ],
                "outcome": "Portfolio is SEO optimized and linked to a strong personal brand."
            },
            {
                "title": "Resume Targeting & CV Polish",
                "tasks": [
                    {"time": "9–11am", "task": "CV Strategy: Rewrite bullet points using the XYZ formula.", "type": "learn"},
                    {"time": "11am–1pm", "task": "Version 1 (Data Analyst): Highlight SQL, Python, Power BI, IPL.", "type": "write"},
                    {"time": "2–4pm", "task": "Version 2 (Product Analyst): Highlight Funnel analysis, OTT metrics, E-commerce psychology.", "type": "write"},
                    {"time": "4–5pm", "task": "Create master Job Tracker sheet in Excel (Company, Role, Status, Follow-up).", "type": "plan"},
                    {"time": "5–6pm", "task": "Ask 3 mentors/seniors to review the portfolio and CV.", "type": "review"}
                ],
                "outcome": "2 targeted CVs completed. Tracking system ready."
            },
            {
                "title": "Week 6 Review & Launch",
                "tasks": [
                    {"time": "9–11am", "task": "Implement feedback from mentors on Portfolio & CV.", "type": "build"},
                    {"time": "11am–1pm", "task": "Apply to 5 roles: mix of Data, Product, Business Analyst.", "type": "apply"},
                    {"time": "2–4pm", "task": "Write customized cover letter templates.", "type": "write"},
                    {"time": "4–5pm", "task": "Start Sahitya Rachanalu creative project planning.", "type": "plan"},
                    {"time": "5–6pm", "task": "Celebrate! You are now actively in the job market.", "type": "reflect"}
                ],
                "outcome": "First batch of applications sent. Portfolio launched."
            }
        ]
    },
    # WEEK 7
    {
        "week": 7,
        "label": "Sahitya Rachanalu Platform",
        "theme": "Creative Tech MVP",
        "color": "RED",
        "days": [
            {
                "title": "Sahitya Foundation & UI",
                "tasks": [
                    {"time": "9–11am", "task": "Setup Project: Init Next.js + Tailwind for Sahitya Rachanalu.", "type": "setup"},
                    {"time": "11am–1pm", "task": "Design 'Cultural yet Modern' UI in Figma (Cinematic layout).", "type": "design"},
                    {"time": "2–4pm", "task": "Build Landing Page: Hero section with Telugu quote + cinematic background.", "type": "build"},
                    {"time": "4–5pm", "task": "Deploy to Vercel with custom domain (sahityarachanalu.com).", "type": "output"},
                    {"time": "5–6pm", "task": "Setup routing for Novels, Lyrics, Cinepedia.", "type": "build"}
                ],
                "outcome": "Sahitya MVP scaffolded and deployed."
            },
            {
                "title": "Lyrics Engine & MDX",
                "tasks": [
                    {"time": "9–11am", "task": "Build Lyrics Dashboard: Grid layout for songs (Spotify style).", "type": "build"},
                    {"time": "11am–1pm", "task": "Learn Markdown/MDX in Next.js to write stories natively in code.", "type": "learn"},
                    {"time": "2–4pm", "task": "Finalize 3 original Telugu song lyrics with translations.", "type": "write"},
                    {"time": "4–5pm", "task": "Map the 3 songs into a JSON file and render dynamically.", "type": "build"},
                    {"time": "5–6pm", "task": "Add interactive UI: 'Like' buttons, copy-to-clipboard functionality.", "type": "build"}
                ],
                "outcome": "Spotify-style lyrics engine and MDX reader built."
            },
            {
                "title": "Cinepedia & Database",
                "tasks": [
                    {"time": "9–11am", "task": "Design JSON schema for Cinepedia (Director, Themes, Legacy).", "type": "plan"},
                    {"time": "11am–1pm", "task": "Build Cinepedia UI: Film cards with hover effects.", "type": "build"},
                    {"time": "2–4pm", "task": "Write deep-dive analyses for 3 films (2 Telugu, 1 Hindi).", "type": "write"},
                    {"time": "4–5pm", "task": "Build Fictionary: Card-flip UI for famous dialogues.", "type": "build"},
                    {"time": "5–6pm", "task": "Deploy updates. Cross-link entries.", "type": "output"}
                ],
                "outcome": "Unique film database (Cinepedia) launched."
            },
            {
                "title": "Creative Polish & Integration",
                "tasks": [
                    {"time": "9–11am", "task": "Build Meme/GIF Keyboard component with custom Telugu emojis.", "type": "build"},
                    {"time": "11am–1pm", "task": "Global UI Polish: Ensure colors and typography match the theme.", "type": "design"},
                    {"time": "2–4pm", "task": "Portfolio Update: Add 'Founder @ Sahitya' to main tech portfolio.", "type": "build"},
                    {"time": "4–5pm", "task": "Cross-Linking: Ensure tech portfolio points to Sahitya and vice versa.", "type": "build"},
                    {"time": "5–6pm", "task": "Share Sahitya link in WhatsApp/Telegram groups for beta testing.", "type": "output"}
                ],
                "outcome": "Both platforms technically and strategically unified."
            },
            {
                "title": "Interview Prep — Technical",
                "tasks": [
                    {"time": "9–11am", "task": "Practice: 10 Advanced SQL questions (Window functions, CTEs).", "type": "practice"},
                    {"time": "11am–1pm", "task": "Practice: Python Pandas — solve 5 business questions on a new dataset in 1 hour.", "type": "practice"},
                    {"time": "2–4pm", "task": "Practice: Excel/Power BI — build a rapid pivot/DAX report in 30 mins.", "type": "practice"},
                    {"time": "4–5pm", "task": "Practice verbal pitch: 'Walk me through your IPL/E-commerce project'.", "type": "practice"},
                    {"time": "5–6pm", "task": "Record yourself pitching projects. Review and refine.", "type": "practice"}
                ],
                "outcome": "Technical interview reflexes sharpened."
            },
            {
                "title": "Interview Prep — Behavioral",
                "tasks": [
                    {"time": "9–11am", "task": "Write STAR answers: Tell me about yourself, Why analytics?, Biggest challenge.", "type": "practice"},
                    {"time": "11am–1pm", "task": "Product Sense Practice: 'Diagnose a 20% drop in Hotstar viewership'.", "type": "practice"},
                    {"time": "2–4pm", "task": "Research target companies: recent news, revenue models, product issues.", "type": "research"},
                    {"time": "4–5pm", "task": "Prepare 3 smart questions to ask interviewers.", "type": "practice"},
                    {"time": "5–6pm", "task": "Mock interview with a friend or mentor.", "type": "practice"}
                ],
                "outcome": "Behavioral and product case questions rehearsed."
            },
            {
                "title": "Week 7 Review & Applications Push",
                "tasks": [
                    {"time": "9–11am", "task": "Apply to 10 new roles. Focus on LinkedIn jobs and company portals.", "type": "apply"},
                    {"time": "11am–1pm", "task": "Referral outreach: Message 5 alumni or connections at target companies.", "type": "network"},
                    {"time": "2–4pm", "task": "Follow up on applications sent in Week 6.", "type": "track"},
                    {"time": "4–5pm", "task": "Post on LinkedIn: Share an insight from Sahitya or your SQL query library.", "type": "content"},
                    {"time": "5–6pm", "task": "Review tracking sheet. Plan the final week sprint.", "type": "review"}
                ],
                "outcome": "Network expanded. Application funnel filled."
            }
        ]
    },
    # WEEK 8
    {
        "week": 8,
        "label": "Final Sprint & Job Hunt",
        "theme": "Execution & Consistency",
        "color": "GREEN",
        "days": [
            {
                "title": "PKL Analytics (Bonus Differentiator)",
                "tasks": [
                    {"time": "9–11am", "task": "Download Pro Kabaddi League (PKL) dataset from Kaggle.", "type": "data"},
                    {"time": "11am–1pm", "task": "Basic analysis: Top raiders, defenders, team win rates.", "type": "build"},
                    {"time": "2–4pm", "task": "Build Player value vs contract analysis (apply IPL logic to PKL).", "type": "build"},
                    {"time": "4–5pm", "task": "Create a quick 1-page report or 1-page Power BI dashboard.", "type": "build"},
                    {"time": "5–6pm", "task": "Add to portfolio as a 'Mini-Project'. Highlights versatility.", "type": "output"}
                ],
                "outcome": "Added a unique sports analytics project to stand out."
            },
            {
                "title": "Advanced SQL & LeetCode Sprint",
                "tasks": [
                    {"time": "9–11am", "task": "Take a timed SQL test on HackerRank or LeetCode.", "type": "practice"},
                    {"time": "11am–1pm", "task": "Review missed questions. Deep dive into complex JOINs and subqueries.", "type": "review"},
                    {"time": "2–4pm", "task": "Apply 5 new applications while taking breaks.", "type": "apply"},
                    {"time": "4–5pm", "task": "Update your GitHub 'SQL Query Library' with complex solutions.", "type": "build"},
                    {"time": "5–6pm", "task": "Post a SQL tip or snippet on LinkedIn.", "type": "content"}
                ],
                "outcome": "SQL skills hardened for technical rounds."
            },
            {
                "title": "Content Engine & Networking",
                "tasks": [
                    {"time": "9–11am", "task": "Write 3 LinkedIn post drafts based on project insights.", "type": "write"},
                    {"time": "11am–1pm", "task": "Create 1 Instagram/LinkedIn Carousel: '5 things I learned analyzing IPL'.", "type": "design"},
                    {"time": "2–4pm", "task": "Send personalized LinkedIn requests to 10 Data/Product Managers.", "type": "network"},
                    {"time": "4–5pm", "task": "Engage meaningfully with 5 posts in the analytics community.", "type": "network"},
                    {"time": "5–6pm", "task": "Schedule posts using Buffer.", "type": "output"}
                ],
                "outcome": "Social presence active and automated."
            },
            {
                "title": "Application Scaling",
                "tasks": [
                    {"time": "9–11am", "task": "Targeted applications: Find 5 roles requiring specific skills you have (e.g., Tableau + Python).", "type": "apply"},
                    {"time": "11am–1pm", "task": "Tailor CV specifically for those 5 roles.", "type": "write"},
                    {"time": "2–4pm", "task": "Submit applications and find hiring managers to DM.", "type": "apply"},
                    {"time": "4–5pm", "task": "Apply to 5 generic roles (internships/junior analyst).", "type": "apply"},
                    {"time": "5–6pm", "task": "Update Excel tracker.", "type": "track"}
                ],
                "outcome": "High-quality, tailored applications submitted."
            },
            {
                "title": "Mock Assessment Day",
                "tasks": [
                    {"time": "9–11am", "task": "Simulate a take-home assignment: Find a messy dataset, clean it, build a dashboard in 2 hours.", "type": "practice"},
                    {"time": "11am–1pm", "task": "Write a 1-page summary of findings.", "type": "write"},
                    {"time": "2–4pm", "task": "Review your speed and output quality. Identify bottlenecks.", "type": "review"},
                    {"time": "4–5pm", "task": "Fix any portfolio bugs discovered during the week.", "type": "build"},
                    {"time": "5–6pm", "task": "Rest.", "type": "reflect"}
                ],
                "outcome": "Ready for company take-home assignments."
            },
            {
                "title": "Final Portfolio Audit",
                "tasks": [
                    {"time": "9–11am", "task": "Check every link, image, and download button on portfolio.", "type": "review"},
                    {"time": "11am–1pm", "task": "Check GitHub repos: READMEs should be flawless with screenshots.", "type": "review"},
                    {"time": "2–4pm", "task": "Check Sahitya Rachanalu: ensure mobile view is perfect.", "type": "review"},
                    {"time": "4–5pm", "task": "Update LinkedIn featured section if needed.", "type": "build"},
                    {"time": "5–6pm", "task": "Write 'Day 60' LinkedIn post draft.", "type": "write"}
                ],
                "outcome": "All digital assets are pristine."
            },
            {
                "title": "Day 60: The Launch",
                "tasks": [
                    {"time": "9–11am", "task": "Publish '60 Days of Building' post on LinkedIn. Tag mentors/tools used.", "type": "content"},
                    {"time": "11am–1pm", "task": "Send final batch of 5 applications.", "type": "apply"},
                    {"time": "2–4pm", "task": "Review the entire 60 days. Write a private reflection document.", "type": "reflect"},
                    {"time": "4–5pm", "task": "Plan Month 3: Continuous interviewing, Leetcode, and maybe a Machine Learning intro.", "type": "plan"},
                    {"time": "5–6pm", "task": "Celebrate! You have transformed your skills and built a world-class portfolio.", "type": "reflect"}
                ],
                "outcome": "60-Day Roadmap Complete."
            }
        ]
    }
]

# ─────────────────────────────────────────────────────────────────
# 16-WEEK DATA ANALYTICS ROADMAP (2026) — mapped to 8-week days
# Resources appear at 6am BEFORE the daily DSA/Core warmup
# ─────────────────────────────────────────────────────────────────
resource_tasks_by_day = {
    # ── WEEK 1: SQL Foundations (16W Wk 1–3) ──
    4: [
        {"time": "6–7am", "task": "📺 [16W·SQL] Watch: Luke Barousse – SQL for Data Analytics (4 hrs) | Goal: SELECT, WHERE, ORDER BY, GROUP BY, HAVING", "type": "watch", "link": "https://www.youtube.com/watch?v=7mz73uXD9DA"},
    ],
    5: [
        {"time": "6–7am", "task": "📺 [16W·SQL] Watch: freeCodeCamp – SQL Course for Beginners (Full) | Goal: JOINs, subqueries, window functions", "type": "watch", "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA"},
    ],
    6: [
        {"time": "6–7am", "task": "📺 [16W·SQL] Watch (Optional): SQL For Data Analysis – Full Portfolio Project", "type": "watch", "link": "https://www.youtube.com/watch?v=zZpMvAedh_E"},
    ],
    # ── WEEK 2: Python + Power BI (16W Wk 4–5 & 7–8) ──
    9: [
        {"time": "6–7am", "task": "📺 [16W·BI] Watch: Power BI Tutorial for Beginners to Advanced | Goal: interface, import, visuals, slicers", "type": "watch", "link": "https://www.youtube.com/watch?v=cyWVzAQF9YU"},
    ],
    10: [
        {"time": "6–7am", "task": "📺 [16W·BI] Watch: Learn Power BI in 7 Hours – Beginner to Advanced with Dashboard Project", "type": "watch", "link": "https://www.youtube.com/watch?v=KdC5R7oPCAI"},
    ],
    11: [
        {"time": "6–7am", "task": "📺 [16W·PY] Watch: Python for Data Analytics – Full Course for Beginners | Goal: data types, loops, functions, pandas, EDA", "type": "watch", "link": "https://www.youtube.com/watch?v=wUSDVGivd-8"},
    ],
    12: [
        {"time": "6–7am", "task": "📺 [16W·PY] Watch: Data Analysis with Python – Full Course (NumPy, Pandas, Matplotlib, Seaborn)", "type": "watch", "link": "https://www.youtube.com/watch?v=r-uOLxNrNk8"},
    ],
    13: [
        {"time": "6–7am", "task": "📺 [16W·PY] Watch (Optional): Python for Data Analysis – Full Project for Beginners", "type": "watch", "link": "https://www.youtube.com/watch?v=VX6kCjwdNPw"},
    ],
    # ── WEEK 2 Review = 16W Wk 6: SQL + Python Mini Project ──
    14: [
        {"time": "6–6:30am", "task": "📺 [16W·PROJ] Watch & Replicate: End to End Data Analytics Project (Python + SQL)", "type": "watch", "link": "https://www.youtube.com/watch?v=uL0-6kfiH3g"},
        {"time": "6:30–7am", "task": "📺 [16W·PROJ] Alt: End to End SQL Portfolio Project for Data Analyst", "type": "watch", "link": "https://www.youtube.com/watch?v=sxgAb6FGTBE"},
    ],
    # ── WEEK 3: IPL / Storytelling + Advanced Dashboards (16W Wk 9–10) ──
    19: [
        {"time": "6–6:30am", "task": "📺 [16W·STORY] Watch: Power BI Sales Dashboard Project (End-to-End) | Goal: KPIs, drill-downs, narrative", "type": "watch", "link": "https://www.youtube.com/watch?v=fZn83JRt4Nk"},
        {"time": "6:30–7am", "task": "📺 [16W·STORY] Watch: How to Explain Your Project in Power BI Interview (storytelling)", "type": "watch", "link": "https://www.youtube.com/watch?v=lnItIEHp8g8"},
    ],
    # ── WEEK 3 Review = 16W Wk 11: Data Modeling / Star Schema ──
    21: [
        {"time": "6–6:30am", "task": "📺 [16W·MODEL] Watch: Data Modelling & Star Schema for Power BI in 20 Min", "type": "watch", "link": "https://www.youtube.com/watch?v=4ePNrdxWtY0"},
        {"time": "6:30–7am", "task": "📺 [16W·MODEL] Watch: Star Schema Data Modeling Power BI Tutorial 2024", "type": "watch", "link": "https://www.youtube.com/watch?v=MXiH6rdUM1I"},
    ],
    # ── WEEK 4: OTT = 16W Wk 12: Data Engineering / ETL Intro ──
    27: [
        {"time": "6–7am", "task": "📺 [16W·DE] Watch: Build an ELT Pipeline in 1 Hour (dbt, Snowflake, Airflow) | Goal: ingest→transform→load→BI", "type": "watch", "link": "https://www.youtube.com/watch?v=OLXkGB7krGo"},
    ],
    28: [
        {"time": "6–7am", "task": "📺 [16W·DE] Watch: How to Create an ELT Pipeline using Airflow, Snowflake, and dbt", "type": "watch", "link": "https://www.youtube.com/watch?v=VWnakVAT-Bk"},
    ],
    # ── WEEK 5: E-Commerce = 16W Wk 13: dbt + Airflow + Snowflake Project ──
    33: [
        {"time": "6–7am", "task": "📺 [16W·DE] Watch: DBT Beginner to Pro – End to End Pipeline with Airflow, Snowflake & DBT", "type": "watch", "link": "https://www.youtube.com/watch?v=RXWYPZ3T9ys"},
    ],
    34: [
        {"time": "6–6:30am", "task": "📺 [16W·DE] Watch: Snowflake Data Engineering – Build End-to-End Pipelines with DBT & Airflow", "type": "watch", "link": "https://www.youtube.com/watch?v=iWjSsniB-RU"},
        {"time": "6:30–7am", "task": "📺 [16W·DE] Watch (Optional): End-to-End E-Commerce Data Pipeline – Snowflake, dbt, Airflow", "type": "watch", "link": "https://www.youtube.com/watch?v=AmRvNJaECqo"},
    ],
    # ── WEEK 6: Portfolio = 16W Wk 14: AI + Forecasting ──
    36: [
        {"time": "6–6:30am", "task": "📺 [16W·AI] Watch: Time Series Forecasting in Python – Tutorial for Beginners (freeCodeCamp)", "type": "watch", "link": "https://www.youtube.com/watch?v=fxx_E0ojKrc"},
        {"time": "6:30–7am", "task": "📺 [16W·AI] Watch: Power BI Forecasting Tutorial (Built-in Analytics)", "type": "watch", "link": "https://www.youtube.com/watch?v=96qsaQUVNcg"},
    ],
    37: [
        {"time": "6–6:30am", "task": "📺 [16W·AI] Watch: AI-Driven Analytics in Power BI (Key Influencers, Q&A, Smart Narratives)", "type": "watch", "link": "https://www.youtube.com/watch?v=cKEbTXY0xQo"},
        {"time": "6:30–7am", "task": "📺 [16W·AI] Watch: ChatGPT for Data Analytics – Real Use Cases (SQL, Python, Insights)", "type": "watch", "link": "https://www.youtube.com/watch?v=s6g-Ki0iemI"},
    ],
    # ── WEEK 6: Portfolio = 16W Wk 15: Portfolio Building ──
    38: [
        {"time": "6–6:30am", "task": "📺 [16W·PORT] Watch: The ONLY Data Analytics Portfolio You Need (Blueprint)", "type": "watch", "link": "https://www.youtube.com/watch?v=QyQYckvmxtI"},
        {"time": "6:30–7am", "task": "📺 [16W·PORT] Watch: How to Build a Professional Data Portfolio Website (No-Code)", "type": "watch", "link": "https://www.youtube.com/watch?v=U69s3XXBMbg"},
    ],
    39: [
        {"time": "6–7am", "task": "📺 [16W·AI] Watch: Copilot in Power BI – How to Use AI for Measures, Insights & Reports", "type": "watch", "link": "https://www.youtube.com/watch?v=J4l34uUqHtw"},
    ],
    # ── WEEK 7: Sahitya / Interviews = 16W Wk 16 ──
    47: [
        {"time": "6–6:30am", "task": "📺 [16W·INT] Watch: How to Explain Your Project Like a Pro in Interviews", "type": "watch", "link": "https://www.youtube.com/watch?v=iP3MuGqNI24"},
        {"time": "6:30–7am", "task": "📺 [16W·INT] Watch: How to Explain Project in Data Analytics Interview", "type": "watch", "link": "https://www.youtube.com/watch?v=nsKItCQCZkA"},
    ],
    48: [
        {"time": "6–7am", "task": "📺 [16W·INT] Watch: Going Deep on Past Projects in Interviews", "type": "watch", "link": "https://www.youtube.com/watch?v=wRSLJKSum2k"},
    ],
    # ── WEEK 8: Final Sprint = extra AI/ChatGPT resources ──
    51: [
        {"time": "6–6:30am", "task": "📺 [16W·AI] Watch: Using ChatGPT with Power BI – End-to-End Analytics Project", "type": "watch", "link": "https://www.youtube.com/watch?v=MjeDkDHJqzc"},
        {"time": "6:30–7am", "task": "📺 [16W·AI] Watch: ChatGPT for Data Analysis: 7 Practical Use Cases", "type": "watch", "link": "https://www.youtube.com/watch?v=6h5xKWoDZ_U"},
    ],
    52: [
        {"time": "6–6:30am", "task": "📺 [16W·AI] Watch: How to Use ChatGPT for SQL & Data Queries (Practical)", "type": "watch", "link": "https://www.youtube.com/watch?v=Z1lw4I7tcVQ"},
        {"time": "6:30–7am", "task": "📺 [16W·AI] Watch: Microsoft Excel AI Features (Data Analysis & Insights)", "type": "watch", "link": "https://www.youtube.com/watch?v=2a2GR3Ee2s0"},
    ],
    53: [
        {"time": "6–7am", "task": "📺 [16W·AI] Watch: Complete Time Series Analysis and Forecasting with Python", "type": "watch", "link": "https://www.youtube.com/watch?v=A3fowDMo8mM"},
    ],
}

# Inject DSA, Core and 16-Week resources into every day
day_counter = 0
for week in weeks_data:
    for day in week['days']:
        dsa = tuf_dsa_topics[day_counter % len(tuf_dsa_topics)]
        core = tuf_core_topics[day_counter % len(tuf_core_topics)]
        day['day'] = day_counter + 1

        # Prepend the DSA/Aptitude tasks to the tasks list
        dsa_task = {"time": "7–8am", "task": f"Takeuforward DSA: {dsa}", "type": "practice"}
        apt_task = {"time": "8–9am", "task": f"Takeuforward Core: {core}", "type": "practice"}
        day['tasks'].insert(0, apt_task)
        day['tasks'].insert(0, dsa_task)

        # Prepend 16-week resource tasks (appear at 6am, before DSA)
        day_num = day_counter + 1
        if day_num in resource_tasks_by_day:
            for res in reversed(resource_tasks_by_day[day_num]):
                day['tasks'].insert(0, res)

        day_counter += 1

# Convert weeks_data to a JavaScript string representation
import json
weeks_js = "const weeks = " + json.dumps(weeks_data, indent=2) + ";"

# Remove quotes from keys and color variables to make it valid JS if needed, but JSON is valid JS.
# However, colors like "BLUE" need to be variables, not strings.
weeks_js = re.sub(r'"color": "(BLUE|PURPLE|GREEN|ACCENT|RED)"', r'"color": \1', weeks_js)

with open('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing weeks array
# Find "const weeks = [" and the next "];" that precedes "const finalChecklist ="
start_idx = content.find("const weeks = [")
end_idx = content.find("const finalChecklist =")

if start_idx != -1 and end_idx != -1:
    # Find the precise end of the weeks array
    end_array_idx = content.rfind("];", start_idx, end_idx) + 2
    
    before = content[:start_idx]
    after = content[end_array_idx:]
    
    new_content = before + weeks_js + "\n\n" + after
    
    with open('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\roadmap.jsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated roadmap.jsx with Roadmap.sh integrated curriculum!")
else:
    print("Failed to find boundaries.")
