---
title: "Start Pending Modules"
description: "Start Pending Modules"
sidebar_position: 30
---

# Start Pending Modules

If the Agent is deployed using the Safe Mode option, it enters a _Start Pending Modules_
state in which the AD Events monitoring module isn't loaded on the machine where the Agent is
deployed. This happens due to a change in the DLL versions. To exit this state, you must start the Active Directory module. See the
[Agent Safe Mode](/docs/threatprevention/7.5/admin/agents/safemode.md) topic for more information.

:::info
If multiple DCs are in the Start Pending Modules state, one of the
monitored system DLLs has changed since the Agent last ran. This can impact Agent operation. Enable the pending modules on one DC initially and verify that
Threat Prevention is collecting events from this DC and the DC is stable before starting the pending modules on additional DCs.
:::

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Start Pending Modules** on the menu. The Agent status shows _Active (Modules Pending)_ when there are pending modules.

The Starting window appears.

**Step 3 –** When the pending modules start, the status is _Active_.
