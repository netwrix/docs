---
description: >-
  Explains the cause and resolution for the "Indexer service has been improperly
  shutdown." warning in Netwrix Data Classification, including steps to inspect
  lock archive files and Windows Application logs to identify the root cause.
keywords:
  - indexer
  - lock archive
  - Netwrix Data Classification
  - indexer service
  - shutdown
  - warning
  - lock files
  - troubleshooting
products:
  - data-classification
sidebar_label: 'Warning: Indexer Service Has Been Improperly Shutd'
tags: []
title: 'Warning: Indexer Service Has Been Improperly Shutdown'
knowledge_article_id: kA04u000000wnpJCAQ
---

# Warning: Indexer Service Has Been Improperly Shutdown

## Symptom

The following warning appears in Netwrix Data Classification:

```text
Indexer service has been improperly shutdown.
```

## Cause

This message occurs if the Indexer service has been forcibly stopped, such as by **Task Manager** -> **End Task**, or via a machine restart.

## Resolution

To identify the root cause of the issue, open the lock files in the lock archive and check the date and time of the last recorded activity:

1. On the computer that hosts Netwrix Data Classification, navigate to the lock archive location.

   The location of the lock archive should be called out in the warning message, but the default location is `C:\Program Files\Netwrix\Data Classification\Index\LockArchive`.

2. Open the Lock Archive with a text editor, such as **Notepad**.

3. Find the date and time of the last recorded activity. This will help you to understand when the indexer was shutdown improperly.

4. Review the **Windows Application** logs to look for potential causes, such as a machine reboot, and speak to any users who were logged on to the machine at that time and may know what was happening.

5. When the cause has been identified, you can resolve the issue. Use suspended services if your machine did automatic Windows updates.
