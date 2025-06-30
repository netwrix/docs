# SP_ExternalUsers Job

The SP_TeamsExternalUsers Job identifies activity of external users on all monitored SharePoint
servers.

## Analysis Tasks for the SP_ExternalUsers Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_OneDrives** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SP_ExternalUsers Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/sharepoint/m365/externalusersanalysis.webp)

The default analysis task is:

- Analyze External User Activity – Creates the
  SA_SPAC_SharePointOnlineMostActiveExternalUsersSummary table accessible under the job's Results
  node
- Summarize External User Activity – Creates the SP_ExternalUsersDetails table accessible under the
  job's Results node

In addition to the tables created by the analysis tasks, the SP_TeamsExternalUsers Job produces the
following preconfigured report:

| Report                 | Description                                                                                   | Default Tags | Report Elements                                                                                                                                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| External User Activity | This report analyzes activity performed by external users in scanned SharePoint environments. | None         | This report is comprised of three elements: - Bar Chart – Provides information on top users by operation count - Table – Provides summary on external users - Table – Provides details on external user activity |
| External User Summary  | This report analyzes activity performed by external users in scanned SharePoint environments. | None         | This report is comprised of three elements: - Bar Chart – Provides information on top users by operation count - Table – Provides summary on external users - Table – Provides details on external user activity |
