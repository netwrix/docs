---
title: "SP_StaleTeamSites Job"
description: "SP_StaleTeamSites Job"
sidebar_position: 40
---

# SP_StaleTeamSites Job

The SP_StaleTeamSites Job identifies Teams that have not had activity for a number of days that can
be set in the analysis (Set as 30 Days by Default).

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The SP_StaleTeamSites page has the following configurable parameters:

- Desired Number of Days Since Last Activity To Determine Staleness

See the
[Customizable Analysis Tasks for the SP_StaleTeamSites Job](#customizable-analysis-tasks-for-the-sp_staleteamsites-job)
for additional information.

## Analysis Tasks for the SP_StaleTeamSites Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_StaleTeamSites** >**Configure** node
and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the SP_StaleTeamSites Job](/images/accessanalyzer/12.0/solutions/sharepoint/m365/staleteamsitesanalysis.webp)

The default analysis task is:

- Find Stale Teams – Creates the SA_SP_StaleTeamSites table accessible under the job’s Results node

    - This task contains a configurable parameter to set the number of days a Team has not had
      activity for before it's considered stale. See the
      [Customizable Analysis Tasks for the SP_StaleTeamSites Job](#customizable-analysis-tasks-for-the-sp_staleteamsites-job)
      topic for additional information.

In addition to the table created by the analysis task, the SP_StaleTeamSites Job produces the
following preconfigured report:

| Report      | Description                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Teams | This report identifies Teams that have not had activity for a number of days that can be set in the analysis (Set at 30 Days by Default) | None         | This report is comprised of two elements: <ul><li>Bar Chart – Provides information on the top five least active sites</li><li>Table – Provides details on stale Teams sites</li></ul> |


### Customizable Analysis Tasks for the SP_StaleTeamSites Job

The default values for customizable parameters are:

| Analysis Task    | Customizable Parameter Name | Default Value | Description                                                        |
| ---------------- | --------------------------- | ------------- | ------------------------------------------------------------------ |
| Find Stale Teams | @days                       | 30            | Desired number of days since last activity to determine staleness. |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions on customizing the analysis parameters.
