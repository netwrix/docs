---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 30
---

# Upgrade Procedure

The purpose of this chapter is to provide the basic steps needed for upgrading Activity Monitor. See
the [Software Compatibility & Versions](/docs/activitymonitor/8.0/install/overview.md) section for information on integration with
other Netwrix products.

## Considerations

While it is strongly recommended to match the versions of both the console and the activity agent,
activity agent(s) V3.1+ can be managed by Activity Monitor Console V4.0+. Older versions of activity
agents will be limited in monitoring capability until upgraded.

The installation and configuration paths for Netwrix Activity Monitor 8.0 have been updated from
Activity Monitor 7.1. See the
[Netwrix Activity Monitor Paths](/docs/kb/activitymonitor/agent-configuration-and-management/netwrix_activity_monitor_7.0_paths) knowledge base article
for additional information.

## Activity Monitor Upgrade Procedure

Follow the steps to upgrade from the Netwrix Activity Monitor V7.1 to Netwrix Activity Monitor 8.0.

_Prerequisite_ – Ensure console and agent servers have .NET Framework 4.7.2 installed.

**Step 1 –** Install the Activity Monitor 8.0 on the same machine where the V7.1 console resides
following the instructions in the [Install Application](/docs/activitymonitor/8.0/install/application.md) section.

:::warning
Launch the Activity Monitor Console and navigate to the Agents tab.
:::


:::info
Update the activity agents in batches to ensure continuity of monitoring.
:::


**Step 2 –** Select the activity agent(s) to be upgraded. The Windows Ctrl-select option can be used
to select multiple activity agents. Then click Upgrade.

**Step 3 –** (_Optional_) Deploy AD agents to monitor domains.

:::note
Upgraded licenses are required to monitor SharePoint and Active Directory search events
when upgrading to Activity Monitor 8.0.
:::


The selected activity agents are updated to V8.0. If a Threat Prevention Agent is also installed on
the Windows server for monitoring file systems, the Monitored Hosts tab identifies the host as being
“Managed by Threat Prevention”, and that ‘monitored host’ is not editable. However, multiple outputs
can be configured for hosts. Add the Windows host to the Monitored Hosts tab to monitor file system
for outputs to Access Analyzer, Threat Manager, and/or SIEM products.
