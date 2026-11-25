---
title: "Get Data Sources by Type API in Directory Manager"
description: "Retrieve all Directory Manager data sources of one type, such as every SQL Server or Microsoft Excel data source."
keywords:
  - data sources by type API
  - DataSource GetAllByType endpoint
  - SQL Server data sources
  - list data sources of one type
sidebar_position: 70
---

# Get Data Sources by Type API in Directory Manager

Use this API to retrieve information about all data sources of a specific type, such as all SQL Server
data sources or all Microsoft Excel data sources.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetAllByType/{type}**

## HTTP Method

**GET**

### Sample Response Syntax

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
