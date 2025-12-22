---
description: >-
  Shows how to configure Netwrix Auditor User Activity to start recording when a
  specific program is launched or when any program is launched except specified
  ones. Explains how to find the application description and how to enter the
  application name and window title patterns.
keywords:
  - program execution
  - recording session
  - user activity
  - application monitoring
  - Netwrix Auditor
  - Task Manager
  - window title
  - application description
  - Notepad
products:
  - auditor
sidebar_label: How to Configure User Activity to Trigger a Record
tags: []
title: "How to Configure User Activity to Trigger a Recording Session on Program Execution"
knowledge_article_id: kA00g000000H9WTCA0
---

# How to Configure User Activity to Trigger a Recording Session on Program Execution

How to configure User Activity to start recording when a particular program is launched?

## Options

Netwrix Auditor for User Activity offers three options:
1. Record when any application is run.
2. Record when a specific application is run.
3. Record when any application is run except the ones specified.

This article addresses #2 and #3 specifically, as the way in which the application names are entered is the same for both. Note: It is required that the program has a window with a title. For example, programs executed via command line without a GUI would not apply.

## Find the application description

There are two ways to find the application description:

1. Launch the application you want to monitor and start **Task Manager**. In the Task Manager dialog, open the **Processes** tab and look for the application description in the **Description** column.
2. Locate the executable file for the application you want to monitor, right-click it and select **Properties**. In the **Properties** dialog, switch to the **Details** tab and look for the application description in the **File Description** field.

## Notes

- Although the video recording will only start when a particular application is opened, it still records the entire screen.
- **Example:** If you want to configure recording each time Notepad is opened, use `Notepad` as the **Application Description** and for the **Window Title** you can use something like `*Notepad*` because the word "Notepad" is always in the window title regardless of the name of the document open."
