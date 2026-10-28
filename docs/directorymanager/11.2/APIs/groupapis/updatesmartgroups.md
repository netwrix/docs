---
title: "Update Smart Groups"
description: "Update Smart Groups"
sidebar_position: 210
---

# Update Smart Groups

This API updates multiple Smart Groups whose identities are provided in the request body.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/Update**

## HTTP Method

**POST**

#### Sample Request Syntax

```
[
  "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
  "424eea5a-7781-4c46-851f-28348b597a72"
]
```

#### Sample Response Syntax

```
{
    "clientID": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "details": [
        {
            "groupID": "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
            "message": null,
            "taskID": 8,
            "status": 0
        },
        {
            "groupID": "424eea5a-7781-4c46-851f-28348b597a72",
            "message": null,
            "taskID": 9,
            "status": 0
        }
    ],
    "message": null,
    "status": 0
}
```
