---
title: "Oracle_DataDictionaryProtection Job"
description: "Oracle_DataDictionaryProtection Job"
sidebar_position: 30
---

# Oracle_DataDictionaryProtection Job

The Oracle_DataDictionaryProtection Job is designed to identify if the Oracle data dictionary views
are accessible by all schemas. Oracle best practice recommendation is to restrict access to data
dictionary views by default and grant explicit system privileges to access the dictionary views when
needed.

## Analysis Tasks for the Oracle_DataDictionaryProtection Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DataDictionaryProtection >
Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/configuration/analysisddprotection.webp)

The default analysis tasks are:

- Find Instances with Modifiable Data Dictionary – Finds Oracle database instances where data
  dictionary can be modified by users with system privilege access. Creates the
  SA_Oracle_DictionaryAccessible_Details table accessible under the jobs Result’s node.
- Data Dictionary Accessibility Summary – Highlights the number of database instances with the data
  dictionary access enabled and disabled. Creates the SA_Oracle_DictionaryAccessible_Summary table
  accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the
**Oracle_DataDictionaryProtection Job** produces the following pre-configured report.

| Report                        | Description                                                                                            | Default Tags | Report Elements                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Dictionary Accessibility | The report highlights the number of instances with either accessible or inaccessible data dictionaries | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays data dictionary accessibility</li><li>Table – Provides information on dictionary accessibility details</li></ul> |
