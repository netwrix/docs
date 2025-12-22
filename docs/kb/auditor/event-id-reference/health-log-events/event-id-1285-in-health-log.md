---
description: >-
  Describes the cause and resolution for Event ID 1285 ("Web site %URL% cannot
  be found") in the Health Log for a SharePoint monitoring plan.
keywords:
  - Event ID 1285
  - Health Log
  - SharePoint
  - Monitoring plan
  - Read Access
  - Sites only
  - Sites and subsites
  - URL cannot be found
products:
  - auditor
sidebar_label: Event ID 1285 in Health Log
tags: []
title: "Event ID 1285 in Health Log"
knowledge_article_id: kA00g000000H9d9CAC
---

# Event ID 1285 in Health Log

## Symptom

The following error message under Event ID 1285 is prompted in Health Log for your SharePoint monitoring plan:

```text
Web site %URL% cannot be found
```

## Cause

Wrong URL was added to the read scope, or the object available via the URL is invalid.

## Resolution

1. Navigate to **Monitoring Plans** > **%affected_SharePoint_plan%** > **Edit**.
2. Select the item, and click **Edit item** in the right pane.
3. In the left pane, select **Read Access**, and select **Sites only** or **Sites and subsites** depending on the monitoring scope.
4. Add a URL for the SharePoint site you would like to monitor. Verify the URL to confirm it is valid and can be accessed via the specified URL.
