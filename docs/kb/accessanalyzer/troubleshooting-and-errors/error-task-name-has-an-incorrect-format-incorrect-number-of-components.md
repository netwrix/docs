---
description: >-
  When selecting Schedules or any Job you may see an "Error: Failed to
  initialize task" pop-up because a Windows Task Scheduler job references the
  Netwrix Auditor executable `StealthAUDIT.exe` but lacks required fields.
  Delete the failed task from Task Scheduler to resolve the error.
keywords:
  - task scheduler
  - failed to initialize task
  - task format error
  - StealthAUDIT.exe
  - Netwrix Auditor
  - Schedules
  - Job error
products:
  - access-analyzer
visibility: public
sidebar_label: 'Error: Task Name Has an Incorrect Format: Incorrec'
tags:
  - troubleshooting-and-errors
title: 'Error: Task Name Has an Incorrect Format: Incorrect Number of Components'
knowledge_article_id: kA0Qk0000002gRNKAY
---

# Error: Task Name Has an Incorrect Format: Incorrect Number of Components

## Symptom

When selecting **Schedules** or any **Job**, the following pop-up task format error message appears:

![Pop-up error message](./../0-images/ka0Qk000000Ea0P_0EMQk00000DDGST.png)

## Cause

A job exists in the Windows Task Scheduler that references the Netwrix Auditor executable `StealthAUDIT.exe` but does not have all the required fields.

## Resolution

1. Delete the failed task from the Windows Task Scheduler.

> **NOTE:** The faulting task can be identified from the following part of the pop-up error message:
>
> `Error: Failed to initialize task <Faulting Task Name>`
