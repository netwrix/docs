---
title: "Create an ODBC Data Source with the API"
description: "Create a Directory Manager data source that connects through an ODBC system DSN to an ODBC-compatible provider such as Excel."
keywords:
  - Directory Manager API
  - ODBC data source
  - system DSN
  - data source
sidebar_position: 40
---

# Create an ODBC Data Source with the API

Use this API to create a new data source for an ODBC provider.

See the
[Create a Data Source for ODBC](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-odbc)
section of the
[Create Data Sources in Directory Manager](/docs/directorymanager/11.0/signin/datasource/create.md) topic
to create an ODBC data source using Directory Manager.

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following syntax is for creating an ODBC data source that you can use to connect to MS Excel,
an ODBC-compatible provider.

```
{
    "name": "Excel Odbc_API",
    "providerTypeName": null,
    "type": 6,
    "creationDate": "2024-05-23T06:21:01.19",
    "lastUpdate": null,
    "configurationValues": {
        "Server": "Excel",
        "DsnType": "SystemDsn",
        "UserName": "",
        "Password": ""
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 6,
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
