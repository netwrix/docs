---
title: "6.Probable Owner > FS_ProbableOwner Job"
description: "6.Probable Owner > FS_ProbableOwner Job"
sidebar_position: 80
---

# 6.Probable Owner > FS_ProbableOwner Job

The 6.Probable Owner Job Group is designed to report on probable owners of resources from targeted
file servers.

![probableownerjobstree](/images/accessanalyzer/11.6/solutions/filesystem/probableownerjobstree.webp)

The 6.Probable Owner Job Group is comprised of:

- FS_ProbableOwner Job – Designed to report on probable owners of resources from targeted file
  servers

## Analysis Tasks for the FS_ProbableOwner Job

View the analysis tasks by navigating to the FileSystem > 6.Probable Owner > FS_ProbableOwner >
Configure node and select Analysis.

:::warning
Do not modify or deselect the first and third selected analysis tasks. The analysis
tasks are preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/filesystem/probableowneranalysis.webp)

The following analysis tasks are selected by default:

- Create Functions – Creates functions in tier 1 SQL database that are required to calculate
  Probable Owners
- Identify Probable Owners – Creates the SA_FS_ProbableOwner_Details table accessible under the
  job’s Results node
    - Set to “Start listing ownership at the root share” which is `@minlevel` parameter set to
      Value0.
    - Set to “List ownership as deep into the folder hierarchy as the root share” which is
      `@maxlevel` parameter set to Value0.
    - Value0 = root share, Value1 = 1 folder deep, Value2 = 2 folders deep, etc.
    - Set the variable #FILTERED_TRUSTEES to a CSV file that contains one row for each SID to be
      excluded. When the job is run, SIDs specified in the #FILTERED_TRUSTEES variable are excluded
      from the analysis and not reported as probable owners.
    - See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information.
- Identify Folders with no Owner Found – Creates the SA_FS_ProbableOwner_NoOwnerFound table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_ProbableOwner Job produces
the following pre-configured report:

| Report                                         | Description                                                                                                                                                                                                                        | Default Tags | Report Elements                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| Probable Share Owners (A.K.A. Probable Owners) | This report identifies the number of shares owned by individuals, as determined by a weighted average of ownership of content, management, and level of activity. The top 2 owners per ownership criteria per share are displayed. | None         | This report is comprised of one element: <ul><li>Table – Provides details on probable owners</li></ul> |
