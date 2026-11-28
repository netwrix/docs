---
title: "Connect GroupID to Power Automate"
description: "Use this POST endpoint to link a GroupID identity store to Microsoft Power Automate so workflows can trigger flows."
keywords:
  - Power Automate
  - Microsoft Flow settings
  - msFlowID
  - workflow integration API
  - Power Automate tenant ID
sidebar_position: 30
unlisted: true
---

# Connect GroupID to Power Automate

You can link an identity store in GroupID to Power Automate to trigger a flow from
GroupID. Use this API to connect an identity store to Power Automate.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

POST

### Sample Request Syntax

```
{
    "msFlowID": 0,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": true,
    "organizationalCode": "Netwrix-US",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

### Sample Response Syntax

```
{
    "msFlowID": 3,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": true,
    "organizationalCode": "Netwrix-US",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [GroupID Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
