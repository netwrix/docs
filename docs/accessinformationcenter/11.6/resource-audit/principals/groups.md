# Group Audit Interface

The Group Audit interface is opened by searching for a particular Active Directory or Entra ID
group. See the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. It contains three panes in all audit interfaces: Reports, Results,
and Group Membership.

![Group Audit Interface](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/groupauditinterface.webp)

The group being audited is identified at the top of the interface as part of the interface
breadcrumb. See the
[Group Reports](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)
topic for additional information.

# Group Reports

Group reports are accessed through the Group Audit interface. You can access Group reports by
searching for group objects on the Home page. See the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. The group object being reviewed is identified in the upper-left
corner. The data within these reports is collected by the Enterprise Auditor solutions which provide
data to the Resource reports. See the desired solution topics in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

Group reports identify the following information as scanned from the targeted environments:

- Everywhere a particular group has access
- What trustees are members of a particular group
- What group membership changes have occurred
- What Active Directory or Entra ID (formerly Azure Active Directory) permissions are applied to the
  group object

Changes reports display information for a selected date range.

Built-in group reports are opened through a search conducted for any of the following groups:

- Network Configuration Operators
- Server Operators
- Print Operators
- Backup Operators
- Cryptographic Operators
- Account Operators

**NOTE:** The Members report for a built-in group contains different information than the other
group types. See the
[Members Report for a Built-in Group](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md) topic
for additional information.

# Attribute Changes Report

The Attribute Changes report for a group object provides specific details for every attribute change
to the audited group during the selected date range.

![Attribute Changes report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/attributechanges.webp)

This report is comprised of the following columns:

- Scan Time – Date and timestamp of the Enterprise Auditor scan that identified the change
- Attribute – Active Directory attribute changedA for the group
- Old – Original attribute value
- New – New attribute value

# Effective Access Report

The Effective Access report for a group object provides the insight into every resource the audited
group has access to and what level of access has been granted. Effective access is a calculation
based on several variables according to the type of resource. This report includes a Permission
Source table.

See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for File Systems for additional information on the effective access calculations for file
system resources. See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
topic for SharePoint for additional information on the effective access calculations for SharePoint
resources.

![Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/effectiveaccess.webp)

This report contains a list of all resources the audited group has the ability to access within the
targeted environments. When this report is opened, the Access Information Center begins analyzing
all of the collected data available for all access points. While the report data is loading, there
is a status bar in the upper-right corner of the Reports pane that indicates the data loading
progress. After the data has loaded, the number of rows is displayed.

**NOTE:** This report continues to load while other reports are being opened and viewed. As long as
the Access Information Center user remains logged into the Access Information Center, it continues
to load until all data has been analyzed for the audited group.

The scoping options allow Access Information Center users to specifying what collected data should
be analyzed in order to generate this report. Unlike other filter options, this can impact the
loading time depending on the scoping options selected. See the
[Scope an Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/navigation/effective-access.md)
topic for instructions on using this feature.

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Path – Location of the resource where the permission is set
- Open Access – True or False to indicate if access is granted through a high-risk trustee (for
  example, Everyone, Authenticated Users, or Domain Users)

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

There is one table at the bottom displaying Permission Source for the selected resource. It contains
all of the ways the audited group has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/effectiveaccesstable.webp)

The number of rows for this table indicates the number of ways the audited group has been granted
access to this resource. This table is comprised of the following columns:

- Source Path – Location for which the audited object was granted rights to the selected resource,
  which can be represented two ways:

  - Directly Applied – Rights granted directly to the audited object
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the audited object

- Source Type – Source of the permission (for example, Share, Folder, Site Permission, Web
  Application Policy, and so on)
- Source Name – Name of the resource where the permission is assigned
- Trustee Account – Active Directory account associated with the trustee

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Member Changes Report

The Member Changes report for a group object provides specific details for any membership changes to
the audited group during the selected date range.

![Member Changes report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/memberchanges.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Change Type – Type of change that occurred: Added to group or Removed from group
- Scan Time – Date and timestamp of the Enterprise Auditor scan that identified the change

If the selected trustee is a group, the Group Membership pane displays the group membership,
including nested groups.

# Member Of Report

The Member Of report for a group object provides a list of all groups of which the audited group is
a member. This report includes a Membership Paths table.

![Member Of report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/memberof.webp)

This report is comprised of the following columns:

- Group Account – Account associated with the group
- Group Mail – Group’s email account as read from Active Directory, if applicable
- Group ObjectSid – Security ID of the group object
- Domain Name – Name of the domain
- Group Scope – Scope of the group object: Domain Local, Global, or Universal
- Group Target – Type of the group object: Distribution or Security
- Membership – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Description – Description of this group from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- Created – Date Active Directory object was created
- Changed – Date and timestamp from last change as tracked by Active Directory (whenChanged
  attribute)
- ManagedBy Name – Name of manager for the group from Active Directory
- ManagedBy Logon – Trustee account for the group’s manager
- ManagedBy Department – Department of the group’s manager
- ManagedBy Mail – Email address for the group’s manager

Since this report is a list of groups, the Group Membership pane displays the group membership,
including nested groups.

There is one table at the bottom displaying Membership Paths for the select group. It contains all
of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Membership Path – Displays location for the audited object’s membership to the selected group,
  starts with this group and ends with the selected group

  - For Direct Membership – Path is [Group Name] > [Selected Group Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Selected Group Name]

- Nested Level – Count of groups nested between the selected group and the audited object’s direct
  membership

# Members Report

The Members report for a group object provides a list of all trustees, users, and groups with
membership in the audited group. This report includes a Membership Paths table.

_Remember,_ the Members report for a built-in group contains different information to the other
group types. See the
[Members Report for a Built-in Group](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md) topic
for additional information.

![Members report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/members.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Domain Name – Name of the domain
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Last Logon – Date and timestamp from last logon as tracked by Active Directory
- Type – Type of membership the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership
- Manager Name – Name of manager for the trustee from Active Directory
- Manager Logon – Trustee account for the trustee’s manager
- Manager Department – Department of the trustee’s manager
- Manager Mail – Email address for the trustee’s manager

If the selected trustee is a group, the Group Membership pane displays the group membership,
including nested groups.

There is one table at the bottom displaying Membership Paths for the select group. It contains all
of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the selected trustee has to the audited groupType – Type of membership
  the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Membership Path – Displays location for the selected trustee’s membership to the audited group,
  starts with audited group and ends with trustee

  - For Direct Membership – Path is [Group Name] > [Trustee Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Trustee Name]

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership

# Members Report for a Built-in Group

The Members report for a built-in group provides a list of all trustees, users, and groups with
membership in the audited group. This report includes a Membership Paths table.

_Remember,_ the Members report for a built-in group contains different information than the other
group types.

![Members report for a built-in group](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/membersbuiltin.webp)

This report is comprised of the following columns:

- Host Name – Name of the server (local groups) or domain where the audited group resides
- Group Type – Type of group being audited: local or domain
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Type – Type of membership the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

If the selected trustee is a group, the Group Membership pane displays the group membership,
including nested groups.

There is one table at the bottom displaying Membership Paths for the select group. It contains all
of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Membership Path – Displays location for the selected trustee’s membership to the audited group,
  starts with audited group and ends with trustee

  - For Direct Membership – Path is [Group Name] > [Trustee Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Trustee Name]

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership

# Object Permissions Report

The Object Permissions report for a group object provides details on Active Directory permissions to
the object.

The data within this report is collected by the Enterprise Auditor Active Directory Permissions
Analyzer solution. See the Active Directory Permissions Analyzer Solution topic of the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

![Object Permissions report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/objectpermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee
- Trustee Name – Trustee with permissions to the object
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Source – Direct or Inherited permission type
- Type – Type of resource where the permission is set

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of objects
- Read – Right to view/read objects
- Write – Right to add or modify objects
- Delete – Right to delete objects
- Manage – Equivalent to full control over objects

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Permissions Report

The Permissions report for a group object provides a list of all resources where the audited group
has been assigned permissions. The **Include Inherited** filter checkbox is active by default, which
means the report displays both direct and inherited permissions unless modified by the Access
Information Center user. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on filter options.

![Permissions report](/img/product_docs/accessanalyzer/11.6/admin/action/mailbox/permissions.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Source – Direct or Inherited permission type
- Path – Location of the resource where the permission is set

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Group Reports Quick Reference Guide

The following reports are available for selection within the Group Audit interface for an Active
Directory Group:

| Report                                                                                                        | Description                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Attribute Changes Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)            | Provides specific details for every attribute change to the audited group during the selected date range.                                                                                                                                                       |
| [Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)             | Provides insight into every resource the audited group has access to and what level of access has been granted. Effective access is a calculation based on several variables according to the type of resource. This report includes a Permission Source table. |
| [Member Changes Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)               | Provides specific details for any membership changes to the audited group during the selected date range.                                                                                                                                                       |
| [Member Of Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)                    | Provides a list of all groups of which the audited group is a member. This report includes a Membership Paths table.                                                                                                                                            |
| [Members Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)                      | Provides a list of all trustees, users, and groups with membership in the audited group. This report includes a Membership Paths table.                                                                                                                         |
| [Members Report for a Built-in Group](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md) | Provides a list of all trustees, users, and groups with membership in the audited built-in group. This report includes a Membership Paths table.                                                                                                                |
| [Object Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)           | Provides details on Active Directory permissions to the object.                                                                                                                                                                                                 |
| [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/principals/groups.md)                  | Provides a list of all resources where the audited group has been assigned permissions.                                                                                                                                                                         |

## Entra ID Group Reports

The following reports are available for selection within the Group Audit interface for an Entra ID
(formerly Azure Active Directory) group:

| Report                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Effective Access Report for Entra ID Group](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md) | Provides insight into every resource the audited Entra ID group has access to and what level of access has been granted. Effective access is a calculation based on several variables according to the type of resource. This report includes a Permission Source table. |
| [Member Of Report for Entra ID Group](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md)        | Provides a list of all Entra ID groups of which the audited group is a member. This report includes a Membership Paths table.                                                                                                                                            |
| [Members Report for Entra ID Group](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md)          | Provides a list of all trustees, users, and groups with membership in the audited Entra ID group. This report includes a Membership Paths table.                                                                                                                         |
| [Permissions Report for Entra ID Group](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md)      | Provides a list of all resources where the audited Entra ID group has been assigned permissions.                                                                                                                                                                         |
