---
title: "Sign In to Directory Manager Admin Center"
description: "Sign in to Admin Center with an identity store account or a SAML provider, pass second factor authentication, and learn how sign-in throttling works."
sidebar_position: 40
keywords:
  - Admin Center sign-in
  - Super Admin
  - SAML provider
  - second factor authentication
  - sign-in throttling
---

# Sign In to Directory Manager Admin Center

Admin Center is a web-based application that you can reach over the Internet and an intranet. It comes with a default provider, Directory Manager, which mainly handles first-time sign-in. Typically, the Directory Manager provider has one default user, _Super Admin_, with full access to Admin Center. After signing in, this user can create identity stores and configure settings to set up the application.

## Sign in

You must connect Admin Center to an identity store while signing in. Use either of these methods:

- Select an identity store, and enter the username and password of your identity store account.

    :::note
    To sign in using the Directory Manager provider, enter the username and password you
    provided for the _Directory Manager Administrator_ on the Service Account Settings page of the
    Configuration Tool. See the
    [Configure a Directory Manager Server and Database](/docs/directorymanager/11.1/install/configure/gidserver.md)
    topic.
    :::

- Select an identity store, and sign in using a SAML provider. This option is available if an administrator has configured a SAML provider for the selected identity store.

    :::note
    Users with Microsoft Entra ID MFA enabled can't sign in to Directory Manager using their
    username and password. Directory Manager authenticates them through the SAML provider configured in
    Directory Manager.
    :::

Next, you might have to pass second factor authentication, depending on whether your role in the identity store requires it. You can then perform tasks in Admin Center according to your role and permissions in the identity store.

**To sign in:**

Use one of these methods to open the sign-in page:

- Enter the Admin Center URL in the address bar of a web browser and press Enter. For example: `https://[machine name]:4443//AdminCenter`
- On the Windows Start menu, search for the Directory Manager 11.x icon and double-click it. Admin Center opens in a browser window.

### With your identity store account

To sign in with your identity store account:

1. On the **GroupID Authenticate** page, click an identity store to connect to.

2. In the **Username** and **Password** boxes, enter the username and password of your identity store account. Or click **Edit** next to the identity store name to connect to a different identity store.

3. Click **Sign In**.

### With a SAML provider

You can use single sign-on across all Directory Manager clients if you have configured a SAML provider in Directory Manager. For more information about the SAML provider configuration, see these topics:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Entra ID Provider in Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign in.

:::note
For users with Microsoft Entra ID MFA enabled, you must configure a SAML provider for signing in to
Directory Manager.
:::

### Pass second factor authentication

The administrator can enable second factor authentication for a security role in an identity store. If the administrator enables it for your role, you must pass second factor authentication after signing in with either method.

One of the following applies:

- If you haven't enrolled your identity store account in Directory Manager, Directory Manager displays the **Enroll Account** page. You must enroll using at least one authentication type. See the
  [Enroll Your Account in Directory Manager](/docs/directorymanager/11.1/admincenter/general/enroll.md) topic.
- If you have already enrolled your identity store account, Directory Manager displays the **Authenticate** page. It lists the authentication types you enrolled with. Select an authentication type to authenticate. See the
  [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.1/admincenter/general/authenticate.md) topic.

## Sign-in throttling

To protect against brute-force attacks, Directory Manager enforces sign-in throttling based on the originating IP address. This applies when you sign in using the Directory Manager provider.

- After 3 consecutive failed sign-in attempts, Directory Manager blocks your IP address for 5 minutes.
- When the lockout expires, you get one additional attempt:
    - If the attempt fails, Directory Manager locks out your IP address for another 5 minutes.
    - If the attempt succeeds, the attempt counter resets and you regain the full 3-attempt allowance.
- A successful sign-in at any point resets the attempt counter.

:::note
Directory Manager automatically unblocks locked IP addresses after the 5-minute timeout. To unblock an IP address immediately, an administrator can delete its record from the `ProviderLoginThrottle` table in the Directory Manager database.
:::

## Sign out

In Admin Center, click your name in the top right corner and select **Sign Out**.

## View the application version

You can view the Directory Manager version deployed in your environment. In Admin Center, click your name in the top right corner. The menu displays the running Directory Manager version.

**See Also**

- [Get Started with Directory Manager](/docs/directorymanager/11.1/gettingstarted.md)
- [Monitor Directory Manager with the Admin Center Dashboard](/docs/directorymanager/11.1/admincenter/general/dashboard.md)
- [Navigate Admin Center in Directory Manager](/docs/directorymanager/11.1/admincenter/general/navigation.md)
