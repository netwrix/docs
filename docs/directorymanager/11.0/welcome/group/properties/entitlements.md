---
title: "Group Properties - Entitlement tab"
description: "Group Properties - Entitlement tab"
sidebar_position: 120
---

# Group Properties - Entitlement tab

Entitlement computes the effective NTFS permissions granted to objects on shared resources residing
on a server in an Active Directory identity store. The Entitlement tab provides an interface for
users to view these permissions. Users can view the permissions granted to an the group over files
and folder residing on a server.

Permission types include:

- Explicit permissions
- Inherited permissions (inherited from a group or folder)

So, for example, if a user is a member of a group that has permissions on a shared server, you can
simply remove the user from group membership to revoke his/her access to that server.

To facilitate permission viewing, do the following:

- Specify one or more servers in identity store configurations.  
   This must be a server in an Active Directory based identity store.
- Compute all permissions that directory objects have on the shared files and folders on those
  server(s).
- View these permissions in the GroupID portal.

## Insights job

When you add the first server for permission analysis, an Insights job is automatically created for
that identity store and displayed against the Scheduling node. By default, this job runs daily to
replicate permissions granted on shared files and folders on the servers.

## Permissions on the GroupID Insights portal

You can enable or restrict a security role from accessing the Insights portal. Use the Criteria tab
in role properties to specify the GroupID clients that role members can or cannot access.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
