---
description: >-
  If Netwrix Auditor sends email alerts but not SMS, collect the AlertsSender
  verbose logs and the NwArchiveSvc logs as described so Netwrix Support can
  troubleshoot SMS alert delivery.
keywords:
  - Netwrix Auditor
  - SMS
  - alerts
  - logs
  - AlertsSender.ini
  - NwArchiveSvc
  - Audit Core
  - verbose logging
  - troubleshooting
products:
  - auditor
sidebar_label: Logs to Collect for Netwrix Auditor SMS Alert Issu
tags: []
title: "Logs to Collect for Netwrix Auditor SMS Alert Issues"
knowledge_article_id: kA0Qk0000000ZdhKAE
---

# Logs to Collect for Netwrix Auditor SMS Alert Issues

## Qusetion

Netwrix Auditor does not send SMS alerts, while email alerts work fine. What logs should be collected and provided to the Netwrix support team to troubleshoot the issue?

## Answer

Follow the steps below to collect the necessary logs:

1. On the Auditor Server, locate the **Audit Core** folder (by default, `C:\Program Files (x86)\Netwrix Auditor\Audit Core`).
2. In the **Audit Core** folder, locate the `GlobalSettings.ini` file.
3. Copy this file to the desktop and rename the copy to `AlertsSender.ini`.
4. Open the `AlertsSender.ini` file with any text editor, for example, **Notepad++**, and find the `MaxSeverity` line.
5. Change the value on this line from `INFO` to `DBG`.
6. Save the `AlertsSender.ini` file, and then copy it back into the **AuditCore folder**. The `AlertsSender.ini` file is required for the AlertsSender process to generate logs.
7. Open the **Services** snap-in and restart the **Netwrix Auditor Core Service** and the **Netwrix Auditor Archive Service**.
8. Make a test change to trigger the affected alert, then go to the associated monitoring plan and click **Update**. This should help trigger the alert. Also, you can wait for the product to process the data (approximately 24 hours).
9. Once you have allowed enough time through either test changes or natural events, locate the **NwArchiveSvc** folder (default location is `C:\ ProgramData\Netwrix Auditor\Logs\AuditCore`).
10. Copy the **NwArchiveSvc** folder to another location, compress it, and attach it to the corresponding ticket in the Netwrix Customer Portal: https://www.netwrix.com/sign_in.html.
11. When done, remove the `AlertsSender.ini` file from the **AuditCore** folder.
12. Restart the **Netwrix Auditor Core Service** and the **Netwrix Auditor Archive Service** again to stop verbose logging once testing is complete.
