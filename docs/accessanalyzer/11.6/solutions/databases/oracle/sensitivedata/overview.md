# 5.Sensitive Data Job Group

The 5.Sensitive Data Job Group is designed to provide insight into where sensitive data exists and
who has access to said data across all targeted Oracle database servers.

Special Dependency for Data Collection

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

![Sensitive Data Job Group](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/oracle/sensitivedata/jobgroup43.webp)

The jobs in the 5.Sensitive Data Job Group are:

- [Oracle_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/sensitivedata/oracle_sensitivedata.md)
  – This job is designed to provide information on all the sensitive data that was discovered in the
  targeted Oracle database servers based on the selected scan criteria
- [Oracle_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/sensitivedata/oracle_sensitivedatapermissions.md)
  – This job is designed to provide all types of permissions on database objects containing
  sensitive data across all the targeted Oracle database servers
