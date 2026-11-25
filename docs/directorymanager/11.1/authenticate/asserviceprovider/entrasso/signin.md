---
title: "Sign In to Directory Manager Using Microsoft Entra ID SSO"
description: "Sign in to the Directory Manager portal with Microsoft Entra ID SSO, using either SP-initiated or IdP-initiated single sign-on."
keywords:
  - Directory Manager sign in
  - Microsoft Entra ID SSO sign in
  - SP-initiated SSO
  - IdP-initiated SSO
  - Directory Manager portal
sidebar_position: 40
---

# Sign In to Directory Manager Using Microsoft Entra ID SSO

You configure Microsoft Entra ID SSO with a Directory Manager client, such as the Directory Manager portal _Wizard_. For single sign-on using Microsoft Entra ID SSO, you can choose either of the following ways:

- SP-initiated single sign-on – when the SSO operation is initiated from the service provider (SP) end, that is, from the Directory Manager portal _Wizard_.
- IdP-initiated single sign-on – when the SSO operation is initiated from the identity provider (IdP) end, that is, from the Microsoft Entra ID SSO application.

## SP-initiated single sign-on

To sign in using SP-initiated single sign-on:

1. Launch the Directory Manager portal _Wizard_.

   On the Login page, notice the **Microsoft Entra ID SSO** button. You can sign in using your Directory Manager credentials or click this button to sign in.

   The availability of the user name and password fields depends on whether you disabled Directory Manager authentication (see step 10 in the [Configure the Provider in Directory Manager](configureproviderindirectorymanager.md#configure-the-provider-in-directory-manager) topic).

2. Click the button or image for Microsoft Entra ID SSO. The Microsoft sign-in page is displayed.

3. Enter your credentials and click **Sign in**. You're routed to the main page of the Directory Manager portal _Wizard_.

   Only users defined for the Directory Manager app in Microsoft Entra Admin Center can sign in by entering their user names and passwords. See step 11 in the [Configure Directory Manager in Microsoft Entra ID](configureinentra.md#configure-directory-manager-in-microsoft-entra-id) topic.

With single sign-on, you can now launch any Directory Manager client without having to sign in again.

## IdP-initiated single sign-on

To sign in using IdP-initiated single sign-on:

1. Launch the Microsoft My Apps portal using the following URL and sign in.

   [https://myapps.microsoft.com](https://myapps.microsoft.com)

2. Click the Directory Manager app configured to work with the _Wizard_ portal for single sign-on. It redirects you to your portal.
