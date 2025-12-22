---
title: "Box_UnusualUserActivity Job"
description: "Box_UnusualUserActivity Job"
sidebar_position: 40
---

# Box_UnusualUserActivity Job

The Box_UnusualUserActivity Job highlights unusual download activity for a user on a specific day by
analyzing the download activity for a given user and looking for outliers. Unusual download activity
could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box_UnusualUserActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_UnusualUserActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_UnusualUserActivity Job](/images/accessanalyzer/11.6/solutions/box/activity/suspiciousactivity/unusualuseractivityanalysis.webp)

The following analysis task is selected by default:

- Unusual User Activity – Creates the Box_UnusualUserActivity table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the Box_Content Job produces the following
pre-configured report:

| Report                | Description                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual User Activity | This report provides insight into user activity that deviates from the normal range of expected activity.  This is determined by using historical data for each user. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 most recent unusual user activity</li><li>Table – Provides details on unusual user activity</li></ul> |
