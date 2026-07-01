---
description: >-
  Explains the Rolling-Log error where ItemStoragePipeline cannot collect a
  file's SHA256 hash because the file is missing, and provides guidance and
  troubleshooting steps for Netwrix Change Tracker.
keywords:
  - ItemStoragePipeline
  - file hash
  - SHA256
  - file not found
  - rolling log
  - Netwrix Change Tracker
  - agent
  - configuration template
  - file tracking
  - troubleshooting
  - error processing item
  - permissions
knowledge_article_id: ka04u000000Hd9mAAC
products:
  - change-tracker
sidebar_label: FileHash SHA256 File Not Found Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "ItemStoragePipeline - Error Processing Item, Couldn't
  Collect FileHashSHA256 for File - Could Not Find File"
---

This article explains the `ItemStoragePipeline - Error processing item, couldn't collect filehashsha256` error in the Netwrix Change Tracker agent Rolling Log and when it is safe to ignore.

## Symptom

The following error appears in the agent Rolling Log:

```text
2017-10-11 08:11:18,385 [4] ERROR ItemStoragePipeline - Error processing item, couldn't collect filehashsha256 for file: /etc/rc6.d/K05dsmcad Error: Failed to collect data for attribute (Could not find file "/etc/rc6.d/K05dsmcad")
```

## Explanation

This error occurs when a configuration template in Netwrix Change Tracker is set to track a file and the agent cannot compute the SHA256 hash because the file is not found on the monitored device.

## Resolution

### If the file does not exist on the device

If you are receiving this error for a file that does not exist on the device, it is safe to ignore. If you are using one template to track multiple agents and some agents have the file while others do not, it is not a problem to let the template continue tracking this file.

> **NOTE:** The only caution is the number of files the template is looking for. If the template grows significantly, having a large volume of these errors may cause performance issues. However, in most cases, it is perfectly fine.

### If the file should exist

If you are positive the file exists but are still getting this error, check the following:

1. **Check your configuration template.** Is it looking for the file in the same location where the file is stored?
2. **Is this a file that is in different locations on different servers?** If so, define all of the potential locations in the template.
3. **Does this file have special permissions** that do not allow it to be read by the agent? If so, adjust the file permissions, or adjust the privileges of the account the agent uses.
