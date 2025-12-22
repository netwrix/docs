---
title: "System Settings Glossary"
description: "System Settings Glossary"
sidebar_position: 10
---

# System Settings Glossary

Complete glossary of System Settings special attributes and a description of each.

| Description                             | Default/Sample Value                                      | Comments                                                                                                                                                                    |
| --------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AgentOfflineGracePeriod                 | 300                                                       | Number of Seconds for Agent offline reporting                                                                                                                               |
| BaseUrl                                 | https://192.168.2.160/                                    | System URL                                                                                                                                                                  |
| CreateDefaultGroups                     | Yes                                                       | Suppress re-creation of default Groups on startup                                                                                                                           |
| CreateDefaultQueries                    | Yes                                                       | Suppress re-creation of default Queries on hub startup                                                                                                                      |
| DaysToKeepEventsFor                     | 120                                                       | Number of Days to keep events in MongoDB                                                                                                                                    |
| DeleteDevicesOfflineForSeconds          | 86400                                                     | Devices offline for this amount of time are automatically deleted                                                                                                           |
| EventStatsUnitSeconds                   | 30                                                        | Granularity (minutes) of events for Dashboard                                                                                                                               |
| IncludeDevicesWithNoEventsInEventExport | Yes                                                       | Includes all devices in Reports                                                                                                                                             |
| MaxStringLengthForExportCell            | 3000                                                      | Controls the max number of characters to be exported for a report                                                                                                           |
| MongoDumpPath                           | C:\Program Files\NNT Change TrackerSuite\Gen7\MongoDB\bin | Path to MongoDump Executable                                                                                                                                                |
| MinimumFileHashReputation               | AssuredGood                                               | Controls the level of Whitelist assurance that maps to a planned event, alternative is AssumedGood which will bias results to give more tolerance to lower file reputations |
| PollGracePeriodSeconds                  | 20                                                        | Number of Seconds for Polled Device grace period for off-line reporting                                                                                                     |
| ReportAllErrors                         | Yes                                                       | Report on all Errors                                                                                                                                                        |
| SessionTimeout                          | 10 minutes (0 to disable)                                 | Minutes before User Session is terminated                                                                                                                                   |
| SessionTimeoutWarning                   | 30 seconds (0 to disable)                                 | Warning before a User Session is terminated                                                                                                                                 |
| TextSearchMethod                        | Text                                                      | Search method used, can be set to ‘regex’ to use more precise regular expression match                                                                                      |

## Export and Import

Schedule system backups, and exports for Support and Planned Change archiving. In addition, see the
MongoDB
[Back Up aand Restore the MongotDB Tools](https://www.mongodb.com/docs/manual/tutorial/backup-and-restore-tools/)
article.

Export format types support archival of Events, Policy, and Planned Changes Only or, to assist
Netwrix with support, a Full or Support Snapshot export may be requested.

![SystemSettingsExportImport](/images/changetracker/8.0/admin/settings/systemsettingsexportimport.webp)

## System Performance

View the health of the Change Tracker system and Event Queue performance here. Please contact
[Netwrix Support](https://www.netwrix.com/support.html) for specific requirements regarding System
Performance metrics.

## License

Inspect details for the current license and upload a new license key if required. To add a new
license key, just paste the code provided into the **Add New License** field and click **Upload
License**.

![SystemSettingsLicense](/images/changetracker/8.0/admin/settings/systemsettingslicense.webp)
