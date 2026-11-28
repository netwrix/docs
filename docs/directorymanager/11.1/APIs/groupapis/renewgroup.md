---
title: "Renew a Group API"
description: "Renew a single group by identity with a POST request to the Directory Manager data service."
keywords:
  - renew group API
  - group lifecycle renewal
  - group expiration renewal
  - Groups Renew endpoint
sidebar_position: 160
unlisted: true
---

# Renew a Group API

Use this API to renew the group specified in the endpoint URL.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Renew?ReplicationRequired=true**

## HTTP Method

**POST**

### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```
