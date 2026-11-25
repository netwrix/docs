---
title: "View User Entitlements in Directory Manager"
description: "View the effective NTFS permissions a user has on shared files and folders, and learn how the Entitlement job computes them."
keywords:
  - Entitlements tab
  - NTFS permissions
  - Entitlement job
  - shared file permissions
sidebar_position: 40
---

# View User Entitlements in Directory Manager

Entitlement computes the effective NTFS permissions granted to objects on shared resources on a server in an Active Directory identity store. The Entitlement tab lets users view these permissions. Users can view the permissions granted to a user over files and folders on a server.

Explicit permissions are assigned to a user. To make permissions viewable, do the following:

- Specify one or more servers in identity store configurations.

    This must be a server in an Active Directory based identity store.

- Compute all permissions that directory objects have on the shared files and folders on those servers.
- View these permissions in the Directory Manager portal.

## Entitlement job

An Entitlement schedule is automatically created for an identity store when:

- A server is added for permission analysis on the **Entitlement** page in an Active Directory identity store.

**Or**

- A SharePoint site is added for permission analysis on the **Entitlement** page in a Microsoft Entra ID identity store.

By default, the schedule runs weekly. It computes permissions on shared files and folders on the specified servers (for Active Directory), and on the document libraries in the specified sites (for SharePoint). It then replicates these permissions to Elasticsearch, so users can view, manage, and update them in the Directory Manager portal.

## Permissions on the Entitlement portal

You can grant permissions to security roles in the Entitlement section of the Directory Manager portal. Based on these permissions, role members can perform different actions in the Entitlement section. For example, they can navigate file servers and SharePoint sites, grant permissions to objects on shared resources, and revoke permissions.

The [Entitlement](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md#entitlement) section describes the Entitlement-related permissions for a security role in an identity store.
