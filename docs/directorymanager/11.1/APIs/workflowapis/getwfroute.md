---
title: "Get a Workflow Route"
description: "Get a Workflow Route"
sidebar_position: 90
---

# Get a Workflow Route

Use this API to get workflow route id of which is specified in the end point URL.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes/{WorkflowRouteID}**

## HTTP Methods

**GET**

#### Sample Response Syntax

```
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
```
