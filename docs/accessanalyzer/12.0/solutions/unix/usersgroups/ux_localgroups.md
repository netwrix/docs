---
title: "UX_LocalGroups Job"
description: "UX_LocalGroups Job"
sidebar_position: 50
---

# UX_LocalGroups Job

The UX_LocalGroups job provides an overview of all local groups within the audited Unix and Linux
environments.

## Analysis Tasks for the UX_LocalGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_LocalGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_LocalGroups Job](/images/accessanalyzer/12.0/solutions/unix/usersgroups/localgroupsanalysis.webp)

The default analysis tasks are:

- Creates local groups table – Creates the SA_UX_LocalGroups_Details table accessible under the
  job’s Results node
- Creates local groups summary table – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX_LocalGroups job produces
the following pre-configured report:

| Report       | Description                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Groups | This report summarizes local groups in the audited environment. Hosts with large numbers of local groups are highlighted, as are local groups with large memberships. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays Top Hosts by Local Group Count</li><li>Table – Provides details on All Local Groups</li></ul> |
