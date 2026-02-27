---
title: "Named Credential Setup"
description: "Configure Platform Governance for Salesforce using Named Credential authentication"
sidebar_position: 15
---

# Named Credential Setup

This guide explains how to configure Platform Governance for Salesforce using an External Client App for authentication. This configuration uses OAuth authentication exclusively to call Salesforce APIs and document all Salesforce metadata types.

## Overview

The traditional process uses user Session IDs which are incompatible with Profiles with High Assurance. The new configuration uses an External Client App with Named Credentials to access Salesforce APIs, providing a more secure and MFA-compatible authentication method.

## Why Use Named Credentials

Using Named Credentials with External Client App OAuth authentication is the recommended approach over using user Session IDs for several critical reasons:

### High Assurance Compatibility

**This is the primary reason for using Named Credentials.** When Salesforce organizations have High Assurance enabled—which is increasingly required by Salesforce and security best practices—user Session IDs do not work properly for API calls. The Session ID authentication method fails because:

- **Enabling High Assurance Session on the Named Credential enforces that only Named Credentials can be used**, providing an additional security layer that ensures MFA compliance

### Enhanced Security

- **Session IDs inherit all permissions** of the authenticated user, creating potential security risks
- **External Client Apps with OAuth** allow you to define specific scopes and limit API access to only what's needed
- Named Credentials provide better audit trails and can be monitored independently
- Credentials are stored securely by Salesforce and never exposed in code or logs

### Automation and Scheduled Jobs

- Automated processes and scheduled jobs cannot rely on user Session IDs
- Named Credentials provide persistent authentication that works independently of user sessions
- Ideal for background processes, scheduled scans, and continuous monitoring

## Prerequisites

- Salesforce Administrator access
- Access to Setup menu

## Step 1: Create an External Client App

:::important
If this is not a new installation and your org already has an existing Connected App named **Netwrix** or **Strongpoint**, you do not need to create a new one.

You can use the existing app and continue to [Step 2: Create an Auth Provider](#step-2-create-an-auth-provider).

If you do not have the Consumer Key and Consumer Secret saved, go to [Retrieve Consumer Key and Secret](#retrieve-consumer-key-and-secret), obtain the credentials, and then continue with [Step 2: Create an Auth Provider](#step-2-create-an-auth-provider).
:::

Create a new External Client App to enable OAuth authentication:

1. Navigate to **Setup** > **Apps** > **App Manager**
2. Click **New External Client App**
3. Configure the following settings:
   - **External Client App Name**: `Netwrix`
   - **API Name**: `Netwrix` (auto-populated)
   - **Contact Email**: Enter your administrator email
      ![ExternalApp1](/images/platgovsalesforce/installing_strongpoint/ExternalApp1.webp)
4. Under **API (Enable OAuth Settings)**:
   - **Callback URL**: `https://www.localhost.com` (we will modify this parameter later)
   - **Selected OAuth Scopes**: Add the following scopes:
     - **Full access (full)**
     - **Perform requests at any time (refresh_token, offline_access)**
        ![ExternalApp2](/images/platgovsalesforce/installing_strongpoint/ExternalApp2.webp)

5. **Uncheck** the following options:
   - Require Secret for Web Server Flow
   - Require Secret for Refresh Token Flow
      ![ExternalApp3](/images/platgovsalesforce/installing_strongpoint/ExternalApp3.webp)

6. Click **Create**

### Configure Session and Token Policies

After creating the External Client App:

1. From the External Client Apps Menu, locate the **Netwrix** External Client App
2. Click the dropdown and select **Edit Policies**
      ![EditPolicyMenu](/images/platgovsalesforce/installing_strongpoint/EditPolicyMenu.webp)
3. Configure the following:
   - **Refresh Token Policy**: Set to **Refresh token is valid until revoked**
   - **IP Relaxation**: Set to **Enforce IP restrictions**
   - **Session Timeout In Minutes**: Set to **1440**
      ![EditPolicyMenu](/images/platgovsalesforce/installing_strongpoint/EditPolicy.webp)

4. Click **Save**

### Retrieve Consumer Key and Secret

1. From the **Netwrix** External Client App detail page
![OpenExternalApp](/images/platgovsalesforce/installing_strongpoint/OpenExternalApp.webp)
2. Click **Consumer Key and Secret** From the OAuth Settings section
![ClickKeyAndSecret](/images/platgovsalesforce/installing_strongpoint/ClickKeyAndSecret.webp)
3. Verify your identity (you may need to enter a verification code)
4. Copy and save the **Consumer Key** and **Consumer Secret** - you'll need these in the next step

## Step 2: Create an Auth Provider

Create a new Authentication Provider to enable OAuth authentication:

1. Navigate to **Setup** > **Identity** > **Auth. Providers**
2. Click **New**
3. Configure the following settings:
   - **Provider Type**: Salesforce
   - **Name**: `Strongpoint MFA` (this exact name is required)
   - **Consumer Key**: Enter the Consumer Key from the External Client App created in Step 1
   - **Consumer Secret**: Enter the Consumer Secret from the External Client App created in Step 1
   - **Authorize Endpoint URL**:
     - For Sandbox: `https://test.salesforce.com/services/oauth2/authorize`
     - For Production: `https://login.salesforce.com/services/oauth2/authorize`
   - **Token Endpoint URL**:
     - For Sandbox: `https://test.salesforce.com/services/oauth2/token`
     - For Production: `https://login.salesforce.com/services/oauth2/token`
4. Leave all other fields at their default values
![CreateAuthProvider](/images/platgovsalesforce/installing_strongpoint/CreateAuthProvider.webp)

5. Click **Save**

### Update External Client App Callback URL

After creating the Auth Provider:

1. Copy the **Callback URL** displayed on the Auth Provider detail page
![AuthProviderView](/images/platgovsalesforce/installing_strongpoint/AuthProviderView.webp)
2. Navigate back to **Setup** > **External Client Apps** > **External Client App Manager**
3. Locate the **Netwrix** External Client App
4. Click the dropdown and select **Edit Settings**
5. Replace the **Callback URL** with the URL copied from the Auth Provider
![AuthProviderView](/images/platgovsalesforce/installing_strongpoint/UpdateCallbackURL.webp)
6. Click **Save**

## Step 3: Create a Named Credential

Create a Named Credential to establish the authentication connection:

1. Navigate to **Setup** > **Security** > **Named Credentials**
2. Click **New Named Credential** (or **New Legacy** if using Enhanced Named Credentials)
3. Configure the following settings:
   - **Label**: `Strongpoint MFA`
   - **Name**: `Strongpoint_MFA` (auto-populated)
   - **URL**: Enter your Salesforce base URL
     - You can find this in **Setup** > **Company Settings** > **My Domain**
   - **Identity Type**: Named Principal
   - **Authentication Protocol**: OAuth 2.0
   - **Authentication Provider**: Select `Strongpoint MFA` (created in Step 2)
   - **Scope**: `refresh_token full`
   - **Start Authentication Flow on Save**: Checked
   - **Generate Authorization Header**: Checked
   - **Allow Merge Fields in HTTP Body**: Checked
   ![CreateNameCredential](/images/platgovsalesforce/installing_strongpoint/CreateNameCredential.webp)
4. Click **Save**

:::tip High Assurance Session
Enabling **Require High Assurance Session** ensures that the Named Credential can only be used after a high-assurance authentication event. This setting enforces the use of Named Credentials and provides an additional layer of security. For more information, see [Salesforce High Assurance Sessions documentation](https://help.salesforce.com/s/articleView?id=xcloud.security_auth_require_ha_session.htm&type=5).
:::

### Authenticate the Named Credential

After saving:

1. You will be redirected to the Salesforce login page
2. Log in with your credentials
3. Click **Allow** to grant access
![ApproveUseOfNamedCredential](/images/platgovsalesforce/installing_strongpoint/ApproveUseOfNamedCredential.webp)
![ApproveUseOfNamedCredential2](/images/platgovsalesforce/installing_strongpoint/ApproveUseOfNamedCredential2.webp)
4. You will be redirected back to the Named Credential record
5. Verify that the **Authentication Status** shows as **Authenticated**
![NamedCredentialView](/images/platgovsalesforce/installing_strongpoint/NamedCredentialView.webp)

## Verification

Once all steps are completed:

- The External Client App should have OAuth enabled with the correct scopes
- The Auth Provider should be configured with the correct endpoints
- The Named Credential should show an **Authenticated** status

Your Platform Governance for Salesforce is now configured to use External Client App authentication with Named Credentials.

## Troubleshooting

If you encounter authentication issues:

- Verify that the Consumer Key and Consumer Secret match between the External Client App and Auth Provider
- Ensure the Callback URL in the External Client App matches the one from the Auth Provider
- Check that the Named Credential shows an **Authenticated** status
- Verify that the correct endpoint URLs are used (Sandbox vs. Production)
- Ensure all required OAuth scopes are selected in the External Client App
- Confirm that My Domain is properly configured in your Salesforce org
- Verify that IP Relaxation is enabled in the External Client App policies

## Next Steps

After completing the credentials setup, proceed to:

- [Run the Getting Started Wizard](using_getting_started_wizard.md)