---
title: "Credential Types"
description: "Supported credential types and configurations"
sidebar_position: 20
---

# Credential Types

Access Analyzer supports three credential types for service accounts. The appropriate type depends on the target source and its authentication requirements. Service accounts can be created ahead of time from the **Service Accounts** page, or inline during the Connect Source wizard.

## Supported Types

| Credential Type | Description | Typical Use |
|---|---|---|
| **Username/Password** | Standard username and password pair | CIFS file shares, Active Directory, Local Groups |
| **OAuth2 Client Credentials** | Client ID and client secret for OAuth2 flows | Entra ID |
| **Certificate** | X.509 certificate with private key | SharePoint Online |

## Username/Password

Provide a **Username** and **Password**. The password is encrypted at rest. For Active Directory and file server sources, use the `DOMAIN\username` or `username@domain.com` format.

Used by the **File Server** and **Active Directory** wizards. During the wizard, click **+ Create New Account** to create a username/password service account inline.

## OAuth2 Client Credentials

Provide a **Client ID** and **Client Secret**. These credentials are used in the OAuth2 client credentials grant flow to obtain an access token from the identity provider.

Used by the **Entra ID** wizard. The Client ID and Client Secret come from an Azure AD app registration — see [App Registration and Permissions](/docs/accessanalyzer/1_0/connectors/iam/entraid/appregistration) for setup instructions.

## Certificate

Upload a **Certificate** file (PEM or PFX format) and provide the **Private Key** or PFX password. Certificate-based authentication is used for SharePoint Online connections.

:::note
Credential values are stored encrypted and cannot be viewed after creation. To update credentials, edit the service account and provide new values.
:::
