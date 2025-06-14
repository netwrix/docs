# 0.Collection Job Group

The Db2 Solution Set Collection Group collects high level summary information from targeted Db2
Database Servers. Other jobs in the Db2 Solution Set use this information for further analysis and
for producing respective reports.

![jobstree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The jobs in the 0.Collection Job Group are:

- [1-Db2_SensitiveDataScan](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/db2/collection/db2_sensitivedatascan.md)
  — Discovers sensitive data in the Db2 databases across all the targeted Db2 database servers based
  on pre-defined or user-defined search criteria
- [2-Db2_PermissionScan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/db2/collection/db2_permissionscan.md)
  — Collects Db2 database level permissions from all the targeted Db2 database servers
- [3-Db2_Configuration Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/db2/collection/db2_configuration.md)—
  Collects Db2 database configuration settings for use in the following analysis jobs and respective
  reports
