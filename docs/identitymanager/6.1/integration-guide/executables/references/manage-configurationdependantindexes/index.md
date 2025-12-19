---
title: "Usercube-Manage-ConfigurationDependantIndexes"
description: "Usercube-Manage-ConfigurationDependantIndexes"
sidebar_position: 250
---

# Usercube-Manage-ConfigurationDependantIndexes

This tool creates the necessary SQL indexes based on the latest deployed configuration to optimize
certain queries performances.

## Available optimizations:

- Creates SQL indexes and statistics to optimize searches on specific entity types
- Creates SQL indexes to optimize joins between records and main entity types
- Creates SQL indexed views used to compute dashboard counters

## Examples

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -e "Directory_User" -r "Directory_UserRecord" "Directory_Guest" -dc -s  "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -auto -dc -s "data
source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --entityTypes (-e)   optional | __Type__    String List   __Description__ Sets the list of entity types for which optimization indexes will be created/updated. |
| --recordEntityTypes (-r)   optional | __Type__    String List   __Description__ Sets the list of record entity types for which optimization indexes will be created/updated. |
| --userProperties (-p)   optional | __Type__    String List   __Description__ Sets the list of �User' properties that link the records and the users. (the order of the given �userProperties' must match the order of the given �recordEntityTypes'). |
| --dashboardCounter (-dc)   optional | __Type__    No Value   __Description__ Adjusts the indexed views for the dashboard counters appropriately. |
| --auto   optional | __Type__    No Value   __Description__ The entity types, record entity types and user properties are deduced automatically from the provisioning rules configured in the database. |
| --apply-to-database (-a)   optional | __Type__    No Value   __Description__ Directly applies the resulting SQL script to the database. |
|  |  |
| --- | --- |
| --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. |
```
