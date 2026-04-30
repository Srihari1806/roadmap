with open('roadmap.jsx', encoding='utf-8') as f:
    c = f.read()

key = 'activeTab === "daily"'
count = c.count(key)
print('daily tab occurrences:', count)

idx = 0
pos_list = []
while True:
    pos = c.find(key, idx)
    if pos == -1:
        break
    line = c[:pos].count('\n') + 1
    print('line', line)
    idx = pos + 1
    pos_list.append(pos)

key2 = 'WEEK {currentWeekData.week}'
print('week header renders:', c.count(key2))

key3 = 'currentWeekData.days.map'
print('day grid renders:', c.count(key3))

# Check if week selector (buttons) renders twice
key4 = 'setSelectedWeek(idx)'
print('setSelectedWeek calls in render:', c.count(key4))
