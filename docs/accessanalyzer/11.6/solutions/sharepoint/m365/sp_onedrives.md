---
title: "SP_OneDrives Job"
description: "SP_OneDrives Job"
sidebar_position: 20
---

# SP_OneDrives Job

The SP_OneDrives Job collects the activity, sensitive data, summary level information across
OneDrives.

## Analysis Tasks for the OneDrives Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_OneDrives** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the OneDrives Job](/images/accessanalyzer/11.6/solutions/sharepoint/m365/onedrivesanalysis.webp)

The default analysis tasks are:

- OneDrive Details – Creates the SA_SP_OneDriveDetails table accessible under the job's Results node
- OneDrive Summary – Creates the SA_SP_OneDriveSummary table accessible under the job's Results node
- Top OneDrive by GB Summary – Creates the SA_SP_TopOneDrivesGB table accessible under the job's
  Results node
- OneDrive Sensitive Data File Details – Creates the SA_SP_OneDriveFileDetails table accessible
  under the job's Results node
- OneDrive Sensitive Data Summary – Creates the SA_SP_OneDriveSensitiveDataSummary table accessible
  under the job's Results node
- OneDrive Activity Details – Creates the SA_SP_OneDriveActivityDetails table accessible under the
  job's Results node
- OneDrive Activity Summary – Creates the SA_SP_OneDriveActivitySummary table accessible under the
  job's Results node

In addition to the tables created by the analysis tasks, the SP_OneDrives Job produces the following
preconfigured reports:

| Report                   | Description                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One Drive Activity       | This report displays activity information from OneDrives.            | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on top OneDrives by Operation Count</li><li>Table – Provides details on OneDriveSummary</li><li>Table – Provides details on OneDrive Activity Details</li></ul>                                                |
| One Drive Sensitive Data | This report displays sensitive information from OneDrives.           | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on top OneDrives by sensitive files</li><li>Table – Provides details on sensitive data summary</li><li>Table – Provides details on OneDrive file details</li></ul>                                             |
| One Drive Sensitive Data | This report displays summary level information across all OneDrives. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on OneDrive summary</li><li>Table – Provides details on top OneDrives by GB</li><li>Table – Provides details on top OneDrives by GB summary</li><li>Table – Provides information on OneDrive details</li></ul> |
