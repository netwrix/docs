---
title: "Migration Best Practices"
description: "Netwrix Endpoint Protector — Server Migration & Upgrade Guide: Best Practices"
sidebar_position: 11
---

# Best Practices Summary

The following best practices come from the complete migration workflow and apply to any EPP Server upgrade or migration:

## Planning

| # | Best Practice |
|---|---|
| 01 | **Migrate immediately** — support for all 5.x versions ended 14 February 2026. Every day on a 5.x server is a day without security coverage. See [Netwrix Endpoint Protector Server Supportability](/docs/endpointprotector/supportability/server-supportability). |
| 02 | Test the complete migration procedure in a lab environment before executing in production. |
| 03 | Plan a maintenance window that is at least 2× your estimated migration duration. |
| 04 | Communicate the maintenance window to all affected stakeholders and end users in advance. |
| 05 | Verify the updated license (`php_els` field) before starting any migration activity. |
| 06 | Keep the old server VM alive until the new environment is fully validated. Never decommission prematurely. |

## Backup and Recovery

| # | Best Practice |
|---|---|
| 07 | Always create a VM snapshot AND a System Configuration Backup — they serve different recovery purposes. |
| 08 | Store the System Backup Key in a password manager or secure vault. You can't recover it if lost. |
| 09 | Label all backups with version, date, and purpose (e.g., `pre-patch-5942`, `migration-to-2510`). |
| 10 | For compliance-regulated environments, export audit logs separately before migration — they aren't in the config backup. |
| 11 | Test backup restoration in a non-production environment at least once before relying on it for production recovery. |

## Database and Infrastructure

| # | Best Practice |
|---|---|
| 12 | Maintain at least 30% free disk space at all times — enforce this via monitoring before and after migration. |
| 13 | For databases over 50 GB, always engage Netwrix Support for supervised migrations. |
| 14 | Don't perform other server changes or upgrades for 24 hours after the 5.9.4.2 patch — background DB jobs are running. |
| 15 | Allocate additional CPU and RAM temporarily during migration — doubling resources can cut migration time by 2–3×. See [Server Requirements](/docs/endpointprotector/requirements/server) for baseline recommendations. |
| 16 | Use SSD-backed storage for the EPP VM — spinning disk significantly increases upgrade and query times for large DBs. See [Server Requirements](/docs/endpointprotector/requirements/server) for storage minimums. |

## Network and Security

| # | Best Practice |
|---|---|
| 17 | Always reuse the same IP/FQDN for the new 2510 server. Changing it creates cascading certificate and EE trust failures. |
| 18 | Fill both DNS fields in network settings on 2510 — a known bug prevents saving with only one DNS entry. |
| 19 | Disable client communications on the new server before restoring a backup to prevent partial-state registrations. |
| 20 | After migration, monitor SIEM connectivity — it may require reconfiguration and Netwrix Support may need to provide a restoration script. |

## Client Management

| # | Best Practice |
|---|---|
| 21 | Never upgrade directly from 5.9.4.1 (or older) to 2510 clients — upgrade to 5.9.4.3 first as the signature bridge. |
| 22 | Use enterprise deployment tools (Intune, SCCM, Jamf) for client upgrades rather than relying solely on EPP's built-in (rate-limited to 50/hour). |
| 23 | Always run a pilot deployment of 10–20 endpoints before mass client rollout. |
| 24 | For EE environments, upload both Windows and macOS EE clients to the server before enabling client communications. |
| 25 | Plan client updates for off-peak hours to minimize end-user disruption. |

## Backup Version Discipline

| # | Best Practice |
|---|---|
| 26 | Create the migration backup on **exactly version 5.9.4.2** — not 5.9.4.1, not 5.9.4.0. 2510 rejects any other version and may cause OS regression. |
| 27 | Label every backup file with the server version and date in the filename (e.g., `epp-5942-backup-2026-04-21.bak`). Mislabelled backups are a leading cause of wrong-version import errors. |
| 28 | You can restore a 2509 configuration backup onto a 2510 server — the OS remains 2510 and the result is functionally equivalent to a native 2510 deployment. The only consideration is disk sizing: verify that disk capacity is sufficient, as the 2509 base image uses a smaller default disk allocation than 2510. |
| 29 | After applying the 5.9.4.2 cumulative patch, wait 24 hours for background DB tasks to complete before creating the migration backup. |

## 3rd-Party Integrations

| # | Best Practice |
|---|---|
| 30 | Treat all 3rd-party integrations (SMTP, AD/LDAP, SSO, SIEM, S3) as **not migrated** until manually verified post-migration. |
| 31 | Document all integration credentials and settings before migration — have them ready for re-entry post-restore. |
| 32 | After AD Sync completes, verify the imported object count matches expectations — silent partial imports can occur even when sync reports success. |
| 33 | For SIEM integrations, contact Netwrix Support proactively after migration — restoration may require a specialized script. |

## Post-Migration Stability

| # | Best Practice |
|---|---|
| 34 | Don't apply server patches immediately after backup restore — the import process can disrupt the patch pipeline. Allow 24 hours before patching. |
| 35 | Monitor Audit Log Backup jobs after migration — they can enter an infinite running state. Verify job completion before scheduling recurring backups. |
| 36 | For air-gapped / offline environments, obtain the Offline Activation Patch for 2510 before the maintenance window begins — request it from Netwrix Support in advance. |
