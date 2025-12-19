---
title: "Validate Data Connectivity of a Data Source"
description: "Validate Data Connectivity of a Data Source"
sidebar_position: 170
---

# Validate Data Connectivity of a Data Source

Use this API to validate connection of a data source with the provider or with a source file.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/ValidateServerConnectivity

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "name": "Excel_API",
    "providerTypeName": "Microsoft Excel",
    "type": 1,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": "Excel_API",
    "type": 5,
    "status": 0,
    "message": "Connection Succeeded",
    "data": null,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": "",
    "errorCode": "",
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
