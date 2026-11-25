---
title: "Get My Groups Count with the Directory Manager API"
description: "Get the number of groups that belong to the authenticated user."
keywords:
  - Directory Manager API
  - my groups count
  - Groups/count endpoint
sidebar_position: 100
unlisted: true
---

# Get My Groups Count with the Directory Manager API

This API retrieves the number of groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/count?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

## HTTP Method

GET

### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

### Sample Response Syntax

```
{
    "count": 1305
}
```

See Also

- Common Errors
- [User APIs in Directory Manager](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
