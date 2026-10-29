#!/usr/bin/env python3
"""Rebuild the caller inventory with the corrected console extraction (stdlib only).

Inputs (plans/api-inventory):
  other-clients/callers.json              route list with every non-service caller category
  service-clients/service-callers.json    service-side callers (action-service-module, service,
                                          installer, demo-or-dev)
  console-fix/console-calls-v2.json       output of extract_console_calls.py
  service-clients/CRITIC.md               the 40 routes the completeness critic found
  audience/audience.json                  audience verdicts for the no-caller list
Outputs (plans/api-inventory/console-fix):
  callers-v2.json, coverage-v2.md

The old console entries are dropped and replaced by the new console sites. No existing
inventory file is modified.
"""
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

INV = Path(__file__).resolve().parents[2] / "plans" / "api-inventory"
FIX = INV / "console-fix"
DEMO = "demo-or-dev"
CONF_RANK = {"high": 3, "medium": 2, "low": 1}

REPORT_FILES = [
    "SbPAM.WebAPI/Controllers/ReportController.cs:350",
    "SbPAM.EmailService/EmailWorker.cs:117",
    "SbPAM.NatsActors/NatsEmailActor.cs:59-95",
]
# Only this route is held back: the console reaches it through a WebSocket, not through the
# HTTP helpers, and nothing shows the console host serves the gateway route. The other two
# RAG gateway Token routes are called through the same genericService helpers as every other
# console call (ragService.service.ts) and keep their credit.
CANDIDATE_ONLY = "GET /api/v1/Token/connect"
DATA_DRIVEN = {
    "GET /api/v1/Report/GetPdf/{reportId}": "ReportController.cs:350",
    "GET /api/v1/Report/GetCsv/{reportId}": "ReportController.cs:354",
}


def norm(route_key):
    """Normalise a 'METHOD /path' key for comparison: lower case, constraints removed."""
    m, _, p = route_key.partition(" ")
    p = re.sub(r"\{[^}]*\}", "{}", p)
    return m.upper() + " " + p.lower().rstrip("/")


def load(p):
    return json.load(open(p))


def critic_routes():
    txt = (INV / "service-clients" / "CRITIC.md").read_text()
    body = txt.split("## Routes with extra callers found (40)", 1)[1].split("### Candidate", 1)[0]
    out = []
    for m in re.finditer(r"^\| (GET|POST|PUT|DELETE|PATCH) `([^`]+)`", body, re.M):
        out.append(m.group(1) + " " + m.group(2))
    return out


def main():
    old = load(INV / "other-clients" / "callers.json")
    svc = load(INV / "service-clients" / "service-callers.json")
    cons = load(FIX / "console-calls-v2.json")
    audience = {r["id"]: r for r in load(INV / "audience" / "audience.json")["routes"]}
    routes_json = {r["method"] + " " + r["route"]: r for r in load(INV / "routes.json")}

    # ---------------- baseline (old state)
    def has_nondemo_old(r):
        k = r["method"] + " " + r["route"]
        if r["callers"]:
            return True
        return any(c["category"] != DEMO for c in svc["routes"].get(k, {}).get("callers", []))

    def has_any_old(r):
        k = r["method"] + " " + r["route"]
        return bool(r["callers"]) or bool(svc["routes"].get(k, {}).get("callers"))

    before_nodemo = {r["method"] + " " + r["route"] for r in old["routes"] if has_nondemo_old(r)}
    before_any = {r["method"] + " " + r["route"] for r in old["routes"] if has_any_old(r)}
    old_console = {r["method"] + " " + r["route"]: [c for c in r["callers"] if c["category"] == "console"]
                   for r in old["routes"]}
    old_cat = Counter()
    for r in old["routes"]:
        k = r["method"] + " " + r["route"]
        cats = {c["category"] for c in r["callers"]} | {c["category"] for c in svc["routes"].get(k, {}).get("callers", [])}
        for c in cats:
            old_cat[c] += 1

    # ---------------- new console sites per route
    by_route = defaultdict(list)
    candidates = []
    for s in cons["sites"]:
        if s["isTest"]:
            continue
        keys = s.get("matchedRoutes") or ([s["matchedRoute"]] if s["matchedRoute"] else [])
        for k in keys:
            rj = routes_json[k]
            if k == CANDIDATE_ONLY:
                # gateway route: not shown to be reachable through the console host
                candidates.append({"route": k, "site": "%s:%d" % (s["file"], s["line"]),
                                   "why": "the console opens a WebSocket to this path (no HTTP helper call); routes.json "
                                          "places the route in the RAG gateway and it is not shown that the "
                                          "console host serves it. Not counted."})
                continue
            by_route[k].append(s)

    # ---------------- assemble routes
    routes_out = []
    for r in old["routes"]:
        k = r["method"] + " " + r["route"]
        nr = dict(r)
        callers = [c for c in r["callers"] if c["category"] != "console"]
        sites = by_route.get(k)
        if sites:
            tmpl = (old_console.get(k) or [{}])[0]
            best = max((CONF_RANK.get(s["matchConfidence"], 0) for s in sites))
            callers.append({
                "category": "console",
                "subtype": "web console (React)",
                "callKind": "observed call (static call site)",
                "confidence": {3: "high", 2: "medium", 1: "low"}.get(best, "low"),
                "tokenType": tmpl.get("tokenType", "user token (bearer from sign-in)"),
                "tokenClass": tmpl.get("tokenClass", "user"),
                "sites": sorted({"%s:%d" % (s["file"], s["line"]) for s in sites}),
                "scan": "console-extractor-v2",
                "shipsToCustomers": True,
            })
        for c in svc["routes"].get(k, {}).get("callers", []):
            e = dict(c)
            e["shipsToCustomers"] = bool(c.get("ships"))
            e["callKind"] = c.get("kind")
            e["scan"] = "service-callers"
            callers.append(e)
        if k in DATA_DRIVEN:
            callers.append({
                "category": "service",
                "subtype": "email service (attachment download)",
                "callKind": "data-driven",
                "kind": "data-driven",
                "confidence": "medium",
                "ships": True,
                "shipsToCustomers": True,
                "file": "SbPAM.NatsActors/NatsEmailActor.cs",
                "line": 59,
                "function": "DownloadSingleAttachmentAsync",
                "tokenClass": "app token",
                "note": "The route is stored in Email.AttachmentPath at %s and passed from EmailWorker.cs:117 to "
                        "NatsEmailActor.cs:59-95, which downloads it over HTTP with the app token. The path "
                        "comes from data, not from a literal." % DATA_DRIVEN[k],
                "chain": REPORT_FILES,
                "scan": "critic-follow-up",
            })
        nr["callers"] = callers
        cats = sorted({c["category"] for c in callers})
        nondemo = [c for c in callers if c["category"] != DEMO]
        nr["callerCategories"] = cats
        nr["hasAnyCaller"] = bool(callers)
        nr["hasNonDemoCaller"] = bool(nondemo)
        nr["demoCallerOnly"] = bool(callers) and not nondemo
        routes_out.append(nr)

    # audit of every dropped credit: look up what the new extractor found at the old site
    at = defaultdict(list)
    for s_ in cons["sites"]:
        at[(s_["file"], s_["line"])].append(s_)
    audit = {}
    for k in sorted(before_nodemo - {r["method"] + " " + r["route"] for r in routes_out
                                    if any(c["category"] != DEMO for c in r["callers"])}):
        oc = old_console.get(k) or []
        if not oc:
            audit[k] = {"class": "not-console", "sites": []}
            continue
        classes, seen = set(), []
        for st in oc[0].get("sites", []):
            f, _, ln = st.rpartition(":")
            f = f.replace("identity-privilegesecuream-web/", "")
            ns = at.get((f, int(ln)), [])
            if not ns:
                classes.add("no-literal-at-old-site")
            for n in ns:
                seen.append("%s %s" % (n["method"], n["path"]))
                if n["path"].lower().startswith("/api/v1/{}"):
                    classes.add("run-time-controller-name")
                else:
                    classes.add("different-literal-segment")
        audit[k] = {"class": "+".join(sorted(classes)), "oldSites": oc[0].get("sites", []),
                    "newSites": sorted(set(seen))[:4]}

    after_nodemo = {r["method"] + " " + r["route"] for r in routes_out if r["hasNonDemoCaller"]}
    after_any = {r["method"] + " " + r["route"] for r in routes_out if r["hasAnyCaller"]}
    newly = sorted(after_nodemo - before_nodemo)
    dropped = sorted(before_nodemo - after_nodemo)
    new_cat = Counter()
    for r in routes_out:
        for c in r["callerCategories"]:
            new_cat[c] += 1

    def split(keys):
        g = sum(1 for k in keys if routes_json[k]["method"] == "GET")
        return {"GET": g, "mutating": len(keys) - g}

    no_after = sorted(k for k in routes_json if k not in after_nodemo)
    no_any_after = sorted(k for k in routes_json if k not in after_any)

    # ---------------- critic check
    after_norm = {norm(k): k for k in after_nodemo}
    crit = critic_routes()
    credited, not_credited = [], []
    for c in crit:
        (credited if norm(c) in after_norm else not_credited).append(c)

    # specific defects
    id_appended = [
        "PUT /api/v1/AzureAdTenant/Update/{tenantId}", "DELETE /api/v1/AzureAdTenant/Delete/{tenantId}",
        "GET /api/v1/ManagedDatabase/Retrieve/{id}", "PUT /api/v1/ManagedDatabase/Update/{databaseId}",
        "DELETE /api/v1/ManagedDatabase/Delete/{databaseId}", "DELETE /api/v1/SecretVault/{id}",
        "DELETE /api/v1/Website/{id}"]
    verb_fix = [
        "GET /api/v1/CommandPlanRun/GetRunResultsByDataId/{id}", "PUT /api/v1/Email/settings/{id}",
        "POST /api/v1/DomainSync/schedule/domain/{domainName}",
        "POST /api/v1/AdConfiguration/domain/configuration/create/{domainName}"]
    chk = lambda lst: {k: norm(k) in {norm(x) for x in by_route} for k in lst}
    defects = {"idAppended": chk(id_appended), "verbCorrections": chk(verb_fix)}
    demo_flags = {}
    for k in ("POST /api/v1/AdConfiguration/domain/configuration/create/{domainName}",
              "POST /api/v1/DomainSync/schedule/domain/{domainName}"):
        rr = [r for r in routes_out if r["method"] + " " + r["route"] == k][0]
        demo_flags[k] = rr["demoCallerOnly"]
    defects["demoCallerOnlyNowFalse"] = demo_flags

    meta = {
        "generated": "2026-10-28",
        "task": "Caller inventory with corrected console extraction",
        "inputs": ["other-clients/callers.json (console entries dropped)",
                   "service-clients/service-callers.json", "console-fix/console-calls-v2.json",
                   "service-clients/CRITIC.md", "routes.json"],
        "rules": "Console callers come only from extract_console_calls.py sites that matched a route with "
                 "strict segment rules (a run-time {} segment matches only a {param} segment of the route). "
                 "Test and mock files are not callers. Every other category from callers.json is kept. "
                 "Service callers are added; demo-or-dev counts separately (hasNonDemoCaller excludes it, "
                 "hasAnyCaller includes it, demoCallerOnly is true when demo is the only kind).",
    }
    counts = {
        "routes": len(routes_out),
        "before": {"withDemo": len(before_any), "withoutDemo": len(before_nodemo),
                   "routesByCategory": dict(sorted(old_cat.items()))},
        "after": {"withDemo": len(after_any), "withoutDemo": len(after_nodemo),
                  "routesByCategory": dict(sorted(new_cat.items()))},
        "newlyCalledRoutes": len(newly),
        "droppedRoutesFormerlyCalled": len(dropped),
        "noCallerAfterWithoutDemo": dict(split(no_after), total=len(no_after)),
        "noCallerAfterWithDemo": dict(split(no_any_after), total=len(no_any_after)),
        "consoleRoutesBefore": sum(1 for v in old_console.values() if v),
        "consoleRoutesAfter": len(by_route),
        "demoOnlyAfter": sum(1 for r in routes_out if r["demoCallerOnly"]),
    }
    out = {
        "meta": meta,
        "counts": counts,
        "routes": routes_out,
        "candidates": candidates,
        "newlyCalledRoutes": newly,
        "droppedRoutes": dropped,
        "droppedAudit": audit,
        "criticCheck": {"total": len(crit), "credited": len(credited), "notCredited": not_credited,
                        "defects": defects},
        "unmatchedConsoleSites": "see console-unmatched.json",
    }
    json.dump(out, open(FIX / "callers-v2.json", "w"), indent=1)

    # ---------------- coverage-v2.md
    write_coverage(counts, newly, dropped, no_after, routes_json, audience, crit, credited,
                   not_credited, defects, candidates, routes_out, old_console, audit)
    print(json.dumps({k: counts[k] for k in ("before", "after", "newlyCalledRoutes",
                                             "droppedRoutesFormerlyCalled", "noCallerAfterWithoutDemo",
                                             "noCallerAfterWithDemo")}, indent=1))
    print("critic", len(credited), "/", len(crit), not_credited)
    print(json.dumps(defects, indent=1))


def write_coverage(counts, newly, dropped, no_after, routes_json, audience, crit, credited,
                   not_credited, defects, candidates, routes_out, old_console, audit):
    L = []
    b, a = counts["before"], counts["after"]
    L.append("# Caller coverage after the console fix (internal)\n")
    L.append("Generated from `callers-v2.json`. The console was re-extracted from the release ref with "
             "`tools/api-inventory/extract_console_calls.py`.\n")
    L.append("## Headline\n")
    L.append("| Measure | Before | After |\n|---|---|---|")
    L.append("| Routes with a caller (demo allowed) | %d | %d |" % (b["withDemo"], a["withDemo"]))
    L.append("| Routes with a caller (demo excluded) | %d | %d |" % (b["withoutDemo"], a["withoutDemo"]))
    L.append("| Routes with a console caller | %d | %d |" % (counts["consoleRoutesBefore"], counts["consoleRoutesAfter"]))
    L.append("| Routes only demo-or-dev scripts call | n/a | %d |" % counts["demoOnlyAfter"])
    L.append("")
    L.append("Newly called (no non-demo caller before, one now): **%d**. Formerly credited, no non-demo caller now: "
             "**%d**.\n" % (len(newly), len(dropped)))
    L.append("The old console credit was wrong in two ways. The extractor missed `~/` and joined paths, and the "
             "merge matched a run-time `{}` segment to any route (for example `/api/v1/${controller}` credited every "
             "GET route and `/api/v1/ActivitySession/${id}` credited `/Count` and `/ApprovalCheck`). The new "
             "matching lets a run-time segment match only a `{param}` segment, so the second kind of credit is gone.\n")
    L.append("## Routes by caller category (routes with at least one caller of that kind)\n")
    L.append("| Category | Before | After |\n|---|---|---|")
    for c in sorted(set(b["routesByCategory"]) | set(a["routesByCategory"])):
        L.append("| %s | %d | %d |" % (c, b["routesByCategory"].get(c, 0), a["routesByCategory"].get(c, 0)))
    L.append("")
    nc = counts["noCallerAfterWithoutDemo"]
    L.append("## Routes still without a non-demo caller\n")
    L.append("Total %d: %d GET, %d mutating. With demo counted as a caller: %d (%d GET, %d mutating).\n" % (
        nc["total"], nc["GET"], nc["mutating"], counts["noCallerAfterWithDemo"]["total"],
        counts["noCallerAfterWithDemo"]["GET"], counts["noCallerAfterWithDemo"]["mutating"]))
    L.append("## Critic routes (CRITIC.md)\n")
    L.append("%d of %d credited." % (len(credited), len(crit)))
    if not_credited:
        L.append("\nNot credited:\n")
        for k in not_credited:
            L.append("- " + k)
    L.append("")
    L.append("Merge defects: id-appended sites credited: %d of %d; verb corrections applied: %d of %d; "
             "demoCallerOnly now false for both routes: %s.\n" % (
                 sum(defects["idAppended"].values()), len(defects["idAppended"]),
                 sum(defects["verbCorrections"].values()), len(defects["verbCorrections"]),
                 all(v is False for v in defects["demoCallerOnlyNowFalse"].values())))
    L.append("Token routes: `GET /api/v1/Token/GetLoginMethods` and `POST /api/v1/Token` are RAG gateway routes "
             "that the console calls through the normal HTTP helpers (`ragService.service.ts`), so they keep their "
             "console credit. Only `GET /api/v1/Token/connect` is held back, because the console reaches it through "
             "a WebSocket and nothing shows the console host serves the gateway route.\n")
    if candidates:
        L.append("## Candidates (not counted)\n")
        for c in candidates:
            L.append("- %s at `%s`. %s" % (c["route"], c["site"], c["why"]))
        L.append("")
    if dropped:
        L.append("## Formerly credited, now without a non-demo caller\n")
        ac = Counter(v["class"] for v in audit.values())
        L.append("Each route was audited against the old console site that credited it (file and line): the new "
                 "extractor read that line and resolved it to a different path. Breakdown: %s.\n" % ", ".join(
                     "%d %s" % (n, c) for c, n in sorted(ac.items(), key=lambda kv: -kv[1])))
        L.append("- `run-time-controller-name`: `database.service.ts` builds `/api/v1/${controller}`; the old merge "
                 "let it match every route. The controller is one of two enum values, so it now credits only the "
                 "Postgres and SqlServer routes the code can reach.")
        L.append("- `different-literal-segment`: the old merge let a run-time `{}` match a literal route segment "
                 "(for example `ActionGroup/Action/{}` credited `ActionGroup/{id}/Action`, and `Credential/{}` "
                 "credited `Credential/GetCredentialTypes`). The segments differ, so the credit was not a call. "
                 "None of these is a call whose literal segment is held in a variable.\n")
        L.append("Grouped by controller:\n")
        g = defaultdict(list)
        for k in dropped:
            rt = routes_json[k]["route"]
            g[routes_json[k]["controller"]].append(k.split(" ", 1)[0] + " " + rt[len("/api/v1/"):])
        for ctl in sorted(g):
            L.append("- **%s** (%d): %s" % (ctl, len(g[ctl]), "; ".join("`%s`" % x for x in sorted(g[ctl]))))
        L.append("")
    L.append("## Remaining no-caller routes\n")
    L.append("Audience is the final verdict from `audience/audience.json` (public, public-with-caution or hidden). "
             "`demo` marks routes only demo-or-dev scripts call.\n")
    demo_only = {r["method"] + " " + r["route"] for r in routes_out if r["demoCallerOnly"]}
    g = defaultdict(list)
    for k in no_after:
        g[routes_json[k]["controller"]].append(k)
    for ctl in sorted(g):
        L.append("### %s (%d)\n" % (ctl, len(g[ctl])))
        L.append("| Route | Audience | Demo only |\n|---|---|---|")
        for k in g[ctl]:
            au = audience.get(k, {})
            L.append("| %s | %s | %s |" % ("`" + k + "`", au.get("decision", "?"), "yes" if k in demo_only else ""))
        L.append("")
    (FIX / "coverage-v2.md").write_text("\n".join(L) + "\n")


if __name__ == "__main__":
    sys.exit(main())
