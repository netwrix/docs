---
title: "File Integrity Monitoring"
description: "File Integrity Monitoring"
sidebar_position: 70
---

# File Integrity Monitoring

File Integrity Monitoring (FIM) is an essential security control that monitors and reports any
change to the integrity of system and configuration files. Maintaining integrity is key because
changes to files could represent a malware infection. See PCI-DSS Requirement 11.5.

Policy Templates are used to configure which files are monitored for changes.

FIM data is usually collected from devices with the use of an agent, but when an agentless approach
to monitoring is necessary, i.e. where the endpoint is a firewall, router, switch, or simply
preferred to using an agent i.e. to monitor Windows or Linux where a quick, software-free
implementation is desirable, Netwrix Change Tracker can also operate using Agentless FIM.

File change events can be viewed from the [Events Tab](/docs/changetracker/8.1/admin/events/events.md). See the
[Dashboard Tab](/docs/changetracker/8.1/admin/dashboardoverview.md) topic for additional information on how to view FIM
change events.

:::note
The Events tab is designed to handle large enterprise estates with potentially thousands
of events, therefore the filtering and masking of events is crucial. If you don’t see the change
event as expected, make sure you have selected the right device and that your filters in the left
panel are not masking the event.

:::
