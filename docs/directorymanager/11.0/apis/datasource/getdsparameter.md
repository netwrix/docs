---
title: "Get Data Source Parameters API in Directory Manager"
description: "Retrieve the connection string, command string, tables, and columns of a data source specified by its ID."
keywords:
  - data source parameters API
  - GetDataSourceParameter endpoint
  - data source connection string
  - data source tables and columns
sidebar_position: 130
---

# Get Data Source Parameters API in Directory Manager

Use this API to retrieve parameter information about the data source specified in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetDataSourceParameter/{DatasourceId}

## HTTP Method

GET

### Sample Response Syntax

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

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
