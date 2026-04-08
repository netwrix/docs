---
title: "Administration"
description: "Administration"
sidebar_position: 40
---

# Administration

Threat Prevention monitors events in real‐time, gathers and processes event data, then outputs that
data in usable ways. Threat Prevention components allow you to create and configure policies to
control what is monitored, where to look in the network, and when. You can also create and control
responses to event data via reports, alert notifications, analytic triggers, as well as take actions
with scripts.

The following components make up Threat Prevention:

- Software Components
- Analytics
- Policies & Policy Templates
- Database Components

## Software Components

Threat Prevention consists of a number of components that work together to monitor and report on
activity on a network:

- Threat Prevention Enterprise Manager
- Threat Prevention Win Console (Administration Console)
- Threat Prevention Agents deployed across the environment
- Netwrix Threat Manager Reporting Module

**Threat Prevention Architecture**

![Threat Prevention Architecture Diagram](/images/threatprevention/8.0/admin/systemdiagram.webp)

**Threat Prevention Enterprise Manager**

The Threat Prevention Enterprise Manager stores and maintains policies and policy templates, as well
as receives and processes all captured events. Only one Enterprise Manager is needed for any
environment.

**Threat Prevention Administration Console**

The Threat Prevention Administration Console is used to create and manage policies and their
associated alerts and actions. Multiple instances of the Administration Console are supported.

**Threat Prevention Agents**

The Threat Prevention Agents retrieve configuration data from the Enterprise Manager, monitor
network activity, and report events to the Enterprise Manager. The events collected by an Agent are
those specified by the policies that are active in the system. There must be an Agent deployed on
every server being monitored. See the [Agent Information](/docs/threatprevention/8.0/install/agent/overview.md) topic for
information on where to deploy Agents and supported platforms. See the
[Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) section for deployment procedures.

**Netwrix Threat Manager Reporting Module**

The Netwrix Threat Manager Reporting Module application provides a way to generate and to view
reports for the event data that is collected by the Agent and stored in the event database. Reports
can be generated for specific time frames and saved as CSV or JSON files. These files can be
downloaded or emailed. See the [Reporting Module](/docs/threatprevention/8.0/reportingmodule/overview.md) topic for
additional information.

## Analytics

Threat Prevention’s Analytics engine identifies patterns based on observed activities that may
indicate that a security incident is in process or being attempted. For example, the frequency of an
event over a particular time period or a combination of events with one or more correlating
attribute could indicate that a security risk incident is in process. See the
[Analytics Interface](/docs/threatprevention/8.0/admin/analytics/overview.md) topic for additional information.

## Policies & Policy Templates

For Threat Prevention to monitor activity on a network, it must be configured to monitor the desired
activity. Most of this configuration is done with Threat Prevention policies.

A policy describes the types of event data to monitor. As events occur, if all the described filters
set in a policy are met, the event data is captured and sent to the reporting database. Policies can
also be defined to block events where all filters are met, and information about the attempted
change is sent to the reporting database.

A Threat Prevention policy is a specification, configured in the Administration Console, for events
that provide evidence of a high‐level policy violation. For example, if there is an organizational
policy stating only members of the Administrators group can create user accounts, then a policy can
be configured to detect when a user account is created by someone other than a member of the
Administrators group.

### Policies

A Threat Prevention Policy has many attributes which define the activities and objects it monitors,
where on a network that policy applies, and when it is active. See the
[Policy Configuration](/docs/threatprevention/8.0/admin/policies/configuration/configuration.md) topic for additional information.

**General**

General components include the name and description of the policy, policy creation and modification
information, policy schedule, whether or not the policy is sending alerts, and whether or not the
policy is enabled.

The schedule controls when the policy is active. For example, if it is desired that certain activity
be more closely monitored outside of regular business hours, then a policy can be created and
scheduled to be active only outside of regular business hours.

**Event Type**

Event Type components indicate what kind of events are to be monitored or blocked by the policy. A
single policy can contain multiple event types, even from different event sources. For example, a
policy might monitor the creation of user accounts in Active Directory.

Each event type has an optional set of filters associated with it. The available filters vary
depending on the event source.

**Actions**

Actions components are used to process and respond to events once they have been captured. A policy
can include one or more actions (or event consumers). It can also have no actions, but this is not
recommended. Actions are policy specific and cannot be shared between policies. However, they can be
exported with a policy.

### Policy Templates

A policy template is an inactive policy specification that can be used to create active policies.
Policy templates contain one or more event types that match a set of related events.

Some settings in a policy template are necessarily generic. For example, the filters associated with
the event types of a template may need to be refined to refer to a particular local domain,
container, or group.

There are usually no actions associated with a policy template because these are typically
customized for a particular installation, e.g. the name of a text file, the connection information
for a local SMTP server, etc.

See the [Pre-Created Templates](/docs/threatprevention/8.0/admin/templates/folder/overview.md) and
[Template Configuration](/docs/threatprevention/8.0/admin/templates/configuration/configuration.md) topics for additional information.

## Database Components

Threat Prevention needs to store event data and configuration information for several components.
The following SQL Server databases are used to store this information:

- NVMonitorConfig database
- NVMonitorData database

Both these databases are created during the installation process of the Threat Prevention Enterprise
Manager. See the [Application Server Install](/docs/threatprevention/8.0/install/application.md) topic for additional
information.

**NVMonitorConfig Database**

This database contains configuration information for the Threat Prevention product. The Threat
Prevention Enterprise Manager maintains and shares this information with the Agents, primarily
policy configuration information. .

**NVMonitorData Database**

This database contains the event activity data captured by Threat Prevention policies. Agents
capture these events, as defined by policies, and send them to the Enterprise Manager. The
Enterprise Manager receives, processes, and stores the data in the events database.
