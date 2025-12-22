---
title: "Get Token"
description: "Get Token"
sidebar_position: 80
---

# Get Token

This API generates a token for a user to access the GroupID APIs. This API is also used to get a
valid token in case the token expires in a session.

## Endpoint

https://demomachine:4443/GroupIDSecurityService/connect/token

## HTTP Method

POST

### Parameters Values and Description

Pass the parameters listed in the table in the request body using the following format:

```
application/x-www-form-urlencoded
```

| Name              | Description                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grant_type        | Password                                                                                                                            |
| username          | Send the username against this parameter to access APIs                                                                             |
| password          | Password of the user                                                                                                                |
| client_Id         | Secret of GroupID API from the SVC.Client database table                                                                            |
| client_secret     | Secret of GroupID API from the SVC.Client database table                                                                            |
| identity_store_id | The ID of the identity store in which the user exists. You can get the identity store ID from the SVC.Identitystore database table. |

#### Sample Response Syntax

```
{
    "access_token": <token value> 
    "refresh_token": <refresh token value> 
    "scope": "directorymanager.api groupid_identity offline_access openid profile",
    "token_type": "Bearer",
    "expires_in": 1200
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- Get Token
- [User APIs](/docs/directorymanager/11.0/apis/user/userapis.md)
- [Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
