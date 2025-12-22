---
title: "Configuration > Redshift_DatabaseSizing Job"
description: "Configuration > Redshift_DatabaseSizing Job"
sidebar_position: 30
---

# Configuration > Redshift_DatabaseSizing Job

This group provides insight into details about the Redshift environment and potential
vulnerabilities related to instance configuration settings.

![configurationjobgroup](/images/accessanalyzer/12.0/solutions/databases/redshift/configurationjobgroup.webp)

The job(s) in the Configuration Job Group are:

- Redshift_DatabaseSizing Job — Provides details about Redshift databases and overall database size.

### Analysis Tasks for the Redshift_DatabaseSizing Job

Navigate to the **Jobs** > **Databases**> **Redshift** > **Configuration** >
**Redshift_DatabaseSizing** > **Configure** node and select **Analysis** to view the Analysis Tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![analysisredshiftconfigurationjob](/images/accessanalyzer/12.0/solutions/databases/redshift/analysisredshiftconfigurationjob.webp)

The default analysis tasks are:

- Database Sizing Details — Provides details about Redshift databases and sizing
- Database Sizing Summary — Summarizes Redshift database sizing by host

## Report for the Redshift_Database Sizing Job

In addition to the tables and views created the analysis task, the Redshift_DatabaseSizing Job
produces the following preconfigured reports.

| Report          | Description                                               | Default Tags | Report Elements                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of databases in Redshift. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by size (MB)</li><li>Bar Chart – Displays sizes by host (GB)</li><li>Table – Provides database details</li></ul> |
