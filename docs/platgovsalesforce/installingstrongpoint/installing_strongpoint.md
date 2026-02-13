---
title: "Install Platform Governance for Salesforce"
description: "Install Platform Governance for Salesforce"
sidebar_position: 10
---

# Install Platform Governance for Salesforce

Platform Governance for Salesforce is installed with package installation file sent to you by our
customer success team. To install:

1. Click on the install URL, if installing in the sandbox, replace the initial portion of the URL
   with [http://test.salesforce.com](http://test.salesforce.com)
2. Select **Install for Admins Only**
3. Click **Install**
   ![install1](/images/platgovsalesforce/installing_strongpoint/install1.webp)

:::note
The installation runs in the background. An email notification is sent to you when the installation
is complete.
:::

## Configure Authentication

After installing the package, you need to configure authentication credentials. Platform Governance for Salesforce supports two authentication methods:

### Recommended: Named Credential Authentication (OAuth)

**This is the recommended approach**, especially for organizations with Multi-Factor Authentication (MFA) enabled.

Named Credentials provide:
- **MFA compatibility** - Works seamlessly with Salesforce MFA requirements
- **Automatic token refresh** - No session expiration issues
- **Enhanced security** - Limited OAuth scopes instead of full user permissions

:::tip Recommended Setup
For detailed step-by-step instructions on configuring Named Credentials with External Client App and OAuth, see [Named Credential Setup](named_credential.md).
:::

### Legacy: Session ID Authentication

The traditional method uses direct user credentials (username, password, and security token) to authenticate API calls. **This method does not require a Connected App**, but has significant limitations:

- **Does not work with MFA** - Fails when Multi-Factor Authentication is enabled
- **Session expiration** - Requires manual re-authentication when sessions expire
- **Less secure** - Uses full user permissions for all API calls

:::warning MFA Incompatibility
If your Salesforce organization has MFA enabled (required by Salesforce as of February 2022), you **must** use the Named Credential authentication method. Session ID authentication will not work with MFA.
:::

<details>
<summary>Legacy Session ID Setup (Not Recommended - MFA Incompatible)</summary>

This method uses direct user credentials without requiring a Connected App setup.

**Requirements:**
- Salesforce **username**
- Salesforce **password**
- Salesforce **security token** (obtained from user settings)

**Configuration:**
The credentials are entered directly in the Platform Governance application during the Getting Started Wizard. No Connected App or OAuth configuration is needed.

**Limitations:**
- Cannot be used if MFA is enabled
- Session expires based on org security policies
- Requires user to remain active in Salesforce
- Not suitable for production environments

</details>

## Assign Permission Set to Users

After configuring authentication, you must assign the required Permission Set to users who will access Platform Governance for Salesforce.

### Assign Netwrix Grant Permissions

1. Navigate to **Setup** > **Users** > **Permission Sets**
2. Search for and click on **Netwrix Grant Permissions**
![NetwrixPermissionSet](/images/platgovsalesforce/installing_strongpoint/NetwrixPermissionSet.webp)
3. Click **Manage Assignments**
![ManageAssignment](/images/platgovsalesforce/installing_strongpoint/ManageAssignment.webp)
4. Click **Add Assignments**
![AddAssignment](/images/platgovsalesforce/installing_strongpoint/AddAssignment.webp)
5. Select the users who need access to Platform Governance for Salesforce
6. Click **Assign**
7. Click **Done**

:::note Required Permission Set
The **Netwrix Grant Permissions** permission set is required for all users who will access the Netwrix Lightning application. Without this permission set, users will not be able to use Platform Governance for Salesforce.
:::

### Verify Permission Assignment

To verify that the permission set has been assigned correctly:

1. Navigate to **Setup** > **Users** > **Users**
2. Click on a user who should have access
3. Scroll to the **Permission Set Assignments** section
4. Verify that **Netwrix Grant Permissions** appears in the list

## Access the Netwrix Lightning Application

After configuring authentication (either Named Credentials or Session ID), access the Platform Governance application:

1. Open the Salesforce **App Launcher** (grid icon in the top navigation)
2. Search for and select **Netwrix Lightning**
![NetwrixLightning](/images/platgovsalesforce/installing_strongpoint/NetwrixLightningMenu.webp)
3. Click **I Accept** to accept the End User License Agreement (EULA)

![eula](/images/platgovsalesforce/installing_strongpoint/eula.webp)

You are now ready to begin using Platform Governance for Salesforce.

## Next Steps

After completing the installation and authentication setup:

1. **Configure Authentication:**
   - **Recommended:** [Named Credential Setup](named_credential.md) - For MFA-enabled organizations
   - **Legacy:** Session ID setup

2. **Initial Configuration:**
   - [Run the Getting Started Wizard](using_getting_started_wizard.md)