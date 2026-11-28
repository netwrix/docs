---
title: "Sign In to the GroupID Portal"
description: "Sign in to the GroupID portal with your identity store account, a SAML provider, or a QR code, complete second factor authentication, and sign out."
keywords:
  - portal sign in
  - identity store account
  - SAML provider
  - QR code sign in
  - second factor authentication
sidebar_position: 10
---

# Sign In to the GroupID Portal

Use the portal URL that the administrator provided to access the GroupID portal. The URL
takes you to the **Welcome to GroupID** page, where you can:

- Unlock your identity store account
- Reset forgotten or lost passwords
- Sign in

To manage access in GroupID, security roles are defined for an identity store. Each role
is granted a set of permissions that enable role members to access specific GroupID
functions.

## Sign In

You must connect the GroupID portal to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.
- Select an identity store and sign in using a SAML provider.  
  (This option is available if a SAML provider is configured with the selected identity store.)

    :::note
    Users with Microsoft Entra ID MFA enabled can't sign in to GroupID using their
    username and password. They are authenticated through the SAML provider configured in GroupID.
    :::

- Scan the displayed QR code with the GroupID app installed on your smartphone.  
  (This option is available if the QR code feature is enabled for the identity store you want to
  connect to.)

Next, you may have to pass second factor authentication, depending on whether it's enabled for your
role in the identity store. You can perform tasks in the GroupID portal in keeping with
your role and permissions in the identity store.

To sign in:

1. Enter the portal URL in the address bar of a web browser and press Enter. For example:  
   `https://[machine name]:4443/[portal name]`
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

You can opt for single sign-on across all GroupID clients, provided that a SAML provider
is configured with GroupID. See the following topics for additional information on the SAML provider
configuration:

- [Configure GroupID in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

:::note
For users with Microsoft Entra ID multifactor authentication enabled, you must configure a SAML
provider to sign in to GroupID.
:::

### With QR Code

If QR code is enabled for any of the identity stores, the **GroupID Authenticate** page displays the
code too. Use the QR code to sign in to an identity store.

1. Open the GroupID app on your smartphone and connect to an identity store. This identity store
   should have the QR code feature enabled for it.  
   The portal connects to the same identity store that you connect the app to.
2. Tap **Configure Application Using QR Code** in the app.
3. Capture the QR code through the app on your phone. One of the following happens:

    - If the identity store that the app is connected to doesn't have the QR code option enabled,
      an error message is displayed.
    - If the identity store that the app is connected to has the QR code option enabled, the
      portal connects to this identity store.

### Second Factor Authentication

When Second Factor Authentication is enabled for your role in the selected identity store, one of
the following applies:

- If you haven't enrolled your identity store account in GroupID, the Enroll Account
  window is displayed. You must enroll your identity store account using at least one authentication type.

    See the
    [Enroll Your Identity Store Account in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
    topic.

- If you have already enrolled your identity store account in GroupID, the Authenticate window is
  displayed. It lists the authentication types that you used to enroll your account. You must
  authenticate your identity store account with one authentication type.

    See the
    [Authenticate Your Identity Store Account in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/authenticateaccount.md)
    topic.

## Sign Out

In the GroupID portal, click your profile info in the top right corner and select
**Sign Out**.

**See Also**

- [Second Factor Authentication in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Unlock your GroupID account](/docs/directorymanager/11.0/welcome/user/manage/unlockaccount.md)
- [Reset Your Account Password in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/passwordreset.md)
