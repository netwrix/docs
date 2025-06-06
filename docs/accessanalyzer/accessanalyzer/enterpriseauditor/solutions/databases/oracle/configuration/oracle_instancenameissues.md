# Oracle\_InstanceNameIssues Job

The Oracle\_InstanceNameIssues Job discovers if names used for Oracle database instances conform to Oracle recommended best practices. The job also checks to see if Oracle SIDs conform to DISA STIG V-61413 – Oracle instance name or SID should not contain Oracle version numbers.

## Analysis Tasks for the Oracle\_InstanceNameIssues Job

Navigate to the __Jobs > Databases > Oracle > 4.Configuration > Oracle\_InstanceNameIssues > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/analysisinstancenameissues.png)

The default analysis tasks are:

- Find Weak Instance Names – Checks SID names for default names and version numbers. Creates the SA\_Oracle\_WeakInstanceNames\_Details table accessible under the job’s Results node.
- Summarize Number of Weak Instance Names – Counts the number of weak instance names in all instances. Creates the SA\_Oracle\_WeakInstanceNames\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the __Oracle\_InstanceNameIssues Job__ produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Instance Name Issues | This report highlights default instance names or those containing version numbers. | None | This report is comprised of two elements:   - Pie Chart – Displays percentage of instance names with issues - Table – Provides details of instance issues |
