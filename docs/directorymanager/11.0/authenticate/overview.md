---
title: "Directory Manager Authenticate and SAML Single Sign-On"
description: "Learn how Authenticate provides SAML single sign-on for Directory Manager as a service provider or an identity provider."
keywords:
  - Directory Manager Authenticate
  - SAML 2.0 single sign-on
  - Directory Manager as a service provider
  - Directory Manager as an identity provider
  - multifactor authentication
sidebar_position: 70
---

# Directory Manager Authenticate and SAML Single Sign-On

Authenticate is a federation service that verifies a user's identity in an identity store before
allowing them to sign in to and use a Directory Manager application. With Authenticate, users get
single sign-on support across all Directory Manager applications that use the same identity
store.

You can use Directory Manager both as a service provider and as an identity provider.

## As a Service Provider

You can extend Authenticate with third-party single sign-on solutions that support the SAML 2.0
standard. Supported identity providers include:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

You can also implement multifactor authentication in Directory Manager using a third-party single
sign-on solution or with the options available in Directory Manager.

## As an Identity Provider

You can implement Directory Manager as an identity provider in your organization. An administrator
can configure third-party applications (service providers) with Directory Manager, in which case
Directory Manager authenticates and authorizes users for those applications.

## Launch Authenticate

In Admin Center, click **Manage SAML** in the top right corner to launch Authenticate.

The Authenticate page has four tabs. Of these, the following are used when configuring Directory
Manager as a service provider:

- **SAML Providers** - This tab displays the identity providers that have been configured for
  Directory Manager, if any. Use the **New Provider** button to add an identity provider.
- **Generate URLs** - This tab contains settings (such as the consumer URL and the metadata URL)
  that are used to configure Directory Manager in an identity provider.

The following tabs are used when configuring Directory Manager as an identity provider:

- **SAML Applications** - This tab displays the third-party applications that use Directory Manager
  as an identity provider. Use the **New Application** button to add a service provider.
- **Settings** - This tab contains default settings that are used while configuring Directory
  Manager as an identity provider within third-party applications.

See Also

- [Directory Manager as a Service Provider](/docs/directorymanager/11.0/authenticate/asserviceprovider/overview.md)
- [Directory Manager as an Identity Provider](/docs/directorymanager/11.0/authenticate/asidentityprovider/overview.md)
