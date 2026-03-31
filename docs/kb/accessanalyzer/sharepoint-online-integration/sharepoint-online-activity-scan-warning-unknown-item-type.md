---
description: >-
  When you run SPAC System Scans for SharePoint Online, an "Unknown item type"
  warning can appear in Netwrix Access Analyzer. This article explains the cause
  and provides three resolutions: ignore the warning, upgrade, or disable
  collection of Other events in Netwrix Activity Monitor.
keywords:
  - SharePoint Online
  - SPAC
  - Unknown item type
  - Netwrix Access Analyzer
  - Netwrix Activity Monitor
  - System Scan
  - Other events
  - data collection
  - warning
products:
  - activitymonitor
  - access-analyzer
sidebar_label: 'Sharepoint Online Activity Scan Warning: Unknown I'
tags: []
title: 'Sharepoint Online Activity Scan Warning: Unknown Item Type'
knowledge_article_id: kA0Qk00000020K5KAI
---

# Sharepoint Online Activity Scan Warning: Unknown Item Type

## Symptom

When you run SPAC System Scans for SharePoint Online in **Netwrix Access Analyzer** (NAA), the system generates the following error message:

```
[8] Unknown item type
```

## Cause

This issue occurs because these are newer event types being collected by **Netwrix Activity Monitor** for which NAA does not have mappings.

## Resolutions

To address this issue, you can do one of the following:

- Ignore the warnings, as they do not inhibit data collection.

- Upgrade to the latest version of **Netwrix Access Analyzer (NAA)**, which should include all SharePoint Online activity types known up until the most recent release date.

  > **NOTE:** If you are on the latest released version of NAA and are still encountering this issue, please submit an escalation to have new event types added to a future release.

- Disable the collection of **Other event types** in **Netwrix Activity Monitor**:

  1. Open **Netwrix Activity Monitor** and navigate to the SharePoint Online file output in the **Monitored Hosts** tab.
  2. On the **Other** tab, uncheck the **Other events** option:
     ![SharePoint Online Other events option screenshot](../0-images/ka0Qk000000CnwD_0EMQk00000BF8bi.png)
