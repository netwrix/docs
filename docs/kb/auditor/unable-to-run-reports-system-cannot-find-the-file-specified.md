---
description: >-
  This article explains how to resolve the "System cannot find the file
  specified" (0x80070002) rsInternalError when running reports in Netwrix
  Auditor, typically caused by a missing report server database. It lists
  symptoms, cause, and step-by-step resolution. 
keywords:
  - report server
  - rsInternalError
  - '0x80070002'
  - Report Manager
  - SSRS
  - deploy report server database
  - Netwrix Auditor
  - Archive Service
  - Management Service
products:
  - auditor
sidebar_label: Unable to Run Reports — System Cannot Find the Fil
tags: []
title: "Unable to Run Reports — System Cannot Find the File Specified"
knowledge_article_id: kA04u00000110zpCAA
---

# Unable to Run Reports — System Cannot Find the File Specified

## Symptoms

1. When trying to run a report via Netwrix Auditor, you encounter the following error:

```text
An internal error occurred on the report server. See the error log for more details. (rsInternalError)
The system cannot find the file specified. (Exception from HRESULT: 0x80070002)
```

2. When trying to access the Report Manager via URL (specified in Netwrix Auditor **Settings** > **Audit Database**), you encounter the following error:

```text
The service is not available.
The report server can't connect to its database. Make sure the database is running and accessible.
```

## Cause

A report server database is missing.

## Resolution

Refer to the following steps to resolve the issue:

1. In your Netwrix Auditor server, disable **Netwrix Auditor Archive Service** and **Netwrix Auditor Management Service** via **Services**.
2. Deploy the report server database — refer to the following article for in-depth instructions: /docs/kb/auditor/deploying-the-report-server-database (Deploying the Report Server Database).
3. Once you've configured the report server database, grant the roles to the SSRS service account the roles required. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice (Configure SSRS Account).
4. Restart **Netwrix Auditor Archive Service** and **Netwrix Auditor Management Service** on your Netwrix Auditor server via **Services**.
