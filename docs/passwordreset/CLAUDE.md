# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

Netwrix Password Reset (NPR) is a self-service password management system that reduces password-related help desk calls. It allows users to securely change their passwords and unlock their Active Directory accounts, even after forgetting their passwords. The product runs on Windows Server with IIS, communicating over UDP port 5100 between the Web Interface and the Password Reset Server.

## Versions

Two versions are maintained in this directory:

| Version | Path | Status | Notes |
|---------|------|--------|-------|
| 3.3 | `3.3/` | Latest (default) | Deeper content structure with subdirectories |
| 3.23 | `3.23/` | Older | Flatter structure, fewer files |

Edits to one version do not propagate to the other. Update each version that needs the change.

## Structure Differences Between Versions

Version 3.3 has a deeper directory hierarchy than 3.23:

- **3.3** splits configuration into `administration/configuringpasswordreset/` (7 tab-specific files: general, enroll, email, verification, security, permissions, about), data console into `administration/usingthedataconsole/` (3 files), and database into `administration/workingwiththedatabase/` (2 files). Also includes `what_new.md`.
- **3.23** keeps these as single flat files under `administration/` (e.g., `configuring_password_reset.md`, `using_the_data_console.md`, `working_with_the_database.md`). Has `persuading_users_to_enroll.md` which 3.3 does not.

Both versions share the same top-level sections: `administration/`, `evaluation/`, and `kb/`.

## Image Paths — Cross-Product References

All images live under `static/images/` at the repo root. In markdown, paths start with `/images/...` (Docusaurus serves `static/` at the root). Many passwordreset images are stored under `static/images/passwordpolicyenforcer/`, not `static/images/passwordreset/`. This is by design — the products were historically bundled together.

- **3.3 docs** → files on disk at `static/images/passwordpolicyenforcer/11.0/passwordreset/`, referenced in markdown as `/images/passwordpolicyenforcer/11.0/passwordreset/...`
- **3.23 docs** → files on disk at `static/images/passwordpolicyenforcer/10.2/password_reset/`, referenced in markdown as `/images/passwordpolicyenforcer/10.2/password_reset/...` (note the underscore)
- Some images are under `static/images/passwordreset/3.3/` and `static/images/passwordreset/3.23/` as expected

When adding or updating images, check existing references in the file to determine which image directory path convention to follow.

## Knowledge Base

KB articles in `3.3/kb/` and `3.23/kb/` are **copied by the build script** from `docs/kb/` — never edit them directly. The canonical KB source is `docs/kb/`. KB categories for this product: security-and-administration, portal-access-and-authentication, configuration-and-customization, integrations-and-notifications, deployment-and-infrastructure.

## Sidebar Config

Sidebar files are at `sidebars/passwordreset/3.3.js` and `sidebars/passwordreset/3.23.js` (relative to repo root). These are auto-generated and rarely need manual editing.

## Key Terminology

- **NPR** — Abbreviation for Netwrix Password Reset, used extensively in image filenames and some legacy references
- **APR** — Older product name (ANIXIS Password Reset), still appears in registry paths (`HKLM\SOFTWARE\ANIXIS\ANIXIS Password Reset\3.0`), setup filenames (`APR330.exe`), and database filenames (`apr.sdf`, `aprlog.sdf`)
- **PPE** — Netwrix Password Policy Enforcer, a companion product that integrates with Password Reset
- **PRC** — Password Reset Client, the optional desktop client component
- **Configuration Console** — The main admin interface for configuring Password Reset settings
- **Data Console** — The reporting/audit interface for viewing user enrollment and activity data
