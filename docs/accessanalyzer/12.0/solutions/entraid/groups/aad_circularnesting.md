---
title: "AAD_CircularNesting Job"
description: "AAD_CircularNesting Job"
sidebar_position: 10
---

# AAD_CircularNesting Job

The AAD_CircularNesting Job identifies circularly nested groups within Microsoft Entra ID which can
pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AAD_CircularNesting Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_CircularNesting** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis tasks for AAD_CircularNesting Job](/images/accessanalyzer/12.0/solutions/entraid/groups/circularnestinganalysis.webp)

The default analysis tasks are:

- Provide detail on instances of circular nesting – Creates the SA_AAD_CircularNesting_Details table
  accessible under the job’s Results node
- Summarize circular nesting by domain – Creates the SA_AAD_Circularnesting_DomainSummary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_CircularNesting Job produces the
following pre-configured report.

| Report           | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circular Nesting | This report identifies instances of circular nesting within your environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart– Displays circular nesting by domain</li><li>Table – Provides details on circular nesting</li><li>Table – Provides details on circular nesting by domain</li></ul> |
