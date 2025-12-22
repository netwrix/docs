---
title: "Start Pending Modules"
description: "Start Pending Modules"
sidebar_position: 30
---

# Start Pending Modules

If the Agent was deployed using the Safe Mode option, then it could enter a _Start Pending Modules_
state, in which the AD Events monitoring module is not loaded on the machine where the Agent is
deployed. This happens due to a change in the DLL versions. To exit this state, the Threat
Prevention administrator must start the Active Directory module. See the
[Agent Safe Mode](/docs/threatprevention/7.5/admin/agents/safemode.md) topic for additional information.

:::info
If multiple DCs are in the Start Pending Modules state, this means one of the
monitored system DLLs was changed from when the Agent was last run. This could impact the operation
of the Agent. It is recommended to enable the pending modules on one DC initially and verify that
Threat Prevention is collecting events as expected from this specific DC and that the DC appears to
be stable before starting the pending modules on additional DCs.
:::


Follow the steps to start pending modules on a server.

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Start Pending Modules** on the menu. Note that
the Agent will have _Active (Modules Pending)_ as status when there are pending modules.

The Starting window is displayed.

**Step 3 –** Once the pending modules are started, the status is displayed as _Active_.
