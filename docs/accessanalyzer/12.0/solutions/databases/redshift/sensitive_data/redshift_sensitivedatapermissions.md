# Redshift_SensitiveDataPermissions Job

The Redshift_SensitiveDataPermissions Job is designed to provide information on all types of
permissions on database objects containing sensitive data across all the targeted Redshift servers
based on the selected scan criteria.

## Analysis Tasks for the Redshift_SensitiveData Job

Navigate to the **Jobs > Databases > Redshift > Sensitive
Data > Redshift_SensitiveDataPermissions > Configure** node and select Analysis to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/postgresql/sensitivedata/sensitivedatapermission.webp)

The default analysis tasks are:

- Sensitive Data Permission Details – Creates the Redshift_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the
  Redshift_SensitiveDataPermissions_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the
Redshift_SensitiveDataPermissions Job produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by permission count</li><li>Table – Provides details on database permission summary</li><li>Table – Provides details on sensitive data permission details</li></ul> |
