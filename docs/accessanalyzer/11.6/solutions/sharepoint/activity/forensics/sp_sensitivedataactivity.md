---
title: "SP_SensitiveDataActivity Job"
description: "SP_SensitiveDataActivity Job"
sidebar_position: 30
---

# SP_SensitiveDataActivity Job

This job highlights user activity involving sensitive data and provides details on who is
interacting with your environment's sensitive content.

## Analysis Tasks for the SP_SensitiveDataActivity Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** >
**SP_SensitiveDataActivity** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_SensitiveDataActivity Job](/images/accessanalyzer/11.6/solutions/sharepoint/activity/forensics/sensitivedataactivityanalysis.webp)

The default analysis tasks are:

- Sensitive Data Activity – Creates the SA_SP_SensitiveDataActivity table accessible under the job’s
  Results node
- Sensitive Data Activity User Count – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the SP_SensitiveDataActivity Job
produces the following pre-configured report:

| Report                  | Description                                        | Default Tags | Report Elements                                                                                                                                                      |
| ----------------------- | -------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Activity | This report shows user activity on sensitive data. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays sensitive data activity</li><li>Table – Provides details on sensitive data activity</li></ul> |
