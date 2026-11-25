---
title: "Get Data Source Provider Options API in Directory Manager"
description: "Retrieve the provider type, capability mappings, and creatable objects of a data source specified by its ID."
keywords:
  - data source provider options
  - GetDataSourceProviderOptions endpoint
  - data source provider type
  - capability mappings
sidebar_position: 140
unlisted: true
---

# Get Data Source Provider Options API in Directory Manager

Use this API to retrieve information about the provider of a specified data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetDataSourceProviderOptions/{id}

## HTTP Method

GET

### Sample Response Syntax

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

See Also

- [Directory Manager Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
