---
title: "Clear SQLite Agent Queue"
description: "Clear SQLite Agent Queue"
sidebar_position: 70
---

# Clear SQLite Agent Queue

When the Agent is unable to communicate with the Enterprise Manager, Agent events queue up in the
Agents local SQLite database until the Enterprise Manager is available to accept events. The Clear
SQLite Agent Queue option dumps the queue and all pending events are lost.

Follow the steps to clear the SQLite Agent queue for an Agent:

:::warning
These events are permanently deleted and are not processed by the Enterprise Manager on
reconnection. This option is for diagnostic and troubleshooting purposes only.
:::


**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Clear SQLite Agent Queue** on the menu.

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
- Success – Click **Next** to begin clearing the SQLite Agent Queue

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 5 –** The Clear Agent Queue window displays the task in progress and then its status as
either:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.
- Completed – Indicates that the task is completed

**Step 6 –** When the task is successfully completed, click **Finish** to close the window.

The SQLite Agent queue is automatically cleared.
