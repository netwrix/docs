# FS_UnresolvedSIDs Job

The FS_UnresolvedSIDs job is designed to report on unresolved SIDs that have been granted direct
permissions on resources from targeted file servers.

## Analysis Tasks for the FS_UnresolvedSIDs Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_UnresolvedSIDs** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_UnresolvedSIDs Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/directpermissions/unresolvedsidsanalysis.webp)

The following analysis task is selected by default:

- Unresolved SIDs – Creates the SA_FS_UnresolvedSIDs_SIDsByResourcePath table accessible under the
  job's Results node

In addition to the tables and views created by the analysis task, the FS_UnresolvedSIDs job produces
the following pre-configured report:

| Report          | Description                                                                            | Default Tags | Report Elements                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unresolved SIDs | This report identifies where permissions are assigned for users which no longer exist. | None         | This report is comprised of two elements: - Bar Chart – Displays top servers by affected folders - Table – Provides details on top unresolved SIDs - Table – Provides details on top servers by affected folders |
