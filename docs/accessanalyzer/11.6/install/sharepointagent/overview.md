---
title: "SharePoint Agent Installation"
description: "SharePoint Agent Installation"
sidebar_position: 30
---

# SharePoint Agent Installation

The SharePoint Agent is capable of auditing permissions and content, or Access Auditing (SPAA) and
Sensitive Data Discovery Auditing, on SharePoint servers.

This topic provides information on the installation and upgrade processes of the SharePoint Agent.
It also provides information on the permissions needed by the service account used to run the Access
Auditing (SPAA) and Sensitive Data Discovery Auditing scans against the targeted SharePoint
environment.

For information on the required prerequisites and permissions, see the
[SharePoint Agent Permissions](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/agentbasedscans/agentpermissions.md)
topic.

The version of the SharePoint Agent must also match the major version of Enterprise Auditor.

## Supported Platforms

The SharePoint Agent for the Enterprise Auditor SharePoint & SharePoint Online Solution can be
installed on the following SharePoint versions as targeted environments:

- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

## Sensitive Data Discovery Auditing Consideration

If utilizing the SharePoint Agent to scan for Sensitive Data, install the Sensitive Data Add-on –
SPAA Agent (or x64) version of the Sensitive Data Discovery Add-On after the SharePoint Agent has
been installed on the SharePoint server. This requirement is in addition to having the Sensitive
Data Discovery Add-on installed on the Enterprise Auditor Console server. Sensitive Data Discovery
Auditing scans also require .NET Framework 4.7.2 or later.

:::note
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).
:::


See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.
