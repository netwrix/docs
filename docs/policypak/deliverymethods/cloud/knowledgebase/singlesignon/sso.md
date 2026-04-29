---
title: "Single Sign-On (SSO) — Customer Request Guide"
description: "How to request and configure Single Sign-On for PolicyPak Cloud using Microsoft Entra ID or Okta."
sidebar_position: 1
---

# Single Sign-On (SSO) — Customer Request Guide

PolicyPak Cloud supports Single Sign-On (SSO) using your organization's identity provider (IdP) — such as Microsoft Entra ID (Azure AD) or Okta. Once SSO is configured, users can log in to PolicyPak Cloud using their existing corporate credentials instead of a separate password.

This is an assisted process. The following steps explain what information to submit, what the Netwrix team does on the backend, and what you need to do to finish the configuration.

:::note
After submitting your ticket, allow up to three (3) business days for the Netwrix team to complete the backend tenant provisioning. The Netwrix team will notify you when your environment is ready.
:::

## What You Will Need Before Submitting

Have the following ready when you open your support ticket:

- Your PolicyPak Cloud company name and the email address of your current company administrator
- Your identity provider type: Microsoft Entra ID, Okta, or another OpenID Connect (OIDC)-compatible provider
- The email domain your users will authenticate with (for example, yourcompany.com)
- Access to an Entra ID or Okta admin who can register an application and generate a Client ID and Client Secret

## Step 1 – Open a Netwrix Support Ticket

Open a ticket through the [Netwrix support portal](https://www.netwrix.com/tickets.html#/open-a-ticket).

In your ticket, select **Netwrix PolicyPak**, include the information listed above, and request "PolicyPak Cloud SSO setup."

The PolicyPak Support team will receive your ticket and coordinate with the Netwrix internal team responsible for tenant provisioning. You don't need to contact any other team directly.

## Step 2 – Netwrix Provisions Your 1Secure Tenant (No Action Required)

Netwrix 1Secure, Netwrix's identity management platform, handles PolicyPak Cloud SSO and manages authentication for your tenant.

After receiving your ticket, the Netwrix internal team creates a Netwrix 1Secure tenant for your organization and invites your designated administrator using their corporate email address. This step happens entirely on the Netwrix side.

This step is complete when you receive a "Welcome to Netwrix 1Secure" invitation email.

## Step 3 – Accept the Netwrix 1Secure Invitation Email

Your designated administrator will receive a "Welcome to Netwrix 1Secure" email from noreply-account@netwrix.com. Open the email and click **Activate my Netwrix account**.

:::warning
The activation link expires 48 hours after Netwrix sends it.
:::

![Welcome to Netwrix 1Secure invitation email with activation button](/images/policypak/cloud/singlesignon/ppcloudsso6.webp)

## Step 4 – Set Your Netwrix Account Password

If your account isn't already set up, clicking the activation link prompts you to create a password for your Netwrix account. This is a one-time step required to access the 1Secure portal where you configure SSO.

Your password must meet the following requirements:

- At least 12 characters
- At least 3 of the following: lowercase letters (a–z), uppercase letters (A–Z), numbers (0–9), special characters
- No more than 2 identical characters in a row

![Netwrix account password setup screen](/images/policypak/cloud/singlesignon/ppcloudsso5.webp)

## Step 5 – Configure SSO in Netwrix 1Secure

Once your account is activated, navigate to the [Netwrix 1Secure portal](https://1secure.netwrix.com/) and sign in.

Go to **Configuration** > **My Organization** > **Authentication**, then open **Authentication Settings**. Select your SSO method (Entra ID or OIDC for Okta), enter your domain name, and supply the Client ID and Client Secret from your identity provider.

:::note
If you use a different OIDC-compatible provider, select **OIDC** and follow the same fields as the Okta path.
:::

Before continuing, register your application and obtain a Client ID and Client Secret by following the appropriate guide:

- [Configure SSO with Entra ID / OIDC](https://docs.netwrix.com/docs/1secure/admin/login/sso#configure-sso-with-openid-connect-authentication)
- [Generate a Client Secret Value](https://docs.netwrix.com/docs/1secure/configuration/registerconfig/#generate-client-secret-value)

:::tip
Optionally enter a Client Secret Expiry Date. Netwrix 1Secure will alert you before the secret expires so you can renew your SSO connection without disrupting access.
:::

![Authentication Settings in Netwrix 1Secure with Client ID and Client Secret fields highlighted](/images/policypak/cloud/singlesignon/ppcloudsso3.webp)

## Step 6 – Add Your Federated User as a PolicyPak Cloud Administrator

Once SSO is configured in 1Secure, return to the PolicyPak Cloud portal. Navigate to your company's administration area and use the **Add New Company Administrator** dialog to add your Entra ID or Okta user as an administrator.

Enter the user's first name, last name, and their federated email address — the same address associated with your identity provider — then click **Create**.

![Add New Company Administrator dialog in PolicyPak Cloud](/images/policypak/cloud/singlesignon/ppcloudsso4.webp)

## Step 7 – Sign In to PolicyPak Cloud with SSO

The federated administrator can now sign in to PolicyPak Cloud using their corporate identity. On first login, your identity provider may display a permissions consent prompt for the 1Secure application. Click **Accept** to grant the necessary permissions and sign in to PolicyPak Cloud.

:::note
The requested permissions cover only viewing your basic profile and maintaining access to data you have already authorized. This is a standard consent screen for OIDC-based applications.
:::

![Microsoft Entra ID permissions consent prompt on first SSO login](/images/policypak/cloud/singlesignon/ppcloudsso1.webp)

After you accept, PolicyPak Cloud redirects you and signs you in as your federated user. SSO is now fully active for your domain.

![PolicyPak Cloud portal with federated SSO user account active](/images/policypak/cloud/singlesignon/ppcloudsso2.webp)

## Summary

1. Open a Netwrix support ticket requesting PolicyPak Cloud SSO setup. Include your company name, admin email, IdP type, and domain.
2. The Netwrix internal team provisions your 1Secure tenant within 3 business days. No action required from you.
3. Accept the "Welcome to Netwrix 1Secure" invitation email and click the activation link.
4. Create your Netwrix account password when prompted.
5. Log in to [1secure.netwrix.com](https://1secure.netwrix.com/) and configure SSO using your IdP's Client ID and Client Secret.
6. Add your federated user as a Company Administrator in the PolicyPak Cloud portal.
7. Sign in to PolicyPak Cloud with your corporate SSO credentials and accept the IdP consent prompt on first login.

## Troubleshooting

If you encounter any issues at any stage of this process, reply to your existing support ticket or open a new one through the [Netwrix support portal](https://www.netwrix.com/tickets.html#/open-a-ticket). The PolicyPak Support team will assist you and coordinate with the appropriate internal team as needed.
