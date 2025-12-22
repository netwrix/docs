---
title: "AD_StaleComputers Job"
description: "AD_StaleComputers Job"
sidebar_position: 30
---

# AD_StaleComputers Job

The AD_StaleComputers Job provides details on stale computers that may be candidates for cleanup.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The AD_StaleComputers Job has the following configurable parameters:

- Days since Last Logon
- Consider disabled accounts as stale

See the
[Customizable Analysis Parameters for the AD_StaleComputers Job](#customizable-analysis-parameters-for-the-ad_stalecomputers-job)
topic for additional information.

## Analysis Tasks for the AD_StaleComputers Job

Navigate to the **Active Directory** > **3.Computers** > **AD_StaleComputers** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the **2. Summarize by Domain** analysis task. This analysis
task is preconfigured for this job.
:::


![Analysis Tasks for the AD_StaleComputers Job](/images/accessanalyzer/12.0/solutions/activedirectory/computers/stalecomputersanalysis.webp)

The default analysis tasks are:

-   **1. Identify Stale Computers**

    - Identifies computer objects that are disabled or have exceeded the defined threshold of
      inactivity
    - Creates the SA_AD_StaleComputers_Details table accessible under the job’s Results node
    - Definition of a stale computer can be customized

-   **2. Summarize by Domain** – Creates the SA_AD_StaleComputers_DomainSummay table accessible under
       the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_StaleComputers Job
produces the following pre-configured report:

| Report          | Description                                                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Computers | This report presents potentially stale computers. Computers are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 90 days, or are disabled. <br /><br />**NOTE:** The definition of a stale computer is customizable. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays stale computers by domain</li><li>Table – Provides details on computers</li><li>Table – Provides summary of stale computers</li></ul> |



### Customizable Analysis Parameters for the AD_StaleComputers Job

Analysis parameters that can be customized have the following default values:

| Analysis Task               | Customizable Parameter Name | Default Value | Value Indicates                                                                                                                                                               |
| --------------------------- | --------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Identify Stale Computers | @days_since_last_logon      | 90            | A computer object that has been inactive for 90 days or more                                                                                                                  |
| 1. Identify Stale Computers | @consider_disable           | 1             | A computer object that has been disabled: <ul><li>Value 1 = Disabled computers are included as stale</li><li>Value 0 = Disabled computers are not included as stale</li></ul> |


See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for additional information.
