---
title: "GroupID Event Logging"
description: "Find where GroupID writes file and Windows event logs for its clients and services, and how log files are archived."
keywords:
  - event logging
  - file logging
  - Windows logging
  - log file location
  - log archiving
sidebar_position: 10
---

# GroupID Event Logging

GroupID uses Windows logging and file logging to maintain event logs for all GroupID
clients and services, namely:

- Admin Center
- GroupID portals
- GroupID mobile app
- Data Service (file logging only)
- Security Service (file logging only)
- Replication Service
- Email Service
- Scheduler service
- GroupID Management Shell

If a client or service has multiple deployments, GroupID maintains separate logs for each
deployment instance.

Use the **Applications** node in Admin Center to manage Windows logging and file logging for each of
the preceding components (except for Management Shell).

## File Logging

File logging records events for GroupID clients, scheduled jobs, and services in log
files. Log file location depends on where the respective instance of the client or service is
deployed.

**For a native IIS and remote IIS deployment:**

1. Launch IIS and navigate to:  
   `…\Sites\<site that hosts the client or service instance>\<client or service instance name>`  
   Example:  
   `…\Sites\GroupIDSite11\GroupIDDataService`
2. Right-click this directory and select **Explore**.
3. Locate the **Logs** folder to read the logs.

Events are logged in a text file. When the file size reaches 100 MB, GroupID archives it
in the same directory by replacing the file extension with the suffix `.Log.X` and then creating a
new text file with the original name. X in `.Log.X` is a number from 1 to 10 representing the
archiving order, where 1 denotes the most recent file.

## Windows Logging

Under Windows logging, events for GroupID clients and services are logged to the Windows application
log.

**See Also**

- [Configure History Tracking in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md)
- [Manage GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Download GroupID Logs from Admin Center](/docs/directorymanager/11.0/signin/concepts/logs.md)
