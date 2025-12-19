---
title: "Get Job Collections"
description: "Get Job Collections"
sidebar_position: 70
---

# Get Job Collections

Use this API to retrieve information of job collection(s) based on filters provided in the request
syntax.

See the [Create a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md)topic for
additional information on job collections.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections**

## HTTP Method

**GET**

#### Sample Request Syntax

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

#### Sample Response Syntax

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
