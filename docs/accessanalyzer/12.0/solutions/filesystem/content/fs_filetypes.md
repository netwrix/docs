---
title: "File Types > FS_FileTypes Job"
description: "File Types > FS_FileTypes Job"
sidebar_position: 10
---

# File Types > FS_FileTypes Job

The FS_FileTypes job is designed to report on file type information from targeted file servers.

![File Types > FS_FileTypes Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/content/filetypesjobstree.webp)

The FS_FileTypes job is located in the File Types job group.

## Analysis Tasks for the FS_FileTypes Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **File Types** >
**FS_FileTypes** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_FileTypes Job](/images/accessanalyzer/12.0/solutions/filesystem/content/filetypesanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Create File Types View** – Creates the SA_ENG_FSAA_FileTypeView view accessible under the job’s
       Results node
-   **2. Ranked File Extensions** – Creates the SA_FS_FileTypes_ExtensionsRanked table accessible under
       the job’s Results node
-   **3. File Types by Share** – Creates the SA_FS_FileTypes_TypesByShare table accessible under the
       job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_FileTypes job produces the
following pre-configured report:

| Report     | Description                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Types | This report identifies what types of files are located within your distributed file system and how much space they are taking up in gigabytes. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays file types extensions ranked</li><li>Table – Provides details on file types by share</li></ul> |
