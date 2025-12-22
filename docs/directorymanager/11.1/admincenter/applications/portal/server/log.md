---
title: "Manage Log Settings"
description: "Manage Log Settings"
sidebar_position: 50
---

# Manage Log Settings

Directory Manager uses Windows logging and file logging to monitor events from a portal. You can set
the logging level for a deployment instance of a portal to track a specific set of information for
it.

To dump the log files to a desired location for easy access, see the
[Get Logs](/docs/directorymanager/11.1/admincenter/general/logs.md) topic.

## File Logging

File logging records events for a portal’s deployment instance in a text file. When the file size
reaches 100 MB, Directory Manager archives it in the same directory by replacing the file extension
with the suffix _.Log.X_ and then creating a new text file with the original name. _X_ in _.Log.X_
is a number from 1 to 10 representing the archiving order; where ‘1’ denotes the most recent file.

#### View Log Files

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
  on the Directory Manager server.
- For portal instances deployed in remote IIS, you can view Windows logs in the Windows Event Viewer
  on the remote IIS machine.

The Windows Event Viewer shows a log of application and system messages, including errors,
information messages, and warnings. It is a useful tool for troubleshooting all kinds of Windows
problems.

:::note
Windows logging is not available for a portal instance deployed in Docker.
:::


#### View Windows Logs

1. On the Directory Manager server/remote IIS machine, type _eventvwr_ in the Run dialog box and
   click **OK** to launch Windows Event Viewer.
2. Click **Applications and Service Logs > Imanami GroupID** in the left pane to view the event logs
   for Directory Manager.

**What do you want to do?**

- Change the File Logging Level for a Portal Instance
- Turn Off File Logging for a Portal Instance
- Windows Logging
- Turn Off Windows Logging for a Portal Instance

## Change the File Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To set the file logging level for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the instance in the **Log Events**
   drop-down list. File logging groups events into the following levels, based on the type of
   information captured:

    | Level     | Information Captured                                                                            |
    | --------- | ----------------------------------------------------------------------------------------------- |
    | 1 - All   | Every event involving the portal instance; this is the highest logging level.                   |
    | 2 - Debug | Fine-grained event information that is most useful for debugging the application.               |
    | 3 - Info  | Successful operations of a functionality.                                                       |
    | 4 - Warn  | Events that are not necessarily significant, but that could potentially cause a future problem. |
    | 5 - Error | Errors that might still allow the portal instance to continue running. Default level.           |
    | 6 - Off   | No events captured; turns off file logging.                                                     |

7. Click **Save**.

## Turn Off File Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To turn off file logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.

## Change the Windows Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To set the Windows logging level for a deployment instance, first select the web server (IIS or
   Remote IIS) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the instance in the **Log Events**
   drop-down list.  
   Windows logging groups events into different levels, based on the type of information captured.
   These levels are discussed in the table in the Change the File Logging Level for a Portal
   Instance topic.
7. Click **Save**.

## Turn Off Windows Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To turn off Windows logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.
