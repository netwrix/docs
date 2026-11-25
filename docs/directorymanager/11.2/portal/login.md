---
title: "Sign In to the Directory Manager Portal"
description: "Sign in to the Directory Manager portal with your identity store account or a SAML provider, complete second factor authentication, and sign out."
keywords:
  - portal sign in
  - identity store account
  - SAML provider
  - second factor authentication
  - Microsoft Entra ID SSO
sidebar_position: 10
---

# Sign In to the Directory Manager Portal

Use the Directory Manager portal URL that the administrator gave you to launch the portal. The portal to Directory Manager page opens. On this page, you can:

- Sign in
- Reset forgotten or lost passwords. See the [Reset Your Account Password in Directory Manager](/docs/directorymanager/11.2/portal/secondfactorauthentication/passwordreset.md) topic for more information.
- Unlock your identity store account. See the [Unlock your Directory Manager account](/docs/directorymanager/11.2/portal/user/manage/unlockaccount.md) topic for more information.

To manage access in Directory Manager, security roles are defined for an identity store. Each role is granted a set of permissions that let role members access specific functions.

## Log in

You must connect the portal to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.
- Select an identity store and sign in using a SAML provider. This option is available if a SAML provider is configured with the selected identity store.

Next, you might have to pass second factor authentication, depending on whether it's enabled for your role in the identity store. You can perform tasks in the Directory Manager portal in keeping with your role and permissions in the identity store.

To sign in:

1. Enter the portal URL in the address bar of a web browser and press Enter. For example:

   `https://[machine name]:4443/[portal name]`

2. Sign in using any of the following methods:

   - With your Identity Store Account
   - With a SAML Provider

**With your Identity Store Account**

1. Click **Log in to continue** on the portal to Directory Manager page.
2. On the Directory Manager Authenticate page, click an identity store to connect to. If only one identity store is associated with the portal, it's selected by default.
3. In the Username and Password boxes, enter the username and password of your identity store account. Alternatively, click **Edit** next to the identity store name to connect to a different identity store.
4. After providing your credentials, click **Sign In**.

:::note
Users with Microsoft Entra ID MFA enabled can't sign in to Directory Manager using their username and password. They are authenticated through the SAML provider configured in Directory Manager.
:::

**With a SAML Provider**

You can opt for single sign-on across all Directory Manager clients by configuring a SAML provider. For a Microsoft Entra ID identity store, you must configure a SAML provider. See the following topics for more information on configuring a SAML provider:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.2/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Entra ID Provider in Directory Manager](/docs/directorymanager/11.2/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

To sign in with a SAML provider:

1. Click **Log in to continue** on the portal to Directory Manager page.
2. On the Directory Manager Authenticate page, click the button or image for the provider and proceed to sign in.

### Second factor authentication

When [Second Factor Authentication in Directory Manager](/docs/directorymanager/11.2/portal/secondfactorauthentication/secondfactorauthentication.md) is enabled for your role in the selected identity store, one of the following applies:

- If you haven't enrolled your identity store account in Directory Manager, the Enroll Account window opens. You must enroll your identity store account using at least one authentication type. See the [Enroll Your Account in Directory Manager](/docs/directorymanager/11.2/admincenter/general/enroll.md) topic for more information.
- If you have already enrolled your identity store account in Directory Manager, the Authenticate window opens. It lists the authentication types that you enrolled your account with. You must authenticate your identity store account with one authentication type. See the [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.2/admincenter/general/authenticate.md) topic for more information.

## Sign out

In the portal, click your profile info in the top right corner and click **Sign Out**.
