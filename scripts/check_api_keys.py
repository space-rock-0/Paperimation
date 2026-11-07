"""Check configured API access without printing credentials."""
import json
import urllib.error
import urllib.request
from pathlib import Path
values = {}
for line in (Path(__file__).resolve().parents[1] / ".env").read_text(encoding="utf-8-sig").splitlines():
    if "=" in line and not line.lstrip().startswith("#"):
        name, value = line.split("=", 1)
        values[name.strip()] = value.strip().strip('"').strip("'")
for name, url, payload in [
    ("OPENAI_API_KEY", "https://api.openai.com/v1/embeddings",
     {"model": "text-embedding-3-large", "input": "test"}),
    ("OPENROUTER_API_KEY", "https://openrouter.ai/api/v1/key", None),
]:
    key = values.get(name)
    if not key:
        print(f"{name}: missing")
        continue
    request = urllib.request.Request(
        url, data=json.dumps(payload).encode() if payload else None,
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            json.load(response)
            print(f"{name}: request succeeded (HTTP {response.status})")
    except urllib.error.HTTPError as exc:
        error = json.load(exc).get("error", {})
        print(f"{name}: HTTP {exc.code}; type={error.get('type')}; code={error.get('code')}")
    except Exception as exc:
        print(f"{name}: connection failed ({type(exc).__name__})")
