---
title: "AD_ComputerPermissions Job"
description: "AD_ComputerPermissions Job"
sidebar_position: 10
---

# AD_ComputerPermissions Job

The AD_ComputerPermissions job reports on all Active Directory permissions and ownership applied to
computer objects within the targeted domains.

## Analysis Tasks for the AD_ComputerPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **4.Computers** >
**AD_ComputerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_ComputerPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/computers/computerpermissionsanalysis.webp)

The default analysis tasks are:

- List computer object permissions – Creates the SA_AD_ComputerPermissions_Details table accessible
  under the job’s Results node
- Summarize computer object permissions – Creates an interim processing table in the database for
  use by downstream analysis and report generation
- Computer Ownership – Lists the owners of each computer object and determines if they are a
  non-standard owner. Users that are not administrators are considered non-standard owners of
  computer objects. Creates the SA_AD_ComputerOwnership_Details table accessible under the job’s
  Results node.
- Computer Ownership Summary – Summarizes owner type by domain

In addition to the tables and views created by the analysis tasks, the AD_ComputerPermissions job
produces the following pre-configured reports.

| Report               | Description                                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Computer Ownership   | This report highlights instances where Active Directory computer objects are owned by non admin principals. This information is summarized at the domain level.          | None         | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays a summary of computer ownership by domain</li><li>Table – Provides details on non-standard computer owners</li></ul>                                  |
| Computer Permissions | This report highlights instances where permissions are applied to Active Directory computer objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays computer permissions by domain</li><li>Pie Chart – Displays computer permissions by type</li><li>Table – Provides details on computer permissions</li></ul> |
