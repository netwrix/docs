---
title: "Get Default Routes"
description: "Get Default Routes"
sidebar_position: 110
---

# Get Default Routes

Use this API to retrieve information about Directory Manager default workflows. These workflows are
predefine in Directory Manager that trigger when their associated events occur.

See the [System Workflows](/docs/directorymanager/11.1/admincenter/workflow/overview.md#system-workflows) section of the
[Workflows](/docs/directorymanager/11.1/admincenter/workflow/overview.md) topic for additional information.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes/Default**

## HTTP Methods

**GET**

#### Sample Response Syntax

```
[
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Reset Password",
        "description": "Apply workflow when a user tries to reset its password.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 12,
        "eventDTO": null,
        "routeFieldDTOList": null,
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Change Group Expiration Policy",
        "description": "Apply workflow when Group Expiration Policy is changed.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 7,
        "eventDTO": null,
        "routeFieldDTOList": null,
        "routeFilterDTOList": null,
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "directReports",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "NewManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 7,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "directReports",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
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
        "workflowRouteId": 0,
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
                "workflowRouteFieldId": 0,
                "field": "manager",
                "workflowRouteId": 0
            },
            {
                "workflowRouteFieldId": 0,
                "field": "XAdditionalManager",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
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
    }
]
```
