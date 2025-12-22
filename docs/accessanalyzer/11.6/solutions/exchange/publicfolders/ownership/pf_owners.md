---
title: "PF_Owners Job"
description: "PF_Owners Job"
sidebar_position: 20
---

# PF_Owners Job

The PF_Owners job is comprised of analysis and reports that focus on public folder ownership, and
most importantly the identification of each public folder's Most Probable Owner. The Most
Probable Owner is a unique algorithm built into the public folder data collector that is determined
based on folder ownership, content posted, and size of content posted.

## Analysis Tasks for the PF_Owners Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Ownership** >
**PF_Owners** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the PF_Owners Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/ownership/ownersanalysis.webp)

The following analysis tasks are selected by default:

- 00.Probable Owners – Creates the SA_PF_Ownership_ProbableOwners table, accessible under the job’s
  Results node
- 01.ID rate by Root Folder – Creates the SA_PF_Ownership_SuccessRate table, accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Owners job produces the
following pre-configured reports:

| Report                                                      | Description                                                                                                                                | Default Tags | Report Elements                                                                                                                                                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identification Success (Probable Owner Identification Rate) | This report identifies folder trees with a high success rate of probable owners identified. This may help scope initial cleanup campaigns. | None         | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays probable owner identification success</li><li>Table – Provides details probable owner identification success</li></ul> |
| Probable Owners                                             | This report identifies probable owners for all scanned folders.                                                                            | None         | This report is comprised of one element: <ul><li>Table – Provides details on probable owners</li></ul>                                                                                                |
