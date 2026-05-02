import os

jsx_path = 'c:\\Users\\KIIT0001\\Downloads\\PERSONAL PROJECTS\\ROADMAP\\roadmap.jsx'
html_path = 'c:\\Users\\KIIT0001\\Downloads\\PERSONAL PROJECTS\\ROADMAP\\index.html'

with open(jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()

with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

start_marker = '<script type="text/babel">'
end_marker = '</script>'

s_idx = html_content.find(start_marker)
if s_idx != -1:
    e_idx = html_content.find(end_marker, s_idx)
    if e_idx != -1:
        new_html = html_content[:s_idx + len(start_marker)] + '\n' + jsx_content + '\n' + html_content[e_idx:]
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_html)
        print("Successfully synced roadmap.jsx into index.html")
    else:
        print("Could not find closing script tag.")
else:
    print("Could not find opening script tag.")
