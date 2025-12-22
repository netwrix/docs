---
title: "SP_EmptyDomainGroupPerms Job"
description: "SP_EmptyDomainGroupPerms Job"
sidebar_position: 20
---

# SP_EmptyDomainGroupPerms Job

The SP_EmptyDomainGroupPerms Job identifies empty security groups with directly assigned permissions
to resources, these groups should be deleted from SharePoint farms, where found. Inadvertent changes
to group membership may open up unwanted access.

## Analysis Tasks for the SP_EmptyDomainGroupPerms Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** >
**SP_EmptyDomainGroupPerms** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_EmptyDomainGroupPerms Job](/images/accessanalyzer/11.6/solutions/sharepoint/directpermissions/emptydomaingrouppermsanalysis.webp)

The default analysis tasks are:

-   **1. Find Empty Group Permission** – Creates the SA_SP_EmptyDomainGroupPerms_DirectPermissions table
       accessible under the job’s Results node
-   **2. Find Affected Resource Count per Group** – Creates the
       SA_SP_EmptyDomainGroupPerms_ResourceCount table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions and
resource counts for empty groups, the SP_EmptyDomainGroupPerms Job produces the following
pre-configured report:

| Report                         | Description                                                                                                                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Domain Group Permissions | This report identifies empty security groups with directly assigned permissions to resources. These groups add no access, and should be deleted from SharePoint farms, where found. Inadvertent changes to group membership may open up unwanted access. | None         | This report is comprised of three elements: <ul><li>Bar chart – Displays the top 5 groups by affected resources</li><li>Table – Provides details on permissions</li><li>Table – Provides details on top groups by affected resources</li></ul> |
