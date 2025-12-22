---
description: >-
  Netwrix Auditor SharePoint monitoring may log Event ID 1260–1266 when
  configuration snapshots fail; this article describes possible causes and
  resolutions to restore correct reporting of farm, web application, site
  collection, feature, solution, permission policy, and server configuration
  snapshots.
keywords:
  - SharePoint
  - Health Log
  - Event ID 1260
  - configuration snapshot
  - site collection
  - web application
  - E_ACCESSDENIED
  - site lock
products:
  - auditor
visibility: public
sidebar_label: Event ID 1260 − 1266 in Health Log
tags: []
title: "Event ID 1260 − 1266 in Health Log"
knowledge_article_id: kA00g000000H9cOCAS
---

# Event ID 1260 − 1266 in Health Log

## Symptom

You may see any of the following error messages under Event ID 1260, 1261, 1262, 1263, 1264, 1265, and 1266 in the Health Log for your SharePoint monitoring plan.

## Causes and Resolutions

Refer to the following possible causes and resolutions:

Event descriptions:
- 1260 − Unable to make the configuration snapshot of SharePoint farm %affected_Shapoint_farm% due to the following error: %error%. As a result, changes to the farm properties, features and solutions may not be reported correctly.
- 1261 − Unable to make the configuration snapshot of web application %affected_web_application%.
- 1262 − Unable to make the configuration snapshot of site collection %affected_site_collection%.
- 1263 − Unable to make the configuration snapshot for feature %ID%.
- 1264 − Unable to make the configuration snapshot of solution %ID%.
- 1265 − Unable to make the configuration snapshot of permission policy %ID% for web application %affected_web_application%.
- 1266 − Unable to make the configuration snapshot of server %affected_server%.

Cause:
- Access to the affected web site has been blocked.
- Access is denied (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED)).
- Some or all identity references could not be translated.

**Resolution:**
Refer to the following resolutions depending on the cause:
- In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **%affected_web_application%**, and change the status to **Not locked**.
- In SharePoint Central Administration, navigate to **Web Applications** > **%affected_web_application%** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.
- This error could be caused by the account running SharePoint service or SharePoint WebApplication Pool removed from the AD domain but left in the service accounts portion of SharePoint. Remove this account from SharePoint service accounts, or join it back to the domain.

Learn more on management of the SharePoint site lock status via PowerShell in Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft (https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell).

## Related articles

- Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft (https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell)
