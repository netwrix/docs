---
title: "Box_UnusualDownloadActivity Job"
description: "Box_UnusualDownloadActivity Job"
sidebar_position: 30
---

# Box_UnusualDownloadActivity Job

The Box_UnusualDownloadActivity Job highlights unusual download activity for a user on a specific
day by analyzing the download activity for a given user and looking for outliers. Unusual download
activity could indicate a compromised account or a malicious insider.

## Analysis Task for the Box_UnusualDownloadActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_UnusualDownloadActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the Box_UnusualDownloadActivity Job](/images/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/unusualdownloadactivityanalysis.webp)

The following analysis task is selected by default:

- Unusual Download Activity – Creates the Box_UnusualDownload_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_UnusualDownloadActivity Job
produces the following pre-configured report:

| Report                    | Description                                                                                                                                                                | Default Tags | Report Elements                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unusual Download Activity | This report provides insight into download activity that deviates from the normal range of expected downloads.  This is determined by using historical data for each file. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 most recent unusual download activity</li><li>Table – Provides details on unusual download activity</li></ul> |
