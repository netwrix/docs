---
title: "Manage Portal Log Settings in Directory Manager"
description: "Set or turn off file logging and Windows logging for a Directory Manager portal deployment instance, and find where the logs are stored."
keywords:
  - portal logging
  - file logging level
  - Windows logging
  - Event Viewer
  - log files
  - Directory Manager portal
sidebar_position: 50
---

# Manage Portal Log Settings in Directory Manager

Directory Manager uses Windows logging and file logging to monitor events from a portal. Set the logging level for a deployment instance of a portal to track a specific set of information for it.

To dump the log files to a location you choose, see the [Download Directory Manager Logs from Admin Center](/docs/directorymanager/11.1/admincenter/general/logs.md) topic.

## File logging

File logging records events for a portal's deployment instance in a text file. When the file reaches 100 MB, Directory Manager archives it in the same directory and replaces the file extension with the suffix `.Log.X`. It then creates a new text file with the original name. `X` is a number from 1 to 10 that shows the archiving order. 1 is the most recent file.

### View log files

**For a native IIS and remote IIS deployment:**

1. Launch IIS and go to the following location:

   `…\Sites\<site that hosts the service/portal instance>\<service/portal instance name>`

   For example: `…\Sites\GroupIDSite11\GroupIDPortal`
2. Right-click this directory and select **Explore**.
3. Find the **Logs** folder to read the logs.

## Windows logging

Windows logging records events from a deployment instance of a portal in a centralized event log named `Imanami GroupID`. Windows log entries are generated on the machine where IIS runs.

- For portal instances deployed in native IIS, view Windows logs in the Windows Event Viewer on the Directory Manager server.
- For portal instances deployed in remote IIS, view Windows logs in the Windows Event Viewer on the remote IIS machine.

The Windows Event Viewer shows a log of application and system messages, including errors, information messages, and warnings. It is a useful tool for troubleshooting Windows problems.

:::note
Windows logging isn't available for a portal instance deployed in Docker.
:::

### View Windows logs

1. On the Directory Manager server or remote IIS machine, enter `eventvwr` in the Run dialog box and click **OK**. Windows Event Viewer opens.
2. Click **Applications and Service Logs > Imanami GroupID** in the left pane to view the event logs for Directory Manager.

**What do you want to do?**

- [Change the file logging level for a portal instance](#change-the-file-logging-level-for-a-portal-instance)
- [Turn off file logging for a portal instance](#turn-off-file-logging-for-a-portal-instance)
- [Change the Windows logging level for a portal instance](#change-the-windows-logging-level-for-a-portal-instance)
- [Turn off Windows logging for a portal instance](#turn-off-windows-logging-for-a-portal-instance)

## Change the file logging level for a portal instance

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. Select the web server (IIS, Remote IIS, or Docker) where the instance is deployed. Then select the instance in the **Select Application Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the instance in the **Log Events** dropdown list. File logging groups events into the following levels, based on the type of information captured:

   | Level | Information captured |
   | --- | --- |
   | 1 - All | Every event involving the portal instance. This is the highest logging level. |
   | 2 - Debug | Fine-grained event information that is most useful for debugging the application. |
   | 3 - Info | Successful operations of a functionality. |
   | 4 - Warn | Events that aren't necessarily significant, but that could potentially cause a future problem. |
   | 5 - Error | Errors that might still allow the portal instance to continue running. Default level. |
   | 6 - Off | No events captured. Turns off file logging. |

7. Click **Save**.

## Turn off file logging for a portal instance

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. Select the web server (IIS, Remote IIS, or Docker) where the instance is deployed. Then select the instance in the **Select Application Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select **Off** in the **Log Events** dropdown list.
7. Click **Save**.

## Change the Windows logging level for a portal instance

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. Select the web server (IIS or Remote IIS) where the instance is deployed. Then select the instance in the **Select Application Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the instance in the **Log Events** dropdown list.
   Windows logging groups events into different levels, based on the type of information captured. The table in [Change the file logging level for a portal instance](#change-the-file-logging-level-for-a-portal-instance) describes these levels.
7. Click **Save**.

## Turn off Windows logging for a portal instance

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, each portal card shows the portal's information. Each portal type has its own logo, so you can tell a standard Directory Manager portal from an SSPR portal.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**. The **Deployment Settings** page appears.
4. Select the web server (IIS, Remote IIS, or Docker) where the instance is deployed. Then select the instance in the **Select Application Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select **Off** in the **Log Events** dropdown list.
7. Click **Save**.
