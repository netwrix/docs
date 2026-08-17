---
title: "Netwrix Activity Monitor Integration"
description: "Netwrix Activity Monitor Integration"
sidebar_position: 10
---

# Netwrix Activity Monitor Integration

You can configure the Activity Monitor to send file system, Active Directory, and Microsoft Entra
ID activity to Threat Manager. Install and configure the Activity Monitor to monitor the target
environment. See the
[Netwrix Activity Monitor](https://docs.netwrix.com/docs/activitymonitor/10_0/) documentation
for additional information.

For Threat Manager to receive the event stream data, configure the Activity Monitor output for
each event source.

## Active Directory and Microsoft Entra ID activity events

Active Directory and Microsoft Entra ID activity events use the native Netwrix Threat Manager
output. Generate an App Token in Threat Manager, then use that app token to configure the domain's
or tenant's output to Threat Manager.

The Activity Monitor's Replication AD monitoring configuration sources the Threat Manager DC Sync
threat. Configure it to exclude domain controllers on the Host (From) filter.

## File system activity events

File system activity events, including Windows file servers, NAS devices, and Azure Files storage
accounts, use the Threat Manager Syslog template for each monitored host configuration. See
the [Add Azure Files Storage Accounts](/docs/activitymonitor/10.0/admin/monitoredhosts/add/azurefiles.md) topic
to add Azure Files storage accounts as a monitored host.
