# AAD_EmptyGroups Job

The AAD_EmptyGroups Job identifies empty groups within Microsoft Entra ID which are suitable
candidates for consolidation or cleanup.

## Analysis Tasks for the AAD_EmptyGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_EmptyGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_EmptyGroups Job](/img/product_docs/accessanalyzer/12.0/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.webp)

The default analysis tasks are:

- Empty Groups – Creates the AAD_EmptyGroups_Empty table accessible under the job’s Results node
- Single User Groups – Creates the AAD_EmptyGroups_SingleUser table accessible under the job’s
  Results node
- Empty Group Summary – Creates the AAD_EmptyGroups_EmptySummary table accessible under the job’s
  Results node
- Single User Group Summary – Creates the AAD_EmptyGroups_SingleUserSummary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_EmptyGroups Job produces the
following pre-configured reports.

| Report             | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------------ | --------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Groups       | This report identifies all groups without any members.          | None         | This report is comprised of three elements: - Bar Chart – Displays domains by number of empty groups - Table – Provides details on empty groups - Table – Provides details on number of empty groups by domain                         |
| Single User Groups | This report identifies groups which only contain a single user. |              | This report is comprised of three elements: - Bar Chart – Displays top domains by single user group count - Table – Provides details on top domains by single user group count - Table – Provides details on single user group details |
