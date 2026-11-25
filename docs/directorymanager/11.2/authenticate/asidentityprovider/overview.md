---
title: "Directory Manager as an Identity Provider"
description: "Use Directory Manager as a SAML identity provider so users sign in to third-party applications with their Directory Manager credentials."
keywords:
  - Directory Manager identity provider
  - SAML single sign-on
  - service provider registration
  - Directory Manager Authenticate
  - third-party application SSO
sidebar_position: 10
---

# Directory Manager as an Identity Provider

Directory Manager can provide the services of an identity provider. You can register a third-party
application as a service provider in Directory Manager to authenticate users in that application
through Directory Manager.

To use Directory Manager as an identity provider, register an application (service provider) in
Directory Manager. See the
[Register a SAML Service Provider in Directory Manager](/docs/directorymanager/11.2/authenticate/asidentityprovider/register.md) topic for additional
information.

You can also specify default values for the issuer URL and signing certificate that are used to
configure Directory Manager in the service provider. See the
[Set Directory Manager Default Issuer URL and Certificate](/docs/directorymanager/11.2/authenticate/asidentityprovider/metadata.md) topic for additional information.

To sign in using Directory Manager, see the [Sign In to Third-Party Applications Using Directory Manager](/docs/directorymanager/11.2/authenticate/asidentityprovider/signin.md) topic.
