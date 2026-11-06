#!/usr/bin/env python3
"""Extract REST call sites from the Privilege Secure web console source.

Deterministic and re-runnable; standard library only.

The console rewrites a leading "~/" to "/api/v1/" (flattenUri in
src/shared/services/base.service.ts), so calls are written as "~/Controller/Action"
as well as "/api/v1/Controller/Action". Paths are often built by string concatenation
("~/ManagedResourceGroup/" + id + "/RotateAccounts") or template literals.

Steps
  1. git archive src of the web repo at the release ref into the export directory.
  2. Lex every .ts/.tsx under src (strings, templates, comments).
  3. For every string/template literal that begins with "~/" or "/api/v1/" (or a
     non-/api/v1 route root present in routes.json), resolve concatenation and
     template placeholders to "{}" segments and strip the query string.
  4. Infer the HTTP verb from the nearest consuming call (see VERB_HELPERS), following
     a variable (const uri = "..."; genericService.get(uri)) within the function.
  5. Match each site to routes.json (verb + case-insensitive path, wildcards for
     {param} and constraint suffixes like {id:guid}; a literal segment beats a wildcard).

Outputs: console-calls-v2.json and console-unmatched.json in --out-dir.

Verb helpers (src/services/generic.service.ts and src/shared/services/base.service.ts
export get/post/put/del/query/patch; axios/fetch/WebSocket/EventSource/window.open are
also recognised).
"""
import argparse
import bisect
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
INV = REPO_ROOT / "plans" / "api-inventory"
DEFAULT_WEB = Path(os.path.expanduser("~/Code/NPS-AM/identity-privilegesecuream-web"))
DEFAULT_REF = "origin/release/26.07.3"
DEFAULT_EXPORT = Path(tempfile.gettempdir()) / "api-inventory" / "web-release"

VERB_HELPERS = {
    "get": "GET", "post": "POST", "put": "PUT", "del": "DELETE", "delete": "DELETE",
    "patch": "PATCH", "head": "HEAD",
    "getjson": "GET", "postjson": "POST", "putjson": "PUT", "deletejson": "DELETE",
    "patchjson": "PATCH", "getblob": "GET", "geturl": "GET",
}
GENERIC_CALLERS = {"fetch", "axios", "request", "ajax"}
GET_ONLY_CALLEES = {"websocket": "ws", "eventsource": "sse", "open": "open",
                    "withurl": "signalr"}

KEYWORDS = {"if", "for", "while", "switch", "catch", "function", "return", "else",
            "with", "do", "try", "typeof", "await", "new"}


# --------------------------------------------------------------------------- lexer

class Tok:
    __slots__ = ("start", "end", "text", "kind", "line", "raw", "exprs")

    def __init__(self, start, end, text, kind):
        self.start, self.end, self.text, self.kind = start, end, text, kind
        self.line = 0
        self.raw = ""
        self.exprs = []


def skip_balanced_braces(src, i):
    """src[i] is just after '${'. Return index just after the matching '}'."""
    depth = 1
    n = len(src)
    while i < n:
        c = src[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i + 1
        elif c in "\"'":
            j = i + 1
            while j < n and src[j] != c and src[j] != "\n":
                j += 2 if src[j] == "\\" else 1
            i = j
        elif c == "`":
            i = parse_template(src, i)[0] - 1
        elif c == "/" and i + 1 < n and src[i + 1] == "/":
            while i < n and src[i] != "\n":
                i += 1
            continue
        elif c == "/" and i + 1 < n and src[i + 1] == "*":
            k = src.find("*/", i + 2)
            i = n if k < 0 else k + 1
        i += 1
    return n


def parse_template(src, i):
    """src[i] == '`'. Return (end_after_closing_backtick, text_with_{}_placeholders, exprs)."""
    n = len(src)
    j = i + 1
    out = []
    exprs = []
    while j < n:
        c = src[j]
        if c == "\\":
            out.append(src[j:j + 2])
            j += 2
            continue
        if c == "`":
            return j + 1, "".join(out), exprs
        if c == "$" and j + 1 < n and src[j + 1] == "{":
            k = skip_balanced_braces(src, j + 2)
            exprs.append(src[j + 2:k - 1])
            j = k
            out.append("{}")
            continue
        out.append(c)
        j += 1
    return n, "".join(out), exprs


def lex(src):
    """Return (code, tokens). code is src with comments and string contents blanked
    (same length, newlines kept) so brackets inside strings never confuse scanning."""
    n = len(src)
    code = list(src)
    toks = []
    i = 0

    def blank(a, b):
        for k in range(a, b):
            if code[k] != "\n":
                code[k] = " "

    while i < n:
        c = src[i]
        if c == "/" and i + 1 < n and src[i + 1] == "/":
            j = src.find("\n", i)
            j = n if j < 0 else j
            blank(i, j)
            i = j
            continue
        if c == "/" and i + 1 < n and src[i + 1] == "*":
            j = src.find("*/", i + 2)
            j = n if j < 0 else j + 2
            blank(i, j)
            i = j
            continue
        if c in "\"'":
            j = i + 1
            ok = False
            while j < n:
                if src[j] == "\\":
                    j += 2
                    continue
                if src[j] == "\n":
                    break
                if src[j] == c:
                    ok = True
                    break
                j += 1
            if ok:
                toks.append(Tok(i, j + 1, src[i + 1:j], "str"))
                blank(i + 1, j)
                i = j + 1
                continue
            i += 1  # stray apostrophe (JSX text); keep going
            continue
        if c == "`":
            end, text, exprs = parse_template(src, i)
            toks.append(Tok(i, end, text, "tpl"))
            toks[-1].raw = src[i:end]
            toks[-1].exprs = exprs
            blank(i + 1, end - 1)
            i = end
            continue
        i += 1
    return "".join(code), toks


# --------------------------------------------------------------------------- helpers

IDENT = re.compile(r"[A-Za-z_$][\w$]*")
DECL_PATTERNS = [
    re.compile(r"^(\s*)(?:export\s+)?(?:default\s+)?(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)"),
    re.compile(r"^(\s*)(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*(?:async\s*)?(?:function\b|\([^)]*\)\s*(?::[^=]+)?=>|[A-Za-z_$][\w$]*\s*=>|\($)"),
    re.compile(r"^(\s*)(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*(?:async\s*)?\(.*=>\s*\{?\s*$"),
    re.compile(r"^(\s+)(?:public\s+|private\s+|protected\s+|static\s+|async\s+)*([A-Za-z_$][\w$]*)\s*(?:<[^>(]*>)?\s*\([^)]*\)?\s*(?::\s*[^{;=]*)?\{\s*$"),
]


def find_decl(line):
    for p in DECL_PATTERNS:
        m = p.match(line)
        if m and m.group(2) not in KEYWORDS:
            return len(m.group(1).expandtabs(4)), m.group(2)
    return None


def match_back_paren(code, i):
    """Find the '(' enclosing position i (scanning backwards). None if the statement
    boundary (';') is hit first. Returns index of '('."""
    depth = 0
    lim = max(0, i - 4000)
    k = i - 1
    while k >= lim:
        c = code[k]
        if c in ")]}":
            depth += 1
        elif c in "([{":
            if depth == 0:
                if c == "(":
                    return k
                # entering an array/object literal: keep going outward
            else:
                depth -= 1
        elif c == ";" and depth == 0:
            return None
        k -= 1
    return None


def enclosing_brace(code, i):
    """Return (open, close) of the object literal that contains position i."""
    depth = 0
    k = i - 1
    while k >= max(0, i - 3000):
        c = code[k]
        if c in ")]}":
            depth += 1
        elif c in "([{":
            if depth == 0:
                if c == "{":
                    return k, match_fwd(code, k)
                return None
            depth -= 1
        k -= 1
    return None


def match_fwd(code, i):
    """code[i] is an opening bracket; return index of its partner (or len)."""
    pairs = {"(": ")", "[": "]", "{": "}"}
    stack = []
    n = len(code)
    k = i
    while k < n:
        c = code[k]
        if c in pairs:
            stack.append(pairs[c])
        elif c in ")]}":
            if stack:
                stack.pop()
            if not stack:
                return k
        k += 1
    return n


def callee_of(code, paren_idx):
    """Return (last_name, preceded_by_new) of the expression before '('."""
    k = paren_idx - 1
    while k >= 0 and code[k] in " \t\r\n":
        k -= 1
    if k >= 0 and code[k] == ">":  # generic args: foo<...>(
        depth = 0
        while k >= 0:
            if code[k] == ">" and not (k > 0 and code[k - 1] == "="):
                depth += 1
            elif code[k] == "<":
                depth -= 1
                if depth == 0:
                    k -= 1
                    break
            k -= 1
        while k >= 0 and code[k] in " \t\r\n":
            k -= 1
    e = k + 1
    while k >= 0 and (code[k].isalnum() or code[k] in "_$"):
        k -= 1
    name = code[k + 1:e]
    j = k
    while j >= 0 and code[j] in " \t\r\n":
        j -= 1
    is_new = code[max(0, j - 2):j + 1] == "new" and (j < 3 or not (code[j - 3].isalnum() or code[j - 3] in "_$"))
    return name, is_new


def verb_from_call(src, code, paren_idx):
    """Given the '(' of a call, return (verb, transport) or None when not a verb helper."""
    name, is_new = callee_of(code, paren_idx)
    low = name.lower()
    if low in GET_ONLY_CALLEES and (is_new or low in ("open", "withurl")):
        return "GET", GET_ONLY_CALLEES[low]
    if low in VERB_HELPERS:
        return VERB_HELPERS[low], None
    if low in GENERIC_CALLERS:
        close = match_fwd(code, paren_idx)
        m = re.search(r"method\s*:\s*[\"'`](\w+)", src[paren_idx:close + 1], re.I)
        return (m.group(1).upper() if m else "GET"), None
    if low == "query":
        close = match_fwd(code, paren_idx)
        m = re.search(r"[\"'`](get|post|put|delete)[\"'`]", src[paren_idx:close + 1], re.I)
        if m:
            return m.group(1).upper(), None
    return None


def enclosing_verb(src, code, pos, levels=4):
    """Walk outward through enclosing calls from pos; first verb helper wins.
    Returns (verb, transport, depth)."""
    cur = pos
    for depth in range(levels):
        p = match_back_paren(code, cur)
        if p is None:
            return None
        v = verb_from_call(src, code, p)
        if v:
            return v[0], v[1], depth
        cur = p
    return None


# --------------------------------------------------------------------------- path handling

def has_root(text, roots):
    low = text.lower()
    for r in roots:
        if low.startswith(r) and (len(low) == len(r) or low[len(r)] in "/?#"):
            return True
    return False


def normalize_path(text, prefix_ok_embedded=True, extra_roots=()):
    """Turn raw literal text into (path, tilde_flag) or None when it is not an API path."""
    tilde = False
    if text.startswith("~/"):
        tilde = True
        text = "/api/v1/" + text[2:]
    else:
        idx = text.lower().find("/api/v1/")
        if idx < 0:
            if not has_root(text, extra_roots):
                return None
        elif idx > 0:
            text = text[idx:]
    return text, tilde


def clean_path(text):
    for sep in ("?", "#"):
        k = text.find(sep)
        if k >= 0:
            text = text[:k]
    text = re.sub(r"(\{\})+", "{}", text)
    return text


def segments(path):
    return [s for s in path.split("/") if s != ""]


def seg_is_wild(seg):
    return seg.startswith("{") and seg.endswith("}") and seg.count("{") == 1


# --------------------------------------------------------------------------- route matching

def last_ident(expr):
    m = re.search(r"([A-Za-z_$][\w$]*)[\s)\]!?]*$", expr.strip())
    return m.group(1).lower() if m else None


def param_names_agree(route, csegs, names):
    """True when every console placeholder expression ends in the name of the route
    parameter at the same position (case-insensitive, constraint suffix ignored)."""
    idx = [i for i, cs in enumerate(csegs) if cs == "{}"]
    if len(idx) != len(names):
        return False
    for i, nm in zip(idx, names):
        rs = route["segs"][i]
        if not rs.startswith("{"):
            return False
        pn = rs.strip("{}").split(":")[0].lower()
        if last_ident(nm) != pn:
            return False
    return True


class RouteIndex:
    def __init__(self, routes):
        self.routes = []
        for r in routes:
            segs = segments(r["route"])
            self.routes.append({
                "key": r["method"] + " " + r["route"],
                "method": r["method"],
                "route": r["route"],
                "segs": segs,
                "lsegs": [s.lower() for s in segs],
                "wild": [("{" in s) for s in segs],
            })
        self.by_len = {}
        for r in self.routes:
            self.by_len.setdefault(len(r["segs"]), []).append(r)
        self.roots = sorted({"/" + r["segs"][0].lower() for r in self.routes
                             if r["segs"] and r["segs"][0].lower() != "api"})

    def candidates(self, csegs, verb, tier):
        """Return list of (score, route) for routes matching csegs."""
        out = []
        for r in self.by_len.get(len(csegs), []):
            if verb != "?" and r["method"] != verb:
                continue
            score = 0.0
            ok = True
            for cs, rs, rl, rw in zip(csegs, r["segs"], r["lsegs"], r["wild"]):
                cl = cs.lower()
                if rw:
                    # route wildcard (possibly with literal parts): matches anything
                    if tier == 2 and "{}" not in cl:
                        ok = False  # tier 2 only relaxes dynamic segments
                        break
                    if not seg_is_wild(rs):
                        pat = "^" + re.sub(r"\\\{[^}]*\\\}", ".+", re.escape(rs.lower())) + "$"
                        if not re.match(pat, cl.replace("{}", "x")):
                            ok = False
                            break
                    continue
                if "{}" in cl:
                    if cl == "{}":
                        if tier == 1:
                            ok = False
                            break
                        score += 0.1  # tier 2: dynamic segment may be this literal
                        continue
                    pat = "^" + re.escape(cl).replace(re.escape("{}"), ".*") + "$"
                    if re.match(pat, rl):
                        score += 0.5
                        continue
                    ok = False
                    break
                if cl == rl:
                    score += 1
                    continue
                ok = False
                break
            if ok:
                out.append((score, r))
        return out

    def match(self, path, verb, prefix_hint=False, names=()):
        """Return dict(route, confidence, reason, detail, candidates)."""
        csegs = segments(path)
        variants = [csegs]
        if prefix_hint:
            variants.append(csegs + ["{}"])
        for tier in (1, 2):
            for vi, vs in enumerate(variants):
                cands = self.candidates(vs, verb, tier)
                if not cands:
                    continue
                best = max(s for s, _ in cands)
                top = [r for s, r in cands if s == best]
                keys = sorted({r["key"] for r in top})
                if len(keys) > 1 and names and verb != "?":
                    top2 = [r for r in top if param_names_agree(r, vs, names)]
                    if len({r["key"] for r in top2}) == 1:
                        return {"route": top2[0]["key"], "tier": tier, "variant": vi,
                                "pathOnly": False, "byName": True}
                if len(keys) == 1:
                    return {"route": keys[0], "tier": tier, "variant": vi, "pathOnly": verb == "?"}
                if verb == "?":
                    verbs = sorted({r["method"] for r in top})
                    return {"route": None, "ambiguous": True, "candidates": keys, "tier": tier,
                            "detail": "verb unknown and path exists for " + ", ".join(verbs)
                            if len(verbs) > 1 else "several routes share this shape"}
                return {"route": None, "ambiguous": True, "candidates": keys, "tier": tier,
                        "detail": "several routes of the same verb share this shape"}
        # no match at all: does the path exist under another verb?
        if verb != "?":
            for tier in (1, 2):
                other = self.candidates(csegs, "?", tier)
                if other:
                    best = max(s for s, _ in other)
                    keys = sorted({r["key"] for s, r in other if s == best})
                    return {"route": None, "otherVerb": keys}
        return {"route": None}


# --------------------------------------------------------------------------- scanning

def is_test_file(rel):
    low = rel.lower()
    return ("__test__" in low or "__tests__" in low or "__mocks__" in low
            or ".spec." in low or ".test." in low)


def scan_file(path, rel, index):
    src = path.read_text(encoding="utf-8", errors="replace")
    code, toks = lex(src)
    nl = [m.start() for m in re.finditer("\n", src)]
    lines_code = code.split("\n")
    tok_by_start = {t.start: t for t in toks}
    sites = []
    decl_cache = {}

    def line_of(pos):
        return bisect.bisect_right(nl, pos - 1) + 1 if pos > 0 else 1

    def decl_lines():
        if "d" not in decl_cache:
            d = []
            for i, ln in enumerate(lines_code):
                r = find_decl(ln)
                if r:
                    d.append((i, r[0], r[1]))
            decl_cache["d"] = d
        return decl_cache["d"]

    def enclosing_decl(line_idx):
        indent = len(lines_code[line_idx]) - len(lines_code[line_idx].lstrip())
        for i, ind, name in reversed(decl_lines()):
            if i <= line_idx and (ind < indent or (i == line_idx and False)):
                return i, ind, name
        return None

    def region_end(decl):
        if decl is None:
            return len(lines_code)
        i0, ind0, _ = decl
        for i, ind, _name in decl_lines():
            if i > i0 and ind <= ind0:
                return i
        return len(lines_code)

    line_start = [0] + [p + 1 for p in nl]

    def parse_concat(end):
        """Follow '+ operand' chains from index end. Returns (suffix_text, new_end, names)."""
        text = ""
        names = []
        while True:
            j = end
            while j < len(code) and code[j] in " \t\r\n":
                j += 1
            if not (j < len(code) and code[j] == "+" and code[j + 1:j + 2] not in ("+", "=")):
                return text, end, names
            j += 1
            while j < len(code) and code[j] in " \t\r\n":
                j += 1
            if j >= len(code):
                return text, end, names
            c = code[j]
            if c in "\"'`" and j in tok_by_start:
                nt = tok_by_start[j]
                text += nt.text
                names.extend(nt.exprs)
                end = nt.end
                continue
            if c == "(":
                e0 = match_fwd(code, j) + 1
                names.append(src[j:e0])
                end = e0
                text += "{}"
                continue
            k = j + (1 if c in "!-" else 0)
            m = IDENT.match(code, k)
            if m:
                k = m.end()
                while k < len(code):
                    if code[k] == "." or (code[k] == "?" and code[k + 1:k + 2] == "."):
                        k2 = k + (2 if code[k] == "?" else 1)
                        m2 = IDENT.match(code, k2)
                        if not m2:
                            break
                        k = m2.end()
                    elif code[k] in "([":
                        k = match_fwd(code, k) + 1
                    elif code[k] == "!":
                        k += 1
                    else:
                        break
            elif c.isdigit():
                while k < len(code) and (code[k].isdigit() or code[k] == "."):
                    k += 1
            else:
                return text, end, names
            names.append(src[j:k])
            text += "{}"
            end = k

    def assigned_var(pos):
        pre = code[max(0, pos - 300):pos]
        pre = pre[pre.rfind(";") + 1:]
        last_decl = None
        for dm in re.finditer(r"\b(?:const|let|var)\s+", pre):
            last_decl = dm.start()
        if last_decl is not None:
            m = re.match(r"(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=;{}]+)?=(?![=>])\s*[^;=]*$", pre[last_decl:])
        else:
            m = re.search(r"(?:^|[\s;{}])([A-Za-z_$][\w$.]*)\s*=(?![=>])\s*[^;=]*$", pre)
        return m.group(1) if m else None

    def find_uses(var, from_pos, to_pos, suffix0=""):
        """Follow a variable (and aliases built from it) to the calls that consume it.
        Returns list of (suffix, verb, transport)."""
        uses = []
        work = [(var, from_pos, suffix0)]
        seen = set()
        while work and len(seen) < 6:
            v, fp, sfx = work.pop(0)
            if v in seen:
                continue
            seen.add(v)
            reg = code[fp:to_pos]
            rd = re.search(r"\b(?:const|let|var)\s+" + re.escape(v) + r"(?![\w$])", reg)
            lim = fp + (rd.start() if rd else len(reg))
            for mm in re.finditer(r"(?<![\w$.])" + re.escape(v) + r"(?![\w$:])", code[fp:lim]):
                pos = fp + mm.start()
                if code[pos + len(v):pos + len(v) + 1] == ":" :
                    continue
                add, e2, _n = parse_concat(pos + len(v))
                ev = enclosing_verb(src, code, pos, levels=2)
                if ev:
                    uses.append((sfx + add, ev[0], ev[1]))
                else:
                    av = assigned_var(pos)
                    if av and av != v:
                        work.append((av, e2, sfx + add))
            for tk in toks:
                if tk.kind != "tpl" or tk.start < fp or tk.end > lim or "${" + v + "}" not in tk.raw:
                    continue
                add = tk.text[2:] if tk.raw.startswith("`${" + v + "}") else ""
                ev = enclosing_verb(src, code, tk.start, levels=2)
                if ev:
                    uses.append((sfx + add, ev[0], ev[1]))
                else:
                    av = assigned_var(tk.start)
                    if av and av != v:
                        work.append((av, tk.end, sfx + add))
        out = []
        for u in uses:
            if u not in out:
                out.append(u)
        return out

    # Redux Toolkit Query endpoints (store/api.ts: createApi with baseUrl "/api/v1/"):
    # each endpoint is { url: "Controller/Action", method: "get" } relative to that base.
    has_rtk = "injectEndpoints" in src or "createApi(" in src

    for t in toks:
        raw = t.text
        rtk = False
        if has_rtk and re.search(r"\burl\s*:\s*$", code[max(0, t.start - 40):t.start]) \
                and "/api/v1/" not in raw.lower():
            raw = "/api/v1/" + raw.lstrip("/")
            rtk = True
        if "/api/v1/" not in raw.lower() and not raw.startswith("~/") \
                and not has_root(raw, index.roots):
            continue
        kind = "template" if t.kind == "tpl" and "{}" in raw else "literal"
        add, end, cnames = parse_concat(t.end)
        text = raw + add
        pnames = list(t.exprs) + cnames
        concat = bool(add) or end != t.end
        if concat:
            kind = "concat"
        got = normalize_path(text, extra_roots=index.roots)
        if not got:
            continue
        ptext, tilde = got
        embedded = not raw.startswith("~/") and not raw.lower().startswith("/api/v1/") \
            and not has_root(raw, index.roots)
        if kind == "literal" and tilde:
            kind = "tilde"
        if embedded and kind == "literal":
            kind = "template"
        line = line_of(t.start)
        line_idx = line - 1
        decl = enclosing_decl(line_idx)
        fname = decl[2] if decl else None

        # ---- verb inference: [(suffix, verb, source, transport)]
        results = []
        ev = enclosing_verb(src, code, t.start)
        if rtk:
            br = enclosing_brace(code, t.start)
            mm = re.search(r"\bmethod\s*:\s*[\"'`](\w+)", src[br[0]:br[1] + 1]) if br else None
            results.append(("", mm.group(1).upper() if mm else "GET", "store-endpoint", None))
        elif ev:
            results.append(("", ev[0], "direct" if ev[2] == 0 else "nested-call", ev[1]))
        else:
            r_end = region_end(decl)
            r_end_pos = line_start[r_end] if r_end < len(line_start) else len(code)
            var = assigned_var(t.start)
            uses = find_uses(var, end, r_end_pos) if var else []
            if uses:
                verbs = {u[1] for u in uses}
                src_name = "variable" if len(uses) == 1 else "variable-multi"
                for sfx, vb, tr in uses:
                    results.append((sfx, vb, src_name, tr))
            else:
                seg = code[end:r_end_pos]
                mm = re.search(r"\.\s*(get|post|put|del|delete|patch)\s*(?:<|\()", seg)
                if mm and mm.start() < 1500:
                    results.append(("", VERB_HELPERS[mm.group(1).lower()], "nearest-call", None))
                else:
                    results.append(("", "?", "none", None))
        for sfx, sv, vsrc, tr in results:
            full = ptext
            skind = kind
            if sfx:
                full = ptext + sfx
                skind = "concat"
            prefix_hint = full.endswith("/") and "?" not in full and not concat and not sfx
            sites.append({
                "method": sv,
                "path": clean_path(full),
                "file": rel,
                "line": line,
                "function": fname,
                "kind": skind,
                "tildePrefix": tilde,
                "verbSource": vsrc,
                "transport": tr,
                "isTest": is_test_file(rel),
                "_prefix": prefix_hint,
                "_names": [] if sfx else pnames,
                "_col": t.start - line_start[line_idx],
            })
    return sites


# Controller names chosen at run time from a closed enum. Each entry lists the values the
# code can produce for that function (read from the source, see database.service.ts
# getDatabaseControllerName: PostgreSQL -> "postgres", SqlServer -> "sqlserver";
# getConfig returns early for "sqlserver").
DYNAMIC_CONTROLLER_HINTS = {
    ("src/services/database.service.ts", "getServiceStatus"): ["postgres", "sqlserver"],
    ("src/services/database.service.ts", "getDbConnectionInfo"): ["postgres", "sqlserver"],
    ("src/services/database.service.ts", "getConfig"): ["postgres"],
}


def attach_matches(sites, index):
    matched, unmatched = [], []
    for s in sites:
        path = s["path"]
        csegs = segments(path)
        prefix_hint = s.pop("_prefix")
        names = s.pop("_names", [])
        s.pop("_col", None)
        if s["isTest"]:
            res = index.match(path, s["method"], prefix_hint)
            s["matchedRoute"] = res.get("route")
            s["matchConfidence"] = "test" if res.get("route") else None
            matched.append(s)
            continue
        if path.lower().rstrip("/") == "/api/v1":
            s["matchedRoute"] = None
            s["matchConfidence"] = None
            u = dict(s)
            u["reason"] = "non-controller"
            u["detail"] = "base path constant, no controller segment"
            unmatched.append(u)
            matched.append(s)
            continue
        hint = DYNAMIC_CONTROLLER_HINTS.get((s["file"], s["function"]))
        if hint and csegs[2] == "{}":
            keys = []
            for ctl in hint:
                r2 = index.match("/api/v1/" + ctl + "/" + "/".join(csegs[3:]), s["method"], prefix_hint)
                if r2.get("route"):
                    keys.append(r2["route"])
            if keys:
                s["matchedRoute"] = keys[0]
                s["matchedRoutes"] = keys
                s["matchConfidence"] = "medium"
                s["note"] = "controller name chosen from an enum"
                matched.append(s)
                continue
        res = index.match(path, s["method"], prefix_hint, names)
        trailing_only = bool(res.get("route")) and res.get("variant") == 1
        if trailing_only:
            res = {"route": None}
        s["matchedRoute"] = None
        s["matchConfidence"] = None
        dyn_first = (len(csegs) >= 3 and csegs[0].lower() == "api" and csegs[2] == "{}") \
            or (len(csegs) >= 1 and csegs[0] == "{}")
        if res.get("route"):
            s["matchedRoute"] = res["route"]
            if s["method"] == "?":
                conf = "low"
            elif res["tier"] == 2 or res["variant"] == 1:
                conf = "low"
            elif s["verbSource"] in ("direct", "store-endpoint"):
                conf = "high"
            elif s["verbSource"] in ("variable", "variable-multi"):
                conf = "high" if res["tier"] == 1 else "medium"
            else:
                conf = "medium"
            if res.get("byName"):
                conf = "medium"
            if s["method"] != "?" and s["verbSource"] == "nearest-call":
                conf = "low"
            if s["method"] != "?" and s["verbSource"] == "nested-call":
                conf = "medium" if conf == "high" else conf
            s["matchConfidence"] = conf
            matched.append(s)
            continue
        u = dict(s)
        if dyn_first:
            u["reason"] = "dynamic"
            u["detail"] = "controller segment is built at run time"
            if res.get("candidates"):
                u["candidates"] = res["candidates"][:10]
        elif trailing_only:
            u["reason"] = "stale"
            u["detail"] = "literal ends in a slash with nothing appended, so it names no route; not credited"
        elif res.get("ambiguous") and res.get("tier") == 2:
            u["reason"] = "stale"
            u["detail"] = ("no route with a {param} segment here; the path would only match if the run-time "
                           "segment equalled a literal route segment (%d such routes)" % len(res["candidates"]))
            u["candidates"] = res["candidates"][:10]
        elif res.get("ambiguous"):
            u["reason"] = "ambiguous"
            u["detail"] = res["detail"]
            u["candidates"] = res["candidates"]
        elif not path.lower().startswith("/api/v1/") and not index.roots:
            u["reason"] = "non-controller"
            u["detail"] = "not under /api/v1"
        elif res.get("otherVerb"):
            u["reason"] = "stale"
            u["detail"] = "path exists only for another verb: " + ", ".join(res["otherVerb"])
            u["candidates"] = res["otherVerb"]
        elif "{}" in path and path.count("{}") >= 1 and (
                len(csegs) < 3 or any(seg.startswith("{") for seg in csegs[2:3])):
            u["reason"] = "dynamic"
            u["detail"] = "action segment is built at run time"
        else:
            u["reason"] = "stale"
            u["detail"] = "no controller route with this path in routes.json"
        unmatched.append(u)
        matched.append(s)  # keep every site in the call list (matchedRoute null)
    return matched, unmatched


def export_src(web_repo, ref, dest):
    dest = Path(dest)
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True)
    arc = subprocess.run(["git", "-C", str(web_repo), "archive", ref, "src"],
                         check=True, capture_output=True).stdout
    subprocess.run(["tar", "-x", "-C", str(dest)], input=arc, check=True)
    sha = subprocess.run(["git", "-C", str(web_repo), "rev-parse", ref], check=True,
                         capture_output=True, text=True).stdout.strip()
    return sha


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--web-repo", default=str(DEFAULT_WEB))
    ap.add_argument("--ref", default=DEFAULT_REF)
    ap.add_argument("--export-dir", default=str(DEFAULT_EXPORT))
    ap.add_argument("--routes", default=str(INV / "routes.json"))
    ap.add_argument("--out-dir", default=str(INV / "console-fix"))
    ap.add_argument("--skip-export", action="store_true")
    a = ap.parse_args()

    if a.skip_export:
        sha = subprocess.run(["git", "-C", a.web_repo, "rev-parse", a.ref], capture_output=True,
                             text=True).stdout.strip() or None
    else:
        sha = export_src(a.web_repo, a.ref, a.export_dir)
    src_root = Path(a.export_dir) / "src"
    index = RouteIndex(json.load(open(a.routes)))

    files = sorted(p for p in src_root.rglob("*") if p.suffix in (".ts", ".tsx"))
    sites = []
    for p in files:
        rel = "src/" + p.relative_to(src_root).as_posix()
        sites.extend(scan_file(p, rel, index))
    sites.sort(key=lambda s: (s["file"], s["line"], s["path"], s["method"]))
    matched, unmatched = attach_matches(sites, index)

    out = Path(a.out_dir)
    out.mkdir(parents=True, exist_ok=True)
    meta = {"ref": a.ref, "commit": sha, "filesScanned": len(files)}
    calls = {
        "meta": dict(meta, siteCount=len(matched),
                     byKind=count_by(matched, "kind"),
                     byMethod=count_by(matched, "method"),
                     matched=sum(1 for s in matched if s["matchedRoute"]),
                     unmatched=sum(1 for s in matched if not s["matchedRoute"]),
                     tests=sum(1 for s in matched if s["isTest"])),
        "sites": matched,
    }
    um = {"meta": dict(meta, count=len(unmatched), byReason=count_by(unmatched, "reason")),
          "sites": unmatched}
    json.dump(calls, open(out / "console-calls-v2.json", "w"), indent=1)
    json.dump(um, open(out / "console-unmatched.json", "w"), indent=1)
    print(json.dumps(calls["meta"], indent=1))
    print(json.dumps(um["meta"], indent=1))


def count_by(items, key):
    d = {}
    for i in items:
        d[i[key]] = d.get(i[key], 0) + 1
    return dict(sorted(d.items(), key=lambda kv: str(kv[0])))


if __name__ == "__main__":
    sys.exit(main())
