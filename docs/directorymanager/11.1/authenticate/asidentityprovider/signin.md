---
title: "Sign In to Third-Party Applications Using Directory Manager"
description: "Use SP-initiated or IdP-initiated single sign-on to access registered third-party applications through Directory Manager."
keywords:
  - Directory Manager single sign-on
  - IdP-initiated SSO
  - SP-initiated SSO
  - Directory Manager login URL
  - SAML applications
sidebar_position: 30
---

# Sign In to Third-Party Applications Using Directory Manager

Three service providers are configured in Directory Manager. Users can access these applications through Directory Manager.

For single sign-on (SSO) using Directory Manager, choose either of the following methods:

- SP-initiated single sign-on: the service provider (SP) initiates the SSO operation. This means any of the registered service providers.
- IdP-initiated single sign-on: the identity provider (IdP) initiates the SSO operation. This means Directory Manager.

## IdP-initiated single sign-on

To sign in with IdP-initiated single sign-on:

1. In Directory Manager Authenticate, go to the **SAML Applications** tab and click **New Application**.
2. On the Create Application page, click the **Login URL** displayed in the Metadata section.

   The user is redirected to the Directory Manager login page, where Directory Manager acts as an identity provider. If the user is already signed in to Directory Manager, the user is auto-authenticated. Otherwise, the user must provide credentials.
