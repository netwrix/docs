# FS_UserShareActivity Job

The FS_UserShareActivity job is designed to report on normal user activity within a share from
targeted file servers.

## Analysis Tasks for the FS_UserShareActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_UserShareActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_UserShareActivity Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/usershareactivityanalysis.webp)

- Track Latest Activity Per User Per Share – Creates the SA_FS_UserShareActivity_LatestActivity
  table accessible under the job’s Results node
- Average days since last Access – Creates the SA_FS_UserShareActivity_ShareSummary table accessible
  under the job’s Results node
- New Access Last Week – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_UserShareActivity job
produces the following pre-configured reports:

| Report                            | Description                                                                                                                                        | Default Tags | Report Elements                                                                                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Time Share Activity by User | This report shows the last date that a user accessed a share, ordered by the oldest activity. This lack of access may indicate unused permissions. | None         | This report is comprised of two elements: - Bar Chart – Displays shares with new users accessing data - past 7 days - Table – Provides details on first time share access |
| Longest Inactivity                | This report shows which users have returned to a share after the longest periods of inactivity.                                                    | None         | This report is comprised of one element: - Table – Provides details on user share activity                                                                                |
