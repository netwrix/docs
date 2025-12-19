---
title: "DropboxAccess: DLP Audit Settings"
description: "DropboxAccess: DLP Audit Settings"
sidebar_position: 60
---

# DropboxAccess: DLP Audit Settings

Use the DLP Audit Settings page to configure sensitive data discovery settings. This page is a
wizard page for the Scan for Sensitive Content category.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](/images/accessanalyzer/12.0/admin/datacollector/dropboxaccess/dlpauditsettings.webp)

Configure the DLP audit settings:

- Scan Performance:

    - Don’t process files larger than – Limits the files to be scanned for sensitive content to
      files smaller than the specified size

- File types to scan:

    - Scan typical documents (recommended, fastest) – Scans most common file types
    - Scan all document types (slower) – Scans all file types except those excluded

- Store Match Hits –  Choose whether to store copies of potentially sensitive data discovered during
  the scan:

    - Store discovered sensitive data – Stores a copy of any potentially sensitive data that matches
      the selected criteria in the Access Analyzer database. This copy can be used to check for
      false positives, data that matches the selected criteria but is not actually sensitive.
    - Limit stored matches per criteria to [number] – Identifies the number of potentially sensitive
      data matches that are copied to the database. The default is 5 matches. This option is
      available only if the **Store discovered sensitive data** option is selected.

- Perform differential scan of – Enables users to choose whether to employ incremental scanning:

    - Files modified since last scan – Scans only files modified since the last scan
    - Files modified since [date] – Only scans files modified after the specified date
    - Files modified since the last [number] days – Scans files modified within the specified number
      of days
