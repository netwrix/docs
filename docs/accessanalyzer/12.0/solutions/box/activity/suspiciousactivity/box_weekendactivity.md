---
title: "Box_WeekendActivity Job"
description: "Box_WeekendActivity Job"
sidebar_position: 50
---

# Box_WeekendActivity Job

The Box_WeekendActivity Job highlights unusual download activity for a user on a specific day by
analyzing the download activity for a given user and looking for outliers. Unusual download activity
could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box_WeekendActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_WeekendActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_WeekendActivity Job](/images/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/weekendactivityanalysis.webp)

The following analysis tasks are selected by default:

- Weekend Activity – Creates the Box_WeekendActivity_Details table accessible under the job’s
  Results node
- Weekend Activity Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_WeekendActivity Job produces the
following pre-configured report:

| Report           | Description                                                                                                    | Default Tags | Report Elements                                                                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weekend Activity | This report highlights the activity occurring on weekends in the target Box environment over the last 30 days. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays last 30 days of weekend activity for top 5 users</li><li>Table – Provides summary top 30 days of weekend activity</li><li>Table – Provides details on weekend Activity Details</li></ul> |
