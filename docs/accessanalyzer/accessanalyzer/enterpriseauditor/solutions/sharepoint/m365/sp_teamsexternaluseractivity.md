# SP\_TeamsExternalUserActivity Job

The SP\_TeamsExternalUserActivity Job identifies all activity events performed by external users in Teams, including details on the date/time, resource, and operation.

## Analysis Tasks for the SP\_TeamsExternalUserActivity Job

Navigate to the __Jobs__ > __SharePoint__ > __8.M365__ > __SP\_TeamsExternalUserActivity__ >__Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_TeamsExternalUserActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/m365/teamsexternaluseractivityanalysis.png)

The default analysis task is:

- Analyze Teams External User Activity – Creates the SA\_SPAC\_MostActiveTeamsExternalUsers table accessible under the job's Results node

In addition to the table created by the analysis task, the SP\_TeamsExternalUserActivity Job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Teams External User Activity | This report displays most active external users within Teams, as well as Teams that have the most external users. | None | This report is comprised of three elements:   - Bar Chart – Provides information on the most active external team members - Table – Provides details on Teams with the most external users - Table – Provides details on external user activity details |
