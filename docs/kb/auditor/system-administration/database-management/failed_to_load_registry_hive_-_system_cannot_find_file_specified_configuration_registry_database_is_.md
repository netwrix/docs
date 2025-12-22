---
description: >-
  This article addresses the warning messages related to loading user registry hives in the Netwrix Auditor, detailing the symptoms, causes, and resolutions for the errors encountered.
keywords:
  - registry hive
  - Netwrix Auditor
  - user profile
  - error resolution
  - configuration database
sidebar_label: Failed to Load Registry Hive
tags: []
title: "Failed to Load Registry Hive − System Cannot Find File Specified | Configuration Registry Database Is Corrupt"
knowledge_article_id: kA00g000000H9brCAC
products:
  - auditor
---

# Failed to Load Registry Hive − System Cannot Find File Specified | Configuration Registry Database Is Corrupt

## Symptom

Each data collection returns the following warning:

```
<timestamp>: <server>:
The Add/Remove Software data provider failed to load the user <domain/user> registry hive on computer <server> due to the following error:
The system cannot find the file specified.
```

Alternatively, the following error can be prompted in the Health Log:

```
The Add/Remove Software data provider failed to load the user <domain/user> registry hive on computer <server> due to the following error:
The configuration registry database is corrupt.
```

## Cause

The registry hive `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` contains user profile records with **ProfileImagePath&** value missing.

## Resolution

The error can be resolved by performing one of the following steps:

1. Check for deleted or disabled accounts SIDs in the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` hive without **ProfileImagePath** value to delete them.
2. Add **ProfileImagePath** value (Expandable String Value) with an empty value to the profiles with the value missing.
3. Check the affected server for unknown user profiles by accessing **Control Panel** > **System** > **Advanced system settings** > **Advanced** tab > **Settings** button under the **User Profiles** section to delete them.
4. Ask the remaining users to log in to the system — a user affected by a faulty `NTUSER.DAT` won't be able to log in.
5. In case collection is not affected (e.g., the user does not appear in the registry), you can omit the error. Add the `%*,*,*Remove Software data provider failed to load the user *domain\user*%` line to the Windows Server Auditing **omiterror** list. Refer to the following article for additional information on omit lists: [How to Use Omit Lists](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-use-omit-lists).

Once the changes are introduced, reboot the target server.

### Related Articles

[How to Use Omit Lists](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-use-omit-lists)