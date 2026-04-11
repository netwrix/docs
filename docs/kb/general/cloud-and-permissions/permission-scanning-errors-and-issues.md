---
description: >-
  Describes causes and resolutions for permission scanning errors and issues
  with FSAA system scans, including network share access denied, proxy
  installation directory issues, scheduled task conflicts, and suggested
  mitigations.
keywords:
  - FSAA
  - permission scanning
  - network share
  - NetApp
  - access denied
  - proxy
  - scheduled task
  - bulk import
products:
  - general
sidebar_label: Permission scanning errors and issues
tags:
  - cloud-and-permissions
title: "Permission scanning errors and issues"
knowledge_article_id: kA0Qk0000001Q25KAE
---

# Permission scanning errors and issues

## Issue

Permission scanning errors and issues with File System Access Audit (FSAA) System Scans.

## Cause

A network share caused the FSAA system scan to run for extended periods before aborting. With this issue present, Bulk Imports went on hold until the scan completed.

## Resolution

1. Discovered that shares weren't accessible due to an access denied error for some shares/subfolders existing on a NetApp server. We determined that having another meeting after running the scan additional exclusions for share is needed for further investigation.

2. We discovered that the FSAA proxies were in a different directory from the one originally scanned. This may have caused a storage issue with the tier 2 data compression process. We uninstalled the proxies and installed them on the designated drives with an increased amount of space. Additionally, we included folder and share exclusions for a problematic share prompting access denied within the FSAA scans.

3. We discovered that the scheduled FSAA task started a secondary scan after the initial scan started. We then investigated job logs and discovered that the scheduled task timed out and then the secondary task was initiated. We then made changes to the query properties of the FSAA scan not to restart and continue where the scan left off. We then restarted the scan and suggested monitoring the scan after changes were made.

4. We discovered that the FSAA system scan progressed past the network share that was causing it to hang. Allow the scan to run again and monitor the job. If the FSAA system scan hangs again, generate a process dump on the FSAA proxy host using the steps in the following documentation:

https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000InUCAU.html
