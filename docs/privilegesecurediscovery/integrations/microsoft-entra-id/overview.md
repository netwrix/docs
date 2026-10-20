---
title: "Microsoft Entra ID integration overview"
sidebar_label: "Overview"
description: "Plan Microsoft Entra ID directory synchronization, SAML single sign-on, and endpoint operations for Netwrix Privilege Secure for Discovery."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery integrates with Microsoft Entra ID for directory synchronization and Security Assertion Markup Language (SAML) single sign-on (SSO). Windows endpoint operations require a separate connectivity path. This section helps you plan and configure each layer.

The integration covers:

- Microsoft Graph directory synchronization
- Service provider-initiated (SP-initiated) SAML SSO
- Entra-native inventory with or without an endpoint detection and response (EDR) connector
- Active Directory (AD) and Microsoft Entra hybrid deployments

## Integration layers

Privilege Secure for Discovery separates directory synchronization, user authentication, and endpoint operations.

| Layer | Microsoft Entra object or endpoint channel | Credential or trust | Purpose |
| --- | --- | --- | --- |
| Directory synchronization | App registration | Tenant ID, client ID, and client secret | Read users, groups, devices, domains, and relationships through Microsoft Graph |
| SAML authentication | Non-gallery enterprise application | Microsoft Entra login URL and application-specific SAML signing certificate | Authenticate an existing, authorized Privilege Secure for Discovery identity |
| Windows endpoint operations | Direct Windows connectivity or a supported EDR connector | Dedicated Scan, Protect, or EDR credentials | Collect inventory and perform supported endpoint actions without modifying Microsoft Entra directory objects |

The SAML identity must already exist in Privilege Secure for Discovery and have an effective role. In an Entra-native deployment, complete Microsoft Graph synchronization before you test SAML. In a hybrid deployment, the identity can originate from Lightweight Directory Access Protocol (LDAP) synchronization. Complete both synchronization paths and verify object correlation before you enable SSO.

Microsoft Graph doesn't provide an endpoint execution channel. Scan, Protect, Deny, Just-In-Time Access (JIT/JITA), and Offline Access Management (OAM) use direct Windows connectivity or a supported EDR connector.

## Select an endpoint operating model

Choose the model that provides a reliable path from Privilege Secure for Discovery to the managed Windows endpoints.

| Capability | Entra Native baseline | Entra Native with EDR | AD and Entra Hybrid |
| --- | --- | --- | --- |
| Directory synchronization | Microsoft Graph | Microsoft Graph | LDAP and Microsoft Graph |
| SAML SSO | Yes | Yes | Yes |
| Scan and inventory | Inventory only; requires direct network access and a valid Scan account | Supported EDR path | Direct AD and Windows path; EDR is optional |
| Protect, Deny, JIT/JITA, and OAM | Keep disabled | Enable only the actions that the connector and installed release support | Use the direct or EDR path that supports the action |
| Active Directory required | No | No | Yes |

The Entra Native baseline provides Entra directory visibility, SAML SSO, and read-only endpoint inventory when Privilege Secure for Discovery can resolve, reach, and authenticate to the Windows endpoint. It doesn't guarantee inventory from every Entra-joined device. If an endpoint isn't directly reachable, Microsoft Graph can still supply its directory record, but the product can't collect endpoint-local inventory through Graph.

Use Entra Native with EDR when the deployment requires a supported EDR platform to reach Entra-managed endpoints. Use AD and Entra Hybrid when the product can connect to the corresponding AD domain and use the direct Windows management path.

## Prerequisites

Before you make changes:

- Confirm that the installed release is 26.03 or later.
- Plan a change window, a backup, and a rollback procedure.
- Use a stable fully qualified domain name (FQDN) for the Privilege Secure for Discovery server, covered by a trusted Transport Layer Security (TLS) certificate.
- Verify time synchronization on the server, administrator workstations, and identity infrastructure.
- Keep a tested local administrator session.
- Select a pilot user that synchronizes to Privilege Secure for Discovery and receives an effective role.
- Assign at least two accountable owners to each Microsoft Entra application.
- Define monitoring for client-secret and SAML-certificate expiration.
- Store all credentials in a secret manager.
- Select the endpoint operating model before you enable Scan or Protect policies.

## Record the integration values

Record the values for your environment before you start the configuration.

| Purpose | Example or required value |
| --- | --- |
| Base URL, SAML Entity ID, and Issuer | `https://psd.example.com` |
| SAML Reply URL or Assertion Consumer Service (ACS) URL | `https://psd.example.com/api/v1/login` |
| SP-initiated start URL and Microsoft Entra Sign-on URL | `https://psd.example.com/api/v1/login/sso` |
| Local recovery login | `https://psd.example.com/#/login` |
| Microsoft Entra Login URL and Entrypoint | `https://login.microsoftonline.com/<tenant-id>/saml2` |
| SAML Relay State | Leave empty |
| SAML Logout URL | Leave empty |

Replace `psd.example.com` with the FQDN of your server. Use the same value throughout Microsoft Entra and Privilege Secure for Discovery.

## Configuration workflow

Complete the configuration in this order:

1. [Configure Microsoft Graph directory synchronization](./directory-synchronization.md).
2. [Configure SAML SSO](./saml-sso.md).
3. [Configure endpoint operations](./endpoint-operations.md) for the selected operating model.
4. [Validate and troubleshoot the integration](./validation-and-troubleshooting.md).

The Graph app registration and SAML enterprise application are separate applications. Don't reuse the Graph client secret for SAML, Windows Scan, Windows Protect, LDAP, or EDR authentication.

## Related information

- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [Configure SAML-based SSO in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso)
