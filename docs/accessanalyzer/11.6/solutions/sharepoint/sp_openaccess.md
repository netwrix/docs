---
title: "2.High Risk Sites > SP_OpenAccess Job"
description: "2.High Risk Sites > SP_OpenAccess Job"
sidebar_position: 40
---

# 2.High Risk Sites > SP_OpenAccess Job

The 2.High Risk Sites Job Group provides insight into any high risk repositories and high risk data
that may exist within the targeted SharePoint environment. Modifying SharePoint permissions to apply
broad security principals, such as NT AUTHORITY\Authenticated Users, can leave high risk data
effectively open to the entire organization. Monitor this data closely because of its exposure.

![2.High Risk Sites > SP_OpenAccess Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/sharepoint/openaccessjobstree.webp)

The job group is comprised of the SP_OpenAccess Job. Minimizing your attack surface is the goal.
Open site collections can potentially provide access to privileged data, greatly increasing your
vulnerability. The SP_OpenAccess Job identifies places in the environment where a large number of
employees can access data.

It is dependent on data collected by the
[SharePoint Access Auditing](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md#sharepoint-access-auditing)
or
[SharePoint Sensitive Data Discovery Auditing (SEEK)](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md#sharepoint-sensitive-data-discovery-auditing-seek)
components of the
[0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/sharepoint/collection/overview.md).

## Analysis Tasks for the SP_OpenAccess Job

Navigate to the **Jobs** > **SharePoint** > **2.High Risk Sites** > **SP_OpenAccess** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_OpenAccess Job](/images/accessanalyzer/11.6/solutions/sharepoint/openaccessanalysis.webp)

The default analysis tasks are:

-   **1. Determine Access to Resources** – Creates the SA_SP_OpenAccess_AccessDetails table accessible
       under the job’s Results node
-   **2. Summarize by Site Collection** – Creates the SA_SP_OpenAccess_SiteCollectionSummary table
       accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display resources with open access,
the SP_OpenAccess Job produces the following pre-configured report:

| Report      | Description                                                  | Default Tags | Report Elements                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Access | This report identifies site collections with open resources. | Open Access  | This report is comprised of two elements: <ul><li>Stacked Bar – Displays top site collections with open access</li><li>Table – Provides site collection details</li><li>Table – Provides access details</li></ul> |
