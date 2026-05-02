import os

# Paths
jsx_path = 'c:\\Users\\KIIT0001\\Downloads\\PERSONAL PROJECTS\\ROADMAP\\roadmap.jsx'
template_path = 'c:\\Users\\KIIT0001\\Downloads\\PERSONAL PROJECTS\\ROADMAP\\index_template.html'
output_path = 'c:\\Users\\KIIT0001\\Downloads\\PERSONAL PROJECTS\\ROADMAP\\index.html'

# Read JSX
with open(jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()

# Read Template
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Inject
# We use a direct replace to avoid any regex issues with large strings
final_html = template_content.replace('/* JSX_CONTENT_PLACEHOLDER */', jsx_content)

# Save
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"Successfully injected {len(jsx_content)} characters into index.html")
