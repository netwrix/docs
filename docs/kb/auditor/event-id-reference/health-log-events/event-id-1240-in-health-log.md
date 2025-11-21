---
description: >-
  Explains causes and resolutions for Event ID 1240 in the Health Log for a
  SharePoint monitoring plan, including permission and site collection lock
  status steps and a PowerShell reference.
keywords:
  - Event ID 1240
  - Health Log
  - SharePoint
  - site collection
  - Manage Web Site
  - Configure Quotas and Locks
  - site lock
  - PowerShell
products:
  - auditor
sidebar_label: Event ID 1240 in Health Log
tags: []
title: "Event ID 1240 in Health Log"
knowledge_article_id: kA00g000000H9cxCAC
---

# Event ID 1240 in Health Log

## Symptoms

The following error message under Event ID 1240 is prompted in Health Log for your SharePoint monitoring plan:

```
Unable to get site collection configuration to site collection %site_collection%
```

## Causes

- The web application hosting the target site collection was granted insufficient permissions.
- The audited site collection status is **No Access**.

## Resolutions

Review the resolution steps for the corresponding error:

1. In SharePoint Central Administration, navigate to **Web Applications** > ` %affected_application% ` > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.
2. In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > ` %affected_site_collection% `, and change the status to `Not locked`.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
