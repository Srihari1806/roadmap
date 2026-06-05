import re

with open('skill-map.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the december section - the malformed part
# We want to keep only one december-cscore and fix december-personal

# Pattern to match the duplicate section
old_pattern = r"'december-personal': \{\s*title: 'Sahitya Rachanalu — Final Portfolio Launch',[^}]*resources: \[\s*\{ name: 'Vercel Production Deployment', url: 'https://vercel\.com/docs' \},\s*\{ name: 'Google Analytics Setup', url: 'https://analytics\.google\.com/' \},\s*\{ name: 'SEO Optimization Guide', url: 'https://developers\.google\.com/search' \}\s*\],\s*\}\s*,\s*'december-cscore': \{\s*title: 'Core Interview prep'"

new_text = """'december-personal': {
          title: 'Sahitya Rachanalu — Final Portfolio Launch',
          track: 'personal',
          month: 'DECEMBER',
          why: 'Ship the complete platform with all 8 content pillars, combining everything into a cohesive portfolio.',
          subtopics: [
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div style="background:rgba(244,167,42,0.06);border:1px solid rgba(244,167,42,0.18);border-radius:8px;padding:10px;"><strong style="color:var(--accent);">Track A — Creative Builder</strong><div style="margin-top:8px;font-style:italic;color:var(--muted);">Final Deliverables</div><div style="margin-top:8px;line-height:1.6;">• sahityarachanalu.com — live website<br/>• Cinepedia MVP + Lyrics Engine MVP<br/>• Story Universe MVP + Founder Journal<br/>• SEO optimized + analytics integrated</div></div><div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px;"><strong style="color:#60A5FA;">Track B — Creative Creator / Curator</strong><div style="margin-top:8px;font-style:italic;color:var(--muted);">End Result: 8 Portfolio Assets (80-100 artifacts)</div><div style="margin-top:8px;line-height:1.6;font-size:11px;"><div style="margin:3px 0;">• Film Analyses: 10-12</div><div style="margin:3px 0;">• Character Studies: 8</div><div style="margin:3px 0;">• Screenplay Breakdowns: 8</div><div style="margin:3px 0;">• Product/Brand Teardowns: 8</div><div style="margin:3px 0;">• IPL Articles: 8</div><div style="margin:3px 0;">• Creator Economy Essays: 8</div><div style="margin:3px 0;">• Founder Journals: 8</div><div style="margin:3px 0;">• Lyrics: 12-15</div><div style="margin:3px 0;">• Story Concepts: 10</div><div style="margin:3px 0;">• Web Series Universe Docs: 2-3</div></div></div></div>'
          ],
          resources: [
            { name: 'Vercel Production Deployment', url: 'https://vercel.com/docs' },
            { name: 'Google Analytics Setup', url: 'https://analytics.google.com/' },
            { name: 'SEO Optimization Guide', url: 'https://developers.google.com/search' }
          ]
        },
        'december-cscore': {
          title: 'Core Interview prep'"""

content = re.sub(old_pattern, new_text, content, flags=re.DOTALL)

with open('skill-map.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")