---
title: "Get Power Automate Settings in GroupID"
description: "Retrieve the Power Automate settings of an identity store that is linked to Power Automate by calling the MsFlow Settings endpoint."
keywords:
  - Power Automate settings
  - MsFlow Settings endpoint
  - GroupID API
  - identity store link
  - GET request
sidebar_position: 140
unlisted: true
---

# Get Power Automate Settings in GroupID

If you have linked an identity store to Power Automate in GroupID, you can retrieve the
Power Automate settings using this API.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

GET

### Sample Response Syntax

```
{
    "msFlowID": 1,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": false,
    "organizationalCode": "Netwrix",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [GroupID Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
