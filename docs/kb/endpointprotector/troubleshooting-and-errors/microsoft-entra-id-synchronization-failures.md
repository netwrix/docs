---
description: >-
  Explains how to troubleshoot Microsoft Entra ID synchronization failures in
  Netwrix Endpoint Protector, covering client secret, application and tenant
  ID, API permission, network, and configuration causes.
keywords:
  - Microsoft Entra ID
  - Azure Active Directory
  - Directory Services
  - Graph API
  - synchronization
  - client secret
  - application ID
  - tenant ID
  - API permissions
  - Endpoint Protector
products:
  - endpointprotector
sidebar_label: Microsoft Entra ID Synchronization Failures
tags:
  - troubleshooting-and-errors
  - kb
title: "Microsoft Entra ID Synchronization Failures"
knowledge_article_id: REPLACE_WITH_SALESFORCE_KA_ID
---

# Microsoft Entra ID Synchronization Failures

## Symptom

Testing or saving a Microsoft Entra ID API Consumer under **Directory Services** fails, or a synchronization job completes without errors but imports no users or groups, or imports users with duplicate or mismatched usernames. This can occur when configuring a new API Consumer or after a previously working synchronization job stops functioning.

## Cause

### Expired or Invalid Client Secret

The Secret ID configured on the API Consumer no longer authenticates. This happens when the client secret expired, was regenerated, or was revoked on the application registration in Microsoft Entra ID without updating Endpoint Protector.

### Incorrect Application (Client) ID or Tenant ID

The **Application (client) ID** or **Directory (tenant) ID** field on the API Consumer does not match the application registration. This happens when the values were copied incorrectly, or when the application registration was deleted and recreated with new identifiers.

### Missing or Unconsented Microsoft Graph API Permissions

The application registration is missing one or more of the required Microsoft Graph application permissions (`Directory.Read.All`, `Group.Read.All`, `User.Read.All`), or an administrator has not granted admin consent for them.

### Network or Firewall Restrictions to Microsoft Graph

A firewall or proxy configuration blocks outbound HTTPS traffic from the Endpoint Protector Server to the Microsoft Graph API endpoints.

### Typos or Misconfiguration in EPP Entra ID Settings

A manual entry error in the API Consumer name, Application ID, Tenant ID, or Secret ID fields causes the connection to fail even though the application registration itself is configured correctly. In hybrid environments, an incorrectly set **Map on-premises users** switch can also cause duplicate or mismatched usernames between the on-premises Active Directory and Microsoft Entra ID.

## Resolution

### Verify the Client Secret

1. In the Microsoft Entra ID application registration, go to **Certificates & Secrets** and confirm the client secret has not expired.
2. If the secret has expired or was regenerated, create a new client secret and copy the **Value** immediately, since it is hidden after navigating away.
3. In **Directory Services** > **Microsoft Entra ID**, edit the API Consumer and update the **Client Secret Value** field with the new secret.
4. Click **Test** to confirm the connection succeeds.

### Verify the Application (Client) ID and Tenant ID

1. In the Microsoft Entra ID application registration, go to the **Overview** (Essentials) section and confirm the **Application (client) ID** and **Directory (tenant) ID** values.
2. In **Directory Services** > **Microsoft Entra ID**, edit the API Consumer and confirm these values match exactly, with no extra spaces or characters.
3. Click **Test** to confirm the connection succeeds.

### Verify Microsoft Graph API Permissions

1. In the Microsoft Entra ID application registration, go to **API Permissions** and confirm the following Application permissions are present: `Directory.Read.All`, `Group.Read.All`, `User.Read.All`.
2. Confirm the status column shows admin consent has been granted for each permission. If not, click **Grant admin consent** for the directory.
3. Re-test the API Consumer connection in **Directory Services** > **Microsoft Entra ID** after granting consent.

### Verify Network and Firewall Connectivity to Microsoft Graph

1. From the Endpoint Protector Server, confirm outbound HTTPS (port 443) connectivity to the Microsoft Graph API endpoints is allowed through any firewall or proxy.
2. Confirm no proxy, VPN, or network policy change has blocked the Endpoint Protector Server from reaching Microsoft Graph since the connection last worked.

### Review EPP Entra ID Configuration for Typos

1. Re-enter the Application ID, Tenant ID, and Secret ID fields on the API Consumer, confirming there are no extra spaces or truncated characters.
2. In hybrid environments, confirm the **Map on-premises users** switch matches the intended behavior: unmarked uses the `userPrincipalName` attribute, marked uses the `onPremisesSamAccountName` attribute.
3. Click **Test** after each change to confirm the connection succeeds before saving.

## Related Links

- [Directory Services](/docs/endpointprotector/admin/directoryserv#microsoft-entra-id)
