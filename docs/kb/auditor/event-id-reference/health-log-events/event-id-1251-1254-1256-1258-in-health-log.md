---
description: >-
  Lists Event IDs 1251–1254 and 1256–1258 that may appear in the Health Log for
  a SharePoint monitoring plan and provides causes and resolutions.
keywords:
  - SharePoint
  - Health Log
  - Event ID
  - 1251
  - 1252
  - 1253
  - 1254
  - Netwrix Auditor
  - site collection
products:
  - auditor
sidebar_label: 'Event ID 1251 - 1254, 1256 - 1258 in Health Log'
tags: []
title: 'Event ID 1251 - 1254, 1256 - 1258 in Health Log'
knowledge_article_id: kA00g000000H9cUCAS
---

# Event ID 1251 - 1254, 1256 - 1258 in Health Log

## Symptoms

Either of the following error messages under the Event is prompted in Health Log for your SharePoint monitoring plan:

```
Netwrix Auditor has been unable to add an object to the auditing scope due to one of the following errors on your SharePoint server
```

- `1251 − Unable to find web application %affected_web_application%`
- `1252 − Unable to get a list of web applications from the audited SharePoint farm`
- `1253 − Unable to find the parent web application for site collection %affected_site_collection%`
- `1254 − Unable to find the parent web application %affected_web_application%`
- `1256 − Unable to find site collection %affected_site_collection% due to the following error`
- `1257 − Unable to get a list of web applications from the audited SharePoint farm`
- `1258 − Unable to find the Central Administration web application`

## Causes

1. `Access to the affected web site has been blocked`
2. `Access is denied (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))`
3. `Some or all identity references could not be translated`
4. `Wrong URL was added to the auditing scope or the object available by this link is invalid`

## Resolutions

1. Cause #1 − In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_web_application%**, and change the status to **Not locked**.
2. Cause #2 − In SharePoint Central Administration, navigate to **Web Applications** > **%affected_web_application%** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.
3. Cause #3 − This error could be caused by the account running SharePoint service or SharePoint WebApplication Pool removed from the AD domain but left in the service accounts portion of SharePoint. Remove this account from SharePoint service accounts, or join it back to the domain.
4. Cause #4 − Verify the Administration URL − Edit the Item URL via **Monitoring Plans** > select %SharePoint_plan% > **Edit** > select the item and click **Edit item** > modify the SharePoint Central Administration URL > click **Save & Close**.

Learn more on management of the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
