---
title: "AD_OverlappingGPOs Job"
description: "AD_OverlappingGPOs Job"
sidebar_position: 40
---

# AD_OverlappingGPOs Job

The AD_OverlappingGPOs Job identifies conflicting and redundant GPO settings based on link location.
These GPO settings should be cleaned up or consolidated.

## Analysis Tasks for the AD_OverlappingGPOs Job

Navigate to the **Active Directory** > **4. Group Policy** > **AD_OverlappingGPOs** > **Configure**
node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected first analysis task. The first analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the AD_OverlappingGPOs Job](/images/accessanalyzer/12.0/solutions/activedirectory/grouppolicy/overlappinggposanalysis.webp)

The default analysis tasks are:

- Conflicting – Creates the SA_AD_OverlappingGPOs_Conflicts table accessible under the job’s Results
  node

The following analysis tasks are deselected by default:

:::note
Deselect the **Conflicting** analysis task before selecting the analysis tasks below.
:::


- Redundant – Restores the SA_AD_OverlappingGPOs_Redundant table to be visible under the job’s
  Results node
- Redundant GPOs by OU – Restores the SA_AD_OverlappingGPOs_RedundantGPOsbyOU table to be visible
  under the job’s Results node
- Redundant GPOs – Restores the SA_AD_OverlappingGPOs_RedundantGPOs table to be visible under the
  job’s Results node
- Conflicts by OU – Restores the SA_AD_OverlappingGPOs_ConflictsByOU table to be visible under the
  job’s Results node
- Conflicts by GPO – Restores the SA_AD_OverlappingGPOs_ConflictsByGPO table to be visible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_OverlappingGPOs Job
produces the following pre-configured reports:

| Report           | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conflicting GPOs | This report lists group policy objects that apply conflicting settings. | None         | This report is comprised of four elements: <ul><li>Bar Chart – Displays GPOs by conflicts</li><li>Table – Provides details on GPOs by conflicts</li><li>Table – Provides details on GPOs Details</li><li>Table – Provides details on OUs with conflicting GPOs</li></ul>                        |
| Redundant GPOs   | This report lists group policy objects that apply redundant settings.   | None         | This report is comprised of four elements: <ul><li>Bar Chart – Displays GPOs by redundant children</li><li>Table – Provides details on GPOs by redundant children</li><li>Table – Provides details on overlapping GPOs</li><li>Table – Provides details on OUs with most redundancies</li></ul> |
