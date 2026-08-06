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
- Owners Tab
- Group Membership Tab
- Roles Tab
- Sponsors Tab (Agent Identity Blueprint applications only)
- Agent Identities Tab (Agent Identity Blueprint applications only)

:::info
An Agent Identity Blueprint is an application registered in Microsoft Entra ID that defines the
identity configuration for an AI agent (a software process that authenticates and acts within
Microsoft Entra ID without a human user). Microsoft Entra ID creates Agent Identity service
principals and Agent User accounts from an Agent Identity Blueprint. Threat Manager tags Agent
Identity Blueprints with the built-in Agent Blueprint tag, which the
[Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md)
describes.
:::

## Threats Tab

The Threats tab displays the application's threats by timeframe.

![Application Threat Tab](/images/threatmanager/3.0/administration/threatdetails/threatstab.webp)

## Activity Summary Tab

The Activity Summary tab displays charts for an application's activity over different time periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of user activity.

![Entra ID Application Activity Summary Tab](/images/threatmanager/3.0/administration/threatdetails/activitysummarytab.webp)

## Owners Tab

The Owners tab lists the objects, known as owners, that can manage the application.

The table displays the following columns:

- Name – The display name of the owner. Click the name to open its details page.
- Type – The type of Entra ID object
- Email – The email address associated with the owner object

## Group Membership Tab

The Group Membership tab displays groups in which the application is a member.

![Entra ID Group Membership Tab](/images/threatmanager/3.0/administration/threatdetails/groupmembershiptab_3.webp)

The Group Membership tab displays two tables:

- Direct Member Of – Lists groups the application is a direct member of
- Indirect Member Of – Lists groups the application is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidgroup.md) topic for additional information.
- Group Type – The type of group within Microsoft Entra ID
- Membership Type - How the group membership was assigned

- Security Enabled - Shows whether the "Security Enabled" flag is enabled within Microsoft
  Entra ID. When enabled, this type of group manages user and computer access to shared resources
  for a group of users.

- Role Assignments Allowed - This flag shows whether Microsoft Entra ID can assign a role to a
  group

- Tags - The tags associated with the group Image

## Roles Tab

The Roles tab displays a table of the roles assigned to the Microsoft Entra ID application.

![Entra ID User Role Assignment Eligible page](/images/threatmanager/3.0/administration/threatdetails/entraiduserrolestabeligible.webp)

![Entra ID User Role Assignment Eligible page](/images/threatmanager/3.0/administration/threatdetails/entraiduserrolestabeligible.webp)

The Roles tab displays two tables:

- Eligible Assignments – Lists the roles that the application is eligible for. An eligible
  assignment is a role assignment that the application can activate when needed but that isn't
  permanently active

- Active Assignments – Lists roles that are active and available to the application.

The eligible assignments table has the following columns:

- Role - Roles the application is eligible for
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

The active assignments table has the following columns:

- Role - Roles that are active
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Assignment Type - How was the active role assignment assigned
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

## Sponsors Tab

This tab appears only for Agent Identity Blueprint applications.

The Sponsors tab displays a table of the directory objects that sponsor the Agent Identity
Blueprint. A sponsor is a user or group in Microsoft Entra ID that's accountable for the AI agent.

![Agent Identity Blueprint Sponsors Tab](/images/threatmanager/3.3/administration/threatdetails/agentblueprintsponsorstab.webp)

The table has the following columns:

- Name – The name of the sponsor
- Type – The object type of the sponsor
- Email – The sponsor's email address

## Agent Identities Tab

This tab appears only for Agent Identity Blueprint applications.

The Agent Identities tab displays the Agent Identities and Agent Users created from the Agent
Identity Blueprint.

![Agent Identities Tab](/images/threatmanager/3.3/administration/threatdetails/agentidentitiestab.webp)

The tab has the following sub-tabs:

- Agent Identities – Lists the Agent Identity service principals created from this Agent Identity
  Blueprint.
- Agent Users – Lists the Agent Users associated with this Agent Identity Blueprint.

Each sub-tab table has the following columns:

- Name – The name of the Agent Identity or Agent User. Click the name to open its
  [Service Principal Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidserviceprincipal.md)
  or [User Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraiduser.md).
- Type – The object type
- Email – The email address associated with the object, if any
