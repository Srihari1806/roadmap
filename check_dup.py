with open('roadmap.jsx', encoding='utf-8') as f:
    c = f.read()

print('const weeks = [ count:', c.count('const weeks = ['))
print('"week": 1 count:', c.count('"week": 1'))
print('"week": 2 count:', c.count('"week": 2'))
print('"week": 8 count:', c.count('"week": 8'))
# Check where weeks arrays start
idx = 0
pos = 0
while True:
    pos = c.find('const weeks = [', pos)
    if pos == -1:
        break
    print(f'  Found "const weeks = [" at char {pos}, line ~{c[:pos].count(chr(10))+1}')
    pos += 1
