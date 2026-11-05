---
title: "Data Collecting Account"
description: "Data sources and connectors that Netwrix 1Secure supports, and the workflow for adding sources to collect data."
sidebar_position: 10
---

# Data Collecting Account

The following data sources are supported:

| Data source       | Provided connectors                               | Required rights and permissions:                                                                                                    |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory  | Active Directory Activity, Active Directory Logons, Active Directory State, Ping Castle, Group Policy Activity, Group Policy State | [Active Directory Auditing](/docs/1secure/admin/datacollection/activedirectoryauditing/activedirectoryauditing.md) [Logon Activity Auditing](/docs/1secure/admin/datacollection/logonactivity/overview.md) |
| Entra ID          | Entra ID Activity, Entra ID Logons, Entra ID State, Azure Storage State | [Microsoft Entra ID Auditing](/docs/1secure/admin/datacollection/entraid.md)                                                                                        |
| Computer          | File Server Activity, File Server State, File Server Data Classification, Network Attached Storage Activity (NAM), Windows Server Activity, Windows Server State, SQL Logons | [Computer Auditing](/docs/1secure/admin/datacollection/computer/overview.md)                                                                                        |
| SharePoint Online | SharePoint Online Activity, SharePoint Online State, SharePoint Online Data Classification, SharePoint Online Copilot | [SharePoint Online Auditing](/docs/1secure/admin/datacollection/sharepointonline.md)                                                                                |
| Exchange Online   | Exchange Online Activity                          | [Exchange Online Auditing](/docs/1secure/admin/datacollection/exchangeonline.md)                                                                                    |

## Data Collection Workflow
The Netwrix 1Secure data collection workflow is as follows:

**Step 1 –** Add organizations. See the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic for additional information.

**Step 2 –** Install the agent. An agent is a single 1Secure install at a network location. Sources in
the same network share the agent, so add them under the same one. The agent runs on any
domain-joined Windows server and reaches 1Secure over outbound HTTPS. The agent installer is an MSI
for Windows Server 2016 or later. See the [Install Agent](/docs/1secure/install/installagent.md) topic for additional information.

## Source Types

The add-source wizard offers the following source types: Active Directory Domain, Entra ID Domain,
Azure Subscription, Windows Device, Network Attached Storage, Exchange Online, SharePoint Online,
SQL Server, Windows File Server, and Application.

The wizard prefixes source group names by source type: "AD: " for Active Directory, "SQL: " for SQL
Server, and "FS: " for file servers. 1Secure keeps one group name per organization across source
types.

After an on-premises source connects, the wizard applies default connectors. It reports connectors
that it skips as unlicensed, dependency unavailable, or unknown.

### Active Directory

The Active Directory source card reads "Users, groups, GPOs, permissions and logon activity". The
connect option **Let 1Secure manage audit policy** turns on auditing on your domain controllers so
that 1Secure's reports and alerts have data. Turn it off if you manage audit policy yourself, for
example with Netwrix Auditor.

### Network Attached Storage

To collect activity from your NAS device, 1Secure uses Netwrix Activity Monitor (NAM). Install NAM on
the same server where your 1Secure agent is deployed.
