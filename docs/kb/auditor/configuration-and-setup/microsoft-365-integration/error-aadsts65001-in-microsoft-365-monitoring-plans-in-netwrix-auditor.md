---
description: >-
  This article explains how to resolve the AADSTS65001 error that appears in the
  Health Log for Microsoft 365 monitoring plans in Netwrix Auditor by recreating
  the Entra ID app and updating the monitoring plan.
keywords:
  - AADSTS65001
  - Microsoft 365
  - Entra ID
  - Azure AD
  - Netwrix Auditor
  - monitoring plan
  - app permissions
  - admin consent
products:
  - auditor
  - Azure_AD_and_Office_365
sidebar_label: Error AADSTS65001 in Microsoft 365 Monitoring Plan
tags: []
title: "Error AADSTS65001 in Microsoft 365 Monitoring Plans in Netwrix Auditor"
knowledge_article_id: kA00g000000H9a4CAC
---

# Error AADSTS65001 in Microsoft 365 Monitoring Plans in Netwrix Auditor

## Symptom

The following error is prompted in Health Log for any of your Microsoft 365 (Office 365) monitoring plans (e.g., Microsoft Entra ID (formerly Azure AD), SharePoint Online, Exchange Online, Teams):

```text
Source: %Affected% Service
Event ID: 3106
Description:Monitoring plan: %Affected_Microsoft_365% Monitoring Plan
Item: %Affected_item%
Cannot add the item %Affected_item%  for auditing due to the following error:
AADSTS65001: The user or administrator has not consented to use the application with ID '%id%' named '%app_name%'.
Send an interactive authorization request for this user and resource.
```

## Cause

- Incorrectly configured permissions for your Entra ID (Azure AD) app.
- Admin consent was not granted to the affected app.

## Resolution

Recreate the app named ` %app_name% ` in your Entra ID portal:

1. Open the Entra ID portal. You can use the following link: [Microsoft Entra Admin Center](https://entra.microsoft.com/#home).
2. In the left pane, select **Applications** > **App registrations**.
3. Select the ` %app_name% ` app affected, and delete it.
4. Recreate the app according to the steps provided in the documentation for the affected data source:
   - Microsoft 365 — Permissions for Microsoft Entra ID Auditing ⸱ v10.6
   - Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6
   - Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6
   - Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6

Edit the affected monitoring plan to use the new app:

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
2. In the left pane, select the affected plan, and click **Edit**.
3. Click the affected item, and select **Edit item** under the **Item** section in the right pane.
4. Provide new credentials for the app.
5. Once you've provided the credentials, click **Save & Close**.
6. Click **Update** under the **Monitoring Plan** section in the right pane.

## Related articles

- Microsoft 365 — Permissions for Microsoft Entra ID Auditing ⸱ v10.6
- Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6
- Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6
- Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6
- [Microsoft Entra Admin Center](https://entra.microsoft.com/#home)
