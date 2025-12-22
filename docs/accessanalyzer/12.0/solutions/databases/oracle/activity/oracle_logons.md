---
title: "Oracle_Logons Job"
description: "Oracle_Logons Job"
sidebar_position: 20
---

# Oracle_Logons Job

The Oracle_Logons Job is designed to provide insight into failed and successful Oracle database
login activity across all targeted Oracle database servers.

## Analysis Tasks for the Oracle_Logons Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_Logons** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/activity/jobgroup27.webp)

The default analysis tasks are:

- Oracle Logons – Reports on all Oracle logon events. Creates the SA_Oracle_Logons_Details table
  accessible under the job’s Results node.
- Logons Summary – Provides a summary of logons by Instance. Creates the SA_Oracle_Logons_Summary
  table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle_Logons Job produces
the following pre-configured report.

| Report        | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logon Summary | This report outlines successful and failed logins over the last 30 days | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by failed logons</li><li>Table – Provides details on logon summary</li><li>Table – Provides details on logon details</li></ul> |
