---
title: Entra ID
description: Add an Entra ID source to sync the users, groups, directory roles, and memberships of a Microsoft Entra ID tenant.
sidebar_position: 3
---

An **Entra ID** source points Access Analyzer at one Microsoft Entra ID tenant. Identity syncs sign in to the tenant as an app registration and read its users, groups, directory roles, and memberships through Microsoft Graph. The sync is read-only.

Besides feeding the identity reports, an Entra ID source completes your SharePoint Online data. After a SharePoint Online scan, Access Analyzer expands Entra ID group memberships using the most recent completed Entra ID sync of the same tenant. Without one, it calculates effective permissions from SharePoint data alone. See [Microsoft 365](microsoft-365.md).

:::note

This source collects directory data for reports. It's unrelated to signing in to Access Analyzer with Microsoft Entra ID, which is configured separately; see [Single sign-on](../settings/single-sign-on.md). The two can use different app registrations.

:::

For an end-to-end walkthrough, see [Scan Entra ID](../guides/entra-id.md).

## Prerequisites

### App registration

The sync uses the OAuth 2.0 client credentials flow, so no user signs in. In the Microsoft Entra admin center:

1. Register an application in the tenant you want to scan.
2. On the app's **Overview** page, copy the **Application (client) ID** and the **Directory (tenant) ID**.
3. Under **Certificates & secrets**, create a client secret.
4. Copy the secret value before you leave the page.
5. Under **API permissions**, add the Microsoft Graph application permissions that grant read access to users, groups, and directory roles.
6. Grant admin consent for the permissions you added. A tenant administrator must approve the consent.

### Service account

Entra ID sources use a [Client ID and secret](../service-accounts/client-id-secret.md) service account. Enter the app registration's **Client (application) ID** and the **Client secret** value. The tenant ID isn't part of this service account type; it goes on the source.

### Network

The agent that runs the sync needs outbound HTTPS access to Microsoft's sign-in service and to Microsoft Graph for the cloud you select. You choose the agent on the scan, not on the source; see [Agents](../agents/index.md).

## Add an Entra ID source

1. Go to **Configuration > Sources**.
2. Click **Add source**.
3. In **Source type**, select **Entra ID**.
4. Under **Details**, enter a **Name**.
5. Add a **Description** and **Labels** if you want them; see [Labels](labels.md).
6. Under **Connection**, fill in the fields described in the following table.
7. Under **Access**, in **Service account**, select the **Client ID/secret** account you set up for this app registration.
8. Click **Test connection** and wait for **Connection successful**.
9. Click **Add source**.

| Field | Required | What to enter | Default |
|---|---|---|---|
| **Tenant ID** | Yes | The **Directory (tenant) ID** of the tenant, a globally unique identifier (GUID) such as `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. | None |
| **Azure cloud** | No | The cloud that hosts the tenant: **Azure (Commercial)**, **Azure Government (GCC)**, **Azure Government (GCC High)**, **Azure Government (DoD)**, or **Azure China (21Vianet)**. | Azure (Commercial) |

![Add source dialog with Entra ID selected](/images/accessanalyzer/26.1/sources/add-entra-id.webp)

Changing **Tenant ID** on an existing source shows the warning **Existing scan data won't follow this change**: data already synced stays associated with the old tenant. If you only want a different display name, change **Name** instead.

## What Test connection checks

**Test connection** signs in to the tenant with the service account's client ID and secret, then checks that the app registration has the permissions the sync needs. It's enabled after you've entered a **Tenant ID** and selected a service account.

Success shows the message **Connection successful**. Failure shows **Connection failed** with the reason. If Access Analyzer has no specific reason to report, the message is **Entra ID connection validation failed.**

## What the sync collects

An **Identity sync** has no options for this source type.

| Object | What's recorded |
|---|---|
| Users: identity | Display name, user principal name, sign-in names, email, first name, and last name |
| Users: organization | Job title, department, company, office, manager, address, and phone numbers |
| Users: account | Account state (disabled, locked, lock reason, and lock time), user type, creation type, creation date, and last activity |
| Users: credentials | Password settings (required, expiry, last changed, and change forced at next sign-in) and whether multi-factor authentication (MFA) is configured |
| Users: licenses and sync | Assigned licenses and, for synced accounts, the on-premises object ID and last sync time |
| Groups | Display name, group type, and for dynamic groups, the membership rule |
| Directory roles | Display name, role template ID, whether the role is built in, enabled, and privileged, and the principal types it can be assigned to |
| Memberships | Which users and groups belong to which group or hold which role, and, for nested groups, the group the membership was expanded from |

The synced data drives the [Identity reports](../dashboards-reports/reports/identity.md).
