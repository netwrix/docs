---
title: "SP_LargestFiles Job"
description: "SP_LargestFiles Job"
sidebar_position: 10
---

# SP_LargestFiles Job

The SP_LargestFiles Job identifies the largest files across SharePoint farms. Changes to a document
or its metadata create new versions that result in added storage. It is therefore important to
manage file size and control versioning. Report includes file names, URLs, total file size,
versions, and version size, along with file owner and file editor information.

## Analysis Tasks for the SP_LargestFiles Job

Navigate to the **Jobs** > **SharePoint** > **4.Content** > **SP_LargestFiles** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SP_LargestFiles Job](/images/accessanalyzer/11.6/solutions/sharepoint/content/largestfilesanalysis.webp)

The default analysis task is:

- Identify Large Files – Creates the SA_SP_LargestFiles_Details table accessible under the job’s
  Results node

In addition to the table created by the analysis task which displays the largest file resources, the
SP_LargestFiles Job produces the following pre-configured report:

| Report        | Description                                                                     | Default Tags | Report Elements                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Files | This report identifies where the largest files, including versions, are stored. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays largest files</li><li>Table – Provides a summary of the largest sites</li><li>Table – Provides details on largest files</li></ul> |
