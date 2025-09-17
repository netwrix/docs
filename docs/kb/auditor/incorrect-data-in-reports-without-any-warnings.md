---
description: >-
  If reports show no data or the `System` value in the **Who** column while
  Netwrix Auditor System Health shows no errors, this article explains possible
  causes and resolutions related to the Security event log on the file server.
keywords:
  - Security event log
  - Who column
  - empty reports
  - Event ID 521
  - overwrite events
  - System Health
  - gpresult
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Incorrect data in reports without any warnings
tags: []
title: "Incorrect data in reports without any warnings"
knowledge_article_id: kA00g000000H9dNCAS
---

# Incorrect data in reports without any warnings

You receive reports containing no information or the `System` value in the **Who** column, and there are no errors or warnings in the Netwrix Auditor System Health log.

---

## Possible cause

The possible cause of this issue is the Security event log on the file server:

- The Security event log is not populated with new events.
- The Security event log was relocated.

---

## Resolution

- If you changed the Security event log location and did not reboot your file server, the system services may fail to update their settings based on the updated configuration. Therefore, you must reboot your file server.
- If you did not relocate the Security event log, perform one of the following to resolve the issue:
  - Open the Security event log using the **Event Viewer**. If the log is corrupted or contains events with ID `521`, this may indicate that there is not enough free disk space to store new information. Provide more disk space and clear the log. Refer to the The disk on a monitored file server is overfilled knowledge base article for more information: https://kb.netwrix.com/1262
  - Make sure that either the **Overwrite events as needed** retention method is selected, or the Security log automatic archiving option is enabled: https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview
  - Verify with the `gpresult` tool if your settings are being overwritten by Group Policies.
