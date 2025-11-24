---
description: >-
  Netwrix Auditor fails to store audit data and reports "Invalid Character Value
  for cast specification." This article explains causes and provides two
  workarounds to restore data collection without data loss.
keywords:
  - Invalid Character Value
  - cast specification
  - database error
  - Netwrix Auditor
  - archive
  - Investigations
  - SQL Server
  - database retention
  - Archive Service
products:
  - auditor
sidebar_label: Invalid Character Value for Cast Specification Err
tags: []
title: "Invalid Character Value for Cast Specification Error Occurs When Trying to Store Audit Data"
knowledge_article_id: kA04u00000110zLCAQ
---

# Invalid Character Value for Cast Specification Error Occurs When Trying to Store Audit Data

## Symptom

Netwrix Auditor fails to store audit data although there is adequate space on the database and archive locations. During the data collection, the following error occurs:

```
Invalid Character Value for cast specification.
```

## Cause

This error usually appears for big databases created on earlier versions of Netwrix Auditor (9.9 and older).

## Resolution

The source of the issue was resolved in newer versions, and since you are on 9.96 and above, select one of the workarounds below, whichever is more comfortable for you.

**NOTE:** Netwrix recommends upgrading to the latest version to avoid database issues.

1. Resolution 1

   Create a new database for the monitoring plan to write data to.

   - Check which exactly databases are affected. For that, in Netwrix Auditor, go to **Health Status** dashboard -> **Database Statistics**.
   - Find the plan that is writing to the affected database and click **Edit**.
   - On the **Audit Database** tab, provide a new name under **Database:**, so a new one is created, and the plan starts writing to it.

   Data will not be lost, since the old database will remain in the SQL instance, and also all collected data can always be imported from the Long-Term Archive.

   You can import previously collected data you need to run reports for the desired period of time using the **Investigations** feature.

   1. In Netwrix Auditor, go to **Settings** -> **Investigations** -> **Configure**.
   2. Select a data source, check the desired monitoring plan, and set the dates.
   3. Click **Run**.

   For additional information on how to import previously collected data, refer to the following article: [Investigations](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/investigations)

2. Resolution 2

   If the previously collected data is accessible from the problematic database (check using Search filtered for the corresponding monitoring plan), create an empty plan with no Data sources and attach it to the old database for Netwrix Auditor to have access to the data in the database.

   You can review the data already collected for the past 180 days (assuming database retention settings in Netwrix Auditor are as by default).

   After the database retention period passes, you will be able to remove the old database from the SQL Server completely and will not need this empty plan anymore (stale data would be cleared according to database retention settings, and all the current data will be in the new database).

**IMPORTANT:** If, after these workarounds, you will have the *Archive Service is busy processing activity records* error, refer to the following article: [Archive Service is Busy Processing Activity Records](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/archive-service-is-busy-processing-activity-records).
