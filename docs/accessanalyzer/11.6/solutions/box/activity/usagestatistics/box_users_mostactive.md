---
title: "Box_Users_MostActive Job"
description: "Box_Users_MostActive Job"
sidebar_position: 30
---

# Box_Users_MostActive Job

The Box_Users_MostActive Job analyzes user activity to highlight the most active and potentially
stale users within the environment based on the last 30 days of activity events.

## Analysis Tasks for the Box_Users_MostActive Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Users_MostActive** >
**Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_Users_MostActive Job](/images/accessanalyzer/11.6/solutions/box/activity/usagestatistics/usersmostactiveanalysis.webp)

The default analysis task is:

- Most Active Users – Creates the Box_Users_MostActive table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box_Users_MostActive Job produces the
following pre-configured report:

| Report            | Description                                                                                                                                                                | Default Tags | Report Elements                                                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users | This report highlights the most active users in the target Box environment over the last 30 days. It also lists stale users that have had no activity in the last 30 days. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays last 30 days of the most active users</li><li>Table – Provides summary of last 30 days of the most active users</li></ul> |
