---
description: >-
  Describes causes and resolutions for "The operation timed out" errors when
  auditing SharePoint Online and MS Teams with Netwrix Auditor, and provides
  steps to troubleshoot Azure app credentials.
keywords:
  - SharePoint Online
  - MS Teams
  - operation timed out
  - monitoring plan
  - Netwrix Auditor
  - Azure AD app
  - Tenant ID
  - Application ID
  - client secret
products:
  - auditor
sidebar_label: Operation Timed Out in SharePoint Online and Teams
tags: []
title: "Operation Timed Out in SharePoint Online and Teams Monitoring Plans in Netwrix Auditor"
knowledge_article_id: kA04u00000111HyCAI
---

# Operation Timed Out in SharePoint Online and Teams Monitoring Plans in Netwrix Auditor

## Symptom

One of the following errors is prompted for your SharePoint Online or MS Teams monitoring plan:

```text
Source: SharePoint Online Audit Service
Event ID: 3205
Description: Monitoring plan: %monitoring_plan_name%
Item: %item_name%
The following unexpected error occurred:
The operation timed out.
```

```text
Source: MS Teams Audit Service
Event ID: 2002
Description: Monitoring plan: %monitoring_plan_name%
Item: %item_name%
SharePoint Online: The operation timed out.
```

## Causes

- Firewall rules for the Microsoft 365 data source are misconfigured.
- Items from different data sources (e.g., SharePoint Online and MS Teams) were previously added to a single monitoring plan.
- Items share the same Azure app.
- Incorrect credentials for monitoring plan items.

## Resolutions

> **NOTE:** The following steps are vaild for the Modern Authentication method in Microsoft 365.

- Review the firewall rules set up in your environment. Refer to the following articles for additional information on ports required for Microsoft 365-based data sources: Microsoft 365 − Exchange Online Ports ⸱ v10.6, Microsoft 365 − SharePoint Online Ports ⸱ v10.6, Microsoft 365 − Teams Ports ⸱ v10.6.

- Create separate monitoring plans for the monitored items based on the data source. For additional information, refer to the following articles: Monitoring Plans − Exchange Online Plans ⸱ v10.6, Monitoring Plans − SharePoint Online Plans ⸱ v10.6, Monitoring Plans − MS Teams Plans ⸱ v10.6.

- Each monitored item requires a separate Azure AD app. For additional information on the Azure app setup procedure, refer to the following articles: Exchange Online − Permissions for Exchange Online Auditing ⸱ v10.6, SharePoint Online − Permissions for SharePoint Online Auditing ⸱ v10.6, Teams − Permissions for Teams Auditing ⸱ v10.6.

- Review the credentials provided in monitored items:

  - You can use your Tenant ID instead of the domain − proceed to your Azure portal > select **Azure Active Directory** or **Microsoft Entra ID** in the left pane > select **Properties** in the left tab > copy **Tenant ID** and paste it in the **Tenant name** field in the affected item.
  - Review the Application ID provided. You can find the Application ID of your app in the **Overview** page once you select the app in the **App registrations** section. Copy it and paste it in the **Application ID** field in the affected item.
  - Review the application secret provided. You can find it under the **Value** section in the **Certificates & secrets** tab once you select the app in the **App registrations** section. Copy it and paste it in the **Application secret** field in the affected item.

## Troubleshooting app credentials

You can use the following PowerShell query to prompt the validation check using the Azure app credentials:

```powershell
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true};
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Ssl3, [System.Net.SecurityProtocolType]::Tls, [System.Net.SecurityProtocolType]::Tls11, [System.Net.SecurityProtocolType]::Tls12;
$iwr = 0
$url = "https://login.windows.net/%Tenant_name%/oauth2/token"
$AppID = "%App_ID%"
$secret = "%Secret_Value%"
$body = "client_id=$AppID&scope=https://graph.microsoft.com/.default&client_secret=$secret&grant_type=client_credentials"
$iwr = Invoke-WebRequest -Uri $url -Body $body -Method:POST -ContentType "application/x-www-form-urlencoded"
$iwr.Content
```

Make sure to replace `%Tenant_name%`, `%App_ID%`, and `%Secret_Value%` with actual credentials. In case the query succeeds, make sure to specify the credentials used in the item affected. In case the query returns an error, refer to the following steps:

- The following error is prompted in case Tenant ID provided is incorrect. Review the steps to discover the Tenant ID value in the **Resolutions** section.

```text
AADSTS900023: Specified tenant identifier '%tenant_name%' is neither a valid DNS name, nor a valid external domain.
```

- The following error is prompted in case Tenant ID provided is incorrect, or in case Unified Audit is disabled. Refer to the following article for additional information: Remote Server Returned Error: (400) Bad Request when Auditing SharePoint Online and Microsoft Entra ID_bad_request_when_auditing_sharepoint_online_and_microsoft_entra_i).

```text
AADSTS90002: Tenant '%tenant_name%' not found
```

- The following error is prompted in case Application ID provided is incorrect, or in case API permissions were not granted. Review the permissions required in the **Resolutions** section.

```text
AADSTS700016: Application with identifier '%Application_ID%' was not found in the directory '%directory_name%'
```

- The following error is prompted in case the Secret value provided is incorrect, or in case the Secret value has expired. Review the steps to discover the Secret value in the **Resolutions** section.

```text
AADSTS7000215: Invalid client secret provided.
```

In case these steps did not help, contact [Netwrix Technical Support](https://www.netwrix.com/open_a_ticket.html).

## Related articles

- Microsoft 365 − Exchange Online Ports ⸱ v10.6
- Microsoft 365 − SharePoint Online Ports ⸱ v10.6
- Microsoft 365 − Teams Ports ⸱ v10.6
- Monitoring Plans − Exchange Online Plans ⸱ v10.6
- Monitoring Plans − SharePoint Online Plans ⸱ v10.6
- Monitoring Plans − MS Teams Plans ⸱ v10.6
- Exchange Online − Permissions for Exchange Online Auditing ⸱ v10.6
- SharePoint Online − Permissions for SharePoint Online Auditing ⸱ v10.6
- Teams − Permissions for Teams Auditing ⸱ v10.6
- Remote Server Returned Error: (400) Bad Request when Auditing SharePoint Online and Microsoft Entra ID_bad_request_when_auditing_sharepoint_online_and_microsoft_entra_i)
