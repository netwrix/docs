---
title: "Create a Text/CSV Data Source with the Directory Manager API"
description: "Send a POST request to the Directory Manager API to create a data source from a CSV or text file on a local server or OneDrive."
keywords:
  - Text/CSV data source
  - create data source API
  - DataSource/Create
  - CSV delimiter
  - OneDrive
sidebar_position: 10
unlisted: true
---

# Create a Text/CSV Data Source with the Directory Manager API

Use this API to create a new data source.

See the
[Create a Data Source for a Text/CSV File](/docs/directorymanager/11.2/admincenter/datasource/create.md#create-a-data-source-for-a-textcsv-file)
section of the [Create Data Sources in Directory Manager](/docs/directorymanager/11.2/admincenter/datasource/create.md) topic to create a
Text/CSV data source using Directory Manager.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following syntax is for creating a data source for a comma-separated values (.csv) file or a
text (.txt) file. You must also specify the delimiter used in the file to separate values. You can use this data
source in queries and only as a source in Synchronize jobs. Directory Manager enables
you to connect to a text file that is placed on a local server or on OneDrive.

```
{
    "name": "Text/CSV_API",
    "providerTypeName": "Text/CSV",
    "type": 4,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "File": "C:\\Users\\administrator.directorymanager\\Desktop\\PWList.txt",
        "Delimiter": ",",
        "Server": "",
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
    "data": 11,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
