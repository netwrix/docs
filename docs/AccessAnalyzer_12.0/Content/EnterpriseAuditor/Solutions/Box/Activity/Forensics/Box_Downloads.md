---
sidebar_position: 5383
title: Box_Downloads Job
---

# Box\_Downloads Job

The Box\_Downloads Job provides details on file and folder deletions that have occurred over the past 30 days.

## Analysis Tasks for the Box\_Downloads Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box\_Downloads** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_Downloads Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/Forensics/DownloadsAnalysis.png "Analysis Tasks for the Box_Downloads Job")

The following analysis tasks are selected by default:

* Download Details – Creates the Box\_Download\_Details table accessible under the job’s Results node
* Downloads Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_Downloads Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Download Activity (Download Events) | This report identifies download events for the past 30 days. The detailed report shows all resources that were successfully downloaded as well as which users performed those events. | None | This report is comprised of three elements:   * Line Chart – Displays last 30 days of downloads * Table – Provides details on downloads |