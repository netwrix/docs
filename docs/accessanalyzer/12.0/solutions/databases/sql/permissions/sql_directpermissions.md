# SQL_DirectPermissions Job

The SQL_DirectPermissions Job provides information on permissions granted to users at the schema,
database, and server level.

## Analysis Tasks for the SQL_DirectPermissions Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_DirectPermissions > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sqljobgroup38.webp)

The default analysis tasks are:

- Determine database permissions – Creates the SA_SQLServer_DirectPermissions_DatabaseDetails table
  accessible under the job’s Results node
- Determine schema permissions – Creates the SA_SQLServer_DirectPermissions_SchemaDetails table
  accessible under the job’s Results node
- Determine server permissions – Creates the SA_SQLServer_DirectPermissions_ServerDetails table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_DirectPermissions Job
produces the following pre-configured reports.

| Report               | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Database Permissions | This report highlights SQL permissions granted at the database level.     | None         | This report is comprised of three elements: - Bar Chart – Displays database permission summary - Table – Provides details on database permission summary - Table – Provides details on database permission details |
| Schema Permissions   | This report lists all SQL permissions granted at the schema level.        | None         | This report is comprised of three elements: - Bar Chart – Displays top schema by permission count - Table – Provides details on permission summary - Table – Provides details on schema permission details         |
| Server Permissions   | This report highlights SQL permissions being granted at the server level. | None         | This report is comprised of three elements: - Bar Chart – Displays server permission summary - Table – Provides details on server permission summary - Table – Provides details on server permission details       |
