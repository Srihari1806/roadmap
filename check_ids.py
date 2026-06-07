import re

def check_file(filename):
    try:
        with open(filename, encoding='utf-8') as f:
            text = f.read()
        m = re.search(r'const projectsData = \[(.*?)\];?\s*(?:// export default|const)', text, re.DOTALL)
        if m:
            print(f'Found projectsData in {filename}, length:', len(m.group(1)))
            ids = re.findall(r'id:\s*[\"\'](.*?)[\"\']', m.group(1))
            print(f'IDs in {filename}:', ids)
        else:
            print(f'projectsData not found in {filename}')
    except Exception as e:
        print(f'Error reading {filename}:', e)

check_file('index.html')
check_file('projects_data.js')
check_file('roadmap.jsx')
