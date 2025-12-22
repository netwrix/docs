---
description: >-
  Describes how to exclude specific user accounts from Netwrix File Server
  Change Reporter change summaries and reports by editing omituserlist files.
keywords:
  - exclude users
  - omituserlist_fs.txt
  - omitstoreuserlist_fs.txt
  - Netwrix File Server Change Reporter
  - Change Summaries
  - SSRS reports
  - service account
  - email summaries
  - wildcards
products:
  - auditor
sidebar_label: How to exclude specific user accounts from reports
tags: []
title: "How to exclude specific user accounts from reports"
knowledge_article_id: kA00g000000H9TvCAK
---

# How to exclude specific user accounts from reports

How do I exclude certain user accounts from **Netwrix File Server Change Reporter Change Summaries** and **Reports** if I do not want to monitor them (for example, a service account used by a backup software)?

## Solution

To exclude user accounts from data collection and reporting, do the following:

1. Navigate to the **Netwrix File Server Change Reporter** installation folder.
2. Open one of the following configuration files:
   - `omituserlist_fs.txt` file to exclude certain users from the email **Change Summaries**
   - `omitstoreuserlist_fs.txt` file to exclude certain users from **SSRS-based Reports** and email **Change Summaries** as well.
3. Edit the selected file by specifying the accounts you want to exclude. Accounts must be entered one per line in the `domainusername` format. Wildcards (`*` and `?`) are supported.
4. Save the changes and close the file.
