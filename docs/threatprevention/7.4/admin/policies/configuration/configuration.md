---
title: "Policy Configuration"
description: "Policy Configuration"
sidebar_position: 20
---

# Policy Configuration

A Threat Prevention policy has many elements that define the objects and events it monitors or
blocks, where it looks in networks, and when it is active. These policy attributes are organized
into the following major components:

- [General Tab](/docs/threatprevention/7.4/admin/policies/configuration/general.md)
- [Event Type Tab](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/overview.md)
- [Actions Tab](/docs/threatprevention/7.4/admin/policies/configuration/actions/overview.md)
  (Event Consumers)

Each major component has its own tabbed view. A policy requires at least the General tab and Event
Type tab to be configured before it properly functions. The Actions tab is optional.

The
[Recent Events Tab](/docs/threatprevention/7.4/admin/policies/configuration/recentevents/overview.md)
provides information on the events that have been recently monitored or blocked by the respective
policy. These events are also available on the
[Investigate Interface](/docs/threatprevention/7.4/admin/investigate/overview.md).

Through a PowerShell API integration, it is possible to create, edit, delete, and enable policies
without opening the Administration Console. See the
[PowerShell API Integration](/docs/threatprevention/7.4/api/overview.md)
topic for additional information.
