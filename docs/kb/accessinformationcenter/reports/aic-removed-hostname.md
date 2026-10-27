---
title: "Access Information Center Showing Removed Hostname"
description: >-
  After you run a remove host data job, a !Removed_<GUID> placeholder can
  replace the original hostname in the job results or Access Information
  Center. This article describes the cause and how to remove the leftover entry.
sidebar_label: "Access Information Center Showing Removed Hostname"
keywords:
  - "!Removed_<GUID>"
  - removed hostname
  - remove host data
  - Remove Host Data for File Systems
  - Access Information Center
  - AIC
  - job timeout
  - Timeout minutes
  - bulk import
  - audit database
products:
  - accessinformationcenter
tags:
  - kb
knowledge_article_id: ka0Qk000000NGwvIAG
---

# Access Information Center Showing Removed Hostname

## Related Queries

- "`!Removed_<GUID>` hostname showing in AIC"
- "`!Removed_<GUID>` replaces a hostname after running Remove Host Data for File Systems"

## Symptom

After you run a remove host data job, the job results or Netwrix Access Information Center display a placeholder hostname, `!Removed_<GUID>`, for a host that was previously removed.

## Cause

This behavior typically occurs when the remove host job times out or does not complete. The system cannot finish all database cleanup steps for the affected machine, so the database records are left in a partial state and a `!Removed_<GUID>` hostname remains.

## Resolution

> **IMPORTANT:** Before running large bulk import or cleanup jobs in a production environment, make sure you have a recent backup of your audit database and configuration.

To remove the leftover entry, complete the following steps:

1. Right-click the job that timed out (for example, the remove host job or the bulk import job), select **Properties**, and open the **General** tab.
2. Set **Timeout minutes** to `1440` (24 hours) to avoid premature timeouts on long-running operations.
3. Rerun the remove host job for the same hostname. When the job completes successfully, it removes both the `!Removed_<GUID>` entry and the original hostname entry.

    > **NOTE:** These jobs can run for a long time when the database is large or many objects are being processed. Do not assume a job has failed until it exceeds the extended timeout.

4. If a bulk import or scan affected the entry, repeat steps 1 and 2 for that job, and then rerun it so the inventory and cleanup operations complete.
5. Open Access Information Center and confirm that neither the `!Removed_<GUID>` entry nor the original hostname appears.

If you are unsure about running these jobs, contact [Netwrix Support](https://www.netwrix.com/support.html) and provide the job logs and a description of recent activities that may have affected the host entry.
