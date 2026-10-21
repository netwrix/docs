---
title: "Domain controllers in Privilege Secure for Discovery"
description: "Learn why domain controllers behave differently from other endpoints, which actions the product skips for them, and how to configure scanning and protection for them."
sidebar_position: 80
---

Domain controllers operate differently from desktop and server endpoints. They are the source of truth for essential elements of the directory, such as users, groups, and computers. For that reason, Netwrix Privilege Secure for Discovery can't protect them like other endpoints.

## How the product treats domain controllers

During directory synchronization, the product marks a computer as a domain controller when its account has the domain controller flag in Active Directory (the `SERVER_TRUST_ACCOUNT` flag of `userAccountControl`). For these computers, the product does the following:

- The scan scheduler skips them, even when **Scan Mode** is **Enabled**.
- Bulk actions that change the scan or protect policy skip them, and so does a bulk just-in-time access (JITA) request.
- Offline access management isn't available for them.

A manual **Rescan** on the **Grant Access** page and the **Scan Systems** bulk action don't skip them. The computers still appear in the directory synchronization, and an administrator can still change their settings on the **Grant Access** page.

## How domain controllers differ

Domain controllers behave as follows:

- They report their hostname as the domain name and not as their actual hostname. When the product scans a domain controller, the scan very likely fails with an error like the following:

  ```text
  DOMAIN\Example-Hostname: wrong_host
  System hostname does not match: ('Example-Hostname', ['DOMAIN', 'Builtin'])
  ```

  In the message, `Example-Hostname` is the hostname that the product expects at the last known IP address. `DOMAIN`, the first item in the list, is the hostname that the IP address returns.

- They can't use protect mode. The only users in the local Administrators group of a domain controller are the Domain Admins, so scanning them isn't useful either.

## Configure domain controllers

Leave **Scan Mode** and **Protect Mode** set to **Disabled** for the domain controllers. With both modes disabled, the hostname error can't occur, even when you change a system by hand.

1. Select **Access** > **Grant Access**.
2. Search for the domain controller and select it.
3. Make sure that **Scan Mode** and **Protect Mode** show **Disabled**. If they don't, select each button and then select **Disable**.

Never apply to domain controllers the GPOs that grant the scan account access to local group membership. See [Create a scan GPO for remote SAM access](./scan-gpo-domain-controllers.md) and [Add the Protect Mode account to Windows endpoints with a GPO](./protect-mode-account-gpo.md).

## Best practices

- Use domain admin accounts only to administer the domain controllers.
- Keep the Domain Admins group small and tightly controlled.
