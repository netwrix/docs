---
title: "SQL_SecurityAssessment Job"
description: "SQL_SecurityAssessment Job"
sidebar_position: 90
---

# SQL_SecurityAssessment Job

The SQL_SecurityAssessment Job summarizes and categorizes security findings into HIGH, MEDIUM, LOW,
and NO FINDINGS categories based on severity.

![SQL_SecurityAssessment](/images/accessanalyzer/12.0/solutions/databases/sql/sqljobgroup49.webp)

**Special Dependencies**

One or more of the following jobs or job groups must be run to produce results:

- [0.Collection > SQL Job Group](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/overview.md)
- [SQL_PasswordIssues Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql_passwordissues.md)
- [SQL_RoleMembers Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql_rolemembers.md)
- [SQL_PublicPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_publicpermissions.md)
- [5.Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/databases/sql/sensitivedata/overview.md)
- [Privileged Accounts Job Group](/docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/overview.md)
- [Privileged Accounts Job Group](/docs/accessanalyzer/12.0/solutions/windows/privilegedaccounts/overview.md)

Only information collected from jobs/groups being run will produce findings.

### Analysis Task for the SQL_SecurityAssessment Job

Navigate to the SQL > SQL_SecurityAssesment > Configure node and select Analysis to view the
analysis task.

![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/sqljobgroup50.webp)

The default analysis task is:

- Summarize Audit Findings – Pulls data from tables created by the jobs and job groups throughout
  the SQL Solution to provide a summary of results in the SQL Security Assessment report

In addition to the tables and views created by the analysis task, the SQL_SecurityAssessment Job
produces the following pre-configured report.

| Report                  | Description                                                                | Default Tags        | Report Elements                                                                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Security Assessment | This report summarizes security related results from the SQL solution set. | Security Assessment | This report is comprised of four elements: <ul><li>Table – Provides details on the scope of the audit of the SQL Solution set</li><li>Pie Chart – Displays job findings by severity</li><li>Table – Displays findings by category and provides details on the SQL_SecurityAssessment job results</li></ul> |
