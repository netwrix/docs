---
description: >-
  This article explains causes and resolutions for Event ID 1245 in the Health
  Log, which reports "Unable to remove the Netwrix Auditor configuration from
  site collection with %site_collection%". It helps you identify the specific
  error variant and resolve SharePoint site collection lock and permission
  issues.
keywords:
  - Event ID 1245
  - Health Log
  - SharePoint
  - Netwrix Auditor
  - site collection
  - Configure Quotas and Locks
  - E_ACCESSDENIED
  - audit
  - site lock
products:
  - auditor
sidebar_label: Event ID 1245 in Health Log
tags: []
title: "Event ID 1245 in Health Log"
knowledge_article_id: kA00g000000H9cWCAS
---

# Event ID 1245 in Health Log

## Symptoms

One of the following error messages under Event ID 1245 `Unable to remove the Netwrix Auditor configuration from site collection with %site_collection%` is prompted in Health Log for your SharePoint monitoring plan:

1. Error 1:

```text
Unable to exclude events on site collection %site_collection% from the auditing scope due to the following error:
Attempted to perform an unauthorized operation.
```

2. Error 2:

```text
Unable to exclude events on site collection %site_collection% from the auditing scope due to the following error:
Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED)).
```

3. Error 3:

```text
Unable to exclude events on site collection %site_collection% from the auditing scope due to the following error:
Access to this Web site has been blocked.
```

## Causes

1. Error 1: Netwrix Auditor failed to exclude events from the audited site collection due to the **Adding content prevented** status. Alternatively, the Farm account or the service account for the web application pool hosting the audited site collection has been modified, and has not been granted the **Log on as a batch job** permissions in the server hosting SharePoint Central Administration.

2. Error 2: Netwrix Auditor failed to exclude changes from the audited site collection due to insufficient permissions for the web application hosting the target site collection.

3. Error 3: Netwrix Auditor failed to exclude changes from the audited site collection due to the **No Access** status.

## Resolutions

Review the resolution for the corresponding error:

1. Error 1: In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_site_collection%**, and change the status to **Not locked**.

2. Error 2: In SharePoint Central Administration, navigate to **Web Applications** > **%affected_application%** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.

3. Error 3: In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_site_collection%**, and change the status to **Not locked**.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🫅](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🫅](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
