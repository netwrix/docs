---
title: "EX_NestedGroups Job"
description: "EX_NestedGroups Job"
sidebar_position: 40
---

# EX_NestedGroups Job

The EX_NestedGroups job identifies where nesting exists within distribution groups.

## Analysis Tasks for the EX_NestedGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_NestedGroups** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_NestedGroups Job](/images/accessanalyzer/11.6/solutions/exchange/distributionlists/membershipanalysis/nestedgroupsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Details** – Creates the SA_EX_NestedGroups_Details table, accessible under the job’s Results
       node
-   **2. Summarize by Domain** – Creates the SA_EX_NestedGroups_DomainSummary table, accessible under
       the job’s Results node
