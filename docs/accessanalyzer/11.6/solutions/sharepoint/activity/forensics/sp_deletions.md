# SP_Deletions Job

This job identifies SharePoint deletion events which have occurred over the past 30 days.

## Analysis Tasks for the SP_Deletions Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** > **SP_Deletions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_Deletions Job](/img/product_docs/accessanalyzer/11.6/solutions/box/activity/forensics/deletionsanalysis.webp)

The default analysis task is:

- Analyze SPAC Deletion Events – Creates the SA_SPAC_Deletions_Last30Days table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_Deletions Job produces
the following pre-configured report:

| Report           | Description                                                                                                                                                                        | Default Tags | Report Elements                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deletion Details | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None         | This report is comprised of two elements: - Bar Chart – Displays total number of deletions in the past 30 days - Table – Provides details on deletions in the past 30 days |
