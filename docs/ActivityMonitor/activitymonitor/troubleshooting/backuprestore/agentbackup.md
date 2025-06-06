# Agent Backup

Follow the steps to back up the configuration, passwords, Active Directory event data file, and activity log files for Activity Monitor Agents deployed on file system servers, SharePoint servers, and domain controllers.

Configuration

__Step 1 –__ Back up the ```SBTFileMon.ini``` file. The default location is

C:\ProgramData\Netwrix\Activity Monitor\Agent\SBTFileMon.ini

The location of the ```SBTFileMon.ini``` is determined by the registry value:

HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters, value ConfigPath.

__Step 2 –__ Back up passwords

> Passwords are stored in the ```SBTFileMon.ini``` file in an encrypted form using PSAPI. They can only be decrypted on the same Windows server. To be able to restore the configuration of a different server, back up the passwords separately. This includes the following:

- Credentials for Agent
- Credentials for Monitored Hosts
- Credentials for Archive

Active Directory Event Data File

__Step 3 –__ On a domain controller, back up the ```SAMConfig.xml``` file. The default location is:

C:\Program Files (x86)\STEALTHbits\StealthINTERCEPT\SIWindowsAgent

The location of the file is determined by the registry value ```HKLM\SOFTWARE\STEALTHbits Technologies\StealthINTERCEPT Windows Agent```, value ```Installdir```. Append ```SIWindowsAgent``` to the value of ```Installdir```.

Activity Log Files

__Step 4 –__ Back up the log files stored on the local drive and on the archival network share. The default folder is

C:\ProgramData\Netwrix\Activity Monitor\Agent\ActivityLogs

__NOTE:__ Keep in mind that``` C:\ProgramData``` folder may be hidden. Navigate to it by typing ```%ALLUSERSPROFILE%``` in the File Explorer.

The location of the files depend on the configuration and whether the archiving is enabled. See the [Archiving Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/agents/properties/archiving.md) topic for additional information.

All key components necessary for data recovery have now been backed up for the agents.
