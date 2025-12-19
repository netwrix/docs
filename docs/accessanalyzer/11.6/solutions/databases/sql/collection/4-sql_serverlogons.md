---
title: "4-SQL_ServerLogons Job"
description: "4-SQL_ServerLogons Job"
sidebar_position: 50
---

# 4-SQL_ServerLogons Job

The 4-SQL_ServerLogons Job captures SQL server logon activity, which includes successful or failed
logons.

## Queries for the 4-SQL_ServerLogons Job

The AppnLogSQL Query uses the SMARTLog Data Collector and has been preconfigured to process the
Windows Event Log Type.

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![sqljobgroup18](/images/accessanalyzer/11.6/solutions/databases/sql/collection/sqljobgroup18.webp)

- AppnLogSQL – Uses SmartLog Data Collector to gather logon events
    - See the
      [SMARTLog Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/smartlog/overview.md)
      topic for additional information
