---
title: "Parse a Connection String"
description: "Parse a Connection String"
sidebar_position: 150
---

# Parse a Connection String

This API parses the connection string given in one line format.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/ParseConnectionString

## HTTP Method

POST

#### Sample Request Syntax

```
{
    "connectionString": "Data Source='MSSQL';Initial Catalog=ExternalDB;Password='webdir123R';User ID='sa';Integrated Security=false;",
    "dataSourceType": 3
}
```

#### Sample Response Syntax

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

- [Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
