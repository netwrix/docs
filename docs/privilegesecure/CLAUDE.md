# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

**Netwrix Privilege Secure for Access Management** — a next-generation Privileged Access Management (PAM) solution that uses activity-based, just-in-time access rather than mapping users to privileged accounts. Users request sessions that grant temporary, scoped privileges to perform specific activities on specific resources.

Key concepts appear throughout the documentation:
- **Access Policy** — ties together users/groups, activities, resources, and a connection profile to define who can do what on which systems
- **Activity** — a defined set of actions (add to local admins, run a script, etc.) that Privilege Secure performs before, during, and after a session
- **Resource** — a Windows/Linux server, domain, or other target system
- **Session** — a time-bounded privileged access grant; the core unit of work for end users
- **Service Account** — credential used by Privilege Secure to connect to domains and resources
- **Connection Profile** — settings that control how users connect to resources (RDP, SSH, etc.)

## Versions

| Version | Status | Notes |
|---------|--------|-------|
| `26.03` | Latest (default) | YY.MM versioning scheme |
| `25.12` | Active | YY.MM versioning scheme |
| `4.2` | Hidden | Files are kept in the repo but the version is not listed in `src/config/products.js`, so it is not built or published. `src/config/redirects/privilegesecure-4.2.js` redirects the 4_2 addresses that have a 26.03 counterpart. Semantic versioning; includes `remoteaccessgateway/` and `revieweruser/` sections not in other versions |
| `4.1` | KB-only | Contains only KB articles; no full product docs |

Edits to one version do **not** propagate to others. Update each version that needs the change explicitly.

## Directory Structure

Each active version (`26.03`, `25.12`, `4.2`) follows this layout:

```
<version>/
├── index.md                # Product landing page
├── gettingstarted.md       # Post-install configuration sequence
├── requirements/           # System requirements (server, client, ports, proxy, targets)
├── install/                # Installation guide (components, first launch, login, upgrade)
├── admin/                  # Administrator guide
│   ├── overview.md
│   ├── navigation/
│   ├── dashboard/
│   ├── interface/          # Core UI pages: access policies, activities, resources, users/groups, credentials, platforms, protection policies
│   ├── configuration/      # System settings, service accounts, service nodes, authentication, SIEM, integration connectors
│   ├── AuditReporting/     # Audit logs, access certification, reporting
│   ├── myactivities/
│   └── sessiontimeout.md
├── enduser/                # End-user guide (dashboard, My Activities, browser extension)
├── kb/                     # Knowledge Base (see KB section below)
│
# 4.2 only:
├── revieweruser/           # Reviewer role guide
└── remoteaccessgateway/    # Remote Access Gateway deployment and end-user guide
```

## Knowledge Base Articles

KB articles in versioned `kb/` folders are **copies** — the canonical source is `docs/kb/` at the repo root. The copy script (`scripts/copy-kb-to-versions.mjs`) populates versioned `kb/` folders at build time; those files are gitignored.

**Never edit KB files in versioned `kb/` folders.** Edit them in `docs/kb/` instead.

KB articles use a specific frontmatter schema with `description`, `keywords`, `products`, `sidebar_label`, and `tags` fields. The `products` field for this product is `privilege-secure-access-management`. KB images are stored in `docs/kb/privilegesecure/<category>/0-images/` alongside the articles.

KB categories mirror topics: `active-directory-configuration`, `authentication-and-mfa`, `certificates-and-security`, `database-and-backend`, `high-availability-and-clustering`, `installation-configuration-and-licensing`, `network-and-platform-integration`, `remote-desktop-and-rds`, `resource-management`, `session-management-and-recording`, `third-party-integrations`, `troubleshooting-and-errors`, `user-and-service-accounts`, `workflows-and-automation`, `client-tools-and-integrations`.

## Images

Product images live in `static/images/privilegesecure/<version>/` with two top-level subdirectories:
- `accessmanagement/` — mirrors the doc structure: `admin/`, `enduser/`, `install/`, `requirements/`, `revieweruser/`
- `remoteaccessgateway/` — Remote Access Gateway images (4.2 only)

Reference images with absolute paths: `/images/privilegesecure/<version>/accessmanagement/<section>/<subsection>/<filename>.webp`

## Product Terminology

Use these exact terms consistently:

| Correct | Avoid |
|---------|-------|
| Netwrix Privilege Secure | SBPAM, SbPAM, StealthDEFEND |
| Privilege Secure Console | admin console, web console |
| Access Policy | access policy configuration |
| Activity | task, action |
| Resource | target, machine |
| Service Node | proxy node |
| just-in-time | just in time (no hyphens when used as adverb) |

The product was formerly called StealthDEFEND (references may appear in older KB articles — update them).
