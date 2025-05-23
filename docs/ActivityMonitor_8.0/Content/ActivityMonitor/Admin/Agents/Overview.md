---
sidebar_position: 2625
title: Agents Tab
---

# Agents Tab

The **Agents** tab is used to deploy activity agents and manage settings. This is the only tab available until an agent is installed.

![Image of Agents Home Page](../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/ADAgent/AgentAddedFinalImage.png "Image of Agents Home Page")

The Agents tab is comprised of a button bar, a table of servers hosting activity agents, and an Agent Messages box. The button bar allows users to take the following actions:

* Add Agent – Opens the Add New Agent(s) window to deploy the activity/AD agent to a single server or to multiple servers at the same time. The following sections provide additional information:

  * [Single Activity Agent Deployment](Add/Single "Single Activity Agent Deployment")
  * [Multiple Activity Agents Deployment](Add/Multiple "Multiple Activity Agents Deployment")
  * [Active Directory Agent Deployment](Add/ActiveDirectory "Active Directory Agent Deployment")
  * [Linux Agent Deployment](Add/Linux "Linux Agent Deployment")
  * Remove – Opens the Remove Agents window where users can choose to remove the hosting server from the activity agents table or uninstalling the activity agent from the hosting server before removing the activity agent from the table. See the [Remove Agents](../../Install/RemoveAgent "Remove Agents") topic for additional information.
* Edit – Opens the selected server’s Properties window to modify the server name or credentials. See the [Agent Properties Window](Properties/Overview "Agent Properties Window") topic for additional information.
* Start pending modules – Starts AD agent monitoring modules which were not yet started

  * Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the AD agent instrumentation resulting in LSASS shutting down. The AD agents are configured to monitor for an LSASS process termination shortly after a server reboot. The AD agent can be configured for Safe Mode to prevent the Windows AD events monitoring module from loading if the version of all DLLs SI hooks into have changed since the last restart.
* Install – Deploy or upgrade an activity agent to the selected host
* Upgrade – [When Agent Status is Outdated] Replaces outdated activity agent with current version
* Update Installer – Opens a browser window to select the newer AD agent installer. A confirmation window then opens and identifies the new installer version. See the [Update AD Agent Installer](../../Install/UpdateADAgentInstaller "Update AD Agent Installer") topic for additional information.
* Refresh all – Refresh the status of all activity agents

The table of servers hosting activity agents provides the following information:

* Server Name – Name or IP Address of the server hosting an activity agent
* Status – Status of the deployed activity agent(s)

  **NOTE:** If the AD agent has been deployed, a status of “outdated” could apply to either the activity agent or the AD agent installed on the domain controller.
* Version – Version of the deployed activity agent
* AD Module – Version of the deployed AD agent
* Domain – Name or IP Address of the domain
* Messages – Count of the number of error and warning messages for the selected server
* Archive Location – If archiving is enabled for the activity agent, displays the archive file path
* Archive Size – If archiving is enabled for the activity agent, displays the archive size

![Agent Messages](../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/ADAgent/AgentMessages.png "Agent Messages")

The **Agent messages** box displays any error or warning messages from the selected activity agent. These messages are related to deployment/installation, communication between the console and the activity/AD agent, and upgrade of an activity/AD agent.

**NOTE:** Activity agents from Activity Monitor v3.1+ can now be controlled by Activity Monitor v4.0+ Console.

For additional information on how to deploy agents manually, see the [Agent Information](../../Install/Agents) topic.