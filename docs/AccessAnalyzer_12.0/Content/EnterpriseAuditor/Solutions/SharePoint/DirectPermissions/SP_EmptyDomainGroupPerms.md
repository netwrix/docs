---
sidebar_position: 5143
title: SP_EmptyDomainGroupPerms Job
---

# SP\_EmptyDomainGroupPerms Job

The SP\_EmptyDomainGroupPerms Job identifies empty security groups with directly assigned permissions to resources, these groups should be deleted from SharePoint farms, where found. Inadvertent changes to group membership may open up unwanted access.

## Analysis Tasks for the SP\_EmptyDomainGroupPerms Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP\_EmptyDomainGroupPerms** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_EmptyDomainGroupPerms Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/DirectPermissions/EmptyDomainGroupPermsAnalysis.png "Analysis Tasks for the SP_EmptyDomainGroupPerms Job")

The default analysis tasks are:

* 1. Find Empty Group Permission – Creates the SA\_SP\_EmptyDomainGroupPerms\_DirectPermissions table accessible under the job’s Results node
* 2. Find Affected Resource Count per Group – Creates the SA\_SP\_EmptyDomainGroupPerms\_ResourceCount table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions and resource counts for empty groups, the SP\_EmptyDomainGroupPerms Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Empty Domain Group Permissions | This report identifies empty security groups with directly assigned permissions to resources. These groups add no access, and should be deleted from SharePoint farms, where found. Inadvertent changes to group membership may open up unwanted access. | None | This report is comprised of three elements:   * Bar chart – Displays the top 5 groups by affected resources * Table – Provides details on permissions * Table – Provides details on top groups by affected resources |