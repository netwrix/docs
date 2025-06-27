# FS_SensitiveDataActivity Job

The FS_SensitiveDataActivity job is designed to report on activity event information on resources
identified to contain sensitive information from targeted file servers.

## Analysis Tasks for the FS_SensitiveDataActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_SensitiveDataActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_SensitiveDataActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/sensitivedataactivityanalysis.webp)

The following analysis tasks are selected by default:

- Summarize Hourly Norms and Deviations – Creates the SA_FS_SensitiveDataActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_SensitiveDataActivity job
produces the following pre-configured report:

| Report                       | Description                                                                          | Default Tags                                          | Report Elements                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Sensitive Data Activity | This report highlights periods of abnormally high activity involving sensitive data. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart – Displays abnormal sensitive data activity - Table – Provides details on sensitive data activity |
