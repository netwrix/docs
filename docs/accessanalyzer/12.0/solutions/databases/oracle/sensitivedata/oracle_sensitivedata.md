---
title: "Oracle_SensitiveData Job"
description: "Oracle_SensitiveData Job"
sidebar_position: 20
---

# Oracle_SensitiveData Job

The Oracle_SensitveData Job is designed to provide information on all sensitive data that was
discovered in targeted Oracle database servers based on selected scan criteria.

## Analysis Tasks for the Oracle_SensitiveData Job

Navigate to the **Oracle > 5.Sensitve Data > Oracle_SensitveData > Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/sensitivedata/jobgroup44.webp)

The default analysis tasks are:

- Determine sensitive data details – Creates the SA_Oracle_SensitiveData_Details table accessible
  under the job’s Results node
- Instance Summary – Creates the SA_Oracle_SensitiveData_InstanceSummary table accessible under the
  job’s Results node
- Enterprise Summary – Creates the SA_Oracle_SensitiveData_EnterpriseSummary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the **Oracle_SensitveData Job**
produces the following pre-configured reports.

| Report                  | Description                                                                 | Default Tags | Report Elements                                                                                                                                                                                                                                          |
| ----------------------- | --------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays exceptions by match count</li><li>Table – Provides information on exception details</li></ul>                                                                                     |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria        | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by sensitive data hits</li><li>Table – Provides details on instances with sensitive data</li><li>Table – Provides information on sensitive data details</li></ul> |
