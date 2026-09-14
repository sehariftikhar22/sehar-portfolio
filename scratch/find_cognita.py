import os
import glob

search_dirs = [
    r"d:\antigravity projects\sehar portfolio\images",
    r"d:\antigravity projects\sehar portfolio\public\images",
    r"C:\Users\sehar\Downloads",
    r"C:\Users\sehar\Pictures",
    r"C:\Users\sehar\Desktop",
    r"C:\Users\sehar\.gemini\antigravity-ide\brain\de995136-9987-4192-97cf-6281eee3f155\.user_uploaded",
    r"C:\Users\sehar\.gemini\antigravity-ide\brain"
]

print("Scanning directories...")
for d in search_dirs:
    if os.path.exists(d):
        print(f"\n--- In {d} ---")
        try:
            for root, dirs, files in os.walk(d):
                # don't go too deep into node_modules or temp
                if "node_modules" in root or ".next" in root or ".git" in root or ".tempmediaStorage" in root:
                    continue
                for f in files:
                    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                        path = os.path.join(root, f)
                        size = os.path.getsize(path)
                        print(f"{path} ({size} bytes)")
        except Exception as e:
            print(f"Error in {d}: {e}")
