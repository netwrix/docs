---
title: "AAD_ProbableOwners Job"
description: "AAD_ProbableOwners Job"
sidebar_position: 70
---

# AAD_ProbableOwners Job

The AAD_ProbableOwners Job determines potential owners for Microsoft Entra ID Groups which can be
used to perform automated membership reviews and enable self-service group management and membership
requests.

## Analysis Tasks for the AAD_ProbableOwners Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_ProbableOwners** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis tasks for AAD_ProbableOwners Job](/images/accessanalyzer/11.6/solutions/entraid/groups/probableownersanalysis.webp)

The default analysis tasks are:

- Calculates group probable owners – Creates the AAD_ProbableOwners_Details table accessible under
  the job’s Results node
- Summarizes group probable owners by domain – Creates the AAD_ProbableOwners_DomainSummary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_ProbableOwners Job produces the
following pre-configured report.

| Report          | Description                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Probable Owners | This report identifies the most probable manager based on effective member attributes. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays top domains by blank manager field</li><li>Table – Provides probable owner details</li><li>Tables – Provides details on top domains by blank manager field</li></ul> |
