---
sidebar_position: 5258
title: FS_EmptyResources Job
---

# FS\_EmptyResources Job

The FS\_EmptyResources job is designed to report on empty resources from targeted file servers.

## Analysis Tasks for the FS\_EmptyResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** > **FS\_EmptyResources** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_EmptyResources Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Content/EmptyResourcesAnalysis.png "Analysis Tasks for the FS_EmptyResources Job")

The following analysis tasks are selected by default:

* 1. Folder Size View – Creates the SA\_ENG\_FSAA\_FolderSizeView view accessible under the job’s Results node
* 2. Empty Folders – Creates the SA\_FS\_EmptyResources\_EmptyFolders table accessible under the job’s Results node
* 3. Empty Shares – Creates the SA\_FS\_EmptyResources\_EmptyShares table accessible under the job’s Results node
* 4. Summarize by Host – Creates the SA\_FS\_EmptyResources\_HostSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_EmptyResources job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Empty Folders | Identifies empty folders with no subdirectories. | None | This report is comprised of three elements:   * Bar Chart – Displays the top five servers by empty folders * Table – Provides details on empty folders * Table – Provides details on the top servers by empty folders |
| Empty Shares | This report identifies empty shares with no subdirectories. | None | This report is comprised of three elements:   * Bar Chart – Displays the top 5 servers by empty shares * Table – Provides details on the empty shares * Table – Provides summary of the share |