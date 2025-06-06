# 6.Broken Inheritance > AD\_BrokenInheritance Job

The AD\_BrokenInheritance Job reports on all locations within Active Directory where inheritance is broken within the targeted domains.

![6.Broken Inheritance Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/brokeninheritancejobstree.png)

The AD\_BrokenInheritance Job is located in the 6.Broken Inheritance Job Group.

## Analysis Tasks for the AD\_BrokenInheritance Job

Navigate to the __Active Directory Permissions Analyzer__ > __6.BrokenInheritance__ > __AD\_BrokenInheritance__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_BrokenInheritance Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/brokeninheritanceanalysis.png)

The default analysis tasks are:

- Broken Inheritance Details – Creates the SA\_AD\_BrokenInheritance\_Details table accessible under the job’s Results node
- Broken Inheritance Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_BrokenInheritance Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Broken Inheritance by Domain | This report highlights instances of broken inheritance on Active Directory objects. This information is summarized by domain. | None | This report is comprised of three elements:   - Bar Chart – Displays broken inheritance by domain - Table – Provides summary of broken inheritance by OU - Table – Provides details on broken inheritance |
