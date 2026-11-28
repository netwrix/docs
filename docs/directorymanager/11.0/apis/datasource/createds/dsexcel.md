---
title: "Create an MS Excel Data Source with the API"
description: "Create a GroupID data source that connects to a Microsoft Excel workbook on a local server or OneDrive."
keywords:
  - GroupID API
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
[Create a Data Source for MS Excel](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-ms-excel)
section of the
[Create Data Sources in GroupID](/docs/directorymanager/11.0/signin/datasource/create.md) topic
for additional information on creating an Excel data source using GroupID.

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/DataSource/Create**

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

See Also

- [GroupID Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
