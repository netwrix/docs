---
title: "Get Job Collections Details"
description: "Get Job Collections Details"
sidebar_position: 50
---

# Get Job Collections Details

Use this API to retrieve information about jobs within a job collection based on the criteria
provided in the request syntax.

See the
[Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)for
additional information on Job Collections.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections/Details

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "filters": {
        "Operator": "is exactly",
        "Attribute": "Name",
        "Value": "TestCollection",
        "ValueType": 0,
        "ValueTypes": [],
        "DonotEscapeValue": false,
        "Child": null
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "modified",
        "SortOrder": 1
    },
    "jobCollectionId": 21
}
```

#### Sample Response Syntax

```
{
    "count": 2,
    "data": [
        {
            "jobId": 17,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 2,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-05T07:42:45.18Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 1,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        },
        {
            "jobId": 18,
            "templateId": null,
            "jobGuid": null,
            "name": "NewJob",
            "type": 2,
            "description": "NewJob",
            "sourceProvider": "AdStore",
            "destinationProvider": "Azure",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-05T08:04:14.413Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 2,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        }
    ],
    "status": 0,
    "message": null
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Synchronize Jobs APIs](/docs/directorymanager/11.0/apis/jobs/jobsapis.md)
