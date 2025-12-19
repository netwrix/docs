---
title: "Usercube-Compute-CorrelationKeys"
description: "Usercube-Compute-CorrelationKeys"
sidebar_position: 40
---

# Usercube-Compute-CorrelationKeys

This tool is used to compute the values of all correlation keys.

## Examples

The following example computes the correlation keys of the database defined by the connection
string, for all entity types.

```

**./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a**

```

## Arguments

| Argument Name                         | Details                                                                                                                                                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --batch-size (-q) default value: 5000 | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                                              |
|                                       |                                                                                                                                                                                                                                            |
| ---                                   | ---                                                                                                                                                                                                                                        |
| --database-connection-string required | **Type** String **Description** Connection string of the database.                                                                                                                                                                         |
|                                       |                                                                                                                                                                                                                                            |
| ---                                   | ---                                                                                                                                                                                                                                        |
| --all-entityType (-a) optional        | **Type** No Value **Description** Applies the tool to all entity types.                                                                                                                                                                    |
| --batch-size (-q) default value: 5000 | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                                              |
| --dirty optional                      | **Type** No Value **Description** Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified.                                                                                                 |
| --entitytype-list optional            | **Type** String List **Description** List of entity types that the tool is to be applied to. **Note:** required when `--all-entityType` is not specified.                                                                                  |
| --resource-identity-property optional | **Type** String **Description** Property used to override the resource identity property set in [SelectUserByIdentityQueryHandler](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting/index.md). |
|                                       |                                                                                                                                                                                                                                            |
| ---                                   | ---                                                                                                                                                                                                                                        |
| --log-level optional                  | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                          |
