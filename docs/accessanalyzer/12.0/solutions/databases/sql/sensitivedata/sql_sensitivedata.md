# SQL_SensitiveData Job

The SQL_SensitiveData Job designed to provide information on all the sensitive data that was
discovered in the targeted SQL or Azure SQL servers based on the selected scan criteria.

## Analysis Tasks for the SQL_SensitiveData Job

Navigate to the **Databases** > SQL > 5.Sensitve Data > SQL_SensitiveData > Configure node and
select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/sql/sensitivedata/sqljobgroup47.webp)

The default analysis tasks are:

- Determine sensitive data details – Creates the SA_SQLServer_SensitiveData_Details table accessible
  under the job’s Results node
- Database summary – Creates the SA_SQLServer_SensitiveData_DatabaseSummary table accessible under
  the job’s Results node
- Enterprise summary – Creates the SA_SQLServer_SensitiveData_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveData Job
produces the following pre-configured reports.

| Report                  | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | None         | This report is comprised of two elements: - Pie Chart – Displays exceptions by match count - Table – Provides details on exception details                                                                               |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by sensitive data hits - Table – Provides details on databases with sensitive data - Table – Provides details on sensitive data details |
