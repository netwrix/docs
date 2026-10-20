---
title: "Uninstall Agent"
description: "Uninstall Agent"
sidebar_position: 30
---

# Uninstall Agent

When a newer version of the Agent is available, you must uninstall the Agents before you can deploy
the latest version. You can uninstall an Agent using the Uninstall Agent Wizard (recommended
method) or manually. This topic provides instructions for each method.

## Uninstall Agent Wizard

To uninstall a deployed Agent through the Uninstall Agent wizard:

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** Right-click a server/Agent and select **Uninstall Agent** on the menu.

![Enter Credentials window](/images/threatprevention/8.1/install/upgrade/entercredentials.webp)

**Step 3 –** On the Enter Credentials window, enter a username and password with sufficient rights
to connect to the target machine and query information about shares. A local Administrator account
on the target machine should have access to the system shares. Click **OK** after entering the
credentials.

:::note
The wizard doesn't block access to the Administration Console, and you can minimize it while
actions are in progress. If you hide this wizard by clicking outside of the dialog box, a flashing
blue link with the action name displays in the upper right corner of the interface. Click
the flashing link to return the focus to the wizard.
:::


**Step 4 –** On the Access Verification window, the system performs a prerequisites or verification
check that can fail or succeed.

- Failed – Read the failure messages and close the window. Resolve any error messages before the
  next attempt.
- Success – Click **Next** to begin uninstalling the Agent
- If some but not all items fail, you can click **Next** to continue the action on those where
  access verification succeeded.

:::note
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 5 –** The Uninstall Agent window displays whether the uninstall succeeded.

**Step 6 –** When the task completes successfully, click **Finish** to close the window.

The Agent's status displays as _No Agent_. You can use the Install Agent option on the
right-click menu to reinstall the Agent on that machine.

## Manual Uninstall on the Agent Server

To manually uninstall a deployed Agent from a server:

**Step 1 –** On the target server, navigate to Start > Control Panel > Programs > Programs and
Features.

**Step 2 –** Uninstall the Netwrix Threat Prevention Windows Agent program from the list and close
Programs and Features.

This uninstall process automatically removes the corresponding Threat Prevention services from
services.msc:

- Netwrix Threat Prevention Windows Agent
- Netwrix Windows File Monitoring Service (for Threat Prevention for File System)
- Netwrix Threat Prevention Group Policy Service (for monitoring GPOs)
- Netwrix Threat Prevention Exchange Monitoring Service (for Threat Prevention for Exchange)

:::info
Deploy the Agent to a server using the Deploy Agents wizard. See the
[Deploy Agents](/docs/threatprevention/8.1/admin/agents/deploy/overview.md) topic for additional information.

:::
