---
title: "Active Directory Agent Deployment"
description: "Active Directory Agent Deployment"
sidebar_position: 40
---

# Active Directory Agent Deployment

Before deploying the Active Directory (AD) agent, ensure all
[AD Agent Server Requirements](/docs/activitymonitor/8.0/requirements/adagent/adagent.md) have been met. To effectively
monitor Active Directory, it is necessary to deploy an AD agent to every domain controller,
including the read only domain controllers. However, it is possible to deploy the agents in batches.
Follow the steps to deploy the AD agents to the domain controllers in the target domain.

:::note
These steps are specific to deploying AD agents for monitoring Active Directory.
:::


**Step 1 –** On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent](/images/activitymonitor/8.0/install/agent/installnew.webp)

**Step 2 –** Click on the Install agents on Active Directory domain controllers link to deploy
activity agents to multiple domain controllers.

:::note
The Activity Monitor will validate the entered Host Name or IP Address entered in the
**Server Name** text box.
:::


![Specify Agent Port](/images/activitymonitor/8.0/install/agent/portdefault.webp)

**Step 3 –** Specify the port that should be used by the new agent(s).

![Agent Install Location](/images/activitymonitor/8.0/admin/agents/add/locationdefault.webp)

**Step 4 –** Select the agent installation path.

:::info
Use the default installation path.
:::


![Active Directory Connection page with blank text boxes](/images/activitymonitor/8.0/admin/agents/add/adconnectionblank.webp)

**Step 5 –** On the Active Directory Connection page, enter the domain, and specify an account that
is a member of BUILTIN\Administrators group on the domain. Then, click **Connect**.

![Example of a successful connection on the Active Directory Connection page](/images/activitymonitor/8.0/admin/agents/add/adconnectionsuccessful.webp)

When the connection is successful, the Next button is enabled. Click Next to continue.

:::note
An Administrator’s credentials are required to test the connection to the server. This is
the only way to enable the Next button.
:::


![Domains to Monitor page](/images/activitymonitor/8.0/admin/agents/add/domainstomonitorpage.webp)

**Step 6 –** On the Domains To Monitor page, available domains display in a list, checked by
default. Check/uncheck the boxes as desired to identify the domains to monitor, then click Next.

![Domain Controllers to Deploy the Agent to page](/images/activitymonitor/8.0/admin/agents/add/dcstodeploytheagenttopage.webp)

**Step 7 –** On the Domain Controllers to deploy the Agent to page, available domain controllers
display in a list, checked by default. Check/uncheck the boxes as desired to identify the domain
controllers where the AD agent is to be deployed.

:::note
Agents can be gradually deployed, but the AD agent needs to be installed on all domain
controllers to monitor all activity of the domain.
:::


![Test Connection to Domain Controller](/images/activitymonitor/8.0/admin/agents/add/dcsdeployagentconnection.webp)

**Step 8 –** Click the **Test** button to verify the connection to the domains selected. Once the
connection is verified, click **Next** to continue.

![Windows Agent Settings Page](/images/activitymonitor/8.0/admin/agents/add/windowsagentsettingspage.webp)

**Step 9 –** On the Windows Agent Settings page, there are two settings to configure.

- Add Windows file activity monitoring – Select the check box to add Windows file activity
  monitoring after installing the agent. By default a new agent install monitors nothing. If
  administrators want to monitor file activity on Windows servers, it is easier to enable it after
  installation of the agent. Windows file activity monitoring can be enabled and configured later in
  the console.
- Management Group – By default, the agent only accepts commands form members of the
  BUILTIN\Administrators group. Less privilege accounts can be configured to manage the agent with
  the Management Group setting. Keep in mind that only administrators can install, update and
  uninstall the agent.

**Step 10 –** Click **Finish**. The Add New Agent(s) window closes, and the activity agent is
deployed to and installed on the target host.

During the installation process, the status will be Installing. If there are any errors, the
Activity Monitor stops the installation and lists the errors in the Agent messages box.

![AD Agent Installed](/images/activitymonitor/8.0/admin/agents/add/adagentinstalled.webp)

When the AD agent installation is complete, the status changes to **Installed** and the agent
version populates in the AD Module column. The next step is to configure the domains to be
monitored. See the [Monitored Domains Tab](/docs/activitymonitor/8.0/admin/monitoreddomains/overview.md) section for
additional information.
