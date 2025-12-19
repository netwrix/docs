---
title: "Configure Power Automate"
description: "Configure Power Automate"
sidebar_position: 30
---

# Configure Power Automate

You can link an identity store in Directory Manager to Power Automate to trigger a flow from
Directory Manager. Use this API to connect an identity tore to Power Automate.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings**

## HTTP Methods

**POST**

#### Sample Request Syntax

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

#### Sample Response Syntax

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
