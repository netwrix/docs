# 0.Collection Job Group

The Redshift Solution Collection group collects high level summary information from targeted
Redshift Servers.  Other jobs in the Redshift Solution Set use this information for further analysis
and for producing respective reports.

![0](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/0.collection.png)

The jobs in the 0.Collection Job Group are:

- [Redshift_Configuration Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/redshift_configuration.md)
  — Returns additional configuration settings from Redshift servers
- [Redshift_SensitiveDataScan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/redshift_sensitivedatascan.md)
  — Discovers sensitive data in PostgreSQL databases based on pre-defined or user-defined search
  criteria
- [Redshift_TablePrivileges Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/redshift/collection/redshift_tableprivileges.md) -
  Designed to collect Redshift table privileges from all the targeted servers.
