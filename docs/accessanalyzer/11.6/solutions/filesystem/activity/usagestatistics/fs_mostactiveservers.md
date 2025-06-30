# FS_MostActiveServers Job

The FS_MostActiveServers job is designed to report on the most active servers within an environment.

## Analysis Task for the FS_MostActiveServers Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_MostActiveServers** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the FS_MostActiveServers Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/mostactiveserversanalysis.webp)

The following analysis task is selected by default:

- Last 30 Days – Creates the SA_FS_MostActiveServers_Last30Days table accessible under the job’s
  Results node

In addition to the table and views created by the analysis task, the FS_MostActiveServers job
produces the following pre-configured report:

| Report                             | Description                                                                                                                                                                                                                                                                                                                                      | Default Tags | Report Elements                                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Servers – Last 30 Days | This report identifies the top servers for the past 30 days. [Read], [Add], [Update], [Delete], [Permission Change], [Rename] fields reflect the number of unique operations of each type that was performed in that server for this time frame. Unique Folders are the number of distinct folders that have had activity during the time frame. | None         | This report is comprised of two elements: - Bar Chart – Displays most active servers - Table – Provides details on most active servers |
