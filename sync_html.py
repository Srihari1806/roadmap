import os
import subprocess

print("Syncing HTML by running node build.js...")
try:
    result = subprocess.run(["node", "build.js"], check=True, capture_output=True, text=True)
    print(result.stdout)
    print("Successfully built index.html via pre-compiled JSX!")
except Exception as e:
    print("Error compiling via build.js:", e)
    if hasattr(e, 'stderr') and e.stderr:
        print(e.stderr)
