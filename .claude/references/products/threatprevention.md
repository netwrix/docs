---
product: threatprevention
repo: netwrix-corp/itdr-threatprevention
local_clone: ~/itdr-threatprevention
last_reviewed: 2026-10-13
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

Netwrix Threat Prevention monitors, alerts on, and can block activity in Active Directory, Exchange, Group Policy, file systems, and credential operations, in real time on domain controllers and Exchange servers. It hooks security-critical functions inside LSASS and Exchange processes instead of reading Windows event logs. Administrators work in a WinForms console or PowerShell cmdlets. The repo targets .NET Framework 4.7.2 for managed code and C++23 (MSVC v143) for the native hooks. It is on-premises software, with no SaaS tier in the repo. The repo's `README.md` doesn't list editions; the license manager (`SIMonitor.Licensing/`) is the place to look.

The repo and its code call the product StealthINTERCEPT ("SI"). Docs use "Netwrix Threat Prevention" or "Threat Prevention". The docs have no product-level `CLAUDE.md`, so there is no written naming rule. Follow the 8.1 pages, which use "Enterprise Manager" and "Administration Console". Netwrix Threat Manager is a separate product that Threat Prevention integrates with.

## Code layout

Paths are under `Src/` in the repo. Each subsystem has its own `CLAUDE.md`.

| Path | Role | User-visible behavior |
|---|---|---|
| `NetVision/SIMonitor.Service.Host/`, `SIMonitor.Core/` | Enterprise Manager (EM, `SIEnterpriseManager.exe`) | Policies, event consumers, analytics, SQL storage, gRPC server, `filters.json` |
| `NetVision/SIMonitor.Ui.WinConsole/` | WinForms console (`SIWinConsole.exe`) | Every screen, dialog, and wizard an administrator sees |
| `NetVision/SIMonitor.PowerShell/` | PowerShell module | Cmdlets such as `Connect-SIEnterpriseManager` and `Get-SIPolicy` |
| `NetVision/SIMonitorAd.Service.Host/`, `SIMonitorAd.Core/` | Windows Agent (`SIWindowsAgent.exe`), one per domain controller | Event filtering, policy sync, shared-memory settings in `SIWindowsAgent.exe.config` |
| `ActiveDirectoryMonitor/PSA/` | Native hook DLL injected into LSASS | What can be captured or blocked in AD, Kerberos, NTLM, LDAP |
| `NetVision/ExchangeMonitor/` | Native hooks for Exchange | Exchange monitoring and lockdown |
| `GPO Change Detection/` | Windows service | GPO setting change and lockdown events |
| `CredentialProvider/` | Windows logon credential provider | Password policy enforcement at workstation logon |
| `EPE_REST/` | ASP.NET Web API | Enterprise Password Evaluation REST site |
| `NetVision/SIMonitor.Core/Analytics/` | Threat analytics recognizers | Built-in analytics policies (brute force, Golden Ticket, others) |
| `NetVision/SIMonitor.Pwned/` | Breached-password check | Breached Password analytic and EPE |
| `NetVision/SIConfigurator/`, `SICertMgr/` | Setup and certificate tools | Certificate management wizard, configuration tool |
| `../Install/` | WiX installers | Server MSI, Agent EXE, Credential Provider and EPE REST MSIs |

Where text and settings live:
- **Event type names and descriptions:** `Common.Resources/Source/SharedStrings.cs` (keys like `StrADReplicationLockdown`), read through `ResXManager`. `Common.NNR/SIMonitor.Messages.Source/Collections/EventDefinitionCollection.cs` ties each event type to its name, description, `erTypeId` code, and available filters.
- **Other console strings:** mostly hardcoded in the WinConsole `Forms/` and `Controls*/` code, plus a few `.resx` files (`MainForm.resx`, `Policy.resx`, `SIMonitor.ConsoleMessages/Resource.resx`). Check both.
- **Component settings:** `appconfig.xml` and `appconfig.release.xml` in each host project become `<Exe>.exe.config` at build. They are read once at start, so a change needs a restart.
- **System-wide noise filters:** `SIMonitor.Service.Host/filters.json`.
- **Cmdlet names:** `SIMonitor.PowerShell/PSHelpers.cs` (`PSDefs`).

## Vocabulary

| Code says | UI and docs say |
|---|---|
| StealthINTERCEPT, SI, `SIMonitor.*` | Netwrix Threat Prevention |
| EM, `SIEnterpriseManager` | Enterprise Manager |
| WC, WinConsole, `SIWinConsole` | Administration Console (the docs also use "Windows Console" once) |
| WA, `SIWindowsAgent` | Agent (Windows agent) |
| AD Monitor, `SI.ActiveDirectoryMonitor.dll`, `PSA/` | The LSASS hook; `PSA` is a historical name |
| `EventRegistration`, `erTypeId` | Event type within a policy (for example Active Directory Changes) |
| `EventConsumer` | Action (email, file, PowerShell, .NET script, syslog) |
| Collection | Collection (Collection Manager) |
| Lockdown | Blocking, as in "Active Directory Lockdown" |
| Recognizer, `AbstractScenarioRecognizer` | Analytics policy |
| EPE | Enterprise Password Evaluation |
| `PB_Filters`, `filters.json` | System-wide event filtering |

The repo's `GLOSSARY.md` covers the acronyms. It maps SI to NTP, the marketing name.

## Where a change usually lands

- **New event type or event class:** an entry in `EventDefinitionCollection.cs` and an `ErTypeIdTags.cs` constant; names and descriptions in `SharedStrings.cs`; agent handling in `SIMonitorAd.Core/ActiveDirectory/AdMonitorModule.cs`; a native hook in `ActiveDirectoryMonitor/PSA/` or `ExchangeMonitor/` if new data is needed; console UI under `SIMonitor.Ui.WinConsole/`. Check `Forms/FormEventSelection.Designer.cs`.
- **New filter:** a filter config class in `Common.NNR/SIMonitor.Messages.Source/Source/`. `ARCHITECTURE.md` explains the three filter mechanisms. Only filters that implement `ILockdownAspectGenerator` are enforced at capture time and show in Rules Preview; others are agent-only. A filter control goes in `SIMonitor.Ui.WinConsole/Controls-Filters-*`.
- **New setting:** the `appconfig.xml` and `appconfig.release.xml` of the host project, read in code through `ConfigurationManager.AppSettings`; the console surface goes in `SIMonitor.Ui.WinConsole`. Global options use classes in `SIMonitor.ConsoleMessages/` (such as `GlobalFiltersSettings.cs` and `PwnedConfig.cs`).
- **New analytic:** a `*Recognizer.cs` plus storage classes in `SIMonitor.Core/Analytics/`, settings in `SIMonitor.ConsoleMessages/AnalyticsSettings.cs`, and unit tests in `SIMonitor.Core.UnitTest/`.
- **New cmdlet:** a class in `SIMonitor.PowerShell/` with `[Cmdlet(...)]`, its name in `PSDefs`, and help under `Help/`.
- **Report field or event column:** the event schema and SQL tables (`NvEvent`) in `SIMonitor.Data/` and `SIMonitor.Core/`, the gRPC contracts in `Grpc.Messages.*`, and console grid and filter code.

## Docs map

Under `docs/threatprevention/<version>/`; versions are 7.4, 7.5, 8.0, and 8.1 (latest). `sidebars/threatprevention/*.js` is autogenerated from the folders, so new pages appear by placement and `sidebar_position`.

| Area | Where |
|---|---|
| Overview, first steps | `index.md`, `gettingstarted.md` |
| Requirements | `requirements/` (application, Administration Console, agent, SQL Server, EPE REST site, reporting server, `ports.md`) |
| Install, upgrade | `install/` (application, agent, first launch, certificate wizard, DB connection manager, upgrade, migrate EM server) |
| Administration Console | `admin/`: navigation, policies, templates, agents, alerts, analytics, configuration, investigate, tools |
| Event types | `admin/policies/configuration/eventtype/`: one page per event type (monitoring and lockdown) |
| Actions (consumers) | `admin/policies/configuration/actions/` |
| Analytics | `admin/analytics/`: one page per recognizer |
| Collections, global settings | `admin/configuration/` (`collectionmanager/`, `eventfilteringconfiguration.md`, `epesettings.md`, `threatmanagerconfiguration.md`, `filemonitorsettings.md`) |
| PowerShell and EPE API | `api/` (policy, collections, EPE, Threat Manager, load module) |
| Solutions | `solutions/` (Active Directory, Exchange, file system, LDAP, EPE) |
| EPE REST site | `eperestsite/` |
| SIEM and reporting | `siemdashboard/`, `reportingmodule/` |
| Troubleshooting | `troubleshooting/` |
| Knowledge Base | `kb/` (licensing, agent install, database, troubleshooting) |

Page types: overview pages (`overview.md`) per section, task and reference pages for each screen or option, requirements and install guides, per-event-type and per-analytic reference pages, API reference, and KB articles.

## Watch out for

- Several PRs per feature split across the hook (C++), the agent, EM, and the console. A repo PR title may name only one layer.
- The native hook version must be at least the agent version, so changes that look backward-incompatible in IPC messages are intentional.
- Docs cover versions 7.4 through 8.1 as separate trees; an edit to one version does not carry to the others. The repo is at 8.1 (version stamped as `8.1.0.<build>`); `release/<version>` branches hold maintenance lines.
- Paths marked protected in the repo `CLAUDE.md` (`PSA/Signatures/`, `ExchangeMonitor.Common/Hook/`) are not documentation sources.
- The repo's README says 25 cmdlets, while a count of `[Cmdlet(` attributes in `SIMonitor.PowerShell/` found 24 files. The docs' `api/` pages are the user-facing list.
- Docs name some analytics differently from the code: the code has a File System Attacks recognizer (`FilesPerUserRecognizer`) and `DomainLocalLoginsRecognizer`; the docs have `filesystemattacksuser.md` and no Domain Local Logins page. Check before documenting an analytic.
- PRs go to `main`, with titles like `Feature:`, `Bug:`, or `Fix:`. Work items appear as `AB#<id>`.
- Worth reading in the repo: `ARCHITECTURE.md` (policy, event registration, and collection concepts), `GLOSSARY.md`, and the per-subsystem `CLAUDE.md` files.
- Not verified in the survey: license editions and what they unlock; whether the WinConsole screen names always match the doc page titles; where the Threat Manager integration code lives; how the SIEM, reporting module, and Access Analyzer integrations are built (`SISDIntegration/` is the likely home); Exchange monitor and credential provider docs coverage; and the full event-type list against the 8.1 `eventtype/` pages.
