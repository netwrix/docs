---
title: "Service Principal Details Page"
description: "Service Principal Details Page"
sidebar_position: 50
---

# Service Principal Details Page

The Service Principal Details page provides information about a service principal (Enterprise
Application) registered in Microsoft Entra ID, including its Agent Identity information if
applicable.

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
If the service principal is an Agent Identity (a service principal that acts as the identity for an
AI agent) or an Agent Identity Blueprint Principal (the service principal instance of an Agent
Identity Blueprint application), the profile card also displays:

- Agent Blueprint – Links to the [Application Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidapplication.md)
  for this service principal's Agent Identity Blueprint

The Sponsors and Agent Users tabs described in the following sections appear for Agent Identity
service principals only. Agent Identity Blueprint Principals display the standard Threats and
Activity Summary tabs.

Threat Manager tags Agent Identity service principals with the built-in Agent Identity tag. See the
[Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md) topic for
additional information about built-in tags.
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

![Application Threat Tab](/images/threatmanager/3.0/administration/threatdetails/threatstab.webp)

## Activity Summary Tab

The Activity Summary tab displays charts for a service principal's activity over different time
periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of activity. Other metrics
include Average Activity by Day, and Events by Type.

![Entra ID Application Activity Summary Tab](/images/threatmanager/3.0/administration/threatdetails/activitysummarytab.webp)

## Owners Tab

The Owners tab shows which objects can manage the service principal. These objects are the owners.
This tab doesn't appear for Agent Identity Blueprint Principals.

The table displays the following columns:

- Name – The display name of the owner
- Type – The type of Entra ID object
- Email – The email associated with the owners object

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
- Email – The email address associated with the agent user, if any
