---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 30
---

# Upgrade Procedure

The purpose of this chapter is to provide the basic steps needed for upgrading Activity Monitor. See
the [Software Compatibility & Versions](/docs/activitymonitor/9.0/install/overview.md) section for information on integration with
other Netwrix products.

## Considerations

While it is strongly recommended to match the versions of both the console and the activity agent,
activity agent(s) V8.0+ can be managed by Activity Monitor Console V9.0+. Older versions of activity
agents will be limited in monitoring capability until upgraded.

The installation and configuration paths for Netwrix Activity Monitor have been updated from
Activity Monitor 7.1. See the
[Netwrix Activity Monitor Paths](/docs/kb/activitymonitor/agent-configuration-and-management/netwrix_activity_monitor_7.0_paths) knowledge base article
for additional information.

## Activity Monitor Upgrade Procedure

Follow the steps to upgrade from an older version of Netwrix Activity Monitor to Netwrix Activity Monitor 9.0.

:::info
Uninstall of the existing Activity Monitor Console is not required.
:::

**Step 1 –** Install the Activity Monitor 9.0 on the same machine where the older console resides
following the instructions in the [Install Application](/docs/activitymonitor/9.0/install/application.md) section.
Launch the Activity Monitor Console and navigate to the Agents tab.


**Step 2 –** Select the activity agent(s) to be upgraded. The Windows Ctrl-select option can be used
to select multiple activity agents. Then click Upgrade.

:::info
Update the activity agents in batches to ensure continuity of monitoring.
:::


The selected activity agents are updated to V9.0. If a Netwrix Threat Prevention Agent is also installed on
the Windows server for monitoring file systems, the Monitored Hosts & Services tab identifies the host as being
“Managed by Threat Prevention”, and that ‘monitored host’ is not editable. However, multiple outputs
can be configured for hosts. Add the Windows host to the Monitored Hosts & Services tab to monitor file system
for outputs to Access Analyzer, Threat Manager, and/or SIEM products.
