---
title: "3.Broken Inheritance > SP_BrokenInheritance Job"
description: "3.Broken Inheritance > SP_BrokenInheritance Job"
sidebar_position: 50
---

# 3.Broken Inheritance > SP_BrokenInheritance Job

Keeping track of directly applied permissions at mass is not realistic, the SP_BrokenInheritance job
is responsible for performing data analysis and generating SharePoint broken inheritance reports at
the site level. This includes looking at site broken inheritance and the trustees who are assigned
to those sites where inheritance is broken so that you can remove that access in favor of providing
access via group membership.

![3.Broken Inheritance > SP_BrokenInheritance Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/sharepoint/brokeninheritancejobstree.webp)

The SP_BrokenInheritance job is located in the 3.Broken Inheritance Job Group.

## Analysis Tasks for the SP_BrokenInheritance Job

Navigate to the **Jobs** > **SharePoint** > **3.Broken Inheritance** > **SP_BrokenInheritance** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_BrokenInheritance Job](/images/accessanalyzer/11.6/solutions/sharepoint/brokeninheritanceanalysis.webp)

They need to remain in the default order:

-   **1. Create Inheritance View** – Creates the SA_ENG_SPAA_Inheritance view accessible under the job’s
       Results node
-   **2. Unique Trustees Table. Identifies where Trustees have been Added/Removed** – Creates the
       SA_SP_BrokenInheritance_UniqueTrustees table accessible under the job’s Results node
-   **3. Pivot Unique Trustees Table** – Creates the SA_SP_BrokenInheritance_UniqueTrusteesPivot table
       accessible under the job’s Results node
-   **4. Summarize by Site Collection** – Creates an interim processing table in the database for use by
       downstream analysis and report generation

In addition to the tables created by the analysis tasks which display resources with broken
inheritance, the SP_BrokenInheritance Job produces the following pre-configured report:

| Report             | Description                                                                                                                                                                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance | This job is responsible for performing data analysis and generating SharePoint direct permission reports at the site level. This includes looking at site broken inheritance and the trustees who are assigned to those sites where inheritance is broken. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 site collections by resources with permission changes</li><li>Table – Provides a site collection summary</li><li>Table – Provides broken inheritance details</li></ul> |
