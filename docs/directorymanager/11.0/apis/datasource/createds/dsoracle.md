---
title: "Create an Oracle Data Source with the GroupID API"
description: "Send a POST request to the GroupID API to create a data source for an Oracle server or database, for use in queries and Synchronize jobs."
keywords:
  - Oracle data source
  - create data source API
  - DataSource/Create
  - Synchronize jobs
  - Oracle client
sidebar_position: 50
unlisted: true
---

# Create an Oracle Data Source with the GroupID API

Use this API to create a new data source.

See the
[Create a Data Source for Oracle](/docs/directorymanager/11.0/signin/datasource/create.md#create-a-data-source-for-oracle)
section of the
[Create Data Sources in GroupID](/docs/directorymanager/11.0/signin/datasource/create.md) topic
to create an Oracle data source using GroupID.

## Endpoint

**https://demomachine:4443/GroupIDDataService/api/DataSource/Create**

## HTTP Method

**POST**

### Sample Request Syntax

The following syntax is for creating an Oracle data source. You can create a data source for an
Oracle server or a specific database on a server. You can use this data source in queries and as
source and destination provider in Synchronize jobs. This provider supports dynamic schema
detection.

:::note
Oracle client must be installed to use this provider. Ensure that you reboot your computer after
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
        "Password": "webdir123RR",
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

### Sample Response Syntax

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

See Also

- [GroupID Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
