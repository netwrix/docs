---
title: "System"
description: "System"
sidebar_position: 60
---

# System

This configuration tab contains the settings related to system health, operation and logging. Each option has an associated information popup (the “**i**” symbol next to the option name) which describes what the setting does and how it works.

![core_system_thumb_0_0](/images/dataclassification/5.7/configuration/core/core_system_thumb_0_0.webp)

## Health

| Option                           | Description                                                                                                                                                                                            | Comment                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **General settings**             |                                                                                                                                                                                                        |                                                                                                            |
| Log Level                        | Defines logging level that should be persisted to the log targets. Supported levels: <ul><li>**Errors**</li><li>**Errors & Warnings**</li><li>**Errors Warnings & Info**</li><li>**Verbose**</li></ul> | Each level includes all logs from higher levels.                                                                                                           |
| Tracing                          | Used to control which components of the system persist logs to the log targets.                                                                                                                                                | Will apply to selected components (none by default)                                                        |
| Log Targets                      | Select where the log should be written: to a csv file, to Windows Event Log, or both.                                                                                                                      |                                                                                                            |
| File Log Location                | If you selected to write logs to file, the csv log files will be stored at this location path.                                                                                                                               | Default is _C:\ProgramData\Netwrix Data Classification\Logs_. This cannot be manually changed.                                               |
| File Log Retention Period        | Number of days (since the last use) that file logs should be kept for before deletion.                                                                                                                 | To keep all logs (without automatic deletion), specify _0_ .                                               |
| Send anonymous usage statistics? | Disabled by default. When enabled, the program will send a small amount of information of how the product is being used — to improve the functionality of the product and future offerings.                            | Personal information/ company data will not be sent.                                                       |
| **Advanced settings**            |                                                                                                                                                                                                        |                                                                                                            |
| Max Database Size                | Specifies the max size (in GB) the SQL database will grow to.                                                                                                                                          | When this value is reached, Collector and Indexer components will be suspended. Default is _0_ (no limit). |
| Database Maintenance Schedule    | Specify the schedule for running database maintenance (including the rebuilding of SQL Server indexes)                                                                                                 | Default is _Everyday_.                                                                                     |


## Configuration Export

You may need to export the current configuration —to send to the support team for debugging
purposes. Go to **System Configuration > Config > Settings > Core > System** and in the
**Configuration Export** section click **Export** button.
