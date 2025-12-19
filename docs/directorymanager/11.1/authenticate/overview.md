---
title: "Authenticate"
description: "Authenticate"
sidebar_position: 80
---

# Authenticate

Authenticate is a federation service that verifies a user's identity in an identity store before
allowing them to log in and use a Directory Manager application. With Authenticate, users are
provided single sign-on support across all Directory Manager applications that use the same identity
store.

You can use Directory Manager both as a service provider and as an identity provider.

#### As a Service Provider

Authenticate can be extended with third party single sign-on solutions that support the SAML 2.0
standard. Supported identity providers include:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

You can also implement multifactor authentication in `Directory Manager using a third-party single
sign-on solution or with the options available in Directory Manager.

See the [Directory Manager as a Service Provider](/docs/directorymanager/11.1/authenticate/asserviceprovider/overview.md) topic for
additional information.

#### As an Identity Provider

Directory Manager can be implemented as an identity provider in your organization. The administrator
can configure third-party applications (service providers) with Directory Manager, in which case
Directory Manager authenticates and authorizes users for those applications. See the
[Directory Manager as an Identity Provider](/docs/directorymanager/11.1/authenticate/asidentityprovider/overview.md) topic for additional
information.

## Launch Authenticate

In Admin Center, click **Manage SAML** in the top right corner to launch Authenticate.

The Authenticate page has four tabs. Of these, the following are used when configuring Directory
Manager as a service provider:

- SAML Providers – This tab displays the identity providers that have been configured for Directory
  Manager. if any. Use the New Provider button to add an identity provider.
- Generate URLs – This tab contains settings (such as the consumer URL and the metadata URL) that
  are used to configure Directory Manager in an identity provider.

The following tabs are used when configuring Directory Manager as an identity provider:

- SAML Applications – This tab displays the third-party applications that use Directory Manager as
  an identity provider. Use the New Application button to add a service provider.
- Settings – his tab contains default settings that are used while configuring Directory Manager as
  an identity provider within third-party applications.
