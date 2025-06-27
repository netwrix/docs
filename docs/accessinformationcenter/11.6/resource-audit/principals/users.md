# User Audit Interface

The User Audit interface is opened by searching for a particular Active Directory or Entra ID user.
See the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. It contains three panes in all audit interfaces: Reports, Results,
and Group Membership.

![User Audit Interface](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/userauditinterface.webp)

The user being audited is identified at the top of the interface as part of the interface
breadcrumb. See the
[User Reports](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)
topic for additional information.

# User Reports

User reports are accessed through the User Audit interface. You can access User reports by searching
for user objects on the Home page. See the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. The user object being reviewed is identified in the upper-left
corner. The data within these reports is collected by the Enterprise Auditor solutions which provide
data to the Resource reports. See the desired solution topic of the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

User reports identify the following information as scanned from the targeted environments:

- Everywhere a particular user has access
- What is that user doing with the access
- What Active Directory or Entra ID (formerly Azure Active Directory) permissions are applied to the
  user object

Activity reports display information for a selected date range. Some of the reports also include
trend graphs. Trend graphs provide a visual representation of the activity that occurred over the
selected date range. See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on selecting a date range and filtering the trend graphs. Activity reports
display local time stamps. Activity information is represented in two ways:

- Activity Statistics – Statistics reports show the count of operation events performed for the
  selected resource within the selected date range. These events are normalized into the operations
  of Reads, Writes, Deletes, and Manages.
- Activity Details – Details reports show the specific operation events that occurred for the
  selected resource within the selected date range

# Activity Details Report

The Activity Details report for a user object provides details on every activity event logged by the
audited user during the selected date range. This report includes a Permission Changes table.

![Activity Details report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/user/activitydetails.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the activity event
  occurred
- Access Time – Date and timestamp for when the operation occurred
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation
- Originating Address – IP Address of the NAS host from where the activity event originated. Blank
  if the operation originated on a Windows host.

There is one table at the bottom of the report displaying Permission Changes for the selected event.
It contains details on the trustee whose permissions were updated, added, or removed.

![Permission Changes table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/user/activitydetailstable.webp)

This table is comprised of the following columns:

- Trustee Name – Trustee whose permissions were modified
- Trustee Account – Active Directory account associated with the trustee
- ObjectSid – Security ID of the object
- Change Type – Type of change that occurred:

  - Add – Permission added to trustee
  - Remove – Permission removed from trustee
  - Update – Permission modified for trustee

- Ace Type – Whether or not the right assigned is allowed or denied
- Inheritance – Whether or not the Ace is inherited
- Ace Flags – Inheritance flag description
- Access Rights – Type of right assigned

# Activity Statistics Report

The Activity Statistics report for a user object provides statistical activity event information for
the audited user during the selected date range. This report includes a line graph for Traffic
Trend.

![Activity Statistics report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/user/activitystatistics.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the activity event
  occurred
- Path – Location of the resource where the activity event occurred
- Reads – Count of view/read operations on resource
- Writes – Count of edit/modify operations on resource
- Manages – Count of permission change operations on resource
- Deletes – Count of delete operations on resource

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

There is one line graph at the bottom displaying the Traffic Trend for the audited user. It provides
a visual representation of the number of operations events that occurred by operation type over the
selected date range. It indicates what volume of operations occurred per day. Each operation type is
provided with a different color, as indicated by the legend. See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on filtering the Trend graph.

# Attribute Changes Report

The Attribute Changes report for a user object provides specific details for every attribute change
to the audited user during the selected date range.

![Attribute Changes report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/attributechanges.webp)

This report is comprised of the following columns:

- Scan Time – Date and timestamp of the Enterprise Auditor scan that identified the change
- Attribute – Active Directory attribute changed for the user
- Old – Original attribute value
- New – New attribute value

# Effective Access Report

The Effective Access report for a user object provides insight into every resource the audited user
has access to and what level of access has been granted. Effective access is a calculation based on
several variables according to the type of resource. This report includes a Permission Source table.

See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for File Systems for additional information on the effective access calculations for file
system resources. See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
topic for SharePoint for additional information on the effective access calculations for SharePoint
resources.

![Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/effectiveaccess.webp)

This report contains a list of all resources the audited user has the ability to access within the
targeted environments. When this report is opened, the Access Information Center begins analyzing
all of the collected data available for all access points. While the report data is loading, there
is a status bar in the upper-right corner of the Reports pane that indicates the data loading
progress. After the data has loaded, the number of rows is displayed.

**NOTE:** This report continues to load while other reports are being opened and viewed. As long as
the Access Information Center user remains logged into the Access Information Center, it continues
to load until all data has been analyzed for the audited user.

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

There is one table at the bottom displaying Permission Source for the select resource. It contains
all of the ways the audited user has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/effectiveaccesstable.webp)

The number of rows for this table indicates the number of ways this audited user has been granted
access. This table is comprised of the following columns:

- Source Path – Location for which the audited object was granted rights to the selected resource,
  which can be represented two ways:

  - Directly Applied – Rights granted directly to the audited object
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the audited object

- Source Type – Source of the permission (for example, Share, Folder, Site Permission, Web
  Application Policy, and so on)
- Source Name – Name of the resource where the permission is assigned

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

# Member Of Report

The Member Of report for a user object provides a list of all groups of which the audited user is a
member. This report includes a Membership Paths table.

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
of the ways the audited user has been granted membership to the selected group.

- Type – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Membership Path – Displays location for the audited object’s membership to the selected group,
  starts with group and ends with user

  - For Direct Membership – Path is [Group Name] > [User Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [User Name]

- Nested Level – Count of groups nested between the selected group and the audited object’s direct
  membership

# Object Permissions Report

The Object Permissions report for a user object provides details on Active Directory permissions for
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

The Permissions report for a user object provides a list of all resources where the audited user has
been assigned permissions. The **Include Inherited** filter checkbox is active by default, which
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

# User Reports Quick Reference

The following reports are available for selection within the User Audit interface for an Active
Directory user:

| Report                                                                                              | Description                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)    | Provides details on every activity event logged by the audited user during the selected date range. This report includes a Permission Changes table.                                                                                                           |
| [Activity Statistics Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md) | Provides statistical activity event information for the audited user during the selected date range. This report includes a line graph for Traffic Trend.                                                                                                      |
| [Attribute Changes Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)   | Provides specific details for every attribute change to the audited user during the selected date range.                                                                                                                                                       |
| [Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)    | Provides insight into every resource the audited user has access to and what level of access has been granted. Effective access is a calculation based on several variables according to the type of resource. This report includes a Permission Source table. |
| [Member Of Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)           | Provides a list of all groups of which the audited user is a member. This report includes a Membership Paths table.                                                                                                                                            |
| [Object Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)  | Provides details on Active Directory permissions for the object.                                                                                                                                                                                               |
| [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/principals/users.md)         | Provides a list of all resources where the audited user has been assigned permissions.                                                                                                                                                                         |

## Entra ID User Reports

The following reports are available for selection within the User Audit interface for an Entra ID
(formerly Azure Active Directory) user:

| Report                                                                                                                | Description                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report for Entra ID User](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md) | Provides details on every activity event logged by the audited Entra ID user during the selected date range.                                                                                                                                                            |
| [Effective Access Report for Entra ID User](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md) | Provides insight into every resource the audited Entra ID user has access to and what level of access has been granted. Effective access is a calculation based on several variables according to the type of resource. This report includes a Permission Source table. |
| [Member Of Report for Entra ID User](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md)        | Provides a list of all groups of which the audited Entra ID user is a member. This report includes a Membership Paths table.                                                                                                                                            |
| [Permissions Report for Entra ID User](/docs/accessinformationcenter/11.6/resource-audit/principals/entra-id.md)      | Provides a list of all resources where the audited Entra ID user has been assigned permissions.                                                                                                                                                                         |
