---
title: "EX_CircularNesting Job"
description: "EX_CircularNesting Job"
sidebar_position: 10
---

# EX_CircularNesting Job

The EX_CircularNesting job identifies where circular nesting exists within distribution groups.

## Analysis Tasks for the EX_CircularNesting Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_CircularNesting** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_CircularNesting Job](/images/accessanalyzer/11.6/solutions/exchange/distributionlists/membershipanalysis/circularnestinganalysis.webp)

The following analysis tasks are selected by default:

-   **1. Circular Nesting Details** – Creates the SA_EX_CircularNesting_Details table, accessible under
       the job’s Results node
-   **2. Domain Summary** – Creates the SA_EX_CircularNesting_DomainSummary table, accessible under the
       job’s Results node
