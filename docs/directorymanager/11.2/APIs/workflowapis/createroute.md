---
title: "Create a Directory Manager Workflow Route"
description: "Use this POST endpoint to create a workflow route that sends approval requests when chosen objects, events, and fields match."
keywords:
  - create workflow route
  - workflow route API
  - workflow approver
  - route filter
  - POST Routes endpoint
sidebar_position: 40
---

# Create a Directory Manager Workflow Route

Use this API to create a new workflow route. To create a workflow, you must specify the
following:

- Name – The name of the workflow.
- Description – The description of the workflow.
- Objects – The objects – user, contact, group – to apply the workflow to.
- Event – A create, edit, or delete event that, when performed for the objects, triggers the
  workflow.
- Field – One or more fields (attributes) that the workflow applies to. When the values of these
  attributes change for the object, an approval request is triggered.
- Filter – A condition that prevents the workflow from triggering, even when the object, event, and
  field criteria are met.
- Approver – The object to send the workflow request to for approval.

See the [Create a New Workflow](/docs/directorymanager/11.2/admincenter/workflow/implement.md#create-a-new-workflow)
section of the [Create and Manage Workflows in Directory Manager](/docs/directorymanager/11.2/admincenter/workflow/implement.md) topic for more
information.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes**

## HTTP Methods

**POST**

### Sample Request Syntax

```
{
    "items": [
        {
            "workflowRouteId": 0,
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
                    "workflowRouteFieldId": 0,
                    "field": "department",
                    "workflowRouteId": 0
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 0,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 0
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 0,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 0,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 0,
                    "objectTypeId": 2,
                    "workflowRouteId": 0,
                    "objectTypeDTO": {
                        "objectTypeId": 0,
                        "name": null
                    }
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
            "details": [
                {
                    "name": "API_Definied",
                    "type": 5,
                    "status": 0,
                    "message": "",
                    "data": 13,
                    "identityStoreObject": null,
                    "details": [],
                    "currentDirectoryServer": "",
                    "errorCode": "",
                    "exceptionMessagesAttributeWise": null,
                    "isResyncAble": true
                }
            ],
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
