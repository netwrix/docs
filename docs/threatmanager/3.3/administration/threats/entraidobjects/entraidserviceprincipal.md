---
title: "Service Principal Details Page"
description: "Service Principal Details Page"
sidebar_position: 50
---

# Service Principal Details Page

The Service Principal Details page provides information about a service principal (Enterprise
Application) registered in Microsoft Entra ID, including its Agent Identity information if
applicable.

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

Threat Manager tags Agent Identity service principals with the built-in Agent Identity tag. See the
[Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md) topic for
additional information about built-in tags.
:::

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Sponsors Tab (Agent Identity service principals only)
- Agent Users Tab (Agent Identity service principals only)

## Threats Tab

The Threats tab for a service principal displays the threats for the service principal by
timeframe.

A key for threat types appears below the chart.

## Activity Summary Tab

The Activity Summary tab displays charts for a service principal's activity over different time
periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of activity. Other metrics
include Average Activity by Day, and Events by Type.

## Sponsors Tab

This tab appears only for Agent Identity service principals.

The Sponsors tab displays a table of the directory objects that sponsor the Agent Identity. A
sponsor is a user or group in Microsoft Entra ID that's accountable for the AI agent.

The table has the following columns:

- Name – The name of the sponsor
- Type – The object type of the sponsor
- Email – The sponsor's email address

## Agent Users Tab

This tab appears only for Agent Identity service principals.

The Agent Users tab displays a table of the Agent Users linked to this Agent Identity.

The table has the following columns:

- Name – The name of the agent user
- Type – The object type
- Email – The email address associated with the agent user, if any

Click a link in the table to view its
[User Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraiduser.md).
