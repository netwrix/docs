---
title: Microsoft 365
description: Add a SharePoint Online source to scan the sites, documents, sharing settings, and permissions of a Microsoft 365 tenant, including OneDrive.
sidebar_position: 4
---

A **SharePoint Online** source points Access Analyzer at the SharePoint Online service of one Microsoft 365 tenant. Access scans crawl the tenant's site collections, including OneDrive personal sites, and record documents, sharing settings, permissions, and SharePoint groups. Sensitive data scans open the documents and look for sensitive data patterns.

Authentication uses an app registration with a certificate rather than a client secret, so the setup has one extra step: you upload the service account's public certificate to the app registration in the Microsoft Entra admin center.

For an end-to-end walkthrough, see [Scan Microsoft 365](../guides/microsoft-365.md).

## Prerequisites

### App Registration

In the Microsoft Entra admin center, register an application in the tenant that owns the SharePoint Online sites. The scan uses the OAuth 2.0 client credentials flow, so no user signs in. On the app registration:

1. Copy the **Application (client) ID** and the **Directory (tenant) ID** from **Overview**.
2. Under **API permissions**, add the following application permissions:

   | API | Permission | Description |
   |---|---|---|
   | Microsoft Graph | `Sites.Read.All` | Read items in all site collections |
   | Microsoft Graph | `Directory.Read.All` | Read directory data |
   | SharePoint | `Sites.FullControl.All` | Full control of all site collections; SharePoint Online has no read-only application permission that includes permission entries, so scans need this permission to read the sharing settings and permissions on every site collection |

3. Grant admin consent for the tenant.
4. Leave **Certificates & secrets** for later: you upload the certificate after creating the service account in Access Analyzer.

:::note
Registering the application and granting admin consent requires a user account with the **Global Administrator**, **Application Administrator**, or **Cloud Application Administrator** role.
:::

### Service Account

SharePoint Online sources use a [Client ID and certificate](../service-accounts/client-id-certificate.md) service account. It carries the **Client (application) ID**, the **Tenant ID**, and a certificate. The tenant ID belongs to the service account, not the source; the source records only the SharePoint domain and the cloud. Under **Certificate**, choose one of two options:

- **Generate for me** (default). Access Analyzer generates a self-signed RSA-2048 certificate, valid for one year, when you save the account. Click **Download certificate (.pem)** on the confirmation step.
- **Upload my own**. Provide a single `.pem` file, up to 1 MB, containing the certificate and its unencrypted private key. Access Analyzer doesn't accept `.pfx` files or password-protected keys.

After you save the account, upload the public certificate to the app registration:

1. In the Microsoft Entra admin center, open the app registration.
2. Go to **Certificates & secrets**.
3. Upload the public certificate.

Scans can't authenticate until the certificate is on the app registration. Repeat the upload whenever you regenerate or replace the certificate.

### Entra ID Sync for Effective Permissions

An **Effective Permissions Calculation** step determines who has access to each object. It expands Entra ID group memberships using the most recent completed Identity sync of an [Entra ID](entra-id.md) source for the same tenant. If no such sync exists, the step still runs but calculates effective permissions from SharePoint data only, without expanding Entra ID groups. Add an Entra ID source for the tenant and sync it before your first SharePoint Online scan.

### Network

The agent that runs the scan needs outbound HTTPS access to Microsoft's sign-in service, to Microsoft Graph, and to the tenant's SharePoint domains: the one you enter in **SharePoint domain** and its OneDrive counterpart, for example `contoso.sharepoint.com` and `contoso-my.sharepoint.com`. You choose the agent in the scan's **Agent** field; see [Agents](../agents/index.md).

## Add a SharePoint Online Source

1. Go to **Configuration > Sources**.
2. Click **Add source**.
3. In **Source type**, select **SharePoint Online**.
4. Under **Details**, enter a **Name**.
5. Add a **Description** and **Labels** if you want them; see [Labels](labels.md).
6. Under **Connection**, enter the **SharePoint domain**.
7. If the tenant isn't in the commercial cloud, change **Azure cloud**.
8. Under **Access**, select the service account you created.
9. Click **Test connection** and wait for **Connection successful**.
10. Click **Add source**.

![Add source dialog with SharePoint Online selected](/images/accessanalyzer/26.1/sources/add-sharepoint-online.webp)

The **Connection** fields:

| Field | Required | What to enter | Default |
|---|---|---|---|
| **SharePoint domain** | Yes | The tenant's SharePoint Online domain, for example `contoso.sharepoint.com`. | None |
| **Azure cloud** | No | The Azure cloud environment that hosts the tenant: **Azure (Commercial)**, **Azure Government (GCC)**, **Azure Government (GCC High)**, **Azure Government (DoD)**, or **Azure China (21Vianet)**. | Azure (Commercial) |

Changing **SharePoint domain** on an existing source shows the warning **Existing scan data won't follow this change**: data already collected stays with the old domain. To rename the source, change **Name** instead.

## Test Connection

**Test connection** signs in to the tenant with the service account's client ID and certificate. The button becomes available after you enter a **SharePoint domain** and select a service account.

Success shows the message **Connection successful**. Failure shows an alert titled **Connection failed** with the reason. If Access Analyzer has no specific reason to report, the message is **SharePoint connection validation failed.**

## What the Scans Collect

### Access Scans

Access scans crawl everything within the scope you set on the scan, on every run; there is no differential mode for this source type.

| Object | What Access Analyzer records |
|---|---|
| Tenant sharing settings | External sharing capability for the tenant and for OneDrive, whether the Everyone and All Users claims are visible, and the sharing domain allow and block lists |
| Site collections | Site and web IDs, type (Team, Communication, or Personal), template, external sharing capability at that scope, guest access, read-only and lock state, and whether the site blocks custom scripts |
| Lists and libraries | List ID and template type |
| Documents | Document ID, version label, and the user who has it checked out |
| Permissions | Which principal holds which permission level on which object, the numeric permission mask, and the sharing type |
| SharePoint groups and memberships | Site groups with their numeric IDs and members |

The scan's options control the scope:

| Option | Default | Effect |
|---|---|---|
| **Workers** | 4 | Concurrent crawlers. Higher values shorten the scan but increase load on the tenant. |
| **Include site collections** | Empty (all) | Exact URLs of the site collections to scan. No wildcards. |
| **Exclude site collections** | Empty | Site collections to skip. Supports the `*` wildcard. |
| **Exclude object URLs** | Empty | URL patterns for documents, folders, and lists to skip within site collections. Supports the `*` wildcard; a URL without a wildcard matches nothing, so append `/*` to exclude a whole site. Exclude rules take precedence over include rules. |
| **Collect OneDrive** | On | Include OneDrive personal sites in the crawl. |

Raise **Workers** only if the tenant has SharePoint Online prioritization or adaptive throttling enabled, and treat 32 as the practical maximum. Beyond that, heavier throttling can cancel out the gain.

See [Scan types](../scans/scan-types.md) for how these options appear when you create a scan.

### Sensitive Data Scans

Sensitive data scans read the contents of the documents an Access scan found and match them against the enabled [sensitive data patterns](../sensitive-data-patterns/index.md). The scan skips documents larger than `sharepoint_file_size_max_mb` (10 MB by default) and documents whose extension appears in `sharepoint_excluded_extensions`; you set both in [Application settings](../settings/application.md). When the tenant throttles requests, the scan backs off and retries.

The collected data drives the [Data security dashboard](../dashboards-reports/dashboards/data-security.md) and the SharePoint [Data reports](../dashboards-reports/reports/data.md).
