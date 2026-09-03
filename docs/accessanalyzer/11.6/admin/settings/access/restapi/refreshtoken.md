---
title: "Use the Client Credentials to Grant a Refesh Token"
description: "Use the Client Credentials to Grant a Refesh Token"
sidebar_position: 30
---

# Use the Client Credentials to Grant a Refesh Token

A refresh token contains the information required to obtain a renewed access token. Request a
refresh token when the access token expires.

- `grant_type` (Required) – The `grant_type` parameter must be set to `client_credentials`
- `refresh_token` (Required) – The refresh token previously issue to the client
- `scope` (Optional) – The requested scope must not include additional scopes that the service
  didn't issue in the original access token. If the request doesn't include a scope, the service
  issues an access token with the same scope it previously issued.
- Client Authentication – Required if the client was issued a secret

The authentication server then verifies the access request. If the request is valid, the service
generates an access token.

The following example shows a refresh token grant:

```
POST /api/v1/token HTTP/1.1
Host: authorization-server.com
grant_type=refresh_token
&refresh_token=xxxxxxxxxxx
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
```

If the token can't perform this request, is invalid, or the specific resource has been blocked from
access remotely, the server returns an HTTP status code of 401.

The response for a refresh token is the same as the response for an access token. Optionally, the
service can include a new refresh token in the response. If the response doesn't include a new
refresh token, the current refresh token remains valid. The following example shows a
successful access token response:

```
POST /oauth/token HTTP/1.1
Host: authorization-server.com
grant_type=refresh_token
&refresh_token=xxxxxxxxxxx
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
```

See the Okta
[Access Token Response](https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/)
article for additional information on successful and unsuccessful responses to requests for access
tokens.

The refresh token expires after 7 days.
