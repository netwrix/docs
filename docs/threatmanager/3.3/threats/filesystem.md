---
title: "File System Threats"
description: "File System Threats"
sidebar_position: 30
---

# File System Threats

The following threats are monitored for File System:

## High Risk Permissions

High Risk Permissions are those which grant unrestricted access to a file or folder. When someone
adds or increases high risk permissions on a folder or file, Threat Manager creates a threat.

| High Risk Permissions |                                                                                                                                                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition            | The High Risk Permissions threat creates a threat when someone adds a high risk trustee (Domain Users, Anonymous Logon, Authenticated Users, and Everyone) to the ACL on a folder or file. These permissions are high risk because they grant unrestricted access to a resource. |
| Example               | An administrator gives Domain Users Read access to a folder. An administrator gives Everyone Full Control on a folder that already had Domain Users with Read Access.                                                                                                        |
| Trigger               | Threat Manager creates a threat when a user adds a high risk trustee (see Definition) to a folder or file, which increases the amount of open access. Threat Manager updates this threat with the total number of folders or files affected due to the inherited permissions. |

## NTDS.dit File Access

Threat Manager detects unauthorized file system interaction with the NTDS.dit file stored on Active
Directory Domain Controllers as a threat.

| NTDS.dit File Access |                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition           | By accessing the NTDS.dit file, Active Directory's database, an attacker can extract a copy of every user's password hash and subsequently act as any user in the domain. Threat Manager audits all activity related to the NTDS file and VSS copy to notify when an attacker could be accessing the information for an offline attack. |
| Trigger              | Perform File or VSS activity against the NTDS.DIT file.                                                                                                                                                                                                                                                                                 |

## Ransomware

When a user creates or renames at least 100 files with a known ransomware extension or a name that
resembles common ransom notes, Threat Manager creates a threat for each rename action.

| Ransomware |                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Definition | Detects file activity that involves a file with a known ransomware extension or a file with a name that resembles common ransom notes.  |
| Example    | A user created a ".locky" file, and created and renamed more than 100 files with common ransomware extensions.                          |
| Trigger    | Using a pre-defined library of known ransomware extensions, Threat Manager alerts on file create/rename activity with known extensions. |

## Unusual Processes

If a user runs a process on a monitored server for the first time, Threat Manager creates a threat.

| Unusual Processes |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition        | The Unusual Processes threat detects when previously unseen processes launch on critical file servers.                                                                                                                                                                                                                                                                                                                                                      |
| Example           | A user launches a "python.exe" process that no one else in the environment has launched.                                                                                                                                                                                                                                                                                                                                                                    |
| Trigger           | Threat Manager records the name of the processes associated with file access activities. Over a learning period (e.g. 30 days), Threat Manager profiles which processes are normal by aggregating data across all file servers. After that, if Threat Manager identifies a new process that it has not seen on any other file servers, it creates a threat. NOTE: This threat is only applicable on Windows file servers when the activity occurs locally. |
