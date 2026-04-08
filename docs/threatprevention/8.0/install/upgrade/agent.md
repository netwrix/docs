---
title: "Upgrade Agent"
description: "Upgrade Agent"
sidebar_position: 20
---

# Upgrade Agent

The Threat Prevention Agent is updated from the Agents interface.

:::note
If you are using an Endpoint Detection and Response (EDR) solution to protect LSASS, you
must create an exclusion for Threat Prevention using any of these methods:
:::


- Add the path or names of the files listed under Agent Server in the [Installation](/docs/threatprevention/8.0/install/overview.md)
  topic in the EDR.
- Add the hash of the individual files in the EDR. In this case, every time a new Agent version is
  deployed, the hashes change and will have to be updated. If this is not done prior to upgrade, the
  Agent will not be able to hook into LSASS as the executable hash will be different.

In most cases, only the SIWindowsAgent.exe and SI.ActiveDirectoryMonitor.dll files need to be
white-listed.

Follow the steps to upgrade a deployed Agent.

**Step 1 –** Click **Agents** in the left pane to open the Agents interface.

**Step 2 –** On the [Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md), select the desired
server/Agent in the grid and on the top toolbar, select **Update Agent Installer**. The
[Agent Installer Update Window](/docs/threatprevention/8.0/admin/agents/agents-windows/agentinstallerupdate.md) opens.

**Step 3 –** On the Agent Installer Update window, click **Check for Newer Version of the Netwrix
Threat Prevention Agent**. The green bar indicates the progress of checking the Agent for a newer
version. If a new version is available, click **Apply Update**.

:::tip
Remember, when an Agent is out-of-date, the Version String column on the Agents interface has an
orange background.
:::


**Step 4 –** Right-click an out-of-date Agent and select **Upgrade Agent** on the right-click menu.
The Access Verification window opens.

:::note
The wizard does not block access to the Administration Console and can be minimized while
actions are in progress. If this wizard is hidden by clicking outside of the dialog box, a flashing
blue link displays on the upper right corner of the interface with the action name displayed. Click
this link to bring back the focus to the wizard.
:::


![Access Verification window](/images/threatprevention/8.0/install/upgrade/accessverification.webp)

**Step 5 –** The Access Verification window displays one of the following statuses:

- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.
- Success – If this is displayed as status, click **Next** to begin upgrading the Agent.
- If some but not all items fail, it is possible to click **Next** to continue the action on those
  where access verification was successful.

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


![Upgrade Agent window](/images/threatprevention/8.0/install/upgrade/upgradeagent.webp)

**Step 6 –** On the Upgrade Agent window, the old Agent will be uninstalled and the newer version of
the Agent installed. One of two status messages display:

- Started – Self-upgrading agent
- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.

**Step 7 –** When the task is successfully completed, click **Finish** to close the window.

The Agent's status is displayed as Active.
