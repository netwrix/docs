---
title: "Oracle_DatabaseSizing Job"
description: "Oracle_DatabaseSizing Job"
sidebar_position: 20
---

# Oracle_DatabaseSizing Job

The Oracle_DatabaseSizing Job provides details on tablespace file sizes and overall tablespace
sizes.

## Analysis Tasks for the Oracle_DatabaseSizing Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DatabaseSizing
Job >Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/configuration/analysisdbsizing.webp)

The default analysis tasks are:

- Database Sizing Details – Provides details on database files and sizes
- Database Sizing Summary – Summarizes file size by instance

In addition to the tables created by the analysis tasks, the **Oracle_DatabaseSizing Job** produces
the following preconfigured report:

| Report          | Description                                                    | Default Tags | Report Elements                                                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Database Sizing | This report highlights the size of tablespace files in Oracle. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on top tablespaces by size</li><li>Bar Chart – Provides information on size by host (GB)</li><li>Table – Provides details on database sizes</li></ul> |
