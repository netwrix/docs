---
title: "Update Power Automate Settings in Directory Manager"
description: "Change the Power Automate settings of an identity store by sending a PATCH request to the MsFlow Settings endpoint."
keywords:
  - update Power Automate settings
  - MsFlow Settings endpoint
  - Directory Manager API
  - PATCH request
  - identity store settings
sidebar_position: 170
unlisted: true
---

# Update Power Automate Settings in Directory Manager

If you have defined Power Automate settings for an identity store, you can use this API to update
those settings.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

PATCH

### Sample Request Syntax

```
{
    "msFlowID": 1,
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
true
```

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Workflow APIs](/docs/directorymanager/11.0/apis/workflow/workflowapis.md)
