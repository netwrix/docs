---
title: "2.Activity Job Group"
description: "2.Activity Job Group"
sidebar_position: 40
---

# 2.Activity Job Group

The 2.Activity Job Group is designed to provide insight into user login activity, object permission
changes, unusual database activity, SQL activity against sensitive data, and SQL activity against
selective or all database objects.

![Activity Job Group](/images/accessanalyzer/11.6/solutions/databases/oracle/activity/jobgroup25.webp)

The jobs in the 2.Activity Job Group are:

- [Oracle_Activity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_activity.md)
  – This job is designed to provide insight into user activity in target Oracle database server
  instances and databases in each instance based on the Oracle Unified Audit settings
- [Oracle_Logons Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_logons.md)
  – This job group is designed to provide insight into failed and successful Oracle database login
  activity across all the targeted Oracle database servers
- [Oracle_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_permissionchanges.md)
  – This job is designed to provide detailed information about the changes in permissions across all
  the database objects. Audited activities include granting, altering, and revoking permissions on
  database objects.
- [Oracle_SchemaChanges Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_schemachanges.md)
  – This job is designed to provide detailed information about the changes in permissions across all
  the database objects. Audited activities include granting, altering, and revoking permissions on
  database objects.
- [Oracle_SensitiveDataActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_sensitivedataactivity.md)
  – This job is designed to provide detailed information about all the DML (UPDATE, INSERT, DELETE,
  TRUNCATE) against objects containing sensitive data
- [Oracle_SuspiciousActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_suspiciousactivity.md)
  – This job is designed to provide insight into suspicious behavior based on user activity that
  does not conform to normal database activity
- [Oracle_UnusualActivity Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/activity/oracle_unusualactivity.md)
  – This job is designed to analyze user activity based on the audited actions and identify any
  outliers based on a modified z-score. Modified z-scores of 3.5 or higher are considered to be
  possible outliers.
