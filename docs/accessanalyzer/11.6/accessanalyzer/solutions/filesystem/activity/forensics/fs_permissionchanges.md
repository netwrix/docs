# FS_PermissionChanges Job

The FS_PermissionChanges job is designed to report on permission change activity event information
from targeted file servers.

## Analysis Tasks for the FS_PermissionChanges Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Forensics** >
**FS_PermissionChanges** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_PermissionChanges Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The following analysis tasks are selected by default:

-   0. Create Permission Change Events Table – Creates an interim processing table in the database
       for use by downstream analysis and report generation
-   1. Create Permission Changes Table and View – Creates the SA_ENG_PermissionChangesView view
       accessible under the job’s Results node
-   2. Last 30 Days – Creates the SA_FS_PermissionChanges_Last30Days table accessible under the
       job’s Results node
-   3. Trend – Creates the SA_FS_PermissionChanges_TrendOverTime table accessible under the job’s
       Results node
-   4. Create view to notify on - By user, per share, for the past 24 hours – Creates the
       SA_FS_PermissionChanges_Notification_NOTIFICATION table accessible under the job’s Results
       node
-   6. Raw Details – Creates the SA_FS_PermissionChanges_Details view accessible under the job’s
       Results node
-   7. High risk permission changes – Creates the SA_FS_PermissionChanges_HighRisk table accessible
       under the job’s Results node
-   8. High risk permission changes summary – Creates the SA_FS_PermissionChanges_HighRiskSummary
       table accessible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before
enabling it. The following analysis task is deselected by default:

-   5. Alert on Permission Changes – Alerts when permission changes have occurred

    - Add recipients, notification subject, and email content
    - See the
      [Configure the Notification Analysis Task](/docs/accessanalyzer/11.6/accessanalyzer/solutions/filesystem/activity/forensics/fs_deletions.md#configure-the-notification-analysis-task)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the FS_PermissionChanges job
produces the following pre-configured reports:

| Report             | Description                                                                                                                                  | Default Tags                                          | Report Elements                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Risk Changes  | This report highlights successful permission changes performed on a high risk trustee. The line chart shows data for the past 30 days only.  | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Line Chart– Displays last 30 days of high risk changes - Table – Provides details on high risk changes   |
| Permission Changes | This report identifies all resources where successful permission changes have occurred. The line chart shows data for the past 30 days only. | None                                                  | This report is comprised of two elements: - Line Chart– Displays last 30 days of permission changes - Table – Provides details on permission changes |
