---
description: >-
  Explains how to safely clean up a stuck or unresponsive Audit Log Backup
  configuration on the Netwrix Endpoint Protector Server and recreate it,
  including how to back up log files before removing them.
keywords:
  - Endpoint Protector
  - Audit Log Backup
  - audit configuration
  - troubleshooting
  - backend access
  - SSH
  - log cleanup
  - disk space
products:
  - endpointprotector
sidebar_label: Cleaning Up and Recreating an Audit Configuration
tags:
  - troubleshooting-and-errors
  - kb
title: "Cleaning Up and Recreating an Audit Configuration"
knowledge_article_id: kA0Qk0000000000AAC
---

# Cleaning Up and Recreating an Audit Configuration

## Symptom

The Audit Log Backup job on the Netwrix Endpoint Protector Server is stuck, unresponsive, or otherwise needs to be reset, and you need to recreate the Audit configuration.

## Resolution

Clean up the existing Audit configuration and set up a new one.

:::note
The following steps require backend (SSH) access to the EPP Server. If you do not have backend access, contact Netwrix Support and request that they perform this cleanup on your behalf.
:::

Before cleanup, back up any audit-related files so no log data is lost:

1. If server disk space allows, move the files under `/tmp` related to the audit export (filenames starting with `cflog_initial`) to a secure, external location.
2. After confirming the backup, delete these files from `/tmp` to free disk space.
3. To reclaim additional disk space, remove the oldest directories under `/var/eppfiles/logbackup/jsdata/` (named `logs_<timestamp>`), keeping only what your retention policy requires.
4. Recreate the Audit configuration from **System Maintenance → Audit Log Backups** in the Endpoint Protector Console.

:::warning
Back up files before deleting them from `/tmp`. Deleting `cflog_initial*` files without a backup permanently discards any log data they contain.
:::

## Related Links

- [Audit Log Backup](/docs/endpointprotector/admin/systemmaintenance/overview#audit-log-backup)
- [User Interface Performance Issues](/docs/kb/endpointprotector/troubleshooting-and-errors/user_interface_performance_issues)
- [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide)
