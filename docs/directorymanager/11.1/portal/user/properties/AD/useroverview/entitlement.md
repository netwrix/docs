---
title: "Entitlements tab"
description: "Object Properties - Entitlements tab"
sidebar_position: 40
---

# Entitlements tab

Entitlement computes the effective NTFS permissions granted to objects on shared resources residing
on a server in an Active Directory identity store. The Entitlement tab provides an interface for
users to view these permissions. Users can view the permissions granted to a user over files and
folder residing on a server.

Explicit permissions are assigned to a user. To facilitate permission viewing, do the following:

- Specify one or more servers in identity store configurations.

    This must be a server in an Active Directory based identity store.

- Compute all permissions that directory objects have on the shared files and folders on those
  server(s).
- View these permissions in the Directory Manager portal.

## Entitlement job

An Entitlement schedule is automatically created for an identity store when:

- A server is added for permission analysis on the **Entitlement** page in an Active Directory
  identity store.

**Or**

- A SharePoint site is added for permission analysis on the **Entitlement** page in a Microsoft
  Entra ID identity store.

By default, the schedule runs weekly to compute permissions on shared files and folders residing on
the specified servers (for Active Directory), and the document libraries present in the specified
sites (for SharePoint). It then replicates these permissions to Elasticsearch, enabling users to
view, manage and update these permissions in the Directory Managerportal.

## Permissions on the Entitlement portal

You can grant permissions to security roles on the Entitlement section in the Directory Manager
portal. Based on these permissions, role members can performs different actions in the Entitlement
section, such as navigate file servers and SharePoint sites, grant permissions to objects on shared
resources, revoke permissions, and more.

Entitlement-related permissions for a security role in an identity store are discussed in the
[Entitlement](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md#entitlement) section.
