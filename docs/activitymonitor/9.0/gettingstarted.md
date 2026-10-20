---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 10
---

# Getting Started

Once Netwrix Activity Monitor is installed, the following workflow enables organizations to quickly
and easily get started with activity monitoring.

## Requirements

The Activity Monitor console needs to be installed on a server or workstation. After that agents are deployed to
the target environment and configured to monitor activity. Prepare the target
environment and configure the credentials used by the agents. Each supported environment has
different requirements. See the following topics for additional information:

- Console machine [Requirements ](/docs/activitymonitor/9.0/requirements/overview.md)
- [Activity Agent Server Requirements](/docs/activitymonitor/9.0/requirements/activityagent/activityagent.md) for monitoring:

    - Windows File servers
    - NAS devices
    - Microsoft Entra ID
    - SharePoint On-Premise
    - SharePoint Online
    - Exchange Online
    - SQL Servers

- [AD Agent Server Requirements](/docs/activitymonitor/9.0/requirements/adagent/adagent.md) for monitoring Active Directory
- [Linux Agent Server Requirements](/docs/activitymonitor/9.0/requirements/linuxagent.md) for monitoring Linux file servers

## Install & Deploy Agents

After the prerequisites are accomplished, you are ready to install the application and deploy agents.
See the following topics for additional information:

- [Install Application](/docs/activitymonitor/9.0/install/application.md)
- [Agent Information](/docs/activitymonitor/9.0/install/agents/agents.md)
- [Import License Key](/docs/activitymonitor/9.0/install/importlicensekey.md)

## Configure Monitoring

After you deploy the agents, configure the monitoring of the target environment. For
Windows File Servers, configure monitoring at the same time you deploy the agent. For all other
target environments, configure monitoring after you deploy the agent. Configure what to
monitor and where the collected data will go (outputs). See the following topics for
additional information:

- [Monitored Domains Tab](/docs/activitymonitor/9.0/admin/monitoreddomains/overview.md) for Active Directory monitoring
- [Monitored Hosts & Services Tab](/docs/activitymonitor/9.0/admin/monitoredhosts/overview.md) for all other target environments.

## Search Activity Event Data

You can query the activity logs created by the activity agents from within the console. Using the
search feature, set filters for the query to view monitored events. See the
[Search Feature](/docs/activitymonitor/9.0/admin/search/overview.md) topic for additional information.
