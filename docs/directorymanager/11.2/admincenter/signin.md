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

Admin Center is a web-based application accessible over the Internet and intranet. It
comes with a default provider, Directory Manager, which primarily facilitates first-time sign-in to the
application. Typically, the Directory Manager provider has one default user, _Super Admin_, that has
full access to the Admin Center. On signing in, this user can create identity stores and configure
settings to set up the application.

## Sign In

You must connect Admin Center to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.

    :::note
    To sign in using the Directory Manager provider, enter the username and password you
    provided for the _Directory Manager Administrator_ on the Service Account Settings page of the
    Configuration Tool. See the
    [Configure a Directory Manager Server and Database](/docs/directorymanager/11.2/install/configure/gidserver.md)
    topic.
    :::


- Select an identity store and sign in using a SAML provider. This option is available if an
  administrator has configured a SAML provider for the selected identity store.

    :::note
    Users with Microsoft Entra ID MFA enabled can't sign in to Directory Manager using their
    username and password. Directory Manager authenticates them through the SAML provider configured in
    Directory Manager.
    :::


Next, you might have to pass second factor authentication, depending on whether your role in the
identity store requires it. You can perform tasks in Admin Center according to your role and
permissions in the identity store.

**To sign in:**

Use one of the following methods to sign in.

- Enter the Admin Center URL in the address bar of a web browser and press Enter. For example:  
  `https://[machine name]:4443//AdminCenter`
- On the Windows Start menu, search for the Directory Manager 11.x icon and double-click it to
  launch Admin Center in a browser window.

You can sign in using any of the following methods:

- With your identity store account
- With a SAML provider

### With Your Identity Store Account

Step 1 – On the **GroupID Authenticate** page, click an identity store to connect to.

Step 2 – In the **Username** and **Password** boxes, enter the username and password of your
identity store account, or click **Edit** next to the identity store name to connect to a different
identity store.

Step 3 – After providing your credentials, click **Sign In**.

### With a SAML Provider

You can use single sign-on across all Directory Manager clients if you have configured a SAML provider in Directory Manager. See the following topics for additional information on the
SAML provider configuration:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.2/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Entra ID Provider in Directory Manager](/docs/directorymanager/11.2/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

:::note
For users with Microsoft Entra ID MFA enabled, you must configure a SAML provider for signing in to
Directory Manager.
:::


### Pass Second Factor Authentication

The administrator can enable second factor authentication for a security role in an identity store.

If the administrator enables it for your role in the identity store, you must pass second factor authentication after
signing in via any of these methods.

For second factor authentication, one of the following applies:

- If you haven't enrolled your identity store account in Directory Manager, Directory Manager displays the **Enroll Account** page.
  You must enroll using at least one authentication type. See the
  [Enroll Your Account in Directory Manager](/docs/directorymanager/11.2/admincenter/general/enroll.md) topic.
- If you have already enrolled your identity store account in Directory Manager, Directory Manager displays the **Authenticate**
  page. It lists the authentication types you enrolled with. Select an
  authentication type to authenticate. See the
  [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.2/admincenter/general/authenticate.md) topic.

## Sign-in Throttling

To protect against brute-force attacks, Directory Manager enforces sign-in throttling based on the originating IP address. This applies when signing in using the Directory Manager provider.

- After 3 consecutive failed sign-in attempts, Directory Manager blocks your IP address for 5 minutes.
- When the lockout expires, you get one additional attempt:
    - If the attempt fails, Directory Manager locks out your IP address for another 5 minutes.
    - If the attempt succeeds, the attempt counter resets and you regain the full 3-attempt allowance.
- A successful sign-in at any point resets the attempt counter.

:::note
Directory Manager automatically unblocks locked IP addresses after the 5-minute timeout. To unblock an IP address immediately, an administrator can delete its record from the `ProviderLoginThrottle` table in the Directory Manager database.
:::


## Sign Out

In the Admin Center, click your name in the top right corner and select **Sign Out**.

## View the Application Version

You can view the Directory Manager version deployed in your environment.

In the Admin Center, click your name in the top right corner; the menu displays the running
Directory Manager version.

**See Also**

- [Get Started with Directory Manager](/docs/directorymanager/11.2/gettingstarted.md)
- [Monitor Directory Manager with the Admin Center Dashboard](/docs/directorymanager/11.2/admincenter/general/dashboard.md)
- [Navigate Admin Center in Directory Manager](/docs/directorymanager/11.2/admincenter/general/navigation.md)
