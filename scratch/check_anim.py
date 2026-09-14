import urllib.request
import re
import json

req = urllib.request.Request('https://suhadtechsolutions.site/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print('Page length:', len(html))
        # Find animation classes and attributes
        anim_matches = re.findall(r'(?:animation[_-]\w+|animated|elementor-invisible|fadeIn\w+|slideIn\w+|zoomIn\w+)', html, re.I)
        print('Animation classes sample:', set(anim_matches[:40]))
        
        # Check for data-settings
        settings = re.findall(r'data-settings="([^"]+)"', html)
        print(f'Found {len(settings)} data-settings')
        for s in settings[:10]:
            try:
                # unescape html
                s_clean = s.replace('&quot;', '"')
                data = json.loads(s_clean)
                anim = {k: v for k, v in data.items() if 'animation' in k.lower()}
                if anim:
                    print('Setting anim:', anim)
            except Exception:
                pass
except Exception as e:
    print('Err:', e)
