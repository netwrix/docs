# 5.Sensitive Data Job Group

The 5.Sensitive Data Job Group provides information on where sensitive data exists, and who has
access to that sensitive data, across all targeted SQL and Azure SQL server databases.

Special Dependency for Data Collection

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

![5.Sensitive Data Job Group](/img/product_docs/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/sqljobgroup46.webp)

The jobs in the 5.Sensitive Data Job Group are:

- [SQL_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/sql_sensitivedata.md)
  – This job is designed to provide information on all the sensitive data that was discovered in the
  targeted SQL or Azure SQL servers based on the selected scan criteria
- [SQL_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/sql_sensitivedatapermissions.md)
  – This job is designed to provide all types of permissions on database objects containing
  sensitive data across all the targeted SQL or Azure SQL servers
