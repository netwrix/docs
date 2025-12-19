---
title: "Box_ExternalUserCollaborations Job"
description: "Box_ExternalUserCollaborations Job"
sidebar_position: 40
---

# Box_ExternalUserCollaborations Job

The Box_ExternalUserCollaborations Job External Users are collaborators from outside your
organization. They can be granted the same collaborator access and sharing rights as Managed Users,
but there is limited control over the content they own and their security settings.

## Analysis Tasks for the Box_ExternalUserCollaborations Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_ExternalUserCollaborations** >
**Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_ExternalUserCollaborations Job](/images/accessanalyzer/11.6/solutions/box/activity/forensics/externalusercollaborationsanalysis.webp)

The following analysis tasks are selected by default:

- External User Collaboration Details – Creates the Box_ExternalUserCollaboration_Details table
  accessible under the job’s Results node
- External User Collaboration (Last 30 Days) – Creates an interim processing table in the database
  for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_ExternalUserCollaborations Job
produces the following pre-configured report:

| Report                       | Description                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| External User Collaborations | This report identifies high-risk collaborations, highlighting most active collaborations by invites of external users. | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays last 30 days of external user collaborations</li><li>Table – Provides details on external user collaborations</li></ul> |
