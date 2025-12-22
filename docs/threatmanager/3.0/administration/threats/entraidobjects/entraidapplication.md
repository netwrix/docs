---
title: "Application Details Page"
description: "Application Details Page"
sidebar_position: 40
---

# Application Details Page

The Application Details page provides information about an application registered in Microsoft Entra
ID.

![Entra ID Application Page](/images/threatmanager/3.0/administration/threatdetails/application.webp)

The top of the page displays a profile card which may contain the following information about the
application:

- App ID
- Object ID
- Object Type
- Tenant
- Add Tag button

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab
- Roles Tab

## Threats Tab

The Threats tab for an application displays the threats for the application by timeframe.

![Application Threat Tab](/images/threatmanager/3.0/administration/threatdetails/threatstab.webp)

## Activity Summary Tab

The Activity Summary tab displays charts for an application's activity over different time periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of user activity.

![Entra ID Application Activity Summary Tab](/images/threatmanager/3.0/administration/threatdetails/activitysummarytab.webp)

## Group Membership Tab

The Group Membership tab displays groups in which the application is a member.

![Entra ID Group Membership Tab](/images/threatmanager/3.0/administration/threatdetails/groupmembershiptab_3.webp)

The Group Membership tab displays two tables:

- Direct Member Of – Lists groups the application is a direct member of
- Indirect Member Of – Lists groups the application is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.0/administration/threats/entraidobjects/entraidgroup.md) topic for additional information.
- Group Type – The type of group within Microsoft Entra ID
- Membership Type - How the group membership was assigned

- Security Enabled - Shows whether or not the "Security Enabled" flag is enabled within Microsoft
  Entra ID, if enabled it means that this type of group is used to manage user and computer access
  to shared resources for a group of users.

- Role Assignments Allowed - This flag shows whether or not a group can be assigned a role within
  Microsoft Entra ID

- Tags - The tags associated with the group Image

## Roles Tab

The role assignments tab displays a table that lists the roles that have been assigned to the Entra
ID application.

![Entra ID User Role Assignment Eligible page](/images/threatmanager/3.0/administration/threatdetails/entraiduserrolestabeligible.webp)

![Entra ID User Role Assignment Eligible page](/images/threatmanager/3.0/administration/threatdetails/entraiduserrolestabeligible.webp)

The Roles tab displays two tables:

- Eligible Assignments – Lists the roles that the user is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active

- Active Assignments – Lists roles that are currently active and usable to a user.

The eligible assignments table has the following columns:

- Role - Roles the user is eligible for
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether or not the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

The active assignments table has the following columns:

- Role - Roles that are currently active
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Assignment Type - How was the active role assignment assigned
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether or not the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)
