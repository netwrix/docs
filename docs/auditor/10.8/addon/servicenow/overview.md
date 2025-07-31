---
title: "ServiceNow Incident Management"
description: "ServiceNow Incident Management"
sidebar_position: 200
---

# ServiceNow Incident Management

The add-on works in collaboration with Netwrix Auditor, supplying data on suspicious activity or
improper actions right to your helpdesk action center. Aggregating data into a single trail
simplifies incident processing and handling, makes IT service management more cost effective, and
helps address threats as soon as possible.

Implemented as a service, this add-on facilitates the data transition from Netwrix Auditor to
ServiceNow ITSM system. The service automatically creates incident tickets in your system and
updates them with subsequent events. All you have to do is provide connection details and specify
what actions should lead to ticket creation.

On a high level, the add-on works as follows:

1. The add-ons comes with a special set of alerts developed by Netwrix industry experts. With a help
   of a straight- forward command- line tool, you upload these alerts to Netwrix Auditor and enable
   integration with add-on.
2. Whenever the alert is triggered, the add-on retrieves an Activity Records for this action using
   the Netwrix Auditor Integration API. Each Activity Record contains the user account, action,
   time, and other details.
3. The add-on creates an incident ticket in ServiceNow, populates it with data that was available in
   the alert, and assigns to a proper team. Now, you can process a ticket as usual.

    To prevent ticket overflow, the service provides an advanced flood suppression mechanism.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                   | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The Auditor Server side | - Auditor version is **9.8** or later. - The Audit Database settings are configured in the Auditor. See the [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md)topic for additional information. - The TCP 9699 port (default Auditor Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the Global reviewer role in the Auditor or is a member of the Netwrix Auditor Client Users group. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product. |
| On the ServiceNow side  | - ServiceNow version should be any of the following: - Helsinki - Istanbul - Kingston - London **NOTE:** Currently, Jakarta version has only experimental support. - A new user is created and has sufficient permissions to create tickets and update them. The **itil** role is recommended. If you want to reopen closed tickets, you must be granted the right to perform **Write** operations on inactive incidents.                                                                                                                                                                                                                                                |

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information.
