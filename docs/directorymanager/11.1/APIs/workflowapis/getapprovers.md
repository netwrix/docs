---
title: "Get Approvers"
description: "Get Approvers"
sidebar_position: 100
---

# Get Approvers

This API provides information about the approver(s) of a workflow request.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/Approvers**

## HTTP Methods

**GET**

#### Sample Request Syntax

```
{
    "pageIndex": 1,
    "pageSize": 10,
    "filterCriteria": {
        "operator": null,
        "attribute": null,
        "value": null,
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "operator": "Contains",
                "attribute": "Route.description",
                "value": "UserDefinied"
            }
        ]
    },
    "getRecent": true,
    "totalFound": 0,
    "sortOrder": "asc",
    "loadDetails": true,
    "workflowRequestID": 8,
    "resolveApprovers": true,
    "excludedApprovers": [
        "string"
    ]
}   
```

#### Sample Response Syntax

```
{
    "total": 1,
    "data": [
        {
            "workflowRequestApproverId": 0,
            "approver": "Jonathan Blackwell",
            "approverIdentityStoreID": 2,
            "workflowRequestId": 0,
            "approverType": 0,
            "approverName": "80ffbf0d-142c-4822-b843-1840bf50c05a",
            "approverClass": 6,
            "approverIdFromIdentityStore": null,
            "isDefaultApprover": false,
            "parentApproverIdentity": ""
        }
    ]
}
```
