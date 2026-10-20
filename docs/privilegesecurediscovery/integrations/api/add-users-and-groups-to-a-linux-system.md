---
title: "Add users and groups to a Linux system inventory"
description: "Add an Active Directory user or group to the administrator inventory of a registered Linux system by using the API and curl."
sidebar_position: 50
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 360044464293_screen_shot_2020-03-04_at_10.20.05_am.webp and 360044464293_screen_shot_2020-03-04_at_10.29.34_am.webp: show a named individual's account in the system inventory. Replace with screenshots that use an example account.

TODO: The Postman screenshots (360044464293_screen_shot_2020-03-04_at_9.35.39_am, 9.48.51, 10.06.53, 10.16.48, and 10.27.26) were removed from this page because the procedure now uses curl. They are no longer referenced.
:::

After you add a Linux endpoint to the Netwrix Privilege Secure for Discovery inventory, you can add more Active Directory (AD)-bridged users or groups to the inventory of the endpoint. A user or group in the inventory can request access to the endpoint and receive time-limited administrator privileges.

## Prerequisites

- A Linux system that is registered in the product.
- An access token for an administrator. See [Authenticate with an API key](./authenticate-with-an-api-key.md).
- A computer with `curl` that can reach the server.

## Find the ID of the endpoint

1. Search for the endpoint by common name (`cn`). The search matches the start of the value.

   ```bash
   curl --request GET "https://<server-fqdn>/api/v1/computers?cn=<endpoint-cn>" \
     --header "X-Access-Token: <access-token>"
   ```

2. Copy the `_id` value of the endpoint from the response. This value is the endpoint ID.

## Find the ID of the user or group

1. Search for the user. To search for a group, use `/api/v1/groups` instead.

   ```bash
   curl --request GET "https://<server-fqdn>/api/v1/users?sAMAccountName=<user-name>" \
     --header "X-Access-Token: <access-token>"
   ```

2. Copy the `_id` value of the user or group from the response.

## Add the user or group to the inventory

Send a `POST` request to the `admins` endpoint of the computer. Set `id` to the ID of the user or group.

```bash
curl --request POST "https://<server-fqdn>/api/v1/computers/<endpoint-id>/admins" \
  --header "Content-Type: application/json" \
  --header "X-Access-Token: <access-token>" \
  --data '{"id": "<user-or-group-id>"}'
```

To make the account persistent, add `"persistent": true` to the body. A domain account on a Linux system that uses the product's bridging can't be persistent.

If the account is already in the inventory, the API returns a conflict error. Domain accounts that you add to a Linux system must have unique common names (`sAMAccountName`).

## Verify the result

In the interface, open the inventory of the endpoint and confirm that the user or group appears. The following screenshots show the inventory before and after you add an account.

![The inventory of a Linux endpoint before the account is added](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.20.05_am.webp)

![The inventory of a Linux endpoint after the account is added](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.29.34_am.webp)

The added AD identity can now sign in to the product and request access to the endpoint. When the request is approved, the product adds the user to the endpoint with administrator privileges for a limited time. The user can then connect to the endpoint over SSH with their AD credentials.
