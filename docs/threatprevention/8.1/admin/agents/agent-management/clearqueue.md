---
title: "Clear SQLite Agent Queue"
description: "Clear SQLite Agent Queue"
sidebar_position: 80
---

# Clear SQLite Agent Queue

When the Agent is unable to communicate with the Enterprise Manager, Agent events queue up in the
Agents local SQLite database until the Enterprise Manager is available to accept events. The Clear
SQLite Agent Queue option dumps the queue and discards all pending events.

To clear the SQLite Agent queue for an Agent:

:::warning
Threat Prevention permanently deletes these events, and the Enterprise Manager doesn't
process them on reconnection. This option is for diagnostic and troubleshooting purposes only.
:::


**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Clear SQLite Agent Queue** on the menu.

![Enter Credentials window](/images/threatprevention/8.1/install/upgrade/entercredentials.webp)

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


**Step 4 –** On the Access Verification window, the system performs a prerequisites or verification
check that can fail or succeed.

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Success – Click **Next** to begin clearing the SQLite Agent Queue

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 5 –** The Clear Agent Queue window displays the task in progress and then its status as
either:

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Completed – Indicates that the task is completed

**Step 6 –** When the task is successfully completed, click **Finish** to close the window.

Threat Prevention automatically clears the SQLite Agent queue.
