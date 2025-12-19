---
title: "Create a Data Source for MS Excel"
description: "Create a Data Source for MS Excel"
sidebar_position: 30
---

# Create a Data Source for MS Excel

Use this API to create a new data source.

See the
[Create a Data Source for MS Excel](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-ms-excel)
section of the
[Create a Data Source](/docs/directorymanager/11.0/signin/datasource/create.md) topic
for additional information on creating an Excel data source using GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The syntax given below provides you information for creating an Excel data source.

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
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 4,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
