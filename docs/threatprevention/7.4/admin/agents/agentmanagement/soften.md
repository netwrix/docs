---
title: "Soften Agent"
description: "Soften Agent"
sidebar_position: 50
---

# Soften Agent

You can soften a previously hardened Agent. Softening unlocks the Agent so it can be controlled from
within the local Service Control Manager.

Follow the steps to soften the I Agent on a server.

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a hardened Agent and select **Soften Agent** on the menu.

![Enter Credentials window](/images/threatprevention/7.4/install/upgrade/entercredentials.webp)

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


**Step 4 –** On the Access Verification window, the given credentials either succeed or fail during
a prerequisites or verification check.

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.
- Success – Click **Next** to begin softening the Agent.

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 5 –** The Soften Agent window displays the task in progress and then its status as either:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.
- Completed – Indicates that the task is completed

**Step 6 –** When the task is successfully completed, click **Finish** to close the window.

The Agent has been softened.
