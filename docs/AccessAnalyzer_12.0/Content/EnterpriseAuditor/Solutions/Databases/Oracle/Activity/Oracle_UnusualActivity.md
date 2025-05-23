---
sidebar_position: 5510
title: Oracle_UnusualActivity Job
---

# Oracle\_UnusualActivity Job

The Oracle\_UnusualActivity job has analysis tasks and reports that use data collected by the 0.Collection Job Group to analyze user activity based on audited actions and identify any outliers based on a modified z-score. Modified z-scores of 3.5 or over are considered possible outliers.

## Analysis Tasks for the Oracle\_UnusualActivity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle\_UnusualActivity** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup32.png "Analysis Selection")

The default analysis tasks are:

* Unusual Hourly Activity Details – Finds user activity outliers based on median hourly activity of all users in that instance. Creates the SA\_Oracle\_UnusualHourlyActivity\_Details table accessible under the job’s Results node.
* Hourly Unusual Activity Summary – Groups unusual activity outliers by instance. Creates the SA\_Oracle\_UnusualHourlyActivity\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_UnusualActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Hourly Activity | This report highlights the number of unusual events found per instance, hourly as well as provides details on those events | None | This report is comprised of three elements:   * Bar Chart – Displays unusual user activity * Table – Provides details on number of outliers per instance * Table – Provides details on unusual user activity details |