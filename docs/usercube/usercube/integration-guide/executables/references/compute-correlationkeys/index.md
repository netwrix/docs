# Usercube-Compute-CorrelationKeys

This tool is used to compute the values of all correlation keys.

## Examples

The following example computes the correlation keys of the database defined by the connection string, for all entity types.

```

./Usercube-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --batch-size (-q)   default value: 5000 | __Type__    Int32   __Description__ Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). |
|  |  |
| --- | --- |
| --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. |
|  |  |
| --- | --- |
| --all-entityType (-a)   optional | __Type__    No Value   __Description__ Applies the tool to all entity types. |
| --batch-size (-q)   default value: 5000 | __Type__    Int32   __Description__ Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). |
| --dirty   optional | __Type__    No Value   __Description__ Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified. |
| --entitytype-list   optional | __Type__    String List   __Description__ List of entity types that the tool is to be applied to.   __Note:__ required when ```--all-entityType``` is not specified. |
| --resource-identity-property   optional | __Type__    String   __Description__ Property used to override the resource identity property set in [SelectUserByIdentityQueryHandler](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting/index.md#SelectUserByIdentityQueryHandler). |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
