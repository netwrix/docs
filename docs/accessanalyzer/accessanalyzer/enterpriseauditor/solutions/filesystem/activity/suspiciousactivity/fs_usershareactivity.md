# FS\_UserShareActivity Job

The FS\_UserShareActivity job is designed to report on normal user activity within a share from targeted file servers.

## Analysis Tasks for the FS\_UserShareActivity Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Suspicious Activity__ > __FS\_UserShareActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_UserShareActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/usershareactivityanalysis.png)

- Track Latest Activity Per User Per Share – Creates the SA\_FS\_UserShareActivity\_LatestActivity table accessible under the job’s Results node
- Average days since last Access – Creates the SA\_FS\_UserShareActivity\_ShareSummary table accessible under the job’s Results node
- New Access Last Week – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS\_UserShareActivity job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| First Time Share Activity by User | This report shows the last date that a user accessed a share, ordered by the oldest activity. This lack of access may indicate unused permissions. | None | This report is comprised of two elements:   - Bar Chart – Displays shares with new users accessing data - past 7 days - Table – Provides details on first time share access |
| Longest Inactivity | This report shows which users have returned to a share after the longest periods of inactivity. | None | This report is comprised of one element:   - Table – Provides details on user share activity |
