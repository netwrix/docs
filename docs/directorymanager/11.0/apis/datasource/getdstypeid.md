---
title: "Get Filtered Data Sources by Type ID in Directory Manager"
description: "Retrieve Directory Manager data sources of a given type ID, filtered by criteria such as the data source name."
keywords:
  - filtered data sources by type ID
  - DataSource GetByType endpoint
  - data source filter criteria
  - data source search options
sidebar_position: 50
unlisted: true
---

# Get Filtered Data Sources by Type ID in Directory Manager

Use this API to retrieve information about a data source by its type and ID. For example, an
SQL data source with a specific ID.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetByType/{dataSourceTypeId}

## HTTP Method

GET

### Sample Request Syntax

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

### Sample Response Syntax

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

See Also

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
