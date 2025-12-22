---
description: >-
  Explains how to resolve the "Access to the path ... is denied" error when
  Netwrix Auditor cannot upload state-in-time sessions to the Long-Term Archive
  by correcting service account permissions.
keywords:
  - Long-Term Archive
  - LTA
  - state-in-time
  - Health Log
  - permissions
  - Netwrix Auditor
  - Short-Term Archive
  - service account
products:
  - auditor
sidebar_label: Unable to Upload Session to Long-Term Archive − Ac
tags: []
title: "Unable to Upload Session to Long-Term Archive − Access to State-in-Time Folder Is Denied"
knowledge_article_id: kA0Qk0000000LSfKAM
---

# Unable to Upload Session to Long-Term Archive − Access to State-in-Time Folder Is Denied

## Symptom

The following error is prompted in **Health Log** for one of or multiple monitoring plans in Netwrix Auditor:

```
Description: Monitoring plan: %monitoring_plan% 
The following error has occurred: 
While processing the state-in-time data, Netwrix Auditor was unable to upload the session to the Long-Term Archive:
Access to the path '%Long-Term_Archive%\%monitoring_plan_SiT_folder%' is denied.
```

## Cause

Misconfigured permissions for the Long-Term Archive (LTA) service account.

## Resolution

NOTE: You can establish the affected Long-Term Archive service account by following **Settings** > **Long-Term Archive** tab > **Modify** under the **Long-Term Archive** section.

1. Allow **Full Control** permissions to the Long-Term Archive service account for the following 2 folders:

   - Long-term Archive − you can establish the location by following **Settings** > **Long-Term Archive** > **Write audit data to**. The default location is ` %PROGRAMDATA%\Netwrix Auditor\Data`.
   - Short-Term Archive − you can establish the location by following **Health Status** > **Open diagnostic logs folder** under **Working folder** > parent folder of the **Logs** folder. The default location is `C:\ProgramData\Netwrix Auditor\ShortTerm`.

   NOTE: Alternatively, you can run the following line in Command Prompt in your Netwrix Auditor server to get the value of the `DataPathOverride` subkey entry. The output will contain the location of Short-Term Archive in your Netwrix Auditor server:

   ```powershell
   reg query "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride"
   ```

2. Grant the Long-Term Archive service account Local Administrators permissions in the Netwrix Auditor server.
