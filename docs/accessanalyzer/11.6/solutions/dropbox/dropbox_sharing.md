---
title: "2.Sharing > Dropbox_Sharing Job"
description: "2.Sharing > Dropbox_Sharing Job"
sidebar_position: 40
---

# 2.Sharing > Dropbox_Sharing Job

The Dropbox_Sharing job provides insight into the sharing of resources within the targeted Dropbox
environment. It is dependent on data collected by the 0.Collection job group. This job processes
analysis tasks and generates a report on which resources are being shared and under which policy the
sharing occurs. Best practices often dictate that these resources should be carefully monitored due
to the amount of access to the data. If these resources contain privileged data, the access should
be reevaluated or the sensitive resources relocated.

![2.Sharing > Dropbox_Sharing Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/dropbox/sharingjobstree.webp)

The Dropbox_Sharing job is located in the 2.Sharing job group.

## Analysis Tasks for the Dropbox_Sharing Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **2.Sharing** >
**Dropbox_Sharing** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Dropbox_Sharing Job](/images/accessanalyzer/11.6/solutions/dropbox/sharinganalysis.webp)

- Get shared folder details – Creates the SA_Dropbox_Sharing_Details table accessible under the
  job’s Results node
- Summarize sharing by team – Creates the SA_Dropbox_Sharing_TeamSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks which display details on shared resources,
the Dropbox_Sharing job produces the following pre-configured report.

| Report                   | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared Files and Folders | This report lists all shares by team, and provides sharing policy and owner information. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays shared folders by team</li><li>Table – Provides details on shared folders by team</li><li>Table – Provides details on shares</li></ul> |
