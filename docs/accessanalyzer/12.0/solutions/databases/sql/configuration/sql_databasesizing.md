# SQL_DatabaseSizing Job

The SQL_DatabaseSizing Job provides details on database file sizes and overall database sizes.

## Analysis Tasks for the SQL_DatabaseSizing Job

Navigate to the **Databases** > Jobs > SQL > 4.Configuration > SQL_DatabaseSizing Job >Configure
node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/sql/configuration/analysistask.webp)

The default analysis tasks are:

- Database Size Details – Provides details on database files and sizes
- Database Size Summary – Summarizes database file sizes by database

In addition to the tables created by the analysis tasks, the **SQL_DatabaseSizing Job** produces the
following preconfigured report:

| Report          | Description                                                | Default Tags | Report Elements                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report provides details on database files and sizing. | None         | This report is comprised of three elements: - Bar Chart – Provides information on the top five databases by size (MB) - Bar Chart – Provides information on database sizes by host (GB) - Table – Provides details on database sizing |
