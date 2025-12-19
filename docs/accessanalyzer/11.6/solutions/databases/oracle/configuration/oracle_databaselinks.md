---
title: "Oracle_DatabaseLinks Job"
description: "Oracle_DatabaseLinks Job"
sidebar_position: 10
---

# Oracle_DatabaseLinks Job

The Oracle_DatabaseLinks Job contains a report that provides information on Database Links where the
listed Oracle Server is able to execute remote commands.

## Analysis Tasks for the Oracle_DatabaseLinks Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle_DatabaseLinks
Job >Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/configuration/analysisdblinks.webp)

The default analysis tasks are:

- Database Link Details – Provides details about Oracle Database links
- Oracle Database Link Summary – Summarizes Oracle Database links by instance

In addition to the tables created by the analysis tasks, the **Oracle_DatabaseLinks Job** produces
the following preconfigured report:

| Report         | Description                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Links | This report highlights Database Links where the listed Oracle Server is able to execute remote commands. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on top five database links by instance</li><li>Bar Chart – Provides information on database links by instance (GB)</li><li>Table – Provides details on database links</li></ul> |
