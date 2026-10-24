# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

**Netwrix Privilege Secure for Access Management** — a next-generation Privileged Access Management (PAM) solution that uses activity-based, just-in-time access rather than mapping users to privileged accounts. Users request sessions that grant temporary, scoped privileges to perform specific activities on specific resources.

Key concepts appear throughout the documentation:
- **Access policy** — ties together users/groups, activities, resources, and a connection profile to define who can do what on which systems
- **Activity** — a defined set of actions (add to local admins, run a script, etc.) that Privilege Secure performs before, during, and after a session
- **Resource** — a Windows/Linux server, domain, or other target system
- **Session** — a time-bounded privileged access grant; the core unit of work for end users
- **Service account** — credential used by Privilege Secure to connect to domains and resources
- **Connection profile** — settings that control how users connect to resources (RDP, SSH, etc.)
- **Remote Access Gateway** — a portal and gateway that lets users outside the corporate network request and open sessions in a browser

## Versions

| Version | Status | Notes |
|---------|--------|-------|
| `26.07` | Latest (default) | YY.MM versioning scheme. One cumulative section that covers 25.12.0, 26.03.x, and 26.07.0 through 26.07.3. Section Guide layout (see below). |
| `26.03` | Active | Legacy layout |
| `25.12` | Active | Legacy layout |
| `4.2` | Active | Semantic versioning. Legacy layout, plus `remoteaccessgateway/` and `revieweruser/` sections |

`src/config/products.js` is the source of truth for versions and the default.

Edits to one version do **not** propagate to others. Update each version that needs the change explicitly.

### Scope of the 26.07 section

- Document released behavior only. Leave out anything that exists only on the main branch, in a later release, or that a release reverted.
- Write unresolved facts as `{/* TODO verify: ... */}` and missing images as `{/* TODO screenshot: ... */}`. Never guess a value. The root `docs/CLAUDE.md` defines the TODO format.
- Don't publish any of the following, in rendered text or in comments that name a value:
  - internal ticket or work item identifiers
  - lab host names, addresses, accounts, domains, or license keys
  - known issues that Support hasn't confirmed
  - workarounds that reset or bypass license state
  - text copied from internal or confidential collateral (rewrite it for customers)

## Directory Structure (26.07)

26.07 follows the zone order in `.claude/references/documentation-section-guide.md`. There is no root `index.md`: `getting-started/overview.md` has `slug: /` and is the landing page. File and folder names are kebab-case.

| Folder | Position | Purpose |
|--------|----------|---------|
| `release-notes/` | 10 | What's new (cumulative) and a link to the Community release notes |
| `getting-started/` | 100 | Overview, key concepts, architecture, glossary, quick start |
| `requirements/` | 200 | Server, database, client, ports, licensing, targets |
| `install/` | 300 | Install, activate a license, upgrade, silent install, remote proxy |
| `configuration/` | 350 | Authentication, service accounts, system settings, access policies, activities, encryption keys, certificates |
| `admin/` | 400 | Users and groups, roles, credentials (`admin/credentials/`), sessions, service nodes, audit and reporting |
| `resources/` | 460 | Servers, domains, Entra ID, databases, websites, platforms |
| `remote-access-gateway/` | 500 | Gateway requirements, install, configuration, user guide, troubleshooting. Repeats the zones one level down. |
| `user-guide/` | 600 | Sign in, request and connect to sessions, approvals, browser extension |
| `integrations/` | 700 | API, identity providers, ITSM, SIEM, vaults |
| `troubleshooting/` | 800 | Known issues, services, sessions, Active Directory sync |
| `kb/` | 999 | Knowledge Base copies (see below) |

Upgrades go through `install/upgrade.md`. There is no migration zone.

### Layout of 26.03, 25.12, and 4.2

```
<version>/
├── index.md                # Product landing page
├── gettingstarted.md       # Post-install configuration sequence
├── requirements/           # System requirements (server, client, ports, proxy, targets)
├── install/                # Installation guide (components, first launch, login, upgrade)
├── admin/                  # Administrator guide
├── enduser/                # End-user guide (dashboard, My Activities, browser extension)
├── kb/                     # Knowledge Base (see KB section below)
│
# 4.2 only:
├── revieweruser/           # Reviewer role guide
└── remoteaccessgateway/    # Remote Access Gateway deployment and end-user guide
```

## Conventions (26.07)

- **Links.** Use absolute file paths with the dotted version and the `.md` extension, for example `/docs/privilegesecure/26.07/install/upgrade.md#anchor`. Every other product does the same, and the pre-commit anchor check and the build only validate this form fully. Link to Knowledge Base articles with `/docs/kb/privilegesecure/...` and to other products with their own file paths.
- **Console address.** The console runs over HTTPS on port 6500 (`https://<server>:6500`). `requirements/ports.md` is the canonical page for the port. Use placeholders such as `<nps-server>` in examples.
- **Images.** Store them in `static/images/privilegesecure/26.07/<zone>/` as `.webp` and reference them with absolute paths.
- **Names.** Take product, component, and menu names from `getting-started/glossary.md`, and write UI labels exactly as the console shows them, in bold.

## Knowledge Base Articles

KB articles in versioned `kb/` folders are **copies** — the canonical source is `docs/kb/` at the repo root. The copy script (`scripts/copy-kb-to-versions.mjs`) populates versioned `kb/` folders at build time, including 26.07; those files are gitignored.

**Never edit KB files in versioned `kb/` folders.** Edit them in `docs/kb/` instead.

KB articles use a specific frontmatter schema with `description`, `keywords`, `products`, `sidebar_label`, and `tags` fields. The `products` field for this product is `privilege-secure-access-management`. KB images are stored in `docs/kb/privilegesecure/<category>/0-images/` alongside the articles.

KB categories mirror topics: `active-directory-configuration`, `authentication-and-mfa`, `certificates-and-security`, `database-and-backend`, `high-availability-and-clustering`, `installation-configuration-and-licensing`, `network-and-platform-integration`, `remote-desktop-and-rds`, `resource-management`, `session-management-and-recording`, `third-party-integrations`, `troubleshooting-and-errors`, `user-and-service-accounts`, `workflows-and-automation`, `client-tools-and-integrations`.

## Images

- 26.07: `static/images/privilegesecure/26.07/<zone>/`.
- 26.03, 25.12, and 4.2: `static/images/privilegesecure/<version>/` with `accessmanagement/` (mirrors the doc structure: `admin/`, `enduser/`, `install/`, `requirements/`, `revieweruser/`), plus `remoteaccessgateway/` for Remote Access Gateway images.

Reference images with absolute paths, for example `/images/privilegesecure/26.07/<zone>/<filename>.webp`.

## Product Terminology

Use these terms consistently:

| Correct | Avoid |
|---------|-------|
| Netwrix Privilege Secure for Access Management on first mention, then Privilege Secure | NPS, NPS-AM, SBPAM, StealthDEFEND |
| the console, the Privilege Secure console | admin console |
| access policy, activity, resource, session, service account, connection profile (lowercase in running text) | task, target, machine. Use "action" only for a step inside an activity. |
| service node | proxy node |
| Remote Access Gateway, the portal | SRA, RAG in running text after the first mention |
| just-in-time | just in time |

### SbPAM

The product was formerly called Stealthbits Privileged Activity Manager (SbPAM). Don't use "SbPAM", "NPS", or other former names in descriptions, concepts, or headings. Use them only when the reader needs the exact string to find or run something:

- the name of a service, IIS site, or application pool that the reader sees, such as the **SbPAM Web Service** site or the `SbPAMHostScan` service
- a file name, folder, command, or tool name that the reader must open or run and that did not change, such as `sbpam_ssh.json` or `SbPAM.RotateKey.exe`
- the title of a Knowledge Base article, when you link to it

Keep these uses sparing. Don't spread them into prose about the product, and describe the thing by its current name first.
