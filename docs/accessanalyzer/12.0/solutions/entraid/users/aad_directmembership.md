# AAD_DirectMembership Job

The AAD_DirectMembership Job identifies Microsoft Entra ID users who do not have any group
membership. This condition may indicate unnecessary user accounts that are suitable candidates for
review and cleanup.

## Analysis Tasks for the AAD_DirectMembership Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_DirectMembership** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_DirectMembership Job](/img/product_docs/accessanalyzer/12.0/solutions/activedirectory/users/directmembershipanalysis.webp)

The default analysis tasks are:

- Get user direct membership details – Creates the AAD_DirectMembership_Details table accessible
  under the job’s Results node
- Summarize user direct membership details by domain – Creates the
  AAD_DirectoryMembership_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DirectMembership Job produces the
following pre-configured report.

| Report              | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Group Membership | This report identifies users with no group membership. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by users with no group membership - Table – Provides details on all users with no group membership - Tables – Provides details on top domains by users with no group membership |
