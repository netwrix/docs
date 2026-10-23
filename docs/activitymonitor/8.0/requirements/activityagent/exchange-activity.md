---
title: "Exchange Online Activity Auditing Configuration"
description: "Exchange Online Activity Auditing Configuration"
sidebar_position: 10
---

# Exchange Online Activity Auditing Configuration

To collect logs and monitor Exchange Online activity using the Netwrix Activity Monitor, register it
with Microsoft® Entra ID® (formerly Azure AD).

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Additional Requirement**

In addition to registering the application with Microsoft Entra ID, the following is required:

- Enable Auditing for Exchange Online

See the Enable Auditing for Exchange Online topic for additional information.

**Configuration Settings from the Registered Application**

After registering the application, collect the following settings from your tenant:

- Tenant ID – This is the Tenant ID for Microsoft Entra ID
- Client ID – This is the Application (client) ID for the registered application
- Client Secret – This is the Client Secret Value generated when a new secret is created

    :::warning
    It isn't possible to retrieve the value after saving the new key. It must be
    copied first.
    :::


**Permissions for Microsoft Graph API**

- Application:

    - Directory.Read.All – Read directory data
    - User.Read.All – Read all users' full profiles

**Permissions for Office 365 Management APIs**

- Application Permissions:

    - ActivityFeed.Read – Read activity data for your organization
    - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data

## Register a Microsoft Entra ID Application

:::note
These steps are for registering an app through the Microsoft Entra admin center. The steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.
:::

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).
2. On the left navigation menu, navigate to **Identity** > **Applications** and click **App registrations**.
3. In the top toolbar, click **New registration**.
4. On the **Register an application** page, enter the following information:
   - Name – Enter a user-facing display name for the application, for example Netwrix Activity Monitor for Exchange
   - Supported account types – Select **Accounts in this organizational directory only**
   - Redirect URI – Set the Redirect URI to **Public client/native** (Mobile and desktop) from the dropdown menu. In the text box, enter the following:

   **urn:ietf:wg:oauth:2.0:oob**

5. Click **Register**.

The Overview page for the newly registered app opens. Review the newly created registered
application. Now that the application has been registered, permissions need to be granted to it.

## Grant Permissions to the Registered Application

:::note
These steps are for registering an app through the Microsoft Entra admin center. The steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.
:::

1. Select the newly-created, registered application. If you left the Overview page, it will be listed in **Identity** > **Applications** > **App registrations** > **All applications**.
2. On the registered app blade, click **API permissions** in the Manage section.
3. In the top toolbar, click **Add a permission**.
4. On the **Request API permissions** blade, select **Microsoft Graph** on the **Microsoft APIs** tab and select the following permissions:

- Application:

    - Directory.Read.All – Read directory data
    - User.Read.All – Read all users' full profiles

5. At the bottom of the page, click **Add Permissions**.
6. In the top toolbar, click **Add a permission**.
7. On the **Request API permissions** blade, select **Office 365 Management APIs** on the **Microsoft APIs** tab and select the following permissions:

- Application Permissions:

    - ActivityFeed.Read – Read activity data for your organization
    - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data

8. At the bottom of the page, click **Add Permissions**.
9. Click **Grant Admin Consent for [tenant]**, then click **Yes** in the confirmation window.

Now that the permissions have been granted to it, the settings required for Activity Monitor need to
be collected.

## Identify the Client ID

:::note
These steps are for registering an app through the Microsoft Entra admin center. The steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.
:::

1. Select the newly-created, registered application. If you left the Overview page, it will be listed in **Identity** > **Applications** > **App registrations** > **All applications**.
2. Copy the **Application (client) ID** value.
3. Save this value in a text file.

This is needed for adding a Exchange Online host in the Activity Monitor. See the
[Exchange Online](/docs/activitymonitor/8.0/admin/monitoredhosts/add/exchangeonline.md) topic for
additional information. Next identify the Tenant ID.

## Identify the Tenant ID

The Tenant ID is available in two locations within Microsoft Entra ID.

**Registered Application Overview Blade**

You can copy the Tenant ID from the same page where you just copied the Client ID.

1. Copy the **Directory (tenant) ID** value.
2. Save this value in a text file.

This is needed for adding a Exchange Online host in the Activity Monitor. See the
[Exchange Online](/docs/activitymonitor/8.0/admin/monitoredhosts/add/exchangeonline.md) topic for
additional information. Next identify the Tenant ID. Next generate the application’s Client Secret
Key.

**Overview Page**

:::note
These steps are for registering an app through the Microsoft Entra admin center. The steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.
:::

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).
2. Copy the **Tenant ID** value.
3. Save this value in a text file.

This is needed for adding a Exchange Online host in the Activity Monitor. See the
[Exchange Online](/docs/activitymonitor/8.0/admin/monitoredhosts/add/exchangeonline.md) topic for
additional information. Next identify the Tenant ID. Next generate the application’s Client Secret
Key.

## Generate the Client Secret Key

:::warning
You can't retrieve the value after saving the new key. Copy it first.
:::

:::note
These steps are for registering an app through the Microsoft Entra admin center. The steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.
:::

1. Select the newly-created, registered application. If you left the Overview page, it will be listed in **Identity** > **Applications** > **App registrations** > **All applications**.
2. On the registered app blade, click **Certificates & secrets** in the Manage section.
3. In the top toolbar, click **New client secret**.
4. On the **Add a client secret** blade, complete the following:

- Description – Enter a unique description for this secret
- Expires – Select the duration.

    :::note
    Setting an expiration date requires reconfiguration at the time of expiration. It's best to configure the key to expire in 1 or 2 years.
    :::

5. Click **Add** to generate the key.

:::warning
If you leave this page before copying the key, you can't retrieve it later and will need to repeat the process.
:::

6. The **Client Secret** is displayed in the **Value** column. Use the copy button to copy it.
7. Save this value in a text file.

This is needed for adding a Exchange Online host in the Activity Monitor. See the
[Exchange Online](/docs/activitymonitor/8.0/admin/monitoredhosts/add/exchangeonline.md) topic for
additional information.

## Enable Auditing for Exchange Online

1. In the Microsoft Purview compliance portal at [https://compliance.microsoft.com](https://compliance.microsoft.com/), go to **Solutions** > **Audit**. Alternatively, go directly to the Audit page at [https://compliance.microsoft.com/auditlogsearch](https://compliance.microsoft.com/auditlogsearch).
2. If auditing isn't enabled for your organization, a banner prompts you to start recording user and admin activity.
3. Select the **Start recording user and admin activity** banner.

It may take several hours before events appear in the application. The Activity Monitor now has
Exchange Online auditing enabled as needed to receive events. See the Microsoft
[Turn auditing on or off](https://learn.microsoft.com/en-us/microsoft-365/compliance/audit-log-enable-disable?view=o365-worldwide)
article for additional information on enabling or disabling auditing.

**Alternative Verification Method**

Use the following command in Exchange Online PowerShell to verify auditing has been enabled:

```
Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled
```

A value of **True** for the `UnifiedAuditLogIngestionEnabled` property indicates that auditing is
turned on.

If auditing is turned off, use either the button on the Audit page or the following command:

```
Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true
```

Auditing is now enabled. You can rerun the previous command to verify this.
