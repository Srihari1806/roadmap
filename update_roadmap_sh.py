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
  # PHASE 1: IBM Excel & Google Data Process (Weeks 1-2)
  "IBM Course 2: Excel Functions & Data Cleaning", "IBM Course 2: Advanced Excel (VLOOKUP, INDEX-MATCH)",
  "Google Course 2: Asking Effective Questions (S.M.A.R.T)", "Google Course 3: Data Integrity & Cleanliness",
  "IBM Course 3: Data Viz & Dashboards with Excel", "IBM Course 3: Intro to IBM Cognos Dashboards",
  "Google Course 3: Managing Data Security & Ethics", "Google Course 1: The 6-Step Data Process (Ask-Act)",
  "IBM Course 2: Power Query for Automated Cleaning", "IBM Course 2: Pivot Table Analysis & Slicers",
  "Google Course 3: SQL for Data Preparation", "IBM Course 3: Building Interactive Reports",
  "IBM Course 3: Data Storytelling with Cognos", "Google Course 4: Handling Biased Data",
  
  # PHASE 2: TUF SQL Foundations & IBM Python (Weeks 3-4)
  "TUF SQL: Getting Started & Foundations", "TUF SQL: Core Database Structures",
  "TUF SQL: Querying Essentials (SELECT, SORT)", "TUF SQL: Aggregation (GROUP BY, SUM)",
  "IBM Course 4: Python Data Types, Loops, Functions", "IBM Course 4: Pandas for Data Cleaning",
  "IBM Course 4: Handling Missing Data with Pandas", "IBM Course 4: Merging & Grouping DataFrames",
  "TUF SQL: Set Operations & Advanced Filters", "TUF SQL: INNER & LEFT JOINs",
  "IBM Course 5: Python Project - Analyzing IPL Trends", "TUF SQL: Subqueries & Nested Logic",
  "TUF SQL: CTEs (Common Table Expressions)", "TUF SQL: Dates & Time Manipulation",
  
  # PHASE 3: IBM Advanced Python & Google Storytelling (Weeks 5-6)
  "IBM Course 7: Data Analysis with Python (EDA)", "IBM Course 7: Predictive Modeling Foundations",
  "IBM Course 8: Data Viz with Python (Matplotlib/Seaborn)", "IBM Course 8: Statistical Plots & Heatmaps",
  "Google Course 6: Art of Visualization & Storytelling", "Google Course 6: Dashboard Design Principles",
  "IBM Course 8: Interactive Viz with Plotly/Dash", "IBM Course 8: Advanced Plotting Techniques",
  "TUF SQL: Window Functions (RANK, ROW_NUMBER)", "Advanced SQL: Query Optimization",
  "Advanced SQL: Indexing & Performance", "Advanced SQL: Stored Procedures",
  "Advanced SQL: Hard LeetCode SQL 1", "Advanced SQL: Hard LeetCode SQL 2",
  
  # PHASE 4: IBM Capstone & Google Job Prep (Weeks 7-8)
  "IBM Course 9: Capstone - Project Scoping & Data Prep", "IBM Course 9: Capstone - Deep Analysis & Viz",
  "Google Course 8: Case Study - Portfolio Construction", "DBMS: ACID Properties & Transactions",
  "DBMS: Normalization (1NF, 2NF, 3NF)", "DBMS: Concurrency Control",
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
        "label": "IPL Analytics Engine (9-Layer Build)",
        "theme": "Sports · Product · Revenue Intelligence",
        "color": "ACCENT",
        "days": [
            {
                "title": "Layer 1: On-Field Data Intelligence",
                "tasks": [
                    {"time": "9–11am", "task": "Build Metric: ROI = (Runs+Wickets) / Salary (Crores). Identify 'The Undervalued XI'.", "type": "build"},
                    {"time": "11am–1pm", "task": "Analysis: Toss vs Win Probability + Venue Bias (Spin vs Pace dominance per venue).", "type": "build"},
                    {"time": "2–4pm", "task": "Build Metric: Strike Rate under pressure & Economy in Powerplay vs Death Overs.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Generate Player Scoring Zone Heatmaps + over-by-over Win Probability graphs.", "type": "output"}
                ],
                "outcome": "On-field performance engine complete. Clutch Index leaderboard generated."
            },
            {
                "title": "Layer 2: IPL as a Product (Retention)",
                "tasks": [
                    {"time": "9–11am", "task": "Model User Journey: Match -> Highlights -> Fantasy -> Reels. Map drop-off points.", "type": "think"},
                    {"time": "11am–1pm", "task": "Build Metric: Avg Watch Time vs Peak Concurrency per match type.", "type": "build"},
                    {"time": "2–4pm", "task": "Engagement Spike Analysis: Match events (wickets/sixes) vs social velocity.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Retention Curve per match and 'Viewer Interest' funnel diagram.", "type": "output"}
                ],
                "outcome": "Product analytics lens applied. User engagement patterns identified."
            },
            {
                "title": "Layer 3 & 4: Business & Marketing ROI",
                "tasks": [
                    {"time": "9–11am", "task": "Revenue Model: Media Rights breakdown + Franchise Valuation growth (2010-2024).", "type": "build"},
                    {"time": "11am–1pm", "task": "Sponsorship Layer: ROI for Title vs Jersey vs Ground sponsors.", "type": "build"},
                    {"time": "2–4pm", "task": "Marketing Funnel: Seasonality effect & Brand Campaign velocity (Dream11/CRED).", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Franchise Valuation comparison chart + Campaign ROI table.", "type": "output"}
                ],
                "outcome": "Financial and Marketing engines unified. Revenue per viewer calculated."
            },
            {
                "title": "Layer 5 & 6: Macro & Social Impact",
                "tasks": [
                    {"time": "9–11am", "task": "Macro Analysis: IPL vs Movie industry revenue. Impact on OTT release calendars.", "type": "research"},
                    {"time": "11am–1pm", "task": "Local Economy: Impact on F&B and Fantasy gaming industry growth.", "type": "build"},
                    {"time": "2–4pm", "task": "Social Media Spikes: Track hashtag velocity vs viral match moments.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Social Virality graphs + Macro-Economic impact infographic.", "type": "output"}
                ],
                "outcome": "External ecosystem impact analyzed. Social momentum mapped."
            },
            {
                "title": "Layer 7 & 8: Strategy & Prediction",
                "tasks": [
                    {"time": "9–11am", "task": "Franchise Strategy: Analyze 'The CSK Model' vs 'The MI Model' of player retention.", "type": "think"},
                    {"time": "11am–1pm", "task": "Predictive Modeling: Linear regression on Player Auction Price vs Performance.", "type": "build"},
                    {"time": "2–4pm", "task": "Win Predictor: Build a basic ML model to predict match outcome based on mid-match stats.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: 'Strategic Advantage' matrix and Auction Price prediction chart.", "type": "output"}
                ],
                "outcome": "Advanced strategy and predictive analytics complete."
            },
            {
                "title": "Layer 9: The Final Interactive Engine",
                "tasks": [
                    {"time": "9–11am", "task": "Dashboard Prep: Clean all 8 layers' data into a master star schema.", "type": "data"},
                    {"time": "11am–1pm", "task": "Power BI / Tableau: Build interactive filters for Seasons, Teams, and Players.", "type": "build"},
                    {"time": "2–4pm", "task": "Visual UX: Apply premium dark theme and McKinsey-style chart layouts.", "type": "design"},
                    {"time": "4–6pm", "task": "Output: Live Interactive IPL Dashboard (The Mini-Cricbuzz + Consulting Hub).", "type": "output"}
                ],
                "outcome": "Project 1 Technical Build Complete. Dashboard is functional."
            },
            {
                "title": "Final Reports & Portfolio Launch",
                "tasks": [
                    {"time": "9–11am", "task": "Write Deep Report: 15-page PDF covering all 9 layers of IPL Ecosystem.", "type": "write"},
                    {"time": "11am–1pm", "task": "LinkedIn Content: Build 'IPL is not Cricket, it's a Product' carousel.", "type": "content"},
                    {"time": "2–4pm", "task": "Portfolio Update: Add IPL project case study with interactive links.", "type": "build"},
                    {"time": "4–6pm", "task": "Setup OTT Project: Download IMDB + Box Office + Hotstar datasets.", "type": "setup"}
                ],
                "outcome": "IPL Project officially published. Ready for Movie Intelligence week."
            }
        ]
    },
    # WEEK 4
    {
        "week": 4,
        "label": "OTT vs Theatre (9-Layer Build)",
        "theme": "Content · Audience · Distribution Intelligence",
        "color": "PURPLE",
        "days": [
            {
                "title": "Layer 1: Content & Genre Analytics",
                "tasks": [
                    {"time": "9–11am", "task": "Build Metric: Genre Performance ROI (Mass vs Niche). Track Regional Content growth.", "type": "build"},
                    {"time": "11am–1pm", "task": "Analysis: Pan-India vs Local box office trends. Completion Rate proxy on OTT.", "type": "build"},
                    {"time": "2–4pm", "task": "Insight: Identify content types that 'Win Theatre' vs 'Thrive on OTT'.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Genre vs Revenue Heatmap + National vs Regional growth chart.", "type": "output"}
                ],
                "outcome": "Content intelligence complete. Genre success metrics established."
            },
            {
                "title": "Layer 2: Reviews & Sentiment Engine",
                "tasks": [
                    {"time": "9–11am", "task": "Build Metric: IMDb/Social sentiment vs Box Office opening trajectory.", "type": "build"},
                    {"time": "11am–1pm", "task": "Analysis: Day 1 vs Day 3 revenue drop-off. Impact of Word-of-Mouth.", "type": "build"},
                    {"time": "2–4pm", "task": "Sentiment Score: Correlate review polarity with weekend occupancy %.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Sentiment vs Occupancy trend line and 'Reviews Sustainability' report.", "type": "output"}
                ],
                "outcome": "Audience sentiment mapped to financial performance."
            },
            {
                "title": "Layer 3 & 4: Distribution & Demographics",
                "tasks": [
                    {"time": "9–11am", "task": "Distribution analysis: Urban Multiplex (PVR/INOX) vs Rural Single Screen split.", "type": "build"},
                    {"time": "11am–1pm", "task": "Price Sensitivity: Impact of ticket pricing on footfall across screen tiers.", "type": "build"},
                    {"time": "2–4pm", "task": "Demographics: Map age group content preference (15-25 Action vs 25-40 Drama).", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Urban vs Rural revenue split + Demographic preference matrix.", "type": "output"}
                ],
                "outcome": "Audience and distribution layers complete."
            },
            {
                "title": "Layer 5 & 6: Booking & Content Lifecycle",
                "tasks": [
                    {"time": "9–11am", "task": "Booking Funnel: Model BookMyShow user journey (Search -> Select -> Pay).", "type": "build"},
                    {"time": "11am–1pm", "task": "Drop-off Analysis: Identify high-friction points in theatre booking vs OTT subscription.", "type": "build"},
                    {"time": "2–4pm", "task": "Lifecycle Analysis: Theatre-to-OTT release window shrinkage (2019 vs 2024).", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Funnel Drop-off diagram + Content Lifecycle curve (Moment vs Lifetime value).", "type": "output"}
                ],
                "outcome": "Product funnel and content lifecycle modeled."
            },
            {
                "title": "Layer 7 & 8: COVID Impact & Marketing",
                "tasks": [
                    {"time": "9–11am", "task": "COVID Timeline: Before (Theatre) vs During (OTT Boom) vs After (Hybrid Recovery).", "type": "research"},
                    {"time": "11am–1pm", "task": "Marketing Spikes: Analyze impact of Meme marketing vs Influencer collab velocity.", "type": "build"},
                    {"time": "2–4pm", "task": "Engagement Correlation: Track social virality vs opening day occupancy spikes.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Theatre Recovery Curve + Promotion vs Engagement spike graph.", "type": "output"}
                ],
                "outcome": "Market evolution and marketing impact analyzed."
            },
            {
                "title": "Layer 9: The Tableau Comparison Suite",
                "tasks": [
                    {"time": "9–11am", "task": "Database Merge: Join IMDb, Box Office, and Sentiment scores into a clean BI view.", "type": "data"},
                    {"time": "11am–1pm", "task": "Tableau Dashboard: Build side-by-side comparison of OTT vs Theatre metrics.", "type": "build"},
                    {"time": "2–4pm", "task": "Interactive UX: Build Genre/Language/Year filters for deep-dive analysis.", "type": "design"},
                    {"time": "4–6pm", "task": "Output: Live Tableau Dashboard covering all 8 layers of Movie Intelligence.", "type": "output"}
                ],
                "outcome": "Project 2 Technical Build Complete. Comparative dashboard live."
            },
            {
                "title": "Final Reports & E-Com Prep",
                "tasks": [
                    {"time": "9–11am", "task": "Write Deep Report: 10-page 'Consulting-Style' PDF on OTT vs Theatre Ecosystem.", "type": "write"},
                    {"time": "11am–1pm", "task": "LinkedIn Content: Build 'The Death and Rebirth of Theatres' case study.", "type": "content"},
                    {"time": "2–4pm", "task": "Portfolio Update: Integrate OTT dashboard and report into main site.", "type": "build"},
                    {"time": "4–6pm", "task": "Setup E-Com Project: Collect Amazon/Flipkart/Blinkit public datasets.", "type": "setup"}
                ],
                "outcome": "OTT Project wrapped. Moving to E-Commerce & Growth."
            }
        ]
    },
    # WEEK 5
    {
        "week": 5,
        "label": "E-Commerce + Ads (9-Layer Build)",
        "theme": "Growth · Psych · Logistics Economy",
        "color": "GREEN",
        "days": [
            {
                "title": "Layer 1: Seasonal Sales & Pricing",
                "tasks": [
                    {"time": "9–11am", "task": "Analyze Festival Spikes: Diwali/Big Billion Days vs Normal. GMV delta by category.", "type": "build"},
                    {"time": "11am–1pm", "task": "Anchor Pricing Study: Document fake vs real discount patterns. '₹29,999' psychology.", "type": "build"},
                    {"time": "2–4pm", "task": "Price Elasticity: Model sales lift vs discount % for High vs Low intent categories.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Category Performance Heatmap + Pricing Psychology infographic.", "type": "output"}
                ],
                "outcome": "Pricing and seasonal intelligence complete."
            },
            {
                "title": "Layer 2: Instagram Ads & Growth Funnel",
                "tasks": [
                    {"time": "9–11am", "task": "Ad Funnel: Model Ad Spend -> Impression -> Click -> Purchase. Calculate ROAS.", "type": "build"},
                    {"time": "11am–1pm", "task": "Format Battle: Compare Reels Ads vs Story Ads vs Influencer collaboration CAC.", "type": "build"},
                    {"time": "2–4pm", "task": "Conversion Velocity: Track time-to-purchase from first ad impression.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Ad ROI Comparison Table + Growth Funnel breakdown diagram.", "type": "output"}
                ],
                "outcome": "Growth analytics and ad funnel metrics modeled."
            },
            {
                "title": "Layer 3 & 4: Consumer Psych & Abandonment",
                "tasks": [
                    {"time": "9–11am", "task": "Cart Abandonment: Analyze reasons for 70%+ drop-off. Identify friction points.", "type": "build"},
                    {"time": "11am–1pm", "task": "FOMO & Urgency: Quantify lift from countdown timers and 'limited stock' alerts.", "type": "build"},
                    {"time": "2–4pm", "task": "Trust Indicators: Impact of 'Free Delivery' and '7-Day Return' on conversion.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Cart Abandonment pattern chart + Urgency Lift infographic.", "type": "output"}
                ],
                "outcome": "Consumer behavior and friction layers mapped."
            },
            {
                "title": "Layer 5 & 6: Quick Commerce & Speed",
                "tasks": [
                    {"time": "9–11am", "task": "Quick Commerce Battle: Blinkit vs Instamart vs Zepto market share & AOV.", "type": "build"},
                    {"time": "11am–1pm", "task": "Behavior Shift: Planned Weekly buying vs 10-min Instant buying patterns.", "type": "think"},
                    {"time": "2–4pm", "task": "Economic Model: Delivery speed vs Purchase probability correlation.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Quick Commerce comparison matrix + 'Time vs Price' decision chart.", "type": "output"}
                ],
                "outcome": "Quick commerce economy and speed impact modeled."
            },
            {
                "title": "Layer 7 & 8: Conglomerates & Offline Impact",
                "tasks": [
                    {"time": "9–11am", "task": "Ecosystem Battle: Reliance (Jio) vs Tata (Neu) vs Adani (Logistics) strategies.", "type": "research"},
                    {"time": "11am–1pm", "task": "Offline Impact: Analyze Kirana store footfall loss and JioMart onboarding model.", "type": "build"},
                    {"time": "2–4pm", "task": "Logistics Control: Map backend efficiency vs customer delivery experience.", "type": "build"},
                    {"time": "4–6pm", "task": "Output: Conglomerate Power Matrix + Offline vs Online market share chart.", "type": "output"}
                ],
                "outcome": "Market power dynamics and offline impact analyzed."
            },
            {
                "title": "Layer 9: The Growth Dashboard",
                "tasks": [
                    {"time": "9–11am", "task": "Master Data Schema: Integrate Sales, Ads, Psych, and Logistics data into SQL.", "type": "data"},
                    {"time": "11am–1pm", "task": "Power BI: Build 'Growth & Conversion' dashboard with ROAS/CAC interactive tracking.", "type": "build"},
                    {"time": "2–4pm", "task": "UX Design: Build a 'Live Sales' simulation view within the dashboard.", "type": "design"},
                    {"time": "4–6pm", "task": "Output: Final Interactive E-Commerce & Ads Growth Dashboard.", "type": "output"}
                ],
                "outcome": "Project 3 Technical Build Complete. Growth suite live."
            },
            {
                "title": "Meta-Insights & Portfolio Finalize",
                "tasks": [
                    {"time": "9–11am", "task": "Write Deep Report: 15-page PDF on 'The Future of Indian E-Commerce & Ads'.", "type": "write"},
                    {"time": "11am–1pm", "task": "Meta Insight: 'E-commerce is the control of Attention and Logistics'.", "type": "content"},
                    {"time": "2–4pm", "task": "Portfolio Launch: Final polish on all 3 analytics project pages.", "type": "build"},
                    {"time": "4–6pm", "task": "Rest. Celebrate the completion of the 3-Project Analytics Hub.", "type": "reflect"}
                ],
                "outcome": "Portfolio Ready. Project phase complete."
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
    # ── WEEK 1: Foundations & Excel ──
    1: [{"time": "6–7am", "task": "🎓 [Google] Foundations: Data, Data, Everywhere | Focus: The 6-Step Data Analysis Process", "type": "watch", "link": "https://www.coursera.org/learn/foundations-data"}],
    2: [{"time": "6–7am", "task": "🎓 [IBM] Excel Basics for Data Analysis | Focus: Formulas, cell referencing, data cleaning", "type": "watch", "link": "https://www.coursera.org/learn/excel-basics-data-analysis"}],
    3: [{"time": "6–7am", "task": "🎓 [Google] Ask Questions to Make Data-Driven Decisions | Focus: Structured thinking & SMART questions", "type": "watch", "link": "https://www.coursera.org/learn/ask-questions-make-decisions"}],
    
    # ── WEEK 2: Data Prep & Dashboards ──
    8: [{"time": "6–7am", "task": "🎓 [Google] Prepare Data for Exploration | Focus: Data types, storage, and ethics", "type": "watch", "link": "https://www.coursera.org/learn/data-preparation"}],
    9: [{"time": "6–7am", "task": "🎓 [IBM] Data Viz & Dashboards with Excel/Cognos | Focus: Pivot charts & Cognos intro", "type": "watch", "link": "https://www.coursera.org/learn/data-visualization-dashboards-excel-cognos"}],
    10: [{"time": "6–7am", "task": "🎓 [Google] Process Data from Dirty to Clean | Focus: SQL cleaning & data integrity", "type": "watch", "link": "https://www.coursera.org/learn/process-data"}],

    # ── WEEK 3: Python for Data Science (IPL Phase) ──
    15: [{"time": "6–7am", "task": "🎓 [IBM] Python for Data Science, AI & Development | Focus: Numpy & Pandas foundations", "type": "watch", "link": "https://www.coursera.org/learn/python-for-applied-data-science-ai"}],
    16: [{"time": "6–7am", "task": "🎓 [IBM] Python Project for Data Science | Focus: Scraping & analyzing real data", "type": "watch", "link": "https://www.coursera.org/learn/python-project-for-data-science"}],
    
    # ── WEEK 4: Advanced Analysis (OTT Phase) ──
    22: [{"time": "6–7am", "task": "🎓 [Google] Analyze Data to Answer Questions | Focus: Organizing data & complex calculations", "type": "watch", "link": "https://www.coursera.org/learn/analyze-data"}],
    23: [{"time": "6–7am", "task": "🎓 [IBM] Data Analysis with Python | Focus: Regression, predictive modeling & EDA", "type": "watch", "link": "https://www.coursera.org/learn/data-analysis-with-python"}],
    
    # ── WEEK 5: Data Storytelling (E-Commerce Phase) ──
    29: [{"time": "6–7am", "task": "🎓 [Google] Share Data Through the Art of Viz | Focus: Tableau & Storytelling", "type": "watch", "link": "https://www.coursera.org/learn/visualize-data"}],
    30: [{"time": "6–7am", "task": "🎓 [IBM] Data Visualization with Python | Focus: Matplotlib, Seaborn & Plotly", "type": "watch", "link": "https://www.coursera.org/learn/data-visualization-with-python"}],

    # ── WEEK 6 & 7: Capstones & Portfolio ──
    43: [{"time": "6–7am", "task": "🎓 [IBM] Data Analyst Capstone Project | Focus: End-to-end analysis & final report", "type": "watch", "link": "https://www.coursera.org/learn/data-analyst-capstone-project"}],
    44: [{"time": "6–7am", "task": "🎓 [Google] Google Data Analytics Capstone | Focus: Case studies & portfolio building", "type": "watch", "link": "https://www.coursera.org/learn/google-data-analytics-capstone"}],
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
    print("Successfully updated roadmap.jsx!")
else:
    print("Failed to find boundaries in roadmap.jsx.")

# --- ALSO UPDATE index.html (Standalone for GitHub Pages) ---
with open('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Find "const weeks = [" and the end of the array before "const finalChecklist ="
start_marker = "const weeks = ["
end_marker = "const finalChecklist ="

start_idx = html_content.find(start_marker)
next_marker_idx = html_content.find(end_marker)

if start_idx != -1 and next_marker_idx != -1:
    # Find the precise end of the weeks array (the last ]; before next marker)
    end_array_idx = html_content.rfind("];", start_idx, next_marker_idx) + 2
    
    before = html_content[:start_idx]
    after = html_content[end_array_idx:]
    
    # In index.html, we don't need "const weeks = " prefix if we replace the whole assignment
    # But for simplicity, we'll use the same weeks_js string and handle the "const weeks =" part
    new_html_content = before + weeks_js + "\n\n" + after
    
    with open('c:\\\\Users\\\\KIIT0001\\\\Downloads\\\\PERSONAL PROJECTS\\\\ROADMAP\\\\index.html', 'w', encoding='utf-8') as f:
        f.write(new_html_content)
    print("Successfully updated index.html for GitHub Pages!")
else:
    print("Failed to find boundaries in index.html.")
