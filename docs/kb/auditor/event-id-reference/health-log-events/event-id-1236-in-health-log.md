---
description: >-
  Explains Event ID 1236 in the Health Log where Netwrix Auditor cannot parse a
  SharePoint event due to a site collection locked as "Locked — No Access", and
  shows how to resolve it by unlocking the site collection.
keywords:
  - Event ID 1236
  - Health Log
  - SharePoint
  - site lock
  - Locked — No Access
  - Unable to parse the following event
  - Netwrix Auditor
  - Configure Quotas and Locks
  - PowerShell
products:
  - auditor
sidebar_label: Event ID 1236 in Health Log
tags: []
title: "Event ID 1236 in Health Log"
knowledge_article_id: kA00g000000H9cvCAC
---

# Event ID 1236 in Health Log

## Symptom

The following error message under Event ID 1236 is prompted in Health Log for your SharePoint monitoring plan:

```text
Unable to parse the following event: %event_data%. Skip this event.
```

## Cause

Netwrix Auditor was unable to parse changes in a target site collection due to the **Locked — No Access** status.

## Resolution

1. In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **`%affected_web_application%`**.
2. Change the status to **Not locked**.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
