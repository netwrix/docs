# SQL_ServerPermissions Job

The SQL_ServerPermissions Job analyzes permissions granted at the server level and reports on
effective server level permissions across all audited SQL and Azure SQL server instances.

## Analysis Tasks for the SQL_ServerPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_ServerPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/solutions/databases/sql/permissions/sqljobgroup41.webp)

The default analysis tasks are:

- Server Permissions – Creates the SA_SQLServer_ServerPermission_Details table accessible under the
  job’s Results node
- System Permissions Instance Summary –Creates the SA_SQLServer_ServerPermission_InstanceSummary
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL_ServerPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                | Default Tags | Report Elements                                                                                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Permissions | This report highlights server permissions and summarizes them by instance. | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by server permissions - Table – Provides details on instances by server permission count - Table – Provides details on server permissions |
