---
title: "Azure Files Configuration Overview"
description: "Configure Azure Files for monitoring with Netwrix Auditor v10.8"
sidebar_position: 1
---

# Azure Files Configuration Overview

Configure Azure Files monitoring with Netwrix Auditor by setting up Azure AD application registration, permissions, and diagnostic settings.

## Prerequisites

- **Azure Files License** - Azure Files is a paid data source requiring specific licensing
- **Azure Subscription** with Azure Files storage accounts (Standard and Premium supported)
- **Global Administrator** or **Security Administrator** role in Azure AD
- **Storage Account Contributor** role on target storage accounts
- **Separate Storage Accounts** - Requires separate storage accounts for data and audit logs

## Configuration Steps Overview

1. **[Azure Application Registration](#azure-application-registration)** - Create Azure AD application
2. **[Permissions Setup](#permissions-setup)** - Assign required permissions
3. **[Diagnostic Settings](#diagnostic-settings)** - Configure audit logging

## Azure Application Registration

Create an application in Microsoft Entra ID (Azure AD):

1. Navigate to **Azure Active Directory > App registrations**
2. Click **New registration**
3. Configure:
   - **Name**: `Netwrix-Auditor-AzureFiles-Monitor`
   - **Supported account types**: Accounts in this organizational directory only
4. Click **Register**
5. Go to **Certificates & secrets** > **New client secret**
6. Record these values for Netwrix Auditor:
   - **Tenant ID** (use ID, not tenant name)
   - **Application (Client) ID**
   - **Client Secret**

## Diagnostic Settings

Configure diagnostic settings for each storage account containing file shares:

1. Navigate to **Storage Account > Monitoring > Diagnostic settings**
2. Click **Add diagnostic setting**
3. Configure:
   - **Name**: `Netwrix-AzureFiles-Audit`
   - **Log Categories**: Select all file service categories:
     - StorageRead
     - StorageWrite 
     - StorageDelete
   - **Destination**: Archive to storage account (separate audit logs storage account)

## Permissions Setup

### Required Permissions

Assign these permissions to your Azure application:

**Microsoft Graph API:**
- User.Read
- User.Read.All

**Storage Account Roles:**
- Reader (Resource Group level)
- Storage File Data Privileged Reader
- Storage Blob Data Reader (for audit logs)

### Assign Permissions

1. **Graph API**: In Azure AD application > **API permissions** > **Add permission** > **Microsoft Graph** > Select permissions > **Grant admin consent**
2. **Storage**: In **Storage Account > Access control (IAM)** > **Add role assignment** > Assign required roles

## Next Steps

After completing the Azure Files configuration:

1. **Test Connectivity**: Verify authentication and access to storage accounts
2. **Create Monitoring Plan**: Configure Azure Files monitoring in Netwrix Auditor
3. **Validate Data Collection**: Confirm audit events are being collected

For detailed instructions on creating the monitoring plan, see the [Azure Files Monitoring Plan](/docs/auditor/10.8/admin/monitoringplans/azurefiles.md) documentation.