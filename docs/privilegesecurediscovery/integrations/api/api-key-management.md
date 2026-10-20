---
title: "Create and manage API keys"
description: "Create an API key in Netwrix Privilege Secure for Discovery, link it to users, and use it to authenticate to the API."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the available API key scopes and their names in the interface ("registration only" corresponds to the system:register scope). Evidence: docker/node/packages/lib-api-common/constants/scopes.js lists system:register and system:ground_station.

TODO: Confirm that the users endpoint accepts a filter such as `?sAMAccountName=<name>` for finding a user ID. Evidence: none.
:::

An API key lets a script or tool call the Netwrix Privilege Secure for Discovery API without an interactive sign-in. Use an API key for the Quickstart tools and for other automation. This page describes how to create a key in the interface, create a key with the API, and use a key.

## Create an API key in the interface

You manage API keys in the interface as an administrator.

1. Go to **Configure > API Keys**.

   ![The API Keys page](/images/privilegesecure/4.2/discovery/integrations/api/4421422443287_screen_shot_2022-02-03_at_2.03.58_pm.webp)

2. Select **Create API Key**.

   ![The New API Key page](/images/privilegesecure/4.2/discovery/integrations/api/4421422443287_screen_shot_2022-02-03_at_2.05.52_pm.webp)

3. Enter a name for the key.
4. Restrict the permissions to registration only, or allow all APIs.
5. Select the users that can use the key. These are the product users that can authenticate with the key.
6. Save the key. The **New API Key Secret** page appears.
7. Copy the API key secret to a secret manager.

The interface shows the API key secret only once. You can't retrieve it after you close the page, so handle it like any other password. If you hover over a linked user, the interface shows the Active Directory name of the user ID. The API key secret is the credential that you use for API configuration, together with the ID of a linked user.

## Create an API key with the API

If you already have an access token for an administrator, you can create more keys with a request to `/api/v1/api-keys`. To get an access token, see [Authenticate with an API key](./authenticate-with-an-api-key.md).

1. Find the ID of each user that the key links to. The following command lists users that match a name.

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
       "appName": "<key-name>",
       "linkedUsers": ["<user-id>"]
     }'
   ```

   The response contains the key in the `apiKey` field. To restrict the key to registration only, add `"scopes": ["system:register"]` to the request body.

3. Copy the `apiKey` value to a secret manager. You can't retrieve it later.

The key name must be unique.

## Use an API key

An API key isn't sent with each request. You exchange the key and the ID of a linked user for a short-lived access token, and then you send the access token with each request. See [Authenticate with an API key](./authenticate-with-an-api-key.md).

## Review and revoke API keys

The API Keys page shows each key. The **Last accessed date** column helps you find unused keys. You can revoke a key in the interface or with the API. See [Revoke an API key](./api-key-revocation.md).
