---
title: "Entitlement Management in Directory Manager"
description: "Learn how Directory Manager Entitlement replicates and manages permissions on Active Directory file servers and SharePoint sites, and how its schedules work."
keywords:
  - Directory Manager Entitlement
  - NTFS permissions
  - SharePoint document library permissions
  - temporary permissions
  - entitlement schedules
sidebar_position: 70
---

# Entitlement Management in Directory Manager

Directory Manager Entitlement shows the permissions assigned to objects on your Active Directory file servers and SharePoint sites. You can view and update those permissions from the Directory Manager portal.

## Entitlement for Active Directory

For shared files and folders on a file server in your environment, you can view and update the effective NTFS permissions assigned to a user or group. You can:

- Select an object, such as a user or group, to view and update the permissions assigned to it on shared files and folders on a server.
- Select a file or folder to view the objects that have permissions to it. You can add objects to and remove objects from the permissions list of the file or folder, and update the permissions.

Entitlement types include:

- Explicit permissions
- Inherited permissions from a folder

To manage entitlements for an Active Directory identity store in Directory Manager:

1. Specify one or more file servers in identity store configurations.
2. Compute the permissions assigned to directory objects on the shared files and folders on those file servers, and replicate those permissions to Elasticsearch.
3. View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage File Servers for Directory Manager Entitlement](/docs/directorymanager/11.2/admincenter/entitlement/managefs.md) topic for additional information.

## Entitlement for SharePoint

For document libraries in a SharePoint site, you can view and manage the effective permissions for a user or group. You can:

- Select an object, such as a user or group, to view and update the levels and permissions assigned to it on document libraries in a site.
- Select a file or folder to view the objects that have permissions to it. You can add objects to and remove objects from the permissions list of the file or folder, and update the permissions.

Permission types include:

- Explicit permissions
- Inherited permissions from a document library

To manage entitlements for a Microsoft Entra ID identity store in Directory Manager:

1. Specify the admin URL for SharePoint in identity store configurations to fetch the sites.
2. Compute the permissions assigned to directory objects on the document libraries in those sites, and replicate those permissions to Elasticsearch.
3. View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage SharePoint Sites for Directory Manager Entitlement](/docs/directorymanager/11.2/admincenter/entitlement/managesp.md) topic for additional information.

## Perpetual and temporary entitlements

You can manage entitlements in the following ways:

- **Assign and revoke permissions on a perpetual basis** - A perpetually assigned permission applies until you revoke it. A perpetually revoked permission stays revoked until you reapply it.
- **Assign and revoke permissions on a temporary basis** - A temporary permission has a start date and an end date. For a temporary assignment, Directory Manager assigns the permission on the start date and revokes it on the end date. For a temporary removal, Directory Manager revokes the permission on the start date and reassigns it on the end date.

## Entitlement schedules

When you add the first server or site for entitlement management, Directory Manager automatically creates the following three schedules in the identity store:

- [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.2/admincenter/schedule/entitlement.md) - replicates object permissions on file servers for an Active Directory identity store and on SharePoint sites for a Microsoft Entra ID identity store. It performs a complete replication.
- [Edit the Directory Manager Entitlement Scope Schedule](/docs/directorymanager/11.2/admincenter/schedule/entitlementscope.md) - replicates changes made to object permissions on file servers and SharePoint sites using Directory Manager.
- [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.2/admincenter/schedule/entitlementtemporarypermissions.md) - updates the temporary permissions for objects on file servers and SharePoint sites.

## Permission replication

When you add a file server or SharePoint site for entitlement management, Directory Manager must replicate the object permissions from that file server or site to the Elasticsearch repository. The Directory Manager Entitlement schedule for an identity store performs this replication in two stages:

- Directory Manager computes the effective NTFS permissions granted to directory objects on shared files and folders at a granular level. For SharePoint sites, it computes the permissions granted to objects on document libraries.
- The Data service replicates this data to Elasticsearch.

The Directory Manager Entitlement schedule runs automatically at a set frequency. You can also run it manually for a file server or SharePoint site. Directory Manager records a timestamp each time it replicates permissions.

## Entitlement-related permissions for security roles

You can grant permissions to security roles in an identity store in the Entitlement section of the Directory Manager portal. Based on these permissions, role members can perform actions such as navigating file servers and SharePoint sites, granting permissions to objects on shared resources, and revoking permissions.

The [Entitlement](/docs/directorymanager/11.2/admincenter/securityrole/permissions.md#entitlement) topic describes the entitlement-related permissions for a security role.
