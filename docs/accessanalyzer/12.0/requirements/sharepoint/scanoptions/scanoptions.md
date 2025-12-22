---
title: "SharePoint Scan Options"
description: "SharePoint Scan Options"
sidebar_position: 10
---

# SharePoint Scan Options

Required permissions on the targeted SharePoint environment are dependent upon not only the type of
environment targeted but also the type of data collection scan being executed. There are two types
of Access Auditing (SPAA) and/or Sensitive Data Discovery Auditing scans: agent-based and
agent-less. The Activity Auditing (SPAC) scans run as agent-less scans from Access Analyzer, but
they require the Netwrix Activity Monitor to have an activity agent deployed in the target
environment.

## Agent-Based Type

When Access Analyzer SharePoint scans are run in agent-based mode, the Access Analyzer SharePoint
Agent must be installed on the SharePoint Application server which hosts the Central Administration
component prior to executing the scans. This is typically the first server stood up during the
SharePoint farm installation process in this mode. The data collection processing is conducted by
the SharePoint Agent for the target environment. The final step in data collection is to transfer
the data collected in the SQLite databases, or Tier 2 databases, on the Access Analyzer SharePoint
Agent server back to the Access Analyzer Console server.

:::note
Agent-based scans can only target on-premise environments.
:::


See the following topics for additional information:

- [SharePoint Agent Permissions](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-based-scans/agentpermissions.md)
- [SharePoint Agent Ports](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-based-scans/agentports.md)

## Agent-Less Type

When SharePoint agent-less scans are run, it means all of the data collection processing is
conducted by the Access Analyzer Console server across the network.

:::note
Agent-less scans can target both on-premise and online environments. This is the only scan
mode that can run Activity Auditing (SPAC) scans.
:::


For Activity Auditing (SPAC) scans, target the server where the Netwrix Activity Monitor has a
deployed activity agent.

See the following topics for additional information:

- SharePoint Online

    - [SharePoint Online Permissions](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-less-scans/onlinepermissions.md)
    - [SharePoint Online Ports](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-less-scans/onlineports.md)

- SharePoint On-Premise

    - [SharePoint Agent-Less Permissions](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-less-scans/agentlesspermissions.md)
    - [SharePoint Agent-Less Ports](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-less-scans/agentlessports.md)
