---
title: "Register Linux systems by using the API"
description: "Register a Linux system by calling the registration API with curl, or register many systems from an Excel file with the Quickstart tool."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Explain how an administrator finds the ID to use in the admins field (the ID of the account record in the Privilege Secure for Discovery inventory). Evidence: strategy.linux.js:119-121 looks the IDs up in the LocalAdmin collection; no UI or API lookup is documented.

TODO: The sample workbook static/files/privilegesecure/discovery/attachments/360042878654_linux_register.xlsx contains internal-style host names, a weak sample password, and a real-looking ID, so this page no longer links it. Replace it with a sanitized template or retire the file. Evidence: workbook contents.

TODO: Confirm the lifetime of the JWT that POST /api-keys/auth returns. Evidence: none; reports.py re-authenticates when the API answers jwt expired.

TODO: Confirm that an API key created with the registration-only scope is sufficient for POST /computers/register, and whether unauthenticated registration is possible. Evidence: routeManifest.js:226-231 (scopes SYSTEM_REGISTER, middleware verifyRegistrationRoutePermissions).
:::

Registering a Linux system adds it to Netwrix Privilege Secure for Discovery and creates the service account that the product uses to manage it. You can register one system by calling the registration API, or register many systems from an Excel file with the Quickstart tool.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Prerequisites

- The Linux endpoint meets the requirements in [Linux registration prerequisites](../endpoint-preparation/linux-registration-prerequisites.md).
- An API key and the ID of the user that the key belongs to. For the procedure, see [API key management](../../integrations/api/api-key-management.md). The key can have the registration-only scope.
- A computer with `curl` that can reach the Privilege Secure for Discovery server.

## Register one system with the API

### Get an access token

1. Exchange the API key for an access token:

   ```bash
   curl --request POST "https://<server-fqdn>/api/v1/api-keys/auth" \
     --header "Content-Type: application/json" \
     --data '{"token": "<api-key>", "userId": "<admin-user-id>"}'
   ```

2. Copy the value of `token` from the response. Use it as `<access-token>` in the following request. When the token expires, request a new one.

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

   The first registration can take up to 30 seconds for each machine.

2. Verify the registration. In the UI, go to **Access** > **Grant Access** and search for the system. For a system that isn't joined to a domain, the domain shows as `NONE\<system-name>`.

If a certificate error occurs, install the certificate chain on the computer that runs `curl`, or pass it with `--cacert`. Avoid the `--insecure` option of `curl`, because it turns off certificate verification.

After the first registration succeeds, reuse the request as a template for more systems. To register many systems, use an Excel file as described in the following section.

### Registration fields

| Field | Description |
| --- | --- |
| `system` | Name of the Linux system. Use the fully qualified domain name (FQDN) for a system that is joined to a domain. |
| `os_type` | Set to `linux`. If you omit it, the API treats the system as Linux only when `nondomain` is `true`. |
| `username`, `password` | User name and password of an account that exists on the endpoint and has sudo privileges. Privilege Secure for Discovery uses it to create its own service account. |
| `admins` | List of IDs of the accounts to add as administrators. Each ID is the identifier of the account in the product inventory. The Excel file uses a separate column for each ID. |
| `persistent` | Comma-separated list of account names to mark as persistent. Use an empty string for none. |
| `scan` | `true` to scan the system periodically. |
| `secure` | `true` to place the system in Protect mode JITA. |
| `nondomain` | `true` if the system isn't joined to the Active Directory domain. If `false`, the system name must include the domain. |
| `directory_bridging` | Directory bridging strategy: `secureone` (lightweight directory bridging), `centrify`, `powerbroker`, or `sssd`. The default is `secureone` for a system with `nondomain` set to `true`. |

Linux user names and passwords are case sensitive.

## Register many systems from an Excel file

The Quickstart tool reads an Excel file with one row for each system and registers each system through the same API. Install the tool first. For more information, see [Install the Quickstart tools](./install-the-quickstart-tools.md).

1. Create an Excel workbook. Put the header row and one row for each system in the first worksheet, **Sheet1**.
2. Use the following columns:

   | Column | Description |
   | --- | --- |
   | `system` | DNS host name of the Linux system. |
   | `username`, `password` | Credentials of the account that the tool uses to sign in and create the service account. |
   | `admins[0]` | ID of an account to add as an administrator. Add more administrators with `admins[1]`, `admins[2]`, and so on. |
   | `persistent` | Comma-separated list of account names to mark as persistent. |
   | `scan` | `TRUE` or `FALSE`. Whether to scan the system periodically. |
   | `secure` | `TRUE` or `FALSE`. Whether to place the system in Protect mode JITA. |
   | `nondomain` | `TRUE` if the system isn't joined to the Active Directory domain. |
   | `directory_bridging` | `secureone` (the default), `centrify`, `powerbroker`, or `sssd`. |

   Example rows:

   | system | username | password | admins[0] | persistent | scan | secure | nondomain | directory_bridging |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | `host01.example.com` | `<registration-user>` | `<password>` | `<account-id>` | `jsmith,mjones` | TRUE | FALSE | TRUE | |
   | `host02.example.com` | `<registration-user>` | `<password>` | `<account-id>` | | TRUE | FALSE | TRUE | secureone |
   | `host03.example.com` | `<registration-user>` | `<password>` | | | TRUE | FALSE | FALSE | centrify |

3. Preview the registration:

   ```bash
   python reports.py --linux-reg-file linux_register.xlsx --dry-run
   ```

4. Run the registration without `--dry-run`:

   ```bash
   python reports.py --linux-reg-file linux_register.xlsx
   ```

Delete the file or remove the passwords from it when registration is complete.
