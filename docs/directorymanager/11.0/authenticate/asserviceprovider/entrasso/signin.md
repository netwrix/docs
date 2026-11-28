---
title: "Sign In to GroupID Using Microsoft Entra ID SSO"
description: "Sign in to the GroupID portal with Microsoft Entra ID SSO, using either SP-initiated or IdP-initiated single sign-on."
keywords:
  - GroupID sign in
  - Microsoft Entra ID SSO sign in
  - SP-initiated SSO
  - IdP-initiated SSO
  - GroupID portal
sidebar_position: 30
---

# Sign In to GroupID Using Microsoft Entra ID SSO

This example configures Microsoft Entra ID SSO with a GroupID client, specifically the
GroupID portal _Wizard_. For single sign-on using Microsoft Entra ID SSO, you can choose
either of the following methods:

- SP-initiated single sign-on – the SSO operation starts from the service provider (SP) end, that
  is, from the GroupID portal, Wizard.
- IdP-initiated single sign-on – the SSO operation starts from the identity provider (IdP) end, that
  is, from the Microsoft Entra ID SSO application.

## SP-Initiated Single Sign-On

1. Launch the GroupID portal _Wizard_.  
   On the **Login** page, notice the **Microsoft Entra ID SSO** button. You can sign in using your GroupID
   credentials or click this button to sign in.  
   The availability of the user name and password fields depends on whether you disabled GroupID
   Authentication (see step 10 in the
   [Configure the Provider in GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureproviderindirectorymanager.md#configure-the-provider-in-groupid)
   topic).
2. Click the button or image for Microsoft Entra ID SSO. The Microsoft sign-in page is displayed.
3. Enter your credentials and click **Sign in**. You're routed to the main page of the GroupID
   portal _Wizard_.  
   Only users defined for the GroupID app in Microsoft Entra Admin Center can sign in by
   entering their user names and passwords. See step 11 in the
   [Configure GroupID in Microsoft Entra ID](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/configureinentra.md#configure-groupid-in-microsoft-entra-id)
   topic.

With single sign-on, you can launch any GroupID client without having to sign in again.

## IdP-Initiated Single Sign-On

1. Launch the Microsoft My Apps portal using the following URL and sign in.  
   [https://myapps.microsoft.com](https://myapps.microsoft.com)
2. Click the GroupID app that you created to work with the _Wizard_ portal for single
   sign-on. It redirects you to your portal.
