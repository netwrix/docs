---
product: endpointprotector
repo: netwrix-corp/endpoint-epp-client
local_clone: ~/endpoint-epp-client
last_reviewed: 2026-10-13
status: drafted from a code survey; not yet reviewed by someone who owns the product
---

## What it is

Endpoint Protector is a data loss prevention (DLP) and device control product. Administrators define policies in a central web console; software on each Windows, macOS, and Linux endpoint enforces them. Its modules are Device Control, Content Aware Protection (including network inspection, "DPI"), eDiscovery, and Enforced Encryption (EasyLock).

**This repo is the client only.** It holds the endpoint agent for Windows, macOS, and Linux, the tray notifier, the browser extension, and the Outlook add-ins. The server (the web console, REST API, policy editing, virtual appliance, SCIM and directory sync, licensing, reports, alerts) is a separate codebase that is not here. The client has no standalone mode: it fetches policy from the server and holds only a local cache.

Docs use "Netwrix Endpoint Protector" for the product. The docs mix "Endpoint Protector Client" and "EPP Client" (and likewise for Server), so match the page you are editing. There is no `docs/endpointprotector/CLAUDE.md`, so no product-specific naming rules exist beyond the repo style guide.

## Code layout

Paths are from the repo root. Windows and shared code is under `src/`; `mac/`, `linux/`, and `notifier/` are platform-specific. Each platform has its own build system.

| Path | Role | User-visible behavior |
|---|---|---|
| `src/SiEServiceDLL/`, `src/SiEService/` | Windows service (policy enforcement, server check-in) | Windows client behavior |
| `mac/epp/`, `mac/epp/app/` | macOS daemon, IOKit and Bluetooth device monitoring | macOS client behavior, device control on Mac |
| `linux/epp-client/src/` | Linux systemd service, UDev device detection | Linux client behavior |
| `src/base/` | Shared logic: server communication, device rights, file shadowing, offline password, EasyLock | Most cross-platform settings and rights |
| `src/soap_client/` | SOAP client for the server protocol | Not user-visible |
| `src/dlp/cap/` | Content Aware Protection scanner: patterns, OCR, dictionaries, PII detectors | What counts as sensitive content |
| `src/netdlp/` | Network DLP: `sslsplit` transparent proxy, Windows redirect drivers | HTTPS inspection ("DPI") |
| `mac/netext/` | macOS network extension for DPI | DPI on macOS |
| `src/CssDcFlt/`, `src/dlp/driver/`, `src/SiEServiceDLL/SieFilter/` | Windows kernel drivers | Device and file enforcement on Windows |
| `src/crypt/` | Encryption and certificates | Client certificate, EasyLock |
| `notifier/` | Qt tray app, with translations in `notifier/resources/translations/` | Pop-ups, remediation dialogs, offline password entry |
| `src/BrowserBroker/`, `src/BrowserConnector/` | Browser extension (named "Netwrix EPP Browser Connector") and its native host | Browser upload inspection |
| `src/OutlookExtension/`, `src/OutlookAddinExtension/` | Outlook desktop (COM) add-in; Outlook web and new Outlook add-in | Email inspection |
| `src/Setup/`, `linux/epp-client-generate-builds/`, `mac/installer/` | MSI, DEB and RPM, and PKG packaging | Install and deployment |
| `src/UnitTest_Main/` | Google Test unit tests, shared by all platforms | Not user-visible |

Policy and settings arrive from the server in the check-in ("ping") replies and are parsed in `src/base/` and `src/SiEServiceDLL/SiESoapClient.cpp`. The action codes are in `src/base/epp_soap_protocol.h`. Client-to-server traffic is TLS 1.2 or later with a per-client certificate (mTLS) on port 443 by default; the client always initiates. See `docs/misc/epp_client_server_communication_overview.md` in the repo.

## Vocabulary

| Code says | UI and docs say |
|---|---|
| EPP | Endpoint Protector (Platform) |
| CAP | Content Aware Protection |
| DC | Device Control |
| DPI, netdlp, sslsplit | Deep Packet Inspection, network content inspection |
| EE | Enforced Encryption, with EasyLock as the companion app |
| SDR, "data at rest" actions | eDiscovery scanning |
| OTP, `OfflineTempPassword` | Offline Temporary Password |
| TD level | Trusted Device level (1 to 4) |
| Allowlist (legacy: whitelist, `WLIST`) | Allowlist |
| Denylist (legacy: blacklist, `BlacklistedAppList`) | Denylist |
| Shadowing, `FileShadower` | File shadowing, file tracing |
| Notifier | Client notifications and remediation dialogs |
| `cososys` in paths and IDs | Former vendor name; not shown to users |

The repo's `GLOSSARY.md` is the authoritative map for client terms.

## Where a change usually lands

- **New or changed policy option or switch:** the server sends it, so the client change is in the parsing and enforcement code in `src/base/` (or `src/SiEServiceDLL/` on Windows), then each platform's service if behavior differs. The matching docs change is on a server console page, which this repo cannot confirm.
- **New content detector (for example a PII format):** a new `*Detect.cpp` under `src/dlp/cap/`, tests in `src/UnitTest_Main/`. Docs: `admin/cap_module/contentdetection.md`.
- **New device type or device control rule:** `src/base/` and the per-platform device monitoring (`mac/epp/ioreg/`, UDev in `linux/`, `src/SiEServiceDLL/` on Windows). Docs: `admin/dc_module/`.
- **New user-facing message or dialog:** `notifier/`, plus translation files.
- **Network inspection change:** `src/netdlp/`, `mac/netext/`, `linux/epp-client/src/netdlp_setup/`. Docs: `admin/cap_module/deeppacket.md`.
- **Anything platform-specific:** check all three platforms; the same change usually appears in `src/`, `mac/`, and `linux/`.

## Docs map

Under `docs/endpointprotector/`. The product has one version, `current` (no version folder), and the sidebar is autogenerated from the folder tree (`sidebars/endpointprotector/epp.js`), so new pages appear without editing it.

| Area | Where |
|---|---|
| Overview, getting started | `index.md`, `gettingstarted.md` |
| Requirements (server, client, components, network architecture) | `requirements/` (`client.md` covers the client) |
| Install and deployment (virtual appliance, cloud images, Intune, Jamf, Active Directory GPO, migration and upgrade) | `install/` |
| Administration (login, dashboard, alerts, reports, directory services, SCIM, backup, licensing, SSO, mail, REST API) | `admin/`, `admin/systemconfiguration/`, `admin/systemmaintenance/`, `admin/epp_rest_api/` |
| Device Control | `admin/dc_module/` |
| Content Aware Protection, DPI, Outlook add-ins | `admin/cap_module/`, `admin/denylistsallowlists/` |
| eDiscovery | `admin/ed_module/` |
| Enforced Encryption | `admin/ee_module/` |
| Client support policy | `supportability/client-supportability.md` (and `server-supportability.md`) |
| Knowledge Base | `kb/`, in seven topic folders (administration, CAP and DPI, deployment, device control, enforced encryption, features, troubleshooting) |

Page types: overview and module pages (concept plus configuration), step-by-step admin and deployment guides with many screenshots, requirements and supportability pages, an API reference, and KB articles. Most of the docs describe the server console.

## Watch out for

- **Client-only repo.** Settings, policy fields, console screens, alerts, reports, licensing, the REST API, the virtual appliance, and server upgrades are not in this repo. A client PR can say a policy "supports" something, but the console page that exposes it must be checked against the server or its owners.
- **Kernel drivers conflict with the docs.** `requirements/client.md` says the client does not inject kernel-level drivers or extensions on any OS. This repo builds Windows kernel drivers (`CssDcFlt`, `dlp/driver`, the WFP drivers, `sieflt`), the installer project references them, and macOS uses a system extension. Do not repeat or "fix" either side without asking the product owner.
- **Version constants disagree.** The Windows, macOS, and Linux client versions live in three different files (`SiEDefines.h`, `mac/epp/app/Constant.h`, `linux/epp-client/src/util/Constant.h`) and the values on `main` are not in step. The scheme is `YYMM.<platform>.<build type>.<build>` where the second field is 0 for server, 1 Windows, 2 Mac, 3 Linux, 4 Win-Mac EE. Use release branch names (such as `maintenance/patch5950`) and the work item to find which release a change shipped in.
- **Branches and tracking.** Branch from `main` as `feature/EPP-<id>`; commits end with the Jira key `EPP-<id>`. `CONTRIBUTING.md` points to Jira, while `AGENTS.md` and `.mcp.json` mention Azure DevOps (project `CoSoSys-EPP`); the survey could not tell which is current.
- **Not every pipeline runs on PRs.** All Azure Pipelines are set to `trigger: none`, so a merged client change does not prove a build.
- **Browser extension scope.** The architecture doc names Chrome, Edge, and Firefox in its diagram but describes the extension as Chrome and Edge. The manifest is a Chrome-style manifest v3. Browser support has to come from the server docs or the product team.
- **Docs and repo naming.** Repo docs say "EPP Client"; the product docs mix that with "Endpoint Protector Client". Product docs have the "Netwrix" prefix on first mention.
- **Not verified in the survey:** how the server stores and delivers each policy field; which kernel drivers actually ship in the current installers; supported OS versions and architectures (see `supportability/client-supportability.md`); whether macOS DPI uses a network extension only or also Packet Filter (the glossary says PF "may" be used); the Outlook web add-in's deployment path; whether `kb/` articles are also copied elsewhere by `scripts/copy-kb-to-versions.mjs`; and every docs page that describes server-only behavior.
