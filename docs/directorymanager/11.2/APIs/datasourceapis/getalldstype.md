---
title: "Get All Data Sources by Type"
description: "Get All Data Sources by Type"
sidebar_position: 70
---

# Get All Data Sources by Type

Use this API to retrieve information of all data sources of a specific type such as all SQL server
data sources or all MS Excel type data sources.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetAllByType/{type}**

## HTTP Method

**GET**

#### Sample Response Syntax

```
[
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
    }
]
```
