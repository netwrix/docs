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
- `scope` (Optional) – The requested scope must not include additional scopes that were not issued
  in the original access token. If the scope is not included in the request, the service issues an
  access token with the same scope as previously issued.
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

If the token does not have the ability to perform this request, is invalid, or the specific resource
has been blocked from access remotely, an HTTP status code of 401 is returned.

The response for a refresh token is the same as the response for an access token. Optionally, a new
refresh token can be included in the response. If a new refresh token is not included in the
response, the current refresh token will continue to be valid. The following example shows a
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
