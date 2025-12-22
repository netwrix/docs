---
title: "AD_DeprovisionComputers_Status Job"
description: "AD_DeprovisionComputers_Status Job"
sidebar_position: 20
---

# AD_DeprovisionComputers_Status Job

The AD_DeprovisionComputers_Status Job tracks and reports on the progress of the computer
deprovisioning workflow.

## Analysis Tasks for the AD_DeprovisionComputers_Status Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** >
**AD_DeprovisionComputers_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for AD_DeprovisionComputers_Status Job](/images/accessanalyzer/12.0/solutions/activedirectory/cleanup/computers/deprovisioncomputersstatusanalysis.webp)

The default analysis tasks are:

- Track Deletion – Creates the AD_DeprovisionComputers_Log table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the AD_DeprovisionComputers_Status
Job produces the following pre-configured report.

| Report                  | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Deprovisioning | This report tracks actions taken each day of the Stale Computer Deprovisioning campaign. | None         | This report is comprised of three elements: <ul><li>Line Chart – Displays cleanup progress</li><li>Table – Provides details on computer deprovisioning</li><li>Table – Provides action details</li></ul> |
