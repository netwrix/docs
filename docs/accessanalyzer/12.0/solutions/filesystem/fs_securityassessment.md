---
title: "FS_SecurityAssessment Job"
description: "FS_SecurityAssessment Job"
sidebar_position: 140
---

# FS_SecurityAssessment Job

The FS_SecurityAssessment job is designed to provide a security assessment of all relevant
information from targeted file servers. It is dependent upon the following jobs:

- 2.Direct Permissions Job Group

    - [FS_LocalUsersAndGroups Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_localusersandgroups.md)
    - [FS_NestedShares Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_nestedshares.md)
    - [FS_SIDHistory Job](/docs/accessanalyzer/12.0/solutions/filesystem/directpermissions/fs_sidhistory.md)

- [3.Broken Inheritance > FS_BrokenInheritance Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_brokeninheritance.md)
- 5.Activity Job Group

    - [Least Privileged Access > FS_LeastPrivilegedAccess Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/fs_leastprivilegedaccess.md)
    - Security > [FS_HighRiskActivity Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/security/fs_highriskactivity.md)

- 7.Sensitive Data Job Group

    - [7.Sensitive Data > FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md)

If only select sub-job groups have been run, there are blank sections in the overview report.

![FS_SecurityAssessment Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/filesystem/securityassessmentjobstree.webp)

The FS_SecurityAssessment job is comprised of analysis and reports which use the data collected by
the 0.Collection job group and analyzed by the jobs listed above.

## Analysis Task for the FS_SecurityAssessment Job

View the analysis tasks by navigating to the **FileSystem** > **FS_SecurityAssessment** >
**Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Task for the FS_SecurityAssessment Job](/images/accessanalyzer/12.0/solutions/filesystem/securityassessmentanalysis.webp)

The following analysis tasks are selected by default:

- Assess Risk – Creates the SA_FS_SecurityAssessment_Details table accessible under the job’s
  Results node
- Summary – Creates the SA_FS_SecurityAssessment_Summary table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the FS_SecurityAssessment job
produces the following pre-configured report:

| Report              | Description                                                                        | Default Tags                                          | Report Elements                                                                                                                                                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security Assessment | This report identifies common issues and vulnerabilities across your file systems. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of four elements: <ul><li>Table – Provides details of the scan Scope</li><li>Pie Chart – Provides details of findings by risk</li><li>Table – Provides details of findings by category</li><li>Table – Provides a summary of risk assessment details</li></ul> |
