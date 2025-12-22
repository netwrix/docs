---
title: "4.Configuration Job Group"
description: "4.Configuration Job Group"
sidebar_position: 70
---

# 4.Configuration Job Group

The 4.Configuration Job Group provides information on potential vulnerabilities related to SQL and
Azure SQL server configuration settings.

![configurationjobgroup](/images/accessanalyzer/12.0/solutions/databases/sql/configuration/configurationjobgroup.webp)

The jobs in the 4.Configuration Job Group are:

- [SQL_Authentication Job](/docs/accessanalyzer/12.0/solutions/databases/sql/configuration/sql_authentication.md) – This job identifies authentication settings on
  targeted SQL and Azure SQL servers that allow SQL server authentication in addition to Windows
  authentication. Microsoft recommends that the SQL and Azure SQL servers should be generally
  configured to utilize Windows authentication versus SQL authentication.
- [SQL_BestPractices Job](/docs/accessanalyzer/12.0/solutions/databases/sql/configuration/sql_bestpractices.md) – This job is designed to analyze SQL and Azure SQL
  server configuration settings and report on any findings that deviate from recommended Microsoft
  Best Practices when it comes to creating, maintaining, and securing SQL servers
- [SQL_CMDShell Job](/docs/accessanalyzer/12.0/solutions/databases/sql/configuration/sql_cmdshell.md) – This job is designed to report if the `xp_cmdshell `stored
  procedure is enabled or disabled. Since `xp_cmdshell` allows a user to execute operating system
  commands when connected to the SQL or Azure SQL server, it can be used to launch malicious
  attacks. Microsoft recommends that the `xp_cmdshell` stored procedure be disabled.
- [SQL_DatabaseSizing Job](/docs/accessanalyzer/12.0/solutions/databases/sql/configuration/sql_databasesizing.md) – Provides details on database file sizes and
  overall database sizes
- [SQL_LinkedServers Job](/docs/accessanalyzer/12.0/solutions/databases/sql/configuration/sql_linkedservers.md) – Identifies Linked Servers or remote database
  servers on which the identified SQL and Azure SQL server can execute commands. Some of the common
  remote OLE DB providers include IBM DB2, Oracle, Access and Excel. Typically, linked servers are
  used to handle distributed queries in SQL and Azure SQL server.
