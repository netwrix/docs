---
title: "Get Workflow Requests"
description: "Get Workflow Requests"
sidebar_position: 150
---

# Get Workflow Requests

Using this API you can retrieve information about a workflow request ID(s) of which are specified in
the end point URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows?ids=1

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRequestId": 1,
        "legacyRequestId": null,
        "requesterIdentityStoreID": 2,
        "requester": "376cf368-8fdb-4a6e-8cbc-c2f679815f55",
        "requesterClass": 0,
        "targetObjectIdentityStoreID": 2,
        "targetObject": "b6eb66b7-81d8-4fa5-a6f9-3707ad52076e",
        "targetObjectClass": 0,
        "actualApproverIdentityStoreID": 0,
        "actualApprover": null,
        "createdOn": "2024-05-14T04:02:28.89",
        "workflowRouteId": 10,
        "statusId": 1,
        "objectName": "Usr_Malik Schuld",
        "container": null,
        "workflowStatusDTO": {
            "statusId": 1,
            "description": "Pending"
        },
        "workflowRouteDTO": {
            "workflowRouteId": 10,
            "identityStoreID": 2,
            "name": "UserDefinied",
            "description": "UserDefinied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": null,
            "routeFilterDTOList": null,
            "routeApproverDTOList": null,
            "routeObjectDTOList": null,
            "enableEmailApproval": false,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        },
        "requestApproverDTOList": [
            {
                "workflowRequestApproverId": 0,
                "approver": "Administrator",
                "approverIdentityStoreID": 0,
                "workflowRequestId": 0,
                "approverType": 0,
                "approverName": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
                "approverClass": 6,
                "approverIdFromIdentityStore": null,
                "isDefaultApprover": false,
                "parentApproverIdentity": ""
            }
        ],
        "fieldDTOList": [
            {
                "fieldId": 1,
                "workflowRequestId": 1,
                "name": "department",
                "value": "TestDataNew",
                "oldValue": "TestData",
                "valueType": 2,
                "fieldValueDTOList": [],
                "oldFieldValueDTOList": [],
                "fieldValueResolved": null,
                "oldFieldValueResolved": null
            }
        ],
        "objectType": 2,
        "statusUpdatedOn": "2024-05-14T00:00:00",
        "reason": null,
        "smartUpdateOption": null,
        "jobId": null,
        "description": null,
        "requesterName": "Shah Elahi",
        "actualApproverName": null,
        "schedule": null,
        "accelerationStatus": 4,
        "currentAccelerationLevel": 0,
        "maxAccelerationLevel": 3,
        "whenAccelerated": "2024-05-14T00:00:00",
        "clientId": "442139c9-dba6-4d2b-8c54-a20babae0b2f",
        "workflowRequestConfigurations": ""
    }
]   
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
