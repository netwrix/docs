---
title: "Get Power Automate Settings"
description: "Get Power Automate Settings"
sidebar_position: 140
---

# Get Power Automate Settings

If in Directory Manager you have linked an identity store to Power Automate, you can retrieve the
Power Automate setting using this API.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings**

## HTTP Methods

**GET**

#### Sample Response Syntax

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
