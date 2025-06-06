# 2-Db2\_PermissionScan Job

This job collects Db2 database level permissions from all the targeted Db2 database servers.

## Queries for the 2-Db2\_PermissionScan Job

The 2-Db2\_PermissionScan Job uses the SQL Data Collector for queries.

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/permissionsscanquery.png)

The query is:

- Db2 Permission — Scan Db2 databases for permissions

## Recommended Configuration for the Db2 Permission Query

Prior to running an Db2 0.Collection query, you must establish a connection to the appropriate IBM Db2 server. As long as that connection is set up first, it is recommended that no configuration changes be made to the 0.Collection jobs before they run.

It is also recommended that the connection only be established for the 1-Db2 SensitiveDataScan Job. Once the connection is established, it applies to all jobs in the 0.Collection job group. It does not apply to any other job groups. For additional information on establishing a database connection, see [1-Db2\_SensitiveDataScan](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/db2_sensitivedatascan.md).

## Analysis Tasks for the 2-Db2\_PermissionScan Job

Navigate to the __Databases__ > __0.Collection__ > __Db2__ > __2-Db2\_PermissionScan__ > __Configure__ node and select Analysis to view the Analysis Tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/permissionsscananalysis.png)

The default analysis tasks are:

- Update Instance Name — Updates the instance name with a port if there are multiple instances in a single host
- AIC Permissions Import — Imports Db2 permissions to the AIC
- AIC Roles Import — Imports roles to the AIC for Db2
