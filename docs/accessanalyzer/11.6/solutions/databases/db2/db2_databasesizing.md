---
title: "Configuration > Db2_DatabaseSizing Job"
description: "Configuration > Db2_DatabaseSizing Job"
sidebar_position: 30
---

# Configuration > Db2_DatabaseSizing Job

The Db2_DatabaseSizing job provides details on overall database sizes.

![Configuration > Db2_DatabaseSizing Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/databases/db2/configurationjobstree.webp)

This job is located in the Configuration job group.

## Analysis Tasks for the Db2_DatabaseSizing Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Configuration** > **Db2_DatabaseSizing** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Db2_DatabaseSizing Job](/images/accessanalyzer/11.6/solutions/databases/db2/databasesizinganalysis.webp)

The default analysis tasks are:

- Database Sizing – Returns size details for Db2 databases
- Database Summary – Summarizes Db2 database size by host

## Report for the Db2_DatabaseSizing Job

In addition to the tables and views created the analysis task, the Db2_DatabaseSizing job produces
the following preconfigured report.

| Report          | Description                                    | Default Tags | Report Elements                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | Provides details on database tables and sizing | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by size (MB)</li><li>Bar Chart – Displays top hosts by size (GB)</li><li>Table – Displays details on database sizing</li></ul> |
