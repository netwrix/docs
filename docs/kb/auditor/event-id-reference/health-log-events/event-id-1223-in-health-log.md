---
description: >-
  This article explains Event ID 1223 in the Health Log for SharePoint
  monitoring plans and provides causes and step-by-step resolutions for the
  "Email delivery to recipient %recepient% failed." error.
keywords:
  - Event ID 1223
  - Health Log
  - SharePoint
  - SMTP
  - Email delivery
  - Notifications
  - Monitoring plan
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Event ID 1223 in Health Log
tags: []
title: "Event ID 1223 in Health Log"
knowledge_article_id: kA00g000000H9ctCAC
---

# Event ID 1223 in Health Log

## Symptom

You see the following error message under Event ID 1223 in the Health Log for your SharePoint monitoring plan:

```
Email delivery to recipient %recepient% failed.
```

## Causes

1. The SMTP server is unreachable or the SMTP settings specified in Netwrix Auditor are incorrect.
2. The recipient is unreachable or does not exist.

## Resolutions

- Cause #1 − Verify the SMTP settings in Netwrix Auditor. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Auditor Settings − Notifications · v10.6).

- Cause #2 − Verify the `recepient` details in the affected SharePoint monitoring plan.

  1. Navigate to **Monitoring Plans** > select **%affected_SharePoint_monitoring_plan%** and click **Edit** > click **Edit settings** under the **Monitoring plan** section.
  2. In the **Notifications** tab, verify the `recepients`. When adding a `recepient`, click **Send Test Email** to confirm the email was specified correctly.

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 Auditor Settings − Notifications · v10.6)
