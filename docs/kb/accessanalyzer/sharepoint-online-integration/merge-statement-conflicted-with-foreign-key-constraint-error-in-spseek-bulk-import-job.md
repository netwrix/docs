---
description: >-
  Explains the cause and resolution for the "MERGE statement conflicted with the
  FOREIGN KEY SAME TABLE constraint" error when running the SPSEEK Bulk Import
  job, and links to related documentation.
keywords:
  - spseek
  - bulk import
  - merge statement
  - foreign key
  - SP_DropTables
  - SharePoint
  - SPAA
  - Netwrix Access Analyzer
products:
  - access-analyzer
sidebar_label: "Merge Statement Conflicted with Foreign Key Constraint Error in SPSEEK Bulk Import Job"
tags:
  - sharepoint-online-integration
title: >-
  Merge Statement Conflicted with the FOREIGN KEY Constraint Error in SPSEEK
  Bulk Import Job
knowledge_article_id: kA0Qk0000000IRZKA2
---

# Merge Statement Conflicted with the FOREIGN KEY Constraint Error in SPSEEK Bulk Import Job

## Symptom

When you attempt to run the **SPSEEK Bulk Import** job, you see the following error:

```sql
[C:102] Unable to perform bulk import
Error: The MERGE statement conflicted with the FOREIGN KEY SAME TABLE constraint %FK_constraint%.
The conflict occurred in database %database_name%, table %table_name%.
The statement has been terminated.
```

## Cause

The foreign key constraint conflict was caused during the latest scan.

## Resolution

Drop the SharePoint tables and run the scan again. To drop the tables, run the **SP_DropTables** job. For additional information, refer to the following Netwrix Access Analyzer article:

1. SharePointAccess Data Collector − SPAA Drop Tables & Views Workflow ⸱ v11.6  
   https://docs.netwrix.com/docs/auditor/10_8

## Related articles

- SharePointAccess Data Collector − SPAA Drop Tables & Views Workflow ⸱ v11.6  
  https://docs.netwrix.com/docs/auditor/10_8
- Could Not Drop Object Referenced by Foreign Key Constraint  
  https://docs.netwrix.com/docs/accessanalyzer/12_0
