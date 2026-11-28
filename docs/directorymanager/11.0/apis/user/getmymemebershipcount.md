---
title: "Get My Membership Count with the GroupID API"
description: "Get the number of groups the authenticated user is a member of."
keywords:
  - GroupID API
  - membership count
  - Groups/Membership/count endpoint
sidebar_position: 120
unlisted: true
---

# Get My Membership Count with the GroupID API

Using this API, the authenticated user can get the number of groups the user is a member of.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership/count?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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
    "count": 32
}
```

See Also

- Common Errors
- [User APIs in GroupID](/docs/directorymanager/11.0/apis/user/userapis.md)
- Group APIs
