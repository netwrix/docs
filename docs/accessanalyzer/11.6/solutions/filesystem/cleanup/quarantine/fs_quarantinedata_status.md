# FS_QuarantineData_Status Job

The FS_QuarantineData_Status job is designed to report on the FS_QuarantineData job. See the
[FS_QuarantineData Job](/docs/accessanalyzer/11.6/solutions/filesystem/cleanup/quarantine/fs_quarantinedata.md) topic
for additional information.

## Analysis Tasks for the FS_QuarantineData_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_QuarantineData_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_QuarantineData_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/quarantinedatastatusanalysis.webp)

The following analysis task is selected by default:

- Summarize quarantine actions – Creates the SA_FS_Quarantine_Status_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_QuarantineData_Status job
produces the following pre-configured report.

| Report            | Description                                                                            | Default Tags | Report Elements                                                                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Quarantining | This report summarizes file quarantining which has occurred during the Cleanup process | None         | This report is comprised of two elements: - Line Chart – Displays the historical summary of file quarantining - Table – provides details on file quarantining |
