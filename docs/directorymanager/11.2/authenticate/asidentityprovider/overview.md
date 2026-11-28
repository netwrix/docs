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

Directory Manager can act as an identity provider. Register a third-party application as a service provider in Directory Manager, and users authenticate in that application through Directory Manager.

## Registering a service provider

To use Directory Manager as an identity provider, register the application (service provider) in Directory Manager. See [Register a SAML Service Provider in Directory Manager](/docs/directorymanager/11.2/authenticate/asidentityprovider/register.md).

## Setting default values

You can also specify default values for the issuer URL and signing certificate that you use to configure Directory Manager in the service provider. See [Set Directory Manager Default Issuer URL and Certificate](/docs/directorymanager/11.2/authenticate/asidentityprovider/metadata.md).

## Signing in

To sign in using Directory Manager, see [Sign In to Third-Party Applications Using Directory Manager](/docs/directorymanager/11.2/authenticate/asidentityprovider/signin.md).
