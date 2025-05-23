---
sidebar_position: 4993
title: 6.Probable Owner > FS_ProbableOwner Job
---

## 6.Probable Owner > FS\_ProbableOwner Job

The 6.Probable Owner Job Group is designed to report on probable owners of resources from targeted file servers.

![](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/ProbableOwnerJobsTree.png)

The 6.Probable Owner Job Group is comprised of:

* FS\_ProbableOwner Job – Designed to report on probable owners of resources from targeted file servers

## Analysis Tasks for the FS\_ProbableOwner Job

View the analysis tasks by navigating to the FileSystem > 6.Probable Owner > FS\_ProbableOwner > Configure node and select Analysis.

**CAUTION:** Do not modify or deselect the first and third selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/ProbableOwnerAnalysis.png "Analysis Selection")

The following analysis tasks are selected by default:

* Create Functions – Creates functions in tier 1 SQL database that are required to calculate Probable Owners
* Identify Probable Owners – Creates the SA\_FS\_ProbableOwner\_Details table accessible under the job’s Results node
  * Set to “Start listing ownership at the root share” which is `@minlevel` parameter set to Value0.
  * Set to “List ownership as deep into the folder hierarchy as the root share” which is `@maxlevel` parameter set to Value0.
  * Value0 = root share, Value1 = 1 folder deep, Value2 = 2 folders deep, etc.
  * Set the variable #FILTERED\_TRUSTEES to a CSV file that contains one row for each SID to be excluded. When the job is run, SIDs specified in the #FILTERED\_TRUSTEES variable are excluded from the analysis and not reported as probable owners.
  * See the [Configure the Customizable Parameters in an Analysis Task](../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for additional information.
* Identify Folders with no Owner Found – Creates the SA\_FS\_ProbableOwner\_NoOwnerFound table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_ProbableOwner Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Probable Share Owners (A.K.A. Probable Owners) | This report identifies the number of shares owned by individuals, as determined by a weighted average of ownership of content, management, and level of activity. The top 2 owners per ownership criteria per share are displayed. | None | This report is comprised of one element:   * Table – Provides details on probable owners |