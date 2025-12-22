---
title: "Access Admin Center"
description: "Access Admin Center"
sidebar_position: 40
---

# Access Admin Center

Admin Center is a web-based application that can be accessed over the Internet and Intranet. It
comes with a default provider,Directory Manager, which primarily facilitates first-time login to the
application. Typically, the Directory Manager provider has one default user, _Super Admin_, that has
full access to the Admin Center. On signing in, this user can create identity stores and configure
settings to get the application ready for use.

## Sign In

You must connect the Admin Center to an identity store while signing in.

Use any of the following methods to connect and sign in:

- Select an identity store and enter the username and password of your identity store account.

    :::note
    To sign in using the Directory Manager provider, enter the username and password you
    provided for the _GroupID administrator_ on the Service Account Settings page of the
    Configuration Tool. See the
    [Configure a New Directory Manager Server with a New or an Existing Database](/docs/directorymanager/11.1/install/configure/gidserver.md)
    topic.
    :::


- Select an identity store and sign in using a SAML provider. This option is available if a SAML
  provider is configured with the selected identity store.

    :::note
    Microsoft Entra ID MFA enabled users cannot log into Directory Manager using their
    username and password. They will be authenticated through the SAML provider configured for in
    Directory Manager.
    :::


Next, you may have to pass second factor authentication, depending on whether it is enabled for your
role in the identity store. You can perform tasks in the Admin Center in keeping with your role and
permissions in the identity store.

**To Sign In**

Use one of the following methods to sign in.

- Type the Admin Center URL in the address bar of a web browser and press Enter. For example:  
  https://[machine name]:4443//AdminCenter
- On the Windows Start menu, search for the Directory Manager 11.x icon and double-click it to
  launch Admin Center in a browser window.

You can sign in using any of the following methods:

- With your Identity Store Account
- With a SAML Provider
- Access Admin Center

### With your Identity Store Account

Follow the steps to signin with your identify store account.

Step 1 – On the **GroupID Authenticate** page, click an identity store to connect to.

Step 2 – In the **Username** and **Password** boxes, enter the username and password of your
identity store account, or click **Edit** next to the identity store name to connect to a different
identity store.

Step 3 – After providing your credentials, click **Sign In**.

### With a SAML Provider

You can opt for single sign-on across all Directory Manager clients, provided that a SAML provider
is configured with Directory Manager. See the following topics for additional information on the
SAML provider configuration:

- [Configure Directory Manager in Microsoft Entra ID for SSO](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureinentra.md)
- [Configure the Microsoft Entra SSO Application in Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md)

On the **GroupID Authenticate** page, click the button or image for the provider and proceed to sign
in.

:::note
For Microsoft Entra ID MFA enabled users, a SAML provider must be configured for signing into
Directory Manager.
:::


### Pass Second Factor Authentication

The administrator can enable second factor authentication for a security role in an identity store.

If enabled for your role in the identity store, you must pass second factor authentication after
signing in via any of the above methods.

For second factor authentication, one of the following applies:

- If you have not enrolled your identity store account in Directory Manager, the Enroll Account page
  is displayed. You must enroll using at least one authentication type. See the
  [Enroll your Identity Store Account](/docs/directorymanager/11.1/admincenter/general/enroll.md) topic.
- If you have already enrolled your identity store account in Directory Manager, the Authenticate
  page is displayed. It lists the authentication type(s) your account is enrolled with. Select an
  authentication type to authenticate. See the
  [Authenticate your Identity Store Account](/docs/directorymanager/11.1/admincenter/general/authenticate.md) topic.

## Sign Out

In the Admin Center, click your name in the top right corner and select **Sign Out**.

## View the Application Version

You can view the Directory Manager version deployed in your environment.

In the Admin Center, click your name in the top right corner; the menu displays the running
Directory Manager version.

**See Also**

- [Getting Started](/docs/directorymanager/11.1/gettingstarted.md)
- [Dashboard](/docs/directorymanager/11.1/admincenter/general/dashboard.md)
- [Navigation](/docs/directorymanager/11.1/admincenter/general/navigation.md)
