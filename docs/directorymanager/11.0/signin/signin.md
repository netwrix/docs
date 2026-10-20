---
title: "Access Admin Center"
description: "Access Admin Center"
sidebar_position: 40
---

# Access Admin Center

Admin Center is a web-based application that users can access over the Internet and Intranet. It
comes with a default provider, _GroupID_, which primarily facilitates first-time log in to the
application. Typically, the _GroupID_ provider has one default user, _Super Admin_, that has full
access to Admin Center. On signing in, this user can create identity stores and configure settings
to get the application ready for use.

What do you want to do?

- [Sign In](#sign-in)
- [Sign Out](#sign-out)
- [View the GroupID Version](#view-the-groupid-version)
- [Modern Authentication Support](#modern-authentication-support)

## Sign In

You must connect Admin Center to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.

    :::note
    To sign in using the GroupID provider, enter the username and password you specified for
    _GroupID Administrator_ on the **Service Account Settings** page of the Configuration Tool. See
    the
    [Configure a new GroupID server with a new or an existing database](/docs/directorymanager/11.0/about/configure/gidserver.md)
    topic.
    :::

- Select an identity store and sign in using a SAML provider.  
  (This option is available if the selected identity store has a SAML provider configured.)

    :::note
    Microsoft Entra ID MFA enabled users can't log into GroupID using their username and
    password. They authenticate through the SAML provider configured in GroupID.
    :::

- Scan the displayed QR code with the GroupID app installed on your smartphone.  
  (This option is available if the identity store you want to connect to has the QR code feature
  enabled.)

Next, you may have to pass second factor authentication, depending on whether your role in the
identity store requires it. You can perform tasks in Admin Center according to your role and
permissions in the identity store.

**To sign in:**

1. Enter the Admin Center URL in the address bar of a web browser and press Enter. For example:  
   https://[machine name]:4443//AdminCenter

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

You can opt for single sign-on across all GroupID clients, provided that GroupID has a SAML
provider configured. See the following topics for additional information on the SAML provider
configuration:

- [Configure GroupID in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

:::note
For Microsoft Entra ID MFA enabled users, you must configure a SAML provider so that they can sign
into GroupID.
:::

### With QR Code

If any of the identity stores has QR code enabled, the **GroupID Authenticate** page displays the
code too. Use the QR code to sign into an identity store.

1. Open the GroupID app on your smartphone and connect to an identity store. This identity store
   should have the QR code feature enabled for it.  
   Admin Center would connect to the same identity store you connect the app to.
2. Tap **Configure Application Using QR Code** in the app.
3. Capture the QR code through the app on your phone. One of the following happens:

    - If the identity store that the app is connected to doesn't have the QR code option enabled,
      GroupID displays an error message.
    - If the identity store that the app is connected to has the QR code option enabled, Admin
      Center will connect to this identity store.

### Pass Second Factor Authentication

The administrator can enable second factor authentication for a security role in an identity store.

If enabled for your role in the identity store, you must pass second factor authentication after
signing in via any of the [sign-in methods](#sign-in).

For second factor authentication, one of the following applies:

- If you have not enrolled your identity store account in GroupID, GroupID displays the
  **Enroll Account** page. You must enroll using at least one authentication type. See the
  [Enroll with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
  topic.
- If you have already enrolled your identity store account in GroupID, GroupID displays the
  **Authenticate** page. It lists the authentication types your account is enrolled with. Select an
  authentication type to authenticate. See the
  [Authenticate with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
  topic.

## Sign Out

In Admin Center, click your name in the top right corner and select **Sign Out**.

## View the GroupID Version

You can view the GroupID 11 version deployed in your environment.

In Admin Center, click your name in the top right corner; the menu displays the running GroupID
version.

## Modern Authentication Support

When you create the GroupID app in Microsoft Entra Admin Center, you have to bind a certificate to
it. Export that certificate to PFX form.

For modern authentication, GroupID requires this PFX certificate to communicate with the GroupID app
in Microsoft Entra Admin Center.

In GroupID, you must provide this PFX certificate on the following pages:

- In Identity store connection settings while creating a Microsoft Entra ID identity store.
- In messaging provider settings (when you set Exchange Online / Office 365 as the messaging provider).
- When you select AD as destination and Office 365 as messaging provider in a Synchronize job, you
  have to provide the certificate on the Sync Object page.

### OAuth Notifications

While configuring an SMTP server for an identity store, you can choose to provide OAuth notification
settings.

### Modern Authentication and gMSA Permissions

To use a group Managed Service Account (gMSA) as service account for GroupID services and app pool, do the following:

1. Add the gMSA account to the membership of the _IIS_IUSRS_ group on the GroupID server.
2. Then, add the _IIS_IUSRS_ group in the ‘Manage Private Keys’ permission for the certificate that
   GroupID uses for modern authentication.

See Also

- [Getting Started](/docs/directorymanager/11.0/gettingstarted.md)
- [Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Navigation](/docs/directorymanager/11.0/signin/concepts/navigation.md)
