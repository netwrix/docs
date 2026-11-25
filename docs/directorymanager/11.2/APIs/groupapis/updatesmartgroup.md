---
title: "Update a Smart Group API"
description: "Update a Smart Group by identity with a POST request, so Directory Manager refreshes its membership."
keywords:
  - update Smart Group API
  - Smart Group update
  - Smart Group refresh
  - SmartGroups Update endpoint
sidebar_position: 200
unlisted: true
---

# Update a Smart Group API

This API updates the Smart Group whose identity is in the endpoint URL.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/{GroupIdentity}/Update**

## HTTP Method

**POST**

### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": 4,
    "identityStoreObject": null,
    "name": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "errorCode": null,
    "details": [
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```
