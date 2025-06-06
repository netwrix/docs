# SQL\_DatabaseSizing Job

The SQL\_DatabaseSizing Job provides details on database file sizes and overall database sizes.

## Analysis Tasks for the SQL\_DatabaseSizing Job

Navigate to the __Databases__ > Jobs > SQL > 4.Configuration > SQL\_DatabaseSizing Job >Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/configuration/analysistask.png)

The default analysis tasks are:

- Database Size Details – Provides details on database files and sizes
- Database Size Summary – Summarizes database file sizes by database

In addition to the tables created by the analysis tasks, the __SQL\_DatabaseSizing Job__ produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report provides details on database files and sizing. | None | This report is comprised of three elements:   - Bar Chart – Provides information on the top five databases by size (MB) - Bar Chart – Provides information on database sizes by host (GB) - Table – Provides details on database sizing |
