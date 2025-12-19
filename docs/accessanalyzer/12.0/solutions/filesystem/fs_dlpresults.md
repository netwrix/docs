---
title: "7.Sensitive Data > FS_DLPResults Job"
description: "7.Sensitive Data > FS_DLPResults Job"
sidebar_position: 90
---

# 7.Sensitive Data > FS_DLPResults Job

The FS_DLPResults job is designed to report on resources that have been identified to contain
sensitive data from targeted file servers. It is comprised of analysis and reports which use the
data collected by the **0.Collection** job group to provide information on where sensitive data is
being shared. Best practices often dictate moving files with sensitive data out of open shares.

![7.Sensitive Data > FS_DLPResults Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/sensitivedatajobstree.webp)

The FS_DLPResults job is located in the 7.Sensitive Data job group.

## Analysis Tasks for the FS_DLPResults Job

View the analysis tasks by navigating to the **FileSystem** > **7.Sensitive Data** >
**FS_DLPResults** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_DLPResults Job](/images/accessanalyzer/12.0/solutions/filesystem/dlpresultsanalysis.webp)

The following analysis tasks are selected by default:

- Share Details – Creates the SA_FS_DLPResults_ShareDetails table accessible under the job’s Results
  node
- Share Summary – Creates the SA_FS_DLPResults_ShareSummary table accessible under the job’s Results
  node
- Enterprise Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation
- Sensitive Security Groups – Creates the SA_FS_DLPResults_GroupDetails table accessible under the
  job’s Results node
- Identify Probable Owners – Creates the SA_FS_DLPResults_ProbableOwners table accessible under the
  job’s Results node
- Activity Details – Creates the SA_FS_DLPResults_ActivityDetails table accessible under the job’s
  Results node
- Top Trustees by Activity – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_DLPResults job produces
the following pre-configured reports:

| Report                                        | Description                                                                                                                          | Default Tags                                          | Report Elements                                                                                                                                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary (Sensitive Content)        | This report identifies the type and amount of sensitive content found on scanned machines.                                           | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Pie Chart – Displays exceptions by file count</li><li>Table – Provides details on exceptions by file count</li></ul>                                                                 |
| File Ownership (Sensitive Data Ownership)     | This report identifies the top 3 potential owners of files which have been found to contain sensitive content.                       | None                                                  | This report is comprised of one element: <ul><li>Table – Provides details on top owners per file</li></ul>                                                                                                                             |
| Sensitive Data Access                         | This report shows who is accessing sensitive data. Emphasis is placed on activity within the last 30 days.                           | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Bar Chart – Displays sensitive data access by top users</li><li>last 30 days</li><li>Table – Provides details on sensitive data access</li></ul>                                     |
| Sensitive Security Groups                     | This report identifies groups which are used to provide access to sensitive data. Changes to membership should be closely monitored. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Bar Chart – Top groups by access to sensitive files</li><li>Table – Provides details on group access to sensitive files</li></ul>                                                    |
| Share Details (Shares with Sensitive Content) | This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access.         | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Bar chart – Displays top shares by sensitive file count</li><li>Table – Provides details on files</li><li>Table – Provides details on top shares by sensitive file count</li></ul> |
