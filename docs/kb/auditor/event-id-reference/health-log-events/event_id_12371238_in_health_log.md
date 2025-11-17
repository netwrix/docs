---
description: >-
  This article addresses Event ID 1237 and 1238 errors in the Health Log for SharePoint monitoring plans, detailing symptoms, causes, and resolutions.
keywords:
  - Event ID 1237
  - Event ID 1238
  - Health Log
  - SharePoint monitoring
  - Netwrix Auditor
sidebar_label: Event ID 1237/1238 in Health Log
tags: []
title: "Event ID 1237/1238 in Health Log"
knowledge_article_id: kA00g000000H9dDCAS
products:
  - auditor
---

# Event ID 1237/1238 in Health Log

## Symptoms

One of the following error messages under Event ID 1237 or 1238 is prompted in the Health Log for your SharePoint monitoring plan:

1. **Error 1:**
   ```
   Unable to collect content/security events from site collection %name%: Attempted to perform an unauthorized operation
   ```

2. **Error 2:**
   ```
   Unable to collect content/security events from site collection %name%: Access is denied.
   (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))
   ```

3. **Error 3:**
   ```
   Unable to collect content/security events from site collection %name%: Access to this Web site has been blocked.
   ```

## Causes

1. **Error 1:** Netwrix Auditor failed to collect content/security changes from the audited site collection due to the **Adding content prevented** status. Otherwise, the Farm account or the service account for the web application pool hosting the audited site collection has been modified and has not been granted the **Log on as a batch job** permissions in the server hosting SharePoint Central Administration.

2. **Error 2:** Auditor failed to collect content/security changes from the audited site collection due to insufficient permissions for the web application hosting the target site collection.

3. **Error 3:** Auditor failed to collect content/security changes from the audited site collection due to the **No Access** status.

## Resolutions

Review the resolution for the corresponding error:

1. **Error 1:** In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_site_collection%**, and change the status to **Not locked**.

2. **Error 2:** In SharePoint Central Administration, navigate to **Web Applications** > **%affected_application%** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.

3. **Error 3:** In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_site_collection%**, and change the status to **Not locked**.

Learn more about managing the SharePoint site lock status via PowerShell in [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related Articles

- [Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)