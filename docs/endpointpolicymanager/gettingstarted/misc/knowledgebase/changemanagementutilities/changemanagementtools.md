---
title: "Understanding the Difference Between Endpoint Policy Manager and GPO Change Management Tools"
description: "Understanding the Difference Between Endpoint Policy Manager and GPO Change Management Tools"
sidebar_position: 10
---

# Understanding the Difference Between Endpoint Policy Manager and GPO Change Management Tools

Netwrix Endpoint Policy Manager (formerly PolicyPak) is not a "drop-in replacement" for Group Policy
Object (GPO) change management tools such as Microsoft AGPM, Quest GPOADmin, Quest Active
Administrator, NetIQ GPA, or SDM Software Change Manager. These tools belong to the category of "GPO
Change Control" tools, which manage the lifecycle and control of GPOs.

## Endpoint Policy Manager's Goals

Endpoint Policy Manager primarily manages the endpoint experience using a client-side extension
(CSE). Its focus is on tasks like:

- Removing local admin rights
- Managing USB devices
- Controlling browser settings
- Managing file associations

In contrast, GPO Change Control tools focus on the management of GPOs themselves, with features like
check-in/check-out workflows, offline GPO creation, and version control. Endpoint Policy Manager
does not aim to replace these tools.

## GPO Change Management Goals

GPO Change Control tools help manage various aspects of the GPO lifecycle, such as:

- Check-in/check-out of GPOs
- Offline creation of GPOs
- Workflow management around GPOs
- Quick restoration of GPOs if needed
- Version history and comparison over time

These tools typically use a database to store GPOs, backups, and version histories. They also
include additional database-level security controls, allowing you to define who can edit, deploy, or
link a GPO (e.g., "Fred can edit a GPO" while "Wilma can deploy it").

## Licensing Differences

- GPO Change Control tools: Licensed based on the number of servers and administrators who access
  the system.
- Endpoint Policy Manager: Licensed based on the number of endpoints, with no additional cost for
  the number of admins using the system.

## What Endpoint Policy Manager Does (and Doesn’t Do)

Endpoint Policy Manager doesn’t attempt to manage GPOs in the same way. It’s a client-only solution
with no server or database, and it does not augment the security or workflow management of GPO
lifecycles.

However, PolicyPak does have some overlap with GPO Change Management tools when it comes to managing
its own settings. For example, when using the Endpoint Policy Manager MMC editors, it tracks:

- Who made a change to a Endpoint Policy Manager setting
- Which computer was used to make the change
- When the change occurred
- What was changed

Additionally, Endpoint Policy Manager stores history and differences for Endpoint Policy
Manager-specific settings, and it allows you to rollback changes. Here's what you can do with
Endpoint Policy Manager-specific GPO settings:

- Who changed something
- When the change occurred
- What was changed
- History and differences of the changes

![921_1_image-1](/images/endpointpolicymanager/troubleshooting/921_1_image-1.webp)

![921_2_image-2](/images/endpointpolicymanager/troubleshooting/921_2_image-2.webp)

However, Endpoint Policy Manager’s history and differences function applies only to its own
settings. For instance, Microsoft Group Policy Preferences (like "Services") do not have a history
function, as they are not managed by Endpoint Policy Manager.

![921_2_image-3](/images/endpointpolicymanager/troubleshooting/921_2_image-3.webp)

You can watch a demo of how Endpoint Policy Manager stores and tracks changes in this video:
[Endpoint Policy Manager MMC: Showing History of items you create](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/changemanagementutilities/changemanagementtools.md).

## Summary of Endpoint Policy Manager vs. GPO Change Management Tools

Endpoint Policy Manager is not trying to replace GPO Change Management tools like Microsoft AGPM or
Quest GPOADmin. Those tools provide:

- Check-in/check-out functionality for GPOs
- Offline policy creation
- Quick GPO restoration if something goes wrong
- Change history for non-Endpoint Policy Manager settings

Because Endpoint Policy Manager focuses on managing endpoints, it is compatible with these GPO
Change Management tools. Endpoint Policy Manager works seamlessly alongside them when managing
Endpoint Policy Manager-specific settings.

Here are examples of Endpoint Policy Manager working alongside popular GPO Change Management tools:

- Endpoint Policy Manager with AGPM, see the
  [Endpoint Policy Manager and AGPM](/docs/endpointpolicymanager/gettingstarted/misc/videos/changemanagementutilities/advancedgrouppolicymanagement.md)
  topic for additional information.
- Endpoint Policy Manager with Quest's GPOADmin Tool, see the
  [Endpoint Policy Manager and Quest's GPOADmin Tool](/docs/endpointpolicymanager/gettingstarted/misc/videos/changemanagementutilities/gpoadmintool.md)
  topic for additional information.
- Endpoint Policy Manager integrated with NetIQ GPA, see the
  [Endpoint Policy Manager Integrates with NetIQ GPA](/docs/endpointpolicymanager/gettingstarted/misc/videos/changemanagementutilities/netiq.md) topic
  for additional information.
- Endpoint Policy Manager with Quest (ScriptLogic) Active Administrator, see the
  [Endpoint Policy Manager and Quest (ScriptLogic) ActiveAdministrator](/docs/endpointpolicymanager/gettingstarted/misc/videos/changemanagementutilities/scriptlogicactiveadministrator.md) topic
  for additional information.
- Endpoint Policy Manager with SDM Change Manager, see the
  [Endpoint Policy Manager and SDM CHANGE MANAGER](/docs/endpointpolicymanager/gettingstarted/misc/videos/changemanagementutilities/sdmchangemanager.md) topic
  for additional information.

Additionally, tools like Netwrix Auditor can monitor all GPO changes for both Microsoft and Endpoint
Policy Manager-specific and alert you to unwanted changes.

![921_3_image-20230207205126-1](/images/endpointpolicymanager/troubleshooting/921_3_image-20230207205126-1.webp)

