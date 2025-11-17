---
description: >-
  Event ID 1209 occurs when Netwrix Auditor cannot obtain SharePoint groups for
  a site collection due to permission or lock status issues. This article
  explains causes and resolutions.
keywords:
  - Event ID 1209
  - Health Log
  - SharePoint
  - site collection
  - Access Denied
  - Manage Web Site
  - Locked — No Access
  - Configure Quotas and Locks
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Event ID 1209 in Health Log
tags: []
title: "Event ID 1209 in Health Log"
knowledge_article_id: kA00g000000H9dCCAS
---

# Event ID 1209 in Health Log

## Symptom

One of the following error messages under Event ID 1209 appears in the Health Log for your SharePoint monitoring plan:

```text
Unable to obtain the list of SharePoint groups for site collection with ID '{0}':
Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED)).
```

```text
Unable to obtain the list of SharePoint groups for site collection with ID '{0}':
Access to this Web site has been blocked.
```

## Causes

The security settings in the audited SharePoint farm do not allow for complete audit data collection. Netwrix Auditor was unable to get a list of security groups from the audited site collection due to one of the following reasons:

1. The web application hosting the target site collection has insufficient permissions.
2. The affected site collection has the **Locked — No Access** status.

## Resolutions

1. Cause #1 − In SharePoint Central Administration, navigate to **Web Applications** > **`%affected_web_application%`** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.
2. Cause #2 − In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **`%affected_web_application%`**, and change the status to **Not locked**.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
