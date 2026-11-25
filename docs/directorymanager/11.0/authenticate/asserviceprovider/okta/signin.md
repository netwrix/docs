---
title: "Sign In to Directory Manager Using Okta"
description: "Sign in to the Directory Manager portal with Okta single sign-on, using either SP-initiated or IdP-initiated sign-in."
keywords:
  - Directory Manager Okta sign-in
  - Okta single sign-on
  - SP-initiated SSO
  - IdP-initiated SSO
sidebar_position: 30
---

# Sign In to Directory Manager Using Okta

This example configures Okta with a Directory Manager client, the Directory Manager portal
_Wizard_. For single sign-on using Okta, you can use either of the following methods:

- SP-initiated single sign-on: the SSO operation is initiated from the SP end, that is, from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on: the SSO operation is initiated from the IdP end, that is, from
  Okta.

## SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   On the **Login** page, notice the **Okta** button. You can sign in using your Directory Manager
   credentials or click **Okta** to sign in.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager authentication (see step 9 in the
   [Configure the Provider in Directory Manager](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/configureoktaindirectorymanager.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button, image, or link for Okta. The Okta Sign In page is displayed.
3. Enter your credentials and click **Sign In**. You are routed to the main page of the Directory
   Manager portal _Wizard_.  
   Only users defined for the Directory Manager app in Okta can sign in by entering their user
   names and passwords. See the
   [Configure Users in Okta](/docs/directorymanager/11.0/authenticate/asserviceprovider/okta/configureinokta.md#configure-users-in-okta)
   topic.

With single sign-on, you can launch any Directory Manager client without having to sign in again.

## IdP-Initiated Single Sign-On

1. Launch the Okta portal using the URL provided by your organization and sign in. The Okta
   dashboard displays the apps configured with Okta for single sign-on.
2. When you click an app, you are redirected to it. Authentication isn't required.
