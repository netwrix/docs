---
product: pingcastleenterprise
repo: netwrix-corp/itdr-pingcastle-core
local_clone: ~/src/itdr-pingcastle-core
last_reviewed: 2026-09-30
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

PingCastle assesses the security of Active Directory and Entra ID. It scores the risk of a domain and produces self-contained HTML and XML reports. It ships as tiers: Standard and Basic (a command-line tool), Pro, and Enterprise (a web app with a database, sign-in options, a REST API, scheduling, and agents). 1Secure is a separate SaaS integration built on the same code. The repo targets .NET 10.

The docs split the tiers into three products that share this repo: `pingcastleenterprise`, `pingcastlepro`, and `pingcastlecommunity` (Standard and Basic). This brief holds the shared code layout and vocabulary; `pingcastlepro.md` and `pingcastlecommunity.md` cover the docs map for their products. Docs use these exact names: PingCastle Enterprise, Pro, Community, Standard, Basic, and PingCastle for Service Providers. See `docs/pingcastleenterprise/CLAUDE.md`.

## Code layout

Paths are under `Source/` in the repo.

| Path | Role | User-visible behavior |
|---|---|---|
| `PingCastle/` | Console app | CLI switches (`Program.cs`, a large `switch` on `--healthcheck`, `--scanner`, `--server`, `--license`, `--out`), help text, scanners, exports |
| `PingCastle/Scanners/` | 16 scanners (ZeroLogon, Spooler, NullSession, LAPSBitLocker, localAdmins, others) | `--scanner <name>` |
| `PingCastle/Healthcheck/HealthcheckAnalyzer.cs` | Collects Active Directory data | What the assessment can see |
| `PingCastleCommon/Healthcheck/Rules/` | About 190 domain rule classes, named `Heatlcheck*` (the typo is real) | Each rule is one finding in the report |
| `PingCastleCommon/Cloud/Rules/` | Entra ID rules | Findings in the Entra ID report |
| `PingCastleCommon/Rules/` | Rule infrastructure and attributes | Scoring, maturity level, MITRE ATT&CK and ANSSI mappings |
| `PingCastleCommon/Report/`, `Template/` | Report classes and HTML/CSS/JS templates | Report layout and content |
| `PingCastleCommon/PingCastleLicense/` | Licensing | Edition checks, license validation |
| `PingCastleEnterprise/` | ASP.NET Core MVC app | Web UI (Razor views), settings, action plans, scan profiles, scheduling, API |
| `PingCastlePro/` | Web app, same shape as Enterprise | Purpose not stated in the repo docs; check with the team |
| `PingCastleSchedulerService/` | Windows service | Scheduled scans |
| `PingCastleEnterprise.1Secure.Coordinator*` | Azure Functions | 1Secure integration (`1SecureMode` setting) |
| `PingCastle.Cloud.*` | Separate API (Clean Architecture) | Docs in the repo under `Docs/PingCastle.Cloud/` |

Where text and settings live:
- **Rule text** (title, description, solution, rationale, technical explanation): `RuleDescription.resx`, one under `Healthcheck/Rules/` and one under `Cloud/Rules/`. Keys look like `A_AuditDC_Title`.
- **Other UI strings:** `PingCastleCommon/Properties/Resources.resx`; Enterprise Razor views under `PingCastleEnterprise/Views/`.
- **Enterprise settings:** `appsettings.json` and `Options/` classes; the settings UI is `SettingsController` with `Views/Settings`. Environment variables are listed in the repo `README.md`.
- **Console settings:** `PingCastle/appsettings.console.json`.

## Vocabulary

| Code says | UI and docs say |
|---|---|
| Healthcheck / `HealthcheckData` | The main Active Directory risk assessment and its report |
| Rule, `[RuleModel("A-AuditDC", ...)]` | A finding; the ID is its rule ID |
| AAD, Azure AD, `--entraid` | Entra ID |
| Consolidation, `--hc-conso` | Combining several domains into one report |
| Cartography | Trust and network map |
| Action Plan | Remediation list (Critical, High, Medium, Low) |
| Agent, `AgentAuthorisation` | Scanning agent that syncs to Enterprise |
| Coordinator | 1Secure integration layer |
| `AnomalyScore`, `PrivilegedGroupScore`, `StaleObjectsScore`, `TrustScore`, `GlobalScore` | Category scores and the overall score |

The repo's `GLOSSARY.md` is the authoritative map.

## Where a change usually lands

- **New rule:** the rule class under `Healthcheck/Rules/`, found by reflection so there is no registry; its entries in `RuleDescription.resx`; `HealthcheckData.cs` and `HealthcheckAnalyzer.cs` only if it needs new data; tests in `PingCastleTests/` and `PingCastleEnterpriseTests/HealthCheckRuleTests.cs`. The repo skill `.claude/skills/add-pingcastle-risk/SKILL.md` walks through it. `[RuleIntroducedIn(major, minor)]` on the class gives the version that added the rule, which is the fastest way to find the docs version.
- **New CLI option:** a `case "--x":` in `PingCastle/Program.cs`, plus the help text there. New scanners go in `PingCastle/Scanners/`.
- **New Enterprise setting:** an options class under `PingCastleEnterprise/Options/`, `appsettings.json`, and the settings view. Check the pages under `docs/pingcastleenterprise/4.0/configuration/settings/`.

## Docs map

Under `docs/pingcastleenterprise/<version>/`, latest is 4.0. The 4.0 tree follows the section guide zones; 3.5 is flat (`install.md`, `upgrade.md`, `user.md`).

| Area | Folder (4.0) |
|---|---|
| About, architecture | `getting-started/` |
| Requirements | `requirements/` |
| Install, HTTPS, license | `install/` |
| Upgrade from 3.5, scheduling migration | `migration/` |
| First run, first scan, decryption keys, synchronization, agent deployment, settings (including authentication and email) | `configuration/` |
| SCIM | `integrations/` |
| Dashboard, infrastructure, entities, import, account, audit log | `admin/` |
| Troubleshooting | `troubleshooting/` |
| Knowledge Base | `docs/kb/pingcastleenterprise/` (copied into the versions at build time) |

## Watch out for

- The repo's own style is British English with no dashes; the docs follow the Netwrix style guide instead.
- `RELEASE_NOTES.md` in the repo is not a full history. Version numbers come from CI at build time (`Directory.Build.props` holds a `0.0.0.0` placeholder), so read `[RuleIntroducedIn]` and the release branch names (`release/*`) for versions.
- Branches are named `<team>/<initials>/<work-item-id>-<desc>`, and PRs go to `master`. Commits reference Azure DevOps items as `AB#<id>` or `PIC-nnn`.
- Worth reading in the repo: `README.md`, `ARCHITECTURE.md`, `GLOSSARY.md`, and `Docs/PingCastle/`.
- Not verified in the survey: the full list of license editions, the purpose of Pro, how scanner discovery works (`PingCastleFactory`), and other connectors such as SIEM or ticketing.
- Docs have no per-rule pages. Rules are covered in the healthcheck and user guide pages, so a PR that adds rules usually needs a new page or a section in an existing one, not an edit to a rule page.
- `sidebars/pingcastleenterprise/4.0.js` is autogenerated from the folders (`_category_.json` and `sidebar_position` set the order), so a new page appears once it is in the right zone folder.
- Pro and Community docs live in their own products (`docs/pingcastlepro/`, `docs/pingcastlecommunity/`); a PR that touches shared behavior may need pages in more than one.
