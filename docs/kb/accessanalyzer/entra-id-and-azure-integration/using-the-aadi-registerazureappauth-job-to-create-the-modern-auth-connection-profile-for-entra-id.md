---
description: >-
  Explains how to use the AADI_RegisterAzureAppAuth instant job to register a
  Microsoft Entra ID application and create the Modern Auth connection profile
  for Entra ID in Netwrix Access Analyzer. Includes prerequisites, configuration
  steps, and post-run tasks.
keywords:
  - AADI_RegisterAzureAppAuth
  - Entra ID
  - Microsoft Entra ID
  - Modern Auth
  - Connection Profile
  - Netwrix Access Analyzer
  - instant job
  - app registration
  - ClientID
  - secret
products:
  - access-analyzer
sidebar_label: 'Using the AADI_RegisterAzureAppAuth Job to Create '
tags:
  - entra-id-and-azure-integration
title: >-
  Using the AADI_RegisterAzureAppAuth Job to Create the Modern Auth Connection
  Profile for Entra ID
knowledge_article_id: kA0Qk0000001j4jKAA
---

# Using the AADI_RegisterAzureAppAuth Job to Create the Modern Auth Connection Profile for Entra ID

## Question
How can you use the AADI_RegisterAzureAppAuth job to create the Modern Auth Connection Profile for Entra ID?

## Answer
The **AADI_RegisterAzureAppAuth** job registers a Microsoft Entra ID (formerly Azure AD) application for authentication and provisions the necessary permissions for Azure Active Directory Online scans.

### Prerequisites
- A Connection Profile containing a Microsoft Entra ID Global Admin credential with an Account Type of **Task (Local)**.
- An Azure AD PowerShell module installed on targeted hosts.
- Microsoft Edge must be set as your default browser.
- If the module is not already installed, the job will attempt to install it.

Follow the steps below to configure and run the AADI_RegisterAzureAppAuth job.

- Creating the AADI_RegisterAzureAppAuth Job
- Configuring the AADI_RegisterAzureAppAuth Job
- Finishing Set Up and Applying the New Connection Profile to the Entra ID Inventory Job

### Creating the AADI_RegisterAzureAppAuth Job
1. In Netwrix Access Analyzer, create a **Z_RegisterAzureAppAuth Job Group** or use any other Job Group in which you will place the **AADI_RegisterAzureAppAuth** job.
2. Click **Add Instant Job** to open the Instant Job Wizard.
3. To install the **AADI_RegisterAzureAppAuth** job from the Instant Job Library (under **Library Name: Azure**), follow these steps:
   1. Right-click the **Z_RegisterAzureAppAuth** Job Group that you just created and select **Add Instant Job**.
   2. Expand **Library Name: Azure** to select the **AADI_RegisterAzureAppAuth** instant job.
   3. After installation, the job tree automatically refreshes with the new job available within the selected Job Group. For additional information, see the Instant Job Wizard topic: https://docs.netwrix.com/docs/auditor/10_8

### Configuring the AADI_RegisterAzureAppAuth Job
1. Navigate to the Configuration section of the job overview and description page then select the **Edit** button for **Name of the app as it will appear in the Azure applications list**.
2. Enter the name that you want to apply to the registered Microsoft Entra ID application and click **Save**.
3. On the **Configure > Hosts** node, select the target hosts.

> **NOTE:** The targeted host should be the **Microsoft Entra tenant name** (for example, myorg.onmicrosoft.com).

4. Click **Save**. The job should now be ready to run.
5. Run the **AADI_RegisterAzureAppAuth** job.
6. After the job successfully runs, a browser window opens to Microsoft Entra ID. Log in as a **Global Administrator** and grant administrator consent to the **Application's configured API Permissions**.

> **IMPORTANT:** If this log-in attempt fails or you close the browser, you will need to manually log in to Microsoft Entra ID as a Global Administrator. Next, navigate to the Application's API Permissions to grant Admin Consent before the application can be used for Azure Active Directory scans in Netwrix Access Analyzer.

7. The Microsoft Entra ID application is now provisioned with the necessary permissions for Azure Active Directory Inventory Online scans. A new Connection Profile for this application will be available.

### Finishing Set Up and Applying the New Connection Profile to the Entra ID Inventory Job
1. Restart the **Netwrix Access Analyzer Console** and review the results of the AADI_RegisterAzureAppAuth job.
2. Review the `ClientID_(AppId)` and `Key_(Secret_Value)` values, record them to a password vault or equivalent then return to the new connection profile previously created.
3. Confirm that the `ClientID_(AppId)` value matches the **Client ID:** value.
4. Enter the `Key_(Secret_Value)` in the **Key** value and click **OK** to save.
5. Once you have created and verified your `<EntraID>` connection and `<MYORG.MICROSOFT.COM>` EntraID host list under the global settings as a result of the process defined in this article, you can configure each of these parameters to run both the **Entra ID Inventory** and **Entra ID** jobs.

> **IMPORTANT:** The required rights, roles, and configuration for Microsoft Entra ID Auditing must still be configured. For additional information, see the Microsoft Entra ID Auditing Configuration topic: https://docs.netwrix.com/docs/auditor/10_8

## Related Articles
- Instant Job Wizard: https://docs.netwrix.com/docs/auditor/10_8
- Microsoft Entra ID Auditing Configuration: https://docs.netwrix.com/docs/auditor/10_8
