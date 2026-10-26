---
title: "Register Linux systems by using the API"
description: "Register a Linux system by calling the registration API with curl, or register many systems from an Excel file with the Quickstart tool."
sidebar_position: 40
---

Registering a Linux system adds it to Netwrix Privilege Secure for Discovery. The product connects with the registration account that you supply, and that account becomes the service account that the product uses to manage the system. If you set a domain Linux service account, the product uses that account instead. You can register one system by calling the registration API, or register many systems from an Excel file with the Quickstart tool.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Prerequisites

- The Linux endpoint meets the requirements in [Linux registration prerequisites](../endpoint-preparation/linux-registration-prerequisites.md).
- An API key that links to an administrator, and the ID of that administrator. For the procedure, see [Create and manage API keys](../../integrations/api/api-key-management.md). For `curl`, the key can have the **Registration** permission. The Quickstart tool needs **All API's**, because it also reads data from the product. With a **Registration** key, the tool fails with `Scope not allowed by token`. If the linked user isn't an administrator, the product rejects the request with `User does not have access to this resource.`
- A computer with `curl` that can reach the Privilege Secure for Discovery server.
- The ID of each user or group to add as an administrator of the system, if you use the `admins` field. See the following section.

### Find an account ID

The `admins` field takes the product ID of a user or group, not its name. To look up an ID, send a request with an access token. The anchors `^` and `$` match the name exactly. Use `/api/v1/groups` for a group.

```bash
curl --request GET "https://<server-fqdn>/api/v1/users?sAMAccountName=^<user-name>$&domain_netbios=^<NETBIOS-DOMAIN>$" \
  --header "X-Access-Token: <access-token>"
```

Copy the `id` value from the response. The product ignores an ID that it doesn't recognize, so check the IDs before you register. To get an access token, see the following section.

## Register one system with the API

### Get an access token

1. Exchange the API key for an access token:

   ```bash
   curl --request POST "https://<server-fqdn>/api/v1/api-keys/auth" \
     --header "Content-Type: application/json" \
     --data '{"token": "<api-key>", "userId": "<admin-user-id>"}'
   ```

2. Copy the value of `token` from the response. Use it as `<access-token>` in the following requests. The token is valid for 8 hours. When it expires, request a new one.

### Send the registration request

1. Send the registration request. Replace the values in angle brackets:

   ```bash
   curl --request POST "https://<server-fqdn>/api/v1/computers/register" \
     --header "Content-Type: application/json" \
     --header "X-Access-Token: <access-token>" \
     --data '{
       "system": "<linux-host>.example.com",
       "os_type": "linux",
       "username": "<registration-user>",
       "password": "<registration-password>",
       "admins": ["<account-id>"],
       "persistent": "",
       "scan": true,
       "secure": true,
       "nondomain": true
     }'
   ```

   The request returns after the product finishes the registration scan of the system. A successful request returns a `message` that describes the result.

2. Verify the registration. In the UI, go to **Access** > **Grant Access** and search for the system. For a system that isn't joined to a domain, the domain shows as `NONE\<system-name>`.

If a certificate error occurs, install the certificate chain on the computer that runs `curl`, or pass it with `--cacert`. Avoid the `--insecure` option of `curl`, because it turns off certificate verification.

After the first registration succeeds, reuse the request as a template for more systems. To register many systems, use an Excel file as described in the following section.

### Registration fields

| Field | Description |
| --- | --- |
| `system` | Name of the Linux system. Required. Use the fully qualified domain name (FQDN) for a system that is joined to a domain. The domain must be one that you added to the product, or the request fails with `Unknown domain specified`. |
| `os_type` | Set to `linux`. If you omit it, the API treats the system as Linux only when `nondomain` is `true`. |
| `username`, `password` | User name and password of an account that exists on the endpoint and has sudo privileges. Privilege Secure for Discovery connects with it and keeps it as the service account of the system, unless you set a domain Linux service account. Required for a system that isn't joined to a domain. For a domain system, you can leave it out if you set a domain Linux service account, and only an administrator can do so. For more information, see [Register Linux systems with a domain service account](../endpoint-preparation/linux-simplified-registration.md). Without credentials, the request fails with `Must provide username and password for registration.` |
| `admins` | List of IDs of the users or groups to add as administrators. See [Find an account ID](#find-an-account-id). The Excel file uses a separate column for each ID. |
| `persistent` | Comma-separated list of account names, without the domain, to mark as persistent. Use an empty string for none. |
| `scan` | `true` to turn on scan mode for the system. The API doesn't turn it off. |
| `secure` | `true` to turn on Protect mode with just-in-time administration (JITA) for the system. The API doesn't turn it off. |
| `nondomain` | `true` if the system isn't joined to the Active Directory domain. If `false`, the system name must include the domain. |
| `directory_bridging` | Directory bridging strategy: `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd`. A system with `nondomain` set to `true` uses `secureone` unless you set another value. A domain system takes the default strategy of its domain. The system's domain comes from its FQDN. |

Linux user names and passwords are case sensitive.

If the system is already in the inventory, the request registers it again. Only an administrator can change its `nondomain` or `directory_bridging` value this way.

To change the directory bridging strategy of a registered system to `centrify`, `powerbroker`, or `sssd`, set the strategy and its domain together. In the Quickstart report, fill in both **Set Directory Bridging Strategy** and **Set Directory Bridging Domain**. See [Report and update systems](./report-and-update-systems.md#set-the-directory-bridging-strategy). On the **Grant Access** screen, the UI requires a domain for these strategies, too.

## Register many systems from an Excel file

The Quickstart tool reads an Excel file with one row for each system and registers each system through the same API. Install the tool first, and use an API key with the **All API's** permission. For more information, see [Install the Quickstart tools](./install-the-quickstart-tools.md).

1. Create an Excel workbook. Name the first worksheet **Sheet1**, and put the header row and one row for each system on it. The tool reads only that worksheet.
2. Use the following columns. The column names are the field names of the API. Leave a cell blank to omit a value.

   | Column | Description |
   | --- | --- |
   | `system` | Host name of the Linux system. Use the FQDN for a system that is joined to a domain. |
   | `username`, `password` | Credentials of the registration account. It must exist on the endpoint and have sudo privileges. It becomes the service account, unless you set a domain Linux service account. |
   | `admins[0]` | ID of a user or group to add as an administrator. Add more administrators with `admins[1]`, `admins[2]`, and so on. |
   | `persistent` | Comma-separated list of account names to mark as persistent. |
   | `scan` | `TRUE` to turn on scan mode. |
   | `secure` | `TRUE` to turn on Protect mode (JITA). |
   | `nondomain` | `TRUE` if the system isn't joined to the Active Directory domain. |
   | `directory_bridging` | `secureone` (the default for a non-domain system), `centrify`, `powerbroker`, or `sssd`. |

   Example rows:

   | system | username | password | admins[0] | persistent | scan | secure | nondomain | directory_bridging |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | `host01.example.com` | `<registration-user>` | `<password>` | `<account-id>` | `jsmith,mjones` | TRUE | FALSE | TRUE | |
   | `host02.example.com` | `<registration-user>` | `<password>` | `<account-id>` | | TRUE | FALSE | TRUE | secureone |
   | `host03.example.com` | `<registration-user>` | `<password>` | | | TRUE | FALSE | FALSE | centrify |

3. Preview the registration. The preview lists the systems and doesn't contact them or validate the values:

   ```bash
   python reports.py --linux-reg-file linux_register.xlsx --dry-run
   ```

   Example output:

   ```text
    [!] DRY RUN ONLY - displaying proposed changes only.
    [*] Registering Linux system: host01.example.com
    [*] Registering Linux system: host02.example.com
   ```

4. Run the registration without `--dry-run`:

   ```bash
   python reports.py --linux-reg-file linux_register.xlsx
   ```

   For each system, the tool prints ` [*] Registering Linux system: <system>`, and then ` [+] <message>` on success. If the product rejects a registration, the tool prints the URL, the HTTP response code, and the response body, and continues with the next row.

Delete the file or remove the passwords from it when registration is complete.
