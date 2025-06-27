# AD_DirectMembership Job

The AD_DirectMembership Job identifies users who do not have any group membership. This condition
may indicate unnecessary user accounts that are suitable candidates for review and cleanup.

## Analysis Tasks for the AD_DirectMembership Job

Navigate to the **Active Directory** > **2.Users** > **AD_DirectMembership** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DirectMembership Job](/img/product_docs/accessanalyzer/solutions/activedirectory/users/directmembershipanalysis.webp)

The default analysis tasks are:

- User Details – Creates the SA_AD_DirectMembership_Details table accessible under the job’s Results
  node
- Domain Summary – Creates the SA_AD_DirectMembership_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DirectMembership Job
produces the following pre-configured report:

| Report              | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Group Membership | This report identifies users with no group membership. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by users with no membership - Table – Provides details on all users with no group membership - Table – Provides details on top domains by users with no membership |
