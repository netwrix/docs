---
title: "AAD_NestedGroups Job"
description: "AAD_NestedGroups Job"
sidebar_position: 60
---

# AAD_NestedGroups Job

The AAD_NestedGroups Job identifies nested groups within Microsoft Entra ID and provides details
such as the levels of nesting. While Microsoft Entra ID provides the ability to nest certain types
of groups within other groups, Microsoft recommends nesting does not go beyond two levels in order
to avoid difficulties in understanding effective membership and access.

## Analysis Tasks for the AAD_NestedGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_NestedGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis tasks for AAD_NestedGroups Job](/images/accessanalyzer/12.0/solutions/entraid/groups/nestedgroupsanalysis.webp)

The default analysis tasks are:

- Get nested group details – Creates the AAD_NestedGroups_Details table accessible under the job’s
  Results node
- Summarize nested groups – Creates the AAD_NestedGroups_DomainSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_NestedGroups Job produces the
following pre-configured report.

| Report        | Description                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nested Groups | This report identifies the groups with the largest nested group count, as well as their deepest level of nesting. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top domains by group nesting</li><li>Table – Provides nested group details</li><li>Tables – Provides details on top domains by group nesting</li></ul> |
