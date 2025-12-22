---
title: "1.Access > Dropbox_Access Job"
description: "1.Access > Dropbox_Access Job"
sidebar_position: 30
---

# 1.Access > Dropbox_Access Job

The Dropbox_Access job provides insight into effective access to resources within the targeted
Dropbox environment, specifically highlighting inactive access rights that can be revoked. It is
dependent on data collected by the 0.Collection job group. This job processes analysis tasks and
generates reports.

![1.Access > Dropbox_Access Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/dropbox/accessjobstree.webp)

The Dropbox_Access job is located in the 1.Access job group.

## Analysis Tasks for the Dropbox_Access Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **1.Access** > **Dro
pbox_Access** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Dropbox_Access Job](/images/accessanalyzer/12.0/solutions/dropbox/accessanalysis.webp)

- Get access details – Creates the SA_Dropbox_Access_Details table accessible under the job’s
  Results node
- Summarize access details – Creates the SA_Dropbox_Access_Summary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks which display effective access to resources,
the Dropbox_Access job produces the following pre-configured reports.

| Report           | Description                                                                                                                                                                | Default Tags                                          | Report Elements                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective Access | This report shows effective access for all files in Dropbox.                                                                                                               | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays access by team</li><li>Table – Provides summary of database access</li><li>Table – Provides details on database access</li></ul> |
| Inactive Access  | This report identifies instances of inactive access in Dropbox. Inactive access to a shared folder occurs when a user has left the shared folder, but can still rejoin it. | None                                                  | This report is comprised of two elements: <ul><li>Bar Chart – Displays inactive access by team</li><li>Table – Provides details on inactive access</li></ul>                                                      |
