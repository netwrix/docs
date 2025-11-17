---
description: >-
  Describes Event ID 1287 in the Health Log that indicates read-access audit
  settings are not configured for a SharePoint site collection, and provides
  steps to enable the required audit settings and update the monitoring plan.
keywords:
  - SharePoint
  - Health Log
  - Event ID 1287
  - audit settings
  - site collection
  - monitoring plan
  - read access
  - audit
products:
  - auditor
sidebar_label: Event ID 1287 in Health Log
tags: []
title: "Event ID 1287 in Health Log"
knowledge_article_id: kA00g000000H9d2CAC
---

# Event ID 1287 in Health Log

## Symptom

The following error message under Event ID 1287 is prompted in Health Log for your SharePoint monitoring plan:

```
Audit settings for read access events in site collection %item_ID% are not configured properly. As a result, some read access events may be lost.
```

## Cause

The opening or downloading documents, viewing items and lists, or viewing item properties audit is disabled for the site collection.

## Resolution

1. In the affected site collection, navigate to **Site Settings** > **Site Collection Administration** > **Site Collection Audit Settings**.
2. Check the **Opening or downloading documents, viewing items and lists, or viewing item properties** checkbox under the **Documents and Items** section. Save the changes.
3. Update the monitoring plan − select the affected monitoring plan, click **Edit**, and click **Update** in the right pane.

> **NOTE:** Verify the audit settings are set to be adjusted automatically − in the SharePoint monitoring plan, click **Edit data source** and check the **Configure audit settings** checkbox. Save the changes.
