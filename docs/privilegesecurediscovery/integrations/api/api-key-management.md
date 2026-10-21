---
title: "Create and manage API keys"
description: "Create an API key in Netwrix Privilege Secure for Discovery, link it to users, choose its permissions, and review or revoke keys."
sidebar_position: 20
---

An API key lets a script or tool call the Netwrix Privilege Secure for Discovery API without an interactive sign-in. Use API keys for the Quickstart tools and for other automation. A key doesn't call the API directly. Your script exchanges the key and the ID of a linked user for a short-lived access token. See [Authenticate with an API key](./authenticate-with-an-api-key.md).

## How API keys work

Each key has a unique name, a list of linked users, and a permission setting.

- **Linked users:** The key can sign in only as one of its linked users. The access token that the key produces carries the role of that user, so the key can do what the user can do. A key linked to a user with the User role can't create or revoke API keys, for example. Link the key to the least privileged user that can do the job.
- **Permissions:** **All API's** lets the key call every endpoint that the linked user can call. **Registration** limits the key to the endpoint that registers computers, `POST /api/v1/computers/register`. Use **Registration** for keys that you give to onboarding scripts.
- **Name:** The name must be unique. You can't reuse the name of a revoked key, because the product keeps the record of a revoked key.

## Create an API key in the interface

Create keys as a user with the Administrator role.

1. Go to **Configure** > **API Keys**.

   ![The API Key Management list with three keys, showing the name, linked users, permissions, and creation details of each key](/images/privilegesecurediscovery/integrations/api-api-keys-list.webp)

2. Select **Create API Key**.
3. For **App Name**, enter a name of at least two characters, for example `example-inventory-sync`.
4. For **Permissions**, select **All API's** or **Registration**.
5. For **Linked Users**, enter at least two characters of a user name, and select the user from the list. Repeat to link more users.
6. Select **Save**.

   ![The New API Key form with the name example-inventory-sync, the permission All API's, and one linked user](/images/privilegesecurediscovery/integrations/api-api-keys-create.webp)

7. In the **New API key secret** window, select **Copy** next to **API Key Secret**, and store the secret in a secret manager.

   ![The New API key secret window with the masked secret and the Reveal and Copy buttons](/images/privilegesecurediscovery/integrations/api-api-keys-secret.webp)

The interface shows the secret only once. You can't recover it after you close the window. If you lose a secret, revoke the key and create a new one. Treat the secret like a password.

If the name already exists, the interface shows the error `Failed to create API key, duplicate app name already exists`.

## Create an API key with the API

If you have an access token for an administrator, you can create keys with `POST /api/v1/api-keys`. To get an access token, see [Authenticate with an API key](./authenticate-with-an-api-key.md).

1. Find the ID of each user to link. The following request lists the users whose `sAMAccountName` starts with the value.

   ```bash
   curl --request GET "https://<server-fqdn>/api/v1/users?sAMAccountName=<user-name>" \
     --header "X-Access-Token: <access-token>"
   ```

   Copy the `_id` value of each user from the response.

2. Create the key.

   ```bash
   curl --request POST "https://<server-fqdn>/api/v1/api-keys" \
     --header "Content-Type: application/json" \
     --header "X-Access-Token: <access-token>" \
     --data '{
       "appName": "example-inventory-sync",
       "linkedUsers": ["<user-id>"]
     }'
   ```

   To restrict the key to registration, add `"scopes": ["system:register"]` to the body. The response contains the key in the `apiKey` field.

   ```json
   { "apiKey": "<api-key>" }
   ```

3. Copy the `apiKey` value to a secret manager. You can't retrieve it later.

The API requires only `appName`. Always send `linkedUsers`, because a key without a linked user can't authenticate. If the name already exists, the API returns the status `400` with the MongoDB duplicate key code `11000`.

## Review keys

The **API Keys** page lists active keys. The **Last Accessed** column shows when a script last exchanged the key for an access token, which helps you find unused keys. The **Linked Users** column shows the ID of each user. Hover over an ID to see the user's name.

The list doesn't show revoked keys. `GET /api/v1/api-keys` returns all keys, including revoked keys, with `isRevoked` set to `true`.

## Revoke a key

On the **API Keys** page, select **Revoke** in the row of the key, and then select **Revoke API Key** to confirm. You can also revoke keys with the API. See [Revoke an API key](./api-key-revocation.md).

## Related information

- [Authenticate with an API key](./authenticate-with-an-api-key.md)
- [Revoke an API key](./api-key-revocation.md)
- [Advanced API reference](./advanced-api-reference.md)
