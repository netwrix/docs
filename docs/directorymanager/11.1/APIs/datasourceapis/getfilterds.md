---
title: "Get Filtered Data Sources by isSource"
description: "Get Filtered Data Sources by isSource"
sidebar_position: 90
---

# Get Filtered Data Sources by isSource

This API is for getting information of data sources filtered on the basis of your role policy. if
value of isSource is true in the end point URL then it will filter information of data sources
otherwise it will not.

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
