---
title: "Authenticate with an API key"
description: "Exchange a Netwrix Privilege Secure for Discovery API key and a linked user ID for an access token, and send the token with API requests."
sidebar_position: 40
---

To call the Netwrix Privilege Secure for Discovery API, you exchange an API key for an access token, and then you send the token with each request. This page shows the exchange with `curl`. The API base path is `/api/v1`, and every request uses HTTPS.

The product doesn't publish an OpenAPI or Swagger document for this API. The pages in this section describe the endpoints that customers use most.

## Prerequisites

- An API key. See [Create and manage API keys](./api-key-management.md).
- The ID of a user that is linked to the key. In the interface, hover over the ID in the **Linked Users** column of **Configure** > **API Keys** to see which user it belongs to.
- A computer with `curl` that can reach the server.

## Get an access token

Send the API key and the user ID to `POST /api/v1/api-keys/auth`. This request needs no other credentials.

```bash
curl --request POST "https://<server-fqdn>/api/v1/api-keys/auth" \
  --header "Content-Type: application/json" \
  --data '{"token": "<api-key>", "userId": "<user-id>"}'
```

The response contains the access token, its expiration time in UTC, and the scopes of the key. An empty `scopes` list means the key has the **All API's** permission.

```json
{
  "message": "Access granted.",
  "token": "<access-token>",
  "expires": "2026-10-21T14:28:49.000Z",
  "scopes": []
}
```

By default, an access token is valid for 8 hours, and the `expires` value shows the exact time. An administrator can change the lifetime with the **Token Expiration Seconds** setting under **Configure** > **Services**, from 300 seconds (5 minutes) to 604800 seconds (1 week). After it expires, repeat the request to get a new token. Each successful request also updates the **Last Accessed** value of the key.

## Send an authenticated request

Send the access token in the `X-Access-Token` header. The API also accepts the `Authorization: Bearer <access-token>` header. The following request lists the first 20 computers.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers?limit=20" \
  --header "X-Access-Token: <access-token>"
```

The token carries the role of the linked user. A request that the role doesn't allow returns the status `403`.

## Troubleshoot authentication errors

| Status | Message | Cause and fix |
| --- | --- | --- |
| `400` | `Invalid userId` | The request has no `userId`, or the user isn't linked to the key. Use the ID of a linked user. |
| `403` | `This token is not a valid API key` | The key is revoked, or the product doesn't know it. Create a new key. |
| `401` | `jwt malformed` | The value of `token` isn't a key, for example because the copy cut off part of it. Copy the secret again. |
| `403` | `Requested user not found` | The linked user no longer exists. Create a key for another user. |
| `401` | `No auth token provided` | An API request has no access token. Add the `X-Access-Token` header. |
| `403` | `Scope not allowed by token` | A key with the **Registration** permission called an endpoint other than `POST /api/v1/computers/register`. Use a key with the **All API's** permission. |
| `403` | `User does not have access to this resource.` | The role of the linked user doesn't allow the endpoint. Link the key to a user with a suitable role. |

If `curl` reports a certificate error, install the certificate chain of the server on the computer that runs `curl`, or pass the certificate authority file with `--cacert`. Don't use the `--insecure` option, because it turns off certificate verification.

## Related information

- [Create and manage API keys](./api-key-management.md)
- [Revoke an API key](./api-key-revocation.md)
- [Advanced API reference](./advanced-api-reference.md)
