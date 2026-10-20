---
title: "Stop Agent"
description: "Stop Agent"
sidebar_position: 20
---

# Stop Agent

You may want to stop the Agent on a server for any reason, such as troubleshooting.

To stop the Agent on a server:

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface.

![Enter Credentials window](/images/threatprevention/8.0/install/upgrade/entercredentials.webp)

**Step 2 –** Right-click a server/Agent and select **Stop Agent** on the menu.

**Step 3 –** On the Enter Credentials window, enter a username and password with sufficient rights
to connect to the target machine and query information about shares. A local Administrator account
on the target machine should have access to the system shares. Click **OK** after entering the
credentials.

:::note
The wizard doesn't block access to the Administration Console and can be minimized while
actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing
blue link displays on the upper right corner of the interface with the action name displayed. Click
the action link to bring the wizard back into focus.
:::


**Step 4 –** On the Stop Agent window, the system stops the Agent. One of two status messages
displays:

- Failed – Read the failure messages and close the window. Fix any error messages before the next attempt.
- Completed – Indicates that the task completes

**Step 5 –** When you successfully complete the task, click **Finish** to close the window.

The Agent's status appears as _Stopped_.
