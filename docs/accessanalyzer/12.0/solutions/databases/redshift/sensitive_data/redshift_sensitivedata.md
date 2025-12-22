# Redshift_SensitiveData Job

This job provides information on all the sensitive data discovered in the targeted Redshift servers
based on the selected scan criteria.

## Analysis Tasks for the Redshift_SensitiveData Job

Navigate to the **Jobs** > **Databases** > **Redshift** >  **Sensitive Data** >
**Redshift_SensitiveData** > **Configure** node and select **Analysis** to view the Analysis Tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/redshift/sensitive_data/analysissensitivedata.webp)

The default analysis tasks are:

- Sensitive Data Details — Returns details around sensitive data in Redshift
- Database Summary — Summarizes Redshift sensitive data by database
- Enterprise Summary — Summarizes Redshift  sensitive data for the organization

## Reports for the for the Redshift_SensitiveData Job

In addition to the tables and views created the analysis task, the Redshift_SensitiveData Job
produces the following preconfigured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | None           | This report is comprised of two elements: <ul><li>Bar Chart</li><li>Displays exceptions by Match Count</li><li>Table</li><li>Displays Exception Details</li></ul>                                                                                               |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: <ul><li>Bar Chart</li><li>Displays top databases by Sensitive Data Hits</li><li>Table</li><li>Provides details on top databases with Sensitive Data</li><li>Table</li><li>Provides Sensitive Data Details</li></ul> |
