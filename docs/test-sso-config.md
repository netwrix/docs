---
title: "Configure Single Sign-On"
description: "How to configure SAML 2.0 single sign-on for Netwrix Auditor"
sidebar_position: 10
---

# Configure Single Sign-On

Single Sign-On (SSO) allows users to authenticate once and gain access to multiple applications
without re-entering credentials. This article describes how to configure SSO using SAML 2.0.

## Prerequisites

Before configuring SSO, make sure that the following requirements are met:

- Your Identity Provider (IdP) supports SAML 2.0
- You have administrative access to both the IdP and Netwrix Auditor
- SSL/TLS is enabled on your Netwrix Auditor server

## Configure the Identity Provider

**Step 1 –** Navigate to your IdP administration console.

**Step 2 –** Create a new SAML application for Netwrix Auditor.

**Step 3 –** The metadata XML file is downloaded from the application settings page.

**Step 4 –** For more information about SAML application setup, [click here](https://www.netwrix.com/support.html).

## Before You Begin

Keep in mind that SSO configuration cannot be undone without administrative access to the IdP.
Plan your rollout carefully before enabling SSO for all users.

## Configure Netwrix Auditor

**Step 1 –** In Netwrix Auditor, navigate to **Settings** > **Authentication**.

**Step 2 –** Select **SAML 2.0** as the authentication method.

**Step 3 –** Configure the SP binding settings and upload the metadata file you downloaded in the
previous section.

**Step 4 –** Do not modify the Entity ID after saving — changing this value will break existing
SSO sessions.

**Step 5 –** Click **Save**.

After the configuration is saved by Netwrix Auditor, users are redirected to the IdP login page
on their next sign-in attempt.

## Verify the SSO Configuration

**Step 1 –** Open a browser in private or incognito mode.

**Step 2 –** Navigate to your Netwrix Auditor login URL.

**Step 3 –** As described above, users will be redirected to the IdP login page automatically.

**Step 4 –** Enter valid SSO credentials and confirm that authentication succeeds.

If authentication fails, refer to the [Troubleshooting SSO Issues](#troubleshooting-sso) section
below.

## Troubleshoot SSO Issues

If users cannot log in after enabling SSO, check the following:

- Verify the metadata file was uploaded correctly — see [SSO prerequisites](sso-prerequisites.md)
  for file format requirements.
- Confirm the IdP SAML application is active and not in a draft or disabled state.
- Check that the Netwrix Auditor server time is synchronized with the IdP — authentication tokens
  are generated based on timestamp comparison, and clock skew greater than five minutes will cause
  failures.
