---
title: "Create a Route"
description: "Create a Route"
sidebar_position: 40
---

# Create a Route

Use this API to create a new workflow route. To create a workflow, you have to specify the
following:

- name - name of the workflow.
- Description - description of the workflow.
- Object - the object(s) - user, contact, group - to apply the workflow to.
- Event - a create, edit, or delete event that, when performed for the object(s), would trigger the
  workflow.
- Field - one or more fields (attributes) that the workflow would apply to. When the values of these
  attributes change for the object, an approval request is triggered.
- Filter - a condition that prevents the workflow from triggering, even when the object, event, and
  field criterion is met.
- Approver - the object to send the workflow request for approval.

See the
[Create a New Workflow](/docs/directorymanager/11.0/signin/workflow/implement.md#create-a-new-workflow)
section of the
[Implement Workflows](/docs/directorymanager/11.0/signin/workflow/implement.md) topic
for additional information.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes

## HTTP Methods

POST

#### Sample Request Syntax

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

#### Sample Response Syntax

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

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
