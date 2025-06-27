# FS_StaleShares Job

The FS_StaleShares job is designed to report on stale shares from targeted file servers.

## Analysis Tasks for the FS_StaleShares Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_StaleShares** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_StaleShares Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/stalesharesanalysis.webp)

The following analysis tasks are selected by default:

-   1. Find Date of last Activity

    - Creates an interim processing table in the database for use by downstream analysis and report
      generation
    - Creates the SA_FS_StaleShares_LastActivityPivot view accessible under the job’s Results node

-   2. Find Shares with no Recorded Activity – Creates the SA_FS_StaleShares_NoRecordedActivity
       table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_StaleShares job produces
the following pre-configured report:

| Report       | Description                                                         | Default Tags | Report Elements                                                                                                                |
| ------------ | ------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Stale Shares | This report identifies the last date there was activity on a share. | None         | This report is comprised of two elements: - Bar Chart – Displays top 5 stale shares - Table – Provides details on stale shares |
