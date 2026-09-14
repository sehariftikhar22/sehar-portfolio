import urllib.request
import re
import json

req = urllib.request.Request('https://suhadtechsolutions.site/', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Find elementor widgets with headings / titles
matches = re.findall(r'<div[^>]*class="[^"]*(?:elementor-widget-heading|tf-heading)[^"]*"[^>]*data-settings=\'([^\']+)\'|<div[^>]*data-settings=\'([^\']+)\'[^>]*class="[^"]*(?:elementor-widget-heading|tf-heading)[^"]*"', html)
print('Heading matches count:', len(matches))

# Also find all data-settings with _animation
all_settings = re.findall(r'data-settings=([\'"])(.*?)\1', html)
print(f'Total data-settings: {len(all_settings)}')
for quote, s in all_settings:
    s_clean = s.replace('&quot;', '"').replace('&#039;', "'")
    if '_animation' in s_clean:
        try:
            d = json.loads(s_clean)
            print('Anim:', d.get('_animation'), 'delay:', d.get('_animation_delay'), 'class:', d.get('animation_name'))
        except Exception:
            # regex search
            anim = re.findall(r'"_animation":"([^"]+)"', s_clean)
            delay = re.findall(r'"_animation_delay":(\d+)', s_clean)
            print('Regex Anim:', anim, 'delay:', delay)
