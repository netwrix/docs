---
sidebar_position: 5501
title: Oracle_SensitiveDataPermissions Job
---

# Oracle\_SensitiveDataPermissions Job

The Oracle\_SensitiveDataPermissions Job is designed to provide information on permissions on database objects containing sensitive data across all targeted Oracle database servers.

## Analysis Tasks for the Oracle\_SensitiveDataPermissions Job

Navigate to the **Oracle > 5.Sensitive Data > Oracle\_SensitiveDataPermissions > Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup45.png "Analysis Selection")

The default analysis tasks are:

* Detail Oracle SDD Permissions – Creates the SA\_Oracle\_SensitiveDataPermissions\_Details table accessible under the job’s Results node
* SDD Perms Instance Summary – Creates the SA\_Oracle\_SensitiveDataPermissions\_InstanceSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the **Oracle\_SensitiveDataPermissions Job** produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment | None | This report is comprised of three elements:   * Bar Chart – Displays top instances by permission count * Table – Provides details on instance permission summary * Table – Provides information on sensitive data permission details |