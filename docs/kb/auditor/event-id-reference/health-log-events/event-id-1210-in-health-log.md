---
description: >-
  Explains Event ID 1210 entries in the Health Log for SharePoint monitoring
  plans and provides causes and resolutions for the two common error messages.
keywords:
  - Event ID 1210
  - Health Log
  - SharePoint
  - permission levels
  - Manage Web Site
  - site collection lock
  - Netwrix Auditor
  - access denied
products:
  - auditor
sidebar_label: Event ID 1210 in Health Log
tags: []
title: "Event ID 1210 in Health Log"
knowledge_article_id: kA00g000000H9cSCAS
---

# Event ID 1210 in Health Log

## Symptoms

One of the following error messages under Event ID 1210 is prompted in Health Log for your SharePoint monitoring plan:

1. Error 1:

```text
Unable to obtain the list of SharePoint roles for site collection with ID '{0}':
Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))
```

2. Error 2:

```text
Unable to obtain the list of SharePoint roles for site collection with ID '{0}':
Access to this web site has been blocked
```

## Causes

1. Error 1: The security settings in the audited SharePoint farm do not allow Netwrix Auditor to collect complete audit data. Netwrix Auditor is unable to get a list of permission levels for the audited site collection due to insufficient permissions for the web application hosting the target site collection.

2. Error 2: The security settings in the audited SharePoint farm do not allow Netwrix Auditor to collect complete audit data. Netwrix Auditor is unable to get a list of permission levels for the audited site collection due to the **No Access** status.

## Resolutions

Review the resolution for the corresponding error:

1. Error 1: In SharePoint Central Administration, navigate to **Web Applications** > **%affected_application%** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.

2. Error 2: In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_site_collection%**, and change the status to **Not locked**.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
