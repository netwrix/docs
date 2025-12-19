---
title: "SAS_ExecutionStatistics Job"
description: "SAS_ExecutionStatistics Job"
sidebar_position: 50
---

# SAS_ExecutionStatistics Job

The SAS_ExecutionStatistics Job tracks historical performance of Access Analyzer job and analysis
functions and highlights when a particular task takes an abnormal length of time to execute. It is
available through the Instant Job Library under the Access Analyzer Utilities library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) section for instructions to add this instant job into the Jobs
tree. Since this job does not require a host to target, select Local host on the Hosts page of the
Instant Job Wizard.

The job is dependent upon the Job Statistics Retention configuration in the **Settings** >
**Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for
additional information.

![SAS_ExecutionStatistics job in the Jobs tree](/images/accessanalyzer/12.0/admin/jobs/instantjobs/jobstree_4.webp)

Runtime Details:

- Dependencies – None
- Target Hosts – None
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported
- Additional Notes – The jobs uses custom SQL scripts to render views on collected data. SQL views
  are used to populate report element tables and graphs. Changing or modifying the Group, Job, or
  Table names will result in no data displayed within the reports.

The SAS_ExecutionStatistics Job runs analysis tasks and generates reports on the latest job
executions, analysis history, host query details, and analysis details.

## Analysis Tasks for the SAS_ExecutionStatistics Job

Navigate to the **Jobs** > **SAS_ExecutionStatistics** > **Configure** node and select **Analysis**
to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Default Analysis tasks for the job](/images/accessanalyzer/12.0/admin/jobs/instantjobs/analysistasks_3.webp)

The default analysis tasks are:

- Analyze Jobs – Collects and analyzes all job-level execution statistics from the database based on
  the statistics retention settings set in the Application node
- Analyze All Statistics – Collects and analyzes all task-level execution statistics from the
  database based on the statistics retention settings set in the Application node
- Query Execution Details – Organizes query-related statistics
- Analysis Details – Organizes analysis-related statistics

In addition to the tables created by the analysis tasks, the SAS_ExecutionStatistics Job produces
the following pre-configured reports.

| Report                   | Description                                                       | Default Tags | Report Elements                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analysis Execution       | This report identifies abnormally long analysis times.            | None         | This report is comprised of two elements: <ul><li>Bar graph – Displays Abnormally Long Analysis Times</li><li>Table – Displays details on analysis times</li></ul>     |
| Collection Statistics    | This report identifies abnormally long collection times.          | None         | This report is comprised of two elements: <ul><li>Bar graph – Displays Abnormally Long Collection Times</li><li>Table – Displays details on collection times</li></ul> |
| Job Execution Statistics | This report identifies jobs which have abnormally long run times. | None         | This report is comprised of two elements: <ul><li>Pie chart – Displays Job Status</li><li>Table – Displays details on job status</li></ul>                             |
