---
title: "Agent Backup"
description: "Agent Backup"
sidebar_position: 10
---

# Agent Backup

Follow the steps to back up the configuration, passwords, Active Directory event data file, and
activity log files for Activity Monitor Agents deployed on file system servers, SharePoint servers,
and domain controllers.

**Configuration**

**Step 1 –** Back up the `SBTFileMon.ini` file. The default location is

**C:\ProgramData\Netwrix\Activity Monitor\Agent\SBTFileMon.ini**

The location of the `SBTFileMon.ini` is determined by the registry value:

`HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters`, value `ConfigPath`.

**Step 2 –** Back up passwords

> Passwords are stored in the `SBTFileMon.ini` file in an encrypted form using DPAPI. They can only
> be decrypted on the same Windows server. To be able to restore the configuration of a different
> server, back up the passwords separately. This includes the following:

- Credentials for Agent
- Credentials for Monitored Hosts/Services
- Credentials for Archive

**Active Directory Event Data File**

**Step 3 –** On a domain controller, back up the `SAMConfig.xml` file. The default location is:

**C:\Program Files\Netwrix\Netwrix Threat Prevention\SIWindowsAgent**

The location of the file is determined by the registry value
`HKLM\SOFTWARE\Netwrix\Netwrix Threat Prevention`, value `Installdir`. Append
`SIWindowsAgent` to the value of `Installdir`.

**Activity Log Files**

**Step 4 –** Back up the log files stored on the local drive and on the archival network share. The
default folder is

**C:\ProgramData\Netwrix\Activity Monitor\Agent\ActivityLogs**

:::note
Keep in mind that` C:\ProgramData` folder may be hidden. Navigate to it by typing
`%ALLUSERSPROFILE%` in the File Explorer.
:::


The location of the files depend on the configuration and whether the archiving is enabled. See the
[Archiving Tab](/docs/activitymonitor/9.0/admin/agents/properties/archiving.md) topic for additional information.

All key components necessary for data recovery have now been backed up for the agents.
