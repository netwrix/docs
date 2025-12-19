---
title: "Authenticate"
description: "Authenticate"
sidebar_position: 70
---

# Authenticate

Authenticate is a federation service that verifies a user's identity in an identity store before
allowing them to log in and use a GroupID application. With Authenticate, users are provided single
sign-on support across all GroupID applications that use the same identity store.

You can use GroupID both as a service provider and as an identity provider.

#### As a Service Provider

Authenticate can be extended with third party single sign-on solutions that support the SAML 2.0
standard. Supported identity providers include:

- AD FS
- Microsoft Entra ID SSO
- Okta
- PingOne
- OneLogin

You can also implement multifactor authentication in `GroupID using a third-party single sign-on
solution or with the options available in GroupID.

#### As an Identity Provider

GroupID can be implemented as an identity provider in your organization. The administrator can
configure third-party applications (service providers) with GroupID, in which case GroupID
authenticates and authorizes users for those applications.

## Launch Authenticate

In Admin Center, click **Manage SAML** in the top right corner to launch Authenticate.

The Authenticate page has four tabs. Of these, the following are used when configuring GroupID as a
service provider:

- **SAML Providers** - This tab displays the identity providers that have been configured for
  GroupID. if any. Use the **New Provider** button to add an identity provider.
- **Generate URLs** - This tab contains settings (such as the consumer URL and the metadata URL)
  that are used to configure GroupID in an identity provider.

The following tabs are used when configuring GroupID as an identity provider:

- **SAML Applications** - This tab displays the third-party applications that use GroupID as an
  identity provider. Use the **New Application** button to add a service provider.
- **Settings** - This tab contains default settings that are used while configuring GroupID as an
  identity provider within third-party applications.

See Also

- [GroupID as a Service Provider](/docs/directorymanager/11.0/authenticate/asserviceprovider/overview.md)
- [GroupID as an Identity Provider](/docs/directorymanager/11.0/authenticate/asidentityprovider/overview.md)
