---
title: "Start Pending Modules"
description: "Start Pending Modules"
sidebar_position: 30
---

# Start Pending Modules

If you deployed the Agent using the Safe Mode option, it could enter a _Start Pending Modules_
state, in which the AD Events monitoring module doesn't load on the machine where the Agent is
deployed. This happens due to a change in the DLL versions. To exit this state, the Threat
Prevention administrator must start the Active Directory module. See the
[Agent Safe Mode](/docs/threatprevention/8.1/admin/agents/safemode.md) topic for additional information.

:::info
If multiple DCs are in the Start Pending Modules state, one of the
monitored system DLLs changed since the Agent last ran. This could impact the operation
of the Agent. Enable the pending modules on one DC first and verify that
Threat Prevention collects events as expected from that DC and that the DC appears to
be stable before starting the pending modules on additional DCs.
:::


To start pending modules on a server:

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Start Pending Modules** on the menu.

:::note
The Agent's status is _Active (Modules Pending)_ when modules are pending.
:::

The Starting window opens.

**Step 3 –** After the pending modules start, the status changes to _Active_.
