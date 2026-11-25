---
title: "Sign In to Directory Manager Using PingOne"
description: "Sign in to Directory Manager with PingOne single sign-on, either from the Directory Manager portal or from the PingOne dashboard."
keywords:
  - Directory Manager PingOne sign in
  - PingOne SP-initiated single sign-on
  - PingOne IdP-initiated single sign-on
  - PingOne dashboard sign-in
sidebar_position: 40
---

# Sign In to Directory Manager Using PingOne

PingOne is configured with a Directory Manager client, such as the Directory Manager portal _Wizard_.
Users are created in PingOne to sign in to the _Wizard_
portal using the PingOne single sign-on option.

For single sign-on using PingOne, you can choose either of the following ways:

- SP-initiated single sign-on - the SSO operation is initiated from the service provider (SP) end,
  that is, from the Directory Manager portal, Wizard.
- IdP-initiated single sign-on - the SSO operation is initiated from the identity provider (IdP)
  end, that is, from PingOne.

## SP-Initiated Single Sign-On

1. Launch the Directory Manager portal _Wizard_.  
   The availability of the user name and password fields depends on whether you disabled Directory
   Manager Authentication (see step 10 in the
   [Configure the Provider in Directory Manager](configurepingoneindirectorymanager.md#configure-the-provider-in-directory-manager)
   topic).
2. Click the button for PingOne. The PingOne Sign In page appears.
3. Enter your credentials and sign in. The system routes you to the main page of the Directory Manager
   portal _Wizard_.  
   Only users defined for the Directory Manager app in PingOne can sign in using PingOne single
   sign-on. See the
   [Configure Users in PingOne](configureinpingone.md#configure-users-in-pingone) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in
again.

## IdP-Initiated Single Sign-On

1. Launch the PingOne portal using the URL provided by your organization and sign in.  
   The PingOne dashboard appears, listing the apps configured with PingOne for single
   sign-on.
2. Click an app to access it. Authentication isn't required.
