---
title: "Usercube-Manage-Configuration Dependent Indexes"
description: "Usercube-Manage-Configuration Dependent Indexes"
sidebar_position: 250
---

# Usercube-Manage-Configuration Dependent Indexes

This tool creates the necessary SQL indexes based on the latest deployed configuration to optimize certain queries performances.

## Available optimizations:

- Creates SQL indexes and statistics to optimize searches on specific entity types
- Creates SQL indexes to optimize joins between records and main entity types
- Creates SQL indexed views used to compute dashboard counters
- Creates SQL indexes to optimize workflow overview and consultation queries

### Workflow Reverse-Join Indexes

The tool automatically creates database indexes that improve the performance of Workflow Overview and Workflow Consultation pages. These indexes are derived from the workflow configuration and target the navigation properties used by workflow queries on the `UR_Resources` table.

Without these indexes, workflow pages can become slow on large databases because the database engine must scan millions of rows to resolve related entities. With them, the same queries complete in milliseconds.

**Behavior:**
- Indexes are created automatically — no manual configuration is required
- The set of indexes adapts to your workflow configuration
- Running the tool multiple times is safe — indexes that already exist are skipped, and indexes whose definition no longer matches the configuration are dropped and recreated

**Expected storage impact:** approximately 0.1 MB per 1,000 rows in `UR_Resources`.

**To verify that the indexes were created:**
```sql
SELECT name, filter_definition
FROM sys.indexes
WHERE object_id = OBJECT_ID('UR_Resources')
  AND name LIKE 'ZZ_IX_%ReverseJoin%'
ORDER BY name;
```

## Examples

```shell
./Usercube-Manage-ConfigurationDependantIndexes.exe -e "Directory_User" -r "Directory_UserRecord" "Directory_Guest" -dc -s  "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a
```

./Usercube-Manage-ConfigurationDependantIndexes.exe -auto -dc -s "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```text
## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --entityTypes (-e)   optional | __Type__    String List   __Description__ Sets the list of entity types for which optimization indexes will be created/updated. | 
 | --recordEntityTypes (-r)   optional | __Type__    String List   __Description__ Sets the list of record entity types for which optimization indexes will be created/updated. | 
 | --userProperties (-p)   optional | __Type__    String List   __Description__ Sets the list of User' properties that link the records and the users. (the order of the given userProperties' must match the order of the given recordEntityTypes'). | 
 | --dashboardCounter (-dc)   optional | __Type__    No Value   __Description__ Adjusts the indexed views for the dashboard counters appropriately. | 
 | --auto   optional | __Type__    No Value   __Description__ The entity types, record entity types and user properties are deduced automatically from the provisioning rules configured in the database. | 
 | --apply-to-database (-a)   optional | __Type__    No Value   __Description__ Directly applies the resulting SQL script to the database. | 
 | --- | --- | 
 | --- | --- | 
 | --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. | 
```
