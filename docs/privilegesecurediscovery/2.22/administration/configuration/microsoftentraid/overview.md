---
title: "Microsoft Entra ID integration overview"
sidebar_label: "Overview"
description: "Plan Microsoft Entra ID directory synchronization, SAML SSO, and endpoint operations for Netwrix Privilege Secure for Discovery."
sidebar_position: 10
---

# Microsoft Entra ID integration overview

Netwrix Privilege Secure for Discovery (NPS-D) integrates with Microsoft Entra ID for directory synchronization and Security Assertion Markup Language (SAML) single sign-on (SSO). Windows endpoint operations require a separate connectivity path.

Native Microsoft Entra ID integration is available in NPS-D 25.12.0 and later. The Auto-Redirect to IdP SAML option is available in NPS-D 26.09.0 and later.

This guide covers:

- Microsoft Graph directory synchronization
- Service provider-initiated (SP-initiated) SAML SSO
- Entra-native inventory with or without an endpoint detection and response (EDR) connector
- Active Directory (AD) and Microsoft Entra hybrid deployments

## Integration layers

NPS-D separates directory synchronization, user authentication, and endpoint operations.

| Layer | Microsoft Entra object or endpoint channel | Credential or trust | Purpose |
| --- | --- | --- | --- |
| Directory synchronization | App registration | Tenant ID, client ID, and client secret | Read users, groups, devices, domains, and relationships through Microsoft Graph |
| SAML authentication | Non-gallery enterprise application | Microsoft Entra login URL and application-specific SAML signing certificate | Authenticate an existing, authorized NPS-D identity |
| Windows endpoint operations | Direct Windows connectivity or a supported EDR connector | Dedicated Scan, Protect, or EDR credentials | Collect inventory and perform supported endpoint actions without modifying Microsoft Entra directory objects |

The SAML identity must already exist in NPS-D and have an effective NPS-D role. Complete Microsoft Graph synchronization before you test SAML in an Entra-native deployment. In a hybrid deployment, the identity can originate from Lightweight Directory Access Protocol (LDAP) synchronization. Complete both synchronization paths and verify object correlation before you enable SSO.

Microsoft Graph doesn't provide an endpoint execution channel. Scan, Protect, Deny, Just-In-Time Access (JIT/JITA), and Offline Access Management (OAM) use direct Windows connectivity or a supported EDR connector.

## Select an endpoint operating model

Choose the model that provides a reliable path from NPS-D to the managed Windows endpoints.

| Capability | Entra Native baseline | Entra Native with EDR | AD and Entra Hybrid |
| --- | --- | --- | --- |
| Directory synchronization | Microsoft Graph | Microsoft Graph | LDAP and Microsoft Graph |
| SAML SSO | Yes | Yes | Yes |
| Scan and inventory | Inventory only; direct network access and a valid Scan account are required | Supported EDR path | Direct AD and Windows path; EDR is optional |
| Protect, Deny, JIT/JITA, and OAM | Keep disabled | Enable only actions supported by the connector and installed release | Commission through the approved direct or EDR path |
| Active Directory required | No | No | Yes |

The Entra Native baseline provides Entra directory visibility, SAML SSO, and read-only endpoint inventory when NPS-D can resolve, reach, and authenticate to the Windows endpoint. It doesn't guarantee inventory from every Entra-joined device. If an endpoint isn't directly reachable, Microsoft Graph can still supply its directory record, but NPS-D can't collect endpoint-local inventory through Graph.

Use Entra Native with EDR when NPS-D requires a supported EDR platform to reach Entra-managed endpoints. Use AD and Entra Hybrid when NPS-D can connect to the corresponding AD domain and use the direct Windows management path.

## Prerequisites

Before you make changes:

- Confirm that the installed NPS-D version is 25.12.0 or later, and record the exact build.
- Confirm the approved change window, backup plan, and rollback plan.
- Use a stable NPS-D fully qualified domain name (FQDN) covered by a trusted Transport Layer Security (TLS) certificate.
- Verify time synchronization on NPS-D, administrator workstations, and identity infrastructure.
- Preserve and test a local NPS-D administrator session.
- Select a controlled pilot user that will synchronize to NPS-D and receive an effective NPS-D role.
- Assign at least two accountable owners to each Microsoft Entra application.
- Define monitoring for client-secret and SAML-certificate expiration.
- Store all credentials in an approved secret manager.
- Select the endpoint operating model before you enable Scan or Protect policies.

## Record the integration values

Record the customer-specific values before you start the configuration.

| Purpose | Example or required value |
| --- | --- |
| NPS-D base URL, SAML Entity ID, and NPS-D Issuer | `https://npsd.example.com` |
| SAML Reply URL or Assertion Consumer Service (ACS) URL | `https://npsd.example.com/api/v1/login` |
| SP-initiated start URL and Microsoft Entra Sign-on URL | `https://npsd.example.com/api/v1/login/sso` |
| Local recovery login | `https://npsd.example.com/#/login` |
| Microsoft Entra Login URL and NPS-D Entrypoint | `https://login.microsoftonline.com/<tenant-id>/saml2` |
| SAML Relay State | Leave empty |
| SAML Logout URL | Leave empty |

Replace `npsd.example.com` with the final customer FQDN. Use the same value throughout Microsoft Entra and NPS-D.

## Configuration workflow

Complete the configuration in this order:

1. [Configure Microsoft Graph directory synchronization](./directorysynchronization.md).
2. [Configure SAML SSO](./samlsso.md).
3. [Configure endpoint operations](./endpointoperations.md) for the selected operating model.
4. [Validate and troubleshoot the integration](./validationandtroubleshooting.md).

The Graph app registration and SAML enterprise application are separate applications. Don't reuse the Graph client secret for SAML, Windows Scan, Windows Protect, LDAP, or EDR authentication.

## Related information

- [NPS-D 25.12.0 release announcement](https://community.netwrix.com/t/netwrix-privilege-secure-for-discovery-q4-2025-release-25-12-0/119241)
- [NPS-D 26.09.0 release notes](https://xchange.netwrix.com/doc/q3-2026-hotfix-26090-16ETUVdOoR)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [Configure SAML-based SSO in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso)
