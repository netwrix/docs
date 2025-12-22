---
title: "SQL_LinkedServers Job"
description: "SQL_LinkedServers Job"
sidebar_position: 50
---

# SQL_LinkedServers Job

The SQL_LinkedServers Job identifies Linked Servers or remote database servers on which the
identified SQL and Azure SQL servers can execute commands. Some of the common remote
OLE DB providers include IBM DB2, Oracle, Access and Excel. Typically, linked servers are used to
handle distributed queries in SQL and Azure SQL server .

## Analysis Tasks for the SQL_LinkedServers Job

Navigate to the **Databases** > Jobs > SQL > 4.Configuration > SQL_LinkedServers Job >Configure node
and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
pre-configured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/configuration/analysistasks.webp)

The default analysis tasks are:

- Linked Server Details – Provides details on SQL Linked Servers
- Linked Server Summary – Summarizes Linked Servers by instance

In addition to the tables created by the analysis tasks, the **SQL_DatabaseSizing Job** produces the
following preconfigured report:

| Report         | Description                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linked Servers | This report highlights Linked Servers where the listed SQL Server is able to execute remote commands. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides information on top five linked servers by instance</li><li>Table – Provides details on linked servers by instance</li><li>Table – Provides details on linked servers</li></ul> |
