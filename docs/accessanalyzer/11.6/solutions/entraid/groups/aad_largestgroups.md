---
title: "AAD_LargestGroups Job"
description: "AAD_LargestGroups Job"
sidebar_position: 50
---

# AAD_LargestGroups Job

The AAD_LargestGroups Job identifies groups with large effective member counts. These groups may
cause administrative overhead and burden in being able to easily understand who is getting access to
resources, or how much access is being granted to resources through these groups.

## Analysis Tasks for the AAD_LargestGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_LargestGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis tasks for AAD_LargestGroups Job](/images/accessanalyzer/11.6/solutions/entraid/groups/largestgroupsanalysis.webp)

The default analysis tasks are:

- Calculate large group details – Creates the AAD_LargestGroups_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_LargestGroups Job produces the
following pre-configured report.

| Report         | Description                                                              | Default Tags | Report Elements                                                                                                                        |
| -------------- | ------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Groups | This report identifies the largest groups within the audited environment | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays largest groups</li><li>Table – Provides group details</li></ul> |
