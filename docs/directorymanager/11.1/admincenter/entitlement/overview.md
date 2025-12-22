---
title: "Entitlement"
description: "Entitlement"
sidebar_position: 70
---

# Entitlement

Directory Manager Entitlement enables you to stay informed on the permissions assigned to objects
residing on your Active Directory servers and SharePoint sites.

## Entitlement for Active Directory

With Entitlement, you can view and update the effective NTFS permissions assigned to a user or group
on shared files and folders, that reside on a file server in your environment. You can:

- Select an object, such as a user or group, to view and update the permissions assigned to it on
  shared files and folders residing on a server.
- Select a file or folder to view a list of objects that have been granted permissions to it. You
  can also add and remove objects from the permissions list of the file or folder as well as update
  the permissions.

Entitlement types include:

- Explicit permissions
- Inherited permissions from a folder

To facilitate entitlement management for an Active Directory identity store in Directory Manager, do
the following:

- Specify one or more file servers in identity store configurations.
- Compute the permissions assigned to directory objects on the shared files and folders on those
  file server(s), and replicate those permissions to Elasticsearch.
- View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage File Servers](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md) topic for additional information.

## Entitlement for SharePoint

With Entitlement, you can view and manage the effective permissions for a user or group on document
libraries in a SharePoint site. You can:

- Select an object, such as a user or group, to view and update the levels and permissions assigned
  to it on document libraries in a site.
- Select a file or folder to view a list of objects that have been granted permissions to it. You
  can also add and remove objects from the permissions list of the file or folder as well as update
  the permissions.

Permission types include:

- Explicit permissions
- Inherited permissions from a document library

To facilitate entitlement management for a Microsoft Entra ID identity store in Directory Manager,
do the following:

- Specify the admin URL for SharePoint in identity store configurations to fetch the sites.
- Compute the permissions assigned to directory objects on the document libraries in those sites,
  and replicate those permissions to Elasticsearch.
- View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage SharePoint Sites](/docs/directorymanager/11.1/admincenter/entitlement/managesp.md) topic for additional information.

## Perpetual Entitlements vs Temporary Entitlements

Using Directory Manager, you can manage entitlements in the following ways:

- **Assign and revoke permissions on a perpetual basis** - When a permission is assigned
  perpetually, it continues to apply until you choose to revoke it. Similarly, when a permission is
  revoked perpetually, it stays so until you choose to reapply it.
- **Assign and revoke permissions on a temporary basis** - A temporary permission is one with a
  start and end date specified. In case of temporary assignment, Directory Manager auto assigns the
  permission on the start date and revokes it on the end date. Similarly, for temporary removal,
  Directory Manager revokes the permission on the start date and reassigns it on the end date.

## Entitlement Schedules

When you add the first server or site for entitlement management, the following three schedules are
automatically created in the identity store:

- [GroupID Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) - replicates object permissions on file
  servers and SharePoint sites for an Active Directory and Microsoft Entra ID identity store
  respectively. It performs a complete replication.
- [Entitlement Scope Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementscope.md) - replicates changes made to object
  permissions on file servers and SharePoint sites using Directory Manager.
- [Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementtemporarypermissions.md) -
  updates the temporary permissions for objects on file servers and SharePoint sites.

## What is Replication?

When a file server/SharePoint site is added for entitlement management, an essential task is to
replicate object permissions from the file server or SharePoint site to the Elasticsearch
repository. The GroupID Entitlement schedule for an identity store performs this replication, which
involves the following:

- Directory Manager first computes the effective NTFS permissions granted to directory objects on
  shared files and folders at granular level. For SharePoint sites, it computes the permissions
  granted to objects on document libraries.
- The Data service then replicates this data to Elasticsearch.

The GroupID Entitlement schedule auto runs at a set frequency, but you can also run it manually for
a file server or SharePoint site. Directory Manager time stamps the last time permissions were
replicated.

## Entitlement-related Permissions for Security Roles

You can grant permissions to security roles in an identity store on the Entitlement section in the
Directory Manager portal. Based on these permissions, role members can performs different actions,
such as navigate file servers and SharePoint sites, grant permissions to objects on shared
resources, revoke permissions, and more.

Entitlement-related permissions for a security role are discussed in the
[Entitlement](/docs/directorymanager/11.1/admincenter/securityrole/permissions.md#entitlement) topic.
