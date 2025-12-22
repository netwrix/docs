---
title: "Sign In Using AD FS"
description: "Sign In Using AD FS"
sidebar_position: 40
---

# Sign In Using AD FS

We configured the ADS FS provider with a Directory Manager client, that is the Directory Manager
portal _Wizard_ in our example. For single sign-on using AD FS, we can choose any of the following
ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from AD
  FS.

### SP-Initiated Single Sign-On

Step 1 – Launch the Directory Manager portal _Wizard_.  
On the Login page, the availability of the user name and password fields depends on whether you
disabled Directory Manager Authentication or not (see step 2 in the
[Specify Advanced Configurations](configureadfsindirectorymanager.md#specify-advanced-configurations)
topic).  
The AD FS option may be displayed as a button or an image.

Step 2 – Click the AD FS button or image; you will be redirected to the AD FS authentication page
with the URL you provided as the IDP login URL (see the
[Provide IDP Login URL](configureadfsindirectorymanager.md#provide-idp-login-url) topic).

Step 3 – Sign in as an Active Directory regular user. On signing in, the authentication is routed to
AD FS, that will validate the user with respect to the specified attribute (i.e., user principal
name – UPN in our case) and log him or her into the Directory Manager portal.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

Step 1 – Launch the ADF FS portal using the URL provided by your organization and sign in. The AD FS
dashboard will be displayed.

Step 2 – From the Sign in to one of the following sites list, select a relying party trust. This
list contains the relying party trusts configured with AD FS for single sign-on.

Step 3 – Click **Sign in**; you will be redirected to it. Authentication will not be required.
