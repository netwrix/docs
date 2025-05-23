---
sidebar_position: 5434
title: SQL_SensitiveDataPermissions Job
---

# SQL\_SensitiveDataPermissions Job

The SQL\_SensitiveDataPermissions Job is designed to provide all types of permissions on database objects containing sensitive data across all the targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL\_SensitiveDataPermissions Job

Navigate to the **Databases** > SQL > 5.Sensitve Data > SQL\_SensitiveDataPermissions > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup48.png "Analysis Selection")

The default analysis tasks are:

* List sensitive data permission details – Creates the SA\_SQL\_SensitiveDataPermissions\_Details table accessible under the job’s Results node
* Sensitive Data Permissions Database Summary – Creates the SA\_SQL\_SensitiveDataPermissions\_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None | This report is comprised of three elements:   * Bar Chart – Displays top databases by permission count * Table – Provides details on database permission summary * Table – Provides details on sensitive data permission details |