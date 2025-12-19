---
title: "AD_DeprovisionUsers_Status Job"
description: "AD_DeprovisionUsers_Status Job"
sidebar_position: 20
---

# AD_DeprovisionUsers_Status Job

The AD_DeprovisionUsers_Status Job tracks all actions taken by the included deprovisioning workflow.

## Analysis Tasks for the AD_DeprovisionUsers_Status Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the AD_DeprovisionUsers_Status Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/users/deprovisionusersstatusanalysis.webp)

The default analysis task is:

- Track History – Tracks all actions taken. Creates the SA_AD_DeprovisionUsers_Log accessible under
  the job’s Results node.

In addition to the tables and views created by the analysis task, the AD_DeprovisionUsers_Status Job
produces the following pre-configured report.

| Report              | Description                                                                          | Default Tags | Report Elements                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Deprovisioning | This report tracks actions taken each day of the Stale User Deprovisioning campaign. | None         | This report is comprised of three elements: <ul><li>Line Chart – Displays cleanup progress</li><li>Table – Provides details on user deprovisioning</li><li>Table – Provides action details</li></ul> |
