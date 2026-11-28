---
title: "Identity Stores in GroupID"
description: "Learn what an identity store is, which identity providers GroupID supports, and the tasks you can perform through one."
keywords:
  - identity store
  - identity provider
  - Active Directory
  - Microsoft Entra ID
  - Google Workspace
sidebar_position: 30
---

# Identity Stores in GroupID

Use GroupID to create an identity store on an identity provider and perform
different functions in that provider through the identity store. These functions include:

- Group management tasks, such as creating and expiring groups and scheduling group updates.
- User management tasks, such as creating users and mailboxes, and managing user profiles and
  direct reports.
- Bulk user provisioning and deprovisioning in an identity provider or database, or even in a file, such
  as an Excel file.
- Entitlement-related tasks, such as updating the effective NTFS permissions for shared resources on
  a file server.
- Reporting and analytics.

GroupID supports the following identity providers for creating an identity store, to
perform identity and access management tasks:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

Identity stores created for these providers can also be used as source and destination in
Synchronize jobs for bulk user management tasks.

You can also link Active Directory and Microsoft Entra ID identity stores to sync identical objects
between them.

:::note
You can define a custom identity store for unsupported identity providers in GroupID.
Contact Netwrix Client Services for support.
:::

**See Also**

- [Create an Identity Store in GroupID](/docs/directorymanager/11.0/signin/identitystore/create.md)
- [Manage an Identity Store in GroupID](/docs/directorymanager/11.0/signin/identitystore/manage.md)
- [Configure an Identity Store in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/configure.md)
- [Link Identity Stores in GroupID](/docs/directorymanager/11.0/signin/identitystore/link/overview.md)
