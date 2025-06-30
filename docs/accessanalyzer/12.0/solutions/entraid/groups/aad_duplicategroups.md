# AAD_DuplicateGroups Job

The AAD_DuplicateGroups Job identifies duplicate groups within Microsoft Entra ID. Duplicate groups
contain the same group membership as one another and are suitable candidates for cleanup.

## Analysis Tasks for the AAD_DuplicateGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_DuplicateGroups** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Anaylsis tasks for AAD_DuplicateGroups Job](/img/product_docs/accessanalyzer/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Identify duplicate groups – Creates the AAD_DuplicateGroups_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DuplicateGroups Job produces the
following pre-configured report.

| Report           | Description                                                         | Default Tags | Report Elements                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None         | This report is comprised of one elements: - Bar Chart – Displays domains by number of groups with duplicates - Table – Provides duplicate groups details - Table – Provides details on domains by number of groups with duplicates |
