---
description: >-
  Summarizes the most common issues encountered after migrating the Netwrix
  Endpoint Protector Server to the current image-based platform (2510/2604),
  grouped by EPP Server and EPP Client, with links to the full troubleshooting
  guide for each.
keywords:
  - Endpoint Protector
  - migration
  - troubleshooting
  - EPP Server
  - EPP Client
  - post-migration issues
  - upgrade
products:
  - endpointprotector
sidebar_label: Troubleshooting Common Post-Migration Issues
tags:
  - deployment-and-installation
  - kb
title: "Troubleshooting Common Issues After EPP Server Migration"
knowledge_article_id: kA0Qk0000000000AAA
---

# Troubleshooting Common Issues After EPP Server Migration

## Overview

After migrating the Netwrix Endpoint Protector (EPP) Server from a legacy 5.x version to the current image-based platform (2510 with patch 2604), you may encounter a number of known, documented issues. This article summarizes the most common ones by symptom, grouped by whether they affect the EPP Server or the EPP Client, so you can quickly identify which applies to your situation.

For the full symptom, cause, and resolution details for each issue, see [Migration Troubleshooting](/docs/endpointprotector/install/migrationprocedure/troubleshooting) in the EPP Server Migration & Upgrade Guide.

## EPP Server Issues

- **High CPU usage after a mass client reinstall or reconnect** — expected, temporary, and self-resolving. See [High CPU Usage After Mass Client Reconnect](/docs/endpointprotector/install/migrationprocedure/troubleshooting#high-cpu-usage-after-mass-client-reconnect).
- **Backup restore fails or is rejected by the server** — usually means the backup wasn't created on exactly version 5.9.4.2. See [Backup Restore Fails or Is Rejected by the Server](/docs/endpointprotector/install/migrationprocedure/troubleshooting#backup-restore-fails-or-is-rejected-by-the-server).
- **Network/IP settings won't save on 2510** — a known bug requiring both DNS fields to be filled. See [Network Settings Won't Save on 2510](/docs/endpointprotector/install/migrationprocedure/troubleshooting#network-settings-wont-save-on-2510).
- **Backup file exceeds the 200 MB import limit** — See [Backup File Exceeds 200 MB Import Limit](/docs/endpointprotector/install/migrationprocedure/troubleshooting#backup-file-exceeds-200-mb-import-limit).
- **SIEM not receiving events after migration** — See [SIEM Integration Not Receiving Events](/docs/kb/endpointprotector/troubleshooting-and-errors/siem-integration-not-receiving-events).
- **Audit Log Backup job stuck or needs to be reset** — See [Cleaning Up and Recreating an Audit Configuration](/docs/kb/endpointprotector/troubleshooting-and-errors/cleaning-up-and-recreating-an-audit-configuration).
- **Predefined HIPAA dictionaries stop working after a server hostname/IP change** — See [Predefined HIPAA Dictionaries Stop Working After Migration](/docs/endpointprotector/install/migrationprocedure/troubleshooting#predefined-hipaa-dictionaries-stop-working-after-migration).
- **Recurring HTTP 500 errors resolved only by a full reboot** — typically an undersized-server issue, not a one-time import failure. See [Recurring HTTP 500 Errors Resolved Only by a Full Reboot](/docs/kb/endpointprotector/troubleshooting-and-errors/recurring-http-500-errors-resolved-only-by-a-full-reboot).
- **SSO login fails after migration when the new server uses an IP address instead of an FQDN** — reviewing the SSO configuration after restore is mandatory in this case. See [SSO Login Fails After Migration When the Server Uses an IP Address Instead of an FQDN](/docs/endpointprotector/install/migrationprocedure/troubleshooting#sso-login-fails-after-migration-when-the-server-uses-an-ip-address-instead-of-an-fqdn).
- **Content Aware Protection (CAP) policies don't trigger after migration** — in rare cases, editing and re-saving the affected policy redistributes it and resolves the issue. See [CAP Policies Not Triggering After Migration](/docs/endpointprotector/install/migrationprocedure/troubleshooting#cap-policies-not-triggering-after-migration).

## EPP Client Issues

- **Enforced Encryption (EE) clients can't connect after migration** — typically caused by an IP/FQDN change. See [EE Clients Can't Connect After Migration](/docs/endpointprotector/install/migrationprocedure/troubleshooting#ee-clients-cant-connect-after-migration).
- **Endpoints not checking in after migration** — See [Endpoints Not Checking In After Migration](/docs/endpointprotector/install/migrationprocedure/troubleshooting#endpoints-not-checking-in-after-migration).
- **Endpoints not upgrading via the EPP Server Client Upgrade tool** — See [Endpoints Not Upgrading via EPP Server Client Upgrade tool](/docs/endpointprotector/install/migrationprocedure/troubleshooting#endpoints-not-upgrading-via-epp-server-client-upgrade-tool).
- **Policies update fails on a Windows 11 EPP Client with a code signature verification error** — See [Policies Update Fails on Windows 11 EPP Client (Code Signature Verification Error)](/docs/endpointprotector/install/migrationprocedure/troubleshooting#policies-update-fails-on-windows-11-epp-client-code-signature-verification-error).

:::tip
If your issue isn't covered here or in the full troubleshooting guide, also check the [Migration FAQ](/docs/endpointprotector/install/migrationprocedure/faq) for additional known issues and answers, or the [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide) for the complete migration procedure.
:::
