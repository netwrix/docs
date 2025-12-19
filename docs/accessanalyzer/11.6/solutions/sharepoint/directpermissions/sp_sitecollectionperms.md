---
title: "SP_SiteCollectionPerms Job"
description: "SP_SiteCollectionPerms Job"
sidebar_position: 40
---

# SP_SiteCollectionPerms Job

Most content will inherit the permissions configured at the root of the site collection. Having an
understanding of how those permissions are assigned is useful for gaining perspective on the overall
SharePoint permission configuration.

## Analysis Tasks for the SP_SiteCollectionPerms Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP_SiteCollectionPerms** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_SiteCollectionPerms Job](/images/accessanalyzer/11.6/solutions/sharepoint/directpermissions/sitecollectionpermsanalysis.webp)

They need to remain in the default order:

-   **1. Site Collection Direct Permissions**

    - Creates the SA_SP_SiteCollectionPerms_DirectPerms table accessible under the job’s Results
      node
    - Creates an interim processing table in the database for use by downstream analysis and report
      generation

-   **2. Site Collection Details** – Creates the SA_SP_SiteCollectionPerms_Details table accessible
       under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions at the root
of the site collections, the SP_SiteCollectionPerms Job produces the following pre-configured
report:

| Report                             | Description                                                                                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Direct Site Collection Permissions | Most content will inherit the permissions configured at the root of the site collection. Having an understanding of how those permissions are assigned is useful for gaining perspective on the overall SharePoint permission configuration. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 site collections by direct permissions</li><li>Table – Provides details on site collections by direct permissions breakdown</li></ul> |
