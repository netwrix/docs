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

**This is the recommended approach** for all organizations, and is **required** when High Assurance is enabled on user profiles.

Named Credentials provide:
- **High Assurance compatibility** - Required when Salesforce profiles have High Assurance enabled
- **Independent authentication** - Does not rely on specific user credentials, improving security and reliability
- **Automatic token refresh** - No session expiration issues
- **Enhanced security** - Limited OAuth scopes instead of full user permissions

:::tip Recommended Setup
For detailed step-by-step instructions on configuring Named Credentials with External Client App and OAuth, see [Named Credential Setup](named_credential.md).
:::

### Legacy: Session ID Authentication

The traditional method uses direct user credentials (username, password, and security token) to authenticate API calls. **This method does not require a Connected App**, but has significant limitations:

- **Does not work with High Assurance** - Fails when High Assurance is enabled on user profiles
- **User-dependent** - Relies on specific user credentials; if using this method, we recommend creating a dedicated Integration User for this purpose

:::warning High Assurance Incompatibility
If your Salesforce organization has **High Assurance enabled on user profiles**, you **must** use the Named Credential authentication method. Session ID authentication will not work with High Assurance. While High Assurance is often associated with MFA requirements, it is the High Assurance setting itself that makes Named Credentials mandatory.
:::

<details>
<summary>Legacy Session ID Setup</summary>

This method uses direct user credentials without requiring a Connected App setup.

**Requirements:**
- Salesforce **username** (we recommend using a dedicated Integration User)
- Salesforce **password**
- Salesforce **security token** (obtained from user settings)

**Configuration:**
The credentials are entered directly in the Platform Governance application during the Getting Started Wizard. No Connected App or OAuth configuration is needed.

**Best Practice:**
When using Session ID authentication, create a dedicated Integration User specifically for Platform Governance. This approach provides better control and reduces dependencies on individual user accounts.

**Limitations:**
- Cannot be used if High Assurance is enabled on user profiles
- Depends on specific user credentials, creating maintenance overhead
- Not suitable for organizations with High Assurance requirements

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
3. A window will appear displaying the License Agreement and EULA. Please review the contents carefully and then select **Accept**.

![eula](/images/platgovsalesforce/installing_strongpoint/eula.webp)

You are now ready to begin using Platform Governance for Salesforce.

## Next Steps

After completing the installation and authentication setup:

1. **Configure Authentication:**
   - **Recommended:** [Named Credential Setup](named_credential.md) - Required for High Assurance profiles, recommended for all organizations
   - **Legacy:** Session ID setup - Only for organizations without High Assurance

2. **Initial Configuration:**
   - [Run the Getting Started Wizard](using_getting_started_wizard.md)