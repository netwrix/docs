---
title: "Manage Portal Log Settings in GroupID"
description: "Set or turn off file logging and Windows logging for a GroupID portal deployment instance, and find where the logs are stored."
keywords:
  - portal logging
  - file logging level
  - Windows logging
  - Event Viewer
  - log files
  - GroupID portal
sidebar_position: 50
---

# Manage Portal Log Settings in GroupID

GroupID uses Windows logging and file logging to monitor events from a portal. You can set
the logging level for a deployment instance of a portal to track a specific set of information for
it.

## File Logging

File logging records events for a portal’s deployment instance in a text file. When the file size
reaches 100 MB, GroupID archives it in the same directory by replacing the file extension
with the suffix _.Log.X_, and then creates a new text file with the original name. _X_ in _.Log.X_
is a number from 1 to 10 representing the archiving order, where 1 denotes the most recent file.

### View Log Files

**For a native IIS and remote IIS deployment:**

1. Launch IIS and navigate to:  
   …\Sites\<site that hosts the service/portal instance>\<service/portal instance name>  
   Example:  
   …\Sites\GroupIDSite11\GroupIDPortal
2. Right-click this directory and select **Explore**.
3. Locate the **Logs** folder to read the logs.

## Windows Logging

Windows logging records events from a deployment instance of a portal in a centralized event log
named _Imanami GroupID_. Windows log entries are generated on the machine where IIS is running.

- For portal instances deployed in native IIS, you can view Windows logs in the Windows Event Viewer
  on the GroupID server.
- For portal instances deployed in remote IIS, you can view Windows logs in the Windows Event Viewer
  on the remote IIS machine.

The Windows Event Viewer shows a log of application and system messages, including errors,
information messages, and warnings. It is a useful tool for troubleshooting Windows
problems.

:::note
Windows logging isn't available for a portal instance deployed in Docker.
:::

### View Windows Logs

1. On the GroupID server/remote IIS machine, type _eventvwr_ in the Run dialog box and
   click **OK** to launch Windows Event Viewer.
2. Click **Applications and Service Logs > Imanami GroupID** in the left pane to view the event logs
   for GroupID.

## Change the File Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page appears.
4. To set the file logging level for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the instance in the **Log Events**
   dropdown list. File logging groups events into the following levels, based on the type of
   information captured:

    | Level     | Information Captured                                                                            |
    | --------- | ----------------------------------------------------------------------------------------------- |
    | 1 - All   | Every event involving the portal instance; this is the highest logging level.                   |
    | 2 - Debug | Fine-grained event information that is most useful for debugging the application.               |
    | 3 - Info  | Successful operations of a functionality.                                                       |
    | 4 - Warn  | Events that aren't necessarily significant, but that could potentially cause a future problem. |
    | 5 - Error | Errors that might still allow the portal instance to continue running. Default level.           |
    | 6 - Off   | No events captured; turns off file logging.                                                     |

7. Click **Save**.

## Turn Off File Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page appears.
4. To turn off file logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select _Off_ in the **Log Events** dropdown list.
7. Click **Save**.

## Change the Windows Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page appears.
4. To set the Windows logging level for a deployment instance, first select the web server (IIS or
   Remote IIS) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the instance in the **Log Events**
   dropdown list.  
   Windows logging groups events into different levels, based on the type of information captured.
   These levels are discussed in the table in the
   [Change the File Logging Level for a Portal Instance](#change-the-file-logging-level-for-a-portal-instance)
   topic.
7. Click **Save**.

## Turn Off Windows Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page appears.
4. To turn off Windows logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** dropdown list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select _Off_ in the **Log Events** dropdown list.
7. Click **Save**.

**See Also**

- [GroupID Portal Server Settings](/docs/directorymanager/11.0/signin/applications/portal/server/overview.md)
- [Download GroupID Logs from Admin Center](/docs/directorymanager/11.0/signin/concepts/logs.md)
