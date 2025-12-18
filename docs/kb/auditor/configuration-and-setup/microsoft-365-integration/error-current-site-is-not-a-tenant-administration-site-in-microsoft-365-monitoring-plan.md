---
description: >-
  Explains the cause and resolution when a Microsoft 365 monitoring plan in
  Netwrix Auditor reports "Current site is not a tenant administration site"
  (Event ID 3229) in the Health Log. Follow the steps to verify and correct the
  tenant name for the monitored item.
keywords:
  - Netwrix Auditor
  - Microsoft 365
  - tenant administration
  - monitoring plan
  - Event 3229
  - tenant ID
  - Health Log
products:
  - auditor
sidebar_label: 'Error: Current Site Is Not a Tenant Administration'
tags: []
title: "Error: Current Site Is Not a Tenant Administration Site in Microsoft 365 Monitoring Plan"
knowledge_article_id: kA04u00000111K4CAI
---

# Error: Current Site Is Not a Tenant Administration Site in Microsoft 365 Monitoring Plan

## Symptom

A Microsoft 365-based monitoring plan in Netwrix Auditor prompts the following error in the Health Log:

```text
Event ID: 3229
Description: Monitoring plan: %Monitoring_plan_name%
Item: %item_name%
Failed to collect state-in-time data due to the following error:
Error get responce for GetTenant: Current site is not a tenant administration site
```

## Cause

The affected monitored item has an incorrect tenant name.

## Resolution

Review the tenant name in the affected monitoring plan.

1. In the main Auditor screen, click **Monitoring Plans**, select the affected monitoring plan, and click **Edit**.
2. Select a monitored item and click **Edit Item** in the right pane.
3. Review the tenant name value for the item. Refer to the Microsoft guide to locate the correct tenant ID: [Locate important IDs for a user ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names#find-the-microsoft-azure-ad-tenant-id-and-primary-domain-name).
4. Once you introduce the changes, click **Save & Close**. In the right pane, click **Update** to update your monitoring plan.

## Related articles

- [Locate important IDs for a user ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names#find-the-microsoft-azure-ad-tenant-id-and-primary-domain-name)
