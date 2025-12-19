---
title: "SQL: Options"
description: "SQL: Options"
sidebar_position: 30
---

# SQL: Options

Use the Options page to configure additional settings. The contents of the page vary according to
the category selected. The Options page is a wizard page for the categories of:

- Server Audits
- Sensitive Data

## Server Audits

Use the Options page to specify collection options to use when gathering server audits. This is a
page for the Server Audits Events Collection category.

![SQL Data Collector Wizard Options page for Server Audit](/images/accessanalyzer/12.0/admin/datacollector/sql/optionsserveraudits.webp)

The scan options are:

- Collect only events since last scan – Differential scanning
- Process each audit file individually
- Number of days you want to keep events in the database – Data retention period, set to 15 days by
  default
- Collection Method – Choose a collection method:

    - Collect audits by name
    - Collect audits by path

## Sensitive Data

Use the Sensitive Data Scan Settings (Options) page to specify collection options to use when
gathering server audits. This is a page for the Sensitive Data Collection category.

![SQL Data Collector Wizard Options page for Sensitive Data](/images/accessanalyzer/12.0/admin/datacollector/sql/optionssensitivedata.webp)

The sensitive data scan settings are:

**Scan Options**

- Scan tables for sensitive data – Scans the tables within the database for sensitive data

    - The Oracle default is set for optimal performance for a high-level scan of only tables

- Scan views for sensitive data – Scans views for sensitive data

**Data Settings**

- Scan individual columns for sensitive data – Scans individual columns within the database for
  sensitive data
- Scan full rows for sensitive data – Scans full rows within the database for sensitive data
- Scan all rows for sensitive data – Scans all rows within the database for sensitive data
- Limit rows to scan – Select the number of rows to scan for sensitive data. Select the **Use random
  sampling** checkbox to enable random sampling for checking for sensitive data.

**Meta Data Options**

- Scan database names for sensitive data – Scans database names for sensitive data if the database
  names are included as part of the keyword list in the scanning criteria
- Scan table names for sensitive data – Scans table names within the database for sensitive data if
  the table names are included as part of the keyword list in the scanning criteria
- Scan column names for sensitive data – Scans column names within the database for sensitive data.
  This scans all column names of every table for sensitive data if the column names are included as
  part of the keyword list in the scanning criteria.

**Large Data Type Options**

- Included binary data types (BLOB, NLOB, LONGRAW, VARBINARY) – Select to include the listed binary
  data types
- Include character data types (NCLOB, CLOB, LONG) – Select to include the listed character data
  types

**SDD Options**

- Store discovered sensitive data – Stores potentially sensitive data in the Access Analyzer
  database. Any sampled sensitive data discovered based on the matched criteria is stored in the
  Access Analyzer database. This functionality can be disabled by clearing this option.

    :::note
    The **Store discovered sensitive data** option is required to view Content Audit
    reports in the Access Information Center for SQL data.
    :::


    :::warning
    Changing scan options, criteria, or filters when resuming a scan may prevent the
    can from resuming properly.
    :::


- Resume scan from last point on error – Resumes scan from where the previous scan left off when the
  previous scan was stopped as a result of an error

:::tip
Remember, Sensitive Data Discovery is required to use the sensitive data collection option.
:::
