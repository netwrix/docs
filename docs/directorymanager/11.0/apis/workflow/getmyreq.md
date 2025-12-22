---
title: "Get My Requests"
description: "Get My Requests"
sidebar_position: 120
---

# Get My Requests

Using this API the logged in user can get information about his/her workflow request(s).

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/MyRequests

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRequestId": 2,
        "legacyRequestId": null,
        "requesterIdentityStoreID": 2,
        "requester": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
        "requesterClass": 6,
        "targetObjectIdentityStoreID": 2,
        "targetObject": "7ea556f0-b5fc-46f9-96d0-7212c2cd831d",
        "targetObjectClass": 6,
        "actualApproverIdentityStoreID": 0,
        "actualApprover": null,
        "createdOn": "2024-05-14T04:07:08.93",
        "workflowRouteId": 10,
        "statusId": 1,
        "objectName": "Usr_Martha Sevy",
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
            "routeFieldDTOList": [
                {
                    "workflowRouteFieldId": 8,
                    "field": "department",
                    "workflowRouteId": 10
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 1,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 10
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 9,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 10,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 10,
                    "objectTypeId": 2,
                    "workflowRouteId": 10,
                    "objectTypeDTO": null
                }
            ],
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
                "workflowRequestApproverId": 2,
                "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                "approverIdentityStoreID": 2,
                "workflowRequestId": 2,
                "approverType": 0,
                "approverName": "Jonathan Blackwell",
                "approverClass": 0,
                "approverIdFromIdentityStore": null,
                "isDefaultApprover": false,
                "parentApproverIdentity": ""
            }
        ],
        "fieldDTOList": [
            {
                "fieldId": 2,
                "workflowRequestId": 2,
                "name": "department",
                "value": "QA_test",
                "oldValue": "QA",
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
        "requesterName": "Administrator",
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
