---
title: "Identity Provider"
description: "Configure single sign-on with an external Identity Provider in Access Analyzer"
sidebar_position: 75
---

# Identity Provider

Access Analyzer supports federation with your organization's identity system so that users can sign in with their existing corporate credentials. Authentication is handled by your identity provider; roles and permissions are managed within Access Analyzer.

Setting up an identity provider connection is a two-part process: first you configure the integration in your identity system, then you prepare user accounts inside Access Analyzer.

:::note
Before completing the steps below, confirm that the infrastructure and network requirements for your IdP type are in place. See [Configure Identity Provider](../install/identity-provider.md) in the Installation section.
:::

## Supported integration types

| Type | Description |
| --- | --- |
| **Entra ID (OIDC)** | Access Analyzer redirects users to Microsoft Entra ID for authentication using OpenID Connect. |
| **Entra ID (SAML)** | Access Analyzer redirects users to Microsoft Entra ID for authentication using SAML 2.0. |
| **Generic SAML** | Access Analyzer redirects users to any SAML 2.0-compliant identity provider (Okta, ADFS, and others). |
| **LDAP / Active Directory** | Access Analyzer connects directly to your LDAP directory or Active Directory. Users enter their directory credentials on the Access Analyzer login page — no redirect occurs. |

## Part 1: Configure your identity provider

:::tip
For a complete Active Directory walkthrough that pairs this user-configuration guide with the installer-side steps, see the [Quick Install](../install/quickinstall.md).
:::

### Entra ID (OIDC)

Complete the following steps in Azure Portal before connecting Access Analyzer.

1. Open **Azure Portal** > **Entra ID** > **App registrations** > **New registration**.
2. Name the application and select **Accounts in this organizational directory only**.
3. Click **Register**.
4. Open the new registration > **Authentication** > **Add a platform** > **Web**.
5. Enter the redirect URI in the format `https://<hostname>/auth/realms/dspm/broker/<alias>/endpoint`, where `<hostname>` is your Access Analyzer host and `<alias>` is the identifier for this connection.
6. Click **Save**.
7. Go to **API permissions** > **Add a permission** > **Microsoft Graph** > **Delegated permissions** and add `openid`, `profile`, and `email`.
8. Click **Grant admin consent**.
9. Go to **Certificates & secrets** > **New client secret**. Set an expiry that fits your rotation policy and copy the value immediately — it's only shown once.

Collect the following values. You'll need them when Access Analyzer is connected to this application registration.

| Value | Where to find it |
| --- | --- |
| **Tenant ID** | Azure Portal > Entra ID > Overview > Directory (tenant) ID |
| **Client ID** | App registration > Overview > Application (client) ID |
| **Client secret** | Created in step 9 above |

### Entra ID (SAML)

1. Open **Azure Portal** > **Entra ID** > **Enterprise applications** > **New application**.
2. Click **Create your own application**, name it, and select **Integrate any other application you don't find in the gallery**.
3. Click **Create**.
4. Open the enterprise application > **Single sign-on** > **SAML**.
5. Click **Edit** on Basic SAML Configuration and enter the **Identifier (Entity ID)** and **Reply URL (ACS URL)** for your Access Analyzer instance.
6. Click **Save**.
7. Copy the **App Federation Metadata URL** from the SAML configuration page.

Collect the following values:

| Value | Where to find it |
| --- | --- |
| **Tenant ID** | Azure Portal > Entra ID > Overview > Directory (tenant) ID |
| **App Federation Metadata URL** | Enterprise application > Single sign-on > SAML configuration page |

### Generic SAML

Register Access Analyzer as a service provider in your IdP using the **SP ACS URL** and **SP Entity ID** for your instance. After your IdP administrator completes the registration, collect the following values:

| Value | Description |
| --- | --- |
| **SSO URL** | Your IdP's Single Sign-On endpoint |
| **Entity ID** | Your IdP's issuer/entity identifier |
| **Signing certificate** | Your IdP's SAML signing certificate in PEM format |
| **Email attribute name** | The SAML attribute your IdP uses to carry the user's email address (common values: `email`, `mail`, or `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`) |

### LDAP / Active Directory

No application registration or callback URL is required for LDAP. Prepare the following before connecting.

**Service account:**

Create a dedicated, read-only service account in your directory with read access to the user base DN. For Active Directory, the account needs **Read** permission on the user OU. No write access or special group membership is required.

**Network access:**

The Access Analyzer cluster must be able to reach your LDAP server on the configured port (389 for LDAP, 636 for LDAPS). Confirm that this traffic is permitted from the Access Analyzer cluster's egress IP range.

:::warning
Plain LDAP (`ldap://`) transmits credentials in cleartext. Use `ldaps://` (port 636) for production deployments.
:::

Collect the following values:

| Value | Description |
| --- | --- |
| **LDAP server URL** | Including protocol and port — for example, `ldaps://corp.example.com:636` |
| **Service account DN** | The distinguished name of the read-only service account |
| **Service account password** | — |
| **Users base DN** | The path where user accounts are stored — for example, `ou=users,dc=example,dc=com` |
| **Email attribute name** | The LDAP attribute that holds the user's email address (usually `mail`) |
| **Directory type** | Active Directory or generic LDAP |

## Part 2: Prepare Access Analyzer

### Sign in as the bootstrap User Admin

<!-- SYNC: install/quickinstall.md "Sign in as the bootstrap User Admin" -->
<!-- If you change this block, update the matching block in install/quickinstall.md -->

The installer seeds a bootstrap account, `admin@dspm.local`, with the **User Admin** role. This account can create and manage other users but **cannot** access system configuration. Use it on first login to pre-provision your users, then sign out and sign back in as an Administrator for system-level work.

1. Retrieve the bootstrap admin password from the Kubernetes secret:

   ```bash
   sudo kubectl get secret -n access-analyzer dspm-bootstrap-admin \
     -o jsonpath='{.data.password}' | base64 -d; echo
   ```

2. Open a browser and navigate to `https://<your-hostname>`.

3. Sign in with:
   - **Username**: `admin@dspm.local`
   - **Password**: (from step 1)

4. Complete first-login setup:
   - Scan the QR code with an authenticator app, enter a device name, submit the one-time code. **Save this enrollment** — you will need the same authenticator for any future bootstrap admin login.
   - Enter a first name and last name. **Do not change the email address.**

Proceed to [Pre-provision user accounts](#pre-provision-user-accounts) below.

<!-- END SYNC -->

### Pre-provision user accounts

Before a user can sign in through the identity provider, their account must exist in Access Analyzer. The application authenticates them against your IdP successfully but denies access if no matching account has been created.

:::note
The email address entered during pre-provisioning must exactly match the address sent by the IdP or stored in the LDAP `mail` attribute, including case. A mismatch causes sign-in to fail.
:::

1. Navigate to **Configuration** > **Users**.
2. Click **Add User**.
3. Enter the user's **Name** and **Email** address.
4. Select a **Role**: **Administrator**, **User Admin**, or **Viewer** (see [Roles](#roles) below).
5. Click **Create User**.

Assign at least one user the **Administrator** role — the bootstrap `admin@dspm.local` account is a User Admin only and cannot access system configuration. Assign at least one additional user the **User Admin** role if you want a non-bootstrap user to manage accounts going forward.

No password is required for pre-provisioned accounts. For details on managing users, see [Users](users.md).

### Roles

<!-- SYNC: install/quickinstall.md "Roles" -->
<!-- If you change this block, update the matching block in install/quickinstall.md -->

Access Analyzer has three roles. **User Admin** and **Administrator** have non-overlapping responsibilities by design — most deployments assign at least one user to each. The bootstrap `admin@dspm.local` account is seeded as User Admin, so it can pre-provision the rest of your users, including your first Administrator.

| Role | Description |
| --- | --- |
| **Administrator** | System configuration rights: configure sources, scans, connectors, application settings. Does **not** have user management rights. |
| **User Admin** | User and role management rights: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. The bootstrap `admin@dspm.local` account is assigned this role. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

<!-- END SYNC -->

## How sign-in works after IdP is configured

When identity provider integration is active, the Access Analyzer login page redirects users to your IdP (for OIDC and SAML) or presents a credential form that validates against your directory (for LDAP).

On first sign-in, Access Analyzer matches the email address from the IdP token or LDAP directory to the pre-provisioned account and permanently links the IdP identity to that account. On all subsequent sign-ins, the user's unique IdP identifier is used directly.

Sessions are valid for up to 8 hours from sign-in and expire after 4 hours of inactivity.

## Constraints

| Item | Detail |
| --- | --- |
| **Pre-provisioning required** | Users must have an account in Access Analyzer before their first sign-in. |
| **Email must match exactly** | The email entered during pre-provisioning must match what the IdP or LDAP directory sends, including case. |
| **Roles managed in Access Analyzer** | Roles and permissions are set in Access Analyzer, not in your IdP or directory. |
| **Local accounts coexist** | The administrator account created at deployment remains a local account and continues to sign in with a password. |
| **Password reset unavailable for federated accounts** | The **Reset Password** action in the Users page is available for local accounts only. Federated users manage their credentials through your IdP. |
| **Name and email locked after first sign-in** | Once a user has signed in at least once, their name and email are set from the IdP token and can't be changed in the Access Analyzer UI. Update them in your IdP instead. |
