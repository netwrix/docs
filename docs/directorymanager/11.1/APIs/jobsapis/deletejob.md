---
title: "Delete Jobs"
description: "Delete Jobs"
sidebar_position: 30
---

# Delete Jobs

After creating job, you can modify a job or even delete a job if it is no more required. Use this
API to delete job(s) specified in the end point URL.

See the [Deleting a Job](/docs/directorymanager/11.1/portal/synchronize/manage/job.md#deleting-a-job) section of the
[Manage a Job](/docs/directorymanager/11.1/portal/synchronize/manage/job.md) topic for additional information.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs?jobids=1&jobids=2**

## HTTP Method

**DELETE**

#### Sample Response Syntax

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
