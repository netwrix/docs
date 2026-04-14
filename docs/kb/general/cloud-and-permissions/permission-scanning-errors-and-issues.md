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

1. If some shares or subfolders on a NetApp server return access denied errors, add exclusions for those shares and rerun the scan to determine whether the issue persists.

2. If the FSAA proxies are installed in a different directory from the one originally scanned, this can cause storage issues with the tier 2 data compression process. Uninstall the proxies and reinstall them on the designated drives with sufficient space. Add folder and share exclusions for any shares causing access denied errors in the FSAA scans.

3. If a scheduled FSAA task starts a secondary scan while the initial scan is still running, the scheduled task may have timed out and triggered a second instance. In the query properties for the FSAA scan, disable the restart option so the scan continues from where it left off. Restart the scan and monitor it.

4. If the FSAA system scan hangs on a specific network share, allow the scan to complete past that share and monitor the job. If the scan hangs again, generate a process dump on the FSAA proxy host using the steps in [this documentation](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000InUCAU.html).
