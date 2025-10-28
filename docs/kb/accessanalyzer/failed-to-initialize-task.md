---
description: >
  When accessing the Scheduled Actions section in Netwrix Access Analyzer, the console may fail to load with the error "Sequence contains more than one matching element." This occurs when duplicate job files exist in the Jobs directory. Learn how to identify and resolve this error.
keywords:
  - Netwrix Access Analyzer
  - NAA
  - Scheduled Actions
  - SAJOB error
  - duplicate job file
  - jobs directory
  - task initialization
  - failed to get tasks
  - console error
  - backup job conflict
products:
  - access-analyzer
sidebar_label: 'Error: Failed to Initialize Task SAJOB – Sequence Conflict'
title: 'Error: Failed to Initialize Task SAJOB – Sequence Contains More Than One Matching Element'
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Error: Failed to Initialize Task SAJOB – Sequence Contains More Than One Matching Element

## Related Queries

- “Netwrix Access Analyzer Scheduled Actions not loading”
- “Failed to initialize task SAJOB… sequence contains more than one matching element”
- “Duplicate job name causing console error”
- “NAA job loading issue”

## Symptom

When accessing the **Scheduled Actions** section in **Netwrix Access Analyzer (NAA)**, the following error appears:

```text
Failed to get tasks. Error: Failed to initialize task SAJOB~JobName~{GUID}.job.
Error: Sequence contains more than one matching element
```

## Cause

Netwrix Access Analyzer scans the entire `Jobs` directory—including all subfolders—for job files. Each job must be uniquely identified by the system.

This error occurs when **multiple copies of the same job file** exist within the `Jobs` directory tree, often because someone copied job folders into a subfolder such as `Backup` for safekeeping.

Renaming the folder (for example, `BU_Backup`) does **not** resolve the issue. All subfolders under `Jobs` are scanned.

> Copying jobs between valid group folders is supported. For example:
> - `1-FSAA_SystemScan`
> - `1-FSAA_SystemScan1`
>
> These are fine because they are treated as separate jobs.

## Resolution

### Step 1: Search for Duplicate Job Names

1. Open **File Explorer**.
2. Navigate to `%SAInstall%\Jobs`.
3. Use the **Search** bar to search for the job name listed in the error (for example, `AD Users`).
4. Look for the **same job name appearing in more than one folder**, especially in folders such as `Backup`, `Archive`, or other custom subfolders inside `Jobs`.

> If the same job appears in multiple locations with the **exact same name**, that is likely the cause of the conflict.

### Step 2: Remove or Move the Extra Copy

- **Move any backup copies** outside of the `Jobs` directory (for example, to `C:\JobBackups`).
- Or, if no longer needed, **delete the duplicate copy**.

### Step 3: Relaunch the Console

After cleaning up the duplicates:

- Restart **Netwrix Access Analyzer**.
- The **Scheduled Actions** view should now load without errors.

## Best Practice

> **Do not store backup jobs inside the `Jobs` directory.** Always move backups to a folder outside of it (for example, `C:\JobBackups`) to avoid conflicts.
