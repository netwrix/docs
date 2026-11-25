---
title: "Sign In to Directory Manager Using AD FS"
description: "Sign in to a Directory Manager portal with AD FS using SP-initiated or IdP-initiated single sign-on."
keywords:
  - Directory Manager AD FS sign in
  - SP-initiated single sign-on
  - IdP-initiated single sign-on
  - AD FS relying party sign in
  - AD FS dashboard sign in
sidebar_position: 30
---

# Sign In to Directory Manager Using AD FS

This example configures the AD FS provider with a Directory Manager client, specifically the
Directory Manager portal _Wizard_. For single sign-on using AD FS, you can use either of the
following methods:

- SP-initiated single sign-on – the SSO operation starts from the service provider (SP) end, that
  is, from the Directory Manager portal, Wizard.
- IdP-initiated single sign-on – the SSO operation starts from the identity provider (IdP) end, that
  is, from AD FS.

## SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   On the **Login** page, the availability of the user name and password fields depends on whether
   you disabled GroupID Authentication (see step 2 in the
   [Specify Advanced Configurations](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#specify-advanced-configurations)
   topic).  
   The AD FS option can appear as a button or an image.
2. Click the AD FS button or image. You're redirected to the AD FS authentication page with the URL
   you provided as the IdP login URL (see the
   [Provide IDP Login URL](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md#provide-idp-login-url)
   topic).
3. Sign in as a regular Active Directory user. The authentication is routed to AD FS, which
   validates the user against the specified attribute (that is, the user principal name – UPN in
   this example) and signs the user in to the Directory Manager portal.

With single sign-on, you can launch any Directory Manager client without having to sign in again.

## IdP-Initiated Single Sign-On

1. Launch the AD FS portal using the URL provided by your organization and sign in. The AD FS
   dashboard opens.
2. From the **Sign in to one of the following sites** list, select a relying party trust.  
   This list contains the relying party trusts configured with AD FS for single sign-on.
3. Click **Sign in**. AD FS redirects you to the selected relying party, and authentication isn't
   required.
