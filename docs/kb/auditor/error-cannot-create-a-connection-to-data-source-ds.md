---
description: >-
  Describe how to resolve the "Cannot create a connection to data source 'DS'"
  error in Netwrix Auditor by specifying correct credentials for the SQL Server
  Reporting Services database.
keywords:
  - SSRS
  - SQL Server Reporting Services
  - rsProcessingAborted
  - rsErroropeningConnection
  - DS_Common
  - Netwrix Auditor
  - report server
  - credentials
  - data source DS
  - report processing
products:
  - auditor
visibility: public
sidebar_label: 'Error: Cannot Create a Connection to Data Source D'
tags: []
title: 'Error: Cannot Create a Connection to Data Source DS'
knowledge_article_id: kA00g000000H9XeCAK
---

# Error: Cannot Create a Connection to Data Source DS

## Symptom

When you attempt to generate reports in Netwrix Auditor, the following error appears:

```text
An error has occurred during report processing. (rsProcessingAborted)
Cannot create a connection to data source 'DS'. (rsErroropeningConnection)
For more information about this error navigate to the report server on the local server machine, or enable remote errors
```

## Cause

The affected user tries to access SQL Server Reporting Services reports from a remote machine. The affected user lacks permissions to access the SQL Server Database Engine and the target database.

## Resolutions

Refer to the following possible resolutions:

- Review the required account permissions and roles to access SSRS reports: https://docs.netwrix.com/docs/auditor/10_8 https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- Specify the credentials to access the Reporting Services database.

Perform the following steps to specify the credentials to access the Reporting Services database:

1. Proceed to the Report Manager URL on the SQL Server with SSRS.

   > NOTE: Locate the Report Manager URL in Netwrix Auditor via **Settings** > **Audit Database**.

2. In the top right corner, click **View** / **List** and check the **Show hidden items** checkbox.
3. Navigate to the **Netwrix Auditor** folder > **Netwrix Auditor for `%datasource%`** > **Change Reports**.
4. Right-click **DS_Common** and select **Manage**.
5. In the **Properties** tab, review the **Credentials** section.
   - To use a SQL login, select **Database user name and password** in the **Type of credentials** dropdown list.
   - To use a Windows login, select **Windows user name and password** in the **Type of credentials** dropdown list.
6. Click **Test connection** to verify the credentials.
7. Click **Apply**, close the browser, and generate the report in Netwrix Auditor.

## Related Articles

- Requirements for SQL Server to Store Audit Data — SQL Server · v10.6: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- SQL Server Reporting Services · v10.6: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
