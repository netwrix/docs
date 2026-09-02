---
title: "Stop Agent"
description: "Stop Agent"
sidebar_position: 20
---

# Stop Agent

You can stop the Agent on a server for any reason, such as troubleshooting.

To stop the Agent on a server:

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface.

![Enter Credentials window](/images/threatprevention/8.1/install/upgrade/entercredentials.webp)

**Step 2 –** Right-click a server/Agent and select **Stop Agent** on the menu.

**Step 3 –** On the Enter Credentials window, enter a username and password with sufficient rights
to connect to the target machine and query information about shares. A local Administrator account
on the target machine should have access to the system shares. Click **OK** after entering the
credentials.

:::note
The wizard doesn't block access to the Administration Console, and you can minimize it while
actions are in progress. If you hide the wizard by clicking outside of the dialog box, a flashing
blue link with the action name displays in the upper right corner of the interface. Click
the flashing link to return the focus to the wizard.
:::


**Step 4 –** On the Stop Agent window, Threat Prevention stops the Agent. One of two status
messages displays:

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Completed – Indicates that the task is completed

**Step 5 –** When the task is successfully completed, click **Finish** to close the window.

The Agent's status changes to _Stopped_.
