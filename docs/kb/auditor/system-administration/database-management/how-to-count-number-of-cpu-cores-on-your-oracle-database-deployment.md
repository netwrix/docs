---
description: >-
  Learn how to determine the total number of CPU cores used by your Oracle
  Database deployment for Netwrix Auditor licensing by querying the
  CPU_CORE_COUNT_CURRENT parameter on each database instance.
keywords:
  - oracle
  - cpu cores
  - CPU_CORE_COUNT_CURRENT
  - V$LICENSE
  - licensing
  - sqlplus
  - database instance
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to count number of CPU cores on your Oracle Da
tags: []
title: "How to count number of CPU cores on your Oracle Database deployment?"
knowledge_article_id: kA00g000000H9V9CAK
---

# How to count number of CPU cores on your Oracle Database deployment?

The licensing for Netwrix Auditor for Oracle Database is based on the number of CPU cores utilized by the entire Oracle Database deployment (the `CPU_CORE_COUNT_CURRENT` parameter). To find the overall core count, retrieve the number of CPU cores on each Oracle Database instance and sum the numbers together.

## Steps

1. On the computer where your database is deployed, run the `sqlplus` tool.
2. Connect to your Oracle Database instance—use an Oracle account with the SYSDBA privilege. For example:
   - `OracleUser as sysdba`
   - Enter your password.
3. Execute the following SQL query:
   ```sql
   select CPU_CORE_COUNT_CURRENT from V$LICENSE;
   ```

Repeat these steps for every Oracle Database instance and then sum up the results to get the number of CPU cores for the entire deployment.

For details on the Oracle Database commands mentioned in this article, refer to:
https://docs.oracle.com/cd/B19306_01/server.102/b14237/dynviews_1144.htm#REFRN30116
