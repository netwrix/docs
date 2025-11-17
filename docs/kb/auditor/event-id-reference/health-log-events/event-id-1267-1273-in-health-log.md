---
description: >-
  Explains Event ID 1267–1273 messages that appear in the Health Log for
  SharePoint monitoring plans, lists possible causes, and provides resolutions.
keywords:
  - SharePoint
  - Health Log
  - Event ID 1267
  - Event ID 1273
  - monitoring plan
  - site lock
  - access denied
  - snapshot invalid
products:
  - auditor
sidebar_label: Event ID 1267 − 1273 in Health Log
tags: []
title: "Event ID 1267 − 1273 in Health Log"
knowledge_article_id: kA00g000000H9cRCAS
---

# Event ID 1267 − 1273 in Health Log

## Symptoms

Either of the following error messages under Event ID 1267, 1268, 1269, 1270, 1271, 1272, and 1273 is prompted in Health Log for your SharePoint monitoring plan.

## Causes and Resolutions

Refer to the following possible causes and resolutions:

### Event descriptions

- 1267 − Unable to report changes to SharePoint farm ` %affected_Shapoint_farm% ` correctly, as the current, previous, or both snapshots are partially invalid.
- 1268 − Unable to report changes to web application `<ID>` correctly as the current, previous, or both snapshots are partially invalid.
- 1269 − Unable to report changes to site collection `<ID>` correctly as the current, previous, or both snapshots are partially invalid.
- 1270 − Unable to report changes to feature `<ID>` correctly as the current, previous, or both snapshots are partially invalid.
- 1271 − Unable to report changes to solution `<ID>` correctly as the current, previous, or both snapshots are partially invalid.
- 1272 − Unable to report changes to permission policy `<ID>` correctly as the current, previous, or both snapshots are partially invalid.
- 1273 − Unable to report changes to server `<ID>` correctly as the current, previous, or both snapshots are partially invalid.

### Possible causes

- Access to the affected web site has been blocked.
- Access is denied (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED)).
- Some or all identity references could not be translated.
- The previous data collection completed with an error.

### Resolutions

Refer to the following resolutions depending on the cause:

- In SharePoint Central Administration, navigate to **Application Management** > **Configure Quotas and Locks** > **`%affected_web_application%`**, and change the status to **Not locked**.
- In SharePoint Central Administration, navigate to **Web Applications** > **`%affected_web_application%`** > **User Permissions**, and verify the security settings. The minimum required permissions are **Manage Web Site**.
- This error could be caused by the account running SharePoint service or SharePoint WebApplication Pool removed from the AD domain but left in the service accounts portion of SharePoint. Remove this account from SharePoint service accounts, or join it back to the domain.
- Navigate to **Monitoring Plans** > select the **`%affected_monitoring_plan%`** and click **Edit** > click **Update**.

Learn more on management of the SharePoint site lock status via PowerShell in Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🤝:  
https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell

## Related articles

- Manage Lock Status for Site Collections in SharePoint Server − Manage Lock Status for Site Collection via Microsoft PowerShell ⸱ Microsoft 🤝  
  https://learn.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections#manage-the-lock-status-for-a-site-collection-by-using-microsoft-powershell
