---
title: "Get Provider Options of a Data Source"
description: "Get Provider Options of a Data Source"
sidebar_position: 140
---

# Get Provider Options of a Data Source

Use this API to retrieve information about the provider of a specified data source.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetDataSourceProviderOptions/{id}**

## HTTP Method

**GET**

#### Sample Response Syntax

```
{
    "isDirectoryProvider": false,
    "isTableProvider": true,
    "capabilityMappings": {
        "Source": [
            "Active Directory",
            "Text/CSV"
        ]
    },
    "providerType": "Text/CSV",
    "creatableObjects": [
        {
            "ldapName": "Object",
            "displayName": "Object"
        }
    ]
}
```
