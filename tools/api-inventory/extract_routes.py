#!/usr/bin/env python3
"""List every HTTP route that the Privilege Secure controllers declare.

Usage: extract_routes.py <backend-export-dir> <out.json>

It reads the C# controller files as text (no build, no network). For each action it records the
HTTP method, the full route, the authorization attributes, and whether Swashbuckle hides it
([ApiExplorerSettings(IgnoreApi = true)]) or the action isn't routable ([NonAction]).
"""
import json, pathlib, re, sys

root = pathlib.Path(sys.argv[1])
out = pathlib.Path(sys.argv[2])
DIRS = ['SbPAM.WebAPI/Controllers', 'SbPAM.WebAppAPI/Controllers', 'ActiveDirectory/WebApi/Controllers', 'NPS.RagGateway/Controllers']

ATTR = re.compile(r'\[\s*([A-Za-z_.]+)\s*(?:\((.*?)\))?\s*\]', re.S)
STR = re.compile(r'"((?:[^"\\]|\\.)*)"')
METHODS = {'HttpGet': 'GET', 'HttpPost': 'POST', 'HttpPut': 'PUT', 'HttpDelete': 'DELETE', 'HttpPatch': 'PATCH', 'HttpHead': 'HEAD', 'HttpOptions': 'OPTIONS'}


def attrs(block):
    """Split a run of attribute lines into (name, args) pairs. Handles [A, B(..)] lists."""
    res = []
    for m in re.finditer(r'\[(.*?)\]\s*(?=\[|$)', block, re.S):
        inner = m.group(1)
        depth, cur, parts = 0, '', []
        for ch in inner:
            if ch in '([{':
                depth += 1
            elif ch in ')]}':
                depth -= 1
            if ch == ',' and depth == 0:
                parts.append(cur)
                cur = ''
            else:
                cur += ch
        parts.append(cur)
        for p in parts:
            pm = re.match(r'\s*([A-Za-z_.]+)\s*(?:\((.*)\))?\s*$', p.strip(), re.S)
            if pm:
                res.append((pm.group(1).split('.')[-1].replace('Attribute', ''), pm.group(2) or ''))
    return res


def first_str(args):
    """The positional string argument (the route template or permission), not Name = "..."."""
    m = re.match(r'\s*"((?:[^"\\]|\\.)*)"', args)
    return m.group(1) if m else None


def named(args, key):
    m = re.search(key + r'\s*=\s*"((?:[^"\\]|\\.)*)"', args)
    return m.group(1) if m else None


def combine(prefix, tmpl):
    if tmpl is None:
        return prefix
    if tmpl.startswith('~/') or tmpl.startswith('/'):
        return tmpl.lstrip('~').lstrip('/')
    return (prefix.rstrip('/') + '/' + tmpl).strip('/') if prefix else tmpl


routes = []
for d in DIRS:
    for f in sorted((root / d).glob('*.cs')):
        text = f.read_text(errors='replace')
        lines = text.splitlines()
        cls = next((m for m in re.finditer(r'public\s+(?:abstract\s+|partial\s+)*class\s+(\w+)\s*(?::\s*([\w.<>]+))?', text) if m.group(1).endswith('Controller')), None)
        if not cls:
            continue
        debug_lines, stack = set(), []
        for ln, l in enumerate(lines, 1):
            t = l.strip()
            if t.startswith('#if'):
                stack.append(bool(re.match(r'#if\s+DEBUG\b', t)))
            elif t.startswith('#else') and stack:
                stack[-1] = False
            elif t.startswith('#endif') and stack:
                stack.pop()
            elif any(stack):
                debug_lines.add(ln)
        cname = cls.group(1)
        ctrl = cname[:-len('Controller')] if cname.endswith('Controller') else cname
        # attributes that sit directly above the class declaration
        cls_line = next(i for i, l in enumerate(lines) if re.search(r'\bclass\s+' + cname + r'\b', l))
        j = cls_line - 1
        blk = []
        while j >= 0:
            t = lines[j].strip()
            if t in ('{', '}') or t.startswith(('namespace', 'using')):
                break
            if t.startswith('[') or (blk and t and not t.startswith('//')):
                blk.insert(0, lines[j])
            j -= 1
        cattrs = attrs('\n'.join(blk))
        croutes = [first_str(a) for n, a in cattrs if n == 'Route']
        croute = (croutes[0] if croutes else '') or ''
        croute = re.sub(r'\[controller\]', ctrl, croute, flags=re.I)
        croles = next((named(a, 'Roles') for n, a in cattrs if n == 'Authorize' and named(a, 'Roles')), None)
        cpol = next((named(a, 'Policy') for n, a in cattrs if n == 'Authorize' and named(a, 'Policy')), None)
        cauth = any(n == 'Authorize' for n, a in cattrs)
        canon = any(n == 'AllowAnonymous' for n, a in cattrs)
        cignore = any(n == 'ApiExplorerSettings' and re.search(r'IgnoreApi\s*=\s*true', a) for n, a in cattrs)
        # walk the body for action attribute blocks
        i = cls_line + 1
        pending = []
        while i < len(lines):
            s = lines[i].strip()
            if s.startswith('[') :
                k = i
                chunk = lines[i]
                while chunk.count('[') > chunk.count(']') or chunk.count('(') > chunk.count(')'):
                    k += 1
                    chunk += ' ' + lines[k].strip()
                pending.append(chunk)
                i = k + 1
                continue
            if s.startswith('///') or s == '' or s.startswith('//'):
                i += 1
                continue
            flat = s
            while True:
                nxt = re.sub(r'<[^<>]*>', '', flat)
                if nxt == flat:
                    break
                flat = nxt
            m = re.match(r'(public|internal|protected|private)\s+(?:virtual\s+|override\s+|async\s+|static\s+)*[\w\[\],.?\s]+?\s+(\w+)\s*\(', flat)
            if m and pending and m.group(1) == 'public':
                aname = m.group(2)
                a = attrs('\n'.join(pending))
                if not any(n == 'NonAction' for n, _ in a):
                    rt = [(n, args) for n, args in a if n == 'Route']
                    for n, args in a:
                        if n in METHODS:
                            tmpl = first_str(args)
                            if tmpl is None and rt:
                                tmpl = first_str(rt[0][1])
                            route = combine(croute, tmpl)
                            route = re.sub(r'\[controller\]', ctrl, route, flags=re.I)
                            route = re.sub(r'\[action\]', aname, route, flags=re.I)
                            roles = next((named(x, 'Roles') for nn, x in a if nn == 'Authorize' and named(x, 'Roles')), None)
                            pol = next((named(x, 'Policy') for nn, x in a if nn == 'Authorize' and named(x, 'Policy')), None)
                            perm = [first_str(x) for nn, x in a if nn == 'SbPAMPermission']
                            routes.append({
                                'method': METHODS[n], 'route': '/' + route.strip('/'),
                                'routeNormalized': '/' + re.sub(r'\{(\*?)(\w+)(?::[^}]*)?\??\}', r'{\2}', route.strip('/')),
                                'controller': ctrl, 'action': aname, 'file': f'{d}/{f.name}', 'line': i + 1,
                                'roles': roles or croles, 'policy': pol or cpol, 'permission': perm,
                                'authorized': cauth or any(nn == 'Authorize' for nn, _ in a),
                                'anonymous': canon or any(nn == 'AllowAnonymous' for nn, _ in a),
                                'ignoreApi': cignore or any(nn == 'ApiExplorerSettings' and re.search(r'IgnoreApi\s*=\s*true', x) for nn, x in a),
                                'allowReadOnlyMutation': any(nn == 'AllowReadOnlyMutation' for nn, _ in a),
                                'obsolete': any(nn == 'Obsolete' for nn, _ in a),
                                'debugOnly': (i + 1) in debug_lines,
                            })
                pending = []
            elif not s.startswith('['):
                pending = []
            i += 1

out.write_text(json.dumps(routes, indent=1))
print(f'{len(routes)} routes from {len({r["file"] for r in routes})} controller files -> {out}')
