---
title: "App Registration and Permissions"
description: "Azure AD app registration and API permissions for Entra ID"
sidebar_position: 10
---

# App Registration and Permissions

The Entra ID connector uses an Azure AD app registration with OAuth2 client credentials for authentication. You need to create an app registration in Azure and then add its credentials as a service account in Access Analyzer.

## Create an App Registration

1. Sign in to the [Azure portal](https://portal.azure.com)
2. Navigate to **Microsoft Entra ID** > **App registrations**
3. Click **New registration**
4. Enter a name (for example, `Netwrix Access Analyzer - Entra ID`)
5. Leave the redirect URI blank
6. Click **Register**

## Configure API Permissions

1. In the app registration, go to **API permissions**
2. Click **Add a permission** > **Microsoft Graph** > **Application permissions**
3. Add the following permissions:
   - `User.Read.All`
   - `Group.Read.All`
4. Click **Grant admin consent** for the permissions

## Create a Client Secret

1. Go to **Certificates & secrets**
2. Click **New client secret**
3. Enter a description and expiration period
4. Click **Add**
5. Copy the **Value** immediately — it is not shown again

## Add Entra ID as a Source in Access Analyzer

Entra ID sources are created through the **Connect Source** wizard, which guides you through a 3-step process:

### Step 1 — Select Source Type

1. Navigate to **Configuration** > **Sources** in Access Analyzer
2. Click **Connect Source** to open the wizard drawer
3. Select **Entra ID** from the source type cards
4. Click **Next**

### Step 2 — Configure Entra ID

1. Enter a **Source Group Name** (for example, `Corporate Entra ID`)
2. Select or create a **Service Account**:
   - Click **+ Create New Account** to add a new Entra ID service account
   - Enter the **Client ID** (Application ID from Azure) and **Client Secret**
   - Or select an existing Entra ID service account from the dropdown
3. Enter the **Tenant ID** — this is the Azure AD directory ID in UUID format (for example, `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. Optionally click **Test Connection** to verify OAuth2 authentication

:::note
The test connection validates that Access Analyzer can authenticate to the Microsoft Graph API with the provided credentials. Testing is optional — you can proceed without testing.
:::

### Step 3 — Set Up a Scan

1. The **Users, Groups and Roles** scan is automatically enabled (cannot be disabled)
2. Configure any additional sync options (for example, **Sync Sensitivity Labels**)
3. Choose when to run the first scan: now, at a scheduled time, or on a recurring schedule
4. Click **Complete Setup**

After setup, the source group is created and the scan runs according to your selected schedule.

## Related Topics

- [User and Group Sync](/docs/accessanalyzer/1_0/connectors/iam/entraid/usergroupsync) — What data is synchronized
- [Entra ID Requirements](/docs/accessanalyzer/1_0/requirements/connectors/entraid) — Permissions and prerequisites
