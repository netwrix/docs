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
| 07 | Verify that the target server's assigned CPU, RAM, and disk meet at least the minimum sizing in [Server Requirements](/docs/endpointprotector/requirements/server) before starting migration — undersized environments are a common root cause of post-migration performance issues, including recurring server errors. |

## Backup and Recovery

| # | Best Practice |
|---|---|
| 08 | Always create a VM snapshot AND a System Configuration Backup — they serve different recovery purposes. |
| 09 | Store the System Backup Key in a password manager or secure vault. You can't recover it if you lose it. |
| 10 | Label all backups with version, date, and purpose (e.g., `pre-patch-5942`, `migration-to-2510`). |
| 11 | For compliance-regulated environments, export audit logs separately before migration — they aren't in the config backup. |
| 12 | Test backup restoration in a non-production environment at least once before relying on it for production recovery. |
| 13 | Create audit log backups to export logs off the server — don't use the server as a storage location. Backup files left on the server can be lost if the image fails or is replaced. Always download and store audit log backup files in a secure, external location. |

## Database and Infrastructure

| # | Best Practice |
|---|---|
| 14 | Maintain at least 30% free disk space at all times — enforce this via monitoring before and after migration. |
| 15 | For databases over 50 GB, always engage Netwrix Support for supervised migrations. |
| 16 | Don't perform other server changes or upgrades for 24 hours after the 5.9.4.2 patch — background DB jobs are running. |
| 17 | Allocate additional CPU and RAM temporarily during migration — doubling resources can cut migration time by 2–3×. See [Server Requirements](/docs/endpointprotector/requirements/server) for baseline recommendations. |
| 18 | Use SSD-backed storage for the EPP VM — spinning disk significantly increases upgrade and query times for large DBs. See [Server Requirements](/docs/endpointprotector/requirements/server) for storage minimums. |

## Network and Security

| # | Best Practice |
|---|---|
| 19 | Always reuse the same IP/FQDN for the new 2510 server. Changing it creates cascading certificate and Enforced Encryption (EE) trust failures. |
| 20 | Fill both DNS fields in network settings on 2510 — a known bug prevents saving with only one DNS entry. |
| 21 | Disable client communications on the new server before restoring a backup to prevent partial-state registrations. |
| 22 | After migration, monitor SIEM connectivity — it may require reconfiguration and Netwrix Support may need to provide a restoration script. |

## Client Management

| # | Best Practice |
|---|---|
| 23 | If you are using EPP Server Client Upgrade feature, never upgrade Clients directly from 5.9.4.1 (or older) to 2511 or later clients — upgrade to 5.9.4.3 Hotfix 1 first as the signature bridge. |
| 24 | Use enterprise deployment tools (Intune, SCCM, Jamf) for client upgrades rather than relying solely on EPP's built-in client upgrade feature, which limits uploads to 50 machines per hour. |
| 25 | Always run a pilot deployment of 10–20 endpoints before mass client rollout. |
| 26 | For Enforced Encryption (EE) environments, upload both Windows and macOS EE clients to the server before enabling client communications — the server requires both packages to be present regardless of which OS your endpoints use. |
| 27 | Plan client updates for off-peak hours to minimize end-user disruption. |
| 28 | If a Client Upgrade task is stuck, clean up all existing Client Upgrade tasks on the EPP Server and create a new task — stale tasks can block the upgrade queue. |
| 29 | If a Client Upgrade task doesn't start or remains stuck on a Windows endpoint, reboot the endpoint before retrying — the EPP Client installer uses msiexec, and a pending restart or a previous failed installation can block it. |

## Backup Version Discipline

| # | Best Practice |
|---|---|
| 30 | Create the migration backup on **exactly version 5.9.4.2** — not 5.9.4.1, not 5.9.4.0. 2510 rejects any other version and may cause OS regression. |
| 31 | Label every backup file with the server version and date in the filename (e.g., `epp-5942-backup-2026-04-21.bak`). Mislabelled backups are a leading cause of wrong-version import errors. |
| 32 | You can restore a 2509 configuration backup onto a 2510 server — the OS remains 2510 and the result is functionally equivalent to a native 2510 deployment. The only consideration is disk sizing: verify that disk capacity is sufficient, as the 2509 base image uses a smaller default disk allocation than 2510. |
| 33 | After applying the 5.9.4.2 cumulative patch, wait 24 hours for background DB tasks to complete before creating the migration backup. |

## 3rd-Party Integrations

| # | Best Practice |
|---|---|
| 34 | Treat all 3rd-party integrations (SMTP, AD/LDAP, SSO, SIEM, S3) as **not migrated** until manually verified post-migration. |
| 35 | Document all integration credentials and settings before migration — have them ready for re-entry post-restore. |
| 36 | After AD Sync completes, verify the imported object count matches expectations — silent partial imports can occur even when sync reports success. |
| 37 | For SIEM integrations, contact Netwrix Support proactively after migration — restoration may require a specialized script. |

## Post-Migration Stability

| # | Best Practice |
|---|---|
| 38 | Don't apply server patches immediately after backup restore — the import process can disrupt the patch pipeline. Allow 24 hours before patching. |
| 39 | Observe the migrated server's CPU, RAM, and disk usage closely during the first 24 hours. Temporary peaks are normal — background cron jobs, database schema alignment, and log reindexing tasks continue running in the background. Don't treat elevated resource usage alone as a failure indicator during this window. |
| 40 | Monitor Audit Log Backup jobs after migration — they can enter an infinite running state. Verify job completion before scheduling recurring backups. |
| 41 | For air-gapped / offline environments, obtain the Offline Activation Patch for 2510 before the maintenance window begins — request it from Netwrix Support in advance. |
| 42 | After a mass client reinstall or extended communication outage, expect a temporary CPU spike when clients resume communication — machines request settings, rights, and policies simultaneously, and deliver any backlog of blocked logs. Spike severity scales with fleet size and the configured **Policy Refresh Interval** (see [Client Settings](/docs/endpointprotector/admin/dc_module/globalsettings.md#client-settings)). |
| 43 | Stagger mass client reinstalls or reconnections in batches rather than restoring communication for the entire fleet at once — this reduces peak server load during resynchronization. |
| 44 | Don't assume a coinciding SIEM or Audit issue is the cause of a CPU spike without evidence — both operate independently of client check-in load. |
| 45 | If migrating from an older server version, review your SIEM parser configuration against the current syslog export content — recent releases added new fields and data to the export, and an outdated parser may not capture them. |
