---
title: "Get an Access Token for the Directory Manager API"
description: "Request an access token, or a new one after expiry, to authenticate calls to the Directory Manager APIs through the connect/token endpoint."
keywords:
  - Directory Manager API
  - access token
  - authentication token
  - connect/token endpoint
  - OAuth password grant
sidebar_position: 80
unlisted: true
---

# Get an Access Token for the Directory Manager API

This API generates a token for a user to access the Directory Manager APIs. You can also use this API to get a valid token if the token expires during a session.

## Endpoint

https://demomachine:4443/GroupIDSecurityService/connect/token

## HTTP Method

POST

### Parameter Values and Descriptions

Pass the parameters listed in the table in the request body using the following format:

```
application/x-www-form-urlencoded
```

| Name              | Description                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grant_type        | password                                                                                                                            |
| username          | Send the username against this parameter to access APIs                                                                             |
| password          | Password of the user                                                                                                                |
| client_Id         | Secret of Directory Manager API from the SVC.Client database table                                                                            |
| client_secret     | Secret of Directory Manager API from the SVC.Client database table                                                                            |
| identity_store_id | The ID of the identity store in which the user exists. You can get the identity store ID from the SVC.Identitystore database table. |

### Sample Response Syntax

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

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- Get Token
- [User APIs in Directory Manager](/docs/directorymanager/11.0/apis/user/userapis.md)
- [Directory Manager Group APIs](/docs/directorymanager/11.0/apis/group/groupapis.md)
