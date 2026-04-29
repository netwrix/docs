---
title: "Migrating Connection Profiles to Service Accounts"
description: "How to inventory legacy Netwrix Access Analyzer connection profiles and recreate them as service accounts in Access Analyzer 26"
keywords:
  - connection profile migration
  - service account migration
  - stealthaudit credentials
  - access analyzer credentials
  - username password service account
  - client id secret
  - client certificate
products:
  - access-analyzer
sidebar_label: "Migrating Connection Profiles"
tags:
  - migration
  - service-accounts
---

# Migrating Connection Profiles to Service Accounts

## Overview

Service accounts in AA26 replace legacy connection profiles and serve the same purpose: storing the credentials that scanners use to connect to data sources. Complete this inventory and recreation process before creating source groups.

Complete this procedure before creating source groups. The source group creation wizard requires a service account to be present before you can create a group.

:::warning
Passwords and client secrets cannot be exported from the legacy system. You must re-enter all credentials when creating service accounts in AA26. Prepare the necessary credentials before starting this procedure.
:::

---

## Credential type mapping

Each legacy connection profile credential type maps to an AA26 service account type as follows:

| Legacy Credential Type | AA26 Service Account Type | Used For |
| --- | --- | --- |
| Local machine account (Windows) | Username/Password | File Server sources |
| Active Directory domain account | Username/Password | Active Directory and File Server sources |
| Microsoft Entra ID key | Client ID/Secret | Entra ID sources |
| Web service (certificate) | Client ID/Certificate | SharePoint Online sources |
| Unix account | *(not applicable)* | Not supported in AA26 connectors |
| SQL account | *(not applicable)* | Not supported in AA26 connectors |

Only the four credential types listed as applicable are needed for the connectors supported in AA26. If your legacy environment uses connection profiles for other purposes (SQL Server inventory, Unix auditing), those do not require migration.

---

## Before you begin

- Identify all connection profiles used by Active Directory, file server, SharePoint, and Entra ID jobs in the legacy system.
- Obtain the credentials for each profile: username and password for domain accounts, client ID and secret for Entra ID registrations, and client ID and certificate for SharePoint.
- Confirm that each account has the required permissions for its connector type in AA26. See the connector-specific prerequisites in the Access Analyzer documentation.

---

## Step 1 — Inventory legacy connection profiles

Before creating service accounts in AA26, document every connection profile that needs to be migrated.

1. Open the Netwrix Access Analyzer console.
2. Navigate to **Settings** > **Connection**.
3. Review each connection profile listed. Record the profile name, credential type, username, and domain.
4. Note which jobs reference each profile (visible in the Job Properties panel for each job).

---

## Step 2 — Create service accounts in Access Analyzer

Create one service account in AA26 for each legacy connection profile that needs to be migrated. Use the credential type mapping table above to determine which account type to create for each profile.

For the full creation procedure, navigate to **Configuration** > **Service Accounts** in the Access Analyzer console. See the Service Accounts documentation for steps specific to each credential type.

---

## Step 3 — Verify

After creating all service accounts, verify each one before using it in a source group:

1. In the service accounts list, locate a newly created account.
2. Click the actions menu and select **Edit**.
3. Confirm the credential type and username display correctly.
4. You'll verify connectivity through the source group's **Test Connection** function in the [next migration step](./migrate-target-servers.md).

---

## Related links

- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
- [Migration Checklist](./migration-checklist.md)
