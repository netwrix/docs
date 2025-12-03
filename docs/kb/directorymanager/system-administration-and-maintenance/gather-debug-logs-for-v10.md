---
description: >-
  Instructions to enable Debug mode in Netwrix Directory Manager v10 and collect
  log files from services, portals, and components for troubleshooting.
keywords:
  - debug logs
  - Netwrix Directory Manager
  - GroupID 10
  - log collection
  - Self-Service Portal
  - Password Center
  - IIS
  - Elasticsearch
  - replication
products:
  - directory-manager
sidebar_label: Gather Debug Logs for v10
tags:
  - system-administration-and-maintenance
title: "Gather Debug Logs for v10"
knowledge_article_id: kA0Qk0000001dtlKAA
---

# Gather Debug Logs for v10

## Applies To
Netwrix Directory Manager 10

## Overview
This article provides guidance for enabling Debug mode in Netwrix Directory Manager applications and collecting log files for troubleshooting purposes. The article outlines how to adjust logging levels and gather logs from various components.

## Instructions

### Enable Debug Mode for Identity Store
1. Open the **Netwrix Directory Manager Console** and navigate to the **Identity Stores** node.
2. Open the properties of the Identity Store where the issue is occurring.
3. In the Properties window, navigate to the **Configurations** tab then click on **Log Settings**.
4. Change **File Logging** from **Error** to **Debug**.
5. Click **Apply**, then **OK** to save the changes.
6. After enabling Debug mode, reproduce the issue, then continue with the steps below to dump the logs.

### Dump Log Files to a Specific Location
1. Right-click **Netwrix Directory Manager [connected domain name]** in the left pane and select **Diagnostics > Logs Dump**.
2. The **Logs Dump** dialog box appears.
3. Select the Directory Manager version from the drop-down list.
4. If you select an uninstalled version, an error will be displayed.
5. In the **Dump logs of** area, select the desired modules or event types:
   - **Event Viewer:** Expands the **Event Logs** list. Select the required logs maintained by Windows Event Viewer.
   - **IIS:** Expands the **Websites** list. Select the websites to include in the dump.
6. Click **Dump**.
7. In the **Choose dump file name** dialog box, specify a name, select the save location, and click **Save**.
8. The logs are saved as a ZIP file in the chosen location.

### Manually Collect Logs by Service
You can manually collect logs from the following locations. `X` refers to the installation drive of Netwrix Directory Manager.

- **Data Service**  
  `X:\Program Files\Imanami\GroupID 10.0\GroupIDDataService\Log`  
  File: `GroupID10-DataService`

- **Security Service**  
  `X:\Program Files\Imanami\GroupID 10.0\GroupIDSecurityService\Log`  
  File: `GroupID10-STS`

- **Replication Logs**  
  `C:\Users\[ServiceAccount]\AppData\Local\Temp`  
  File: `GroupID 10 Replication.log`

- **Self-Service Portal Logs**
  1. In the Netwrix Directory Manager Console, go to **Self-service > Portals > [Portal name] > Server**.
  2. In **Server Settings**, go to the **Support** tab and change **File Logging** from **Error** to **Debug**.
  3. Click the floppy disk icon in the top-right corner to save.
  4. Edit `web.config` in `X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\[Portal Name]\Web` and ensure:
     - `<threshold value="DEBUG" />`
     - `<level value="Debug" />`
  5. Save the `web.config` file.  

  Log location: `X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\[Portal Name]\log`  
  File: `GroupID10-SSP`

- **Password Center User Portal Logs**  
  Follow the same steps as the Self-Service Portal to enable Debug mode.  

  `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub\[Portal Name]\log`  
  File: `GroupID10-PasswordCenter`

- **Directory Manager Management Console Logs**  
  `C:\Users\[LoggedInUser]\AppData\Local\Temp`  
  File: `GroupID10`

- **Email Service Logs**  
  `C:\Windows\Temp\~GroupID10-EmailService`

- **Management Shell Logs**  
  `C:\Windows\Temp\~GroupID10-Management.Log`

- **Upgrade Summary Logs**  
  `C:\Windows\Temp\~GroupID10_Upgrade.Log`

- **Password Center Helpdesk Portal Logs**  
  `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub\[Portal Name]\log`  
  File: `GroupID10-HelpDesk`

- **Task Scheduler Logs**  
  `C:\Users\[ScheduleAccount]\AppData\Local\Temp`  
  File: `GroupID10-TaskScheduler`

- **Reporting Logs**  
  `C:\Windows\Temp\~GroupID10-Reporting.Log`

- **Synchronize Logs**  
  `C:\Windows\Temp\~GroupID10-Synchronize.Log`  
  Job file logs:  
  `C:\ProgramData\Imanami\GroupID 10.0\Synchronize\Jobs\[Job Name]\JobRun_xxx_xxxx_xxx.dtmlog`

- **Configuration Tool Logs**  
  `C:\Users\[User]\AppData\Local\Temp`  
  File: `GroupIDConfigurationTool10`

- **Elasticsearch Logs**  
  `C:\Program Files\Imanami\GroupID 10.0\ElasticSearch\elasticsearch-6.2.4\logs`

Once logs have been collected, compress and send the full logs folder as a ZIP file.
