---
title: "General Threats"
description: "General Threats"
sidebar_position: 40
---

# General Threats

The following threats are monitored for File System and Active Directory.

## Abnormal User Behavior

Abnormal behavior detection begins when a user has been active for a minimum of 30 days, with up to
120 days of activity used to establish the baseline behavior for a user. Behavior for all users is
evaluated every 15 minutes. If a user deviates significantly from their baseline, a threat is
created.

| Abnormal Behavior |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition        | Indicates that a user's file system or Active Directory behavior has deviated from the user's normal behavioral profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Example           | Sensitive Data Example: A user suddenly accesses far more files containing sensitive content than they normally do. Ransomware Example: New ransomware variants not represented in Threat Manager's pre-defined library will still exhibit abnormal behavior with regard to file access operations, including large volumes of updates, renames and writes. Lateral Movement Example: If a user is accessing an abnormal number of hosts and is performing file activity on a large number of resources, this could be an indicator of suspicious lateral movement. Delete Example: Upon termination, disgruntled employees sometimes delete large volumes of files to cause the organization harm.                                                                                                                             |
| Trigger           | Threat Manager analyzes the following aspects of each user’s behavior and create a threat when abnormalities are detected based on a given user's normal level of activity. File System - Number of Reads - Number of Updates - Number of Deletes - Number of Renames - Number of Permission Changes - Number of Writes - Number of Denied Events - Number of Hosts Accessed - Number of Resources - Number of Files with Sensitive Data Active Directory - Successful Kerberos authentications - Successful NTLM authentications - Failed authentications - Object changes - Object adds - Object deletes - Object renames - Distinct clients used (for AD activity) - Distinct hosts accessed (for AD activity) - LDAP objects queried Outliers are detected through unsupervised clustering of a user's historical activity. |

## First-Time Client Use

If a user accesses a share using a new client, a threat is created.

| First-Time Client Use |                                                                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition            | The First-Time Client Use threat detects when a user accesses file share data from a client they have never used to access data previously.                                                                                                                          |
| Example               | A user normally uses their own workstation to access file shares. On a given day, the user accesses files from a different workstation, indicating the user’s account may be compromised.                                                                            |
| Trigger               | Threat Manager analyzes user behavior over a learning period (e.g. 30 days) to profile which clients a user normally leverages. Once a new client is used to perform file system activity for the first time for a particular user, Threat Manager creates a threat. |

## First-Time Host Access

If a user accesses a host for the first time, a threat is created.

| First-Time Host Access |                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition             | The First-Time Host Access threat detects when a user performs file activity on a new host they haven’t accessed previously.                                                                                                                                                                                                                |
| Example                | Most users only interact with a few file servers based on their geographic location, the department they are in, etc. Over a learning period (e.g. 30 days), Threat Manager profiles which hosts a user commonly accesses data on. After the learning period, Threat Manager creates a threat if a new host is accessed for the first time. |
| Trigger                | A user accessed an open share on a new host for the first time.                                                                                                                                                                                                                                                                             |
