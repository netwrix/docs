---
title: "Get My Groups Count"
description: "Get My Groups Count"
sidebar_position: 100
---

# Get My Groups Count

This API retrieves the number of groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/count?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

#### Sample Response Syntax

```
{
    "count": 1305
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
