# SQL\_ServerPermissions Job

The SQL\_ServerPermissions Job analyzes permissions granted at the server level and reports on effective server level permissions across all audited SQL and Azure SQL server instances.

## Analysis Tasks for the SQL\_ServerPermissions Job

Navigate to the __Databases__ > SQL > 3.Permissions > SQL\_ServerPermissions > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/permissions/sqljobgroup41.png)

The default analysis tasks are:

- Server Permissions – Creates the SA\_SQLServer\_ServerPermission\_Details table accessible under the job’s Results node
- System Permissions Instance Summary –Creates the SA\_SQLServer\_ServerPermission\_InstanceSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL\_ServerPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Server Permissions | This report highlights server permissions and summarizes them by instance. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by server permissions - Table – Provides details on instances by server permission count - Table – Provides details on server permissions |
