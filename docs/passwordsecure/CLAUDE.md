# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

Netwrix Password Secure (NPWS) is an enterprise password management solution. It scales from SMEs to global corporations and manages passwords, documents, and certificates with high-level encryption.

## Versions

Four versions exist side by side — edits to one do **not** propagate to others:

| Folder | Version | Notes |
|---|---|---|
| `current/` | Current (SaaS/latest) | Default version; uses new versioning scheme (26.x) |
| `9.3/` | 9.3 | Legacy numbered version |
| `9.2/` | 9.2 | Legacy numbered version |
| `9.1/` | 9.1 | Legacy numbered version; not listed in products.js (may be retired) |

The `current` version introduced a new versioning scheme (`26.3.x`) and dropped some legacy content (e.g., Safari browser addon, older version history entries). It added `versioning_scheme.md` to explain the change.

## Content Structure (current/)

- **`configuration/`** — The bulk of the docs. Split into client views and components:
  - `advancedview/` — Admin-oriented client module (passwords, forms, org structure, discovery service, permissions, user rights, dashboards, filters, export)
  - `basicview/` — Simplified end-user view
  - `servermanager/` — Server Manager configuration
  - `webapplication/` — Web application setup and usage
  - `browseraddons/` — Browser extension configuration
  - `autofilladdon/` — Autofill addon configuration
  - `mobiledevices/` — Mobile device configuration
  - `offlineclient/` — Offline client configuration
  - `sdkapi/` — SDK/API documentation
- **`installation/`** — Requirements, client install, web app install, browser addon install
- **`introduction/`** — Product intro and version history
- **`enduser/`** — Getting-started guide for end users
- **`faq/`** — FAQ and security topics (encryption, penetration tests, high availability)
- **`maintenance/`** — Updates, server migration, ECC migration
- **`msp_system.md`** — MSP (Managed Service Provider) system requirements

## Terminology

The product uses legacy client names in older content. When editing, preserve the term used in each version unless specifically asked to modernize:

| Legacy term | Current term | Context |
|---|---|---|
| FullClient | Advanced view | Desktop admin interface |
| LightClient | Basic view | Simplified end-user interface |
| AdminClient | Server Manager | Server administration |
| NativeClient | (deprecated) | Referenced in ECC migration docs only |

Files in `current/` that still use legacy terms: `basicview/` docs (FullClient, LightClient), `msp/changesintheadminclient/`, `maintenance/eccmigration/`, `mobiledevices/setupmobiledevice/linking_the_database.md`.

## Known Quirks

- The `9.1` version has a sidebar file (`sidebars/passwordsecure/9.1.js`) but is **not listed in `products.js`** — it may be retired or hidden. Check before making changes to it.
- Version history files use different naming between versions: `current/` uses `version_26.3.x` format while `9.x/` versions use `version_9.x.x.xxxxx` format.
- Many files use plain `NOTE:` text instead of `:::note` admonitions. Some (like `permissionconceptandprotective/permission_concept_and_protective.md`) use `NOTE:` followed by a code block — these are broken formatting and should be converted to proper admonitions when touched.
- Nearly all images live in `static/images/passwordsecure/9.2/` (640 files). There is no full image set for 9.3 or current — only one image was added in `9.3/` (`configure_custom_branding.webp`). So `9.2` image paths are correct throughout; don't "upgrade" them to `9.3`.
- `current/` removed Safari browser addon docs and pruned version history prior to 9.3.1. It added `versioning_scheme.md` explaining the shift from SemVer (9.x) to date-based versioning (26.3.x).

## Sidebar Configuration

Sidebar files are at `sidebars/passwordsecure/{current,9.3,9.2,9.1}.js`. These are auto-generated and rarely need manual editing.

## Images

Images are in `static/img/product_docs/passwordsecure/`. Reference with absolute paths:
```
/img/product_docs/passwordsecure/image.webp
```
