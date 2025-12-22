---
description: >-
  Describes symptoms, cause, and step-by-step resolution for duplicated AgentID
  values on cloned virtual machines that cause monitoring data loss in Netwrix
  Auditor.
keywords:
  - cloned VMs
  - AgentID
  - Windows Server Change Reporter Agent
  - Netwrix Auditor
  - monitoring plans
  - Windows Server Compression Service
  - User Activity
  - RemoteAgentState.xml
products:
  - auditor
sidebar_label: Workstations Cloned with Windows Server Auditing S
tags: []
title: "Workstations Cloned with Windows Server Auditing Service Pre-installed"
knowledge_article_id: kA04u00000110jcCAA
---

# Workstations Cloned with Windows Server Auditing Service Pre-installed

## Symptoms

- Multiple VM instances have the same `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\Windows Server Change Reporter Agent\AgentID` registry key.
- Servers or events for specific VM servers are missing from reports.
- Events in VM server reports are replicated in reports for other irrelevant servers.

## Cause

When a newly created VM server template is monitored via Netwrix Auditor, it will have Windows Server Compression Service instance installed for monitoring and data collection purposes. Every instance of Windows Server Compression Service is supposed to have a unique AgentID to allow Netwrix Auditor to differentiate the collected data in terms of its source.

In case a monitored VM template is duplicated, Agent IDs are duplicated as well. If Agent IDs match for two or more VMs, the collection process will be hindered — Netwrix Auditor will be satisfied with a single response instead of the actual number of responses it is supposed to get as in one response per machine. Subsequently, this leads to monitoring data losses and inconsistent monitoring data.

## Affected servers

To establish the affected servers, refer to the following steps:

1. Choose a single server you suspect to be affected and navigate to the following registry key in Registry Editor:

   ```Registry
   Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\Windows Server Change Reporter Agent
   ```

   Copy the **AgentID** value.

   ![Registry AgentID screenshot]./../0-images/ka04u000001177u_0EM4u000008Lr6o.png)

2. In your Netwrix Auditor host, navigate to the `C:\ProgramData\Netwrix Auditor\ShortTerm\WSA\Agents\` folder. Look for a folder named after **AgentID** (e.g.,52656fc3-d325-424d-9bef-fb68d14bc919). The **RemoteAgentState.xml** file contains a list of affected servers.

## Resolution

### Netwrix Auditor host

1. Stop Netwrix Auditor for Windows Server Audit Service:

   1. In the search bar, type **Services** and open the application.  
      You can also launch `Services.msc` via Run command window.
   2. Scroll down the **Services (Local)** list to find the Netwrix Auditor for Windows Server Audit Service.
   3. Right-click the service and select **Stop**.

2. Stop Windows Server monitoring plans with affected servers:

   1. Open your Netwrix Auditor application.
   2. In the main screen, open the **Monitoring Plans** menu.
   3. Select a Windows Server monitoring plan and click **Edit**.
   4. Select the appropriate data source and click **Edit data source** in the right pane.
   5. Switch the **Monitor this data source and collect activity data** switch to **Off**.

3. Add the template server to exclusions:

   1. In the main Netwrix Auditor screen, open the **Monitoring Plans** menu.
   2. Select a Windows Server monitoring plan and click **Edit**.
   3. Select the Active Directory container containing the template server and click **Edit item** in the right pane.
   4. In the left pane, select Containers and Computers and check the **Exclude these objects** checkbox.
   5. Click **Add Computer** to add your template server to exclusions.

### Affected servers

> NOTE: These steps should be applied to the template VM as well.

1. Uninstall Netwrix Auditor for Windows Server Compression Service on affected servers.

   1. In your **Start** menu, open **Settings**.
   2. Open the **Apps** menu.
   3. Select Netwrix Auditor for Windows Server Compression Service application and click **Uninstall**.

2. Remove the following folders from affected servers:

   - `C:\ProgramData\Netwrix Auditor\Windows Server Compression Service`
   - `C:\Program Files (x86)\Netwrix Auditor\Windows Server Compression Service`

3. Delete `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\Windows Server Change Reporter Agent` registry keys from affected servers.

4. Launch Netwrix Auditor for Windows Server Audit Service in your Netwrix Auditor host. Refer to the prior steps for additional information.

5. Start the previously disabled monitoring plans with affected servers.

6. Netwrix Auditor for Windows Server Audit Service should automatically launch during the next data collection to reinstall Windows Server Compression Service applications. In case they won't, refer to the following steps:

   1. Open the folder `C:\Program Files (x86)\Netwrix Auditor\Windows Server Auditing` in the Netwrix server.
   2. Copy the Netwrix.WSA.CompressionService.Setup.msi file to each affected server.
   3. Install it manually.

> NOTE: User Activity service will be affected as well. Refer to the following steps for troubleshooting:

### Netwrix Auditor host (User Activity)

1. Stop Netwrix Auditor User Activity Core Service:

   1. In the search bar, type **Services** and open the application.  
      You can also launch `Services.msc` via Run command window.
   2. Scroll down the **Serivces (Local)** list to find the Netwrix Auditor User Activity Core Service.
   3. Right-click the service and select **Stop**.

2. Stop User Activity monitoring plans with affected servers:

   1. Open your Netwrix Auditor application.
   2. In the main screen, open the **Monitoring Plans** menu.
   3. Select the User Activity monitoring plan and click **Edit**.
   4. Select the data source and click **Edit data source** in the right pane.
   5. In the left pane, select the **General** tab, and toggle the **Monitor this data source and collect activity data** off.

3. Remove the VM template from the monitoring plan.

   1. Open your Netwrix Auditor application.
   2. In the main screen, open the Monitoring Plans menu.
   3. Select the User Activity monitoring plan and click Edit.
   4. Select the VM template item in the list and click **Remove item** in the right pane.

4. Navigate to `C:\ProgramData\Netwrix Auditor`, back up and delete the **User Activity Video Reporter** folder.

### Affected servers (User Activity)

> NOTE: These steps should be applied to the template VM as well.

1. Uninstall Netwrix Auditor User Activity Core Service on affected servers.

   1. In your **Start** menu, open **Settings**.
   2. Open the **Apps** menu.
   3. Select Netwrix Auditor User Activity Core Service and click **Uninstall**.

2. Delete the following folders from affected servers:

   - `C:\ProgramData\Netwrix Auditor\User Activity Core Service`
   - `C:\Program Files (x86)\Netwrix Auditor\User Activity Core Service`

3. Delete `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix\User Activity Video Reporter Agent` from affected servers.

4. Launch Netwrix Auditor User Activity Core Service in your Netwrix Auditor host. Refer to the prior steps for additional information.

5. Start the previously disabled monitoring plans with affected servers.

6. Netwrix Auditor User Activity Core Service should automatically launch during the next data collection to reinstall User Activity applications. In case it won't, refer to the following steps:

   1. Open the folder `C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording` in the Netwrix server.
   2. Copy the **UACoreSvcSetup.msi** file to each cloned server.
   3. Install it manually.

