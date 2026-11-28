---
title: "Create an MS Excel Data Source with the API"
description: "Create a Directory Manager data source that connects to a Microsoft Excel workbook on a local server or OneDrive."
keywords:
  - Directory Manager API
  - Microsoft Excel
  - data source
  - xls file
  - OneDrive
sidebar_position: 30
unlisted: true
---

# Create an MS Excel Data Source with the API

Use this API to create a new data source for a Microsoft Excel file.

See the
[Create a Data Source for MS Excel](/docs/directorymanager/11.1/admincenter/datasource/create.md#create-a-data-source-for-ms-excel)
section of the [Create Data Sources in Directory Manager](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic for additional
information on creating an Excel data source using Directory Manager.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following syntax shows how to create an Excel data source.

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

### Sample Response Syntax

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
