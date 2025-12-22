---
title: "Sign In Using Directory Manager"
description: "Sign In Using Directory Manager"
sidebar_position: 30
---

# Sign In Using Directory Manager

Let’s assume that we configured three service providers in Directory Manager. Users should be able
to access these applications through Directory Manager.

For single sign-on using Directory Manager, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from any
  of the registered service providers.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  Directory Manager.

### IdP-Initiated Single Sign-On

Step 1 – In Directory Manager Authenticate, go to the SAML Applications tab and click **New
Application**.

Step 2 – On the Create Application page, click the _Login URL_ displayed in the Metadata section.  
On clicking it, the user is redirected to the Directory Manager login page where Directory Manager
is acting as an identity provider. If the user is already logged into Directory Manager, he/she will
be auto-authenticated; else the user will have to provide the credentials.
