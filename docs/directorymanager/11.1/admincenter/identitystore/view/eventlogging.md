---
title: "Event Logging"
description: "Event Logging"
sidebar_position: 10
---

# Event Logging

Directory Manager employs Windows logging and file logging to maintain event logs for all Directory
Manager clients and services, namely:

- Admin Center
- Directory Manager portals
- Data Service (file logging only)
- Security Service (file logging only)
- Replication Service
- Email Service
- Scheduler service
- Directory Manager Management Shell

In case of multiple deployments of a client or service, separate logs are maintained for each
deployment instance.

Use the **Applications** node in Admin Center to manage Windows logging and file logging for each of
the above (except for Management Shell).

## File Logging

File logging records events for Directory Manager clients, scheduled jobs, and services in log
files. Log file location depends on where the respective instance of the client or service is
deployed.

**For a native IIS and remote IIS deployment:**

1. Launch IIS and navigate to:  
   …\Sites\<site that hosts the client or service instance>\<client or service instance name>  
   Example:  
   …\Sites\GroupIDSite11\GroupIDDataService
2. Right-click this directory and select **Explore**.
3. Locate the **Logs** folder to read the logs.

Events are logged in a text file. When the file size reaches 100 MB, Directory Manager archives it
in the same directory by replacing the file extension with the suffix .Log.X and then creating a new
text file with the original name. X in .Log.X is a number from 1 to 10 representing the archiving
order; where ‘1’ denotes the most recent file.

## Windows Logging

Under Windows logging, events for Directory Manager clients and services are logged to the Windows
application log.