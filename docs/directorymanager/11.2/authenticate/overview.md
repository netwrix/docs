---
title: "Directory Manager Authenticate and SAML Single Sign-On"
description: "Authenticate is the federation service that provides SAML single sign-on for Directory Manager as a service provider or an identity provider."
keywords:
  - Directory Manager Authenticate
  - SAML 2.0 single sign-on
  - Directory Manager as a service provider
  - Directory Manager as an identity provider
  - multifactor authentication
sidebar_position: 80
---

# Directory Manager Authenticate and SAML Single Sign-On

Authenticate is a federation service. It verifies a user's identity in an identity store before the user signs in to a Directory Manager application. With Authenticate, users get single sign-on across all Directory Manager applications that use the same identity store.

You can use Directory Manager both as a service provider and as an identity provider.

## Using Directory Manager as a service provider

You can extend Authenticate with third-party single sign-on solutions that support the SAML 2.0 standard. Supported identity providers include:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

You can also implement multifactor authentication in Directory Manager. Use a third-party single sign-on solution or the options available in Directory Manager.

For more information, see [Directory Manager as a Service Provider](/docs/directorymanager/11.2/authenticate/asserviceprovider/overview.md).

## Using Directory Manager as an identity provider

You can implement Directory Manager as an identity provider in your organization. An administrator can configure third-party applications (service providers) with Directory Manager. Directory Manager then authenticates and authorizes users for those applications. For more information, see [Directory Manager as an Identity Provider](/docs/directorymanager/11.2/authenticate/asidentityprovider/overview.md).

## Launch Authenticate

In Admin Center, click **Manage SAML** in the top right corner to launch Authenticate.

The Authenticate page has four tabs. The following tabs are used when you configure Directory Manager as a service provider:

- **SAML Providers**: Displays the identity providers configured for Directory Manager, if any. Use the **New Provider** button to add an identity provider.
- **Generate URLs**: Contains settings, such as the consumer URL and the metadata URL, that you use to configure Directory Manager in an identity provider.

The following tabs are used when you configure Directory Manager as an identity provider:

- **SAML Applications**: Displays the third-party applications that use Directory Manager as an identity provider. Use the **New Application** button to add a service provider.
- **Settings**: Contains default settings that you use when you configure Directory Manager as an identity provider in third-party applications.
