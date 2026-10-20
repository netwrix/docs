---
title: "SAML SSO configuration reference"
description: "Reference for the SAML fields, sign-in flows, and local recovery behavior that apply to every identity provider in Netwrix Privilege Secure for Discovery."
sidebar_label: "SAML SSO reference"
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the exact UI labels of the SAML Configuration panel at 26.09.1 (SSO Flow option names, Auto-Redirect to IdP). Evidence: none.

TODO: Confirm the cause and fix for the "SAML Assertion Not Yet Valid" error (clock skew between the identity provider and the host is assumed, not verified). Evidence: none.

TODO: Confirm whether the IdP-initiated assertion consumer URL is `/api/v1/login` at 26.09.1 and whether the legacy `/api/login` path still works. Evidence: docker/node/api-legacy-onprem/app.js:58 mounts routes at /api/v1.
:::

Netwrix Privilege Secure for Discovery supports Security Assertion Markup Language (SAML) single sign-on (SSO) through an identity provider (IdP). This page is the single reference for the fields and sign-in flows that every IdP shares. Use it with the provider-specific pages.

For Microsoft Entra ID, follow [Configure SAML SSO with Microsoft Entra ID](../../integrations/microsoft-entra-id/saml-sso.md). For other providers, see [AD FS](./ad-fs.md), [Duo](./duo.md), and [Okta](./okta.md).

## SAML configuration fields

Open **Configure** > **Server** > **SAML Configuration**. The values depend on the IdP and the SSO flow.

| Field | Description |
| --- | --- |
| **Entrypoint** | The application-specific IdP URL where Privilege Secure for Discovery sends the authentication request. |
| **Issuer** | The entity identifier that Privilege Secure for Discovery expects for the SAML relationship. It must exactly match the value that you configure in the IdP. |
| **Issuer Cert** | The Base64 body of the active application-specific SAML signing certificate. Exclude the `BEGIN CERTIFICATE` and `END CERTIFICATE` marker lines. |
| **SSO Enabled** | Enables SAML authentication. Keep a tested local administrator session open while you stage or change the configuration. |
| **SSO Flow** | Selects the IdP-initiated or service provider-initiated (SP-initiated) flow for the integration. |
| **Auto-Redirect to IdP** | Controls whether unauthenticated requests start SSO automatically. Available in 26.09.0 and later. |

## Choose an SSO flow

- **IdP-initiated:** The user starts from the IdP, which posts the SAML assertion to the product. The IdP application points to the assertion consumer URL, `https://<fqdn>/api/v1/login`, where `<fqdn>` is the fully qualified domain name (FQDN) of the product. The **Entrypoint** is the IdP-initiated sign-on URL.
- **SP-initiated:** The user starts from the product sign-in page and the product redirects to the IdP. The Microsoft Entra ID integration uses this flow.

Existing configurations that predate the **SSO Flow** field use the IdP-initiated flow.

## Map the distinguished name

The provider-specific pages map the Active Directory (AD) `distinguishedName` attribute to a SAML attribute named `dn`. The product uses this attribute to match the signed-in user to a directory account. Enter the attribute names manually if the IdP doesn't list them.

## Local sign-in and recovery

Enabling SSO doesn't remove local username and password authentication from the sign-in page. When automatic redirection is off, the local sign-in form appears first and users select the SSO option. When automatic redirection is on, the SSO view appears first and retains **Show local login**. Preserve and test the local recovery path after every SAML change.

## Troubleshoot SAML sign-in

If sign-in fails with "SAML Assertion Not Yet Valid", the IdP and the product host disagree on the current time. Synchronize the clocks of both systems with a reliable time source, then try again.
