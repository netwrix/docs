---
title: "Configuration > MongoDB_Database_Sizing Job"
description: "Configuration > MongoDB_Database_Sizing Job"
sidebar_position: 30
---

# Configuration > MongoDB_Database_Sizing Job

## Analysis Tasks for the MongoDB_Database_Sizing Job

Navigate to the **Jobs > Databases > MongoDB > Configuration > MongoDB_DatabaseSizing > Configure**
node and select Analysis to view the Analysis Tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/mongodb/databasesizingjobanalysis.webp)

The default analysis tasks are:

- MongoDB Database Sizing Details — Provides details about MongoDB databases and sizing
- MongoDB Database Sizing Summary — Summarizes MongoDB database sizing by node or cluster

### Report for the MongoDB_Database_Sizing Job

In addition to the tables and views created the analysis task, the MongoDB_DatabaseSizing Job
produces the following pre-configured reports.

| Report          | Description                                              | Default Tags | Report Elements                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of databases in MongoDB. | None.        | This report is comprised of three elements: <ul><li>Bar Chart</li><li>Displays top databases by size (MB)</li><li>Bar Chart</li><li>Displays database size by host (GB)</li><li>Table</li><li>Displays details on database sizing</li></ul> |
