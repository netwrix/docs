---
title: "Start Agent"
description: "Start Agent"
sidebar_position: 10
---

# Start Agent

If the Agent has stopped on a server, it no longer monitors and captures events. You must restart it
on the server to monitor and capture events again.

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Start Agent** on the menu.

![Enter Credentials window](/images/threatprevention/7.5/install/upgrade/entercredentials.webp)

**Step 3 –** On the Enter Credentials window, enter a username and password with sufficient rights
to connect to the target machine and query information about shares. A local Administrator account
on the target machine should have access to the system shares. Click **OK** after entering the
credentials.

:::note
The wizard doesn't block access to the Administration Console and can be minimized while
actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing
blue link displays on the upper right corner of the interface with the action name displayed. Click the flashing blue link to bring back the focus to the wizard.
:::


**Step 4 –** On the Start Agent window, the system starts the Agent. One of two status messages
displays:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of before the next attempt.
- Completed – Indicates that the task is completed

**Step 5 –** When the task is successfully completed, click **Finish** to close the window.

The Agent has been started on the server.
