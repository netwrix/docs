---
description: >-
  Explains Event ID 1255 ("Site collection %URL% cannot be found.") in the
  Health Log for a SharePoint monitoring plan and provides causes and steps to
  resolve it.
keywords:
  - Event ID 1255
  - Health Log
  - SharePoint
  - site collection
  - monitoring plan
  - Locked — No Access
  - Configure Quotas and Locks
  - Not locked
  - Monitoring Plans
products:
  - auditor
sidebar_label: Event ID 1255 in Health Log
tags: []
title: "Event ID 1255 in Health Log"
knowledge_article_id: kA00g000000H9ckCAC
---

# Event ID 1255 in Health Log

## Symptom

The following error message under Event ID 1255 is prompted in Health Log for your SharePoint monitoring plan:

```text
Site collection %URL% cannot be found.
```

## Causes

1. An invalid site collection URL was specified during the monitoring plan creation.  
2. The affected site collection has the **Locked — No Access** status.

## Resolution

- Cause #1
  1. Navigate to **Monitoring Plans**.
  2. Select the **%affected_SP_monitoring_plan%** and click **Edit**.
  3. Click **Edit item** in the right pane.
  4. In the **Changes** tab, verify the affected collection URL under the **Specific SharePoint objects** section.

- Cause #2
  1. In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks**.
  2. Select **%affected_collection%** and change the status to **Not locked**.
