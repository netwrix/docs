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
| DeleteDevicesOfflineForSeconds          | 86400                                                     | Netwrix Change Tracker automatically deletes devices offline for this amount of time                                                                                        |
| EventStatsUnitSeconds                   | 30                                                        | Granularity (minutes) of events for Dashboard                                                                                                                               |
| IncludeDevicesWithNoEventsInEventExport | Yes                                                       | Includes all devices in Reports                                                                                                                                             |
| MaxStringLengthForExportCell            | 3000                                                      | Controls the max number of characters to export for a report                                                                                                                |
| MongoDumpPath                           | C:\Program Files\NNT Change TrackerSuite\Gen7\MongoDB\bin | Path to MongoDump Executable                                                                                                                                                |
| MinimumFileHashReputation               | AssuredGood                                               | Controls the level of Allowlist assurance that maps to a planned event, alternative is AssumedGood which will bias results to give more tolerance to lower file reputations |
| PollGracePeriodSeconds                  | 20                                                        | Number of Seconds for Polled Device grace period for off-line reporting                                                                                                     |
| ReportAllErrors                         | Yes                                                       | Report on all Errors                                                                                                                                                        |
| SessionTimeout                          | 10 minutes (0 to disable)                                 | Minutes before Change Tracker terminates the user session                                                                                                                   |
| SessionTimeoutWarning                   | 30 seconds (0 to disable)                                 | Warning before Change Tracker terminates the user session                                                                                                                   |
| SyslogUseLocalTime                      | False                                                     | Change Tracker sends syslog with UTC time by default, but this setting sends syslog with local time gathered from the devices the agents run on.                            |
| TextSearchMethod                        | Text                                                      | Search method used. Set to `regex` for a more precise regular expression match                                                                                              |
