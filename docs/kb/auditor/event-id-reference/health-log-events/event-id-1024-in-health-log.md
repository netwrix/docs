---
description: >-
  Explains how to resolve Event ID 1024 "Email delivery failed." in the Netwrix
  Auditor Health Log for SharePoint monitoring plans by regenerating the
  Activity Summary and collecting logs for support.
keywords:
  - Event ID 1024
  - Health Log
  - SharePoint
  - Activity Summary
  - Email delivery failed
  - Netwrix Auditor
  - logs
  - wevtutil
products:
  - auditor
sidebar_label: Event ID 1024 in Health Log
tags: []
title: "Event ID 1024 in Health Log"
knowledge_article_id: kA00g000000H9YmCAK
---

# Event ID 1024 in Health Log

## Symptom

Your SharePoint monitoring plan prompts the following error message under Event ID 1024 in Health Log:

```
Email delivery failed.
```

## Cause

An internal error occurred during the Activity Summary generation.

## Resolution

Regenerate the Activity Summary:

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
2. In the left pane, select your SharePoint monitoring plan and click **Edit**.
3. In the right pane, click **Update**.

> **IMPORTANT:** If the error persists, create a ticket in [My Tickets · Netwrix](https://www.netwrix.com/tickets.html#/tickets/open) and submit the following files from the Auditor server to Netwrix Support:
>
> - All contents of the following path:
>
> ```text
> \%WorkingFolder%\Logs\SharePoint Auditing
> ```
>
> The default Working Folder path is `C:\ProgramData\Netwrix Auditor`. If unsure, in the main Auditor menu, select **Health Status** > **Open diagnostic logs folder** under the **Working Folder** pane.
>
> - Netwrix Auditor System Health event log. Run the following command in elevated Command Prompt:
>
> ```batch
> wevtutil epl "Netwrix Auditor" %userprofile%\desktop\NASH.evtx
> ```
>
> Refer to the following article for additional information for an option to manually save the Auditor event log: [How to Save and Zip Netwrix Auditor System Health Event Log](/docs/kb/auditor/monitoring-plans/event-log-management/how-to-save-and-zip-netwrix-auditor-system-health-event-log).

## Related articles

- [How to Save and Zip Netwrix Auditor System Health Event Log](/docs/kb/auditor/monitoring-plans/event-log-management/how-to-save-and-zip-netwrix-auditor-system-health-event-log)
- [My Tickets · Netwrix](https://www.netwrix.com/tickets.html#/tickets/open)
