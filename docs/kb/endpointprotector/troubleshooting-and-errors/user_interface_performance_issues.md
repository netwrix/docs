---
description: >-
  This article addresses performance issues related to the Endpoint Protector Console/User Interface, detailing symptoms, causes, and resolutions.
keywords:
  - Endpoint Protector
  - performance issues
  - troubleshooting
sidebar_label: User Interface Performance Issues
tags:
  - troubleshooting-and-errors
  - kb
title: "User Interface Performance Issues"
knowledge_article_id: kA0Qk0000002B6GKAU
products:
  - endpointprotector
---

# User Interface Performance Issues

## Symptom

The Endpoint Protector Console/User Interface is experiencing issues and other performance concerns.

## Causes

1. **Large number of logs or file shadows on the Endpoint Protector server.**
2. **Backend services being affected or disrupted.**
3. **Insufficient disk space on the server.**
4. **Insufficient CPU cores and RAM allocated to the server**, or a server that no longer meets the minimum sizing requirements.
5. **Endpoint Protector Server upgrades or audit log backups running.** Performance can decrease during upgrades or backup operations.
6. **Running older Endpoint Protector Server and Client versions.**
7. **Third-party antivirus, EDR, or HIPS software scanning EPP Client or Server processes and files.** Security software that isn't configured with the required exclusions can compete with Endpoint Protector for CPU and RAM, and cause timeouts.

## Resolutions

1. **Large Number of Logs or File Shadows**
   1. Check **Appliance** > **Server Information** for the number of logs and file shadows.
   2. Delete older or unnecessary logs or archive them using the [Audit Log Backup](/docs/endpointprotector/admin/systemmaintenance/overview#audit-log-backup) functionality.
   3. Externalize logs using the [File Shadow Repository](/docs/endpointprotector/admin/systemmaintenance/shadowrepository) or [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration) functionality.

2. **Backend Services Being Affected**
   1. Reboot the Endpoint Protector server from [Appliance Operations](/docs/endpointprotector/admin/appliance#appliance-operations) (**Appliance** > **Server Maintenance**) or from your hosting platform (VM, AWS, Azure, GCP).
   2. If the server returns HTTP 500 errors that only clear after a full reboot and recur every few days, this is often a sizing issue rather than a one-off glitch. See [Recurring HTTP 500 Errors Resolved Only by a Full Reboot](/docs/kb/endpointprotector/troubleshooting-and-errors/recurring-http-500-errors-resolved-only-by-a-full-reboot).

3. **Disk Space Issues**
   1. Review [Server Information](/docs/endpointprotector/admin/appliance#server-information) for disk space details.
   2. Remove unnecessary files and raise a support ticket for investigation if necessary.
   3. If hosted on your end (VM, AWS, Azure, GCP), allocate extra disk space and contact support for disk resizing.

4. **Resource Issues**
   1. Compare your current CPU, RAM, and disk allocation against [Server Requirements](/docs/endpointprotector/requirements/server) — an undersized appliance is a common root cause of both general UI slowness and recurring server errors.
   2. If hosted on your end (VM, AWS, Azure, GCP), add extra CPU cores and RAM.
   3. Contact support via a support ticket to allocate additional resources on the Endpoint Protector server.

5. **Endpoint Protector Server Upgrades or Audit Log Backups Running**
   1. Expect temporary UI performance decrease during and shortly after these processes.
   2. During the first 24 hours after a migration or major upgrade, temporary CPU/RAM/disk peaks are normal while background cron jobs and database schema alignment tasks complete. See [Post-Migration Stability](/docs/endpointprotector/install/migrationprocedure/bestpractices) in the Migration Best Practices for details.

6. **Running Older Endpoint Protector Server and Client Versions**
   1. Always use the latest Endpoint Protector server and client versions available as a best practice. See [Netwrix Endpoint Protector Server-Side Support Policy](/docs/endpointprotector/supportability/server-supportability) and [Netwrix Endpoint Protector Agent Support Policy](/docs/endpointprotector/supportability/client-supportability) for supported version tracks, and the [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide) if you're on a version older than 5.9.4.2.

7. **Third-Party Security Software Interference**
   1. Configure the required file, process, and registry exclusions for your antivirus, EDR, or HIPS solution. See [Security Exclusions](/docs/endpointprotector/requirements/client#security-exclusions) for the complete list for Windows, macOS, and Linux.
   2. Reboot the affected endpoint after applying exclusions before escalating further.

## Related Links

- [Server Requirements](/docs/endpointprotector/requirements/server)
- [Security Exclusions](/docs/endpointprotector/requirements/client#security-exclusions)
- [Netwrix Endpoint Protector Server-Side Support Policy](/docs/endpointprotector/supportability/server-supportability)
- [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide)