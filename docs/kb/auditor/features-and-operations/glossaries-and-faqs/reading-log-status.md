---
description: >-
  If a domain controller shows "Reading log" with a yellow exclamation in the
  NetWrix Account Lockout Examiner Console, the program cannot read lockout
  events from that controller. This article explains how to reset the readLog
  registry value to resolve the issue.
keywords:
  - account lockout
  - reading log
  - readLog
  - registry
  - domain controller
  - event logs
  - NetWrix Account Lockout Examiner
  - HKLM
  - Wow6432Node
products:
  - auditor
sidebar_label: Reading log status
tags: []
title: "Reading log status"
knowledge_article_id: kA00g000000H9TZCA0
---

# Reading log status

In NetWrix Account Lockout Examiner Console, a domain controller has a yellow exclamation mark in front of the **DC Name** column of the **Monitored Domain Controllers** grid. Connection status is shown **Reading log**. Lockout events from this domain controller cannot be read by the program as well.

![User-added image]./../0-images/ka04u000000HcNK_0EM700000004x01.png)

---

## Symptom

This issue can appear either right after the NetWrix Account Lockout Examiner installation, or after the NetWrix Account Lockout Examiner Service restart. The program is referring to the event logs created earlier, before the installation or restart, and fails to complete reading the logs.

## Resolution

To fix the issue, do the following:

1. Open **Registry Editor**: navigate to Start - Run, enter `regedit` and click **OK**.
2. In the left pane, navigate to `HKLM Software[Wow6432Node]NetWrixAccount Lockout Examiner`. The step Wow6432Node is only applied to x64 OS.
3. In the right pane, double-click `readLog`, specify `0` in the Value data field and click **OK**.
4. In NetWrix Account Lockout Examiner Console main menu bar, navigate to **File - Settings** and click **OK** to apply registry changes.

![User-added image]./../0-images/ka04u000000HcNK_0EM700000004wzw.png)

