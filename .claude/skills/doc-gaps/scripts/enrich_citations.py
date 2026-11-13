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
import argparse, json, os, re

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
    tot = ok = fix = bad = 0
    root_real = os.path.realpath(a.code)
    cache = {}
    for p in props:
        for g in p["gaps"]:
            for c in (g.get("evidence") or {}).get("code", []):
                tot += 1
                m = re.match(r"^(.+?)(?::(\d+)(?:-(\d+))?)?\s*$", (c.get("cite") or "").split(";")[0].strip())
                if not m:
                    c["verified"] = "no"; bad += 1; continue
                rel, l1, l2 = m.group(1), m.group(2), m.group(3)
                rel = re.sub(r"^code/", "", rel)
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
                    cache[fp] = open(fp, errors="replace").read().split("\n")
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
                status = "window" if (not q or q in win) else None
                if status is None:
                    whole = norm(" ".join(lines))
                    if q and q in whole:
                        for i in range(len(lines)):
                            if q[:60] in norm(" ".join(lines[i:i + 3])):
                                s = e = i + 1
                                lo, hi = max(1, s - a.context), min(len(lines), e + a.context)
                                status = "file"
                                break
                c["verified"] = status or "no"
                if status is None:
                    bad += 1; print("quote not found:", g["id"], c.get("cite"), "|", (c.get("quote") or "")[:60])
                elif status == "window":
                    ok += 1
                else:
                    fix += 1
                c["start"], c["end"] = s, e
                c["snippet"] = [dict(n=i, t=lines[i - 1][:LONG] + ("…" if len(lines[i - 1]) > LONG else ""), hit=(s <= i <= e)) for i in range(lo, hi + 1)]
                if a.blob_base:
                    c["url"] = f"{a.blob_base.rstrip('/')}/{rel}#L{s}" + (f"-L{e}" if e != s else "")
    json.dump(j, open(path, "w"))
    print(f"{tot} code citations: {ok} verified in place, {fix} re-anchored, {bad} not verified")


if __name__ == "__main__":
    main()
