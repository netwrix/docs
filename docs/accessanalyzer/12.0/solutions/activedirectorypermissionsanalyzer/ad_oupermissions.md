---
title: "3.OUs > AD_OUPermissions Job"
description: "3.OUs > AD_OUPermissions Job"
sidebar_position: 50
---

# 3.OUs > AD_OUPermissions Job

The AD_OUPermissions job reports on all Active Directory permissions and ownership applied to
organizational unit (OU) objects within the targeted domains.

![3.OUs Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/ousjobstree.webp)

The AD_OUPermissions job is located in the 3.OUs job group.

## Analysis Tasks for the AD_OUPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **3.OUs** > **AD_OUPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_OUPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/oupermissionsanalysis.webp)

The default analysis tasks are:

- List OU permissions – Creates the SA_AD_OUPermissions_Details table accessible under the job’s
  Results node
- Summarize OU permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Shadow Access OU Paths – Calculates the object location and permissions for shadow access
- OU Ownership – Lists the owners of each OU and determines if they are a non-standard owner.
  Principals that are not administrators are considered non-standard owners of OU objects. Creates
  the SA_AD_OUOwnership_Details table accessible under the job’s Results node.
- OU Ownership Summary – Summarizes owner type by domain

In addition to the tables and views created by the analysis tasks, the AD_OUPermissions job produces
the following pre-configured reports.

| Report         | Description                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OU Ownership   | This report highlights instances where Active Directory OU objects are owned by non admin principals. This information is summarized at the domain level.                    | None         | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays a summary of user ownership by domain</li><li>Table – Provides details of non-standard ownership</li></ul>                          |
| OU Permissions | This report highlights instances where permissions are applied to Active Directory organizational units. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays OU permissions by domain</li><li>Pie Chart – Displays OU permissions by type</li><li>Table – Provides details on OU permissions</li></ul> |
