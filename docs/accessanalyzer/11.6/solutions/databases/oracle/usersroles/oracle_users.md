# Oracle_Users Job

The Oracle_Users Job is designed to provide insight into all attributes associated with users in all
databases in targeted Oracle database servers.

## Analysis Tasks for the Oracle_Users Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_Users** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/solutions/databases/oracle/usersroles/jobgroup24.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_Oracle_Users_Details table accessible under the job’s
  Results node
- Summarize by Instance – Creates the SA_Oracle_Users_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the Oracle_Users Job produces the
following pre-configured report.

| Report       | Description                                                          | Default Tags | Report Elements                                                                                                                                                                                       |
| ------------ | -------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Users | This report shows details on users in the audited Oracle environment | None         | This report is comprised of three elements: - Bar Chart – Displays users by instance - Table – Provides details on oracle user instance summary - Table – Provides information on oracle user details |
