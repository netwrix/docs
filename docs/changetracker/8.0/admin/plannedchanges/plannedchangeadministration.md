---
title: "Planned Changes Administration"
description: "Planned Changes Administration"
sidebar_position: 10
---

# Planned Changes Administration

Edit the **Schedule**, **Device Group** assignment and **Rules** for Planned Changes – contact
[Netwrix Support](https://www.netwrix.com/support.html) for more help.

- **Planned Change rules** can also be created directly from observed events on the **Events** page.
- Alternatively, any **Device Group** can be set to Record events to generate Planned Change rules,
  check the **In Event Recording Mode** when editing rules for a Planned Change.

## Scheduling, Creating and Editing Intelligent Planned Change Rules

Any Planned Change comprises the following elements:

- **Schedule** – Start and End time/date, or continuous/no end date for permanently applied Planned
  Changes.
- **Scope** – Events from the selected Devices and/or Groups will have the defined Planned Change
  rules applied to them.
- **Rules** – Any number of Rules can be defined for a Planned Change to provide a template for the
  types of changes to be matched.
- **Rule Definition** – Rules are typically defined against Device Events, with the Tracker™, Item
  Type and logical operator applied to match a file/registry value/software installation etc.
  name/part name.
- Use the new **Planned Change Wizard** to guide you through the steps required to create a Planned
  Change Schedule and Rule Set.

:::note
Rules can also be created directly from an observed event using the Actions button on the
[Events Tab](/docs/changetracker/8.0/admin/events/events.md), or by recording
events directly from a device group. Note that an additional Planned Change Schedule filter is
available in the **Filter Control** panel. Planned Change Schedules can be re-used – use the Clone
button to create a copy.
:::


![PlannedChangesRules](/images/changetracker/8.0/admin/tabs/plannedchangesrules.webp)
