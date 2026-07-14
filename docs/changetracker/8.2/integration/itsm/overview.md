---
title: "IT Service Management"
description: "IT Service Management"
sidebar_position: 30
---

# IT Service Management

Integrating Change Tracker with an IT Service Management (ITSM) system correlates the
change events observed in your environment with the changes you planned and
approved through your change management process. Change Tracker marks approved changes
as planned, and unplanned changes become the events that need review.

## How the Sync Service works

The Sync Service is a Windows service, installed alongside the Change Tracker Hub (the
central management server), that polls a supported ITSM system for Change Requests
(CRs, RFCs, or the equivalent) and imports them into Change Tracker as Planned Changes.
On each poll, the service:

1. Requests only the CRs created or modified since the previous poll.
2. Creates a Planned Change for each new CR, or updates the existing Planned Change if
   the CR has changed.
3. Links the Planned Change to any devices or groups whose names match the
   Configuration Items (CIs) the CR references.
4. Reassesses any recent change events that fall within the Planned Change's scope, so
   it reclassifies events matching an approved change from unplanned to planned.

Default polling interval is 30 seconds for most connectors. ManageEngine ServiceDesk
Plus polls every 5 minutes. Both are configurable in the connector settings.

Each connector authenticates with the source system's REST API (OAuth or basic auth,
depending on the platform), and stores its per-CR sync state locally.

:::note
Change Tracker links change events to a Planned Change only after the CR is approved in
the ITSM system. Create and approve CRs before the work starts. If a CR is approved
retrospectively, Change Tracker reassesses the matching events and marks them as
planned, but Change Tracker has already sent any unplanned-change alerts.
:::

See [Planned Changes Tab](/docs/changetracker/8.2/admin/plannedchanges/plannedchanges.md)
for details on how Change Tracker matches Planned Changes against change events.

## Supported ITSM platforms

- BMC Remedy IT Service Management
- Cherwell Service Management
- ManageEngine ServiceDesk Plus
- OpenText Service Management Automation X (SMAX)
- Samanage Service Platform
- ServiceNow IT Service Management
- SunView ChangeGear

## ServiceNow-specific capabilities

The following capabilities are available only when you integrate with ServiceNow, except
for RFC task synchronization, which OpenText SMAX also supports.

### Device discovery

Instead of maintaining a device list in both ServiceNow and Change Tracker, you can
synchronize CIs from ServiceNow into Change Tracker as devices. ServiceNow becomes the
single place to maintain the inventory, and Change Tracker's initial setup is faster.

When Change Tracker imports devices through device discovery, it records the
ServiceNow `sys_id` on each device. Later, when Change Tracker imports a Planned Change,
it matches the affected CIs to devices on `sys_id` rather than name — an exact match
every time.

### AssignedTo synchronization

For most connectors, a Planned Change includes the CR's identifier, planned start and
end dates, and configuration item. For ServiceNow, the Sync Service also imports the
`AssignedTo` field. When change events include the user who made the change, you can
build a Planned Change ruleset that requires a match on date, device, *and* user before
Change Tracker marks an event as planned.

### RFC task synchronization

ServiceNow lets you break an RFC into tasks assigned to different people. When you enable RFC task
synchronization, the Sync Service creates a separate Planned Change for each
task. If a task has no planned start date, end date, configuration item, or assignee,
the task inherits the value from the parent RFC. OpenText SMAX supports the same behavior.

### Raising incidents in ServiceNow

Change Tracker can raise a ServiceNow
[incident](https://docs.servicenow.com/bundle/washingtondc-it-service-management/page/product/incident-management/concept/work-on-incidents.html)
when it detects an unplanned change, returning that change to your change management
process. The incident routes to the owner of the matching
CI, providing a ready-made workflow for investigation and resolution. You configure this
as a Hub notification action under **Settings** in Change Tracker; it's not part of the
Sync Service polling loop. See
[Raise a ServiceNow Incident](/docs/changetracker/8.2/integration/itsm/syncserviceadmin.md#raise-a-servicenow-incident)
for the setup steps.
