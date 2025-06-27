# SQL_SQLLogins Job

The SQL_SQLLogins Job provides information on successful and failed SQL server logins across all
targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SQLLogins Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL_SQLLogins > Configure node and select
Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup28.webp)

The default analysis tasks are:

- Calculate user login details – Creates the SA_SQL_UserLogin_Details table accessible under the
  job’s Results node
- User Logins Instance Summary – Creates the SA_SQLServer_UserLogins_Summary table accessible under
  the job's Results node

In addition to the tables and views created by the analysis task, the SQL_SQLLogins Job produces the
following pre-configured report.

| Report     | Description                               | Default Tags | Report Elements                                                                                                                                                                                    |
| ---------- | ----------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Logins | This report lists user login information. | None         | This report is comprised of three elements: - Bar Chart– Displays number of logins by instance - Table – Provides details on login exceptions by instance - Table – Provides details on SQL logins |
