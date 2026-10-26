---
title: "Configure SAML SSO with Microsoft Entra ID"
sidebar_label: "SAML SSO"
description: "Configure and validate SP-initiated Microsoft Entra SAML single sign-on, local recovery login, and automatic redirection to the identity provider."
sidebar_position: 30
---

Configure a non-gallery Microsoft Entra enterprise application for service provider-initiated (SP-initiated) Security Assertion Markup Language (SAML) single sign-on (SSO) to Netwrix Privilege Secure for Discovery.

Complete [Microsoft Graph directory synchronization](./directory-synchronization.md) first. The Graph app registration and the SAML enterprise application are separate applications. The SAML application doesn't use the Graph client secret.

Keep a tested local administrator session open throughout the configuration. The examples use `psd.example.com`. Use the FQDN and values that you recorded in [Record the integration values](./overview.md#record-the-integration-values).

## Create a non-gallery enterprise application

1. In the **Microsoft Entra admin center**, go to **Entra ID** > **Enterprise apps** > **New application**.
2. Select **Create your own application**.
3. Enter a name such as `PSD-<environment>-SAML`.
4. Select **Integrate any other application you don't find in the gallery (Non-gallery)**.
5. Select **Create**.
6. Assign at least two accountable owners.
7. Open **Properties**, and set **Assignment required?** to **Yes**.

Portal menus change over time. If a label differs, follow the Microsoft procedure to [enable single sign-on for an enterprise application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso).

## Configure the SAML URLs

1. Open **Single sign-on** > **SAML** > **Basic SAML Configuration**.
2. Enter the following values.

   | Microsoft Entra field | Value |
   | --- | --- |
   | Identifier (Entity ID) | `https://psd.example.com` |
   | Reply URL (Assertion Consumer Service URL) | `https://psd.example.com/api/v1/login` |
   | Sign-on URL | `https://psd.example.com/api/v1/login/sso` |
   | Relay State | Leave empty. |
   | Logout URL | Leave empty. |

3. Confirm that the Identifier and the Privilege Secure for Discovery **Issuer** are identical. Compare the scheme, host, path, case, and trailing slash before you save the configuration.

The product builds the Reply URL from the host name that the browser uses and the external HTTPS port. If you reach the server on a nonstandard port, include the port in the Reply URL.

## Configure NameID

1. Under **Attributes & Claims**, edit the unique user identifier.
2. Enter the following values.

   | Microsoft Entra setting | Value |
   | --- | --- |
   | Name | Name ID |
   | Source | Attribute |
   | Source attribute | `user.userprincipalname` |
   | Name identifier format | Email address |

Privilege Secure for Discovery compares the returned NameID with a value that it builds for each user from the **Match User By** template. The following template matches the user principal name (UPN) of a user that Microsoft Graph synchronization created:

```text
${sAMAccountName}@${domain_fqdn}
```

The comparison is exact and case-sensitive. For a cloud-only user, `sAMAccountName` is the UPN prefix and `domain_fqdn` is the tenant's default domain. A user whose UPN uses a different domain suffix doesn't match this template. For a hybrid user, the values come from the Active Directory (AD) record, so the template matches only when the AD DNS domain equals the UPN suffix. Adjust the template to match how your users' UPNs map to synchronized fields.

## Configure signing

1. Under **SAML Certificates**, set **Signing Option** to **Sign SAML response and assertion**.
2. Set the signing algorithm to **SHA-256**.
3. Save the configuration.
4. Download **Certificate (Base64)** from this enterprise application.

Privilege Secure for Discovery requires a signed response and a signed assertion. The certificate is application-specific. Don't reuse a certificate from another enterprise application. Record its fingerprint, expiration date, and owner.

## Assign a pilot identity

1. Open **Users and groups**.
2. Add the pilot user or a tightly controlled pilot group.
3. Keep **Assignment required?** set to **Yes**.
4. Confirm that the same identity already exists in Privilege Secure for Discovery and has an effective role.

## Configure SAML in Privilege Secure for Discovery

1. Open **Configure** > **Server** > **SAML Configuration**.
2. Select each value and enter the following settings. The product saves each change when you confirm it and displays **Configuration successfully updated.**

   | Field | Required value |
   | --- | --- |
   | **Entrypoint** | Enter the Microsoft Entra **Login URL**, normally `https://login.microsoftonline.com/<tenant-id>/saml2`. |
   | **Issuer** | Enter exactly the same value as the Microsoft Entra Identifier, such as `https://psd.example.com`. |
   | **Issuer Cert** | Paste the text of the active certificate from this enterprise application. |
   | **SSO Flow** | Select **SP-Initiated**. |
   | **force IdP reauthentication** | Select this option to make Microsoft Entra prompt for credentials on every sign-in. Clear it to let an existing Microsoft Entra session sign users in. |
   | **Auto-Redirect to IdP** | Keep the option cleared (the default) during staging and baseline validation. |
   | **ID Claim** | Replace the default `dn` with `nameID`. |
   | **Match User By** | Replace the default `distinguishedName` with `${sAMAccountName}@${domain_fqdn}`. |
   | **SSO Enabled** | Keep **Disabled** while you stage the configuration. |

   ![The SAML Configuration settings with Auto-Redirect to IdP cleared](/images/privilegesecurediscovery/integrations/ent-saml-configuration.webp)

3. Reload the page and verify the saved values.
4. Set **SSO Enabled** to **Enabled**.

When you select **SP-Initiated**, the product also selects **force IdP reauthentication**. Clear the option if you don't want it.

The **Non-SSO sign-in URL** row shows the local login address, `https://<fqdn>/#/login`. Use it for recovery.

## Select the login behavior

The **Auto-Redirect to IdP** option controls how the login page behaves. Keep it cleared until the baseline SAML flow and the local recovery login pass testing.

| Setting | Login behavior |
| --- | --- |
| Cleared (default) | The local username and password form appears first. After you enable SSO, users can select **Show SSO login**, then **SSO Login**. |
| Selected, SSO enabled | A request that lacks a valid session starts SSO and redirects the browser to the identity provider (IdP). A direct visit to the login page shows the SSO view first, with **Show local login** available. |
| Selected, SSO disabled | The local login form appears, and the product doesn't start an SSO redirect. |

SAML and local username and password authentication both stay available from the login page. Test the local recovery path after every SAML change and before you enable automatic redirection.

## Validate the baseline SAML flow

1. Open `https://psd.example.com/#/login` in a private browser window.
2. Sign in with the local administrator account to confirm that local authentication works.
3. Sign out, and select **Show SSO login**.
4. Select **SSO Login**.
5. Complete Microsoft Entra authentication and any Conditional Access requirements.

The product sends the browser to Microsoft Entra, receives the signed response at `/api/v1/login`, matches the NameID to an existing user, and opens the session.

Confirm that:

- The expected identity is signed in.
- The effective role is correct.
- The browser is on the final application route.
- Local recovery still works in a separate private browser window.

## Enable automatic redirection

Complete this procedure only after the baseline SAML flow and the local recovery login succeed.

1. Keep the tested local administrator session open.
2. Open **Configure** > **Server** > **SAML Configuration**.
3. Under **Auto-Redirect to IdP**, select **redirect to IdP on login page**.
4. Confirm that the product displays **Configuration successfully updated.**
5. In a new private browser window, request a protected route.
6. Confirm that the browser starts SSO and reaches Microsoft Entra.
7. Open `https://psd.example.com/#/login` directly.
8. Confirm that the SSO view appears first and provides **Show local login**.
9. Select **Show local login**, and verify the local administrator credentials.

If SSO or local recovery fails, use the preserved administrator session to clear **redirect to IdP on login page**.

## Run acceptance tests

Run the following tests before you roll out SSO:

- An assigned, synchronized, and authorized pilot user succeeds.
- Microsoft Entra denies an unassigned user.
- Privilege Secure for Discovery denies an assigned user who has no account.
- Privilege Secure for Discovery denies a user without an effective role.
- An incorrect Reply URL fails in a controlled manner.
- A case-mismatched NameID doesn't match.
- Privilege Secure for Discovery rejects an inactive or incorrect signing certificate.
- Local recovery login succeeds after you enable SSO.
- With **Auto-Redirect to IdP** cleared, the local login form appears first and **Show SSO login** works.
- With **Auto-Redirect to IdP** selected, a request without a session starts SSO and the direct login page still provides **Show local login**.

Don't store passwords, client secrets, SAML assertions, JSON Web Tokens (JWTs), or certificate bodies in test records.

For error resolution and final checks, see [Validate and troubleshoot the integration](./validation-and-troubleshooting.md).

## Related Microsoft documentation

- [Enable single sign-on for an enterprise application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso)
