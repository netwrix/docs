---
title: "Create a Data Source for Oracle"
description: "Create a Data Source for Oracle"
sidebar_position: 50
---

# Create a Data Source for Oracle

Use this API to create a new data source.

See the
[Create a Data Source for Oracle](/docs/directorymanager/11.1/admincenter/datasource/create.md#create-a-data-source-for-oracle)
section of the [Create a Data Source](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic to create an
MS Access data source using Directory Manager.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

#### Sample Request Syntax

The following syntax is for creating an Oracle data source. You can create a data source for an
Oracle server or a specific database on a server. This data source can be used in queries and as
source and destination provider in Synchronize jobs. This provider supports dynamic schema
detection.

:::note
Oracle client must be installed to use this provider. Make sure you reboot your computer after
installing the Oracle client.
:::


```
{
    "name": "Oracle1",
    "providerTypeName": null,
    "type": 5,
    "creationDate": "2024-05-29T06:27:55.61",
    "lastUpdate": null,
    "configurationValues": {
        "ConnectionString": "orca",
        "UserName": "HR",
        "Password": "password123",
        "Protocol": "",
        "HostName": "",
        "PortNumber": "",
        "Database": ""
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 2,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
