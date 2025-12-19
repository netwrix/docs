---
title: "Configuration > PgSQL_DatabaseSizing Job"
description: "Configuration > PgSQL_DatabaseSizing Job"
sidebar_position: 30
---

# Configuration > PgSQL_DatabaseSizing Job

The Configuration Job Group is designed to provide insight into details about the
PostgreSQL environment and potential vulnerabilities related to instance configuration settings.

![Configuration Job Group - PostgreSQL](/images/accessanalyzer/11.6/solutions/databases/postgresql/configurationjobgroup.webp)

The job in the Configuration Job Groups is:

- PgSQL_DatabaseSizing Job - Provides details about PostgreSQL databases and overall database size

## Analysis Tasks for the PgSQL_DatabaseSizing Job

Navigate to the **Jobs > Databases > PostgreSQL > Configuration > PgSQL_DatabaseSizing > Configure**
node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/postgresql/pssqldatabasesizinganalysistasks.webp)

The default analysis tasks are:

- Database Sizing Details - Provides details about PostgreSQL databases and sizing
- Database Sizing Summary - Summarizes PostgreSQL database sizing by host

In addition to the tables and views created the analysis task, the PgSQL_DatabaseSizing Job produces
the following pre-configured report.

| Report          | Description                                                | Default Tags | Report Elements                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of databases in PostgreSQL | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by size (MB)</li><li>Bar Chart – Displays sizes by host (GB)</li><li>Table – Provides database details</li></ul> |
