# Configuration > MySQL_DatabaseSizing Job

The Configuration Job Group is designed to provide insight into MySQL server configuration settings.

![Configuration Job Group](/img/product_docs/accessanalyzer/12.0/solutions/databases/mysql/configurationjobgroup.webp)

The job in the Configuration Job Group is:

- MySQL_DatabaseSizing Job - Provides details on database table sizes and overall database size

### Analysis Tasks for the MySQL_DatabaseSizing Job

Navigate to the **Jobs > Databases > MySQL > Configuration > MySQL_DatabaseSizing > Configure** node
and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/mysql/analysismysqldatabasesizing.webp)

The default analysis tasks are:

- Database Details - Returns size details for MySQL databases
- Database Summary - Summarizes database sizes by host

In addition to the tables and views created the analysis task, the MySQL_DatabaseSizing Job produces
the following pre-configured reports.

| Report          | Description                                                 | Default Tags | Report Elements                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report provides details on database tables and sizing. |              | This report is comprised of three elements: - Bar Chart - Displays top databases by size (MB) - Bar Chart - Displays database size by host (GB) - Table - Displays details on database sizing |
