---
title: "Sign In to Directory Manager Admin Center"
description: "Sign in to Admin Center with an identity store account, a SAML provider, or a QR code, and pass second factor authentication."
sidebar_position: 40
keywords:
  - Admin Center sign-in
  - Super Admin
  - SAML provider
  - second factor authentication
  - QR code sign-in
---

# Sign In to Directory Manager Admin Center

Admin Center is a web-based application that users can access over the Internet and intranet. It
comes with a default provider, _GroupID_, which primarily facilitates first-time sign-in to the
application. Typically, the _GroupID_ provider has one default user, _Super Admin_, that has full
access to Admin Center. On signing in, this user can create identity stores and configure settings
to get the application ready for use.

What do you want to do?

- [Sign In](#sign-in)
- [Sign Out](#sign-out)
- [View the Directory Manager Version](#view-the-directory-manager-version)
- [Modern Authentication Support](#modern-authentication-support)

## Sign In

You must connect Admin Center to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.

    :::note
    To sign in using the GroupID provider, enter the username and password you specified for
    _GroupID Administrator_ on the **Service Account Settings** page of the Configuration Tool. See
    the
    [Configure a Directory Manager Server and Database](/docs/directorymanager/11.0/about/configure/gidserver.md)
    topic.
    :::

- Select an identity store and sign in using a SAML provider.  
  (This option is available if the selected identity store has a SAML provider configured.)

    :::note
    Users with Microsoft Entra ID MFA enabled can't sign in to Directory Manager using their username and
    password. They authenticate through the SAML provider configured in Directory Manager.
    :::

- Scan the displayed QR code with the GroupID app installed on your smartphone.  
  (This option is available if the identity store you want to connect to has the QR code feature
  enabled.)

Next, you might have to pass second factor authentication, depending on whether your role in the
identity store requires it. You can perform tasks in Admin Center according to your role and
permissions in the identity store.

**To sign in:**

1. Enter the Admin Center URL in the address bar of a web browser and press Enter. For example:  
   `https://[machine name]:4443//AdminCenter`

    Or

    On the Windows Start menu, search for the GroupID 11.0 icon and double-click it to launch Admin
    Center in a browser window.

2. You can sign in using any of the following methods:

    - [With your Identity Store Account](#with-your-identity-store-account)
    - [With a SAML Provider](#with-a-saml-provider)
    - [With QR Code](#with-qr-code)

### With your Identity Store Account

1. On the **GroupID Authenticate** page, click an identity store to connect to.
2. In the **Username** and **Password** boxes, enter the username and password of your identity
   store account, or click **Edit** next to the identity store name to connect to a different
   identity store.
3. After providing your credentials, click **Sign In**.

### With a SAML Provider

You can use single sign-on across all Directory Manager clients if Directory Manager has a SAML
provider configured. See the following topics for additional information on the SAML provider
configuration:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

:::note
For users with Microsoft Entra ID MFA enabled, you must configure a SAML provider so that they can sign
in to Directory Manager.
:::

### With QR Code

If any of the identity stores has QR code enabled, the **GroupID Authenticate** page displays the
code too. Use the QR code to sign in to an identity store.

1. Open the GroupID app on your smartphone and connect to an identity store. This identity store
   should have the QR code feature enabled for it.  
   Admin Center connects to the same identity store as the app.
2. Tap **Configure Application Using QR Code** in the app.
3. Capture the QR code through the app on your phone. One of the following happens:

    - If the identity store that the app is connected to doesn't have the QR code option enabled,
      Directory Manager displays an error message.
    - If the identity store that the app is connected to has the QR code option enabled, Admin
      Center connects to this identity store.

### Pass Second Factor Authentication

The administrator can enable second factor authentication for a security role in an identity store.

If the administrator enables it for your role in the identity store, you must pass second factor authentication after
signing in with any of the [sign-in methods](#sign-in).

For second factor authentication, one of the following applies:

- If you haven't enrolled your identity store account in Directory Manager, Directory Manager displays the
  **Enroll Account** page. You must enroll using at least one authentication type. See the
  [Enroll Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
  topic.
- If you have already enrolled your identity store account in Directory Manager, Directory Manager displays the
  **Authenticate** page. It lists the authentication types your account is enrolled with. Select an
  authentication type to authenticate. See the
  [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
  topic.

## Sign Out

In Admin Center, click your name in the top right corner and select **Sign Out**.

## View the Directory Manager Version

You can view the Directory Manager 11 version deployed in your environment.

In Admin Center, click your name in the top right corner. The menu displays the running Directory Manager
version.

## Modern Authentication Support

When you create the Directory Manager app in Microsoft Entra Admin Center, you have to bind a certificate to
it. Export that certificate to PFX form.

For modern authentication, Directory Manager requires this PFX certificate to communicate with the Directory Manager app
in Microsoft Entra Admin Center.

In Directory Manager, you must provide this PFX certificate on the following pages:

- In the identity store connection settings while creating a Microsoft Entra ID identity store.
- In the messaging provider settings, when you set Exchange Online / Office 365 as the messaging provider.
- When you select AD as destination and Office 365 as messaging provider in a Synchronize job, you
  have to provide the certificate on the **Sync Object** page.

### OAuth Notifications

While configuring an SMTP server for an identity store, you can choose to provide OAuth notification
settings.

### Modern Authentication and gMSA Permissions

To use a group Managed Service Account (gMSA) as the service account for Directory Manager services and the app pool, do the following:

1. Add the gMSA account to the membership of the _IIS_IUSRS_ group on the Directory Manager server.
2. Add the _IIS_IUSRS_ group in the ‘Manage Private Keys’ permission for the certificate that
   Directory Manager uses for modern authentication.

**See Also**

- [Get Started with Directory Manager](/docs/directorymanager/11.0/gettingstarted.md)
- [Monitor Directory Manager with the Admin Center Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Navigate Admin Center in Directory Manager](/docs/directorymanager/11.0/signin/concepts/navigation.md)
