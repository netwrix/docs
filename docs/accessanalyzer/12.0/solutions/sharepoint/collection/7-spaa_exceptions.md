---
title: "7-SPAA_Exceptions Job"
description: "7-SPAA_Exceptions Job"
sidebar_position: 70
---

# 7-SPAA_Exceptions Job

This job searches scanned data for resources that match high risk conditions and retrieves a
summary of SharePoint exceptions per host.

## Parameter Configuration

Use the Configuration section on a Job's overview page to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The 7-SPAA_Exceptions page has the following configurable parameters:

- #opengroups – High-risk groups such as those known to be sensitive or open can be added

    :::note
    Groups must be entered exactly as they are listed in SA_SPAA_Trustees. Copy and paste
    the Group name as it appears in the Name Column.
    :::


See the
[Customizable Analysis Tasks for the 7-SPAA_Exceptions Job](#customizable-analysis-tasks-for-the-7-spaaexceptions-job)
for additional information.

## Analysis Tasks 7-SPAA_Exceptions Job

The 7-SPAA_Exceptions Job doesn't use the SPAA Data Collector. Instead it runs analysis on the data
returned by the 5-SPAA_BulkImport Job. View the analysis tasks by navigating to the **Jobs** >
**SharePoint** > **0.Collection** > **7-SPAA_Exceptions** > **Configure** node and select
**Analysis**.

:::warning
The analysis tasks are preconfigured for this job. Never modify or deselect the
selected analysis tasks.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/sharepoint/collection/spaaexceptionsanalysis.webp)

The default analysis tasks are:

- Open resources – Any site collections, sites, libraries, lists, or folders that are openly
  accessible. Can be deselected if open resource information isn't desired.

    - This analysis task contains a configurable parameter: `#opengroups`

- Disabled users – Any site collections, sites, libraries, lists, or folders where disabled users
  have been granted access. Can be deselected if disabled user information isn't desired.
- Stale users – Any site collections, sites, libraries, lists, or folders where stale users have
  been granted access. Stale users are users who have not logged in for more than 120 days. Can be
  deselected if stale user information isn't desired.
- Unresolved SID – Matches SIDs to .Active Directory Inventory Job Group data to resolve for those
  users using legacy SIDS or deleted users.
- Show view – Displays views within the Results node of the Access Analyzer Console.

### Customizable Analysis Tasks for the 7-SPAA_Exceptions Job

The default values for customizable parameters are:

| Analysis Task  | Customizable Parameter Name | Default Value | Instruction                                                                                                                            |
| -------------- | --------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Open resources | #opengroups                 | Empty         | Groups must be entered exactly as they are listed in SA_SPAA_Trustees. Copy and paste the Group name as it appears in the Name Column. |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
for additional information.
