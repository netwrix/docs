---
title: "Domain Controllers in Privilege Secure for Discovery"
description: "Learn why domain controllers behave differently from other endpoints and how to configure scanning and protection for them."
sidebar_position: 80
---

Domain controllers operate differently from desktop and server endpoints. They are the source of truth for essential elements of the directory, such as users, groups, and computers. For that reason, Netwrix Privilege Secure for Discovery can't protect them like other endpoints.

## How domain controllers differ

Domain controllers behave as follows:

- They report their hostname as the domain name and not as their actual hostname. When the product scans a domain controller, the scan very likely fails with an error like the following:

  ```text
  DOMAIN\Example-Hostname: wrong_host
  "System hostname does not match: (u'Example-Hostname', [u'DOMAIN', u'Builtin'])"
  ```

  In the message, `Example-Hostname` is the hostname that the product expects at the last known IP address. `DOMAIN`, the first item in the array, is the hostname that the IP address returns.

- They can't use Protect Mode. The only users in the local Administrators group of a domain controller are the Domain Admins, so scanning them isn't useful either.

## Configure domain controllers

To avoid the hostname error, set **Scan Mode** to **Disabled** for the domain controllers.

Never apply the GPOs that grant the scan account access to local group membership to domain controllers. See [Create a scan GPO for remote SAM access](./scan-gpo-domain-controllers.md) and [Add the Protect Mode account to Windows endpoints with a GPO](./protect-mode-account-gpo.md).

## Best practices

- Use domain admin accounts only to administer the domain controllers.
- Keep the Domain Admins group small and tightly controlled.
