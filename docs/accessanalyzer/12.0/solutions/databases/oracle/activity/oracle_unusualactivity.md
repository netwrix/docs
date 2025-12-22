---
title: "Oracle_UnusualActivity Job"
description: "Oracle_UnusualActivity Job"
sidebar_position: 70
---

# Oracle_UnusualActivity Job

The Oracle_UnusualActivity job has analysis tasks and reports that use data collected by the
0.Collection Job Group to analyze user activity based on audited actions and identify any outliers
based on a modified z-score. Modified z-scores of 3.5 or over are considered possible outliers.

## Analysis Tasks for the Oracle_UnusualActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_UnusualActivity** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/activity/jobgroup32.webp)

The default analysis tasks are:

- Unusual Hourly Activity Details – Finds user activity outliers based on median hourly activity of
  all users in that instance. Creates the SA_Oracle_UnusualHourlyActivity_Details table accessible
  under the job’s Results node.
- Hourly Unusual Activity Summary – Groups unusual activity outliers by instance. Creates the
  SA_Oracle_UnusualHourlyActivity_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_UnusualActivity Job
produces the following pre-configured report.

| Report                  | Description                                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual Hourly Activity | This report highlights the number of unusual events found per instance, hourly as well as provides details on those events | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays unusual user activity</li><li>Table – Provides details on number of outliers per instance</li><li>Table – Provides details on unusual user activity details</li></ul> |
