# FS_EmptyResources Job

The FS_EmptyResources job is designed to report on empty resources from targeted file servers.

## Analysis Tasks for the FS_EmptyResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** >
**FS_EmptyResources** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_EmptyResources Job](/img/product_docs/accessanalyzer/solutions/filesystem/content/sizing/emptyresourcesanalysis.webp)

The following analysis tasks are selected by default:

-   1. Folder Size View – Creates the SA_ENG_FSAA_FolderSizeView view accessible under the job’s
       Results node
-   2. Empty Folders – Creates the SA_FS_EmptyResources_EmptyFolders table accessible under the
       job’s Results node
-   3. Empty Shares – Creates the SA_FS_EmptyResources_EmptyShares table accessible under the job’s
       Results node
-   4. Summarize by Host – Creates the SA_FS_EmptyResources_HostSummary table accessible under the
       job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_EmptyResources job
produces the following pre-configured reports:

| Report        | Description                                                 | Default Tags | Report Elements                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Folders | Identifies empty folders with no subdirectories.            | None         | This report is comprised of three elements: - Bar Chart – Displays the top five servers by empty folders - Table – Provides details on empty folders - Table – Provides details on the top servers by empty folders |
| Empty Shares  | This report identifies empty shares with no subdirectories. | None         | This report is comprised of three elements: - Bar Chart – Displays the top 5 servers by empty shares - Table – Provides details on the empty shares - Table – Provides summary of the share                         |
