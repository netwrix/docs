---
title: "Access the Portal"
description: "Access the Portal"
sidebar_position: 10
---

# Access the Portal

Use the Directory Manager portal URL the administrator has provided you to launch the portal. The
portal to Directory Manager page is displayed, where you can:

- Log in
- Reset forgotten or lost passwords  
  See the [Reset Passwords](/docs/directorymanager/11.1/portal/secondfactorauthentication/passwordreset.md) topic for additional information
  on how to reset password.
- Unlock your identity store account  
  See the [Unlock your accounts](/docs/directorymanager/11.1/portal/user/manage/unlockaccount.md) topic for additional information on
  how to unlock account.

To manage access in Directory Manager, security roles are defined for an identity store. Each role
is granted a set of permissions that enable role members to access specific functions.

## Log in

You must connect the portal to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.
- Select an identity store and sign in using a SAML provider.  
  This option is available if a SAML provider is configured with the selected identity store.

Next, you may have to pass second factor authentication, depending on whether it is enabled for your
role in the identity store. You can perform tasks in Directory Manager portal in keeping with your
role and permissions in the identity store.

Follow the steps to log in.

Step 1 – Enter the portal URL in the address bar of a web browser and press Enter. For example:

`https://[machine name]:4443/[portal name]`

Step 2 – You can sign in using any of the following methods:

- With your Identity Store Account
- With a SAML Provider

**With your Identity Store Account**

Step 1 – Click **Log in to continue** on the portal to Directory Manager page.

Step 2 – On the Directory ManagerAuthenticate page, click an identity store to connect to. If only
one identity store is associated with the portal, it is selected by default.

Step 3 – In the Username and Password boxes, enter the username and password of your identity store
account, or click **Edit** next to the identity store name to connect to a different identity store.

Step 4 – After providing your credentials, click **Sign In**.

:::note
Microsoft Entra ID MFA enabled users cannot log into Directory Manager using their username
and password. They will be authenticated through the SAML provider configured in Directory Manager.
:::

**With a SAML Provider**

You can opt for single sign-on across all Directory Manager clients by configuring a SAML provider
but for an Microsoft Entra ID identity store you must configure a SAML provider. See the following
topics for additional information on configuring a SAML provider:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

Follow the steps to log in with a SAML provider

Step 1 – Click **Log in to continue** on the portal to Directory Managerpage.

Step 2 – On the Directory Manager Authenticate page, click the button or image for the provider and
proceed to sign in.

### Second Factor Authentication

When [Second Factor Authentication](/docs/directorymanager/11.1/portal/secondfactorauthentication/secondfactorauthentication.md) is enabled
for your role in the selected identity store, one of the following applies:

- If you have not enrolled your identity store account in Directory Manager, the Enroll Account
  window is displayed, where you must enroll your identity store account using at least one
  authentication type. See the [Enroll your Identity Store Account](/docs/directorymanager/11.1/admincenter/general/enroll.md) topic
  for additional information.
- If you have already enrolled your identity store account in Directory Manager, the Authenticate
  window is displayed. It lists the authentication types that you enrolled your account with. You
  must authenticate your identity store account with one authentication type. See the
  [Authenticate your Identity Store Account](/docs/directorymanager/11.1/admincenter/general/authenticate.md) topic for additional
  information.

## Sign Out

In the portal, click your profile info in the top right corner and click **Sign Out**.
