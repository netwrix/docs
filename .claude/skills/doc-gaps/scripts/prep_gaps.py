#!/usr/bin/env python3
"""Helpers between the audit and the drafters.

  prep_gaps.py convert --run RUN
      RUN/gaps-ranked.json (audit output) -> RUN/draft-gaps.json (the shape the drafters and
      assemble_review.py use). Adds rank by order.

  prep_gaps.py batches --run RUN --docs-root ROOT --tiers P0,P1 --round r1 [--agents 5] [--skip-done]
      Groups the chosen tiers' gaps by target page (one proposal per page) and bin-packs the
      pages into RUN/batch-<round>-<n>.json files, one per drafter agent.
      --skip-done leaves out gaps already in RUN/review/data.json.

  Merging several audit runs of the same product version (see references/merge-workflow.js):

  prep_gaps.py merge-prep --out OUT --runs LABEL=PATH [LABEL=PATH ...]
      PATH is a run folder (its gaps-ranked.json) or a JSON list already in the normalized shape.
      Prefixes every id with its run label so ids never collide, and writes OUT/runs.json plus
      OUT/in-<dimension>.json for the matcher agents.
  prep_gaps.py merge-group --out OUT
      Reads OUT/match-<dimension>.json (groups of ids that are the same gap) and the run verdicts.
      Writes OUT/merged-pre.json and OUT/recheck-in-NN.json for gaps no run has a verdict for.
  prep_gaps.py merge-impact-prep --out OUT
      Reads OUT/recheck-out-*.json, applies verdicts, writes OUT/impact-in-NN.json (gaps still needing a fix).
  prep_gaps.py merge-final --out OUT [--cutoffs 4,3,1.6]
      Reads OUT/impact-out-*.json, computes priority, writes OUT/gaps-ranked.json (the audit's shape, plus
      verdict, runs and source_ids), OUT/merged-final.json and OUT/dropped-merge.json. Then run convert.
"""
import argparse, collections, json, os, re, sys


def norm_target(t, prefix):
    """Audit targets look like 'path (note)', 'NEW path (note)' or 'New page path'. Return 'docs/.../path (note)'."""
    m = re.match(r"^\s*(new(?:\s+page)?\s*:?\s+)?(\S+)(.*)$", t or "", re.I)
    if not m or not m.group(2).endswith(".md"):
        return (t or "").strip()  # no usable page path ('new page', free text): batches() gives it its own entry
    new, path, rest = m.group(1), m.group(2), m.group(3).strip()
    if prefix and not path.startswith("docs/") and path.endswith(".md"):
        path = prefix.rstrip("/") + "/" + path
    note = ("NEW page. " if new else "") + rest
    return (path + " " + note).strip()


def convert(run, prefix=""):
    src = json.load(open(f"{run}/gaps-ranked.json"))
    out = []
    for i, g in enumerate(src, 1):
        cites = [c.strip() for c in (g.get("citation") or "").split(";") if c.strip().startswith("http")]
        cites += [u for u in (g.get("links") or []) if isinstance(u, str) and u.startswith("http") and u not in cites]
        out.append(dict(id=g["id"], item=g.get("name", g["id"]), dimension=g.get("dimension", ""), tier=g.get("tier", "P3"),
                        confidence=g.get("confidence", ""), score=g.get("final_score", 0), missing=g.get("what_missing", ""),
                        target=norm_target(g.get("target_page", ""), prefix), demand_links=cites, effort=g.get("effort", ""), rank=i,
                        verdict=g.get("verdict", ""), runs=g.get("runs", ""), source_ids=g.get("source_ids", [])))
    json.dump(out, open(f"{run}/draft-gaps.json", "w"), indent=1)
    print(len(out), "gaps ->", f"{run}/draft-gaps.json")


def batches(run, root, tiers, rnd, agents, skip_done):
    gaps = json.load(open(f"{run}/draft-gaps.json"))
    done = set()
    dp = f"{run}/review/data.json"
    if skip_done and os.path.exists(dp):
        j = json.load(open(dp))
        done = {g["id"] for p in (j["proposals"] if isinstance(j, dict) else j) for g in p["gaps"]}
    grp = collections.OrderedDict()
    for g in gaps:
        if g["tier"] not in tiers or g["id"] in done:
            continue
        t = g["target"]
        page = t.split(" ")[0]
        if not page.endswith(".md"):  # no page path: one entry per gap, never one shared fake page
            page, note = "NEW:" + g["id"], t
        else:
            note = t[len(page):].strip()
        g = dict(g, target_note=note)
        grp.setdefault(page, []).append(g)
    items = sorted(grp.items(), key=lambda kv: -len(kv[1]))
    n = max(1, min(agents, len(items)))
    bins, load = [[] for _ in range(n)], [0.0] * n
    for page, v in items:
        i = load.index(min(load))
        bins[i].append(dict(page=page, exists=os.path.isfile(os.path.join(root, page)), gaps=v))
        load[i] += len(v) + 1.5
    for i, b in enumerate(bins, 1):
        json.dump(dict(suffix=f"{rnd}b{i}", pages=b), open(f"{run}/batch-{rnd}-{i}.json", "w"), indent=1)
    print(f"{sum(len(v) for v in grp.values())} gaps on {len(grp)} pages -> {n} batch files (batch-{rnd}-N.json; each carries its own suffix {rnd}bN)")


# ---------------------------------------------------------------- merging runs
LV = ["low", "medium", "high"]
VRANK = {"contradicted": 3.5, "real_gap": 3, "partially_covered": 2, "already_covered": 1, "not_user_facing": 0, "troubleshooting": -1}
ADJ = {"S": 1.2, "M": 1.0, "L": 0.8}
NEEDS_FIX = ("contradicted", "real_gap", "partially_covered")


def _norm_ranked(g, label):
    """Audit gaps-ranked.json entry -> normalized gap."""
    return dict(id=f"{label}-{g['id']}", src=label, dim=g.get("dimension", ""), name=g.get("name", g["id"]),
                page=g.get("target_page", ""), missing=g.get("what_missing", ""), score=g.get("final_score", 0),
                conf=g.get("confidence", "low"), tier=g.get("tier", ""), impact=g.get("impact"), demand=g.get("demand"),
                effort=g.get("effort", "M"), links=g.get("links") or [], cite=g.get("citation", ""),
                why=next(iter((g.get("judge_rationales") or {}).values()), ""), verdict=g.get("verdict"))


def _load_runs(out):
    return json.load(open(f"{out}/runs.json"))


def _chunks(lst, n):
    return [lst[i:i + n] for i in range(0, len(lst), n)]


def merge_prep(out, runs):
    os.makedirs(out, exist_ok=True)
    allg = []
    for spec in runs:
        label, path = spec.split("=", 1)
        f = path if path.endswith(".json") else f"{path}/gaps-ranked.json"
        src = json.load(open(f))
        src = src if isinstance(src, list) else src.get("gaps", [])
        for g in src:
            allg.append(g if "dim" in g and g.get("src") else _norm_ranked(g, label))
    ids = [g["id"] for g in allg]
    assert len(ids) == len(set(ids)), "duplicate ids after prefixing; use distinct run labels"
    json.dump(allg, open(f"{out}/runs.json", "w"), indent=1)
    by = collections.defaultdict(list)
    for g in allg:
        by[g["dim"]].append(g)
    for dim, v in by.items():
        json.dump(v, open(f"{out}/in-{dim}.json", "w"), indent=1)
    print({d: len(v) for d, v in by.items()}, "->", out)


def merge_group(out):
    G = {g["id"]: g for g in _load_runs(out)}
    merged, pre_fix = [], []
    # every area with gaps must have a match file: a failed matcher agent must not drop a whole area silently
    for fn in sorted(os.listdir(out)):
        if fn.startswith("in-") and fn.endswith(".json") and json.load(open(f"{out}/{fn}")):
            assert os.path.exists(f"{out}/match-{fn[3:]}"), f"no match file for area {fn[3:-5]}: its matcher agent failed; re-run it"
    for fn in sorted(os.listdir(out)):
        if not (fn.startswith("match-") and fn.endswith(".json")):
            continue
        dim = fn[6:-5]
        seen = set()
        groups = []
        for grp in json.load(open(f"{out}/{fn}")):
            ids = grp.get("a", []) + grp.get("b", []) + grp.get("ids", [])
            # only 'same' groups merge into one gap; 'related' ones stay separate gaps (each is drafted on its own)
            if grp.get("relation") == "related" and len(ids) > 1:
                groups += [dict(grp, ids=[i], a=[], b=[]) for i in ids]
            else:
                groups.append(dict(grp, ids=ids, a=[], b=[]))
        for grp in groups:
            ids = grp["ids"]
            for i in ids:
                assert i in G, f"{fn}: unknown id {i}"
                assert i not in seen, f"{fn}: id {i} in two groups"
                seen.add(i)
            if not ids:
                continue
            m = [G[i] for i in ids]
            runs = sorted({g["src"] for g in m})
            vs = [g["verdict"] for g in m if g.get("verdict")]
            confs = [LV.index(str(g.get("conf", "low")).lower()) if str(g.get("conf", "low")).lower() in LV else 0 for g in m]
            if len(runs) > 1:
                conf, why = LV[max(max(confs), 1) if min(confs) >= 1 else 1], "found by " + " and ".join(runs)
            else:
                conf, why = LV[min(confs)], f"found by run {runs[0]} only"
            mg = dict(mid=f"M-{dim[:4].upper()}-{len(merged) + 1:03d}", dim=dim, runs=runs, rel=grp.get("relation", ""),
                      ids=ids, name=" / ".join(dict.fromkeys(g["name"] for g in m))[:200] if len(m) <= 3 else m[0]["name"],
                      missing=" | ".join(dict.fromkeys(g["missing"] for g in m if g.get("missing")))[:600],
                      pages=sorted({norm_target(g["page"], "") for g in m if g.get("page")}), conf=conf, conf_why=why,
                      verdict=max(vs, key=lambda k: VRANK.get(k, 0)) if vs else None,
                      effort=max((g["effort"] for g in m if g.get("effort")), key=lambda e: "SML".index(str(e).upper()[:1]) if str(e).upper()[:1] in ("S", "M", "L") else 1, default="M"),
                      links=sorted({l for g in m for l in (g.get("links") or [])}),
                      cite=" ; ".join(g["cite"] for g in m if g.get("cite"))[:400], prior_impact=[g.get("impact") for g in m])
            merged.append(mg)
            if mg["verdict"] is None and dim != "api":
                pre_fix.append(dict(mid=mg["mid"], name=mg["name"], page=mg["pages"], missing=mg["missing"], cite=mg["cite"], links=mg["links"]))
        miss = set(G) - seen
        assert not miss or dim not in {g["dim"] for g in G.values() if g["id"] in miss}, f"{fn}: ids not covered: {sorted(miss)[:5]}"
    json.dump(merged, open(f"{out}/merged-pre.json", "w"), indent=1)
    for i, c in enumerate(_chunks(pre_fix, 10), 1):
        json.dump(c, open(f"{out}/recheck-in-{i:02d}.json", "w"), indent=1)
    print(len(merged), "merged items;", len(pre_fix), "need a verdict ->", -(-len(pre_fix) // 10), "recheck batches")


def merge_impact_prep(out):
    M = json.load(open(f"{out}/merged-pre.json"))
    rc = {}
    for fn in os.listdir(out):
        if fn.startswith("recheck-out-"):
            for r in json.load(open(f"{out}/{fn}")):
                rc[r["mid"] if "mid" in r else r["id"]] = r
    for m in M:
        if m["verdict"] is None and m["mid"] in rc:
            m["verdict"] = rc[m["mid"]]["verdict"]
            m["verdict_reason"] = rc[m["mid"]].get("reason", "")
    json.dump(M, open(f"{out}/merged-pre.json", "w"), indent=1)
    act = [m for m in M if m["verdict"] in NEEDS_FIX and m["dim"] != "api"]
    rows = [dict(mid=m["mid"], dim=m["dim"], name=m["name"][:120], missing=m["missing"][:260], runs=m["runs"], verdict=m["verdict"],
                 prior_impact=m["prior_impact"], threads=len(m["links"])) for m in act]
    for i, c in enumerate(_chunks(rows, 30), 1):
        json.dump(c, open(f"{out}/impact-in-{i:02d}.json", "w"), indent=1)
    print(len(act), "gaps need an impact rating;", sum(1 for m in M if m["verdict"] is None), "have no verdict (api or unchecked)")


def merge_final(out, cutoffs):
    p0, p1, p2 = cutoffs
    M = json.load(open(f"{out}/merged-pre.json"))
    imp = {}
    for fn in os.listdir(out):
        if fn.startswith("impact-out-"):
            for r in json.load(open(f"{out}/{fn}")):
                imp[r["mid"]] = r
    ranked, dropped, deferred, unjudged = [], [], [], []
    for m in M:
        if m["dim"] == "api":
            deferred.append(m); continue
        if m["verdict"] is None:
            unjudged.append(m["mid"]); continue
        if m["verdict"] not in NEEDS_FIX:
            dropped.append(m); continue
        i = imp.get(m["mid"])
        if i is None:
            print("WARNING: no impact rating for", m["mid"], "- rated 1; re-run the impact pass for it", file=sys.stderr)
            i = {"impact": 1, "reason": "no impact rating returned"}
        try:
            i["impact"] = max(0, min(3, int(i["impact"])))
        except (TypeError, ValueError):
            print("WARNING: bad impact value for", m["mid"], i.get("impact"), "- rated 1", file=sys.stderr)
            i["impact"] = 1
        m["impact"], m["impact_reason"] = i["impact"], i.get("reason", "")
        m["demand"] = min(3, len(m["links"]))
        m["priority_score"] = round(m["impact"] * max(m["demand"], 1) * ADJ.get(m["effort"], 1.0), 2)
        t = "P0" if m["priority_score"] >= p0 else "P1" if m["priority_score"] >= p1 else "P2" if m["priority_score"] >= p2 else "P3"
        if m["impact"] == 3 and m["conf"] == "high":
            t = "P0"
        m["tier"] = t
        ranked.append(m)
    if unjudged:  # a failed recheck agent leaves verdict None: never drop those silently
        sys.exit(f"ERROR: {len(unjudged)} non-API gaps have no verdict (a recheck agent failed): {unjudged[:10]}. Re-run the recheck for them before ranking.")
    order = {"high": 0, "medium": 1, "low": 2}
    ranked.sort(key=lambda m: (m["tier"], m["conf"] == "low", order.get(m["conf"], 2), -m["priority_score"], m["mid"]))
    ga = []
    for m in ranked:
        page = (m["pages"][0] if m["pages"] else "new page")
        ga.append(dict(id=m["mid"], name=m["name"], dimension=m["dim"], tier=m["tier"], confidence=m["conf"], confidence_reason=m["conf_why"],
                       final_score=0 if m["verdict"] in ("real_gap", "contradicted") else 1, what_missing=m["missing"], target_page=page, effort=m["effort"],
                       impact=m["impact"], demand=m["demand"], citation="; ".join(m["links"] + ([m["cite"]] if m["cite"] else [])),
                       links=m["links"], verdict=m["verdict"], runs="".join(m["runs"]), source_ids=m["ids"], needs_human_review=m["conf"] == "low"))
    json.dump(ga, open(f"{out}/gaps-ranked.json", "w"), indent=1)
    json.dump(dict(ranked=ranked, dropped=dropped, deferred_api=deferred), open(f"{out}/merged-final.json", "w"), indent=1)
    json.dump([m for m in dropped if m["verdict"] != "troubleshooting"], open(f"{out}/dropped-merge.json", "w"), indent=1)
    json.dump([m for m in dropped if m["verdict"] == "troubleshooting"], open(f"{out}/out-of-scope.json", "w"), indent=1)
    print(len(ga), "ranked,", len(dropped), "dropped,", len(deferred), "api deferred ->", f"{out}/gaps-ranked.json")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["convert", "batches", "merge-prep", "merge-group", "merge-impact-prep", "merge-final"])
    ap.add_argument("--run")
    ap.add_argument("--out")
    ap.add_argument("--runs", nargs="+")
    ap.add_argument("--cutoffs", default="4,3,1.6")
    ap.add_argument("--docs-prefix", default="", help="convert: docs folder of the audited version, e.g. docs/identitymanager/current, prefixed to relative target pages")
    ap.add_argument("--docs-root")
    ap.add_argument("--tiers", default="P0,P1")
    ap.add_argument("--round", default="r1")
    ap.add_argument("--agents", type=int, default=5)
    ap.add_argument("--skip-done", action="store_true")
    a = ap.parse_args()
    if a.cmd == "merge-prep":
        merge_prep(a.out, a.runs)
    elif a.cmd == "merge-group":
        merge_group(a.out)
    elif a.cmd == "merge-impact-prep":
        merge_impact_prep(a.out)
    elif a.cmd == "merge-final":
        merge_final(a.out, [float(x) for x in a.cutoffs.split(",")])
    elif a.cmd == "convert":
        convert(a.run, a.docs_prefix)
    else:
        batches(a.run, a.docs_root, a.tiers.split(","), a.round, a.agents, a.skip_done)
