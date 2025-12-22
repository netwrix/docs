---
description: >-
  Shows how to exclude specific users from mailbox access reports in Netwrix
  Auditor by adding them to the userstoexclude.txt file. Explains the file
  structure, wildcard support, and how exclusions affect stored snapshots and
  the Report Viewer.
keywords:
  - mailbox access
  - exclude users
  - userstoexclude.txt
  - Netwrix Auditor
  - snapshots
  - Report Viewer
  - wildcards
  - data collection
products:
  - auditor
sidebar_label: How to filter out certain users from reports
tags: []
title: "How to filter out certain users from reports"
knowledge_article_id: kA00g000000H9WYCA0
---

# How to filter out certain users from reports

How do I filter out certain users from mailbox access reports?

## Procedure

1. To exclude a specific user from the mailbox access reports, add that user to the `userstoexclude.txt` file located in the Netwrix Auditor installation directory.
   - Since this file is read at the beginning of each data collection, the exclusion affects only newly collected data.

## File structure

- Each entry must be on a separate line.
- Wildcards (`*` and `?`) are supported.
- Lines that start with the `#` sign are treated as comments and are ignored.

## Image

![User-added image]./../0-images/ka04u000000HcPk_0EM7000000054Bf.png)

## Note

**NOTE.** The `userstoexclude.txt` file contains a list of users who must be excluded from reports if they perform non-owner access to mailboxes. But the audit data for these users will still be stored in the snapshots, so if a user is removed from this list, the information on the user actions can be viewed with the **Report Viewer**.

