# Configuration > Redshift_DatabaseSizing Job

This group provides insight into details about the Redshift environment and potential
vulnerabilities related to instance configuration settings.

![configurationjobgroup](/img/product_docs/accessanalyzer/12.0/solutions/databases/redshift/configurationjobgroup.webp)

The job(s) in the Configuration Job Group are:

- Redshift_DatabaseSizing Job — Provides details about Redshift databases and overall database size.

### Analysis Tasks for the Redshift_DatabaseSizing Job

Navigate to the **Jobs** > **Databases**> **Redshift** > **Configuration** >
**Redshift_DatabaseSizing** > **Configure** node and select **Analysis** to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![analysisredshiftconfigurationjob](/img/product_docs/accessanalyzer/12.0/solutions/databases/redshift/analysisredshiftconfigurationjob.webp)

The default analysis tasks are:

- Database Sizing Details — Provides details about Redshift databases and sizing
- Database Sizing Summary — Summarizes Redshift database sizing by host

## Report for the Redshift_Database Sizing Job

In addition to the tables and views created the analysis task, the Redshift_DatabaseSizing Job
produces the following preconfigured reports.

| Report          | Description                                               | Default Tags | Report Elements                                                                                                                                                             |
| --------------- | --------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of databases in Redshift. | None         | This report is comprised of three elements: - Bar Chart – Displays top databases by size (MB) - Bar Chart – Displays sizes by host (GB) - Table – Provides database details |
