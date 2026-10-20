---
title: "Policy Configuration"
description: "Policy Configuration"
sidebar_position: 20
---

# Policy Configuration

A Threat Prevention policy has many elements that define the objects and events it monitors or
blocks, where it looks in networks, and when it is active. These policy attributes are organized
into the following major components:

- [General Tab](/docs/threatprevention/7.5/admin/policies/configuration/general.md)
- [Event Type Tab](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/overview.md)
- [Actions Tab](/docs/threatprevention/7.5/admin/policies/configuration/actions/overview.md) (Event Consumers)

Each major component has its own tabbed view. A policy requires at least the General tab and Event
Type tab to be configured before it properly functions. The Actions tab is optional.

The [Recent Events Tab](/docs/threatprevention/7.5/admin/policies/configuration/recentevents/overview.md) displays information on the events your policy has recently
monitored or blocked. You can also view these events on the
[Investigate Interface](/docs/threatprevention/7.5/admin/investigate/overview.md).

You can create, edit, delete, and enable policies through PowerShell API integration
without opening the Administration Console. See the
[PowerShell API Integration](/docs/threatprevention/7.5/api/overview.md) topic for additional information.
