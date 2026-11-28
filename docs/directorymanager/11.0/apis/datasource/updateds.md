---
title: "Update a Data Source with the GroupID API"
description: "Send a PUT request to the GroupID API to change the name, provider settings, or connection details of an existing data source."
keywords:
  - GroupID API
  - update data source
  - DataSource Update endpoint
  - PUT request
  - data source configuration
sidebar_position: 160
unlisted: true
---

# Update a Data Source with the GroupID API

Use this API to update the information of an existing data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Update

## HTTP Method

PUT

### Sample Request Syntax

```
{
    "id": 4,
    "name": "Excel_API_Updated",
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

### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": true,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [GroupID Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
