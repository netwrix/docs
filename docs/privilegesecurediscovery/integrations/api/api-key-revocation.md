---
title: "Revoke an API key"
description: "Revoke a Netwrix Privilege Secure for Discovery API key in the interface or with a DELETE request so that it can no longer authenticate."
sidebar_position: 30
---

Revoke an API key when you no longer need it or when its secret leaks. A revoked key can't get an access token. Revoking a key doesn't cancel access tokens that the key already produced. Those tokens keep working until they expire, which takes up to 8 hours by default.

## Revoke a key in the interface

1. Go to **Configure** > **API Keys**.
2. Find the key, and select **Revoke** in its row.
3. In the **Revoking API Key** window, check the app name, and select **Revoke API Key**.

The interface confirms with the message `API key successfully revoked`, and the key disappears from the list.

## Revoke a key with the API

### Prerequisites

- An access token for an administrator. See [Authenticate with an API key](./authenticate-with-an-api-key.md).
- The `appId` of the key to revoke.

### Find the appId of a key

List the keys. The response includes revoked keys, so check that `isRevoked` is `false` for the key that you want.

```bash
curl --request GET "https://<server-fqdn>/api/v1/api-keys" \
  --header "X-Access-Token: <access-token>"
```

Each entry has the following shape. Copy the `appId` value of the key to revoke.

```json
{
  "appName": "example-inventory-sync",
  "appId": "<app-id>",
  "scopes": [],
  "linkedUsers": ["<user-id>"],
  "createdBy": "<user-id>",
  "isRevoked": false,
  "lastAccessed": "2026-10-21T06:28:42.023Z"
}
```

### Revoke the key

Send a `DELETE` request that includes the `appId`.

```bash
curl --request DELETE "https://<server-fqdn>/api/v1/api-keys/<app-id>" \
  --header "X-Access-Token: <access-token>" \
  --include
```

A successful revocation returns the status `204` and no body.

| Status | Message | Meaning |
| --- | --- | --- |
| `204` | None | The key is revoked. |
| `404` | `RefreshToken does not exist.` | No key has this `appId`. |
| `410` | `RefreshToken is already revoked.` | The key is already revoked. |

The `DELETE` request doesn't delete the record. The product keeps it, marked as revoked, with the ID of the user who revoked it. For this reason, you can't create a new key with the name of a revoked key.

## Related information

- [Create and manage API keys](./api-key-management.md)
- [Authenticate with an API key](./authenticate-with-an-api-key.md)
