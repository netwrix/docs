---
description: >-
  Explains the "FileContentTrackerDataCollectorLocal - couldn't locate File
  entry" rolling-log message in Netwrix Change Tracker, when it is safe to
  ignore, and how to troubleshoot if the file should exist.
keywords:
  - FileContentTrackerDataCollectorLocal
  - rolling log
  - file tracking
  - file not found
  - Netwrix Change Tracker
  - agent
  - policy template
  - content tracking
  - yum.conf
  - troubleshooting
  - file entry
  - permissions
knowledge_article_id: ka04u000000Hd9NAAS
products:
  - change-tracker
sidebar_label: File Entry Not Found Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "FileContentTrackerDataCollectorLocal - Couldn't Locate
  File Entry for /mydirectory/my.file"
---

This article explains the `FileContentTrackerDataCollectorLocal - couldn't locate File entry` message in the Netwrix Change Tracker agent Rolling Log and when it is safe to ignore.

## Symptom

The following error appears in the agent Rolling Log:

```text
2017-10-02 07:42:42,082 [5] ERROR FileContentTrackerDataCollectorLocal - couldn't locate File entry for /etc/yum.conf
```

## Cause

This error occurs when a policy template in Netwrix Change Tracker is set to track file contents for a specific file, but the agent cannot locate that file on the monitored device.

## Resolution

### If the file does not exist on the device

If you are receiving this error for a file that does not exist on the device, it is safe to ignore. If you are using one template to track multiple agents and some agents have the file while others do not, it is not a problem to let the template continue tracking this file.

> **NOTE:** The only caution is the number of files the template is looking for. If the template grows significantly, having a large volume of these errors may cause performance issues. However, in most cases, it is perfectly fine.

### If the file should exist

If the file exists but the error still appears, verify the following:

1. Verify the policy template is looking for the file in the correct location.
2. If the file is stored in different locations on different servers, define all potential locations in the template.
3. Check whether the file has special permissions that prevent the agent from reading it. If so, adjust the file permissions or the privileges of the account the agent uses.
