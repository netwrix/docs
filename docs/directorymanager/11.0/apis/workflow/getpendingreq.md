---
title: "Get Pending Requests"
description: "Get Pending Requests"
sidebar_position: 130
---

# Get Pending Requests

Use this API to retrieve information about all those requests with pending status provided you have
the required permissions to manage all requests. See the
[Miscellaneous](/docs/directorymanager/11.0/signin/securityrole/permissions.md#miscellaneous)
section of the
[Security Role – Permissions](/docs/directorymanager/11.0/signin/securityrole/permissions.md)
topic.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/Pending

## HTTP Methods

GET.

#### Sample Request Syntax

```
{
    "pageIndex": 1,
    "pageSize": 10,
    "filterCriteria": {
        "operator": "Contains",
        "attribute": "Route.description",
        "value": "UserDefinied",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            null
        ]
    },
    "getRecent": true,
    "totalFound": 0,
    "sortOrder": "string"
}
```

#### Sample Response Syntax

```
{
    "total": 2,
    "data": [
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
                    "workflowRequestApproverId": 0,
                    "approver": "Jonathan Blackwell",
                    "approverIdentityStoreID": 0,
                    "workflowRequestId": 0,
                    "approverType": 0,
                    "approverName": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverClass": 6,
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
        },
        {
            "workflowRequestId": 1,
            "legacyRequestId": null,
            "requesterIdentityStoreID": 2,
            "requester": "376cf368-8fdb-4a6e-8cbc-c2f679815f55",
            "requesterClass": 6,
            "targetObjectIdentityStoreID": 2,
            "targetObject": "b6eb66b7-81d8-4fa5-a6f9-3707ad52076e",
            "targetObjectClass": 6,
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
}   
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
