---
description: >-
  Explains Event ID 1259 in the Health Log for a SharePoint monitoring plan, its
  cause, and how to restart data collection to resolve the issue.
keywords:
  - Event ID 1259
  - Health Log
  - SharePoint
  - Monitoring plan
  - Data collection
  - Netwrix Auditor
  - snapshot
  - error
products:
  - auditor
sidebar_label: Event ID 1259 in Health Log
tags: []
title: "Event ID 1259 in Health Log"
knowledge_article_id: kA00g000000H9clCAC
---

# Event ID 1259 in Health Log

## Symptom

The following error message under Event ID 1259 is prompted in Health Log for your SharePoint monitoring plan:

```
Unable to report changes correctly, as the previous configuration snapshot has been removed or is partially invalid
```

## Cause

This issue occurs when you launch the data collection manually while the initial data collection process is already in progress after creating the monitoring plan. This has led to data collection failure.

## Resolution

Restart the data collection:

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**  
2. Select ` %SharePoint_plan% `  
3. Click **Edit**  
4. Click **Update**
