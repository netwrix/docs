---
title: "Sign In to GroupID Using OneLogin"
description: "Choose SP-initiated or IdP-initiated single sign-on to sign in to a GroupID portal with your OneLogin account."
keywords:
  - GroupID OneLogin sign in
  - SP-initiated single sign-on
  - IdP-initiated single sign-on
  - OneLogin portal sign-in
sidebar_position: 30
---

# Sign In to GroupID Using OneLogin

In this example, OneLogin is configured with a GroupID client, the GroupID portal
_Wizard_. A user named Leo Ferguson is also created in OneLogin to sign in to the _Wizard_ portal
using the OneLogin single sign-on option.

For single sign-on using OneLogin, you can choose either of the following ways:

- SP-initiated single sign-on: The SSO operation starts at the service provider (SP), the GroupID
  portal _Wizard_.
- IdP-initiated single sign-on: The SSO operation starts at the identity provider (IdP), OneLogin.

## SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication (see step 11 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureoneloginindirectorymanager.md#configure-the-provider-in-groupid)
   topic).
2. Click the button or image for OneLogin. The OneLogin sign-in page opens.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is signed in to the
   _Wizard_ portal using the OneLogin single sign-on option.  
   Only users you defined for the app in OneLogin can sign in by entering their user names and
   passwords. See the
   [Define Users in OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#define-users-in-onelogin)
   topic.

With single sign-on, you can now launch any GroupID client without signing in again.

## IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and sign in. The OneLogin
   dashboard displays the apps configured with OneLogin for single sign-on.
2. Click an app to access it. Authentication isn't required.
