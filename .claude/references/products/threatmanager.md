---
product: threatmanager
repo: netwrix-corp/itdr-threatmanager
local_clone: ~/itdr-threatmanager
last_reviewed: 2026-10-13
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

Threat Manager is an identity threat detection and response (ITDR) product. It watches Active Directory, Microsoft Entra ID, and file systems for abnormal behavior and attacks, shows detections as threats with evidence, and responds with playbooks (PowerShell-based actions). It takes event data from Netwrix Activity Monitor and Netwrix Threat Prevention, and sensitive-data tags from Netwrix Access Analyzer. It can also forward threats to a SIEM and send email alerts. It is a Windows installer product backed by PostgreSQL, not SaaS. A Report Only license mode limits the UI to investigations, object pages, service accounts, and a few settings.

Docs use "Netwrix Threat Manager" on first reference and "Threat Manager" after that. Never write StealthDEFEND. See `docs/threatmanager/CLAUDE.md`.

## Code layout

| Path | Role | User-visible behavior |
|---|---|---|
| `StealthDefendCore/` | .NET backend, 150+ projects, mostly Akka.NET actors | All server behavior |
| `StealthDefendCore/JobManager/AD/ThreatActorsV2/` | One class per threat detector (Azure ones in `Azure/`) | Each detector is a threat type in the UI and the docs threat catalog |
| `StealthDefendCore/Common/ThreatPropertyModel/` | Per-threat data model | The fields shown as evidence on the threat page |
| `StealthDefendCore/PostgresEFCore.Models/Enums/Constants.cs` | `ThreatIds` constants | The numeric ID that ties code, database row, and UI together |
| `StealthDefendCore/WebApi/`, `RestServer/` | REST API; `RestServer` hosts the web service | Everything the UI calls |
| `StealthDefendCore/EventMessageService/` | Event Service | Event intake from Activity Monitor and Threat Prevention |
| `StealthDefendCore/JobService/` | Job Service | Runs detection |
| `StealthDefendCore/ActiveDirectoryService/`, `AzureService/` | Directory sync | Active Directory and Entra ID sync settings |
| `StealthDefendCore/ActionService/`, `ActionManager/` | Playbook execution | Playbooks and response actions |
| `StealthDefendCore/SiemService/`, `EmailService/`, `IntegrationService/` | Outputs and integrations | SIEM, email, and third-party settings |
| `StealthDefendCore/LicenseService/` | Licensing | Licensing page, Report Only mode |
| `web/src/app/` | React and TypeScript UI (`pages/`, `components/defend/`, `services/`, `store/`) | Every screen and its text |
| `installerFiles/sql13/` | SQL patch files `vXX.XX.XX.sql` | Seed data for threats and settings; database upgrades |
| `STEALTHbits.Installer/` | WiX installer, prerequisite check | Install and upgrade, install paths |
| `tools/` | Test tools (attack simulator, test message sender) | None |
| `docs/` | Developer docs (`Guides/`, `Threat Manager Xchange/`) | None. Not customer docs |

Where text and settings live:
- **UI strings** are hardcoded in `web/src/app/` JSX and TSX. There is no resource file or translation layer.
- **Threat text** (display name, short title, description, color, icon, default settings, attack path) lives in the `job` table row, inserted by a SQL patch in `installerFiles/sql13/`. Evidence rows come from the `job_evidence` table. Both use Liquid templates.
- **Threat settings** are JSON in the `job.settings` column. Each has a type that picks the UI widget, plus an explanation string.
- **Service configuration** is `appsettings.json` per service and a shared `appsettings.common.json` under the data directory. Most customer-facing settings are set in the UI and stored in the database instead.

## Vocabulary

| Code says | UI and docs say |
|---|---|
| StealthDEFEND, SD, STEALTHbits | Netwrix Threat Manager (NTM in internal text only) |
| Job, `job` table, `ThreatIds` | A threat (a detector). Some jobs are system jobs, not threats |
| Threat processor, threat actor | The detector behind a threat |
| Action Group | Playbook |
| Honey token, policy | Honeytoken, under Policies |
| UBA / UEBA | User behavior analytics; abnormal behavior threats |
| NTP, NAM, NAA | Netwrix Threat Prevention, Activity Monitor, Access Analyzer |
| SbPAM | Netwrix Privilege Secure |
| RO | Report Only license mode |
| `SBTSDWEB`, `SBTSDEVENT`, `SBTSDJOB`, `SBTSDAction`, `SBTSDAD`, `SBTSDAZ`, `SBTSDSIEM`, `SBTSDINT`, `SBTSDEMAIL`, `SBTSDLICENSE` | The Netwrix Threat Manager services: Web, Event, Job, Action, Active Directory, Azure, SIEM, Integration, Email, License |

The repo's `GLOSSARY.md` is the fuller map.

## Where a change usually lands

- **New threat (detector):** the actor class under `ThreatActorsV2/`, a `ThreatIds` constant, a property model, an `INSERT INTO job` (and `job_evidence`) in a new SQL patch, DI registration, registration in `ThreatSubsystem`, and the ID in a list in `web/src/app/components/defend/configuration/JobsList.jsx` (`adList`, `azureList`, `fileList`, `generalList`, `hideList`). A job ID in none of those lists still runs but does not show in the configuration tree. The repo guide is `docs/Guides/creating-a-threat-processor.md`, and `.claude/skills/new-threat` scaffolds it.
- **New threat setting:** an entry in the `settings` JSON of the job row (SQL patch), read in the actor's `RefreshSettings`. The UI renders it from the setting type, so there is usually no front-end change.
- **New option or switch elsewhere:** a page under `web/src/app/pages/` or `components/defend/configuration/`, a `services/` call, and a controller under `WebApi/`. Check the configuration pages in the docs.
- **New report or investigation field:** event and entity models in the backend, plus the investigation and query-builder pages in `web/`. Export formats are CSV, JSON, PDF, and HTML.
- **Database changes:** the `StealthDefendContext` schema uses manual patches in `installerFiles/sql13/`, and the other EF contexts use migrations. Patch names are coordinated by hand, so a new `vX.Y.Z.sql` name is a good signal of the release.

## Docs map

Under `docs/threatmanager/<version>/`, versions 3.0 to 3.3, latest is 3.3. Edits to one version do not carry to the others. 3.3 uses the standard documentation zones; 3.0-3.2 keep the older layout, where configuration and troubleshooting sit under `administration/`, the threat catalog is `threats/`, and product integrations are in `install/integration/`.

3.3 layout:

| Area | Pages |
|---|---|
| Overview and first steps | `index.md`, `gettingstarted/gettingstarted.md` |
| Threat catalog | `gettingstarted/threattypes/` (`activedirectory.md`, `entraid.md`, `filesystem.md`, `certificateservices.md`, `general.md`, `custom.md`). One H2 per threat |
| Requirements | `requirements/` (server, database, client, action service, ports, permissions) |
| Install and upgrade | `install/` (application, database, action service, proxy, secure, appsettings, first launch, `upgrade/`) |
| Migration | `migration/upgrade_pg14_to_pg18.md` |
| Configuration | `configuration/` (`threatdetection/`, `threatresponse.md`, `policies/`, `systemsettings/`, `integrations/` for AD and Entra ID sync, app tokens, credential profiles, email, folder settings, tags, authentication providers) |
| Threats dashboard, service accounts, system health | `administration/threats/` (Active Directory objects, Entra ID objects, threat details), `administration/serviceaccounts.md`, `administration/home.md`, `administration/systemhealth/` |
| Investigations | `administration/investigations/` (new, predefined, favorites, reports, subscriptions and exports, options) |
| Playbooks | `administration/playbooks/` (trigger, steps, import, export, `action/` by target type) |
| Integrations | `integrations/` (SIEM, Netwrix integrations, `netwrix/` for Activity Monitor, Threat Prevention, Access Analyzer) |
| Troubleshooting | `troubleshooting/` |
| Knowledge Base | `kb/`, copied at build time from `docs/kb/threatmanager/` (six category folders) |

Page types: overview pages per section, task and reference pages (one per UI screen), a catalog of threats, KB articles. The sidebar `sidebars/threatmanager/3.3.js` is autogenerated from the folders, so a new page needs no sidebar edit. Images are in `static/images/threatmanager/<version>/`.

## Watch out for

- The repo, folders, installer, services, database name, and registry keys still say StealthDEFEND and STEALTHbits. Real install paths such as `C:\Program Files\STEALTHbits\StealthDEFEND\` and the default database name `stealthdefend` stay in install docs as literal values. Do not use the old name as a product name.
- The `docs/` folder in the code repo is developer documentation (`Threat Manager Xchange`), not the customer docs. Customer docs live here.
- Threat names in the UI come from `job.job_type` in the database, not from code. The actor class name often differs from the name in the docs catalog. Match by threat ID and SQL patch.
- `SingleEventThreatActor` is deprecated. New detectors use `BulkThreatActorV2`, so older detectors can look different.
- Threat IDs are coordinated by hand across the team, and the code guide says a duplicate breaks routing.
- Branches use a Jira key (for example `TMR-1234`), and PRs go to `master`. `CONTRIBUTING.md` links to a GitHub org (`netwrix-eng`) that differs from the repo name above.
- Not verified in the survey: the exact count of detectors (the repo says "30+", and `ThreatActorsV2/` has 38 entries including folders and helpers); license tiers beyond Report Only; whether every UI label matches the docs; how release versions map to SQL patch names or branches; the mapping from each threat ID to the docs catalog entry; and whether `local_clone` and the GitHub org name are right for other machines.
