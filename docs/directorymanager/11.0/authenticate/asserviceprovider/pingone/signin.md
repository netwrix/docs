---
title: "Sign In Using PingOne"
description: "Sign In Using PingOne"
sidebar_position: 30
---

# Sign In Using PingOne

We configured PingOne with a GroupID client, that is the GroupID portal _Wizard_ in our example. We
also created a user in PingOne who should be able to sign into the _Wizard_ portal using the PingOne
single sign-on option.

For single sign-on using PingOne, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  PingOne.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 10 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/pingone/configurepingoneindirectorymanager.md#configure-the-provider-in-groupid)
   topic).
2. Click the button for PingOne; the PingOne Sign In page is displayed.
3. Enter your credentials and sign in. You will be routed to the main page of the GroupID portal
   _Wizard_.  
   Only users defined for our app in PingOne can log in using PingOne single sign-on. See the
   [Configure Users in PingOne](/docs/directorymanager/11.0/authenticate/asserviceprovider/pingone/configureinpingone.md#configure-users-in-pingone)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the PingOne portal using the URL provided by your organization and sign in.  
   The PingOne dashboard will be displayed. It lists the apps configured with PingOne for single
   sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.
