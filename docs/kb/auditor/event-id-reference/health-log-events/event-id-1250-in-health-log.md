---
description: >-
  Health Log shows Event ID 1250 when a SharePoint web application URL in a
  monitoring plan is invalid. This article explains the cause and steps to
  correct the URL in the monitoring plan.
keywords:
  - Event ID 1250
  - Health Log
  - SharePoint
  - monitoring plan
  - web application URL
  - Netwrix Auditor
  - Specific SharePoint objects
  - error
  - troubleshooting
products:
  - auditor
sidebar_label: Event ID 1250 in Health Log
tags: []
title: "Event ID 1250 in Health Log"
knowledge_article_id: kA00g000000H9ciCAC
---

# Event ID 1250 in Health Log

## Symptom

The following error message under Event ID 1250 is prompted in Health Log for your SharePoint monitoring plan:

```text
Web application %URL% cannot be found.
```

## Cause

An invalid web application URL was specified during monitoring plan creation.

## Resolution

1. Navigate to **Monitoring Plans** > select the **`%affected_SP_monitoring_plan%`** and click **Edit** > click **Edit item** in the right pane.
2. In the **Changes** tab, verify the affected web application URL under the **Specific SharePoint objects** section. Make sure the web application has not been deleted from the audited SharePoint farm.
