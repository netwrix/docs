---
title: "Create a SQL Server Data Source with the Directory Manager API"
description: "Send a POST request to the Directory Manager API to create a SQL Server data source for use in queries and Synchronize jobs."
keywords:
  - SQL Server data source
  - create data source API
  - DataSource/Create
  - Synchronize jobs
  - Windows authentication
sidebar_position: 60
unlisted: true
---

# Create a SQL Server Data Source with the Directory Manager API

Use this API to create a new data source.

See the
[Create a Data Source for SQL Server](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-sql-server)
section of the
[Create Data Sources in Directory Manager](/docs/directorymanager/11.0/signin/datasource/create.md) topic
to create a SQL Server data source using Directory Manager.

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following syntax is for creating a SQL Server data source. You can use this data source in
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

### Sample Response Syntax

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

See Also

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
