---
title: "Install Platform Governance for Salesforce"
description: "Install Platform Governance for Salesforce"
sidebar_position: 10
---

# Install Platform Governance for Salesforce

The Netwrix customer success team sends you a package installation file. To install Platform Governance for Salesforce:

1. Click the install URL. If installing in the sandbox, replace the initial portion of the URL
   with [http://test.salesforce.com](http://test.salesforce.com)
2. Select **Install for Admins Only**
3. Click **Install**
   ![install1](/images/platgovsalesforce/installing_strongpoint/install1.webp)

:::note
The installation runs in the background. You receive an email notification when the installation completes.
:::

## Configure Authentication

After installing the package, you need to configure authentication credentials. Platform Governance for Salesforce supports two authentication methods:

### Recommended: Named Credential Authentication (OAuth)

**This is the recommended approach** for all organizations, and is **required** when user profiles have High Assurance enabled.

Named Credentials provide:
- **High Assurance compatibility** - Required when Salesforce profiles have High Assurance enabled
- **Independent authentication** - Doesn't rely on specific user credentials, improving security and reliability
- **Automatic token refresh** - No session expiration issues
- **Enhanced security** - Limited OAuth scopes instead of full user permissions

:::tip Recommended Setup
For detailed step-by-step instructions on configuring Named Credentials with External Client App and OAuth, see [Named Credential Setup](named_credential.md).
:::

### Legacy: Session ID Authentication

The traditional method uses direct user credentials (username, password, and security token) to authenticate API calls. **This method doesn't require a Connected App**, but has significant limitations:

- **Doesn't work with High Assurance** - Fails when user profiles have High Assurance enabled
- **User-dependent** - Relies on specific user credentials; if using this method, Netwrix recommends creating a dedicated Integration User for this purpose

:::warning High Assurance Incompatibility
If your Salesforce organization has **High Assurance enabled on user profiles**, you **must** use the Named Credential authentication method. Session ID authentication will not work with High Assurance. While many organizations associate High Assurance with MFA requirements, the High Assurance setting itself makes Named Credentials mandatory.
:::

<details>
<summary>Legacy Session ID Setup</summary>

This method uses direct user credentials without requiring a Connected App setup.

**Requirements:**
- Salesforce **username** (Netwrix recommends using a dedicated Integration User)
- Salesforce **password**
- Salesforce **security token** (obtained from user settings)

**Configuration:**
Enter the credentials directly in the Platform Governance application during the Getting Started Wizard. You don't need a Connected App or OAuth configuration.

**Best Practice:**
When using Session ID authentication, create a dedicated Integration User specifically for Platform Governance. This approach provides better control and reduces dependencies on individual user accounts.

**Limitations:**
- Doesn't work when user profiles have High Assurance enabled
- Depends on specific user credentials, creating maintenance overhead
- Not suitable for organizations with High Assurance requirements

</details>

## Assign Permission Set to Users

After configuring authentication, you must assign the required Permission Set to users who will access Platform Governance for Salesforce, and to any users running scheduled jobs or background processes the application requires.

This is required because the Permission Set grants access to the data and system processes Platform Governance uses, including metadata scanning and other automated operations.

### Assign Netwrix Grant Permissions

1. Navigate to **Setup** > **Users** > **Permission Sets**
2. Search for and click **Netwrix Grant Permissions**
![NetwrixPermissionSet](/images/platgovsalesforce/installing_strongpoint/NetwrixPermissionSet.webp)
3. Click **Manage Assignments**
![ManageAssignment](/images/platgovsalesforce/installing_strongpoint/ManageAssignment.webp)
4. Click **Add Assignments**
![AddAssignment](/images/platgovsalesforce/installing_strongpoint/AddAssignment.webp)
5. Select the users who need access to Platform Governance for Salesforce
6. Click **Assign**
7. Click **Done**

:::note Required Permission Set
All users who access the Netwrix Lightning application need the **Netwrix Grant Permissions** permission set. Without this permission set, users cannot use Platform Governance for Salesforce.
:::

### Verify Permission Assignment

To verify that you assigned the permission set correctly:

1. Navigate to **Setup** > **Users** > **Users**
2. Click a user who should have access
3. Scroll to the **Permission Set Assignments** section
4. Verify that **Netwrix Grant Permissions** appears in the list

## Access the Netwrix Lightning Application

After configuring authentication (either Named Credentials or Session ID), access the Platform Governance application:

1. Open the Salesforce **App Launcher** (grid icon in the top navigation)
2. Search for and select **Netwrix Lightning**
![NetwrixLightning](/images/platgovsalesforce/installing_strongpoint/NetwrixLightningMenu.webp)
3. A window will appear displaying the License Agreement and EULA. Review the contents carefully and then select **Accept**.

![eula](/images/platgovsalesforce/installing_strongpoint/eula.webp)

You can now use Platform Governance for Salesforce.

## Next Steps

After completing the installation and authentication setup:

1. **Configure Authentication:**
   - **Recommended:** [Named Credential Setup](named_credential.md) - Required for High Assurance profiles, recommended for all organizations
   - **Legacy:** Session ID setup - Only for organizations without High Assurance

2. **Initial Configuration:**
   - [Run the Getting Started Wizard](using_getting_started_wizard.md)
