---
title: "Sign In to Third-Party Applications Using GroupID"
description: "Use SP-initiated or IdP-initiated single sign-on to access registered third-party applications through GroupID."
keywords:
  - GroupID single sign-on
  - IdP-initiated SSO
  - SP-initiated SSO
  - GroupID login URL
  - SAML applications
sidebar_position: 30
---

# Sign In to Third-Party Applications Using GroupID

Three service providers are configured in GroupID. Users can access these applications
through GroupID.

For single sign-on (SSO) using GroupID, choose either of the following methods:

- SP-initiated single sign-on - the SSO operation is initiated from the service provider (SP) end,
  that is, from any of the registered service providers.
- IdP-initiated single sign-on - the SSO operation is initiated from the identity provider (IdP)
  end, that is, from GroupID.

## IdP-Initiated Single Sign-On

1. In GroupID Authenticate, go to the **SAML Applications** tab and click **New
   Application**.
2. On the **Create Application** page, click the _Login URL_ displayed in the **Metadata**
   section.  
   The user is redirected to the GroupID login page, where GroupID is acting as
   an identity provider. If the user is already signed in to GroupID, the user is
   auto-authenticated. Otherwise, the user must provide credentials.
