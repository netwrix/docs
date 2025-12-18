---
description: >-
  This article explains Event ID 1239 in the Health Log for a SharePoint
  monitoring plan, including the cause and steps to configure audit log trimming
  to the recommended 7 days.
keywords:
  - Event ID 1239
  - Health Log
  - SharePoint
  - audit log trimming
  - monitoring plan
  - audit settings
  - retention
  - Site Collection Audit Settings
products:
  - auditor
sidebar_label: Event ID 1239 in Health Log
tags: []
title: "Event ID 1239 in Health Log"
knowledge_article_id: kA00g000000H9cuCAC
---

# Event ID 1239 in Health Log

## Symptom

The following error message under Event ID 1239 is prompted in Health Log for your SharePoint monitoring plan:

```text
The Audit log trimming setting for some SharePoint sites is not configured correctly.
The recommended period is 7 days.
```

## Cause

The audit log trimming setting for the site collection is turned off or exceeds 7 days.

## Resolution

1. In the affected site collection, navigate to **Site Settings** > **Site Collection Audit Settings** > **Audit Log Trimming**.
2. Set the **Automatically trim the audit log** option to **Yes**. Set the log retention to 7 days in the **Specify the number of days of audit log data to retain** field. Save the changes.
3. Update the monitoring plan − select the affected monitoring plan, click **Edit**, and click **Update** in the right pane.

> **NOTE:** Verify the audit settings are set to be adjusted automatically − in the SharePoint monitoring plan, click **Edit data source** and check the **Configure audit settings** checkbox. Save the changes.
