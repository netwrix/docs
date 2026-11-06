#!/usr/bin/env python3
"""Build the reverse API inventory.

Usage: build_inventory.py <backend-export> <web-export> <spec.json> <widdershins-dir> <out-dir>

Inputs are read-only. Writes routes.json (from extract_routes.py), console-calls.json,
and inventory.json with the diff: code vs spec vs the Widdershins docs vs the console.
"""
import json, os, pathlib, re, subprocess, sys

backend, web, spec_path, wid_dir, out = map(pathlib.Path, sys.argv[1:6])
out.mkdir(parents=True, exist_ok=True)
here = pathlib.Path(__file__).parent
subprocess.run([sys.executable, str(here / 'extract_routes.py'), str(backend), str(out / 'routes.json')], check=True)
routes = json.loads((out / 'routes.json').read_text())

norm = lambda p: re.sub(r'\{[^}]+\}', '{}', p.split('?')[0]).lower().rstrip('/') or '/'

# 1. Console calls (React console, release/26.07.3)
VERB = {'get': 'GET', 'post': 'POST', 'put': 'PUT', 'del': 'DELETE', 'query': 'GET', 'delete': 'DELETE', 'patch': 'PATCH'}
calls = []
for f in sorted((web / 'src').rglob('*.ts*')):
    if any(x in f.parts for x in ('__test__', '__mocks__')) or f.name.endswith(('.test.ts', '.test.tsx', '.spec.ts')):
        continue
    lines = f.read_text(errors='replace').splitlines()
    for i, l in enumerate(lines):
        for m in re.finditer(r'[`"\']((?:/api/v1/|api/v1/)[^`"\']*)[`"\']', l):
            path = '/' + m.group(1).lstrip('/')
            path = re.sub(r'\$\{[^}]*\}', '{}', path)
            verb = None
            for k in range(i, min(i + 14, len(lines))):
                mv = re.search(r'genericService\.(\w+)\(|axios\.(\w+)\(|method:\s*[\'"](\w+)', lines[k])
                if mv:
                    v = (mv.group(1) or mv.group(2) or mv.group(3)).lower()
                    verb = VERB.get(v)
                    break
            fn = next((re.search(r'(?:function\s+|const\s+)(\w+)', lines[k]).group(1) for k in range(i, max(i - 25, -1), -1)
                       if re.search(r'(?:function\s+|const\s+)\w+', lines[k])), None)
            calls.append({'method': verb, 'path': path, 'file': str(f.relative_to(web)), 'line': i + 1, 'function': fn})
(out / 'console-calls.json').write_text(json.dumps(calls, indent=1))
console = {}
for c in calls:
    console.setdefault((c['method'], norm(c['path'])), []).append(f"{c['file']}:{c['line']} ({c['function']})")
console_any = {}
for (m, p), v in console.items():
    console_any.setdefault(p, []).extend(v)

# 2. Spec and Widdershins
spec = json.loads(spec_path.read_text())
spec_ops = {(m.upper(), norm(p)) for p, v in spec['paths'].items() for m in v if m in ('get', 'post', 'put', 'delete', 'patch')}
wid_ops = set()
for root, _, fs in os.walk(wid_dir):
    if pathlib.Path(root) == wid_dir:
        continue
    for f in fs:
        if f.endswith('.md'):
            t = open(os.path.join(root, f), errors='ignore').read()
            m = re.search(r'curl -X (GET|POST|PUT|DELETE|PATCH) (\S+)', t)
            if m:
                wid_ops.add((m.group(1), norm(m.group(2))))

code = {}
for r in routes:
    key = (r['method'], norm(r['route']))
    code.setdefault(key, r)
inv = []
for key, r in sorted(code.items()):
    inv.append({**r, 'inSpec': key in spec_ops, 'inWiddershins': key in wid_ops,
                'consoleUse': console.get(key) or console_any.get(key[1]) or [],
                'consoleMethodMismatch': bool(console_any.get(key[1])) and not console.get(key)})
spec_only = sorted(k for k in spec_ops if k not in code)
wid_only = sorted(k for k in wid_ops if k not in code)
summary = {
    'codeRoutes': len(code), 'specOperations': len(spec_ops), 'widdershinsOperations': len(wid_ops),
    'codeAndSpec': sum(1 for k in code if k in spec_ops), 'codeOnly': sum(1 for k in code if k not in spec_ops),
    'specOnly': len(spec_only), 'widdershinsOnly': len(wid_only),
    'codeOnlyAndInWiddershins': sum(1 for k in code if k not in spec_ops and k in wid_ops),
    'codeOnlyAndNotInWiddershins': sum(1 for k in code if k not in spec_ops and k not in wid_ops),
    'consoleCallSites': len(calls), 'codeRoutesUsedByConsole': sum(1 for x in inv if x['consoleUse']),
}
(out / 'inventory.json').write_text(json.dumps({'summary': summary, 'routes': inv, 'specOnly': spec_only, 'widdershinsOnly': wid_only}, indent=1))
print(json.dumps(summary, indent=1))
