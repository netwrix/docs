---
title: "Identity Stores in Directory Manager"
description: "Learn what an identity store is, which identity providers Directory Manager supports, and the tasks you can run through one."
keywords:
  - identity store
  - identity provider
  - Active Directory
  - Microsoft Entra ID
  - Google Workspace
sidebar_position: 30
---

# Identity Stores in Directory Manager

Use Directory Manager to create an identity store on a provider and run different functions in that provider through the store. These functions include:

- Group management tasks, such as creating groups, scheduling group updates, and expiring groups.
- User management tasks, such as creating users and mailboxes, managing user profiles, and managing direct reports.
- Bulk user provisioning and deprovisioning in an identity provider, a database, or a file, such as an Excel file.
- Entitlement-related tasks, such as updating the effective NTFS permissions for shared resources on a file server.
- Reporting and analytics.

## Supported identity providers

Directory Manager supports the following identity providers for creating an identity store to perform identity and access management tasks:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

You can also use identity stores created for these providers as the source and destination in Synchronize jobs for bulk user management tasks.

You can link Active Directory and Microsoft Entra ID identity stores to sync identical objects between them.

:::note
You can define a custom identity store for unsupported identity providers in Directory Manager. Contact Netwrix Client Services for support.
:::
