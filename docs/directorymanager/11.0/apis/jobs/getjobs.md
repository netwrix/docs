---
title: "Get Jobs API in Directory Manager"
description: "Retrieve Synchronize jobs that match filter criteria, with paging and sorting options, using a GET request."
keywords:
  - "get jobs API"
  - "Synchronize job filter"
  - "DataSyncJobs endpoint"
sidebar_position: 80
---

# Get Jobs API in Directory Manager

Use this API to get information about jobs based on the filters provided in the request syntax.

## Endpoint

`https://demomachine:4443/GroupIDDataService/api/DataSyncJobs`

## HTTP Method

GET

### Sample Request Syntax

```
{
    "filterCriteria": {
        "operator": "is exactly",
        "attribute": "Name",
        "value": "Sync_API",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "Operator": "string",
                "Attribute": "string",
                "Value": "string",
                "ValueType": 0,
                "ValueTypes": [
                    0
                ],
                "Child": null
            }
        ]
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "",
        "SortOrder": 1
    }
}
```

### Sample Response Syntax

```
{
    "count": 1,
    "data": [
        {
            "jobId": 6,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 1,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-04T09:45:25.373Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 0,
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

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Synchronize Jobs APIs in Directory Manager](/docs/directorymanager/11.0/apis/jobs/jobsapis.md)
