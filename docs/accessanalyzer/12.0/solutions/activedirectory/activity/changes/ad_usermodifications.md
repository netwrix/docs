---
title: "AD_UserModifications Job"
description: "AD_UserModifications Job"
sidebar_position: 30
---

# AD_UserModifications Job

The AD_UserModifications Job provides a report of all changes to user objects.

## Analysis Tasks for the AD_UserModifications Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Changes** >
**AD_UserModifications** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_UserModifications Job](/images/accessanalyzer/12.0/solutions/activedirectory/activity/changes/usermodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- All User Account Changes – Creates the SA_AD_UserModifications_Details view accessible under the
  job’s Results node
- Summary of Changes – Creates the SA_AD_userModifications_userSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AD_UserModifications Job produces the
following pre-configured reports:

| Report               | Description                    | Default Tags                                               | Report Elements                                                                                                                                                                                             |
| -------------------- | ------------------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Account Changes | Track changes to user objects. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Pie Chart – Displays changes by type</li><li>Table – Displays changes by user account</li><li>Table – Displays changes by user change details</li></ul> |
