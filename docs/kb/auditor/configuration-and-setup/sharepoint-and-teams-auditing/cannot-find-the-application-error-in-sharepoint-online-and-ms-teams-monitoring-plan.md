---
description: >-
  This article explains how to resolve the "Cannot find the application" error
  in SharePoint Online and Microsoft Teams monitoring plans in Netwrix Auditor.
  It provides symptoms, causes, and steps to verify the Application ID and API
  permissions for the Azure app.
keywords:
  - SharePoint Online
  - Microsoft Teams
  - Application ID
  - Azure app
  - API permissions
  - Netwrix Auditor
  - monitoring plan
  - State-in-Time
  - Cannot find the application
products:
  - auditor
sidebar_label: 'Cannot Find the Application Error in SharePoint Online and MS Teams Monitoring Plan'
tags: []
title: >-
  Cannot Find the Application Error in SharePoint Online and MS Teams Monitoring
  Plan
knowledge_article_id: kA04u00000111HeCAI
---

# Cannot Find the Application Error in SharePoint Online and MS Teams Monitoring Plan

## Symptoms

- The following error is prompted in Health Log for your SharePoint Online or Microsoft Teams monitoring plan:

```text
Source:SharePoint Online Audit Service
Event ID:3205
Description:Monitoring plan: %monitoring_plan_name% 
Item: %name% 
The following unexpected error occurred: 
Cannot find the application.
```

- The State-in-Time data is not collected.

## Causes

- Incorrect Application ID provided for the affected item in the monitoring plan.
- Misconfigured API permissions for the corresponding Azure app.

## Resolutions

- Review the Application ID provided. You can find the Application ID of your app in the **Overview** page once you select the app in the **App registrations** section. Refer to the following Netwrix Auditor article for additional information on the initial Azure app setup: Netwrix Auditor — Permissions for SharePoint Online Auditing − Creating and registering a new app in Microsoft Entra ID ⸱ v10.6. For additional information on creating an app for Teams auditing, refer to the following Netwrix Auditor article: Netwrix Auditor — Permissions for Teams Auditing − Create and Register a New App in Microsoft Entra ID ⸱ v10.6.

![SPOAppID]./../0-images/ka0Qk0000001L8r_0EM4u000008MV3l.png)

- Review the app API permissions granted. You can either specify API permissions manually or use a manifest. Refer to the following Netwrix Auditor article for additional information on granting permissions: Netwrix Auditor — Permissions for SharePoint Online Auditing − Granting required permissions ⸱ v10.6. For additional information on permissions for Teams auditing, refer to the following Netwrix Auditor article: Netwrix Auditor — Permissions for Teams Auditing − Grant Required Permissions ⸱ v10.6.

## Related articles

- Netwrix Auditor — Permissions for SharePoint Online Auditing − Creating and registering a new app in Microsoft Entra ID ⸱ v10.6

- Netwrix Auditor — Permissions for Teams Auditing − Create and Register a New App in Microsoft Entra ID ⸱ v10.6

- Netwrix Auditor — Permissions for SharePoint Online Auditing − Granting Required Permissions ⸱ v10.6

- Netwrix Auditor — Permissions for Teams Auditing − Grant Required Permissions ⸱ v10.6



