---
title: "Sensitive Data Job Group"
description: "Sensitive Data Job Group"
sidebar_position: 40
---

# Sensitive Data Job Group

This job provides insight into where sensitive data exists and who has access to it across all the
targeted Redshift databases.

![sensitivedatajobgroup](/images/accessanalyzer/11.6/solutions/databases/redshift/sensitive_data/sensitivedatajobgroup.webp)

The job(s) in the Sensitive Data Job Group are:

- [Redshift_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/redshift/sensitivedata/redshift_sensitivedata.md) -
  Provides information on all the data that was discovered in the targeted Redshift database servers
  based on the selected scan criteria
- [Redshift_SensitiveDataPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/redshift/sensitivedata/redshift_sensitivedatapermissions.md) -
  Designed to provide information on all types of permissions on database objects containing
  sensitive data across all the targeted PostgreSQL servers based on the selected scan criteria.
