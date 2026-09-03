---
title: "SQL_Authentication Job"
description: "SQL_Authentication Job"
sidebar_position: 10
---

# SQL_Authentication Job

The SQL_Authentication Job identifies authentication settings on targeted SQL and Azure SQL servers
that allow SQL server authentication in addition to Windows authentication. Microsoft recommends
configuring SQL and Azure SQL servers to use Windows authentication instead of SQL server
authentication.

## Analysis Tasks for the SQL_Authentication Job

Navigate to the **Databases** > SQL > 4.Configuration > SQL_Authentication > Configure node and
select Analysis to view the analysis tasks.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/configuration/sqljobgroup43.webp)

The default analysis tasks are:

- Determine authentication configurations – Creates the SA_SQLServer_Authentication_Details table
  accessible under the job’s Results node
- Authentication Summary – Creates the SA_SQLServer_Authentication_Summary table accessible under
  the job’s Results node. Provides a summary of targeted servers with SQL authentication enabled.

In addition to the tables and views created by the analysis task, the SQL_Authentication Job
produces the following pre-configured report.

| Report              | Description                                                                                                                                                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL  Authentication | This report identifies authentication settings on the targeted servers, and highlights those with SQL Authentication enabled. It also indicates the number of SQL logins on a given instance and whether the 'sa' login exists. Best practices recommend using integrated login only for SQL instances and renaming or removing the 'sa' principal. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays instances with integrated security only</li><li>Table – Displays integrated security details by instance</li></ul> |
