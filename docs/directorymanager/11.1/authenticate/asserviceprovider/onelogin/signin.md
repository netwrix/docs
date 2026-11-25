---
title: "Sign In to Directory Manager Using OneLogin"
description: "Choose SP-initiated or IdP-initiated single sign-on to sign in to a Directory Manager portal with your OneLogin account."
keywords:
  - Directory Manager OneLogin sign in
  - SP-initiated single sign-on
  - IdP-initiated single sign-on
  - OneLogin portal sign-in
sidebar_position: 40
---

# Sign In to Directory Manager Using OneLogin

You must configure OneLogin with a Directory Manager client, such as the Directory Manager portal
_Wizard_ in this example. You must also create a user named Leo Ferguson in OneLogin to sign in to
the _Wizard_ portal using the OneLogin single sign-on option.

For single sign-on using OneLogin, you can choose either of the following ways:

- SP-initiated single sign-on: The SSO operation starts at the service provider (SP), the Directory Manager portal _Wizard_.
- IdP-initiated single sign-on: The SSO operation starts at the identity provider (IdP), OneLogin.

## SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication (see step 11 in the
   [Configure the Provider in Directory Manager](configureoneloginindirectorymanager.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button or image for OneLogin; the OneLogin sign-in page opens.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is signed in to the _Wizard_ portal using the OneLogin single sign-on option.  
   Only users you defined for the app in OneLogin can sign in by entering their user names and passwords.
   See the [Define Users in OneLogin](configureinonelogin.md#define-users-in-onelogin) topic.

With single sign-on, you can now launch any Directory Manager client without signing in again.

## IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and sign in. The OneLogin
   dashboard displays the apps configured with OneLogin for single sign-on.
2. Click an app to access it. Authentication isn't required.
