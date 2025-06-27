# SQL_Logons Job

The SQL_Logons Job provides insight into failed and successful SQL and Azure SQL server logon
activity across all targeted SQL and Azure SQL servers.

## Analysis Tasks for the SQL_Logons Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_Logons > Configure node and select Analysis
to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/sql/activity/sqljobgroup32.webp)

The default analysis tasks are:

- Logon Details – Creates the SA_SQLServer_Logons_Details table accessible under the job’s Results
  node
- Logons Summary – Creates the SA_SQL_Logons_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_Logons Job produces the
following pre-configured report.

| Report               | Description                                                             | Default Tags | Report Elements                                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Logon Details | This report outlines successful and failed logins over the last 30 days | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays logon summary - Table – Provides details on logon summary - Table – Provides details on logon details |
