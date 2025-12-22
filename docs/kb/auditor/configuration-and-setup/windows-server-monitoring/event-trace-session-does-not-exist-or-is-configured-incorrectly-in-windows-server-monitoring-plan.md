---
description: >-
  You encounter Event ID 1016 errors indicating "The event trace session does
  not exist or is configured incorrectly" in a Netwrix Auditor Windows Server
  monitoring plan. This article explains the possible causes and steps to
  resolve the issue, including adjusting event log settings and excluding
  removable media/hardware from monitoring on virtual machines.
keywords:
  - event trace session
  - Event ID 1016
  - Windows Server
  - event log
  - Netwrix Auditor
  - monitoring plan
  - virtual machine
  - removable media
  - Windows Server Audit Service
products:
  - auditor
sidebar_label: Event Trace Session Does Not Exist or Is Configure
tags: []
title: "Event Trace Session Does Not Exist or Is Configured Incorrectly in Windows Server Monitoring Plan"
knowledge_article_id: kA04u00000111AJCAY
---

# Event Trace Session Does Not Exist or Is Configured Incorrectly in Windows Server Monitoring Plan

## Symptom

You've encountered the following error in Health Log for your Windows Servers monitoring plan:

```text
Source:Windows Server Audit Service
Event ID:1016
User:N/A
Item: %computer_name%
On %date% %time%, the following error has occurred while processing %item%:
The event trace session does not exist or is configured incorrectly
```

## Causes

- Security event log settings are misconfigured.
- The affected monitored %item% server is a virtual machine. Changes monitored in the server include removable media.

## Resolutions

- Review event log settings — refer to the following article for additional information: Windows Server — Adjusting Event Log Size and Retention Settings ⸱ v10.7. For additional information on Windows Server audit setup, refer to the following article: Configuration — Windows Server ⸱ v10.7.

- Review the monitored changes to system components for the affected VM server:

  1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**, select the monitoring plan containing the affected server, and click **Edit**.
  2. In the right pane, click **Edit data source** under the **Data source** section.
  3. Under the **Monitor changes to system components** section, uncheck the **Removable media** and **Hardware** checkboxes. Click **Save & Close**.
  4. Click **Update** under the **Monitoring plan** section.

## Related articles

- Windows Server — Adjusting Event Log Size and Retention Settings ⸱ v10.7
- Configuration — Windows Server ⸱ v10.7
