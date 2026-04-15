---
title: "Update_Schema Job"
description: "Update_Schema Job"
sidebar_position: 10
---

# Update_Schema Job

The Update_Schema job within the .Databases Schema job group creates and updates the schema for the
tables, views, and functions used by the Databases Solution. This job needs to run before the
other jobs in the 0.Collection job group for both new installations and upgrades. The job can be
scheduled with any of the collections. Don't delete the job from the job tree.

:::info
Leave this job in the .Databases Schema job group. Don't move it.
:::

## Query for the Update_Schema Job

View the query by navigating to the **Databases** > **0.Collection** > **.Databases Schema** >
**Update_Schema** > **Configure** node and select **Queries**.

:::warning
Don't modify or deselect the selected query. The query is preconfigured for this job.
:::

The following query is selected by default:

-   **Update Schema** – Uses the **Update Storage Schema** category of the SQL Data Collector.
    Creates or updates storage database tables used by databases data collectors.

When this query runs, it applies a series of versioned SQL patches to the Access Analyzer storage
database (not the target database servers being scanned). The job records each patch in the
`SA_SQL_Patches` table so that each patch runs only once; the job skips already-applied patches on
subsequent runs.

The shared patches applied by this job create the following objects in the storage database:

| Object | Type | Description |
|---|---|---|
| `SA_SQL_Patches` | Table | Tracks which schema patches have been applied |
| `DB_Errors` | Table | Records errors encountered during patch execution |
| `SA_SQL_Instances` | Table | Central registry of all discovered database instances across all supported platforms |
| `SA_DatabaseSystemTypes` | Table | Lookup table mapping database type IDs to platform names (SQL Server, Oracle, MySQL, PostgreSQL, Db2 LUW, MongoDB, Azure SQL, etc.) |
| `SA_DatabaseUsageMode` | Table | Lookup table for database usage modes (Oracle Service, Oracle SID, Redshift, Azure Managed Instance, Azure Stand Alone, etc.) |
| `SA_SQL_GetFriendlyName` | Function | Converts a host name, instance name, and port number from the `SA_SQL_Instances` table into a single display name |

In addition to the shared patches above, each supported database platform (SQL Server, Oracle,
MySQL, PostgreSQL, Db2 LUW, Azure SQL) registers its own set of vendor-specific schema patches
that are also applied by this job.
