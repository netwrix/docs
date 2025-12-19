---
title: "Sign In Using Okta"
description: "Sign In Using Okta"
sidebar_position: 30
---

# Sign In Using Okta

We configured Okta with a GroupID client, that is the GroupID portal _Wizard_ in our example. For
single sign-on using Okta, we can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  GroupID portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  Okta.

### SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   On the **Login** page, notice the Okta button. You can login using your GroupID credentials or
   click Okta to log in.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication or not (see step 9 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/configureoktaindirectorymanager.md#configure-the-provider-in-groupid)
   topic).
2. Click the button/image/link for Okta; the Okta Sign In page is displayed.
3. Enter your credentials and click **Sign In**. You will be routed to the main page of the GroupID
   portal _Wizard_.  
   Only users defined for our app in Okta can log in by entering their user names and passwords. See
   the
   [Configure Users in Okta](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/configureinokta.md#configure-users-in-okta)
   topic.

With single sign-on, you can now launch any GroupID client without having to sign in again.

### IdP-Initiated Single Sign-On

1. Launch the Okta portal using the URL provided by your organization and sign in. The Okta
   dashboard displays the apps configured with Okta for single sign-on.
2. On clicking an app, you will be redirected to it. Authentication will not be required.
