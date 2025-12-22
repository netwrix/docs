---
title: "Use the Client Credentials Grant to Obtain an Access Token"
description: "Use the Client Credentials Grant to Obtain an Access Token"
sidebar_position: 20
---

# Use the Client Credentials Grant to Obtain an Access Token

An access token is a credential that can be used by an application to access an API. To obtain an
access token, the application accessing data remotely through the Web Service must connect to the
Enterprise Auditor token endpoint and use the Client ID and Client Secret to authenticate the access
request. This is done using the Client Credentials grant. The Client Credentials grant is used when
applications request an access token to access their own resources, not on behalf of a user. The
following request parameters should be used:

- `grant_type` (required) – The `grant_type` parameter must be set to `client_credentials`
- `scope` (optional) – Your service may support different scopes for the client credentials grant

The client must then be authenticated for the request. Typically, the service will allow either
additional request parameters, `client_ID` and `client_secret`, or accept those parameters in the
HTTP Basic auth header.

The following example shows how to retrieve an access token:

```
POST /token HTTP/1.1
Host: authorization-server.com
grant_type=client_credentials
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
```

:::info
Tokens contain sensitive information and should be stored securely. See the
Microsoft
[ConvertTo-SecureString](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/convertto-securestring?view=powershell-7.4)
article for additional information.
:::


If the token does not have the ability to perform this request, is invalid, or the specific resource
has been blocked from access remotely, an HTTP status code of 401 is returned.

If the request for an access token is valid, the authorization server generates an access token and
returns it to the client. The following example shows a successful access token response:

```
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache 
{
  "access_token":"MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "token_type":"bearer",
  "expires_in":3600,
  "refresh_token":"IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  "scope":"create"
}
```

See the Okta
[Access Token Response](https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/)
article for additional information on successful and unsuccessful responses to requests for access
tokens.

The Client Secret expires after 72 hours. The access token expires after 1 hour after which time you
can request a refresh token. See the
[Use the Client Credentials to Grant a Refesh Token](/docs/accessanalyzer/11.6/admin/settings/access/restapi/refreshtoken.md) topic
for additional information.
