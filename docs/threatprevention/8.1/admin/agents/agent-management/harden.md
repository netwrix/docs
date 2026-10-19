---
title: "Harden Agent"
description: "Harden Agent"
sidebar_position: 40
---

# Harden Agent

You can harden an Agent to prevent anyone from altering, stopping, or starting it from within the
local Service Control Manager.

To harden the Agent on a server:

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Harden Agent** on the menu.

**Step 3 –** On the Access Verification window, the system performs a prerequisites or verification
check that can fail or succeed.

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Success – Click **Next** to begin hardening the Agent.

:::note
The wizard doesn't block access to the Administration Console, and you can minimize it while
actions are in progress. If you hide the wizard by clicking outside of the dialog box, a flashing
blue link with the action name displays in the upper right corner of the interface. Click
the flashing link to return the focus to the wizard.
:::


:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 4 –** The Harden Agent window displays the task in progress and then its status as either:

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Completed – Indicates that the task is completed

**Step 5 –** When the task is successfully completed, click **Finish** to close the window.

The Agent's status changes to _Hardened_.
