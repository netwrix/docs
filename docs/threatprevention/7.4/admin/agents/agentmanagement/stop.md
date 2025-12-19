---
title: "Stop Agent"
description: "Stop Agent"
sidebar_position: 20
---

# Stop Agent

You may want to stop the Agent on a server for any reason, such as troubleshooting.

Follow the steps to stop the Agent on a server.

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

![Enter Credentials window](/images/threatprevention/7.4/install/upgrade/entercredentials.webp)

**Step 2 –** Right-click a server/Agent and select **Stop Agent** on the menu.

**Step 3 –** On the Enter Credentials window, enter a username and password with sufficient rights
to connect to the target machine and query information about shares. A local Administrator account
on the target machine should have access to the system shares. Click **OK** after entering the
credentials.

:::note
The wizard does not block access to the Administration Console and can be minimized while
actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing
blue link displays on the upper right corner of the interface with the action name displayed. Click
this link to bring back the focus to the wizard.
:::


**Step 4 –** On the Stop Agent window, the Agent will be stopped. One of two status messages
display:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.
- Completed – Indicates that the task is completed

**Step 5 –** When the task is successfully completed, click **Finish** to close the window.

The Agent's status is displayed as _Stopped_.
