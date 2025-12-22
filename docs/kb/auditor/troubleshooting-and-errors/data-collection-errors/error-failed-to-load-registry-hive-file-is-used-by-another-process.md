---
description: >-
  This article explains why the registry hive load fails with "The process
  cannot access the file because it is being used by another process" during
  Netwrix Auditor data collection and provides step-by-step resolutions,
  including antivirus exclusions and registry/profile fixes.
keywords:
  - registry hive
  - ntuser.dat
  - ProfileList
  - SID
  - antivirus exclusions
  - Netwrix Auditor
  - registry permissions
  - .bak
  - ProfileImagePath
products:
  - auditor
sidebar_label: 'Error: Failed to Load Registry Hive—File Is Used b'
tags: []
title: 'Error: Failed to Load Registry Hive—File Is Used by Another Process'
knowledge_article_id: kA00g000000H9ahCAC
---

# Error: Failed to Load Registry Hive—File Is Used by Another Process

## Symptoms

The following warning appears during each data collection in the Netwrix Auditor Health Log:

```
%timestamp%: %server%:
The Add/Remove Software data provider failed to load the user %SID%.bak registry hive on the computer %server% due to the following error:
The process cannot access the file because it is being used by another process.
```

```
%timestamp%: %server%:
The Add/Remove Software data provider failed to load the user %domain\\user% registry hive on the computer %server% due to the following error:
The process cannot access the %PATH%\ntuser.dat file because it is being used by another process.
```

## Causes

This issue may be caused by one or more of the following factors:

- A third-party service uses the registry when the user profile is loaded.
- The affected user account is used by services that integrate with an existing application during the user logon/logoff process.
- Antivirus exclusions are incorrectly configured.
- The registry hive or profile list has become corrupt.

## Resolutions

Apply one or more of the following solutions to resolve this error:

- Configure antivirus exclusions in your Netwrix Auditor environment. For details, see the following article: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)

- Follow these steps if excluding Auditor-related folders did not resolve the issue:

  1. Review the registry permissions for the affected SID and compare them to an unaffected SID on the same server. The default permissions are **Admin**, **Users**, **Owner (special)**, and **System**—ensure both SIDs have the correct permissions and make adjustments if necessary. Refer to steps 1 and 2 below to verify the permissions.

     1. Review the list of users in `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\`.

     2. Right-click the target user and click **Permissions**.

  2. Check the **ProfileImagePath** for both SIDs (e.g., `SID-2143` and `SID-2143.bak`). This will display the profile path and username. In `SID-2143.bak`, the username is specified as `%Username%.%domain_name%`. Verify the path in `SID-2143`.

  3. Verify the folder in the **ProfileImagePath** to confirm the unaffected user SID.

  4. Once confirmed, rename the affected SID to `SID.tmp`.

     > IMPORTANT: Ensure the unaffected SID does not have any extension.

  5. Log off and log back in to the same server as the affected user to verify that the error is resolved.

- Follow these steps if the issue remains unresolved:

  1. Log in to the server as **administrator** via **Remote Desktop Connection**.

  2. In **Registry Editor**, navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList`.

  3. Select the affected `.bak` SID, and navigate to `C:\Users\%affected_username%` specified in **ProfileImagePath**. Note the original profile name, which should contain the affected SID’s settings.

  4. In **Registry Editor**, manually edit the `.bak` SID profile location specified in **ProfileImagePath**. It should reflect the **ProfileImagePath** value for the original unaffected SID.

  5. Save the changes.

- Alternatively, you can delete the affected profile.

## Related Article

- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
