# 5.Open Access > AD_OpenAccess Job

The AD_OpenAccess Job reports on all Active Directory permissions granting open access within the
targeted domains. Open Access can be defined as access granted to security principals such as:
Domain Users, Authenticated Users, and Everyone.

![5.Open Access Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/openaccessjobstree.webp)

The AD_OpenAccess Job is located in the 5.Open Access Job Group.

## Analysis Tasks for the AD_OpenAccess Job

Navigate to the **Active Directory Permissions Analyzer** > **5.Open Access** > **AD_OpenAccess** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OpenAccess Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/openaccessanalysis.webp)

The default analysis tasks are:

- Determine open access – Creates the SA_AD_OpenAccess_Details table accessible under the job’s
  Results node
- Summarize open access by domain – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_OpenAccess Job produces
the following pre-configured report.

| Report                | Description                                                                                          | Default Tags | Report Elements                                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Access by Domain | This report highlights instances of open access on AD objects, and summarizes open access by domain. | None         | This report is comprised of three elements: - Bar Chart – Displays open access by domain - Table – Provides details on open access - Table – Provides details on open access by domain |
