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

**https://machinename:4443/GroupIDDataService/api/DataSource/ParseConnectionString**

## HTTP Method

**POST**

### Sample Request Syntax

```
{
    "connectionString": "Data Source='MSSQL';Initial Catalog=ExternalDB;Password='password123';User ID='sa';Integrated Security=false;",
    "dataSourceType": 3
}
```

### Sample Response Syntax

```
{
    "ConnectionString": "'MSSQL'",
    "Database": "ExternalDB",
    "Password": "'password123'",
    "UserName": "'sa'",
    "WindowsAuthentication": "true"
}
```
