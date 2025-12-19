---
title: "Box_ExternalUserActivity Job"
description: "Box_ExternalUserActivity Job"
sidebar_position: 30
---

# Box_ExternalUserActivity Job

The Box_ExternalUserActivity Job identifies and analyzes activity events performed by external users
over the last 30 days. External Users are collaborators from outside your organization. They can be
granted the same collaborator access and sharing rights as Managed Users, but there is limited
control over the content they own and their security settings.

## Analysis for the Box_ExternalUserActivity Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_ExternalUserActivity** > **Configure**
node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis for the Box_ExternalUserActivity Job](/images/accessanalyzer/12.0/solutions/box/activity/forensics/externaluseractivityanalysis.webp)

The following analysis tasks are selected by default:

- External User Activity Details – Creates the Box_ExternalUserActivity_Details table accessible
  under the job’s Results node
- External User Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables created by the analysis tasks, the Box_ExternalUserActivity Job produces
the following pre-configured report:

| Report                    | Description                                                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active External User | This report identifies highest resource activity by external users. The bar chart and summary table outline the top 5 most active external users. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top events by top external users</li><li>Table – Provides summary of events by top external user</li><li>Table – Provides details on external users</li></ul> |
