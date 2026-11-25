---
title: "Get Job Collections API in Directory Manager"
description: "Retrieve Synchronize job collections that match filter criteria, with paging and sorting options, using a GET request."
keywords:
  - "get job collections API"
  - "job collection filter"
  - "DataSyncJobs endpoint"
sidebar_position: 70
---

# Get Job Collections API in Directory Manager

Use this API to retrieve information about job collections based on the filters provided in the request
syntax.

See the [Create a Job Collection in Directory Manager Synchronize](/docs/directorymanager/11.2/portal/synchronize/collection/create.md) topic for
additional information on job collections.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections**

## HTTP Method

**GET**

### Sample Request Syntax

```
{
    "filterCriteria": {
        "operator": "is exactly",
        "attribute": "Name",
        "value": "DataSync_API",
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
            "id": 1,
            "jobCollectionGuid": null,
            "name": "DataSync_API",
            "description": "DataSync_API",
            "totalJobs": 2,
            "timesRun": 0,
            "lastRunDate": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "created": "2024-06-04T10:08:43.887Z",
            "modified": "2024-06-04T10:08:24Z",
            "schedule": "0",
            "smartgroupSchedule": null,
            "enabled": true,
            "jobs": []
        }
    ],
    "status": 0,
    "message": null
}
```
