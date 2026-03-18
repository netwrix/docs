---
title: "Azure SSO"
description: "Azure SSO"
sidebar_position: 250
---

# Azure SSO

Azure SSO

# Azure SSO

This topic discusses the integration of Privilege Secure for Discovery (formerly SecureONE) with
Azure using Azure-hosted Single Sign-On (SSO) through either IdP or SP-initiated configurations.

## References

[Tutorial: Manage certificates for federated single sign-on](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/tutorial-manage-certificates-for-federated-single-sign-on)

## Claim Attributes

Within the claim for the single sign-on application, the attribute **dn** must be mapped to
**user.onpremisesdistinguishedname** to ensure it is included in the SAML assertion.

Manage Claim Example

![basicsamlconfiguration](/images/privilegesecure/4.2/discovery/admin/configuration/basicsamlconfiguration.webp)

- Name – dn
- Namespace (Optional) – Enter a namespace URI
- Source – Select the **Attribute**radio button
- Source attribute – Select **user.onpremisesdistinguedname** from the drop-down list

**NOTE:** Refer to the "Attributes & Claims" area in the screenshot example within the Azure SSO
configuration.

![managedclaim](/images/privilegesecure/4.2/discovery/admin/configuration/managedclaim.webp)

**NOTE:** Do not manually enter or copy/paste the attribute. Select it from the drop-down list in
the Source Attribute field. Typing part of the name will narrow down the search options.

## NPS-D SAML SSO Configuration Fields

Depending on whether your organization intends to use IdP or SP-initiated SSO flows, there are small
variations in the values to be added to the SAML configuration within NPS-D and the Azure SSO
application.

IdP-Initiated SSO

![npsd_saml](/images/privilegesecure/4.2/discovery/admin/configuration/npsd_saml.webp)

The Reply URL (Assertion Consumer Service URL) in Azure must follow the following format:

- `https://<address>/api/login`

![npsd_properties](/images/privilegesecure/4.2/discovery/admin/configuration/npsd_properties.webp)

The Entrypoint value in NPS-D must match the User Access URL in Azure SSO under **Manage** >
**Properties**.

SP-Initiated SSO

![npsd_saml_two](/images/privilegesecure/4.2/discovery/admin/configuration/npsd_saml_two.webp)

The Reply URL (Assertion Consumer Service URL) must follow the following format:

- `https://<address>/api/v1/login`

![setupnpsd](/images/privilegesecure/4.2/discovery/admin/configuration/setupnpsd.webp)

The Entrypoint value in NPS-D must match the **Login URL** in the Azure SSO Application.

![samlconfigurationtion](/images/privilegesecure/4.2/discovery/admin/configuration/samlconfigurationtion.webp)

The Sign-on URL in the Azure SSO Application must follow this format:

- `https://<address>/api/login`

**NOTE:** While the "Sign-on URL" is required for SP-initiated SSO, it can still be included in an
IdP-initiated configuration if your organization may switch to SP in the future or uses both IdP and
SP.

## Shared Configuration

For both IdP and SP-initiated configurations:

- The Issuer field in NPS-D must match the "Identifier (Entity ID)" configured in the Azure SSO
  Application.

    Example: npsd.netwrix.com .

- The Issuer Cert can be downloaded from the "SAML Certificates" section in Azure. Download the
  Base64 version, and copy the certificate text (excluding the ----BEGIN CERTIFICATE---- and ----END
  CERTIFICATE---- lines). Paste this into the relevant field in the NPS-D application.

![samlcerts](/images/privilegesecure/4.2/discovery/admin/configuration/samlcerts.webp)

## Troubleshooting

Versions 2.22 and later – For SSO to work as expected, both signed SAML assertion and response
options must be enabled. Failure to do so will result in an "Invalid signature" error in the UI
during login attempts.

![signsaml_assertion](/images/privilegesecure/4.2/discovery/admin/configuration/signsaml_assertion.webp)

![signsaml_response](/images/privilegesecure/4.2/discovery/admin/configuration/signsaml_response.webp)
