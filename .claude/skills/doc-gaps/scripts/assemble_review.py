#!/usr/bin/env python3
"""Merge drafted proposals into the review page's data.json.

Usage:
  assemble_review.py --run <run folder> --docs-root <repo root> [--round r1] [--meta meta.json] [--replace]

Reads  <run>/draft-gaps.json      ranked gaps (list of objects; see SKILL.md, step 5)
       <run>/proposals/*__<round>.json and matching .md   (drafter output)
Writes <run>/review/data.json     {"meta": {...}, "proposals": [...]}  (merges with an existing file)

Gaps already present in an existing data.json are kept as they are; a gap that appears in
several proposals goes to the one with a real fix (so a drafter that moved a gap elsewhere
does not leave a duplicate). Proposals whose gaps are all no-fix get proposed == original.
Prints any gap that has no drafted proposal so the caller can redo it.
"""
import argparse, datetime, functools, glob, json, os, re, sys

open = functools.partial(open, encoding="utf-8")  # never the platform default (cp1252 on Windows)

LEVELS = ("high", "medium", "low")
ALIAS = {"partly_covered": "partially_covered", "partial": "partially_covered", "real": "real_gap", "contradiction": "contradicted"}


def norm_verdict(v):
    v = str(v or "").strip().lower().replace(" ", "_").replace("-", "_")
    return ALIAS.get(v, v)
TIERS = ("P0", "P1", "P2", "P3")

NOFIX = ("already_covered", "not_user_facing")
PLAIN = ["why_gap", "why_gap_confidence", "ev", "gap_confidence_reasons", "change_summary", "verdict"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--run", required=True)
    ap.add_argument("--docs-root", required=True)
    ap.add_argument("--round", default="r1")
    ap.add_argument("--meta")
    ap.add_argument("--docs-prefix", default="", help="the audited version docs folder (default: meta.docsPath); proposals outside it are skipped")
    ap.add_argument("--replace", action="store_true", help="redrafts: new proposals replace existing entries for the same gap ids")
    a = ap.parse_args()
    run, root = a.run, a.docs_root
    gaps = {g["id"]: g for g in json.load(open(f"{run}/draft-gaps.json"))}
    out_path = f"{run}/review/data.json"
    os.makedirs(f"{run}/review", exist_ok=True)
    cur = {"meta": {}, "proposals": []}
    if os.path.exists(out_path):
        j = json.load(open(out_path))
        cur = j if isinstance(j, dict) else {"meta": {}, "proposals": j}
    if a.meta:
        cur["meta"] = json.load(open(a.meta))
    have = set() if a.replace else {g["id"] for p in cur["proposals"] for g in p["gaps"]}

    new = []
    # round r1 matches __r1.json and per-agent __r1b3.json, never __r10
    pat = re.compile(rf"__{re.escape(a.round)}(b\d+)?\.json$")
    files = sorted(f for f in glob.glob(f"{run}/proposals/*.json") if pat.search(f))
    good, seen_ids = [], set()
    for jp in files:  # parse each drafter file once; one truncated or malformed file must not stop the others
        try:
            j = json.load(open(jp))
            assert isinstance(j, dict) and j.get("proposal_id") and j.get("page") and isinstance(j.get("gaps"), list) and all(isinstance(x, dict) and x.get("id") for x in j["gaps"])
        except Exception as ex:
            print("unreadable or incomplete proposal, skipped:", jp, "-", type(ex).__name__, file=sys.stderr)
            continue
        if j["proposal_id"] in seen_ids:
            print("DUPLICATE proposal_id (two agents wrote the same page in one round), skipped; its gaps will show as 'no proposal':", j["proposal_id"], jp, file=sys.stderr)
            continue
        seen_ids.add(j["proposal_id"])
        good.append((jp, j))
    for jp, j in good:
        mp = jp[:-5] + ".md"
        if not os.path.exists(mp):
            print("missing .md for", jp, file=sys.stderr)
            continue
        page = j["page"]
        full = os.path.realpath(os.path.join(root, page))
        # the drafter wrote this path: never read outside the docs root (data.json is published)
        docs_dir = os.path.join(os.path.realpath(root), "docs") + os.sep
        if not full.startswith(docs_dir) or not full.endswith(".md"):
            print("page path is not a .md file under <docs-root>/docs, skipped:", page, jp, file=sys.stderr)
            continue
        raw = a.docs_prefix or (cur.get("meta") or {}).get("docsPath") or ""
        # compare real paths, so symlinks and an absolute docsPath both work
        pre_abs = os.path.realpath(raw if os.path.isabs(raw) else os.path.join(root, raw)) if raw else ""
        if pre_abs and (not (full + os.sep).startswith(pre_abs + os.sep) or (full + os.sep).startswith(os.path.join(pre_abs, "kb") + os.sep)):
            # another version or product, or a gitignored build-time KB copy: a PR could not carry this edit
            print(f"page is outside the audited docs folder {raw} or is a KB copy, skipped:", page, jp, file=sys.stderr)
            continue
        orig = open(full).read() if os.path.isfile(full) else ""
        gl = []
        for g in j["gaps"]:
            r = gaps.get(g["id"])
            if not r:
                print("unknown gap", g["id"], file=sys.stderr)
                continue
            links = r.get("demand_links") or [u.strip() for u in re.split(r"<br>|;", r.get("demand", "")) if u.strip().startswith("http")]
            g = dict(g, gap_confidence=g.get("gap_confidence") if g.get("gap_confidence") in LEVELS else "low")  # drafter output: allowlist
            g["verdict"] = norm_verdict(g.get("verdict"))
            gl.append(dict(g, item=re.sub(rf"^{re.escape(g['id'])}\s+", "", r.get("item", g["id"])), dimension=r.get("dimension", ""),
                           effort=r.get("effort", ""), score=r.get("score", 0), missing=r.get("missing", ""),
                           demand_links=links, audit_confidence=r.get("confidence", ""), rank=r.get("rank", 999), tier=r.get("tier") if r.get("tier") in TIERS else "P3"))
        new.append(dict(id=j["proposal_id"], page=page, short=re.sub(r"^docs/[^/]+/(?:(?:\d[\w.]*|current)/)?", "", page), summary=j.get("summary", ""),
                        fix_confidence=j.get("fix_confidence") if j.get("fix_confidence") in LEVELS else "low", fix_confidence_reason=j.get("fix_confidence_reason", ""),
                        why_fix_confidence=j.get("why_fix_confidence", ""), sme_questions=j.get("sme_questions", []),
                        placement_note=j.get("placement_note", ""), gaps=gl, original=orig, proposed=open(mp).read()))

    owner = {}
    for p in new:
        for g in p["gaps"]:
            sc = (g.get("verdict") not in NOFIX, p["original"] != p["proposed"])
            if g["id"] not in owner or sc > owner[g["id"]][0]:
                owner[g["id"]] = (sc, p["id"])
    for p in new:
        p["gaps"] = [g for g in p["gaps"] if owner[g["id"]][1] == p["id"] and g["id"] not in have]
    new = [p for p in new if p["gaps"]]
    for p in new:
        if all(g.get("verdict") in NOFIX for g in p["gaps"]):
            p["proposed"] = p["original"]
        p["tier"] = sorted(g["tier"] for g in p["gaps"])[0]
        p["rank"] = min(g["rank"] for g in p["gaps"])
        p["title"] = p["gaps"][0]["item"] if len(p["gaps"]) == 1 else " + ".join(g["id"] for g in p["gaps"][:3]) + (" +" if len(p["gaps"]) > 3 else "")

    if a.replace:  # drop the old entries for gaps that were redrafted
        rev = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"
        for p in new:
            p["rev"] = rev  # the page ignores decisions and edits saved before this moment
        redone = {g["id"] for p in new for g in p["gaps"]}
        for p in cur["proposals"]:
            p["gaps"] = [g for g in p["gaps"] if g["id"] not in redone]
        cur["proposals"] = [p for p in cur["proposals"] if p["gaps"]]
        fresh_pages = {p["page"] for p in new}
        for p in cur["proposals"]:
            if p["page"] in fresh_pages and p.get("rev") != rev:
                p["superseded"] = True  # its page text still holds the old edits of the redrafted gaps
                print("WARNING: page", p["page"], "now has two proposal texts; redraft its remaining gaps too:", [g["id"] for g in p["gaps"]], file=sys.stderr)
    cur["proposals"] += new
    cur["proposals"].sort(key=lambda p: p.get("rank", 999))
    json.dump(cur, open(out_path, "w"))

    ids = [g["id"] for p in cur["proposals"] for g in p["gaps"]]
    bad = sorted({(g["id"], k) for p in new for g in p["gaps"] for k in PLAIN if not g.get(k) and not (k == "change_summary" and g.get("verdict") in NOFIX)})
    print(f"added {len(new)} proposals; {len(ids)} gaps in data.json ({len(set(ids))} unique); {os.path.getsize(out_path)/1e6:.2f} MB")
    # only the gaps batched for drafting in the rounds so far (batch-<round>-N.json), not every tier
    scope = []
    cur_n = int((re.search(r"(\d+)", a.round) or [0, 10**6])[1])
    for bf in glob.glob(f"{run}/batch-*-*.json"):
        rn = re.search(r"batch-r?(\d+)-", os.path.basename(bf))
        if rn and int(rn.group(1)) > cur_n:
            continue  # batched for a later round: not expected yet
        bj = json.load(open(bf))
        for pg in (bj.get("pages", []) if isinstance(bj, dict) else bj):
            scope += [g["id"] for g in pg.get("gaps", [])]
    scope = [i for i in dict.fromkeys(scope) if i in gaps]
    missing = [i for i in scope if i not in ids]
    print("gaps with no proposal:", missing or "none")
    if missing:
        print("  redo these in a new batch (new suffix); a drafter skipped them or another agent overwrote the file", file=sys.stderr)
    if bad:
        print("gaps missing required fields:", bad)


if __name__ == "__main__":
    main()
