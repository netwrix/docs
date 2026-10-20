---
title: "SAML SSO configuration"
description: "Understand the common SAML SSO configuration fields and login behavior in Netwrix Privilege Secure for Discovery."
sidebar_label: "SAML SSO configuration"
sidebar_position: 140
---

# SAML SSO configuration

Netwrix Privilege Secure for Discovery (NPS-D) supports Security Assertion Markup Language (SAML) single sign-on (SSO) through a configured identity provider (IdP).

In NPS-D, open **Configure > Server > SAML Configuration**. The values depend on the selected IdP and SSO flow.

| Field | Description |
| --- | --- |
| **Entrypoint** | The application-specific IdP URL where NPS-D sends the authentication request. |
| **Issuer** | The entity identifier that NPS-D expects for the configured SAML relationship. It must exactly match the value that you configure in the IdP. |
| **Issuer Cert** | The Base64 body of the active application-specific SAML signing certificate. Exclude the `BEGIN CERTIFICATE` and `END CERTIFICATE` marker lines. |
| **SSO Enabled** | Enables SAML authentication. Keep a tested local administrator session open while you stage or change the configuration. |
| **SSO Flow** | Selects the supported IdP-initiated or service provider-initiated flow for the integration. |
| Auto-Redirect to IdP | Controls whether unauthenticated requests start SSO automatically. This option is available in NPS-D 26.09.0 and later. |

Enabling SSO doesn't remove local username and password authentication from the login experience. When automatic redirection is off, the local login form appears first and users can select the SSO login option. When automatic redirection is on, the SSO view appears first and retains **Show local login**. Preserve and test the local recovery path after every SAML change.

For the complete Microsoft Entra configuration, see [Microsoft Entra ID integration](./microsoftentraid/overview.md).
