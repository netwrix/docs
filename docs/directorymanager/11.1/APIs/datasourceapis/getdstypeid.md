---
title: "Get a Data Source by Type and with ID"
description: "Get a Data Source by Type and with ID"
sidebar_position: 50
---

# Get a Data Source by Type and with ID

Using this API, you can retrieve information of a data source by its type and ID. For example, an
SQL data source with a specific id.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetByType/{dataSourceTypeId}**

## HTTP Method

**GET**

#### Sample Request Syntax

```
{
    "LoadConfigurations": false,
    "FilterCriteria": {
        "Operator": "and",
        "Attribute": null,
        "Value": null,
        "ValueType": 0,
        "ValueTypes": [],
        "DonotEscapeValue": false,
        "Child": [
            {
                "Operator": "Contains",
                "Attribute": "Datasource Name",
                "Value": "Excel_API_Updated",
                "ValueType": 0,
                "ValueTypes": [
                    0
                ],
                "DonotEscapeValue": false,
                "Child": null
            }
        ]
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "",
        "SortOrder": 1
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "count": 1,
        "data": [
            {
                "id": 4,
                "name": "Excel_API_Updated",
                "providerTypeName": "Microsoft Excel",
                "type": 1,
                "creationDate": "2024-05-07T04:20:17.663",
                "lastUpdate": "2024-05-08T05:03:08.973",
                "configurationValues": {
                    "FileServer": "LocalServer",
                    "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
                    "ConnectionString": "",
                    "UserName": "",
                    "Password": ""
                }
            }
        ],
        "status": 0,
        "message": null
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
