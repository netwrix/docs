# 6.Broken Inheritance > AD_BrokenInheritance Job

The AD_BrokenInheritance Job reports on all locations within Active Directory where inheritance is
broken within the targeted domains.

![6.Broken Inheritance Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/brokeninheritancejobstree.webp)

The AD_BrokenInheritance Job is located in the 6.Broken Inheritance Job Group.

## Analysis Tasks for the AD_BrokenInheritance Job

Navigate to the **Active Directory Permissions Analyzer** > **6.BrokenInheritance** >
**AD_BrokenInheritance** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_BrokenInheritance Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/brokeninheritanceanalysis.webp)

The default analysis tasks are:

- Broken Inheritance Details – Creates the SA_AD_BrokenInheritance_Details table accessible under
  the job’s Results node
- Broken Inheritance Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_BrokenInheritance Job
produces the following pre-configured report.

| Report                       | Description                                                                                                                   | Default Tags | Report Elements                                                                                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance by Domain | This report highlights instances of broken inheritance on Active Directory objects. This information is summarized by domain. | None         | This report is comprised of three elements: - Bar Chart – Displays broken inheritance by domain - Table – Provides summary of broken inheritance by OU - Table – Provides details on broken inheritance |
