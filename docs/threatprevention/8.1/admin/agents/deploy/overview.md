---
title: "Deploy Agents"
description: "Deploy Agents"
sidebar_position: 20
---

# Deploy Agents

You can deploy the Threat Prevention Agent through any of the following methods:

- Deploy the Agent to servers through the Administration Console – You can deploy the Agent to one
  or multiple servers through the Administration Console

  :::info
  This is the recommended method for deploying the Agent.
  :::


- Manually through the Windows Agent Setup Wizard – Run the Agent executable to launch this wizard

See the [Manual Agent Deployment](/docs/threatprevention/8.1/install/agent/manual.md) topic for additional
information.

## Deploy Agents Wizard

Use the Deploy Agents wizard to deploy Agents from the Administration Console. Computers
targeted for Agent deployment must meet the minimum .NET Framework version required by the Agent or
the deployment fails. Remember to check server requirements before deploying the Agent, including
compatibility with other security products. See the
[Agent Server Requirements](/docs/threatprevention/8.1/requirements/agent/agent.md) topic for additional information.

:::note
The wizard doesn't block access to the Administration Console, and you can minimize it while
actions are in progress. If you hide the wizard by clicking outside of the dialog box, a flashing
blue link with the action name displays in the upper right corner of the interface. Click
the flashing blue link to return the focus to the wizard.
:::


The Deploy Agents wizard consists of four windows: Select Computers, Set Options, Prerequisites
Check, and Installing.

To deploy the Agent from the Administration Console to a new or existing machine
using the Deploy Agents wizard, complete the following steps:

:::warning
Closing the Administration Console while this action is in process causes problems with
data collection.
:::


**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** On the Agents interface, click the **Deploy Agent** (**+**) button on the top right
corner. To re-install a previously uninstalled Agent, select the **Install Agent** right-click menu
option for that machine in the grid. The Select Computers window opens.

![Deploy Agents wizard – Select Computers page](/images/threatprevention/8.1/admin/agents/deploy/selectcomputers.webp)

**Step 3 –** On the Select Computers window, add the host or IP addresses of the target machines to
the Deploy Agents to These Computers box. Use any of the three methods, as represented by the three
tabs on the window. See the [Select Computers Window](/docs/threatprevention/8.1/admin/agents/deploy/selectcomputers.md) topic for additional
information. Click **Next**.

If you open this window through the [Right-Click Menu](/docs/threatprevention/8.1/admin/agents/overview.md#right-click-menu) action, Threat
Prevention populates the list with the computers you selected on the Agents interface.

![Deploy Agents wizard – Set Options page](/images/threatprevention/8.1/admin/agents/deploy/setoptions.webp)

**Step 4 –** On the Set Options window, enter the credentials required to deploy the Agent on the
selected machines. Review the Enterprise Manager IP address/name and port for accuracy and select
the modules you want to install for this Agent. You can also set other properties for the Agent. See
the [Set Options Window ](/docs/threatprevention/8.1/admin/agents/deploy/setoptions.md)topic for additional information.

**Step 5 –** Once configurations are set, click **Next**.

![Deploy Agents wizard – Prerequisites Check page](/images/threatprevention/8.1/admin/agents/deploy/prerequisitescheck.webp)

**Step 6 –** On the Prerequisites Check window, the credentials provided on the Set Options window
either succeed or fail during a prerequisites or verification check. It also initiates a
prerequisite check for the Agent. See the [Prerequisites Check Window](/docs/threatprevention/8.1/admin/agents/deploy/prerequisitescheck.md) topic
for additional information.

![Deploy Agents wizard – Installing page](/images/threatprevention/8.1/admin/agents/deploy/installing.webp)

**Step 7 –** The Installing window performs the installation and displays whether the action
was successful. See the [Installing Window ](/docs/threatprevention/8.1/admin/agents/deploy/installing.md) topic for additional information.

**Step 8 –** When the task is successfully completed, click **Finish** to close the window.

The Agent appears in the table on the Agents interface.

:::note
If the server where the Agent is deployed has multiple network adapters (multi-homed),
then you must bind the Agent to an adapter that can communicate with the Enterprise
Manager. See the [Bind To](/docs/threatprevention/8.1/troubleshooting/agentcommunication.md#bind-to) topic for
additional information.
:::


## Update Agent Settings

To update the settings for a deployed Agent through the Agents interface, complete the following steps:

**Step 1 –** Click Agents in the left pane to launch the Agents interface.

**Step 2 –** On the Agents interface, right-click the Agent and select Update Agent Settings on the
[Right-Click Menu](/docs/threatprevention/8.1/admin/agents/overview.md#right-click-menu). The Select Computers window opens.

**Step 3 –** On the Select Computers window, Threat Prevention automatically adds the computer
where the Agent is deployed to the Update Agent settings on These Computers box. See the
[Select Computers Window](/docs/threatprevention/8.1/admin/agents/deploy/selectcomputers.md) topic for additional information. Click **Next**.

**Step 4 –** On the Set Options window, ensure the proper credentials, modules, and Enterprise
Manager location are accurate alongside additional options. To make changes to the settings, uncheck
the **Keep Existing Settings** box. Make the necessary updates. See the
[Set Options Window ](/docs/threatprevention/8.1/admin/agents/deploy/setoptions.md) topic for additional information.

**Step 5 –** On the Prerequisites Check window, the credentials provided on the Set Options window
either succeed or fail during a prerequisites or verification check. See the
[Prerequisites Check Window](/docs/threatprevention/8.1/admin/agents/deploy/prerequisitescheck.md) topic for additional information. Click
**Next**.

**Step 6 –** On the Updating Settings window, Threat Prevention stops and restarts the Agent. One
of two status messages displays:

- Failed – Read the failure message and either click **Back** to provide new credentials or click
  **Finish** to close the window and resolve any error messages before the next
  attempt
- Completed – Indicates that the Agent updated successfully

**Step 7 –** Click **Finish** to close the window.

The status of the Agent update will display in the grid on the Agents interface.
