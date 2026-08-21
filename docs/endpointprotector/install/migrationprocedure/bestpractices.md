---
title: "Migration Best Practices"
description: "Netwrix Endpoint Protector — Server Migration & Upgrade Guide: Best Practices"
sidebar_position: 40
---

# Best Practices Summary

The following best practices come from the complete migration workflow and apply to any EPP Server upgrade or migration to 2608.

:::info Temporary — Two Migration Targets Until Late August 2026
Until Netwrix releases 2608 (expected **late August 2026**), legacy 5.x customers who need to migrate sooner can still follow the temporary [Migrating from a Legacy 5.x Server to 2510/2604](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x-to-2510) path instead. Items that differ between the two targets carry a **2510/2604 path:** marker. Netwrix will remove this distinction, and these marked notes, once 2608 ships.
:::

## Planning

| # | Best Practice |
|---|---|
| 01 | **Migrate immediately** — support for all 5.x versions ended 14 February 2026. Every day on a 5.x server is a day without security coverage. See [Netwrix Endpoint Protector Server Supportability](/docs/endpointprotector/supportability/server-supportability). |
| 02 | Test the complete migration procedure in a lab environment before executing in production. |
| 03 | Plan a maintenance window at least 2× your estimated migration duration. |
| 04 | Communicate the maintenance window to all affected stakeholders and end users in advance. |
| 05 | Verify your license is valid and reflects your current entitlements before starting any migration activity, and again after backup import. `php_els` was strictly a 2509–2604 requirement — 2608 no longer needs it and ignores it if present. **2510/2604 path:** `php_els` is still required. |
| 06 | Keep the old server VM alive until you fully validate the new environment. Never decommission prematurely. |
| 07 | Verify that the target server's assigned CPU, RAM, and disk meet at least the minimum sizing in [Server Requirements](/docs/endpointprotector/requirements/server) before starting migration — undersized environments are a common root cause of post-migration performance issues, including recurring server errors. |
| 08 | If you're on 2509, 2510, 2601, or 2602, upgrade to **2604 first** before migrating to 2608 — 2604 → 2608 is the most thoroughly tested path in Netwrix labs. |

## Backup and Recovery

| # | Best Practice |
|---|---|
| 09 | Always create a VM snapshot AND a System Configuration Backup — they serve different recovery purposes. |
| 10 | Store the System Backup Key in a password manager or secure vault. You can't recover it if you lose it. |
| 11 | Label all backups with version, date, and purpose (e.g., `pre-patch-5942`, `migration-to-2608`). |
| 12 | For compliance-regulated environments, export audit logs separately before migration — they aren't in the config backup. |
| 13 | Test backup restoration in a non-production environment at least once before relying on it for production recovery. |
| 14 | Create audit log backups to export logs off the server — don't use the server as a storage location. You can lose backup files left on the server if the image fails or you replace it. Always download and store audit log backup files in a secure, external location. |
| 15 | Don't expect historical log data to carry over to the new CrateDB component on 2608 — it ships empty and only stores new log data going forward. This is the same limitation System Configuration Backup already has today (no logs or file shadows), just extended to the new log store. Export logs separately beforehand if you need them. **2510/2604 path:** no CrateDB on this platform — the item doesn't apply, though the underlying "logs aren't in the backup" limitation still does. |

## Database and Infrastructure

| # | Best Practice |
|---|---|
| 16 | Maintain at least 30% free disk space at all times — enforce this via monitoring before and after migration. |
| 17 | For databases over 50 GB, always engage Netwrix Support for supervised migrations. |
| 18 | Don't perform other server changes or upgrades for 24 hours after the 5.9.4.2 patch — background DB jobs are running. |
| 19 | Allocate additional CPU and RAM temporarily during migration — doubling resources can cut migration time by 2–3×. See [Server Requirements](/docs/endpointprotector/requirements/server) for baseline recommendations. |
| 20 | Use SSD-backed storage for the EPP VM — spinning disk significantly increases upgrade and query times for large DBs. See [Server Requirements](/docs/endpointprotector/requirements/server) for storage minimums. |

## Network and Security

| # | Best Practice |
|---|---|
| 21 | Always reuse the same IP/FQDN for the new server (2608, or 2510/2604 on the temporary path). Changing it creates cascading certificate and Enforced Encryption (EE) trust failures. |
| 22 | Fill both DNS fields only on unpatched 2509 or early 2510 environments. Patch 2604 fixed the DNS field-saving bug, so 2608 needs no workaround. |
| 23 | Disable client communications on the new server before restoring a backup to prevent partial-state registrations. |
| 24 | After migration, monitor SIEM connectivity — it may require reconfiguration and Netwrix Support may need to provide a restoration script. |

## Client Management

| # | Best Practice |
|---|---|
| 25 | The 2608 client requires no new bridge version — any client on 5.9.4.3 Hotfix 1 or on any 2511–2605 client version can upgrade directly. If you are using the EPP Server Client Upgrade feature and still have clients on 5.9.4.1 or older, upgrade them to 5.9.4.3 Hotfix 1 first as the signature bridge before proceeding to 2608. **2510/2604 path:** the target client is 2605, not 2608, but the same 5.9.4.3 Hotfix 1 bridge requirement applies for clients on 5.9.4.1 or older. |
| 26 | Use enterprise deployment tools (Intune, SCCM, Jamf) for client upgrades rather than relying solely on EPP's built-in client upgrade feature, which limits uploads to 50 machines per hour. |
| 27 | Always run a pilot deployment of 10–20 endpoints before mass client rollout. |
| 28 | For Enforced Encryption (EE) environments, upload both Windows and macOS EE clients to the server before enabling client communications — the server requires both packages regardless of which OS your endpoints use. |
| 29 | Update EE clients to the latest version **immediately** after migration — don't leave them on an older version the way you might stage regular EPP client rollouts. Since the **2509** release, Enforced Encryption changed its communication logic with the server, so a delayed EE client update can cause EE-protected drives to lose synchronization or fail to communicate. |
| 30 | Plan client updates for off-peak hours to minimize end-user disruption. |
| 31 | If a Client Upgrade task is stuck, clean up all existing Client Upgrade tasks on the EPP Server and create a new task — stale tasks can block the upgrade queue. |
| 32 | If a Client Upgrade task doesn't start or remains stuck on a Windows endpoint, reboot the endpoint before retrying — the EPP Client installer uses msiexec, and a pending restart or a previous failed installation can block it. |

## Backup Version Discipline

| # | Best Practice |
|---|---|
| 33 | If migrating from a legacy 5.x server, create the migration backup on **exactly version 5.9.4.2** — not 5.9.4.1, not 5.9.4.0. Both 2608 and the temporary 2510/2604 path reject any other legacy version and may cause OS regression. |
| 34 | Label every backup file with the server version and date in the filename (e.g., `epp-5942-backup-2026-04-21.bak`). Mislabelled backups are a leading cause of wrong-version import errors. |
| 35 | If migrating from the current image platform, 2608 accepts a direct backup from 2509, 2510, 2601, 2602, or 2604 — but reaching 2604 first is the recommended, best-tested path (see [Planning](#planning)). |
| 36 | After applying the 5.9.4.2 cumulative patch, wait 24 hours for background DB tasks to complete before creating the migration backup. |

## 3rd-Party Integrations

| # | Best Practice |
|---|---|
| 37 | Treat all 3rd-party integrations (SMTP, AD/LDAP, SSO, SIEM, S3) as **not migrated** until you manually verify them post-migration. |
| 38 | Document all integration credentials and settings before migration — have them ready for re-entry post-restore. |
| 39 | After AD Sync completes, verify the imported object count matches expectations — silent partial imports can occur even when sync reports success. |
| 40 | For SIEM integrations, contact Netwrix Support proactively after migration — restoration may require a specialized script. |
| 41 | If you chose a different IP address instead of an FQDN for the new server, reviewing the SSO configuration after backup restore is mandatory — manually recreate it with the updated response URL, or raise a Netwrix Support case. |

## Post-Migration Stability

| # | Best Practice |
|---|---|
| 42 | Don't apply server patches immediately after backup restore — the import process can disrupt the patch pipeline. Allow 24 hours before patching. |
| 43 | Observe the migrated server's CPU, RAM, and disk usage closely during the first 24 hours. Temporary peaks are normal — background cron jobs, database schema alignment, and log reindexing tasks continue running. Don't treat elevated resource usage alone as a failure indicator during this window. |
| 44 | Monitor Audit Log Backup jobs after migration — they can enter an infinite running state. Verify job completion before scheduling recurring backups. |
| 45 | For air-gapped / offline environments, obtain the Offline Activation Patch for 2608 before the maintenance window begins — request it from Netwrix Support in advance. **2510/2604 path:** request the Offline Activation Patch for 2510 instead. |
| 46 | After a mass client reinstall or extended communication outage, expect a temporary CPU spike when clients resume communication — machines request settings, rights, and policies simultaneously, and deliver any backlog of blocked logs. Spike severity scales with fleet size and the configured **Policy Refresh Interval** (see [Client Settings](/docs/endpointprotector/admin/dc_module/globalsettings.md#client-settings)). |
| 47 | Stagger mass client reinstalls or reconnections in batches rather than restoring communication for the entire fleet at once — this reduces peak server load during resynchronization. |
| 48 | Don't assume a coinciding SIEM or Audit issue is the cause of a CPU spike without evidence — both operate independently of client check-in load. |
| 49 | If migrating from an older server version, review your SIEM parser configuration against the current syslog export content — recent releases added new fields and data to the export, and an outdated parser may not capture them. |
