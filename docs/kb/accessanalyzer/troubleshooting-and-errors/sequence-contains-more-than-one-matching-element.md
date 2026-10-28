---
description: >-
  Opening the Schedules tab in Netwrix Access Analyzer 12.x fails with "Sequence contains more than one matching element" after an upgrade from 11.6. Remove the duplicated job folder from the Jobs directory to resolve it.
keywords:
  - Sequence contains more than one matching element
  - Schedules tab
  - SAJOB
  - duplicate job
  - upgrade
  - Netwrix Access Analyzer
  - Jobs folder
  - '%sainstalldir%'
  - upgrade backup ZIP
  - troubleshooting
products:
  - accessanalyzer
sidebar_label: 'Schedules Tab Error: Sequence Contains More Than One Matching Element'
tags:
  - kb
  - troubleshooting-and-errors
title: "Sequence Contains More Than One Matching Element Error on Schedules Tab After Upgrading to 12.x"
---

# Sequence Contains More Than One Matching Element Error on Schedules Tab After Upgrading to 12.x

## Applies To

- **Product:** Netwrix Access Analyzer (formerly Enterprise Auditor)
- **Versions affected:** Upgrade from 11.6 to 12.x. For product documentation, see [Netwrix Access Analyzer 12.0](/docs/accessanalyzer/12_0).

> **NOTE:** [Cause 2](#cause-2--job-or-job-group-folder-manually-copy-pasted-inside-the-jobs-folder) does not depend on an upgrade. The error can also occur on 12.0 without an upgrade from 11.6 if a job folder is copied into the Jobs directory.

---

## Symptom

After upgrading Netwrix Access Analyzer from version 11.6 to 12.x, opening the **Schedules** tab in the Access Analyzer console fails with an error similar to:

```
Failed to get tasks…
Failed to initialize task SAJOB~<JobGroupName>~<GUID>…
Error: Sequence contains more than one matching element.
```

The `<JobGroupName>` in the error message identifies which job group contains the duplicated entry (e.g., `SG_LocalAdmins`).

> **NOTE:** The same error text also appears when a job generates a report. For that cause, see [Report Generation Error: Sequence Contains More Than One Matching Element](./error-sequence-contains-more-than-one-matching-element.md).

## Root Cause

Access Analyzer maps each scheduled job to a Windows Task Scheduler task using a unique Job ID embedded in the task name (format: `SAJOB~<JobGroupName>~<GUID>`). When two physical job folders on disk share the same Job ID, Access Analyzer finds more than one match for a single task. At the code level, a Language-Integrated Query (LINQ) `.Single()` call found 2+ results instead of exactly 1, which produces the `Sequence contains more than one matching element` error.

This duplication happens in one of two ways:

### Cause 1 — Upgrade Backup ZIP Extracted into the Jobs Folder

During an upgrade, the [Upgrade Wizard](/docs/accessanalyzer/11_6/install/application/upgrade/wizard) automatically backs up the existing Jobs directory by creating a timestamped ZIP archive directly inside the Jobs folder:

```
...\STEALTHbits\StealthAUDIT\Jobs\<YYYYMMDDHHMMSS>.zip
```

If an administrator later extracts the contents of that ZIP back into the `Jobs` folder (e.g., to recover a job), the original job folders and their IDs are restored alongside the already-upgraded copies, which creates duplicates.

### Cause 2 — Job or Job Group Folder Manually Copy-Pasted inside the Jobs Folder

An administrator backed up a job group by copying its folder and pasting the copy somewhere inside `...\STEALTHbits\StealthAUDIT\Jobs` instead of moving it to an external location or archiving it. Copying a job within the Jobs directory is not supported (see [Instantiating Jobs into the Jobs Tree](/docs/accessanalyzer/12_0/admin/jobs/instantiate)). The copied folder retains the same job definition file with the same Job ID, producing a duplicate.

## Resolution

### Step 1 — Identify the Duplicated Job

Find the task name in the error message on the **Schedules** tab. The second segment is the job group folder name and is located between the `~~` characters. For example, in `SAJOB~SG_LocalAdmins~<GUID>`, the job group folder is `SG_LocalAdmins`.

### Step 2 — Locate the Duplicate in the Jobs Folder

Navigate to the Jobs directory on the Access Analyzer server:

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

### Step 3 — Remove the Duplicate

1. Close the Access Analyzer console.
2. Move the duplicate folder (the backup copy) **out** of the `Jobs` directory by doing one of the following:

   - Compress it to a ZIP and store it outside `%SAInstallDir%\Jobs\`.
   - Delete it if the backup is no longer needed.

   If the duplicate came from an extracted upgrade ZIP, move the entire extracted timestamp folder (e.g., `20230604180542\`). The upgrade ZIP file itself can remain, because only extracted folder copies cause the conflict. Renaming the `GROUP_` or `JOB_` prefix on the duplicate only hides it from the Jobs tree and does not resolve the error.
3. Do not leave any copy of a job group folder inside `Jobs\` unless it is the live, intended version.

> **IMPORTANT:** To prevent the error from recurring, do not extract the upgrade backup ZIP into `%SAInstallDir%\Jobs\`. To recover a job, extract the ZIP outside the install directory and copy only the job file you need. To back up a job group, store the copy outside the `Jobs` directory.

### Step 4 — Verify

Open the Access Analyzer console and then the **Schedules** tab. The error should no longer appear and all scheduled tasks should load correctly.

## Related Links

- [Enterprise Auditor Core Upgrade Instructions (v11.6)](/docs/accessanalyzer/11_6/install/application/upgrade/wizard)
- [Netwrix Access Analyzer v12.0 Documentation](/docs/accessanalyzer/12_0)
- [Instantiating Jobs into the Jobs Tree](/docs/accessanalyzer/12_0/admin/jobs/instantiate)
- [Report Generation Error: Sequence Contains More Than One Matching Element](./error-sequence-contains-more-than-one-matching-element.md)
