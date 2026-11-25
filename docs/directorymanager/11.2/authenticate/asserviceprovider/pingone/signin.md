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

PingOne is configured with a Directory Manager client, such as the Directory Manager portal Wizard. Users are created in PingOne to sign in to the Wizard portal using the PingOne single sign-on option.

You can sign in with single sign-on using PingOne in either of these ways:

- **SP-initiated single sign-on**: The service provider (SP) starts the single sign-on operation. Here, the SP is the Directory Manager portal, Wizard.
- **IdP-initiated single sign-on**: The identity provider (IdP) starts the single sign-on operation. Here, the IdP is PingOne.

## SP-initiated single sign-on

1. Launch the Directory Manager portal Wizard.

   The availability of the user name and password fields depends on whether you disabled Directory Manager Authentication. See step 10 in the [Configure the Provider in Directory Manager](configurepingoneindirectorymanager.md#configure-the-provider-in-directory-manager) topic.

2. Click the button for PingOne. The PingOne Sign In page appears.
3. Enter your credentials and sign in. The system routes you to the main page of the Directory Manager portal Wizard.

   Only users defined for the Directory Manager app in PingOne can sign in using PingOne single sign-on. See the [Configure Users in PingOne](configureinpingone.md#configure-users-in-pingone) topic.

With single sign-on, you can now launch any Directory Manager client without signing in again.

## IdP-initiated single sign-on

1. Launch the PingOne portal using the URL your organization provides, and sign in.

   The PingOne dashboard appears and lists the apps configured with PingOne for single sign-on.

2. Click an app to access it. Authentication isn't required.
