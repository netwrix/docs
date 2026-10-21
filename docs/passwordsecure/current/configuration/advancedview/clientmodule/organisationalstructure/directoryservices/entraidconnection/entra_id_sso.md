---
title: "Single sign-On (SSO)"
description: "Configure Microsoft Entra ID Single sign-on (SSO) so users sign in to the Netwrix Password Secure Windows components without entering credentials again."
sidebar_position: 9
---

# Single sign-on (SSO)

With Single sign-on (SSO), users provisioned from Microsoft Entra ID sign in to the Windows components of Netwrix Password Secure without authenticating again. This works when they have already authenticated on a Microsoft Entra ID joined device. The Windows components are the Windows App and the Autofill add-on.

:::info

The information on this page is valid for version **26.10.10** and newer.

:::

## Prerequisites

- An existing Microsoft Entra ID profile in Netwrix Password Secure. See [Microsoft Entra ID connection](/docs/passwordsecure/current/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/entraidconnection/entra_id_connection.md).
- An app registration for Netwrix Password Secure in Microsoft Entra ID, which you created as part of that connection.
- An account with administrative permissions in Microsoft Entra ID.
- Client devices that are Microsoft Entra ID joined.

## Configure Microsoft Entra ID

To configure SSO, you expose an API on the app registration, authorize the app to use it, and grant admin consent. For this, sign in to the [Azure portal](https://portal.azure.com/#azure-portal), navigate to your Entra ID, and open the app registration for Netwrix Password Secure.

### Expose an API

1. Select **Expose an API**.
2. Add an Application ID URI if none exists.
3. Click **Add a scope**.
4. Enter `passwordsecure.sso.auth` as the scope name.
5. Under **Who can consent?**, select **Admins only**.
6. Set the state to **Enabled**.
7. Click **Add scope**.

![Create an API scope](/images/passwordsecure/current/entra_id_sso/1_Expose-an-API_Add-scope.webp)

### Authorize the client application

1. On the **Expose an API** page, under **Authorized client applications**, click **Add a client application**.
2. In **Client ID**, enter the Application (client) ID of the Netwrix Password Secure app registration.
3. Select the `passwordsecure.sso.auth` scope.
4. Click **Add application**.

![Authorize the client application](/images/passwordsecure/current/entra_id_sso/2_Expose-an-API_Add-client-application.webp)

### Add the API permission

1. Select **API permissions**.
2. Click **Add a permission**.
3. Select the **APIs my organization uses** tab.
4. Select your Netwrix Password Secure app registration.
5. Select **Delegated permissions**.
6. Select the `passwordsecure.sso.auth` permission.
7. Click **Add permissions**.

![Add API permission - Step 1](/images/passwordsecure/current/entra_id_sso/3_API-permissions_Add1.webp)
![Add API permission - Step 2](/images/passwordsecure/current/entra_id_sso/4_API-permissions_Add2.webp)

### Grant admin consent

On the **API permissions** page, click **Grant admin consent for** your organization, and then confirm. The **Status** column for the `passwordsecure.sso.auth` permission shows that you granted consent.

![Grant admin consent](/images/passwordsecure/current/entra_id_sso/5_API-permissions_Admin-consent.webp)

## Configure Netwrix Password Secure

1. Enable SSO authentication in the Entra ID profile:
   1. In the Advanced view, open the **Organisational structure** module and select **Directory services**.
   2. Open the Entra ID profile and enable **Allow Single sign-on**.
   3. Save the profile.

   ![Activate Entra ID profile setting](/images/passwordsecure/current/entra_id_sso/6_Entra-Id-profile.webp)

2. Grant the user right **Can authenticate with Entra ID Single sign-on in Windows applications** to the roles or users that can use Entra ID SSO authentication.

   ![User right for users and roles](/images/passwordsecure/current/entra_id_sso/7_User-right.webp)

After you complete both steps, users with the permission sign in to the Windows App and the Autofill add-on using SSO from a Microsoft Entra ID joined device.
