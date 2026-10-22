---
title: "SAML SSO configuration reference"
description: "Reference for the SAML settings, sign-in flows, user matching, and recovery behavior that apply to every identity provider in Privilege Secure for Discovery."
sidebar_label: "SAML SSO reference"
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery supports Security Assertion Markup Language (SAML) single sign-on (SSO) through an identity provider (IdP). This page is the single reference for the settings and sign-in behavior that every IdP shares. Use it with the provider-specific pages.

For Microsoft Entra ID, follow [Configure SAML SSO with Microsoft Entra ID](../../integrations/microsoft-entra-id/saml-sso.md). For other providers, see [Okta](./okta.md) and [Duo](./duo.md). Any IdP that supports SAML 2.0 and meets the requirements in the next section can work.

## What the identity provider must do

- Send the SAML response to the assertion consumer service URL of the product, `https://<fqdn>/api/v1/login`, with the HTTP POST binding. `<fqdn>` is the fully qualified domain name (FQDN) of the product.
- Sign both the SAML response and the SAML assertion, with the SHA-256 signature algorithm. The product rejects a response in which either signature is missing.
- Send a claim that identifies the user. See [Match the signed-in user](#match-the-signed-in-user).
- Enforce multifactor authentication (MFA). See [MFA with SSO](#mfa-with-sso).

Reach the product by its FQDN, not by an IP address or `localhost`, when you test SSO.

## SAML configuration settings

Open **Configure** > **Server** > **SAML Configuration**.

![The SAML Configuration panel with its default values](/images/privilegesecurediscovery/authentication-and-sso/sso-saml-configuration.webp)

| Setting | Description |
| --- | --- |
| **Entrypoint** | The URL of the IdP where sign-in starts. For the service provider-initiated (SP-initiated) flow, it is the single sign-on URL of the IdP application. For the IdP-initiated flow, it is the URL that starts sign-in from the IdP. |
| **Issuer** | The entity ID of the product. In the SP-initiated flow, the product sends it to the IdP in the authentication request, and the IdP application must use the same value as its audience or entity ID. In the IdP-initiated flow, the product doesn't use it. Use the product URL, for example `https://<fqdn>`, in both flows. |
| **Issuer Cert** | The Base64 body of the signing certificate of the IdP application. Leave out the `BEGIN CERTIFICATE` and `END CERTIFICATE` lines. Update it when the IdP rolls the certificate. |
| **SSO Enabled** | Turns SAML authentication on. Keep a tested local administrator session open while you stage or change the configuration. |
| **SSO Flow** | **SP-Initiated** or **IdP-Initiated**. A new configuration starts as **SP-Initiated**. |
| **force IdP reauthentication** | For the SP-initiated flow only. Asks the IdP to authenticate the user again, even if the user has an active IdP session. It is off in a new configuration. When you select **SP-Initiated** in the **SSO Flow** list, the product also selects this checkbox. When you select **IdP-Initiated**, the product clears the checkbox and disables it. |
| **Auto-Redirect to IdP** | Sends users to the IdP when they open the sign-in page, instead of showing the local sign-in form first. |
| **ID Claim** | The name of the SAML claim that identifies the user. The default is `dn`, so with the default settings the IdP must send a claim named `dn`. Use `nameID` for the NameID of the assertion. |
| **Match User By** | The field of the product user record that the claim value must equal. The default is `distinguishedName`, which is the Active Directory (AD) distinguished name of the user. It can also be a template. |
| **Non-SSO sign-in URL** | The address of the local sign-in page. Use it to sign in without SSO. |

## Choose an SSO flow

- **SP-initiated:** The user starts from the sign-in page of the product. The product sends an authentication request to the IdP, the user signs in there, and the IdP returns the response to `https://<fqdn>/api/v1/login`. The product starts the request at `https://<fqdn>/api/v1/login/sso` and checks that each response answers a request that it sent. Use this flow unless you need to start from the IdP.
- **IdP-initiated:** The user starts from the IdP, for example from an application tile, and the IdP posts the assertion to `https://<fqdn>/api/v1/login`. When the user selects **SSO Login** on the product sign-in page, the product redirects to the **Entrypoint**.

The flow in the product must match what the IdP sends. If the product expects the SP-initiated flow and receives a response that doesn't answer a request, it starts a new request. If the product expects the IdP-initiated flow and receives a response that answers a request, it sends the user to the **Entrypoint**. A wrong **SSO Flow** setting shows up as a sign-in that returns to the IdP.

## Match the signed-in user

After the IdP signs the user in, the product reads the claim that **ID Claim** names, and finds the user record whose **Match User By** field equals the claim value. The comparison is exact and case-sensitive. The user must be a user or a member of a group that you added in **Configure** > **Users and Groups**. See [Add users to Privilege Secure for Discovery](../onboard-systems/add-users-to-privilege-secure.md).

**Match User By** accepts a field name or a template. In a template, `${<field>}` takes the value of a field of the user record. The fields of a user record are `sAMAccountName`, `distinguishedName`, `cn`, `displayName`, `sn`, `objectSid`, `domain_netbios`, and `domain_fqdn`.

| Your IdP sends | ID Claim | Match User By |
| --- | --- | --- |
| The user principal name (UPN) as the NameID, when the UPN suffix is the domain name | `nameID` | `${sAMAccountName}@${domain_fqdn}` |
| The user name with the domain, such as `CORP\jsmith`, in a claim named `username` | `username` | `${domain_netbios}\${sAMAccountName}` |
| The AD distinguished name in a claim named `dn` (the defaults) | `dn` | `distinguishedName` |

Older configurations send the distinguished name in a claim named `dn`. That mapping still works, but it needs a custom attribute in the IdP. Prefer the NameID.

## MFA with SSO

A user who signs in with SSO doesn't enter the authenticator code or the RADIUS second factor of the product. The IdP is the only place where MFA happens, so enforce MFA in the IdP policy for the application. The product still applies the second factor to users who sign in with a user name and password. See [Configure RADIUS authentication](./radius.md).

## Local sign-in and recovery

Enabling SSO doesn't remove local sign-in. When **Auto-Redirect to IdP** is off, the local sign-in form appears first, and users select **SSO Login**. When it is on, the SSO view appears first and keeps **Show local login**. The **Non-SSO sign-in URL** always opens the local form.

Keep and test the local recovery path, and test sign-in with a second browser session, after every SAML change.

## Troubleshoot SAML sign-in

The product doesn't show these errors on its sign-in page. The browser shows the raw response to the sign-in request, such as `{"error":"Invalid document signature"}`.

| Message or symptom | Cause | Fix |
| --- | --- | --- |
| HTTP 500 with `Required field '<attr>' missing in SAML profile. Available claims: …` | **ID Claim** names an attribute that the IdP doesn't send. | The message lists the claim names that the IdP sent. Use it to find the right attribute name for **ID Claim**, or add the attribute in the IdP application. |
| HTTP 401 with `User not found with <attr>: <value> …` | No user record equals the claim value. | Compare the value in the message with the user record. Check the case, the domain, and that you added the user or a group of the user. Fix **Match User By** or the claim. |
| HTTP 500 with `{"error":"Invalid document signature"}`, or `{"error":"Invalid signature"}` for a bad assertion signature | The IdP doesn't sign both the response and the assertion, doesn't use SHA-256, or the **Issuer Cert** differs from the current signing certificate. A stale **Issuer Cert** after the IdP rolls its certificate is a common cause. | Set the IdP to sign the response and the assertion with SHA-256, and paste the current certificate. |
| The sign-in returns to the IdP repeatedly | **SSO Flow** doesn't match the flow of the IdP. | Match the setting to the flow that you configured. |

### Fix "SAML assertion not yet valid"

The error means that the assertion is valid from a time that is later than the current time of the product host. The product accepts no clock difference. Synchronize the clocks of the IdP and the product host with a reliable time source, and try again.
