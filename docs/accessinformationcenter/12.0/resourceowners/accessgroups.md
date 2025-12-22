---
title: "Access Groups"
description: "Access Groups"
sidebar_position: 20
---

# Access Groups

When File System or SharePoint resources will be managed through the AIC, it is necessary to
configure access groups for those resources in the target environment. An access group provides one
of the following access levels to a specific resource: Read, Modify, or Full Control. In the
Resource Owners interface, the Ownership Administrator can then designate which group will be used
to grant which level of access to the resource. This can be done through either the
[Add New Resource Wizard](/docs/accessinformationcenter/12.0/resourceowners/interface/add.md) or the [Update Resource Wizard](/docs/accessinformationcenter/12.0/resourceowners/interface/update.md).

If an access group is not identified for a specific access level, then the owner will be unable to
change access to that level. For example, ownership configuration for the Finance share has been set
to use the Finance-Read group for read-level access and the Finance-Write group for modify-level
access. However, an access group was not set up for the full control access level. The owner of the
Finance share will be able to control read and modify access to the share, but not full control
access to the share. Domain users requesting access to the Finance share will only see options for
read and modify access; they will not be able to request full control access.

When the Ownership Administrator assigns access groups, the Access Information Center evaluates
which groups grant access through folder permissions to the selected resource. The Access
Information Center completes the evaluation of group access levels from the data collected by Access
Analyzer. A list of possible groups is made available for the selected access level in the
[Select Group Window](/docs/accessinformationcenter/12.0/resourceowners/interface/selectgroup.md). If no groups are listed that means the Access
Information Center could not identify any groups for that access level. In these cases it will be
necessary to set up a group with the appropriate permissions to the resource and rescan the host
with Access Analyzer.

The best practice for setting up access groups is to create up to three groups per resource, one for
each access level. Then assign the groups to the resource to be managed through the Access
Information Center. For example, the Documentation share is to be managed through the Access
Information Center. Create a Documentation Read group and grant it read-access to the Documentation
share. Then create a Documentation Write group and grant it modify-access. Finally create a
Documentation Manage group and grant it full control-access. Scan the host with Access Analyzer.
These groups can now be assigned as access groups for managing the Documentation share through the
Access Information Center.

:::tip
Remember, it is a best practice is to create at least two OUs for groups to be managed through the
Access Information Center: a security group OU and a distribution list group OU. See the
[Commit Active Directory Changes](/docs/accessinformationcenter/12.0/admin/additionalconfig/commitchanges.md) topic for additional
information.
:::


:::note
For SharePoint resources, the access groups must be Active Directory groups, not
SharePoint groups. The Access Information Center will not have the necessary permissions to make
changes to the SharePoint groups.
:::


Access Analyzer jobs that must be run to collect data on new access groups:

- .Active Directory Inventory Solution — Collects data for all new groups
- FileSystem > 0.Collection — Collects data for File System access groups
- SharePoint > 0.Collection — Collects data for SharePoint access groups

Once these groups have been created, provisioned, and scanned, the Access Information Center
provides a list of access groups that can be used to manage the resource. If the intended
access-level group does not appear, check the Effective Access report for the resource to identify
the reason.
