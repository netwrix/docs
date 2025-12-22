---
title: "Sign In Using OneLogin"
description: "Sign In Using OneLogin"
sidebar_position: 30
---

# Sign In Using OneLogin

We configured OneLogin with a GroupID client, that is the GroupID portal _Wizard_ in our example. We
also created a user, Leo Ferguson, in OneLogin who should be able to log into the _Wizard_ portal
using the OneLogin single sign-on option.

For single sign-on using OneLogin, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  OneLogin.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 11 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureoneloginindirectorymanager.md#configure-the-provider-in-groupid)
   topic).
2. Click the button or image for OneLogin; the OneLogin sign in page is displayed.
3. Enter Leo Ferguson’s login name and password, and click **Login**. The user is successfully
   logged into the _Wizard_ portal using the OneLogin single sign on option.  
   Only users defined for our app in OneLogin can log in by entering their user names and passwords.
   See the
   [Define Users in OneLogin](/docs/directorymanager/11.0/authenticate/asserviceprovider/onelogin/configureinonelogin.md#define-users-in-onelogin)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the OneLogin portal using the URL provided by your organization and log in. The OneLogin
   dashboard displays the apps configured with OneLogin for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.
