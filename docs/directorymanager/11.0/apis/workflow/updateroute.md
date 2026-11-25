---
title: "Update a Workflow Route in Directory Manager"
description: "Update an existing workflow route in an identity store by sending a PATCH request to the Workflows Route endpoint."
keywords:
  - update workflow route
  - workflow route approvers
  - Directory Manager API
  - Workflows/Route endpoint
  - PATCH request
sidebar_position: 160
---

# Update a Workflow Route in Directory Manager

Use this API to update a workflow route in a specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Route

## HTTP Methods

PATCH

### Sample Request Syntax

```
{
    "items": [
        {
            "workflowRouteId": 13,
            "identityStoreID": 0,
            "name": "API_Definied",
            "description": "API_Definied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": [
                {
                    "workflowRouteFieldId": 11,
                    "field": "department",
                    "workflowRouteId": 13
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 4,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 13
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 12,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 13,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 13,
                    "objectTypeId": 2,
                    "workflowRouteId": 13,
                    "objectTypeDTO": null
                }
            ],
            "enableEmailApproval": true,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        }
    ]
}
```

### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
