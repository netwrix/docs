---
title: "Upgrade ADMonitor"
description: "Upgrade ADMonitor"
sidebar_position: 60
---

# Upgrade ADMonitor

You can update the instrumentation DLL, SI.ActiveDirectoryMonitor.dll (commonly known as ADMonitor
DLL), in LSASS without having to upgrade the entire Agent. To facilitate this, the
[Agents Interface](/docs/threatprevention/8.0/admin/agents/overview.md) displays the currently installed versions of the Agent and the
ADMonitor DLL.

:::note
The Agent and the ADMonitor DLL should have the same major/minor version, such as 8.0.x.x,
where x.x for the DLL can be equal or higher than that of the Agent. Example: Agent 8.0.0.123 and
DLL 8.0.0.777
:::


In previous Threat Prevention versions, you had to uninstall the Agent and then reinstall it just to
update the ADMonitor DLL. With Threat Prevention 7.5, the _Upgrade ADMonitor_ feature enables you to
simply replace the DLL without having to uninstall and reinstall the Agent.

Follow the steps to update ADMonitor.

**Step 1 –** Click **Agents** in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Upgrade ADMonitor** on the menu.

**Step 3 –** On the Access Verification window, the system runs a check to verify if the Agent is
accessible. If yes, Success is displayed in the Status column. Click **Next** to proceed.

**Step 4 –** The Upgrade AD Monitor window displays the ADMonitor upgrade progress. Progress
statuses are:

- Starting – Indicates that the ADMonitor update operation is about to start
- Started – The ADMonitor update operation has successfully started and it is in progress. You may
  close the window as the process will complete on its own.
- Failed – Read the failure messages and close the window. Ensure any error messages are taken care
  of prior to the next attempt.

**Step 5 –** When the upgrade completes, click **Close**.

ADMonitor has been updated.
