---
title: "Get My Expiring Groups Count with the Directory Manager API"
description: "Get the number of groups of the authenticated user that are about to expire."
keywords:
  - Directory Manager API
  - expiring groups count
  - Groups/Expiring/count endpoint
sidebar_position: 90
unlisted: true
---

# Get My Expiring Groups Count with the Directory Manager API

This API retrieves the number of expiring groups of the authenticated user.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring/count?includeAdditionalOwnershipGroups=true&includeNestedOwnershipGroups=true&searchMode=0**

## HTTP Method

**GET**

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
  "count": 1
}
```
