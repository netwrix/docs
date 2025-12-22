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

Permission scanning errors and issues with FSAA System Scans.

## Cause

A network share caused the FSAA system scan to run for extended periods before ultimately aborting the scan. with this issue present the Bulk Imports were put on hold until the scan could complete. 

## Resolution

1. Discovered that shares weren't accessible due to an access denied error for some shares/subfolders existing on a NetApp server. We determined that having another meeting after running the scan additional exclusions for share is needed for further investigation.

2. We discovered that the FSAA proxies were installed in a different directory than what originally was scanned. This may have caused a storage issue with the tier 2 data compression process. We uninstalled the proxies and installed them on the designated drives with an increased amount of space. Additionally, we included folder and share exclusions for a problematic share prompting access denied within the FSAA scans.

3. We discovered that the scheduled FSAA task started a secondary scan after the initial scan started. We then investigated job logs and discovered that the scheduled task timed out and then the secondary task was initiated. We then made changes to the query properties of the FSAA scan not to restart and continue where the scan left off. We then restarted the scan and suggested monitoring the scan after changes were made.

4. We discovered that the FSAA system scan was able to progress past the network share that was causing it to previously hang. We suggested allowing for the scan to run again, monitor the job and if you experience a hang time with the FSAA system scan again please generate a process dump on the FSAA proxy host using the steps provided in the documentation below.

https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000InUCAU.html
