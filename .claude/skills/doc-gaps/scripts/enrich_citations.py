#!/usr/bin/env python3
"""Attach real code excerpts to the code citations in the review data.

Usage:
  enrich_citations.py --run RUN --code CODEDIR [--blob-base URL] [--context 4]

Reads  RUN/review/data.json (written by assemble_review.py).
For every gap's evidence.code[] entry {cite: "path:line" or "path:start-end", quote}, reads the file under CODEDIR
and adds: snippet [{n, t, hit}] (the cited lines plus CONTEXT lines either side), start, end, verified
("window" if the quote is in the snippet, "file" if it was found elsewhere in the file and the snippet moved to it,
"no" if not found), and url (BLOB_BASE/path#Lstart-Lend, when --blob-base is given, for example
https://github.com/<org>/<repo>/blob/<commit>). Prints every citation whose quote could not be found.
"""
import argparse, functools, json, os, re

open = functools.partial(open, encoding="utf-8")  # never the platform default (cp1252 on Windows)

CAP = 30
LONG = 240


def norm(s):
    return re.sub(r"\s+", " ", s or "").strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--run", required=True)
    ap.add_argument("--code", required=True)
    ap.add_argument("--blob-base", default="")
    ap.add_argument("--context", type=int, default=4)
    a = ap.parse_args()
    path = f"{a.run}/review/data.json"
    j = json.load(open(path))
    props = j["proposals"] if isinstance(j, dict) else j
    tot = ok = fix = bad = unv = 0
    root_real = os.path.realpath(a.code)
    cache = {}
    flat = {}
    for p in props:
        for g in p["gaps"]:
            for c in (g.get("evidence") or {}).get("code", []):
                if not isinstance(c, dict):
                    print("skipped a malformed citation (not an object):", g.get("id"), str(c)[:60]); continue
                tot += 1
                m = re.match(r"^(.+?)(?::L?(\d+)(?:[-,]L?(\d+))?)?\s*$", (c.get("cite") or "").split(";")[0].strip())
                if not m:
                    c["verified"] = "no"; bad += 1; continue
                rel, l1, l2 = m.group(1), m.group(2), m.group(3)
                rel = re.sub(r"^code/", "", rel)
                fp = os.path.join(a.code, rel)
                if not os.path.isfile(fp) and "/code/" in rel:  # a run-folder prefix such as .doc-gaps/x-1.0/code/src/Foo.cs
                    rel = rel.split("/code/", 1)[1]
                    fp = os.path.join(a.code, rel)
                sym = None
                if not os.path.isfile(fp) and ":" in rel:  # cite names a symbol, not a line: path:symbol
                    rel, sym = rel.rsplit(":", 1)
                    fp = os.path.join(a.code, rel)
                # drafter-supplied paths are untrusted: never read outside the exported code folder
                if not (os.path.realpath(fp) + os.sep).startswith(root_real + os.sep) and os.path.realpath(fp) != root_real:
                    c["verified"] = "no"; bad += 1; print("path outside code folder, skipped:", g["id"], c.get("cite")); continue
                if not os.path.isfile(fp):
                    c["verified"] = "no"; bad += 1; print("missing file:", g["id"], c.get("cite")); continue
                if fp not in cache:
                    with open(fp, errors="replace") as fh:
                        cache[fp] = fh.read().replace("\r\n", "\n").replace("\r", "\n").split("\n")
                lines = cache[fp]
                q = norm(c.get("quote", "")).rstrip("….").rstrip(".").strip()
                if sym:  # anchor at the first line that mentions the symbol
                    hit = next((i + 1 for i, ln in enumerate(lines) if sym in ln), None)
                    l1 = str(hit) if hit else None
                    if not hit:
                        print("symbol not found:", g["id"], c.get("cite"))
                s = int(l1) if l1 else 1
                e = int(l2) if l2 else s
                lo, hi = max(1, s - a.context), min(len(lines), e + a.context)
                if hi - lo + 1 > CAP:
                    hi = lo + CAP - 1
                win = norm(" ".join(lines[lo - 1:hi]))
                status = ("unchecked" if not q else "window") if (not q or q in win) else None
                if sym and not l1:
                    status = None  # symbol not found: the snippet is only the top of the file
                if status is None and q:
                    if fp not in flat:  # normalized whole file with each line's offset, built once per file
                        pos, parts, off = [], [], 0
                        for n, ln in enumerate(lines, 1):
                            t = norm(ln)
                            if t:
                                pos.append((off, n)); parts.append(t); off += len(t) + 1
                        flat[fp] = (" ".join(parts), pos)
                    text, pos = flat[fp]
                    idx = text.find(q)  # the whole quote, so a repeated prefix elsewhere cannot win
                    hit_line = None
                    if idx >= 0:
                        for off, n in pos:
                            if off <= idx:
                                hit_line = n
                            else:
                                break
                    if hit_line:
                        s = e = hit_line
                        lo, hi = max(1, s - a.context), min(len(lines), e + a.context)
                        status = "file"
                c["verified"] = status or "no"
                if status is None:
                    bad += 1; print("quote not found:", g["id"], c.get("cite"), "|", (c.get("quote") or "")[:60])
                elif status == "unchecked":
                    unv += 1; print("no quote to check:", g["id"], c.get("cite"))
                elif status == "window":
                    ok += 1
                else:
                    fix += 1
                c["start"], c["end"] = s, e
                c["snippet"] = [dict(n=i, t=lines[i - 1][:LONG] + ("…" if len(lines[i - 1]) > LONG else ""), hit=(s <= i <= e)) for i in range(lo, hi + 1)]
                if a.blob_base:
                    c["url"] = f"{a.blob_base.rstrip('/')}/{rel}#L{s}" + (f"-L{e}" if e != s else "")
    json.dump(j, open(path, "w"))
    print(f"{tot} code citations: {ok} verified in place, {fix} re-anchored, {unv} had no quote to check, {bad} not verified")


if __name__ == "__main__":
    main()
