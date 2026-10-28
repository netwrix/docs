---
title: "Add users and groups to a Linux system inventory"
description: "Add an Active Directory user or group to the administrator inventory of a Linux system by using the API and curl, and then list, update, or remove it."
sidebar_position: 50
---

After you register a Linux system in Netwrix Privilege Secure for Discovery, you can add Active Directory (AD) users or groups to the administrator inventory of the system. An account in the inventory can request access to the system and receive time-limited administrator privileges. This page shows how to manage the inventory with the API.

The same endpoints work for Windows systems. The `sudo_permissions` option applies only to Linux systems.

## Prerequisites

- A Linux system that you registered in the product.
- An access token for an administrator. See [Authenticate with an API key](./authenticate-with-an-api-key.md).
- A computer with `curl` that can reach the server.

## Find the ID of the system

Search for the system by common name (`cn`). The search matches the start of the value and ignores case.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers?cn=<system-name>" \
  --header "X-Access-Token: <access-token>"
```

Copy the `_id` value of the system from the response.

## Find the ID of the user or group

Search for the user by `sAMAccountName`. To search for a group, use `/api/v1/groups` instead.

```bash
curl --request GET "https://<server-fqdn>/api/v1/users?sAMAccountName=<user-name>" \
  --header "X-Access-Token: <access-token>"
```

Copy the `_id` value of the user or group from the response.

## Add the user or group to the inventory

Send a `POST` request to the `admins` endpoint of the system. Set `id` to the ID of the user or group.

```bash
curl --request POST "https://<server-fqdn>/api/v1/computers/<system-id>/admins" \
  --header "Content-Type: application/json" \
  --header "X-Access-Token: <access-token>" \
  --data '{"id": "<user-or-group-id>"}'
```

A successful request returns the status `200` and the following body.

```json
{ "message": "Successfully added administrator" }
```

The request accepts the following optional fields.

| Field | Description |
| --- | --- |
| `persistent` | Set to `true` to give the account permanent administrator rights on the system. The default is `false`. |
| `sudo_permissions` | The sudoers permissions to grant to the account on a Linux system, as a string. |

A domain account on a Linux system that uses directory bridging can't be persistent. The API returns the status `422` for this combination.

### Fix errors

| Status | Message | Fix |
| --- | --- | --- |
| `409` | `Administrator already exists in inventory` | The account is already in the inventory. |
| `409` | `Domain accounts added to Linux systems must have unique common names (sAMAccountName).` | Another inventory account on the system has the same `sAMAccountName`. |
| `409` | `Sudoers isn't supported for non-Linux systems.` | Remove `sudo_permissions` from the request, because the system isn't a Linux system. |
| `422` | `Invalid Admin ID` | The ID isn't a user, group, or computer. Check the `_id` value. |
| `422` | `Missing required parameters` | The body has no `id`. |

## Verify the result

List the inventory of the system. The `persistent` field shows whether the account is persistent.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers/<system-id>/admins" \
  --header "X-Access-Token: <access-token>"
```

The response contains one entry for each account. The following example shows an entry.

```json
{
  "user": "jpatel",
  "domain": "CORP",
  "domainandname": "CORP\\jpatel",
  "sidusage": 1,
  "persistent": false,
  "active": false,
  "onHost": false
}
```

The account can now sign in to the product and request access to the system. When someone approves the request, the product grants the account administrator privileges on the system for a limited time. A user can then connect to a Linux system over SSH with the AD credentials.

## Change or remove an inventory account

To change whether an account is persistent, send a `PATCH` request with `id` and `persistent`.

```bash
curl --request PATCH "https://<server-fqdn>/api/v1/computers/<system-id>/admins" \
  --header "Content-Type: application/json" \
  --header "X-Access-Token: <access-token>" \
  --data '{"id": "<user-or-group-id>", "persistent": true}'
```

To remove an account, send a `DELETE` request with the `id`.

```bash
curl --request DELETE "https://<server-fqdn>/api/v1/computers/<system-id>/admins" \
  --header "Content-Type: application/json" \
  --header "X-Access-Token: <access-token>" \
  --data '{"id": "<user-or-group-id>"}'
```

If the account isn't in the inventory, both requests return the status `409` and the message `Administrator not in inventory`.

## Related information

- [Authenticate with an API key](./authenticate-with-an-api-key.md)
- [Create and manage API keys](./api-key-management.md)
