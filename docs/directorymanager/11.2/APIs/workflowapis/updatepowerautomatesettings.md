---
title: "Update Power Automate Settings"
description: "Update Power Automate Settings"
sidebar_position: 170
---

# Update Power Automate Settings

If you have defined Power-Automate settings for an identity store, you can use this API to update
those settings.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings**

## HTTP Methods

**PATCH**

#### Sample Request Syntax

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

#### Sample Response Syntax

```
true
```
