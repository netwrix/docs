---
title: "Sign In Using PingOne"
description: "Sign In Using PingOne"
sidebar_position: 40
---

# Sign In Using PingOne

PingOne is configured with a Directory Manager client, such as the Directory Manager portal _Wizard_.
Users are created in PingOne to sign into the _Wizard_
portal using the PingOne single sign-on option.

For single sign-on using PingOne, you can choose any of the following ways:

- SP-initiated single sign-on - when the SSO operation is initiated from the SP end, i.e., from the
  Directory Manager portal, Wizard.
- IdP-initiated single sign-on - when the SSO operation is initiated from the IdP end, i.e., from
  PingOne.

### SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication or not (see step 10 in the
   [Configure the Provider in Directory Manager](configurepingoneindirectorymanager.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button for PingOne. The PingOne Sign In page appears.
3. Enter your credentials and sign in. The system routes you to the main page of the Directory Manager
   portal _Wizard_.  
   Only users defined for the Directory Manager app in PingOne can log in using PingOne single sign-on. See the
   [Configure Users in PingOne](configureinpingone.md#configure-users-in-pingone) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

### IdP-Initiated Single Sign-On

1. Launch the PingOne portal using the URL provided by your organization and sign in.  
   The PingOne dashboard appears, listing the apps configured with PingOne for single
   sign-on.
2. Click an app to access it. Authentication isn't required.
