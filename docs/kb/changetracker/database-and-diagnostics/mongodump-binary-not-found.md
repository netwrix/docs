---
title: "How to Fix: Mongodump Binary Does Not Exist in Specified Location Error"
description: >-
  This article explains how to resolve the "Mongodump binary does not exist in
  specified location" error when exporting a database in Netwrix Change Tracker
  by adding the MongoDumpPath configuration setting.
sidebar_label: Mongodump Binary Not Found
keywords:
  - mongodump
  - MongoDB
  - MongoDumpPath
  - Change Tracker
  - export
  - configuration
  - mongodump binary
  - system settings
  - database export
  - advanced options
products:
  - change-tracker
tags:
  - kb
  - database-and-diagnostics
knowledge_article_id: ka04u000000Hd9lAAC
---

# How to Fix: Mongodump Binary Does Not Exist in Specified Location Error

## Symptom

When exporting a database in Netwrix Change Tracker, you receive the following error:

```text
Mongodump binary does not exist in specified location
```

<!-- Image removed: Screenshot of the mongodump binary error message -->

## Resolution

1. Open **Settings**.
2. In the sidebar, click **System Settings**.
3. Scroll down and click **Show Advanced Options**.
4. Scroll down until you see **Configuration Settings**.
5. In **Configuration Settings**, click **Add Config Item**.
6. In the **Description** box, type `MongoDumpPath`.
7. In the **Value** box, enter the MongoDump path. Example: `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin\mongodump.exe`

   > **NOTE:** Be sure to change the drive path depending on where you have MongoDB installed.

8. Click the **Update** button to save this information.

<!-- Image removed: Screenshot of the Configuration Settings with MongoDumpPath entry -->

<!-- Image removed: Screenshot of the completed MongoDumpPath configuration -->
