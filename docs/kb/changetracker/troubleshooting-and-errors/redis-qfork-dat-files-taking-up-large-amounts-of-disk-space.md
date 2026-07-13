---
description: >-
  Explaining what Redis QFork.dat files are, where they are stored for
  Netwrix Change Tracker, and when it is safe to delete them to recover
  disk space.
keywords:
  - Redis
  - QFork.dat
  - disk space
  - memory mapped file
  - snapshot
  - Windows
  - NetworkService
  - AppData
  - Redis service
  - disk space recovery
  - Redis Windows fork
products:
  - change-tracker
sidebar_label: Redis QFork.dat Disk Space
tags:
  - kb
  - troubleshooting-and-errors
title: Redis QFork.dat Files Taking Up Large Amounts of Disk Space
knowledge_article_id: ""
---

# Redis QFork.dat Files Taking Up Large Amounts of Disk Space

## Symptom

The server hosting the Netwrix Change Tracker web console is running low on disk space. Scanning the server's disks reveals that Redis QFork.dat files are consuming significant storage.

These files are normally stored in the following directory:

```text
C:\Windows\ServiceProfiles\NetworkService\AppData\Local\Redis
```

## Cause

Redis uses the fork UNIX system API to create a point-in-time snapshot of the data store on disk. Windows does not have a fork-like API, so Redis simulates this behavior by placing the Redis heap in a memory mapped file that a child (quasi-forked) process can access. By default, the size of each snapshot file equals the size of the device's physical memory.

## Resolution

**It is safe to delete these files**, as long as the Redis service is not running. Stop the Redis service before deleting the QFork.dat files, then restart the service.
