---
product: dataclassification
repo: netwrix-corp/dspm-ndc-dataclassification
local_clone: ~/dspm-ndc-dataclassification
last_reviewed: 2026-10-13
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

Netwrix Data Classification (NDC) is an on-premises Windows product for security and compliance teams. It crawls data sources (file shares, SharePoint, Exchange, Box, Dropbox, Google Drive, SQL databases, and others), extracts and indexes document text, and classifies documents against built-in and user-defined taxonomies. Optional workflows act on classified documents, and classifications can be written back into Office and PDF files. A web app (QueryServer) provides administration, search, reports, and a REST API. The repo targets .NET Framework 4.7.2 and runs on IIS, three Windows services, and SQL Server. The repo also carries a licensing portal, an SDK, and a SharePoint provider-hosted app. Editions and tiers: not stated in the repo.

Docs use the name "Netwrix Data Classification" (about 200 times in 5.8, against about 185 for "NDC"). Product-specific rules are in `docs/dataclassification/CLAUDE.md`.

## Code layout

The 90-odd top-level folders are flat and use the legacy `concept*` prefix. The names below are the ones that matter for docs.

| Path | Role | User-visible behavior |
|---|---|---|
| `conceptQS/` | QueryServer, ASP.NET MVC under IIS, organized into `Areas/` | Every admin screen: Sources, Taxonomies, Workflows, Reports, Configuration, DSAR, Stats, Search, Security |
| `conceptQS/Areas/_api/` | REST API controllers | The REST API |
| `conceptCollectorService/`, `conceptCollector/` | Collector Windows service and core | Crawls sources, extracts text |
| `conceptIndexerService/`, `conceptIndexer/`, `conceptEngine2/` | Indexer service, and the custom `.cse` index | Search index; see `INDEX.md` in the repo |
| `conceptClassifierService/`, `conceptClassifierEngine/` | Classifier service and rules engine | Classification, scoring, classification writing |
| `conceptClassifierEngine/Rules/`, `Assets/BuiltInTaxonomies.xml` | Clue (rule) types and the shipped taxonomies | Clue types in the taxonomy editor; built-in taxonomies |
| `conceptWorkflow/Actions/Providers/` | Workflow action providers (classification, email, file system, SharePoint, Exchange, SQL, MIP, migration) | Workflow actions |
| `conceptFileSystem`, `conceptSharePoint`, `conceptExchange`, `conceptBox`, `conceptDropbox`, `conceptGoogleDrive`, `conceptSQL`, `conceptSQLServer`, `conceptCmis`, `conceptContentServer`, `conceptOutlookArchive`, `conceptHttp`, `conceptCustomSource*` | Source connectors | Source types in Add Source |
| `conceptReports/`, `conceptReportObjects/` | Report definitions and report data models | Built-in reports and queued reports |
| `conceptCore/`, `conceptData/`, `conceptData.Database/` | Shared enums and config, data access, schema and migrations | Settings storage |
| `conceptEngine.Admin/` | Admin context and the `RKey` enum of UI string keys | Admin screen text |
| `conceptConfig/`, `conceptInstaller/`, `conceptSearch.Presentation.Installer/` | Config utility, installer | Install and post-install setup |
| `Netwrix.UK.*` | Classification REST API service and SDKs | Separate API and SDK surface |
| `conceptUnitTests/` | The only maintained test project | None |

Where text and settings live:
- **UI strings:** `conceptQS/Language-Resources/Resource.resx` (and `Resource.fr-FR.resx`), keyed by name such as `QS_Config_Settings_Collector_UserAgent_Info`. Each key is also an entry in the `RKey` enum in `conceptEngine.Admin/Enums/RKey.cs`. Many field labels are literal text in the `.cshtml` views and not in resx, as in `Areas/Configuration/Views/Core/_Collector.cshtml`.
- **System settings:** columns on the single-row `Config` table (entity `ConfigValues`), edited under `Areas/Configuration/` (`Core` has Collector, Indexer, Classifier, QueryServer, Logging, Audit Log, and Details tabs). Report settings and per-user settings live in the same table or the `Users` table.
- **Per-page navigation:** `PageKey`, `SectionKey`, and `AreaKey` in `conceptCore/Enums/Qs/`.
- **Connection settings:** Windows registry (`Netwrix > Data Classification > DatabaseConnection`), per `ARCHITECTURE.md`.

## Vocabulary

| Code says | UI and docs say |
|---|---|
| `concept*`, "Concept" | Legacy product name; never use in docs |
| QS, QueryServer, `conceptQS` | The NDC web console (the repo calls it the administration interface) |
| Class, Term (`TermSettingsController`) | A class in a taxonomy; the glossary says the two are the same thing |
| Clue (`ClassClue`, `Rules/*Rule.cs`) | A match condition on a class; types include regex, phrase, metadata, date range, and term boost |
| Page | A processed item at a source; a Document is a Page that is a file |
| Source, Source Group, Dynamic Source | Same. A Dynamic Source discovers sub-sources, such as a mailbox per Exchange user |
| Classification writing, `ClassificationWriteConfig` | Writing classifications into file metadata (Office and PDF) |
| Expunge | Remove all records for a deleted document, from the Stats screen |
| DQS | Distributed Query Server: several NDC servers sharing one database |
| Re-index period | How often a source is reprocessed; default 7 days |
| MIP | Microsoft Information Protection sensitivity labels |

The repo's `GLOSSARY.md` is the authoritative map.

## Where a change usually lands

- **New system setting:** a column on `Config` through `conceptDataGenerator/EntityDefinitions/IConfigValuesDefinition.cs` plus a regenerated entity (`conceptData/_Generated/`, do not hand-edit), a migration under `conceptData.Database/Schema/Migrations/<version>/` (named `M<number><Description>`, which seeds the default; example: `M543ConfigReportQueueThreshold`), then the controller, model, and view under `conceptQS/Areas/Configuration/`, and a string in `Resource.resx` plus `RKey.cs` if it has help text. The migration folder is the quickest way to find which release added a setting.
- **New source option:** `conceptQS/Areas/Sources/` (models, controllers, views) and the connector project's config class (for example `conceptFileSystem/FileServerConfig.cs`).
- **New report or report field:** a class in `conceptReports/Reports/`, columns in `conceptReportObjects/Columns/`, and the Reports area views.
- **New clue type or taxonomy behavior:** `conceptClassifierEngine/Rules/`, plus the Taxonomies area. Shipped taxonomies are in `Assets/BuiltInTaxonomies.xml`.
- **New workflow action:** a provider in `conceptWorkflow/Actions/Providers/`, plus the Workflows area.
- **New API endpoint:** `conceptQS/Areas/_api/Controllers/`, with tests in `conceptUnitTests`.

## Docs map

Under `docs/dataclassification/<version>/`; the latest is 5.8, with 5.7 and 5.6.2 alongside. Sidebars are auto-generated from the folder structure (`sidebars/dataclassification/*.js`), so a new page appears without a sidebar edit.

| Area | Pages |
|---|---|
| Overview | `index.md` (features and benefits), `dashboards.md` |
| Install and deploy | `introduction/requirements/`, `install/`, `deployment/`, `virtualappliance/`, `upgrade.md`, `supportedsources.md` |
| Source setup (prerequisites per source) | `introduction/introduction/` (Box, Dropbox, Google Drive, Exchange, NFS, SharePoint modern auth) |
| First-run setup | `introduction/initialconfiguration/` |
| Sources | `contentconfigurationoverview/introduction/` (`addsource/`, `manage/`, `sourcegroups/`) |
| Taxonomies and clues | `contentconfigurationoverview/taxonomies/` (`settings/`, `languages/`, import, built-in, write classifications) |
| Workflows | `contentconfigurationoverview/workflows/` (overview, run log; actions as a subfolder) |
| System settings | `systemconfigurationoverview/configuration/` (`coreconfiguration/` has collector, indexer, system, administration, details; also metadata, text handling, redaction, communication) |
| Users and security | `systemconfigurationoverview/users/`, `licensing.md` |
| Administration | `systemconfigurationoverview/administration/` (backup, index maintenance steps) |
| Reports and DSAR | `dataanalysisoverview/reportingintroduction/`, `dataanalysisoverview/dsar/` |
| Knowledge Base | `docs/kb/dataclassification/` |

Page types are mostly concept and reference pages with a few procedures. There are no per-setting or per-report pages: the Core tabs and each report are sections inside the pages above.

## Watch out for

- The repo's `CLAUDE.md` says to start every GitHub comment with a "Comment authored by Claude Code" header. That applies to comments in the product repo, not to docs PRs.
- PowerShell scripts in the repo must be ASCII-only.
- The `concept*` names are legacy and many are not used by customers. The `concept*Form` projects are debug harnesses, and `conceptUITests`, `conceptQS.UXTests`, `conceptIntegrationTests`, and `NDC_AT` are unused or not on `master` per `TESTING.md`. `conceptExchange.Legacy`, `conceptSearch.Presentation.Win`, `conceptTermStoreManager`, and `Documentum` interop are old components.
- `Oracle` and `Postgres` exist in the `DatabaseType` enum and schema installers, and `docs/postgres-*.md` describe a Postgres migration. The installer allows PostgreSQL as an NDC database from PR #1457 (5.8; its tab is **Postgres**, and the button is **Create SQL Database**), and docs 5.8 already document PostgreSQL 16 or later as supported. The repo's own `CLAUDE.md` may still say the installer allows only SQL Server. `postgresqlserver.md` is a different thing: a PostgreSQL source to scan. Do not document Oracle as a supported NDC database without confirming.
- Versions come from release branches (`release/5.7.10`) and from the numbered migration folders. Customer docs for a release live in a `release` branch named `NDC/<version>` created from `dev` in the docs repo (per `CONTRIBUTING.md`).
- Bugs live in Azure DevOps (`Data Classification\Backlog`) and PR titles carry a Jira key such as `NDC-76:`. Enhancement requests go to the NDC Ideas page on the Netwrix Community.
- Folder names under 5.8 do not match the sidebar or UI labels (`contentconfigurationoverview`, `dataanalysisoverview`), so search by topic and not by path.
- `ARCHITECTURE.md` lists `Plugins/`, `Netwrix.UK.MailSender/`, and `NDC_AT/`, which are not in the checked-out tree.
- Not verified in the survey: editions and licensing tiers; which workflow actions and connectors are shipped to customers (the code has more than the docs describe); how the REST API maps to documented endpoints (no API pages found under 5.8); the customer story for `Netwrix.UK.Classification.Api` and the SDKs; whether the `ClassifierApp` area and SharePoint app are still supported; which UI labels live in views versus `Resource.resx`; and whether the 5.8 `overview/` folder holds only a category file.
