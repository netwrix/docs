# SP_StaleUsers Job

A stale user is defined as either currently disabled within Active Directory, or has not logged onto
the domain for over 90 days. This job will identify locations where there are stale users directly
applied on SharePoint resources. These permissions can be safely removed.

## Analysis Tasks for the SP_StaleUsers Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP_StaleUsers** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SP_StaleUsers Job](/img/product_docs/accessanalyzer/12.0/solutions/activedirectory/users/staleusersanalysis.webp)

The default analysis tasks are:

-   1. Direct Permissions. Shows all Direct User Permissions – Creates the
       SA_SP_StaleUsers_DirectPermissions table accessible under the job’s Results node
-   2. Rank Resources by Number of Stale Users – Creates the SA_SP_StaleUsers_ResourcePermCounts
       table accessible under the job’s Results node
-   3. Rank Domain Users by Number of Direct Assignments – Creates the
       SA_SP_StaleUsers_UserPermCount table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions for stale
users, the SP_StaleUsers Job produces the following pre-configured report:

| Report                 | Description                                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale User Permissions | A stale user is defined as either currently disabled within Active Directory, or has not logged onto the domain for over 90 days. | None         | This report is comprised of three elements: - Bar Chart – Displays top 5 users by affected resources - Table – Provides details on top resource by stale user permissions - Table – Provides details on top stale users by affected resources |
