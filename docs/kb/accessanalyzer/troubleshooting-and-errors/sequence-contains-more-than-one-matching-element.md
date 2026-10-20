---
description: >-
  This article explains how to fix Sequence contains more than one matching element error.
keywords:
  - schedules
  - upgrade
  - LOGLEVEL
  - Netwrix Access Analyzer
  - error
  - console
  - '%sainstalldir%'
  - debug mode
  - troubleshooting
products:
  - access-analyzer
sidebar_label: Sequence contains more than one matching element post upgrade to 12.x
tags:
  - troubleshooting-and-errors
title: "Sequence contains more than one matching element post upgrade to 12.x"
---

# "Sequence contains more than one matching element" Error on Schedules Tab After Upgrading to Netwrix Access Analyzer 12.x

## Applies To

- **Product:** Netwrix Access Analyzer (formerly StealthAUDIT / Enterprise Auditor)
- **Versions affected:** Upgrade from 11.6 to 12.x

---

## Symptom

After upgrading Netwrix Access Analyzer (NAA) from version 11.6 to 12.x, opening the **Schedules** tab in the NAA console fails with an error similar to:

```
Failed to get tasks…
Failed to initialize task SAJOB~<JobGroupName>~<GUID>…
Error: Sequence contains more than one matching element.
```

The `<JobGroupName>` in the error message identifies which job group contains the duplicated entry (e.g., `SG_LocalAdmins`).

---

## Root Cause

NAA maps each scheduled job to a Windows Task Scheduler task using a unique Job ID embedded in the task name (format: `SAJOB~<JobGroupName>~<GUID>`). When two physical job folders on disk share the same Job ID, NAA finds more than one match for a single task — which is what "Sequence contains more than one element" means at the code level: a LINQ `.Single()` call found 2+ results instead of exactly 1.

This duplication happens in one of two ways:

### Cause 1 — Upgrade backup ZIP extracted into the Jobs folder

During an upgrade, the NAA Upgrade Wizard automatically backs up the existing Jobs directory by creating a timestamped ZIP archive directly inside the Jobs folder:

```
...\STEALTHbits\StealthAUDIT\Jobs\<YYYYMMDDHHMMSS>.zip
```

If an administrator later extracts the contents of that ZIP back into the `Jobs` folder (e.g., to recover a job), the original job folders and their IDs are restored alongside the already-upgraded copies — creating duplicates.

### Cause 2 — Job or job group folder manually copy-pasted inside the Jobs folder

An administrator backed up a job group by copying its folder and pasting the copy somewhere inside `...\STEALTHbits\StealthAUDIT\Jobs` instead of moving it to an external location or archiving it. The copied folder retains the same job definition file with the same Job ID, producing a duplicate.

---

## Resolution

### Step 1 — Identify the duplicated job

Read the error message on the Schedules tab. The second segment of the task name tells you which job group to look at:

```
SAJOB~SG_LocalAdmins~{GUID}
       ^^^^^^^^^^^^^^
       This is the job group folder name
```

### Step 2 — Locate the duplicate in the Jobs folder

Navigate to the Jobs directory on the NAA server:

```
%SAInstallDir%\Jobs\
```

The default path (unless customized during install) is:

```
C:\Program Files (x86)\STEALTHbits\StealthAUDIT\Jobs\
```

Look inside the job group folder identified in Step 1 (e.g., `SG_LocalAdmins`). You should see either:

- A second subfolder or a copy of the job group folder (e.g., `SG_LocalAdmins - Copy`, `SG_LocalAdmins_backup`)
- An extracted ZIP from the upgrade backup — recognizable by the timestamp folder name (e.g., `20230604180542`) sitting inside `Jobs\` and containing duplicate job group subfolders

### Step 3 — Remove the duplicate

1. Move the duplicate folder (the backup copy) **out** of the `Jobs` directory — compress it to a ZIP and store it outside `%SAInstallDir%\Jobs\`, or delete it if the backup is no longer needed.
2. Do **not** leave any copy of a job group folder inside `Jobs\` unless it is the live, intended version.

> **If the issue came from an extracted upgrade ZIP:** Move the entire extracted timestamp folder (e.g., `20230604180542\`) out of `Jobs\`. The upgrade ZIP itself (`.zip` file) can remain; only extracted folder copies cause the conflict.

### Step 4 — Verify

Restart the NAA console and open the **Schedules** tab. The error should no longer appear and all scheduled tasks should load correctly.

---

## Prevention

- **Never extract the upgrade backup ZIP into the `Jobs` folder.** If you need to recover an old job definition, extract the ZIP to a temporary folder outside the NAA install directory, then manually copy only the specific job file you need.
- **Never copy-paste a job or job group folder inside `%SAInstallDir%\Jobs\` as a backup.** Instead, copy the folder to a location outside the `Jobs` directory, or compress it to an archive stored elsewhere.

---

## References

- [Enterprise Auditor Core Upgrade Instructions (v11.6) — Netwrix Docs](https://docs.netwrix.com/docs/accessanalyzer/11_6/install/application/upgrade/wizard)
- [Netwrix Access Analyzer v12.0 Documentation](https://docs.netwrix.com/docs/accessanalyzer/12_0)
