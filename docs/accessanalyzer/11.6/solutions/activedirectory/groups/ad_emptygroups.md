---
title: "AD_EmptyGroups Job"
description: "AD_EmptyGroups Job"
sidebar_position: 50
---

# AD_EmptyGroups Job

The AD_EmptyGroups Job identifies empty and single member groups which are suitable candidates for
consolidation or cleanup.

## Analysis Tasks for the AD_EmptyGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_EmptyGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_EmptyGroups Job](/images/accessanalyzer/11.6/solutions/activedirectory/groups/emptygroupsanalysis.webp)

The default analysis tasks are:

- Empty Groups – Creates the SA_AD_EmptyGroups_Empty table accessible under the job’s Results node
- Single User Groups – Creates the SA_AD_EmptyGroups_SingleUser table accessible under the job’s
  Results node
- Summarize Empty Groups – Creates the SA_AD_EmptyGroups_EmptySummary table accessible under the
  job’s Results node
- Summarize Single User Groups – Creates the SA_AD_EmptyGroups_SingleUserSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_EmptyGroups Job produces
the following pre-configured reports:

| Report             | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                                                  |
| ------------------ | --------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Groups       | This report identifies all groups without any members.          | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top domains by empty group counts</li><li>Table – Provides details on empty groups</li><li>Table – Provides details on empty groups by domain</li></ul> |
| Single User Groups | This report identifies groups which only contain a single user. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top domains by single user groups</li><li>Table – Provides details on groups</li><li>Table – Provides details on single user groups by domain</li></ul> |
