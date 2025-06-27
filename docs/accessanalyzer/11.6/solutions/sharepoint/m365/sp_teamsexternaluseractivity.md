# SP_TeamsExternalUserActivity Job

The SP_TeamsExternalUserActivity Job identifies all activity events performed by external users in
Teams, including details on the date/time, resource, and operation.

## Analysis Tasks for the SP_TeamsExternalUserActivity Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** >
**SP_TeamsExternalUserActivity** >**Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_TeamsExternalUserActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/m365/teamsexternaluseractivityanalysis.webp)

The default analysis task is:

- Analyze Teams External User Activity – Creates the SA_SPAC_MostActiveTeamsExternalUsers table
  accessible under the job's Results node

In addition to the table created by the analysis task, the SP_TeamsExternalUserActivity Job produces
the following preconfigured report:

| Report                       | Description                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Teams External User Activity | This report displays most active external users within Teams, as well as Teams that have the most external users. | None         | This report is comprised of three elements: - Bar Chart – Provides information on the most active external team members - Table – Provides details on Teams with the most external users - Table – Provides details on external user activity details |
