# SQL_DatabasePrinciples Job

The SQL_DatabasePrinciplesJob provides detailed information on database principals across all
targeted SQL or Azure SQL server instances.

## Analysis Tasks for the SQL_DatabasePrinciples Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_DatabasePrinciples > Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup23.webp)

The default analysis tasks are:

- Determine user details – Creates the SA_SQLServer_DatabasePrincipals_Details table accessible
  under the job’s Results node
- Summarize by instance – Creates the SA_SQLServer_DatabasePrincipals_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_DataPrinciples Job
produces the following pre-configured report.

| Report              | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Principles | This report determines all database principals on a per-instance basis. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by domain principal count - Table – Provides details on principal count by instance - Table – Provides details on principal details |
