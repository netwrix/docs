# AAD_StaleGroups Job

The AAD_StaleGroups Job identifies Microsoft Entra ID groups that contain potentially stale users.
Users are considered stale if they have never logged onto the domain, have not logged onto the
domain in the past 30 days, or are disabled. These group memberships should be reviewed and possibly
removed.

## Analysis Tasks for the AAD_StaleGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_StaleGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_StaleGroups Job](/img/product_docs/accessanalyzer/11.6/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The default analysis tasks are:

- Stale Group Details – Creates the AAD_StaleGroups_Details table accessible under the job’s Results
  node
- Group Summary – Creates the AAD_StaleGroups_GroupSummary table accessible under the job’s Results
  node
- Stale Groups Org Summary – Creates the AAD_StaleGroups_OrgSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AAD_StaleGroups Job produces the
following pre-configured report.

| Report                                    | Description                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Effective Membership (Stale Groups) | This report identifies groups with stale effective membership. A stale user is defined as someone who has not logged into the domain in over 30 days or is currently disabled. | None         | This report is comprised of three elements: - Chart – Displays group membership - Table – Provides group membership details - Tables – Provides stale groups organization summary |
