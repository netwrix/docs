---
title: "Delete Synchronize Job Collections API"
description: "Delete one or more Synchronize job collections by ID with a DELETE request to the Directory Manager data service."
keywords:
  - delete job collection API
  - DataSyncJobs Collections DELETE
  - delete job collections by ID
  - remove job collections API
sidebar_position: 40
unlisted: true
---

# Delete Synchronize Job Collections API

Use this API to delete the job collections specified in the endpoint URL.

See the
[Delete a Job Collection](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollection.md#delete-a-job-collection)
section of the [Manage Job Collections in Directory Manager Synchronize](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollection.md) topic
for additional information on job collections.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections?jobids=1&jobids=2**

## HTTP Method

**DELETE**

### Sample Response Syntax

```
{
    "name": null,
    "type": 7,
    "status": 0,
    "message": null,
    "data": null,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
