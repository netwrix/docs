---
title: "Windows Server Registry Keys"
description: "Windows Server Registry Keys"
sidebar_position: 110
---

# Windows Server Registry Keys

Review the basic registry keys that you may need to configure for monitoring Windows Server with
Netwrix Auditor. Navigate to Start → Run and type _"regedit"_.

| Registry key (REG_DWORD type)                                                          | Description / Value                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Windows Server Change Reporter |                                                                                                                                                                                                                              |
| CleanAutoBackupLogs                                                                    | Defines the retention period for the security log backups: <ul><li>0—Backups are never deleted from Domain controllers</li><li>[X]— Backups are deleted after [X] hours</li></ul>                                            |
| ProcessBackupLogs                                                                      | Defines whether to process security log backups: <ul><li>0—No</li><li>1—Yes Even if this key is set to _"0"_, the security log backups will not be deleted regardless of the value of the CleanAutoBackupLogs key.</li></ul> |


## Event Log

Review the basic registry keys that you may need to configure for monitoring event logs with Netwrix
Auditor. Navigate to Start → Run and type _"regedit"_.

| Registry key (REG_DWORD type)                                                                                      | Description / Value                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432NODE\Netwrix Auditor\Event Log Manager\<monitoring plan name>\Database Settings |                                                                                                                                                                                                                              |
| ConnectionTimeout                                                                                                  | Defines SQL database connection timeout (in seconds).                                                                                                                                                                        |
| BatchTimeOut                                                                                                       | Defines batch writing timeout (in seconds).                                                                                                                                                                                  |
| DeadLockErrorCount                                                                                                 | Defines the number of write attempts to a SQL database.                                                                                                                                                                      |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432NODE\Netwrix Auditor\Event Log Manager                                          |                                                                                                                                                                                                                              |
| CleanAutoBackupLogs                                                                                                | Defines the retention period for the security log backups: <ul><li>0—Backups are never deleted from Domain controllers</li><li>[X]— Backups are deleted after [X] hours</li></ul>                                            |
| ProcessBackupLogs                                                                                                  | Defines whether to process security log backups: <ul><li>0—No</li><li>1—Yes Even if this key is set to _"0"_, the security log backups will not be deleted regardless of the value of the CleanAutoBackupLogs key.</li></ul> |
| WriteAgentsToApplicationLog                                                                                        | Defines whether to write the events produced by the Netwrix Auditor Event Log Compression Service to the Application Log of a monitored machine: <ul><li>0—Disabled</li><li>1—Enabled</li></ul>                              |
| WriteToApplicationLog                                                                                              | Defines whether to write events produced by Netwrix Auditor to the Application Log of the machine where the product is installed: <ul><li>0—No</li><li>1—Yes</li></ul>                                                       |

