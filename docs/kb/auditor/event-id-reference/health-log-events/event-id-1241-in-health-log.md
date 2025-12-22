---
description: >-
  Describes Event ID 1241 in the Health Log for a SharePoint monitoring plan and
  explains how to enable the Editing users and permissions audit to prevent lost
  read access events.
keywords:
  - Event ID 1241
  - Health Log
  - SharePoint
  - audit settings
  - Editing users and permissions
  - Site Collection Audit Settings
  - monitoring plan
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Event ID 1241 in Health Log
tags: []
title: "Event ID 1241 in Health Log"
knowledge_article_id: kA00g000000H9csCAC
---

# Event ID 1241 in Health Log

## Symptom

The following error message under Event ID 1241 is prompted in Health Log for your SharePoint monitoring plan:

```text
Audit settings for security events in site collection %item_ID% are not configured properly.
As a result, some read access events may be lost.
```

## Cause

The `Editing users and permissions` audit is disabled for the site collection.

## Resolution

1. In the affected site collection, navigate to **Site Settings** > **Site Collection Administration** > **Site Collection Audit Settings**.
2. Check the **Editing users and permissions** checkbox under the **Lists, Libraries, and Sites** section. Save the changes.
3. Update the monitoring plan − select the affected monitoring plan, click **Edit**, and click **Update** in the right pane.

> NOTE: Verify the audit settings are set to be adjusted automatically − in the SharePoint monitoring plan, click **Edit data source** and check the **Configure audit settings** checkbox. Save the changes.
