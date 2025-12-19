---
title: "SP_StaleFiles Job"
description: "SP_StaleFiles Job"
sidebar_position: 20
---

# SP_StaleFiles Job

The SP_StaleFiles Job identifies files that have not been modified in at least a year across
SharePoint farms. This aids administrators and users in cleaning up or archiving old and unchanged
files to help maintain a clean and healthy SharePoint environment. Report includes files, their last
modified time, total file size, versions and version size, along with file owner and file editor
information.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The SP_StaleFiles page has the following configurable parameters:

- Days since last modification to be considered stale

See the
[Customizable Analysis Tasks for the SP_StaleFiles Job](#customizable-analysis-tasks-for-the-sp_stalefiles-job)
for additional information.

## Analysis Tasks for the SP_StaleFiles Job

Navigate to the **Jobs** > **SharePoint** > **4.Content** > **SP_StaleFiles** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job. Only the `@stale` parameter can be configured for the analysis task.
:::


![Analysis Tasks for the SP_StaleFiles Job](/images/accessanalyzer/11.6/solutions/sharepoint/content/stalefilesanalysis.webp)

The default analysis task is:

- Stale File Details – Creates the SA_SP_StaleFiles_Details table accessible under the job’s Results
  node

    - This analysis task contains a configurable parameter: `@stale`. See the
      [Customizable Analysis Tasks for the SP_StaleFiles Job](#customizable-analysis-tasks-for-the-sp_stalefiles-job)
      topic for additional information.

In addition to the table created by the analysis task which displays the stale file resources, the
SP_StaleFiles Job produces the following pre-configured report:

| Report      | Description                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Files | This report identifies the files which have not been modified in the longest amount of time. | Stale Data   | This report is comprised of three elements: <ul><li>Bar Chart – Provides a comparison of stale vs active content</li><li>Bar Chart – Displays top 5 Sites by Stale Data (GB)</li><li>Table – Provides details on stale files</li></ul> |


### Customizable Analysis Tasks for the SP_StaleFiles Job

The default values for customizable parameters are:

| Analysis Task      | Customizable Parameter Name | Default Value | Instruction                                                              |
| ------------------ | --------------------------- | ------------- | ------------------------------------------------------------------------ |
| Stale File Details | @stale                      | 365           | Determines days since last modification that files are considered stale. |
