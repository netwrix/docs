---
title: "View group NTFS permissions on the Entitlement tab"
description: "View the effective NTFS permissions a group has on shared files and folders on Active Directory servers, and set up the servers to analyze."
keywords:
  - effective NTFS permissions
  - Entitlement tab
  - shared files and folders
  - Insights job
sidebar_position: 120
---

# View group NTFS permissions on the Entitlement tab

Entitlement computes the effective NTFS permissions granted to objects on shared resources residing
on a server in an Active Directory identity store. The Entitlement tab provides an interface for
users to view these permissions. Users can view the permissions granted to the group on files
and folders residing on a server.

Permission types include:

- Explicit permissions
- Inherited permissions (inherited from a group or folder)

For example, if a user is a member of a group that has permissions on a shared server, you can
remove the user from group membership to revoke their access to that server.

To enable permission viewing, do the following:

- Specify one or more servers in identity store configurations.  
   This must be a server in an Active Directory-based identity store.
- Compute all permissions that directory objects have on the shared files and folders on those
  servers.
- View these permissions in the Directory Manager portal.

## Insights job

When you add the first server for permission analysis, an Insights job is automatically created for
that identity store and displayed against the Scheduling node. By default, this job runs daily to
replicate permissions granted on shared files and folders on the servers.

## Permissions on the Directory Manager Insights portal

You can enable or restrict a security role from accessing the Insights portal. Use the Criteria tab
in role properties to specify the Directory Manager clients that role members can or can't access.
