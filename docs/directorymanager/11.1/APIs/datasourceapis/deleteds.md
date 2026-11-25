---
title: "Delete a Data Source with the Directory Manager API"
description: "Send a DELETE request to the Directory Manager API to remove a data source by its ID."
keywords:
  - delete data source API
  - DataSource DELETE
  - dataSourceId
  - Synchronize jobs
sidebar_position: 20
---

# Delete a Data Source with the Directory Manager API

Use this API to delete a specified data source.

:::note
Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries
using that data source.
:::


## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/{dataSourceId}**

## HTTP Method

**DELETE**

### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": true,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
