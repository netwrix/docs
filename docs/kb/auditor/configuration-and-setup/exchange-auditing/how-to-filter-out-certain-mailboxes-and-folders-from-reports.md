---
description: >-
  Learn how to exclude specific mailboxes and folders from reports by editing
  the mailboxestoexclude.txt file in the program installation folder.
keywords:
  - mailboxes
  - mailboxestoexclude
  - exclude
  - reports
  - folders
  - compression service
  - Netwrix Auditor
  - wildcards
products:
  - auditor
sidebar_label: How to filter out certain mailboxes and folders fr
tags: []
title: "How to filter out certain mailboxes and folders from reports?"
knowledge_article_id: kA00g000000H9TtCAK
---

# How to filter out certain mailboxes and folders from reports?

How do I filter out certain mailboxes and folders from product reports?

## Procedure

1. Navigate to the program installation folder.
2. Open the `mailboxestoexclude.txt` file. This file contains a list of mailboxes and folders to be excluded from reports.
3. Specify entries in the file using one of the following formats:
   - `Mailbox_Name`
   - `Mailbox_Name/Folder_Name`
   - Use wildcards like `*/Folder_Name` to exclude the specified folder from all mailboxes. The latter excludes the specified folder of all mailboxes.

## Notes

- NOTE: If compression service is not enabled, the `Mailbox_Name/Folder_Name` lines are ignored.
