# SG_ScheduledTasks Job

The SG_ScheduledTasks job lists scheduled task details on all targeted hosts.

## Queries for the SG_ScheduledTasks Job

The SG_ScheduledTasks job uses the SystemInfo Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_ScheduledTasks Job](/img/product_docs/accessanalyzer/solutions/windows/applications/scheduledtasksquery.webp)

The query for the SG_ScheduledTasks job is:

- Scheduled tasks – Targets all Windows servers known to Access Analyzer to determine scheduled
  tasks

## Analysis Tasks for the SG_ScheduledTasks Job

Navigate to the **Windows** > **Applications** > **SG_ScheduledTasks** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SG_ScheduledTasks Job](/img/product_docs/accessanalyzer/solutions/windows/applications/scheduledtasksanalysis.webp)

The default analysis tasks are:

- Track Changes – Creates the SA_SG_ScheduledTasks_ChangeTracking table accessible under the job’s
  Results node
- List scheduled task details – Creates the SA_SG_ScheduledTasks_Details table accessible under the
  job’s Results node
- Domain user summary – Creates the SA_SG_ScheduledTasks_DomainUsers table accessible under the
  job’s Results node
- Host summary – Creates the SA_SG_ScheduledTasks_HostSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the SG_ScheduledTasks job
produces the following pre-configured reports.

| Report          | Description                                                            | Default Tags | Report Elements                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Scheduled Tasks | This report highlights scheduled tasks across the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays Hosts with Most Scheduled Tasks - Table – Provides details on Hosts with Most Scheduled Tasks bar chart - Table – Provides details on Scheduled Tasks |
