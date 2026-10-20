---
title: "Authenticate with an API key"
description: "Exchange a Netwrix Privilege Secure for Discovery API key and a linked user ID for an access token by using curl."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the lifetime of the access token that POST /api-keys/auth returns. The old page said 8 hours; the code reads a TOKEN_EXPIRATION setting with a default of 10 hours. Evidence: docker/node/packages/lib-api-onprem/utils/issueAccessToken.js:22-26.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: The old Postman screenshots (360047844814_blobid*) were removed from this page. blobid7 showed a full access token and blobid1 and blobid2 showed API key values. The files are no longer referenced.
:::

To call the Netwrix Privilege Secure for Discovery API, you exchange an API key for an access token, and then you send the token with each request. This page shows the exchange with `curl`.

## Prerequisites

- An API key. See [Create and manage API keys](./api-key-management.md).
- The ID of a user that is linked to the key.
- A computer with `curl` that can reach the server.

## Get an access token

1. Send the API key and the user ID to the authentication endpoint.

   ```bash
   curl --request POST "https://<server-fqdn>/api/v1/api-keys/auth" \
     --header "Content-Type: application/json" \
     --data '{"token": "<api-key>", "userId": "<user-id>"}'
   ```

   The response contains the access token.

   ```json
   {
     "token": "<access-token>"
   }
   ```

2. Copy the value of `token`.

The request fails with the message `Invalid userId` if the user isn't linked to the key, and with the message `This token is not a valid API key` if the key is revoked or unknown.

## Send an authenticated request

Send the access token in the `X-Access-Token` header. The following request lists computers.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers?limit=20" \
  --header "X-Access-Token: <access-token>"
```

The access token expires after a limited time. When the API reports that the token expired, repeat the authentication request to get a new token.

If a certificate error occurs, install the certificate chain on the computer that runs `curl`, or pass it with `--cacert`. Avoid the `--insecure` option, because it turns off certificate verification.
