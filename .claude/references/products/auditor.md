---
product: auditor
repo: netwrix-corp/dspm-auditor-netwrixauditor
local_clone: ~/dspm-auditor-netwrixauditor
last_reviewed: 2026-10-13
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

Netwrix Auditor audits changes and activity across an IT environment: Active Directory, Group Policy, Exchange, file servers, SharePoint, SQL Server, Oracle, Windows Server, VMware, network devices, Microsoft Entra ID, Exchange Online, SharePoint Online, Microsoft Teams, and more. Administrators set up monitoring plans for data sources, and the product collects who did what, when, and where into an audit archive and an SQL audit database. They then use search, SQL Server Reporting Services (SSRS) reports, alerts, dashboards, and a REST API. It runs on Windows with a Windows console. Editions are Enterprise Advanced and a limited Free Community Edition, plus a trial; the docs cover them in `overview/producteditions.md`.

Docs use the name "Netwrix Auditor", and report packs are named "Netwrix Auditor for <data source>" (for example, "Netwrix Auditor for Entra ID"). There is no `CLAUDE.md` under `docs/auditor/`, so this brief and `docs/CLAUDE.md` are the only naming guidance.

## Code layout

One repo holds the whole product (C++ and C# on .NET Framework 4.8, built with MSBuild and WiX). Three tiers: collector modules depend on AuditCore and DataCollectionCore, and all of them depend on `Libraries/`. Each top-level folder has its own `README.md`, `ARCHITECTURE.md`, `GLOSSARY.md`, and often `CLAUDE.md`; read the module's own files first.

| Path | Role | User-visible behavior |
|---|---|---|
| `AuditCore/` | Six Windows services (config server, archive, management, WebAPI, watchdog, routing hub), plus the native console UI | Monitoring plan storage, audit archive, alerts, risk, the REST API on port 9699, the console |
| `AuditCore/Sources/UI/` | Console pages (Dashboard, Settings, Alerts, Containers, and others) and layout XML in `Xml/` | Console screens and dialogs |
| `AuditCore/Sources/Configuration/` | `.acconf` and `.acinc` XML configuration, `EditionNames.acinc`, `GlobalSettings.ini` | Service wiring, edition names, logging |
| `DataCollectionCore/` | Agent management, scheduling, event collection, health, syslog, email sending | Collection schedules, emailed alerts and reports, health status |
| `ADA/` | Active Directory, Group Policy (GPCR), and Exchange (ECR) | Active Directory, Group Policy, and Exchange data sources |
| `FSA/`, `FileStorageAuditor/` | Windows file servers; extended storage (NetApp, Nutanix, Dell, DFS, clusters) | File servers data source |
| `SPA/` | SharePoint on-premises | SharePoint data source |
| `SQLA/`, `OracleAuditor/` | SQL Server and Oracle Database | SQL Server and Oracle data sources |
| `WSA/`, `ELM/`, `UAVR/` | Windows Server; Event Log Manager; user activity and video | Windows Server, Event Log, User Activity data sources |
| `Office365Auditing/`, `MSTeamsAuditor/`, `AzureEventsService/`, `AzureFilesAuditor/` | Cloud collectors (Exchange Online, SharePoint Online, OneDrive, Entra ID, Teams, Azure Files) | Microsoft 365, Entra ID, Teams, Azure Files data sources |
| `VMA/`, `NetworkDeviceAuditor/`, `NetworkLogonAuditor/`, `AdfsAuditor/` | VMware; network devices; logons; AD FS | Matching data sources |
| `NOMBA/` | On-premises Exchange mailboxes | Non-owner mailbox access auditing |
| `IUT/`, `PEN/` | Inactive Users Tracking; Password Expiration Notifier | The tools covered under `tools/` in the docs |
| `DDC/` | Data Discovery and Classification | Sensitive data discovery and its reports |
| `NAC/` | Report subscription delivery and cross-database reporting | Subscriptions, enterprise-wide reports |
| `Reporting/` | SSRS report definitions (`.rdl`) and SQL database scripts | Report packs, report names, report fields |
| `Setup/` | WiX installer (MSI) | Installation, upgrade, uninstall |
| `Libraries/`, `TPLibraries/`, `CommonFiles/`, `Build/` | Shared libraries, third-party submodule, build tooling and CI pipelines | None directly |

Where text and settings live:
- **Console strings:** C++ resource files (`.rc`) and layout XML under `AuditCore/Sources/UI/` (`Xml/`, one folder per page). Each page also has its own `*Page/` folder.
- **Collector and wizard strings:** `.resx` files inside each module (about 300 in the repo; ADA wizards, ELM, PEN, SQLA, FSA). Some collectors use `.rc` message tables instead (AD FS, VMware, ADA).
- **Settings:** stored in the Configuration Server as XML node trees, not in files. The console settings pages are `AuditCore/Sources/UI/SettingsPage/`. Service-level defaults are `.acconf` and `.acinc` files. Logging and data paths use per-component `GlobalSettings.ini` (see the repo `README.md`).
- **Edition names:** `AuditCore/Sources/Configuration/EditionNames.acinc`.
- **Report names and fields:** `.rdl` files under `Reporting/Source/Reports/<Netwrix Auditor for ...>/`, plus module-specific report projects such as `ADA/Source/ReportBuilder/`.

## Vocabulary

| Code says | UI and docs say |
|---|---|
| Managed Object (MO), `ManagedObjectsHolder` | Monitoring plan (and its items); the console pages are `ContainersPage` and `ContainerEditPage` |
| Activity Record (AR), "Change" | Activity record |
| State-in-Time (SIT) | State-in-Time reports and snapshots |
| Audit Archive, Long-Term Archive (LTA), Short-Term Archive (STA) | Long-term archive; working folder holds the short-term data |
| Collector module; Auditor in a folder name (`SPA`, `SQLA`) | Data source, for example SharePoint, SQL Server |
| ADCR, GPCR, ECR, FSCR | Active Directory, Group Policy, Exchange, and file server change reporting (old "Change Reporter" names) |
| Freeware, SMB, Standard, Advanced, Trial (internal edition names) | Free Community, Business Essentials, Enterprise Essentials, Enterprise Advanced, Free Trial |
| Azure AD (some code and folder names) | Microsoft Entra ID |
| `adcr_db`, and per-collector databases | Audit database (the name is historical, not AD-specific) |
| NwCoreSvc, NwCfgServerSvc, NwArchiveSvc, NwManagementSvc, NwWebAPISvc, NwWatchdogSvc | Netwrix Auditor services (named in troubleshooting and KB pages) |
| `IACNode`, `.acconf`, `.acinc` | Internal; not user-facing |
| NLA | Network Logon Auditor; docs call it logon activity |
| DDC | Data Discovery and Classification |
| IUT, PEN | Inactive User Tracker, Password Expiration Notifier |

The repo's `GLOSSARY.md` (and each module's own) is the authoritative map.

## Where a change usually lands

- **New setting:** the console page under `AuditCore/Sources/UI/<Page>/` with its `Xml/` layout, the Configuration Server schema and `.acconf`/`.acinc` defaults under `AuditCore/Sources/Configuration/`, and the consuming collector or service. Monitoring plan and data source options sit in the owning module's configuration code and its wizard pages (for example `ADA/Source/code/ConfigureAuditWizard/Pages`). Check `admin/settings/` and `admin/monitoringplans/` in the docs.
- **New option or switch:** the same places, and the commit usually names the module. Feature work uses Jira keys (`AUD-nnnn`) in commit messages and in code comments.
- **New report field:** the collector that produces the activity record (`Where`, `What`, `Before`, `After`, `Details`), the module's database schema scripts, and the `.rdl` under `Reporting/Source/Reports/` that shows it. The `Reporting/` module owns the schema version scripts.
- **New check or monitored event:** inside the module for that data source. There is no central rule registry as in some other products.
- **New data source or collector:** a new top-level folder, with its `Setup/`, its `Build/*_BuildInfo.csv` entry, `Build/Auditor_BuildInfo.csv`, a report pack in `Reporting/`, and docs under `configuration/`, `admin/monitoringplans/`, and `requirements/supporteddatasources/`.

## Docs map

Under `docs/auditor/<version>/`, latest is 10.9 (10.8 and 10.7 also exist). The sidebar is autogenerated from the folders (`sidebars/auditor/10.9.js`), so folder order and `_category_.json` control navigation.

| Area | Pages |
|---|---|
| Overview | `overview/` (getting started, product editions, what's new), `whats-new.md`, `index.md` |
| Requirements | `requirements/` (software, SQL Server, SSRS, ports, service account, gMSA, working folder, long-term archive, `supporteddatasources/`) |
| Install and update | `install/` (install, upgrade, silent mode, uninstall, virtual appliance, first launch, core services) |
| Configure data sources | `configuration/<datasource>/`: prepares the monitored system (audit policies, permissions) for each source. About 150 pages, one folder per source (`activedirectory`, `fileservers`, `sqlserver`, `microsoft365`, and others) |
| Administration | `admin/`: `monitoringplans/<datasource>/` (the plan wizard, per source), `settings/`, `reports/`, `search/`, `alertsettings/`, `subscriptions/`, `riskassessment/`, `behavioranomalies/`, `healthstatus/`, `navigation/`, `compliancemappings.md` |
| API | `api/` (overview, endpoints, ports, security, activity record reference, filter reference, post data) |
| Tools | `tools/` (Event Log Manager, Inactive User Tracker, Password Expiration Notifier, Audit Configuration Assistant, object restore) |
| Add-ons and integrations | `addon/` (SIEM and vendor integrations; about 135 pages) |
| Other products in the folder | `accessreviews/`, `accountlockoutexaminer/` |
| Knowledge Base | `kb/` with topic folders (configuration, monitoring plans, reports and alerts, troubleshooting, event ID reference) |

Page types: overview pages (`overview.md` per folder), requirements, task procedures, per-data-source pairs (a `configuration/` page to prepare the system and an `admin/monitoringplans/` page to create the plan), reference pages (activity record fields, filters), integration pages, and KB articles. The versioned `kb/` is copied from `docs/kb/` at build time.

## Watch out for

- The repo is large and mixed: many modules have their own `CLAUDE.md`, `GLOSSARY.md`, and `ARCHITECTURE.md`. Read the module's files before reading code. `CONTRIBUTING.md` requires comments on every code change and `AUD-nnnn` keys in bug fixes, so `git log` and code comments are good sources for what a PR changed.
- Branches are `story/<id>`, `fix/[develop|10.9/]<bug_id>`, or `epic/*`, cut from `develop` or a `release/*` branch. Release branches map to docs versions, so a fix ported to a release branch (a `fix/10.9/...` branch) usually means each affected docs version needs the same edit.
- Naming drift: code and folder names use old names (ADCR, FSCR, `adcr_db`, Azure AD, `Auditor` suffixes) that differ from the docs. The edition names in `EditionNames.acinc` are the display names, and the internal names (Freeware, SMB, Standard, Advanced) are not.
- `README.md` says 20 collector modules and `CLAUDE.md` says about 25; the folder count differs from both. Treat the counts as unreliable. `ARCHITECTURE.md` lists the 20 collectors.
- Two folders cover file storage (`FSA/` and `FileStorageAuditor/`); a file-server PR can land in either, and the vendor-specific work (NetApp, Nutanix, Dell, Isilon, Qumulo, Synology) is in `FileStorageAuditor/`. Check which one a PR touched before choosing the docs page.
- Docs `accessreviews/` and `accountlockoutexaminer/` live in the Auditor folder but are not in the code repo layout above; confirm the owning repo before documenting them from this one.
- `GlobalSettings.ini` files in the repo are in development state (verbose logging); the shipped values differ. Don't document the in-repo defaults.
- Settings live in the Configuration Server as node paths, so a string search for a setting name in the console code may find nothing. Search the `.acconf`/`.acinc` files and the module's configuration code.
- Not verified in the survey: the exact UI label for each setting (the console XML and `.rc` files were located but not matched string by string to docs pages); which module owns Exchange Online versus Microsoft Entra ID collection in `Office365Auditing/`; the full product edition and license matrix; how `Libraries/` and `Setup/` map to docs pages; whether `addon/` integrations are built in this repo or maintained elsewhere; what `accessreviews/` and `accountlockoutexaminer/` map to in code; the CLI or API changes that appear in `whats-new.md` before they ship.
