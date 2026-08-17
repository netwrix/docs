---
title: "Service Principal Details Page"
description: "Service Principal Details Page"
sidebar_position: 50
---

# Service Principal Details Page

The Service Principal Details page provides information about a service principal (Enterprise
Application) registered in Microsoft Entra ID. A service principal is the local representation of
an application in a Microsoft Entra ID tenant, and it defines what the application can access in
that tenant. For service principals related to AI agents (a software process that authenticates
and acts within Microsoft Entra ID without a human user), the page also displays Agent Identity
details.

![Service Principal Details Page](/images/threatmanager/3.3/administration/threatdetails/entraidserviceprincipalpage.webp)

The top of the page displays a profile card which may contain the following information about the
service principal:

- App ID
- App Template ID
- Organization
- Object ID
- Object Type
- Tenant
- Add Tag button

:::info
Two kinds of service principal display an additional Agent Blueprint field. An Agent Identity acts
as the identity for an AI agent, and Microsoft Entra ID creates it from an Agent Identity Blueprint.
An Agent Identity Blueprint Principal is the service principal that Microsoft Entra ID creates
automatically for each Agent Identity Blueprint application. The Agent Blueprint field links to the
[Application Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidapplication.md)
for the service principal's Agent Identity Blueprint.

To distinguish the two, check the tag. Threat Manager tags Agent Identity service principals with
the built-in Agent Identity tag. It tags Agent Identity Blueprint Principals with the Agent
Blueprint tag — the same tag it applies to the parent Agent Identity Blueprint application.
See the [Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md)
to view or manage all built-in and custom tags.
:::

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Owners Tab (doesn't appear for Agent Identity Blueprint Principals)
- Sponsors Tab (Agent Identity service principals only)
- Agent Users Tab (Agent Identity service principals only)

## Threats Tab

The Threats tab displays a chart of the threats detected for the service principal by timeframe. A
key for threat types appears below the chart.

![Service Principal Threats Tab](/images/threatmanager/3.0/administration/threatdetails/threatstab.webp)

## Activity Summary Tab

The Activity Summary tab displays charts for a service principal's activity over different time
periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of activity. Other metrics
include Average Activity by Day, and Events by Type.

![Service Principal Activity Summary Tab](/images/threatmanager/3.0/administration/threatdetails/activitysummarytab.webp)

## Owners Tab

The Owners tab lists the objects, known as owners, that can manage the service principal. This tab
doesn't appear for Agent Identity Blueprint Principals.

The table displays the following columns:

- Name – The display name of the owner. Click the name to open its details page.
- Type – The type of Entra ID object
- Email – The email address associated with the owner object

## Sponsors Tab

This tab appears only for Agent Identity service principals.

The Sponsors tab displays a table of the directory objects that sponsor the Agent Identity. A
sponsor is a user or group in Microsoft Entra ID that's accountable for the AI agent.

![Agent Identity Sponsors Tab](/images/threatmanager/3.3/administration/threatdetails/agentidentitysponsorstab.webp)

The table has the following columns:

- Name – The name of the sponsor
- Type – The object type of the sponsor
- Email – The sponsor's email address

## Agent Users Tab

This tab appears only for Agent Identity service principals.

The Agent Users tab displays a table of the Agent Users linked to this Agent Identity.

![Agent Identity Agent Users Tab](/images/threatmanager/3.3/administration/threatdetails/agentidentityagentuserstab.webp)

The table has the following columns:

- Name – The name of the Agent User. Click the name to open its
  [User Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraiduser.md).
- Type – The object type
- Email – The email address associated with the Agent User, if any
