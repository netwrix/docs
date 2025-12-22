---
title: "Stale > FS_StaleContent Job"
description: "Stale > FS_StaleContent Job"
sidebar_position: 30
---

# Stale > FS_StaleContent Job

The FS_StaleContent job is designed to report on stale content information from targeted file
servers.

![Stale > FS_StaleContent Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/content/stalejobstree.webp)

The FS_StaleContent job is located in the Stale job group.

## Analysis Tasks for the FS_StaleContent Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Stale** >
**FS_StaleContent** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_StaleContent Job](/images/accessanalyzer/12.0/solutions/filesystem/content/stalecontentanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Create Aging View** – Creates the SA_ENG_FSAA_FolderAging table accessible under the job’s
       Results node
-   **2. Enterprise Summary** – Creates the SA_FS_StaleContent_EnterpriseSummary table accessible under
       the job’s Results node
-   **3. Share Summary** – Creates the SA_FS_StaleContent_ShareSummary table accessible under the job’s
       Results node
-   **4. Host Summary** – Creates the SA_FS_StaleContent_HostSummary table accessible under the job’s
       Results node

In addition to the tables created by the analysis tasks, the FS_StaleContent job produces the
following pre-configured reports:

| Report                                                | Description                                                                                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                      |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hosts with Stale Content (Servers with Stale Content) | Identifies servers with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content. | None         | This report is comprised of three elements: <ul><li>Pie Chart – Displays enterprise aging summary</li><li>Stacked Bar Chart– Displays aging summary by host</li><li>Table – Provides details on servers with stale content</li></ul> |
| Shares with Stale Content                             | Identifies shares with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content.  | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays share summary</li><li>Table – Provides details on shares</li></ul>                                                                                            |
