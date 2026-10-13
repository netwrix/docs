---
title: "Microsoft Information Protection Target Requirements"
description: "Configure Microsoft Entra ID, Microsoft Purview, and Access Analyzer so the File System solution can scan for MIP sensitivity labels."
sidebar_position: 20
---

# **Microsoft Information Protection Target Requirements**

Microsoft Purview Information Protection (formerly Azure Information Protection, and referred to in this topic as Microsoft Information Protection, or MIP) is a Microsoft service that classifies and protects stored files with sensitivity labels. Access Analyzer uses the File System Solution to run Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans to find sensitivity labels and scan protected (i.e. encrypted) files for sensitive data. Access Analyzer uses the MIP File SDK to read labels and decrypt protected files.

This document explains how to configure the access Access Analyzer needs to scan for Microsoft Information Protection labels in a target environment.

## Workflow for Scanning MIP Labels

Before the Access Analyzer File System solution can scan for MIP labels, complete the following prerequisites in Access Analyzer, Microsoft Entra ID, and Microsoft Purview.

:::note
If you configured AIP scanning in an earlier release, add the permissions in [Create a Service Principal Account](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#create-a-service-principal-account) to your existing app registration, grant admin consent again, and complete the super user steps. You can uninstall the Rights Management Service Client.

:::

1. [Create a Service Principal Account](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#create-a-service-principal-account)
2. [Enable the Account as a Super User using PowerShell](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#enable-the-account-as-a-super-user-using-powershell)
3. [Configure Access Analyzer](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#access-analyzer-configurations)
   - See the FileSystemAccess Data Collector section in the [File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/overview.md) topic for additional information

## Prerequisites

Meet the following prerequisites before you configure MIP scanning:

- Microsoft Entra ID Global Administrator credentials, or an account holding the **Azure Information Protection Administrator**, **Compliance Administrator**, or **Compliance Data Administrator** role
- Windows PowerShell 5.1 (run as Administrator) and the ability to run `Install-Module`
- No client installation is required on the server where the FSAA applet runs, because the MIP File SDK is included with Access Analyzer. The Rights Management Service Client is no longer required
- Optional: The [Microsoft Purview Information Protection client](https://www.microsoft.com/en-us/download/details.aspx?id=53018), installed on the Access Analyzer console server. It's required only to apply labels with the [FS_MIPLabeling Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/fs_miplabeling.md)
- Allow outbound HTTPS (port 443) traffic from the server where the FSAA applet or proxy runs to the following Microsoft endpoints. Firewall or proxy rules must allow this traffic for applications, not only for web browsers:
  - `login.microsoftonline.com`
  - `dataservice.protection.outlook.com`
  - `*.aadrm.com`
  - `*.informationprotection.azure.com`

:::warning
The MIP File SDK uses the machine-wide WinHTTP proxy settings (`netsh winhttp show proxy`). If the configured static proxy is unreachable, MIP initialization can stall or fail, and the scan turns off MIP scanning. Confirm the proxy is reachable, or reset it with `netsh winhttp reset proxy`.

:::

## Create a Service Principal Account

1. Open the [Microsoft Entra admin center](https://entra.microsoft.com/) and sign in with an administrator account.

2. Create a new app registration:

   1. Navigate to **Identity** > **Applications** > **App registrations** > **New registration**
   2. Give the new application a distinguishable name
   3. Set **Supported account types** to **Accounts in this organizational directory only** (single tenant)
   4. Leave **Redirect URI** blank

3. Create a client secret:

   1. Open **Certificates & secrets** > **Client secrets**
   2. Click **New client secret**
   3. Provide a brief description and expiration date
   4. Click **Add**
   5. Record the client secret **Value** immediately (not the **Secret ID**)

   :::warning
   The portal displays the secret value only once. It disappears when you leave the page.

   :::

4. Add API permissions:

   1. Open **API permissions**
   2. Click **Add a permission** > **APIs my organization uses**
   3. Search for **Microsoft Rights Management Services**, select **Application permissions**, and add `Content.DelegatedReader`, `Content.DelegatedWriter`, and `Content.SuperUser`

      :::info
      After you add it, the portal lists the API as Azure Rights Management Services.

      :::

   4. Click **Add a permission** > **APIs my organization uses**
   5. Search for **Microsoft Information Protection Sync Service**, select **Application permissions**, and add `UnifiedPolicy.Tenant.Read`
   6. Confirm that Microsoft Graph `User.Read` (Delegated) is present. Microsoft Entra ID adds it by default when you create the app registration

   | API                                           | Permission type | Permission                  | Purpose                                                |
   | --------------------------------------------- | --------------- | --------------------------- | ------------------------------------------------------ |
   | Azure Rights Management Services              | Application     | `Content.DelegatedReader`   | Read protected content on behalf of a user             |
   | Azure Rights Management Services              | Application     | `Content.DelegatedWriter`   | Required to apply labels with the FS_MIPLabeling Job   |
   | Azure Rights Management Services              | Application     | `Content.SuperUser`         | Read all protected content for the tenant              |
   | Microsoft Graph                               | Delegated       | `User.Read`                 | Sign in and read user profile                          |
   | Microsoft Information Protection Sync Service | Application     | `UnifiedPolicy.Tenant.Read` | Read the tenant's sensitivity label policy             |

   ![Microsoft Entra app registration API permissions](/images/accessanalyzer/12.0/requirements/target/config/MIP_APP_Permissions.webp)

5. After adding the required API permissions, click **Grant admin consent**. Each permission must show a green **Granted for** status.
6. Record the **Application (client) ID** and **Directory (tenant) ID** from the **Overview** page, together with the secret value.

## Enable the Account as a Super User using PowerShell

The `Content.SuperUser` permission takes effect only after you add the service principal as an Azure Rights Management super user. This is a separate step from the app registration and requires an account with the Global Administrator or Azure Information Protection Administrator role.

:::warning
Super users can decrypt all protected content in the tenant. Enable the super user feature only for accounts that require it, and review this step with your security team.

:::

:::note
Run all PowerShell commands in order through Windows PowerShell 5.1 (`powershell.exe`) as an Administrator. Connecting with `Connect-AipService` can fail in PowerShell 7 (`pwsh.exe`). Modules installed under one PowerShell host aren't available in the other.

The module and cmdlet names in this section contain "AIP" because Microsoft hasn't renamed the `AIPService` module that manages super users for Microsoft Purview Information Protection. Use the names exactly as shown.

:::

1. Install the AIPService module and import it into PowerShell:

   `Install-Module -Name AIPService`

   `Import-Module AIPService`

2. Connect to the service using the `Connect-AipService` command and supply the administrator credentials in the Microsoft **Sign in to your account** window.
3. Enable the super user feature:

   `Enable-AipServiceSuperUserFeature`

4. Add the service principal as a super user, using the **Application (client) ID** recorded in the [Create a Service Principal Account](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#create-a-service-principal-account) section:

   `Add-AipServiceSuperUser -ServicePrincipalId <AppID>`

5. Verify that the output lists the service principal:

   `Get-AipServiceSuperUser`

The service principal is now a super user in the Rights Management service, and the super user feature is enabled.

## Access Analyzer Configurations

Complete two configurations before Access Analyzer can scan for MIP labels.

- [Azure Connection Profile](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#azure-connection-profile)
- [Configure FSAA Data Collector](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#configure-fsaa-data-collector)

### **Azure Connection Profile**

To collect labels for files protected with Microsoft Information Protection, configure an Azure connection profile in Access Analyzer before an FSAA scan runs. See the [Global Settings](/docs/accessanalyzer/12.0/admin/settings/overview.md) topic for additional information on how to set up a connection profile at the global level.

1. In Access Analyzer, add a credential with the Azure Active Directory account type (Microsoft Entra ID) to the existing Connection Profile used for File System scanning. Enter the **Application (client) ID** in the Client ID field. In the Key field, enter the client secret **Value** you recorded in [Create a Service Principal Account](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#create-a-service-principal-account).
2. At the job level, apply the connection profile that contains both the Microsoft Entra ID credential and credentials required for File System scanning under the **Jobs** > \[**Job**\] > **Settings** > **Connection** node.
3. Confirm the job configuration before running a scan. See the [Configure FSAA Data Collector](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#configure-fsaa-data-collector) topic for additional information.

The Azure Connection Profile is now ready for an FSAA scan.

### **Configure FSAA Data Collector**

In Access Analyzer, configure the FSAA Data Collector wizard pages to scan files protected by Microsoft Information Protection. You can do this for both FSAA System Scans and SEEK System Scans. In the FSAA Data Collector Wizard, configure the following menus to scan for MIP labels:

For FSAA System Scans:

- Scan Server Selection – Choose the server that runs the scan. This may be a proxy server, file server (applet mode), or the local Access Analyzer console depending on scan configuration. The server must meet the network requirements listed in the [Prerequisites](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#prerequisites) section.
- Scan Settings – Select the **Enable scanning of files protected by Microsoft Information Protection** checkbox to add MIP files to the scan criteria
- Azure Tenant Mapping page – Add the **Application (client) ID** and the **Domain Name** or **Tenant ID**

  :::tip
  Remember, the Azure Tenant Mapping page is only visible when you select the **Enable scanning of files protected by Microsoft Information Protection** checkbox on the Scan Settings page.

  :::

- Default Scoping Options
  - File Details tab – **Include files protected by Microsoft Information Protection**
  - File Properties (Folder Summary) – **Include MIP Protected Files**
- Scoping Options – if needed, scope to a specific subset of resources on a selected host

For SEEK System Scans:

- Scan Server Selection – Choose the server that runs the scan. This may be a proxy server, file server (applet mode), or the local Access Analyzer console depending on scan configuration. The server must meet the network requirements listed in the [Prerequisites](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#prerequisites) section.
- Scan Settings – Select the **Enable scanning of files protected by Microsoft Information Protection** checkbox to add MIP files to the scan criteria
- Azure Tenant Mapping page – Add the **Application (client) ID** and the **Domain Name** or **Tenant ID**

  :::tip
  Remember, the Azure Tenant Mapping page is only visible when you select the **Enable scanning of files protected by Microsoft Information Protection** checkbox on the Scan Settings page.

  :::

- Scoping Options – if needed, scope to a specific subset of resources on a selected host
- Sensitive Data Settings – Select **Decrypt Files Protected by Microsoft Information Protection**. This page only applies for SEEK scans.

See the FileSystemAccess Data Collector section in the [File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/overview.md) topic for additional information on these scoping options.
