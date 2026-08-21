---
title: "Identity Provider"
description: "Configure single sign-on with an external Identity Provider in Access Analyzer"
sidebar_position: 75
---

# Identity Provider

Access Analyzer supports federation with your organization's identity system so that users can sign in with their existing corporate credentials. Your identity provider handles authentication; you manage roles and permissions within Access Analyzer.

Setting up an identity provider connection is a two-part process: first you configure the integration in your identity system, then you prepare user accounts inside Access Analyzer.

:::note
Before continuing, confirm that the infrastructure and network requirements for your identity provider (IdP) type are in place. See [Network and Port Requirements](../install/system/network.md) and [TLS Certificate Requirements](../install/system/certificates.md).
:::

## Supported integration types

| Type | Description |
| --- | --- |
| **Active Directory** | Access Analyzer connects directly to your Active Directory over LDAPS. Users enter their directory credentials on the Access Analyzer login page — no redirect occurs. |
| **Entra ID** | Access Analyzer redirects users to Microsoft Entra ID (formerly Azure AD) to authenticate, then signs them in on return. |

## Setting up an identity provider

The installer provisions a local administrator account so you can sign in and start using Access Analyzer immediately — you don't need to connect an identity provider to complete installation. See [Quick Install](../install/quickinstall.md) for the installation steps.

On first sign-in, the setup wizard prompts you to connect Active Directory or Entra ID:

- **Connect now** — select **Active Directory** or **Entra ID** and complete the fields in [Part 1](#part-1-configure-your-identity-provider).
- **Set up later** — skip the wizard and go directly into the app using the local admin account. You keep full access, and the wizard stays reachable at any time by browsing to `/setup`.

## Part 1: Configure your identity provider

### Active Directory

Active Directory doesn't require an application registration. Prepare the following before connecting.

**Service account:** Create a dedicated, read-only service account in your directory. Access Analyzer never writes to your directory.

**Certificate:** Have the CA certificate that issued your domain controller's LDAPS certificate ready as a PEM file. The setup wizard requires it to complete the connection test.

**Network access:** The Access Analyzer cluster must be able to reach a domain controller in your AD forest over LDAPS (port 636).

Collect the following values:

| Value | Description |
| --- | --- |
| **AD domain name** | Fully qualified domain name of your AD forest — for example, `corp.example.com`. Access Analyzer connects over LDAPS (port 636) automatically. |
| **Service account** | A read-only service account, in User Principal Name (UPN) format — for example, `aa26-svc@corp.example.com` |
| **Service account password** | — |
| **AD authentication certificate** | The CA certificate (PEM) that issued the domain controller's LDAPS certificate |

You don't need to look up the users base DN or the email attribute yourself. After you enter the domain, service account, and certificate, the wizard tests the connection and discovers both automatically.

### Entra ID

Complete the following steps in the Azure Portal before connecting Access Analyzer.

1. Open **Azure Portal** > **Entra ID** > **App registrations** > **New registration**.
2. Name the application and click **Register**.
3. Open the registration > **Authentication** > **Add a platform** > **Web**, and add two redirect URIs:
   - The URI shown on the Access Analyzer setup wizard's **Entra ID** step (`https://<your-hostname>/setup/entra-consent-callback`) — used once, for the admin-consent step below.
   - `https://<your-hostname>/idps/callback` — used every time a user signs in with Entra ID.
4. Go to **Certificates & secrets** > **New client secret**. Set an expiry that fits your rotation policy and copy the value immediately — the portal shows it only once.

Collect the following values:

| Value | Where to find it |
| --- | --- |
| **Tenant ID** | Azure Portal > Entra ID > Overview > Directory (tenant) ID — the GUID, not the primary domain |
| **Application (client) ID** | App registration > Overview > Application (client) ID |
| **Client secret** | Created in step 4 |

Enter these values in the Access Analyzer setup wizard and click **Sign in with Microsoft and continue**. A popup prompts a **Global Administrator** or **Privileged Role Administrator** to sign in and grant consent for Access Analyzer to read the directory.

:::note
Both redirect URIs must be registered before anyone signs in with Entra ID. The setup wizard's callback completes the connection; `/idps/callback` is Microsoft's redirect target for every subsequent sign-in — omitting it lets you finish setup but blocks sign-in with an `AADSTS50011` redirect URI mismatch.
:::

## Part 2: Prepare Access Analyzer

### First sign-in

The installer provisions a local first administrator account automatically during installation — the person whose email you entered at the **First Admin Email** prompt can sign in immediately using the temporary password shown in the installation summary. See [First admin account](../install/quickinstall.md#first-admin-account).

Navigate to `https://<your-hostname>` and sign in with the first admin's email and temporary password, then set a new password when prompted. The setup wizard then prompts you to connect Active Directory or Entra ID — or select **Set up later** to go directly into the app and revisit the wizard anytime at `/setup`.

### Pre-provision user accounts

Before a user can sign in through the identity provider, their account must exist in Access Analyzer. The application authenticates them against your IdP successfully but denies access if no matching account exists.

:::note
The email address you enter during pre-provisioning must exactly match the address the IdP sends or the address in the LDAP `mail` attribute, including case. A mismatch causes sign-in to fail.
:::

1. Navigate to **Configuration** > **Users**.
2. Click **Add User**.
3. Enter the user's **Name** and **Email** address.
4. Select a **Role**: **Administrator**, **User Admin**, or **Viewer** (see [Roles](#roles)).
5. Click **Create User**.

Pre-provisioned accounts don't require a password. For details on managing users, see [Users](users.md).

### Roles

<!-- SYNC: install/quickinstall.md "Roles" -->
<!-- If you change this block, update the matching block in install/quickinstall.md -->

Access Analyzer has three roles. The installer assigns the first admin account the Administrator role, so it can pre-provision the rest of your users.

| Role | Description |
| --- | --- |
| **Administrator** | Full access: system configuration (sources, scans, connectors, application settings) and user management (create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users). |
| **User Admin** | User and role management rights only: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

<!-- END SYNC -->

## How sign-in works after IdP configuration

When identity provider integration is active, the Access Analyzer login page presents a credential form that validates against your directory.

On first sign-in, Access Analyzer matches the email address from the IdP token or LDAP directory to the pre-provisioned account and permanently links the IdP identity to that account. On all subsequent sign-ins, Access Analyzer uses the user's unique IdP identifier directly.

Sessions are valid for up to 8 hours from sign-in and expire after 4 hours of inactivity.

## Constraints

| Item | Detail |
| --- | --- |
| **Pre-provisioning required** | Users must have an account in Access Analyzer before their first sign-in. |
| **Email must match exactly** | The email you enter during pre-provisioning must match what the IdP or LDAP directory sends, including case. |
| **Roles managed in Access Analyzer** | You set roles and permissions in Access Analyzer, not in your IdP or directory. |
| **Local accounts coexist** | The administrator account created at deployment remains a local account and continues to sign in with a password. |
| **Password reset unavailable for federated accounts** | The **Reset Password** action in the Users page is available for local accounts only. Federated users manage their credentials through your IdP. |
| **Name and email locked after first sign-in** | Once a user has signed in at least once, their name and email come from the IdP token; you can't change them in the Access Analyzer UI. Update them in your IdP instead. |
