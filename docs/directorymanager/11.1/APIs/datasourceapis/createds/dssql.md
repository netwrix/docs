---
title: "Create a Data Source for SQL Server"
description: "Create a Data Source for SQL Server"
sidebar_position: 60
---

# Create a Data Source for SQL Server

Use this API to create a new data source.

See the
[Create a Data Source for SQL Server](/docs/directorymanager/11.1/admincenter/datasource/create.md#create-a-data-source-for-sql-server)
section of the [Create a Data Source](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic for creating an
SQL data source using Directory Manager.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

#### Sample Request Syntax

The following syntax is for creating an SQL server data source. This data source can be used in
queries and as source and destination in Synchronize jobs. This provider supports dynamic schema
detection.

```
{
    "name": "SQL_API",
    "providerTypeName": "SQL Server",
    "type": 3,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "ConnectionString": "MSSQL",
        "UserName": "sa",
        "Password": "password",
        "WindowsAuthentication": "false",
        "Database": "ExternalDB"
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 9,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
