# Oracle_DomainUserPermissions Job

The Oracle_DomainUserPermissions Job provides insight into Microsoft Active Directory domain user
accesses to Oracle database objects both at the instance and object level.

## Analysis Tasks for the Oracle_DomainUserPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_DomainUserPermissions** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup34.webp)

The default analysis tasks are:

- Calculate domain user permissions details – Creates the SA_ORACLE_DomainUserPermissions_Details
  table accessible under the job’s Results node
- Summarize domain user permissions – Creates the SA_ORACLE_DomainUserPermissions_Summary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle_DomainUserPermissions
Job produces the following pre-configured report.

| Report             | Description                                                                             | Default Tags | Report Elements                                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain User Access | This report looks at permissions granted to domain users across the audited environment | None         | This report is comprised of three elements: - Bar Chart – Displays top users by instance count - Table – Provides details on access sprawl - Table – Provides information on permission details |
