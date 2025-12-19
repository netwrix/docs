---
title: "Get a Data Source by Type and Name"
description: "Get a Data Source by Type and Name"
sidebar_position: 40
---

# Get a Data Source by Type and Name

Using this API you can retrieve information of specific type data source, let's say a Text/CSV based
data source, with a specific name.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/Get?type=4&name=Text/CSV_API**

## HTTP Method

**GET**

#### Sample Response Syntax

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
