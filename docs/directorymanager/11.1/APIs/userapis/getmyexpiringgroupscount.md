---
title: "Get My Expiring Groups Count"
description: "Get My Expiring Groups Count"
sidebar_position: 90
---

# Get My Expiring Groups Count

This API retrieves the number of expiring groups of the authenticate user.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring/count?includeAdditionalOwnershipGroups=true&includeNestedOwnershipGroups=true&searchMode=0**

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
  "count": 1
}
```
