---
title: "UX_EmptyGroups Job"
description: "UX_EmptyGroups Job"
sidebar_position: 30
---

# UX_EmptyGroups Job

The UX_EmptyGroups job identifies empty groups found within the audited Unix or Linux environment.
These are suitable candidates for consolidation or cleanup.

## Analysis Tasks for the UX_EmptyGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_EmptyGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_EmptyGroups Job](/images/accessanalyzer/11.6/solutions/unix/usersgroups/emptygroupsanalysis.webp)

The default analysis tasks are:

- Finds empty groups – Creates the SA_UX_EmptyGroups_Details table accessible under the job’s
  Results node
- Summarizes empty groups – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX_EmptyGroups job produces
the following pre-configured report:

| Report       | Description                                                    | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------ | -------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Groups | This report identifies empty groups within the audited domains | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Empty Groups by Type</li><li>Table – Provides details on Empty Groups by Type bar chart</li><li>Table – Provides information on Empty Group Details</li></ul> |
