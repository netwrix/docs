---
title: "Get Power Automate Settings in Directory Manager"
description: "Retrieve the Power Automate settings of an identity store that is linked to Power Automate by calling the MsFlow Settings endpoint."
keywords:
  - Power Automate settings
  - MsFlow Settings endpoint
  - Directory Manager API
  - identity store link
  - GET request
sidebar_position: 140
---

# Get Power Automate Settings in Directory Manager

If you have linked an identity store to Power Automate in Directory Manager, you can retrieve the
Power Automate settings using this API.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings**

## HTTP Methods

**GET**

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
