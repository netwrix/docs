# Get Parameters of a Data Source

Using this API, you can retrieve parameters information of a data source specified in end point URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetDataSourceParameter/{DatasourceId}

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "identityStoreId": 2,
        "connectionString": "Data Source='SQL\\MSSQL';Initial Catalog=External;Password='webdir123R';User ID='sa';Integrated Security=false;",
        "commandString": "SELECT * FROM []",
        "columnNames": [
            "EmployeeID",
            "FirstName",
            "LastName",
            "DepartmentID"
        ],
        "tableNames": [
            "[dbo].[Employee]",
            "[dbo].[Department]",
            "[dbo].[EmployeeDepartmentView]"
        ],
        "selectedTable": "[dbo].[Employee]",
        "name": "SQLView",
        "provideTypeName": "MSSQL"
    }
]
```

See Also

- [Data Source APIs](/versioned_docs/groupid_11.0/groupid/api/datasource/datasourceapis.md)
- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
