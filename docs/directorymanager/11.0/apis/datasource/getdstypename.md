---
title: "Get a Data Source by Type and Name API"
description: "Retrieve a data source of a specific type, such as Text/CSV, by its name through the GroupID data service."
keywords:
  - get data source by type and name
  - data source type filter
  - data source name lookup
  - DataSource Get endpoint
sidebar_position: 40
unlisted: true
---

# Get a Data Source by Type and Name API

Use this API to retrieve information about a data source of a specific type, for example a Text/CSV
data source, with a specific name.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Get?type=4&name=Text/CSV_API

## HTTP Method

GET

### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": [
        {
            "id": 11,
            "name": "Text/CSV_API",
            "providerTypeName": "Text/CSV",
            "type": 4,
            "creationDate": "2024-05-07T04:34:50.44",
            "lastUpdate": null,
            "configurationValues": {}
        }
    ],
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
