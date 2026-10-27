---
title: "All Workflow Routes"
description: "All Workflow Routes"
sidebar_position: 10
---

# All Workflow Routes

Use this API to get information about all workflow routes, system defined and user defined, in a
specified identity store.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes**

## HTTP Methods

**GET**

#### Sample Response Syntax

```
[
    {
        "workflowRouteId": 2,
        "identityStoreID": 2,
        "name": "Workflow to Reset Password",
        "description": "Apply workflow when a user tries to reset its password.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 12,
        "eventDTO": null,
        "routeFieldDTOList": [],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 2,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 2,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 2,
                "objectTypeId": 2,
                "workflowRouteId": 2,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 3,
        "identityStoreID": 2,
        "name": "Workflow to Change Group Expiration Policy",
        "description": "Apply workflow when Group Expiration Policy is changed.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 7,
        "eventDTO": null,
        "routeFieldDTOList": [],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 3,
                "objectTypeId": 1,
                "workflowRouteId": 3,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 4,
        "identityStoreID": 2,
        "name": "Workflow to Nest a Group",
        "description": "Apply workflow when groups are added into the membership of other groups.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 6,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 1,
                "field": "member",
                "workflowRouteId": 4
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 3,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 4,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 4,
                "objectTypeId": 1,
                "workflowRouteId": 4,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 5,
        "identityStoreID": 2,
        "name": "Workflow to Join a Group",
        "description": "Apply workflow when a user joins a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 4,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 2,
                "field": "member",
                "workflowRouteId": 5
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 4,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 5,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 5,
                "objectTypeId": 1,
                "workflowRouteId": 5,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 6,
        "identityStoreID": 2,
        "name": "Workflow to Leave a Group",
        "description": "Apply workflow when a user leaves a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 5,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 3,
                "field": "member",
                "workflowRouteId": 6
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 5,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 6,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 6,
                "objectTypeId": 1,
                "workflowRouteId": 6,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 7,
        "identityStoreID": 2,
        "name": "Workflow to Transfer a User",
        "description": "Apply workflow when a manager transfer direct report.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 10,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 4,
                "field": "directReports",
                "workflowRouteId": 7
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 6,
                "approver": "NewManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 7,
                "approverType": 7,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 7,
                "objectTypeId": 2,
                "workflowRouteId": 7,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 8,
        "identityStoreID": 2,
        "name": "Workflow to Terminate a User",
        "description": "Apply workflow when a manager terminate direct report.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 11,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 5,
                "field": "directReports",
                "workflowRouteId": 8
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 8,
                "objectTypeId": 2,
                "workflowRouteId": 8,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 9,
        "identityStoreID": 2,
        "name": "Workflow to Change manager",
        "description": "Apply workflow when a user tries to change manager.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 2,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 6,
                "field": "manager",
                "workflowRouteId": 9
            },
            {
                "workflowRouteFieldId": 7,
                "field": "XAdditionalManager",
                "workflowRouteId": 9
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 7,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 9,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 9,
                "objectTypeId": 2,
                "workflowRouteId": 9,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
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
    }
] 
```
