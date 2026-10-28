---
title: "Get Filtered Data Sources by isSource"
description: "Get Filtered Data Sources by isSource"
sidebar_position: 90
---

# Get Filtered Data Sources by isSource

Use this API to get information about data sources filtered by your role policy. If the isSource parameter in the URL is true, the API filters the results; otherwise, it returns all data sources.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetFilteredDataSources?isSource=true**

## HTTP Method

**GET**

#### Sample Response Syntax

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
            "Password": "password123",
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
