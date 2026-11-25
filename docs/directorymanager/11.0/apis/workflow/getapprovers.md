---
title: "Get Workflow Request Approvers Using the API"
description: "Retrieve the approvers of a workflow request, with paging and filtering, by sending a GET request to the Directory Manager API."
keywords:
  - workflow request approvers
  - get approvers API
  - approver filter criteria
  - Directory Manager REST API
sidebar_position: 100
---

# Get Workflow Request Approvers Using the API

Use this API to get information about the approvers of a workflow request.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/Approvers

## HTTP Methods

GET

### Sample Request Syntax

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

### Sample Response Syntax

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

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
