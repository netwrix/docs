---
title: "File Integrity Monitoring"
description: "File Integrity Monitoring"
sidebar_position: 70
---

# File Integrity Monitoring

File Integrity Monitoring (FIM) is an essential security control that monitors and reports any
change to the integrity of system and configuration files. Maintaining integrity is key because
changes to files could represent a malware infection. See PCI-DSS Requirement 11.5.

Policy templates configure which files Change Tracker monitors for changes.

An agent usually collects FIM data from devices. When an agentless approach is necessary — for
example, when the endpoint is a firewall, router, or switch, or when a quick, software-free
implementation for monitoring Windows or Linux is preferable — Netwrix Change Tracker can also
operate using Agentless FIM.

You can view file change events from the [Events Tab](/docs/changetracker/admin/events/events.md). See the
[Dashboard Tab](/docs/changetracker/admin/dashboardoverview.md) topic for additional information on how to view FIM
change events.

:::note
The Events tab handles large enterprise estates with potentially thousands of events, so
filtering and masking events is crucial. If you don't see the change event you expect, ensure
you selected the right device and that your filters in the left panel aren't masking the event.

:::
