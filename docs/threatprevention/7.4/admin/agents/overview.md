---
title: "Agents Interface"
description: "Agents Interface"
sidebar_position: 40
---

# Agents Interface

The Agents interface allows you to quickly view, deploy, and manage Agents from a centralized
location to the targeted domain controllers in a domain. The Agent must be deployed on all domain
controllers that you want to receive event data for. Once one or more Agent(s) are deployed to a
domain, it becomes known as a targeted domain.

The Threat Prevention Agent can be deployed through any of the following methods:

- Deploy the Agent to server(s) through the Administration Console – You can deploy the Agent to one
  or multiple servers through the Administration Console

  :::info
  This is the recommended method for deploying the Agent.
  :::


- Manually through the Windows Agent Setup Wizard – Run the Agent executable to launch this wizard

See the
[Deploy Agents](/docs/threatprevention/7.4/admin/agents/deploy/overview.md)
and
[Manual Agent Deployment](/docs/threatprevention/7.4/install/agent/manual/manual.md)
topics for additional information.

Click **Agents** in the left pane to open the Agents interface.

![Agents Interface](/images/threatprevention/7.4/admin/agents/agentsinterface.webp)

## Agents Data Grid

The Agents data grid displays information on each domain where an Agent is deployed.

The upper-right corner of the data grid displays the Agent tally, indicating the number of active
Agents as well as the total number of deployed Agents. The data grid displays the following
information for an Agent:

- Domain – Targeted Active Directory domain
- Machine – Server where the Agent is deployed. Hover over data in this column to view the following
  date/time stamps:

  - Last Agent to Manager Communication – Last change event sent from the Agent to the Enterprise
    Manager
  - Last Agent Heartbeat – Last time the Enterprise Manager received a heartbeat from the Agent

    ![Warning Symbol for an Agent](/images/threatprevention/7.4/admin/agents/warningsymbol.webp)

  - AD Event Latency – Time difference between when the event was detected by the Agent and when
    the Enterprise Manager received it

    :::note
    When the **Send Latency Alerts** option is enabled in the
    [Event Filtering Configuration Window](/docs/threatprevention/7.4/admin/configuration/eventfilteringconfiguration.md),
    a warning symbol appears to indicate excessive latency. This warning symbol also appears
    when the Agent fails to load the instrumentation DLL into the LSASS process or when it fails
    to load the instrumentation DLL to MS Exchange.
    :::


- FSMO Roles – The FSMO (Flexible Single Master Operation) role(s) currently assigned to the domain
  controller where the Agent is deployed. Role names are displayed as abbreviations. For example,
  'SM' is displayed for the Schema Master role. Hover over data in this column to view the full
  names.

  :::note
  You can use the FSMO roles information in combination with a policy created for the
  [FSMO Role Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/fsmorolemonitoring.md)
  to view events about which machine acquired a FSMO role and which machine relinquished it.
  :::


- Operating System – Operating system for the machine where the Agent is deployed with version
  information, including service pack details. For example, Windows Server 2022 Standard.. For
  example, Windows Server 2019 Standard

  ![Agents Interface - Agent Statuses](/images/threatprevention/7.4/admin/agents/agentstatuses.webp)

- Status – the Agent’s current status:

  - Active (green) – The Agent is actively monitoring/blocking events and communicating with the
    Enterprise Manager
  - Active (Modules Pending) – The Agent is active, but the Windows AD Events module has not been
    loaded due to Safe Mode. See the
    [Agent Safe Mode](/docs/threatprevention/7.4/admin/agents/safemode.md)
    topic for additional information.
  - Stopped (orange) – The Agent has been stopped and is not monitoring/blocking events
  - Lost Connection (red) – The Agent is not actively communicating with the Enterprise Manager
  - No Agent (gray) – a domain controller has been found within the targeted domain where the
    Agent is not yet deployed

- Address – IP address of the server where the Agent is deployed. Hover over data in this column to
  view the IP address with port
- Version String – Agent build version

  - If the Agent’s version is older than the current version available in the Administration
    Console, it is highlighted. This indicates that an upgrade is recommended.
  - Hover over data in this column to view a listing of the Agent’s configured settings. This
    information includes information on modules that are running and those that are pending (for
    Safe Mode).

- UTC Offset – Local server time zone relationship to the Universal Time (UTC)
- Last Events – Number of events reported by the Agent in the last notification to the Enterprise
  Manager
- Events In Queue – Count of events the Agent is waiting to send to the Enterprise Manager
- AD Agent – Indicates if the Agent is running in Normal Mode or Safe Mode
- Is Signed – Indicates if the Agent is signed or unsigned
- Free Space – Amount of free space on the drive the Agent is installed on
- Agent Last Stopped – Date timestamp for when the Agent was last stopped
- Build Time Stamp – Date timestamp for when the Agent version was created
- Certificate Thumbprint – The certificate used by the Agent to communicate with Enterprise Manager
- Features – Features available for the Agent and its configured modules
- FQDN – Fully-qualified domain name of the machine where the Agent is deployed
- Last Registration – The date and time when the Agent successfully connected to the Enterprise
  Manager (became Active)
- Modules – Event sources loaded and running on the Agent
- Platform – Operating system platform for the machine where the Agent is deployed, for example,
  Windows

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/7.4/admin/navigation/datagrid.md)
topic for additional information.

## Agents Action Buttons

The following icons above the data grid enable you to perform various actions on the Agents
interface

| Icon           | Label                   | Action        |
| --------------- | ----------------------- | -------------- |
| ![Export Agent List icon](/images/threatprevention/7.4/admin/agents/exporticon.webp)                   | Export Agent List…      | Save the information to an XML file for export                                                                                                                                                                                                                                                                                                |
| ![Refresh Agent List icon](/images/threatprevention/7.4/admin/agents/refreshicon.webp)                 | Refresh Agent List…     | Refresh the Agent information                                                                                                                                                                                                                                                                                                                 |
| ![Update Logging Levels icon](/images/threatprevention/7.4/admin/agents/updateloggingicon.webp)        | Update Logging Levels…  | Configure the log levels for the Agent(s). It opens the [Log Level Configuration Window](/docs/threatprevention/7.4/admin/agents/agentswindows/loglevelconfiguration.md).                                                                                                                                                                     |
| ![Get Agent Log icon](/images/threatprevention/7.4/admin/agents/getagentlogicon.webp)                  | Get Agent Log…          | Access Agent log files. See the [Access Agent Log Files](/docs/threatprevention/7.4/admin/agents/agentswindows/loglevelconfiguration.md#access-agent-log-files) topic for additional information.                                                                                                                                             |
| ![Update Agent Installer icon](/images/threatprevention/7.4/admin/agents/updateinstallericon.webp)     | Update Agent Installer  | Check with Netwrix for a newer version of the Agent Installer according to the version in use. It opens the [Agent Installer Update Window](/docs/threatprevention/7.4/admin/agents/agentswindows/agentinstallerupdate.md).                                                                                                                   |
| ![Configure Auto Deploy icon](/images/threatprevention/7.4/admin/agents/autodeployicon.webp)           | Configure Auto Deploy   | If enabled, the Agent is automatically deployed to all domain controllers without an Agent. This feature requires at least one Agent to be present in the domain in order to detect additional domain controllers. It opens the [Configure Auto Deploy Window](/docs/threatprevention/7.4/admin/agents/agentswindows/configureautodeploy.md). |
| ![Agent Enrollment Secret icon](/images/threatprevention/7.4/admin/agents/enrollmentsecreticon.webp)    | Agent Enrollment Secret | Generate the enrollment secret used to deploy the Agent. Opens the [Enrollment Secret Configuration Window](/docs/threatprevention/7.4/admin/agents/agentswindows/enrollmentsecretconfiguration.md).                                                                                                                                          |
| ![Deploy Agent icon](/images/threatprevention/7.4/admin/agents/deployagent.webp)                      | Deploy Agent            | Deploy the Agent to selected servers. It opens the Deploy Agents wizard. See the [Deploy Agents](/docs/threatprevention/7.4/admin/agents/deploy/overview.md) topic for additional information.                                                                                                                                                |


## Right-Click Menu

A right-click menu is available for each row in the data grid. Options not applicable to the
selected Agent are grayed-out.

![Agents Interface - Right-Click Menu](/images/threatprevention/7.4/admin/agents/rightclickmenu.webp)

The right-click menu contains the following selections:

| Right-Click Command      | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Install Agent            | Deploys the Agent to the desired machines. Opens the Deploy Agent wizard. See the [Deploy Agents](/docs/threatprevention/7.4/admin/agents/deploy/overview.md) topic for additional information.                                                                                                                                                                                                                        |
| Uninstall Agent          | Uninstalls a previously deployed Agent from its server. See the [Uninstall Agent](/docs/threatprevention/7.4/install/upgrade/uninstallagent.md) topic for additional information.                                                                                                                                                                                                                                      |
| Upgrade Agent            | Upgrades the Agent to a newer version. See the [Upgrade Agent](/docs/threatprevention/7.4/install/upgrade/agent.md) topic for additional information.                                                                                                                                                                                                                                                                  |
| Update Agent Settings    | Allows for modification of the Agent settings, such as the modules, Enterprise Manager address, or enabling/disabling the DNS Host Name Resolution option. It opens the Deploy Agent wizard. See the [Update Agent Settings](/docs/threatprevention/7.4/admin/agents/deploy/overview.md#update-agent-settings) topic for additional information.                                                                       |
| Start Agent              | Starts the Agent service on the selected machine(s). See the [Start Agent](/docs/threatprevention/7.4/admin/agents/agentmanagement/start.md) topic for additional information.                                                                                                                                                                                                                                              |
| Stop Agent               | Stops the Agent service on the selected machine(s). See the [Stop Agent](/docs/threatprevention/7.4/admin/agents/agentmanagement/stop.md) sections for additional information.                                                                                                                                                                                                                                              |
| Start Pending Modules    | Starts Agent service modules that did not start with the Agent due to a change in LSASS (only available on Agents configured to use Safe Mode). See the [Agent Safe Mode](/docs/threatprevention/7.4/admin/agents/safemode.md) topic and the [Start Pending Modules](/docs/threatprevention/7.4/admin/agents/agentmanagement/startpendingmodules.md) topic for additional information.                                      |
| Harden Agent             | Protects an Agent from being altered, stopped, or started from within the local Service Control Manager. See the [Harden Agent](/docs/threatprevention/7.4/admin/agents/agentmanagement/harden.md) topic for additional information.                                                                                                                                                                                        |
| Soften Agent             | Unlocks the Agent so it can be controlled from within the local Service Control Manager. See the [Soften Agent](/docs/threatprevention/7.4/admin/agents/agentmanagement/soften.md) topic for additional information.                                                                                                                                                                                                        |
| Remove Server from List  | Removes a server from the Agent data grid. If the server has a deployed Agent, it will be added back to the list the next time the Agent sends information to the Enterprise Manager. See the [Remove Server from List](/docs/threatprevention/7.4/admin/agents/agentmanagement/removeserver.md) topic for additional information.                                                                                          |
| Clear SQLite Agent Queue | When the Agent is unable to communicate with the Enterprise Manager, Agent events queue up in the Agents local SQLite database until the Enterprise Manager is available to accept events. The Clear SQLite Agent Queue option dumps the queue and all pending events are lost. See the [Clear SQLite Agent Queue](/docs/threatprevention/7.4/admin/agents/agentmanagement/clearqueue.md) topic for additional information. |

For certain actions, you can select multiple Agents listed in the data grid, to perform that action
on all the selected Agents. The appropriate right-click menu options will not be grayed out if
multi-selection is available for the particular action. Agents must be in the same state in order to
complete a multi-select action (for example, all selected Agents must be stopped to use the Start
action).

To perform centralized Agent maintenance from the Administration Console, you must have WMI enabled
on the machine where the Agent is installed. The Soften Agent, Harden Agent, and Remove Server from
List actions are an exception. When executing the other commands, the Administration Console uses
WMI to remotely query the registry on the target Agent machine(s) to understand where the Agent
configuration files are located (install path). Next, WMI is used to stop the Agent service, modify
the configuration files, and restart the Agent.

See the
[Firewall Ports](/docs/threatprevention/7.4/requirements/ports.md) topic
for default ports required for WMI communication. See the Microsoft
[WMI Diagnosis Utility](<https://docs.microsoft.com/en-us/previous-versions/tn-archive/ff404265(v=msdn.10)?redirectedfrom=MSDN>)
article for additional information.

## Additional Agent Considerations

Below are some considerations:

- Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the Agent
  instrumentation resulting in LSASS shutting down. The Agent is configured to monitor for an LSASS
  process termination shortly after a server reboot. The
  [LSASS Process Terminated](/docs/threatprevention/7.4/troubleshooting/lsass.md)
  alert (Operations alert) is triggered in this event and the Agent is stopped. As a result, all
  monitoring/blocking by that Agent will be stopped. To resolve the issue, the Threat
  Prevention administrator should check if the Agent service is set to manual start. The most likely
  solution is to upgrade to the latest version of the Agent.

  :::info
  Activate an email notification for the _LSASS process terminated_ alert. See
  the
  [Enable the 'LSASS Process Terminated' Email Alert](/docs/threatprevention/7.4/troubleshooting/lsass.md#enable-the-lsass-process-terminated-email-alert)
  topic for additional information.
  :::


- In addition to the LSASS process termination check, the Agent can be configured for a Safe Mode.
  In Safe Mode, the Agent records the version of the LSASS DLLs that it hooks into during
  installation. When an Agent is restarted, it compares the DLL versions with the recorded list. If
  the versions do not match, the Windows AD Events monitoring module is not loaded. The Agent’s
  status in the Agents interface changes to Active (Modules Pending), and all Active Directory
  monitoring/blocking by that Agent stops. The 'Agent Started in AD Monitor pending mode' alert
  (Operations alert) is triggered in this event. To resolve the issue, the Threat Prevention
  administrator must start the pending modules. See the
  [Start Pending Modules](/docs/threatprevention/7.4/admin/agents/agentmanagement/startpendingmodules.md)
  topic for additional information.

  :::info
  Activate an email notification for this alert. See the
  [Enable Agent Started in AD Monitor Pending Mode Email Alert](/docs/threatprevention/7.4/admin/agents/safemode.md#enable-agent-started-in-ad-monitor-pending-mode-email-alert)
  topic and the
  [Agent Safe Mode](/docs/threatprevention/7.4/admin/agents/safemode.md)
  topic for additional information.

  :::
