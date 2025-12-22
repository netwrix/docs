---
title: "Uninstall Agent"
description: "Uninstall Agent"
sidebar_position: 30
---

# Uninstall Agent

When a newer version of the Agent is available, the Agents need to be uninstalled before the latest
version can be deployed. You can uninstall an Agent using the Uninstall Agent Wizard (recommended
method) or manually. Instructions for each method are provided in this topic.

## Uninstall Agent Wizard

Follow the steps to uninstall a deployed Agent through the Uninstall Agent wizard.

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Uninstall Agent** on the menu.

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
- Success – Click **Next** to begin uninstalling the Agent
- If some but not all items fail, you can click **Next** to continue the action on those where
  access verification was successful.

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 5 –** The Uninstall Agent window displays whether the Agent was successfully uninstalled or
not.

**Step 6 –** When the task is successfully completed, click **Finish** to close the window.

The Agent's status is displayed as _No Agent_. You can use the Install Agent option on the
right-click menu to reinstall the Agent on that machine.

## Manual Uninstall on the Agent Server

Follow the steps to manually uninstall a deployed Agent from a server.

**Step 1 –** On the desired server, navigate to Start > Control Panel > Programs > Programs and
Features.

**Step 2 –** Uninstall the Netwrix Threat Prevention Windows Agent program from the list and close
Programs and Features.

The corresponding Threat Prevention services are automatically removed from services.msc during this
uninstall process:

- Netwrix Threat Prevention Windows Agent
- Netwrix Windows File Monitoring Service (for Threat Prevention for File System)
- Netwrix Threat Prevention Group Policy Service (for monitoring GPOs)
- Netwrix Threat Prevention Exchange Monitoring Service (for Threat Prevention for Exchange)

:::info
Deploy the Agent to a server using the Deploy Agents wizard. See the
[Deploy Agents](/docs/threatprevention/7.4/admin/agents/deploy/overview.md)
topic for additional information.

:::
