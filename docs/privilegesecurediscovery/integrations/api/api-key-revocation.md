---
title: "Revoke an API key"
description: "Revoke a Netwrix Privilege Secure for Discovery API key with a DELETE request so that it can no longer authenticate."
sidebar_position: 30
---

Revoke an API key when you no longer need it or when its secret is exposed. A revoked key can no longer be exchanged for an access token. You can also revoke keys in the interface. See [Create and manage API keys](./api-key-management.md).

## Prerequisites

- An access token for an administrator. See [Authenticate with an API key](./authenticate-with-an-api-key.md).
- The `appId` of the key to revoke.

## Find the appId of a key

List the issued keys.

```bash
curl --request GET "https://<server-fqdn>/api/v1/api-keys" \
  --header "X-Access-Token: <access-token>"
```

Copy the `appId` value of the key that you want to revoke.

## Revoke the key

Send a `DELETE` request that includes the `appId`.

```bash
curl --request DELETE "https://<server-fqdn>/api/v1/api-keys/<app-id>" \
  --header "X-Access-Token: <access-token>" \
  --include
```

A successful revocation returns the HTTP status `204` and no body. If you revoke a key that is already revoked, the API returns the status `410` and the message `RefreshToken is already revoked.` If the `appId` doesn't exist, the API returns the status `404`.

Although the command uses a `DELETE` request, the API intentionally doesn't delete the key record. The key is marked as revoked.
