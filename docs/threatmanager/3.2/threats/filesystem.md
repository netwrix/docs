---
title: "File System Threats"
description: "File System Threats"
sidebar_position: 30
---

# File System Threats

The following threats are monitored for File System:

## High Risk Permissions

High Risk Permissions are those which grant unrestricted access to a file or folder. When high risk
permissions are added or increased on a folder or file, a threat is created.

| High Risk Permissions |                                                                                                                                                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition            | The High Risk Permissions threat creates a threat when a high risk trustee (Domain Users, Anonymous Logon, Authenticated Users, and Everyone) is added to the ACL on a folder or file. These permissions are high risk because they grant unrestricted access to a resource. |
| Example               | Domain Users are given Read access to a folder. Everyone is given Full Control on a folder which already had Domain Users with Read Access.                                                                                                                                  |
| Trigger               | A threat is created when a user adds a high risk trustee (defined above) to a folder or file, which increases the amount of open access. This threat is updated with the total number of folders or files affected due to the inherited permissions.                         |

## NTDS.dit File Access

Unauthorized file system interaction with the NTDS.dit file stored on Active Directory Domain
Controllers will be detected as a threat.

| NTDS.dit File Access |                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition           | By accessing the NTDS.dit file, Active Directory's database, an attacker can extract a copy of every user's password hash and subsequently act as any user in the domain. Threat Manager audits all activity related to the NTDS file and VSS copy to notify when an attacker could be accessing the information for an offline attack. |
| Trigger              | Perform File or VSS activity against the NTDS.DIT file.                                                                                                                                                                                                                                                                                 |

## Ransomware

When a user creates or renames at least 100 files with a known ransomware extension or a name that
resembles common ransom notes, a threat is created for each rename action.

| Ransomware |                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Definition | Detects file activity that involves a file with a known ransomware extension or a file with a name that resembles common ransom notes.  |
| Example    | A user created a ".locky" file, and created and renamed more than 100 files with common ransomware extensions.                          |
| Trigger    | Using a pre-defined library of known ransomware extensions, Threat Manager alerts on file create/rename activity with known extensions. |

## Unusual Processes

If a user runs a process on a monitored server for the first time, a threat is created.

| Unusual Processes |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition        | The Unusual Processes threat detects if previously unseen processes are launched on critical file servers.                                                                                                                                                                                                                                                                                                                                                  |
| Example           | A user launches a "python.exe" process that has never been launched by anyone else in the environment.                                                                                                                                                                                                                                                                                                                                                      |
| Trigger           | Threat Manager records the name of the processes associated with file access activities. Over a learning period (e.g. 30 days), Threat Manager profiles which processes are normal by aggregating data across all file servers. After that, if a new process is identified that has not been seen on any other file servers, a threat will be created. NOTE: This threat is only applicable on Windows file servers when the activity is performed locally. |
