# UX_DuplicateGroups Job

The UX_DuplicateGroups job identifies duplicate groups within the audited Unix or Linux environment.
Duplicate groups contain the same group membership as one another and are suitable candidates for
cleanup.

## Analysis Tasks for the UX_DuplicateGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_DuplicateGroups** > **Configure** node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the UX_DuplicateGroups Job](/img/product_docs/accessanalyzer/12.0/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Finds duplicate groups – Creates the SA_UX_DuplicateGroups_Details table accessible under the
  job’s Results node
- Summarizes duplicate groups – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX_DuplicateGroups job
produces the following pre-configured report:

| Report           | Description                                                        | Default Tags | Report Elements                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains | None         | This report is comprised of two elements: - Bar Chart – Displays Largest Groups with Duplicates - Table – Provides details on Duplicate Group Details |
