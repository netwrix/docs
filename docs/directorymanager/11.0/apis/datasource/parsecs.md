---
title: "Parse a Connection String API"
description: "Parse a one-line data source connection string, such as a SQL Server string, into its parts like database, user name, and password."
keywords:
  - parse connection string API
  - ParseConnectionString endpoint
  - SQL Server connection string
  - data source connection
sidebar_position: 150
unlisted: true
---

# Parse a Connection String API

This API parses a connection string given in one-line format.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/ParseConnectionString

## HTTP Method

POST

### Sample Request Syntax

```
{
    "connectionString": "Data Source='MSSQL';Initial Catalog=ExternalDB;Password='webdir123R';User ID='sa';Integrated Security=false;",
    "dataSourceType": 3
}
```

### Sample Response Syntax

```
{
    "ConnectionString": "'MSSQL'",
    "Database": "ExternalDB",
    "Password": "'webdir123R'",
    "UserName": "'sa'",
    "WindowsAuthentication": "true"
}
```

See Also

- [GroupID Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
