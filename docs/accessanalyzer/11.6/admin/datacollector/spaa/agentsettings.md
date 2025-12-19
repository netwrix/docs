---
title: "SPAA: Agent Settings"
description: "SPAA: Agent Settings"
sidebar_position: 70
---

# SPAA: Agent Settings

The Agent Settings page is where the SharePoint Agent Service is configured. It is a wizard page for
the category of Scan SharePoint Access.

![Agent Settings page](/images/accessanalyzer/11.6/admin/datacollector/spaa/agentsettings.webp)

The **Enable Agent Service Scans** checkbox enables collecting SharePoint data through the agent
services instead of directly from SharePoint. This option requires a **Network Port** to be entered.
Agent Service Identity radio buttons are:

- Use Job Credentials when job has same credentials as agent services
- Use Custom Identity for other agent service credential scenarios
    - Specify identity in the format `spn:name` or `upn:name`
    - The token `%HOST%` may be substituted for the host name

This option requires the SharePoint Agent to be installed on the application server. See the
[SharePoint Agent Installation](/docs/accessanalyzer/11.6/install/sharepointagent/overview.md)
topic for additional information.
