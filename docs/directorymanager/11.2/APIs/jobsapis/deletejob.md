---
title: "Delete Synchronize Jobs API"
description: "Delete one or more Synchronize jobs by ID with a DELETE request to the Directory Manager data service."
keywords:
  - delete Synchronize job API
  - DataSyncJobs DELETE endpoint
  - delete jobs by ID
  - job cleanup
sidebar_position: 30
unlisted: true
---

# Delete Synchronize Jobs API

After creating a job, you can modify or delete a job if you no longer need it. Use this
API to delete the jobs specified in the endpoint URL.

See the [Deleting a Job](/docs/directorymanager/11.2/portal/synchronize/manage/job.md#deleting-a-job) section of the
[Manage Synchronize Jobs in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/manage/job.md) topic for additional information.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs?jobids=1&jobids=2**

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
