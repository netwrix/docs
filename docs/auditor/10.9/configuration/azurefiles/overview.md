---
title: "Azure Files Configuration Overview"
description: "Configure Azure Files for monitoring with Netwrix Auditor v10.8"
sidebar_position: 1
---

# Azure Files Configuration Overview


## Prerequisites

- **Azure Files License** - Azure Files is a paid data source requiring specific licensing
- **Azure Subscription** with Azure Files storage accounts (Standard and Premium supported)
- **Admin** permissions in Microsoft Entra ID and Azure Storage
- **Two separate storage accounts:**

   - One for file shares (data) — Create a storage account [Create a storage account (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?utm_source=chatgpt.com&tabs=azure-portal)

   - One for audit logs — Create a storage account [Create a storage account (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?utm_source=chatgpt.com&tabs=azure-portal)

- [Azure Files identity-based access](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-active-directory-overview) is configured for data storage account in Azure Files

  Supported options:
   - Active Directory Domain Services (AD DS)
   - Microsoft Entra Kerberos (for hybrid identities)
   - Microsoft Entra Domain Services (Entra DS) — not supported

  **Netwrix Auditor** relies on **identity-based access** to correctly map file operations to real user accounts. Without it:
   - Audit logs may not contain accurate user information
   - Activity may be shown as system or anonymous accounts

## Configuration Scope Overview

- **[Azure Application Registration](#azure-application-registration)** - Create Azure AD application
- **[Configure API Permissions](#configure-api-permissions)** - Assign required permissions for created application in EntraID
- **[Assign IAM Roles to the App](#assign-iam-roles-to-the-app)**- Assigning roles to Resource Group, Data Storage Account and Log Storage Account
- **[Diagnostic Settings](#diagnostic-settings)** - Configure audit logging

## Azure Application Registration

You should register an application so Netwrix Auditor can authenticate to Azure and read audit logs

### Step 1: Create the App Registration

1. In the Azure Portal, go to **Microsoft Entra ID > Manage > App registrations > + New registration**
2. Enter:
   - **Name**: Name: `NetwrixAuditor-AzureFiles` (this is an example — you can use any descriptive name for the app)
   - **Supported account types** (see below)
   - Leave **Redirect URI** blank
3. Click **Register**

**Account Types references:**

- **[Supported account types – Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/v2-supported-account-types)**

- **[Identity and account types for single- and multitenant apps](https://learn.microsoft.com/en-us/security/zero-trust/develop/identity-supported-account-types)**

**Note:** Switching audiences later may cause errors


### Step 2: Gather App Details

After registration, go to the **Overview** page of your new app and copy:
- **Application (Client) ID**


### Step 3: Create a Client Secret

1. In the same app, go to **Manage > Certificates & secrets > Client secrets**
2. Click **+ New client secret**
3. Enter a description (e.g., `NetwrixSecret`) and select expiration
4. Click **Add**
5. Copy the **secret value** immediately — it won't be shown again

Netwrix Auditor uses the **App ID** + **Client Secret** for authentication

**At the end of this step, you must have:**
- Application (Client) ID
- Client Secret (Secret Value)


## Configure API Permissions


**Microsoft Graph API permissions:**


### Step 1: Add Permissions

| Permission | Purpose |
|------------|---------|
| `User.Read` | Basic user information. Sign in and read user profile. *(default)* |
| `User.Read.All` | Read all users' profiles. Required to resolve SIDs into usernames in reports |


1. In your app in EntraID, go to **Manage > API permissions > + Add a permission**.
2. Select **Microsoft Graph > Application permissions**
3. Add:
   - **User.Read (default)**
   - **User.Read.All**

- *User.Read* – "Sign in and read user profile." *(default)*
- *User.Read.All* – "Read all users' full profiles"


### Step 2: Grant Admin Consent

Click **Grant admin consent for TenantName**

**Why this is required:**
- By default, applications cannot query Microsoft Graph for directory-wide information
- Admin consent allows the app to use **User.Read.All**
- This lets Netwrix Auditor query Azure AD and resolve **user SIDs → user accounts → display names**
- Without admin consent, audit logs will only show unresolved SIDs instead of usernames, making reports incomplete and less useful

**At the end of this step, your app has granted Microsoft Graph API permissions**


## Assign IAM Roles to the App

| Role | Scope | Purpose |
|------|--------|---------|
| `Reader` | Resource Group | List storage accounts |
| `Storage File Data Privileged Reader` | Storage Account | Read file shares data |
| `Storage Blob Data Reader` | Log Storage Account | Access audit logs |


**IAM Roles:**

You mshould assign Azure IAM roles so that Netwrix Auditor can:
- Discover file shares in your resource group
- Read metadata from your data storage account
- Access audit logs from your log storage account

**These IAM roles are mandatory**

### Step 1: Assign Reader Role on Resource Group

1. In the Azure Portal, go to your **Resource Group**
2. Open **Access control (IAM)**
3. Click **+ Add > Add role assignment**
4. Select role: **Reader**
   - "View everything, but not make any changes"
5. Click **Next**
6. Under **Members**, click **+ Select members**
7. In the search window, find and select the **App you registered earlier**
8. Click **Select → Review + assign**


### Step 2: Assign Storage File Data Privileged Reader on Data Storage Account

1. In the Azure Portal, go to your **Data Storage Account**
2. Navigate to **Access control (IAM) > + Add role assignment**
3. Select role: **Storage File Data Privileged Reader**
   - "Allows read access to file shares and directory/file metadata, including NTFS ACLs"
4. Click **Next**
5. Under **Members**, click **+ Select members**
6. Search for and select the **App you registered earlier**
7. Click **Select → Review + assign**


### Step 3: Assign Storage Blob Data Reader on Log Storage Account

1. In the Azure Portal, go to your **Log Storage Account**
2. Navigate to **Access control (IAM) > + Add role assignment**
3. Select role: **Storage Blob Data Reader**
   - "Allows read access to Azure Storage blob containers and data"
4. Click **Next**
5. Under **Members**, click **+ Select members**
6. Search for and select the **App you registered earlier**
7. Click **Select → Review + assign**


### Notes & Best Practices

- Data and log storage accounts can be in different resource groups
- Supported identity sources: AD DS, Microsoft Entra Kerberos
- Not supported: Microsoft Entra Domain Services
- Supported protocol: SMB

**At the end of this step, your app should have assigned roles:**
- Reader (Resource Group)
- Storage File Data Privileged Reader (Data Storage Account)
- Storage Blob Data Reader (Log Storage Account)

## Diagnostic Settings

Azure Files does not generate audit events by default
You must configure **Diagnostic Settings** to send file activity logs to your **Log Storage Account**

### Step 1: Open Diagnostic Settings

1. In the Azure Portal, go to your **Data Storage Account**
2. Navigate to **Monitoring > Diagnostic settings**
3. On the **"Select any of the resources to view diagnostic settings"** screen, choose **File**
   - Netwrix Auditor only supports **File** diagnostic settings
4. Click **+ Add diagnostic setting**

### Step 2: Configure General Settings

1. Enter a name (e.g., `NetwrixAuditorLogs`)
2. Under **Category groups**, select **Audit**
   - Only the **Audit** category group is supported by Netwrix Auditor

### Step 3: Configure Destination

1. Under **Destination details**, check **Archive to a storage account**
   - This is the **only supported option** for Netwrix Auditor
2. Select your **Log Storage Account**
3. Confirm the correct **subscription** and **storage account**

**Note:** Azure requires **two separate storage accounts:**
- One for file shares (data)
- One for audit logs

### Step 4: Save the Configuration

Click **Save**.
Azure Files audit logs will now be archived into your **Log Storage Account**

**At the end of this step, you should have:**
- A Diagnostic Setting under the File resource type
- Audit category group selected
- Destination set to Archive to a storage account
- Logs archiving into the Log Storage Account


## Checklist

- [Azure Application registered](#azure-application-registration) with App ID + Secret
- [API permissions](#configure-api-permissions) (User.Read, User.Read.All) granted
- [IAM roles assigned](#assign-iam-roles-to-the-app) (Reader, Storage File Data Privileged Reader, Storage Blob Data Reader)
- [Diagnostic Settings configured](#diagnostic-settings) to log to a Log Storage Account


## Next Steps

After completing the Azure Files configuration:

1. **Test Connectivity**: Verify authentication and access to storage accounts
2. **Create Monitoring Plan**: Configure Azure Files monitoring in Netwrix Auditor
3. **Validate Data Collection**: Confirm audit events are being collected

For detailed instructions on creating the monitoring plan, see the [Azure Files Monitoring Plan](/docs/auditor/10.9/admin/monitoringplans/azurefiles.md) documentation
