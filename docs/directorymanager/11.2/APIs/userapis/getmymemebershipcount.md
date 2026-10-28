---
title: "Get My Membership Count"
description: "Get My Membership Count"
sidebar_position: 130
---

# Get My Membership Count

Using this API, the authenticated user can get the number of groups the user is a member of.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership/count?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0**

## HTTP Method

**GET**

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
    "count": 32
}
```
