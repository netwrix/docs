# AD_DuplicateGroups Job

The AD_Duplicate Job identifies duplicate groups within Active Directory. Duplicate groups contain
the same group membership as one another and are suitable candidates for cleanup.

## Analysis Task for the AD_DuplicateGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_DuplicateGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_DuplicateGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Identify Duplicate Groups – Creates the SA_AD_DuplicateGroups_Details table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis task, the AD_DuplicateGroups Job
produces the following pre-configured report:

| Report           | Description                                                         | Default Tags | Report Elements                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None         | This report is comprised of three elements: - Bar Chart – Displays domains by number of groups with duplicates - Table – Provides details on duplicate groups - Table – Provides details on domains by number of groups with duplicates |
