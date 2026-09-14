import urllib.request
import re

req = urllib.request.Request('https://suhadtechsolutions.site/', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

links = re.findall(r'<link[^>]+rel=[\'"]stylesheet[\'"][^>]+>', html)
print('Stylesheet links found:', len(links))
for l in links[:15]:
    print(l)
