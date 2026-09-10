---
title: "Policy Configuration"
description: "Policy Configuration"
sidebar_position: 20
---

# Policy Configuration

A Threat Prevention policy has many elements that define the objects and events it monitors or
blocks, where it looks in networks, and when it is active. These policy attributes are organized
into the following major components:

- [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md)
- [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md)
- [Actions Tab](/docs/threatprevention/8.1/admin/policies/configuration/actions/overview.md) (Event Consumers)

Each major component has its own tabbed view. You must configure at least the General tab and Event
Type tab before a policy functions properly. The Actions tab is optional.

The [Recent Events Tab](/docs/threatprevention/8.1/admin/policies/configuration/recentevents/overview.md) provides information on the events the respective
policy recently monitored or blocked. These events are also available on the
[Investigate Interface](/docs/threatprevention/8.1/admin/investigate/overview.md).

Through a PowerShell API integration, you can create, edit, delete, and enable policies
without opening the Administration Console. See the
[PowerShell API Integration](/docs/threatprevention/8.1/api/overview.md) topic for additional information.
