---
title: "SharePoint Scan Options"
description: "SharePoint Scan Options"
sidebar_position: 10
---

# SharePoint Scan Options

Required permissions on the targeted SharePoint environment depend on both the type of environment
you target and the type of data collection scan you run. There are two types of Access Auditing
(SPAA) and/or Sensitive Data Discovery Auditing scans: agent-based and agent-less. The Activity
Auditing (SPAC) scans run as agent-less scans from Enterprise Auditor, but they require the Netwrix
Activity Monitor to have an activity agent deployed in the target environment.

## Agent-Based Type

Before you run Enterprise Auditor SharePoint scans in agent-based mode, install the Enterprise
Auditor SharePoint Agent on the SharePoint Application server that hosts the Central Administration
component. This is typically the first server set up during the SharePoint farm installation
process in this mode. The SharePoint Agent conducts data collection processing for the target
environment. The final step in data collection is to transfer the data collected in the SQLite
databases, or Tier 2 databases, on the Enterprise Auditor SharePoint Agent server back to the
Enterprise Auditor Console server.

:::note
Agent-based scans can only target on-premise environments.
:::


See the following topics for additional information:

- [SharePoint Agent Permissions](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentbasedscans/agentpermissions.md)
- [SharePoint Agent Ports](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentbasedscans/agentports.md)

## Agent-Less Type

When you run SharePoint agent-less scans, the Enterprise Auditor Console server conducts all data
collection processing across the network.

:::note
Agent-less scans can target both on-premise and online environments. This is the only scan
mode that can run Activity Auditing (SPAC) scans.
:::


For Activity Auditing (SPAC) scans, target the server where the Netwrix Activity Monitor has a
deployed activity agent.

See the following topics for additional information:

- SharePoint Online

    - [SharePoint Online Permissions](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentlessscans/onlinepermissions.md)
    - [SharePoint Online Ports](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentlessscans/onlineports.md)

- SharePoint On-Premise

    - [SharePoint Agent-Less Permissions](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentlessscans/agentlesspermissions.md)
    - [SharePoint Agent-Less Ports](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentlessscans/agentlessports.md)
