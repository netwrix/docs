---
title: "MongoDB Log Fix: Out of Memory"
description: >-
  Explains how to resolve MongoDB "out of memory" errors by configuring Windows
  virtual memory (page file) to System managed so the Netwrix Change Tracker
  database and Hub Server can function properly.
sidebar_label: "MongoDB Out of Memory"
keywords:
  - MongoDB
  - out of memory
  - virtual memory
  - page file
  - Netwrix Change Tracker
  - SYSDM.CPL
  - Windows performance
  - database crash
  - Hub Server
  - system managed
products:
  - change-tracker
tags:
  - kb
  - database-and-diagnostics
knowledge_article_id: ka04u000000QmjwAAC
---

# MongoDB Log Fix: Out of Memory

## Symptom

The MongoDB service crashes with an out of memory error. An example log entry:

```text
2017-10-27T10:23:48.348-0400 F - [conn3080] out of memory.
```

## Cause

The MongoDB service crashed because the system ran out of physical and virtual memory. Typically, this is due to misconfigured Page File settings.

## Resolution

If you are receiving this error, the Netwrix Change Tracker database and Hub Server are NOT functioning. This is a critical error and monitoring cannot continue until it is resolved. To resolve this error:

1. Open **Run** by pressing the `Windows+R` keys on your keyboard.
2. Type `SYSDM.CPL` and press **Enter**.
3. This opens **Advanced System Settings**. Click on the **Advanced** tab.
4. Under Performance, click **Settings...**.
5. In the Performance Options menu, click the **Advanced** tab.
6. Under Virtual Memory, click **Change**.
7. Verify that Virtual Memory is set to **System managed**.

   <!-- Image removed: Screenshot of the Virtual Memory dialog showing System managed size option -->

8. If it is not set to **System managed**, configure it by selecting the **System managed size** radio button.
9. Click **OK**.
10. In some scenarios, it may be best to reboot the server.

> **NOTE:** MongoDB reserves as much memory as it can and stores queries in the page file for quick access. When the page file is not set to system managed, it can hit its size limit and crash MongoDB. System managed sizing lets Windows expand the page file as needed.
