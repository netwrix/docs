---
title: "Effective Access Report"
description: "Effective Access Report"
sidebar_position: 20
---

# Effective Access Report

The Effective Access report at the site collection, site, list, library, and folder levels provides
insight into who has what level of access to this resource through a calculation that encompasses
web application policies, administrative access, resource permissions, and group membership. It
contains a list of all trustees with access to the selected resource and specifies the effective
access level. This report includes a Permission Source table.

![Effective Access report at the site collection, site, list, library, and folder levels](/images/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/siteeffectiveaccess.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account:

    - On-premises farm – Active Directory account associated with the trustee
    - Online instance – Entra ID account associated with the trustee

- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory for on-premise farms or Entra ID for online
  instances
- Mail – Trustee’s email account as read from Active Directory for on-premise farms or Entra ID for
  online instances
- EmployeeId – Corporate ID for the employee as read from Active Directory for on-premise farms or
  Entra ID for online instances
- Description – Description of the trustee object as read from Active Directory for on-premise farms
  or Entra ID for online instances
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Direct – True or False if the permission is directly assigned
- Changed – True or False if the trustee has changes modeled that would impact access to the
  selected resource

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource. To view the
granular rights granted through SharePoint permission levels (SharePoint Roles), see the **Role
Name** column.

![Permission Source table](/images/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/siteeffectiveaccesstable.webp)

The number of rows for this table indicates the number of ways this trustee has been granted access.
This table is comprised of the following columns:

- Source Path – Location for which the trustee was granted rights to the selected resource, which
  can be represented two ways:

    - Directly Applied – Rights granted directly to the selected trustee
    - Access through another trustee, path starts with trustee assigned the direct rights and shows
      all nested groups leading to the selected trustee

- Source Type – Source of the permission (for example, Site Permission, Web Application Policy, Site
  Collection Administrator, and so on)
- Source Name – Name of the resource where the permission is assigned

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- List – Right to view list of SharePoint resources
- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

This table provides the insight necessary to make modifications to a trustee's access. For example,
a trustee has three sources of access to the selected resource. One source is directly applied, and
two sources are through permissions granted to another trustee. In order for this trustee’s access
to the selected resource to be changed, each of these source paths must be taken into consideration.
