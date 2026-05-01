---
title: "Configure Single Sign-On"
description: "How to configure SAML 2.0 single sign-on for Netwrix Auditor"
sidebar_position: 10
---

# Configure Single Sign-On

With Single Sign-On (SSO), you authenticate once and gain access to multiple applications
without re-entering credentials. This article describes how to configure SSO using SAML 2.0.

## Prerequisites

Before configuring SSO, ensure you meet the following requirements:

- Your Identity Provider (IdP) supports SAML 2.0
- You have administrative access to both the IdP and Netwrix Auditor
- SSL/TLS is enabled on your Netwrix Auditor server

:::warning
You can't reverse the SSO configuration without administrative access to the IdP. To disable SSO after you enable it, you must access the IdP administration console and deactivate or delete the Netwrix Auditor SAML application. Plan your deployment before enabling SSO for all users.
:::

## Configure the Identity Provider

**Step 1 –** Navigate to your IdP administration console.

**Step 2 –** Create a new SAML application for Netwrix Auditor.

**Step 3 –** Download the metadata XML file from the application settings page.

**Step 4 –** See [Netwrix Support](https://www.netwrix.com/support.html) for SAML application setup guidance.

## Configure Netwrix Auditor

**Step 1 –** In Netwrix Auditor, navigate to **Settings** > **Authentication**.

**Step 2 –** Select **SAML 2.0** as the authentication method.

**Step 3 –** Configure the Service Provider (SP) binding settings and upload the metadata file you downloaded in the Configure the Identity Provider section.

**Step 4 –** Don't modify the Entity ID after saving — changing this value will break existing
SSO sessions.

**Step 5 –** Click **Save**.

After Netwrix Auditor saves the configuration, it redirects users to the IdP login page on their next sign-in attempt.

## Verify the SSO Configuration

**Step 1 –** Open a browser in private or incognito mode.

**Step 2 –** Navigate to your Netwrix Auditor login URL.

**Step 3 –** Confirm that Netwrix Auditor redirects you to the IdP login page.

**Step 4 –** Enter valid SSO credentials and confirm that authentication succeeds.

If authentication fails, refer to the [Troubleshoot SSO Issues](#troubleshoot-sso-issues) section.

## Troubleshoot SSO Issues

If users can't log in after enabling SSO, check the following:

- Verify the metadata file was uploaded correctly. The file must be a valid SAML 2.0 XML metadata file downloaded from your IdP application settings.
- Confirm the IdP SAML application is active and not in a draft or disabled state.
- Check that the Netwrix Auditor server time is synchronized with the IdP — the IdP generates authentication tokens based on timestamp comparison, and clock skew greater than five minutes will cause failures.
