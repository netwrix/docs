---
sidebar_position: 5440
title: SQL_SensitiveDataActivity Job
---

# SQL\_SensitiveDataActivity Job

The SQL\_SensitiveDataActivity Job provides detailed information on DML (UPDATE, INSERT, DELETE, TRUNCATE) used against objects containing sensitive data.

## Analysis Tasks for the SQL\_SensitiveDataActivity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL\_SensitiveDataActivity > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup34.png "Analysis Selection")

The default analysis tasks are:

* SDD Activity Details – Creates the SA\_SQLServer\_SensitiveDataActivity\_Details table accessible under the job’s Results node
* SDD Activity Instance Summary – Creates the SA\_SQLServer\_SensitiveDataActivity\_UserSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None | This report is comprised of three elements:   * Bar Chart – Displays top users by instance * Table – Provides details on user activity by instance * Table – Provides details on sensitive data activity details by database |