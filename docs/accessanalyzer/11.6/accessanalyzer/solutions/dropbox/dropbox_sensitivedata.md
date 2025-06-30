# 5.Sensitive Data > Dropbox_SensitiveData Job

The Dropbox_SensitiveData job identifies locations within Dropbox where sensitive data is present.
It analyzes sensitive data collected and imported by the 0.Collection job group, specifically data
discovered by the Dropbox SDD jobs. The generated reports give visibility into the types of
sensitive data found, where it exists, who has access to it, and the sharing policies configured on
it.

![5.Sensitive Data > Dropbox_SensitiveData Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/sensitivedata/sensitivedatajobstree.webp)

The Dropbox_SensitiveData job is located in the 5.Sensitive Data job group.

## Analysis Tasks for the Dropbox_SensitiveData Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **5.Sensitive Data** >
**Dropbox_SensitiveData** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_SensitiveData Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

-   1. Enterprise Summary – Creates the SA_Dropbox_SensitiveData_EnterpriseSummary table accessible
       under the job’s Results node
-   2. Folder Details – Creates the SA*Dropbox* SensitiveData_FolderDetails table accessible under
       the job’s Results node
-   3. Folder Summary – Creates the SA*Dropbox* SensitiveData_FolderSummary table accessible under
       the job’s Results node
-   4. Permission Details – Creates the SA*Dropbox* SensitiveData_PermissionDetails table accessible
       under the job’s Results node
-   5. Permission Summary – Creates the SA*Dropbox* SensitiveData_PermissionSummary table accessible
       under the job’s Results node

In addition to the tables created by the analysis tasks which display effective access to resources,
the Dropbox_SensitiveData job produces the following pre-configured reports.

| Report                     | Description                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary         | This report identifies the type and amount of sensitive content found on Dropbox.                                            | None         | This report is comprised of two elements: - Pie Chart – Displays criteria summary by match count - Table – Provides criteria summary by match count                                                                                                |
| Folder Details             | This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access. | None         | This report is comprised of three elements: - Bar Chart – Displays top sensitive folders by file count - Table – Provides top sensitive folders by file count - Table – Provides top sensitive folder details by match count                       |
| Sensitive Data Permissions | This report identifies the sensitive data locations and associated permissions.                                              | None         | This report is comprised of three elements: - Bar Chart – Displays sensitive data permission summary by file count - Table – Provides sensitive data permission summary by file count - Table – Provides sensitive data permissions by match count |
