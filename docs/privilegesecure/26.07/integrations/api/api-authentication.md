---
title: "Authenticate to the API"
description: "Get a bearer token for the Privilege Secure REST API as a user, with or without a second factor, or as an application user, then renew and end the session."
sidebar_position: 20
---

# Authenticate to the API

Every call to the Privilege Secure REST API, except the sign-in calls, needs a bearer token. This page shows how to get a token as a user and as an application user, how to renew it, and how to use it.

A token is valid for 15 minutes by default. For the other conventions of the API, see [REST API overview](/docs/privilegesecure/26.07/integrations/api/api-overview.md).

## Prerequisites

- Network access to `https://<nps-server>:6500`.
- Your client trusts the certificate authority (CA) that issued the server certificate. For PowerShell, add the CA certificate to the operating system trust store. For `curl`, the examples use `<ca-certificate-file>`, the CA certificate file.
- For a user token: a console user, and the second-factor code if the user's authentication connector requires one. See [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md) and [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).
- For an application user token: an application user and a client certificate whose serial number is saved on that user. See [Add application users](/docs/privilegesecure/26.07/admin/users-groups/application-users.md).
- PowerShell 7 or `curl`. `Invoke-RestMethod` in Windows PowerShell 5.1 can fail to open the TLS connection to the Privilege Secure server, with the error "The underlying connection was closed".

## Get a token as a user

Send the user name and password to `/signinBody`. The response is the token.

```bash
curl --cacert <ca-certificate-file> \
  --cookie-jar cookies.txt \
  --header "Content-Type: application/json" \
  --data '{"login": "<user-name>", "password": "<password>"}' \
  https://<nps-server>:6500/signinBody
```

The same call in PowerShell 7:

```powershell
$body = @{ login = '<user-name>'; password = '<password>' } | ConvertTo-Json
$token = Invoke-RestMethod -Uri 'https://<nps-server>:6500/signinBody' `
  -Method Post -ContentType 'application/json' -Body $body `
  -SessionVariable nps
```

The response body is the token as plain text, not a JSON object.

Keep the cookie jar or the session variable. The second factor step needs the cookies that this call sets.

### Add the second factor

If the user's authentication connector requires a second factor, the token from `/signinBody` is only good for the second factor call. Send the code to `/signin2fa`, with the first token as the bearer token. The body is the code as a JSON string.

```bash
curl --cacert <ca-certificate-file> \
  --cookie cookies.txt \
  --header "Authorization: Bearer <first-token>" \
  --header "Content-Type: application/json" \
  --data '"<code>"' \
  "https://<nps-server>:6500/signin2fa?extension=false"
```

The response is the token to use for all other calls. The server rejects a code that was already used, so wait for the next code if you retry.

When the connector is a RADIUS connector and the RADIUS server rejects the code, `/signin2fa` returns HTTP 401. If the RADIUS server sent a reply message, the response body is `[REPLY] ` followed by that message. Otherwise the body is the error text. A code that is wrong for the internal second factor returns 401 with "Invalid MFA code".

A user whose connector is "Not Required" still calls `/signin2fa`. The server accepts any code for that connector. The token from `/signinBody` alone carries no roles.

## Get a token as an application user

An application user sends its client certificate, its name, and its API key to the `WebAppApi` application on the same server. The login is the application user name. The password is the API key.

```bash
curl --cacert <ca-certificate-file> \
  --cert <client-certificate-file> --key <client-key-file> \
  --header "Content-Type: application/json" \
  --data '{"login": "<application-user-name>", "password": "<api-key>"}' \
  https://<nps-server>:6500/WebAppApi/api/v1/AppUserToken
```

The server checks that the serial number of the client certificate matches the one saved on the application user. The server rejects a request without a client certificate. A failed sign-in returns only "Invalid Username or Password", whatever the cause.

To check that the server receives your client certificate, send a `GET` request to the same URL with the certificate. The server answers with the certificate serial number, or with "No Certificate found for connection."

```bash
curl --cacert <ca-certificate-file> \
  --cert <client-certificate-file> --key <client-key-file> \
  https://<nps-server>:6500/WebAppApi/api/v1/AppUserToken
```

The console generates the API key when you save the application user. The response to the token call is the token as plain text.

If a load balancer or reverse proxy ends TLS before the request reaches the server, the server doesn't see the client certificate. In that case, set `ClientCertificateHeader` in `C:\ProgramData\Stealthbits\PAM\WebAppService\appsettings.json` to the name of the HTTP header that the proxy uses to forward the certificate. The header value must hold the client certificate in PEM format, URL-encoded. Percent-encode every special character, including `+` as `%2B`. For example, NGINX provides this form in the `$ssl_client_escaped_cert` variable. Without this setting, the server ignores certificate headers.

The server reads `ClientCertificateHeader` at startup, so restart the web application (recycle its application pool) after you change it. Check the header format that your load balancer sends in its vendor documentation. For example, AWS Application Load Balancer sends the certificate in the `X-Amzn-Mtls-Clientcert` header.

{/* TODO verify: an end-to-end test through a real proxy. Also raise with Engineering that the server replaces `+` with `%43` before it decodes the header, so an unescaped `+` corrupts the certificate. */}

## Call the API with the token

Send the token in the `Authorization` header of every request.

```bash
curl --cacert <ca-certificate-file> \
  --header "Authorization: Bearer <token>" \
  "https://<nps-server>:6500/api/v1/ActivitySession/Search?skip=0&take=30&filterText="
```

The same call in PowerShell 7:

```powershell
Invoke-RestMethod -Uri 'https://<nps-server>:6500/api/v1/ActivitySession/Search?skip=0&take=30&filterText=' `
  -Headers @{ Authorization = "Bearer $token" }
```

The response holds the first 30 activity session records that the account is allowed to see.

## Renew the token

A token expires after 15 minutes by default. Before it expires, send a `GET` request to `/api/v1/UserToken` with the current token. The response is a new token.

```bash
curl --cacert <ca-certificate-file> \
  --header "Authorization: Bearer <token>" \
  https://<nps-server>:6500/api/v1/UserToken
```

A script that runs longer than 15 minutes renews its token before it expires and uses the new token from then on. An application user renews its token the same way. A renewed token is valid for 15 minutes from the renewal.

## End the session

Revoke a token when the script finishes. Send a `GET` request to `/api/v1/UserToken/signout/<user-id>` with the token. After that, the server rejects the token.

The server revokes the token in the `Authorization` header. It ignores the `<user-id>` value, so pass the user's ID or any GUID.

## Troubleshooting

| Symptom | Cause |
|---|---|
| The TLS connection fails from Windows PowerShell 5.1. | Windows PowerShell 5.1 can fail to negotiate TLS with the server. Use PowerShell 7 or `curl`. |
| The server rejects the certificate. | The client doesn't trust the CA that issued the server certificate. Point the client at the CA certificate file. |
| "Invalid Username or Password" | The credentials are wrong. For an application user, the certificate serial number, the application user name, or the API key can also be wrong. |
| "User token has been revoked." | The token was signed out. Request a new token. |
| "Not an allowed login method." | The user's authentication settings don't allow this sign-in method. |
| The second factor call fails. | The client didn't keep the cookies from the `/signinBody` call, or the code was already used. |

## Next steps

- [REST API overview](/docs/privilegesecure/26.07/integrations/api/api-overview.md)
- [Add application users](/docs/privilegesecure/26.07/admin/users-groups/application-users.md)
