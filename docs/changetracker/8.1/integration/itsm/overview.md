---
title: "IT Service Management"
description: "IT Service Management"
sidebar_position: 30
---

# IT Service Management

The aim of integration with IT Service Management (ITSM) systems is to correlate change events, that
occur within the IT environment, with those that were planned and approved in the ITSM system.
Change Management is a quintessential component of any service management strategy. Change
Management is the process of implementing changes relative to an authorized work order that
incorporates a release, build, test, schedule, and deployment plan.

By integrating Netwrix Change Tracker with ITSM systems, organizations can address Change Management
while eliminating the change noise. This way, unplanned change alerts become a prioritized list of
potentially malicious events to be reviewed and remediated.

## The Sync Service

The Gen 7 Sync Service synchronizes Change Requests (CR’s, RFC’s, etc) into Change Tracker from one
of several supported ITSM systems. These CRs take the form of a Planned Change once imported into
Change Tracker.

Change Tracker will attempt to link existing Devices and Groups to a Planned Change where similar
names are found to Configuration Items (CMDB items) in the ITSM system. See the
[Planned Changes Tab](/docs/changetracker/8.1/admin/plannedchanges/plannedchanges.md) topic for additional information.

The service works by periodically polling the source ITSM system for Change Requests which have been
modified since the most recent poll. A new Planned Change is created in Change Tracker if a new CR
has been added to the source system; modifications to an existing CR will be used to update the
corresponding Planned Change. In either case, any events which fall within the scope of the Planned
Change will be reassessed.

Change events will not be linked to a planned change until the RFC has been approved in the ITSM.
For this reason, RFCs should be created and approved before any changes are made, otherwise they
will appear as unplanned. Retrospectively approving an RFC will cause the change events to be
reassessed and marked as planned in Change Tracker, but the alerts would already have been sent.

### Supported ITSM Platforms

- BMC Remedy Service Management
- Cherwell Service Management
- ManageEngine ServiceDesk Plus
- Samanage Service Platform
- ServiceNow ServiceManagement
- SunView ChangeGear
- OpenText Service Management

### ServiceNow Features

The following features are currently exclusive to the ServiceNow integration.

Device Discovery

Instead of maintaining a list of all your servers, desktops and switches in ServiceNow and Change
Tracker, it is possible to synchronize configuration items from ServiceNow to Change Tracker as
devices. Not only does this give you a single place to maintain that list (ServiceNow), it also
speeds up initial setup of Change Tracker.

When devices are created via Device Discovery from ServiceNow, the configuration items from RFCs are
matched to devices in Change Tracker on their ServiceNow Id, ensuring a perfect match.

Synchronization of the AssignedTo field

Typically the Sync Service will create a planned change in Change Tracker that includes the
following fields from the ITSM: Id, planned start date, planned end date and configuration item. For
ServiceNow the AssignedTo field can be synchronized to planned changes. If change events are
recording who made the change, then a planned change ruleset can be created that will ensure that
change events are only marked as planned when they match an planned change on date, device, and
user.

RFC Task Synchronization

In ServiceNow it is possible to add tasks for different people to an RFC. If the Sync Service
detects an RFC with tasks it will create a planned change for each task. If the planned start date,
planned end date, configuration item or assigned to fields are empty on the task then the matching
values at the parent RFC level will be used.

Raising Incidents

To close the loop of change management someone who can act must be alerted of unplanned changes so
they can be investigated and resolved appropriately. A great option for unplanned change alerts is
to raise an
[incident in ServiceNow](https://docs.servicenow.com/bundle/washingtondc-it-service-management/page/product/incident-management/concept/work-on-incidents.html)
which will alert the owner of the matching configuration item and provide a work flow to resolve the
situation.
