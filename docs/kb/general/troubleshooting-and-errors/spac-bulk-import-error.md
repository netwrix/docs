---
description: >-
  Describes a foreign key constraint error encountered during SPAC Bulk Import
  and the steps taken to resolve it in the Access Analyzer database.
keywords:
  - SPAC
  - Bulk Import
  - foreign key
  - MERGE statement
  - Access Analyzer
  - SA_SPAC_ActivityEvents
  - SP_SPAC_GroupMembershipChanges
  - SPSEEK
  - retention
products:
  - general
sidebar_label: SPAC Bulk Import Error
tags: [troubleshooting-and-errors]
title: "SPAC Bulk Import Error"
knowledge_article_id: kA0Qk0000001PxFKAU
---

# SPAC Bulk Import Error

## Issue

The SharePoint Activity Auditing (SPAC) Bulk Import job shows the following error:

```text
ERROR  SHAREPOINTACCESS  Netwrix.StealthAUDIT.DataCollectors.Tasks.Task.StartExecute  "[C:8] Unable to perform bulk import Error: The MERGE statement conflicted with the FOREIGN KEY constraint "FK_SA_SPAC_GroupMembershipChanges_HOST_ID". The conflict occurred in database "Access Analyzer", table "dbo.SA_SPAC_ActivityEvents". The statement has been terminated."  POINT32HEALTH.SHAREPOINT.COM  DCExtract  8640  6516  6284
```

## Cause

The SPAC Bulk Import could not complete due to a foreign key constraint conflict between the SP_SPAC_GroupMembershipChanges table and the SA_SPAC_ActiviyEvents table.

## Resolution

Remove all SharePoint Access Auditing (SPAA) and SPAC tables — there is a 180-day retention period on SharePoint activity. After removing the tables, rerun the SharePoint Sensitive Data Discovery Auditing (SPSEEK) jobs and verify that the tables are repopulated in the database. Allow these scans to run and monitor the SPAC Bulk Import job to confirm it completes successfully.
