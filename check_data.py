import json, re

with open('roadmap.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

s = content.find('const weeks = [')
e = content.find('];', s) + 2
raw = content[s+15:e-1].strip()
raw2 = re.sub(r': (BLUE|PURPLE|GREEN|ACCENT|RED)', ': "BLUE"', raw)

try:
    weeks = json.loads(raw2)
    day1 = weeks[0]['days'][0]
    print('Label:', weeks[0]['label'])
    print('Day 1 title:', day1['title'])
    for t in day1['tasks']:
        print()
        print('  Task:', t['task'][:60])
        print('  desc:', repr(t.get('desc', 'MISSING')))
        print('  dataset:', t.get('dataset', 'NONE'))
        print('  info:', t.get('info', 'NONE'))
except Exception as ex:
    print('JSON parse error:', ex)
    print('First 500 chars of raw:', raw[:500])
