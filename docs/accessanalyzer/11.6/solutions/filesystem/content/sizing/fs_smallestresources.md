---
title: "FS_SmallestResources Job"
description: "FS_SmallestResources Job"
sidebar_position: 30
---

# FS_SmallestResources Job

The FS_SmallestResources job is designed to report on the smallest resources from targeted file
servers.

## Analysis Tasks for the FS_SmallestResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** >
**FS_SmallestResources** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_SmallestResources Job](/images/accessanalyzer/11.6/solutions/filesystem/content/sizing/smallestresourcesanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Smallest Folders Ranked** – Creates the SA_FS_SmallestResources_Ranked table accessible under
       the job’s Results node
-   **2. Smallest Shares** – Creates the SA_FS_SmallestResources_SharesRanked table accessible under the
       job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_SmallestResources job
produces the following pre-configured report:

| Report          | Description                                            | Default Tags | Report Elements                                                                                            |
| --------------- | ------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------- |
| Smallest Shares | Identifies the smallest shares within the environment. | None         | This report is comprised of one element: <ul><li>Table – Provides details on the smallest shares</li></ul> |
