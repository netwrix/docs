---
title: "Create an MS Access Data Source with the API"
description: "Create a Directory Manager data source that connects to a Microsoft Access database file on a local server or OneDrive."
keywords:
  - Directory Manager API
  - Microsoft Access
  - data source
  - accdb file
  - OneDrive
sidebar_position: 20
---

# Create an MS Access Data Source with the API

Use this API to create a new data source for a Microsoft Access database.

See the
[Create a Data Source for MS Access](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-ms-access)
section of the
[Create Data Sources in Directory Manager](/docs/directorymanager/11.0/signin/datasource/create.md) topic
to create an MS Access data source using Directory Manager.

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following request syntax shows how to create a data source for an Access
database. With Directory Manager, you can connect to an Access file that is on a local server
or on OneDrive.

```
{
    "name": "Access_API",
    "providerTypeName": "Microsoft Access",
    "type": 2,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\directorymanagerAccess.accdb",
        "FilePassword": "",
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
    "data": 6,
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
