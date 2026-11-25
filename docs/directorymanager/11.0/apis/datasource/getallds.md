---
title: "Get All Data Sources API in Directory Manager"
description: "Retrieve every data source defined in Directory Manager, including its type, creation date, and configuration values."
keywords:
  - Directory Manager data source API
  - list all data sources
  - DataSource GetAll endpoint
  - data source configuration values
sidebar_position: 60
---

# Get All Data Sources API in Directory Manager

Use this API to get information about all data sources defined so far in Directory Manager.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetAll

## HTTP Method

GET

### Sample Response Syntax

```
[
    {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": "Microsoft Excel",
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
    {
        "id": 6,
        "name": "Access_API",
        "providerTypeName": "Microsoft Access",
        "type": 2,
        "creationDate": "2024-05-07T04:25:48.297",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\directorymanagerAccess.accdb",
            "FilePassword": "",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    {
        "id": 9,
        "name": "SQL_API",
        "providerTypeName": "SQL Server",
        "type": 3,
        "creationDate": "2024-05-07T04:29:45.393",
        "lastUpdate": null,
        "configurationValues": {
            "ConnectionString": "MSSQL",
            "UserName": "sa",
            "Password": "webdir123R",
            "WindowsAuthentication": "false",
            "Database": "ExternalDB"
        }
    },
    {
        "id": 11,
        "name": "Text/CSV_API",
        "providerTypeName": "Text/CSV",
        "type": 4,
        "creationDate": "2024-05-07T04:34:50.44",
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
]
```

## See Also

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
