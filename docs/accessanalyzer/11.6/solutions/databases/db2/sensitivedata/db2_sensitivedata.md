---
title: "Db2_SensitiveData Job"
description: "Db2_SensitiveData Job"
sidebar_position: 10
---

# Db2_SensitiveData Job

This job provides information on all the sensitive data that was discovered in the targeted Db2
database servers based on the selection scan criteria.

## Analysis Tasks for the Db2 _SensitiveData Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Sensitive Data** > **Db2_Sensitive Data** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Db2 _SensitiveData Job](/images/accessanalyzer/11.6/solutions/databases/db2/sensitivedata/sensitivedataanalysis.webp)

The default analysis tasks are:

- Sensitive Data Details – Provides details on sensitive data in Db2 databases
- Database Summary – Summarizes Db2 sensitive data by database
- Enterprise Summary – Summarizes all discovered sensitive data by category

## Reports for the Db2_SensitiveData Job

In addition to the tables and views created the analysis task, the Db2_SensitiveData job produces
the following preconfigured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | Sensitive Data | This report is comprised of two elements: <ul><li>Bar Chart – Displays Exceptions by March Count</li><li>Table – Displays data details</li></ul>                                                                            |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top Databases by Sensitive Data Hits</li><li>Table – Displays Top Databases by Sensitive Data Hits</li><li>Table – Displays data details</li></ul> |
