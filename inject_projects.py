with open('roadmap.jsx', encoding='utf-8') as f:
    content = f.read()

# ── 1. Inject projectsData constant before skillsRoadmap ──────────────────────
with open('projects_data.js', encoding='utf-8') as f:
    projects_data_js = f.read()

start_target = 'const projectsData = ['
end_target = 'const skillsRoadmap = ['

if start_target in content:
    start_idx = content.find(start_target)
    end_idx = content.find(end_target)
    if start_idx < end_idx:
        content = content[:start_idx] + projects_data_js + '\n\n' + content[end_idx:]
        print('Updated projectsData constant')
    else:
        print('ERROR: const projectsData found after const skillsRoadmap')
else:
    if projects_data_js.strip() not in content:
        content = content.replace(end_target, projects_data_js + '\n\n' + end_target, 1)
        print('Injected projectsData constant')
    else:
        print('projectsData already present, skipping injection')

# ── 2. Replace Projects tab body ───────────────────────────────────────────────
old_projects = '''        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Project 1 */}'''

new_projects = '''        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.7, marginBottom: 8 }}>
              Each project is delivered as a <strong style={{color: ACCENT}}>live website on Vercel</strong> — not just a PPT.
              All 3 link back to your portfolio. Click any layer to see the full execution plan.
            </p>
            {projectsData.map(proj => (
              <ProjectCard key={proj.id} proj={proj} />
            ))}
          </div>
        )}'''

if old_projects in content:
    # Find end of old projects tab
    end_marker = '        {/* PLATFORMS TAB */}'
    old_end = '''          </div>
        )}

        {/* PLATFORMS TAB */}'''
    content = content.replace(
        content[content.find(old_projects):content.find(end_marker)],
        new_projects + '\n\n        '
    )
    print('Replaced Projects tab')
else:
    print('WARNING: Could not find old projects tab marker')

# ── 3. Replace Platforms tab ────────────────────────────────────────────────────
old_platforms_start = '        {/* PLATFORMS TAB */}'
old_platforms_end   = '        {/* CREATIVE TAB */}'

platforms_idx_start = content.find(old_platforms_start)
platforms_idx_end   = content.find(old_platforms_end)

new_platforms = '''        {/* PLATFORMS TAB */}
        {activeTab === "platforms" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${BLUE}`, padding: 24, borderRadius: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>1. Personal Portfolio Website</h2>
              <p style={{ color: BLUE, fontSize: 12, margin: "0 0 16px" }}>Tech · Analytics · Strategy — your central hub</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>TECH STACK</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {["Next.js / React", "Tailwind CSS", "Vercel Hosting", "Chart.js / Recharts", "Framer Motion"].map(t => (
                      <span key={t} style={{ background: "#1a1a2e", border: `1px solid ${BORDER}`, padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>PAGES</div>
                  <ul style={{ paddingLeft: 18, fontSize: 12, lineHeight: 1.8, color: TEXT }}>
                    <li><strong>Hero:</strong> "Data Analyst & Product Thinker — turning data into decisions"</li>
                    <li><strong>Projects:</strong> 3 live website links (IPL, OTT, E-Commerce) with STAR summaries</li>
                    <li><strong>Skills:</strong> SQL · Python · Power BI · Tableau · Excel — with proof links</li>
                    <li><strong>Creative:</strong> Sahitya Rachanalu as "Founder" project</li>
                    <li><strong>Resume:</strong> 2 versions — Data Analyst + Product Analyst focus</li>
                    <li><strong>Blog:</strong> Latest 3 posts auto-pulled from Medium/Substack</li>
                  </ul>
                </div>
                <div style={{ background: "#1a1a2e", padding: 16, borderRadius: 8 }}>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>ARCHITECTURE PLAN</div>
                  {[
                    { label: "3 Project Sub-Sites", desc: "Each project is a separate Vercel site — ipl.yourdomain.com etc." },
                    { label: "Portfolio Hub", desc: "Central site with cards linking to each project site + Sahitya" },
                    { label: "Analytics Tracking", desc: "Vercel Analytics to track which project recruiters visit most" },
                    { label: "Dark Theme + Glassmorphism", desc: "Cinematic scroll-reveal, micro-animations, premium feel" },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: MUTED }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, padding: 24, borderRadius: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>2. Sahitya Rachanalu</h2>
              <p style={{ color: PURPLE, fontSize: 12, margin: "0 0 16px" }}>Creative Platform — Telugu literature, cinema, music & culture</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  {[
                    { icon: "📖", label: "Novels / Audiobooks", desc: "Chapter-by-chapter release. Singers dubbed. Distraction-free reading UI. Purchasable links." },
                    { icon: "🎵", label: "Lyrics Engine", desc: "Spotify-style layout. Original lyrics + meaning sidebar. Other singers data dashboard." },
                    { icon: "🎬", label: "Cinepedia", desc: "Wikipedia for films — new format. Thematic analysis, cultural impact, director deep-dives." },
                    { icon: "💬", label: "Fictionary", desc: "Famous dialogues and expressions — card-flip UI. Why they went viral breakdown." },
                    { icon: "😄", label: "Meme / GIF Keyboard", desc: "Custom cultural emojis and expressions — shareable, unique to Telugu culture." },
                    { icon: "✍️", label: "Writeups", desc: "Articles, script analyses, anime-format series, blogs. All SEO-optimized." },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700 }}>{item.label}</div>
                        <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#2e1a2e", padding: 16, borderRadius: 8 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>INTEGRATION PLAN</div>
                  {[
                    { label: "Cross-Link", desc: "Portfolio → Sahitya under 'Founder @ Creative Platform'" },
                    { label: "Sub-domain", desc: "sahityarachanalu.com — separate Vercel project" },
                    { label: "Content Engine", desc: "Write 1 article/week — pipeline into LinkedIn + Medium" },
                    { label: "Cinepedia Launch", desc: "3 film deep-dives first — Telugu (2) + Hindi (1)" },
                    { label: "Tech Stack", desc: "Next.js + MDX for content, JSON for film DB, Tailwind" },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: MUTED }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        '''

if platforms_idx_start != -1 and platforms_idx_end != -1:
    content = content[:platforms_idx_start] + new_platforms + content[platforms_idx_end:]
    print('Replaced Platforms tab')
else:
    print('WARNING: Could not find Platforms tab boundaries')

# ── 4. Replace Creative tab ────────────────────────────────────────────────────
old_creative_start = '        {/* CREATIVE TAB */}'
old_creative_end   = '      </div>\n\n      <style>'

creative_idx_start = content.find(old_creative_start)
creative_idx_end   = content.find(old_creative_end)

new_creative = '''        {/* CREATIVE TAB */}
        {activeTab === "creative" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Creative Content Hub
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
                <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>WRITING ROLES TO TARGET</div>
                {[
                  { role: "Content Writer", desc: "Blogs, posts, LinkedIn articles" },
                  { role: "Creative Writer", desc: "Stories, scripts, reel concepts" },
                  { role: "Copywriter", desc: "Captions, ads, punchlines, marketing lines" },
                  { role: "Script Writer", desc: "YouTube, reels, short films, ads" },
                  { role: "Screenplay / Story Writer", desc: "Films, web series (long term)" },
                  { role: "Lyricist", desc: "Songs, indie music, reels" },
                  { role: "Sports Content Writer", desc: "Cricket pages, apps, sites" },
                  { role: "Film Critic / Reviewer", desc: "YouTube, blogs, pages, analytics overlay" },
                  { role: "Social Media Strategist", desc: "Ideas + captions + content calendars" },
                ].map(r => (
                  <div key={r.role} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>{r.role}</span>
                    <span style={{ fontSize: 11, color: MUTED, maxWidth: 160, textAlign: "right" }}>{r.desc}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, marginBottom: 12 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>10 CONTENT TOPICS (500–800 words each)</div>
                  {[
                    "Script/Screenplay Analysis — 'Why the interval bang in [Film] works'",
                    "Character Psychology — 'Why audiences root for grey characters (Pushpa)'",
                    "Film Economics — 'Pan-India Blockbusters: Marketing genius or cultural shift?'",
                    "E-Commerce Psychology — 'The anatomy of cart abandonment'",
                    "Product Teardowns — 'Why BookMyShow UI is built for FOMO'",
                    "Creator Economy — 'How meme pages became movie promoters'",
                    "Visual Storytelling — 'Color theory in cinema'",
                    "Sports Analytics — 'IPL as a product: 4 hours of engineered engagement'",
                    "Music + Tech — 'How Spotify's algorithm shapes what we hear'",
                    "Personal Journey — 'Why I built Sahitya Rachanalu'",
                  ].map((t, i) => (
                    <div key={i} style={{ fontSize: 11, color: MUTED, padding: "4px 0", borderBottom: `1px solid ${BORDER}20` }}>
                      {i + 1}. {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0A0A0F)", border: `1px solid ${BLUE}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: BLUE }}>🎬 Creative Portfolio Presentation Formats</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { icon: "🎬", label: "Video Opening", desc: "Cinematic template-style portfolio intro with motion design" },
                  { icon: "📚", label: "Books / Audiobooks", desc: "Film-script format, chapter releases, purchasable links" },
                  { icon: "🎨", label: "Visual Storyboards", desc: "AI-generated + manual editing for concept visualization" },
                  { icon: "🎵", label: "Music Dashboard", desc: "Spotify-style layout — lyrics + singers + streaming data" },
                  { icon: "🏏", label: "IPL Content Hub", desc: "Dedicated section: job roles, match reports, insights" },
                  { icon: "🎭", label: "Movies Watch List", desc: "Curated cinematic list with thematic notes and ratings" },
                ].map(item => (
                  <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div style={{ fontSize: 12, fontWeight: 700, marginTop: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: ${BORDER}; border-radius: 2px; }
      `}</style>
    </div>
  );
}
'''

if creative_idx_start != -1 and creative_idx_end != -1:
    content = content[:creative_idx_start] + new_creative
    print('Replaced Creative tab + closing tags')
else:
    print('WARNING: Could not find Creative tab boundaries')

with open('roadmap.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done writing roadmap.jsx')
