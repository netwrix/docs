---
title: "Sign In Using GroupID"
description: "Sign In Using GroupID"
sidebar_position: 30
---

# Sign In Using GroupID

Let’s assume that we configured three service providers in GroupID. Users should be able to access
these applications through GroupID.

For single sign-on using GroupID, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from any
  of the registered service providers.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  GroupID.

### IdP-Initiated Single Sign-On

1. In GroupID Authenticate, go to the **SAML Applications** tab and click **New Application**.
2. On the **Create Application** page, click the _Login URL_ displayed in the **Metadata**
   section.  
   On clicking it, the user is redirected to the GroupID login page where GroupID is acting as an
   identity provider. If the user is already logged into GroupID, he/she will be auto-authenticated;
   else the user will have to provide the credentials.
