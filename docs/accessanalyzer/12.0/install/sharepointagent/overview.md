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
[SharePoint Agent Permissions](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/agent-based-scans/agentpermissions.md) topic.

The version of the SharePoint Agent must also match the major version of Access Analyzer.

## Supported Platforms

The SharePoint Agent for the Access Analyzer SharePoint & SharePoint Online Solution can be
installed on the following SharePoint versions as targeted environments:

- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

## Sensitive Data Discovery Auditing Consideration

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).
