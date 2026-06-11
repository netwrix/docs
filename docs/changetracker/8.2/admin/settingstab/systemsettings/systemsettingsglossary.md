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
| SyslogUseLocalTime                      | False                                                     | Syslog is sent with UTC time by default, but this setting will send syslogs with local times gathered from the devices the agents run on.                                   |
| TextSearchMethod                        | Text                                                      | Search method used, can be set to ‘regex’ to use more precise regular expression match                                                                                      |
