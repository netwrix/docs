---
title: "Netwrix Activity Monitor Integration"
description: "Netwrix Activity Monitor Integration"
sidebar_position: 10
---

# Netwrix Activity Monitor Integration

The Activity Monitor can be configured to send file system data and/or Active Directory and/or
Microsoft Entra ID data to Threat Manager. It must be installed and configured to monitor the target
environment. See the
[Netwrix Activity Monitor](https://helpcenter.netwrix.com/category/activitymonitor) documentation
for additional information.

In order for Threat Manager to receive the event stream data, the Activity Monitor must be
configured to do so. For file system activity events, use the Threat Manager Syslog template for the
desired monitored host configuration. For Active Directory activity events, generate an App Token in
Threat Manager and then use that app token to configure the domain’s output to Threat Manager.

The Threat Manager DC Sync threat is sourced by the Activity Monitor's Replication AD monitoring
configuration. It is necessary for it to be configured to exclude domain controllers on the Host
(From) filter.
