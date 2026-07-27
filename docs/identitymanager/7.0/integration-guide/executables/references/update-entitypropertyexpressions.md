---
title: "Usercube-Update-EntityPropertyExpressions"
description: "Usercube-Update-EntityPropertyExpressions"
sidebar_position: 360
---

# Usercube-Update-EntityPropertyExpressions

This tool is used to recompute the values of all properties defined via expressions (C#, etc.), usually to prepare for a connector's synchronization.

## Examples

The following example updates the property expressions of the database defined by the connection string, for all entity types.

```
**./Usercube-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a**
```

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --batch-select-size (-q) default value: 10000 | **Type** Int32 **Description** Batch size for SELECT queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). | 
 | --batch-update-size (-c) default value: 20000 | **Type** Int32 **Description** Batch size for UPDATE queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). | 
 | --- | --- | 
 | --- | --- | 
 | --database-connection-string required | **Type** String **Description** Connection string of the database. | 
 | --- | --- | 
 | --- | --- | 
 | --all-entityType (-a) optional | **Type** No Value **Description** Applies the tool to all entity types. | 
 | --batch-size (-q) default value: 5000 | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). | 
 | --dirty optional | **Type** No Value **Description** Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified. | 
 | --entitytype-list optional | **Type** String List **Description** List of entity types that the tool is to be applied to. **Note:** required when `--all-entityType` is not specified. | 
 | --resource-identity-property optional | **Type** String **Description** Property used to override the resource identity property set in the [Select User by Identity Query Handler Setting](../../../integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting). | 
 | --- | --- | 
 | --- | --- | 
 | --log-level optional | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. | 

