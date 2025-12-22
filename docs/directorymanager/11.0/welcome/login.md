---
title: "Access Portal"
description: "Access Portal"
sidebar_position: 10
---

# Access Portal

Use the GroupID portal URL the administrator has provided you to access the portal. The URL lands
you on the **Welcome to GroupID** page. Using this page, you can perform the following functions:

- Unlock your identity store account
- Reset forgotten or lost passwords
- Sign In

To manage access in GroupID, security roles are defined for an identity store. Each role is granted
a set of permissions that enable role members to access specific GroupID functions.

## Sign In

You must connect GroupID portal to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.
- Select an identity store and sign in using a SAML provider.  
  (This option is available if a SAML provider is configured with the selected identity store.)

    NOTE: Microsoft Entra ID MFA enabled users cannot log into GroupID using their username and
    password. They will be authenticated through the SAML provider configured for in GroupID.

- Scan the displayed QR code with the GroupID app installed on your smartphone.  
  (This option is available if the QR code feature is enabled for the identity store you want to
  connect to.)

Next, you may have to pass second factor authentication, depending on whether it is enabled for your
role in the identity store. You can perform tasks in GroupID portal in keeping with your role and
permissions in the identity store.

**To sign in:**

1. Type the GroupID portal URL in the address bar of a web browser and press Enter. For example:  
   https://[machine name]:4443/[portal name]
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

You can opt for single sign-on across all GroupID clients, provided that a SAML provider is
configured with GroupID. See the following topics for additional information on the SAML provider
configuration:

- [Configure GroupID in Microsoft Entra ID for SSO](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

NOTE: For Microsoft Entra ID multifactor-enabled users, a SAML provider must be configured for
signing into GroupID.

### With QR Code

If QR code is enabled for any of the identity stores, the **GroupID Authenticate** page displays the
code too. Use the QR code to sign into an identity store.

1. Open the GroupID app on your smartphone and connect to an identity store. This identity store
   should have the QR code feature enabled for it.  
   GroupID portal would connect to the same identity store you connect the app to.
2. Tap **Configure Application Using QR Code** in the app.
3. Capture the QR code through the app on your phone. One of the following happens:

    - If the identity store that the app is connected to does not have the QR code option enabled,
      an error message is displayed.
    - If the identity store that the app is connected to has the QR code option enabled, GroupID
      portal will connect to this identity store.

### Second Factor Authentication

When Second Factor Authentication is enabled for your role in the selected identity store, one of
the following applies:

- If you have not enrolled your identity store account in GroupID, the Enroll Account window is
  displayed. You must enroll your identity store account using at least one authentication type.

    See the
    [Enroll Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
    topic.

- If you have already enrolled your identity store account in GroupID, the Authenticate window is
  displayed. It lists the authentication types that you used to enroll your account with. You must
  authenticate your identity store account with one authentication type.

    See the
    [Authenticate Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/authenticateaccount.md)
    topic.

## Sign Out

In GroupID portal, click your profile info in the top right corner and select **Sign Out**.

**See Also**

- [Second Factor Authentication](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
- [Unlock your accounts](/docs/directorymanager/11.0/welcome/user/manage/unlockaccount.md)
- [Reset Passwords](/docs/directorymanager/11.0/welcome/secondfactorauthentication/passwordreset.md)
