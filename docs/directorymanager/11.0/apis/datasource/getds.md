---
title: "Get a Data Source API in Directory Manager"
description: "Retrieve the details of one Directory Manager data source by passing its ID in the endpoint URL."
keywords:
  - get data source by ID
  - retrieve data source by dataSourceId
  - data source details API
  - single data source details
sidebar_position: 30
---

# Get a Data Source API in Directory Manager

Use this API to retrieve information about the data source specified in the endpoint
URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/{dataSourceId}

## HTTP Method

GET

### Sample Request Syntax

```
true
```

### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": null,
        "type": 1,
        "creationDate": "2024-05-07T04:20:17.663",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

## See Also

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
