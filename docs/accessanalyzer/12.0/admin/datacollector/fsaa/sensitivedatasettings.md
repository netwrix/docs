---
title: "FSAA: Sensitive Data Settings"
description: "FSAA: Sensitive Data Settings"
sidebar_position: 110
---

# FSAA: Sensitive Data Settings

The Sensitive Data Settings page is where sensitive data discovery settings are configured. It is a
wizard page for the category of Sensitive Data Scan.

![FSAA Data Collector Wizard Sensitive Data Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/sensitivedata.webp)

- Don’t process files larger than: [number] MB – Limits the files to be scanned for sensitive
  content to only files smaller than the specified size
- Include offline files (this may significantly increase scan times) – Includes offline files in the
  scan
- Perform Optical Character Recognition for image files – Enables the data collector to scan for
  sensitive data within digital images of physical documents

    :::note
    The OCR option is intended to work for clear scanned physical documents or documents
    directly converted to images, with standard fonts. It will not work for scanning photos of
    documents and may not be able to recognize text on images of credit cards, driver's licenses, or
    other identity cards.
    :::


- Store discovered sensitive data – Stores discovered sensitive data in the database
- Limit stored matches per criteria to [number] – Limits database storage of matches per criteria
  for discovered sensitive data

Use the radio buttons to select the File types to scan:

- Scan all file types – Scans everything in a given environment
- Scan custom file types – Select the checkboxes from the list of file and document types that are
  included in a sensitive data scan. The table contains the following categories and their
  sub-options available:

    - Compressed Archive files
    - Documents
    - Email
    - Image files
    - Presentations
    - Spreadsheets
    - Text/Markup files

- Perform differential scan of – Enables users to choose whether to employ incremental scanning:

    - Files modified or newly discovered since last scan – Scans newly discovered files and files
      with a modified date after the previous scan date
    - Files modified since [date] – Only scans files with a modified date after the specified date
    - Files modified within the last [number] days – Only scans files with a modified date within
      the specified date range

The Performance Options section allows the user to modulate the efficiency of SDD scans.

- Number of SDD scan processes [number] – Increases the number of SDD scanner processes that spawn
  as part of a scan, increasing parallel scanning. The value should not exceed 2x the number of CPU
  threads available.

    :::info
    For optimal performance, the total number of scan processes on a scan host
    should be 1 to 2 times the number of CPU threads available.

    :::
