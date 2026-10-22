---
title: "Linux systems overview"
description: "Learn how Privilege Secure for Discovery connects to Linux systems, grants just-in-time access, and changes sudoers in Scan and Protect modes."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery manages Linux systems without an agent. It connects to each endpoint over SSH with a service account, reads the accounts and the sudo rules, and changes sudo access to match the policy that you set. This page explains how that connection works, what the Scan and Protect modes do to the sudoers file, and what happens during a just-in-time access (JITA) session.

:::warning
Back up `/etc/sudoers` and the `/etc/sudoers.d` directory before you register a Linux system. Every scan writes a new `/etc/sudoers` file that contains the rules from all sudoers files, and the product doesn't keep a backup. The new file has no `@includedir` or `#include` lines, so later edits in `/etc/sudoers.d` have no effect. The product validates the new file with `visudo -c` before it replaces the old one, and keeps the old file if validation fails.
:::

## How the product connects

For each scan or access change, the product does the following:

1. Resolves the system's fully qualified domain name (FQDN) and pings the address. The endpoint must answer ping.
2. Opens an SSH connection to TCP port 22 with the service account.
3. Uploads a small Python program over SFTP to a directory named `/tmp/secureone_remote_executor-<run-id>` that only the service account can read.
4. Runs the program, with `sudo -i` for steps that need root, to read `/etc/passwd`, `/etc/group`, `/etc/sudoers`, and the files that `/etc/sudoers` includes. For systems that use SSSD or PowerBroker, it also reads the directory bridging configuration.
5. Removes the uploaded files when the scan ends.

The product writes only `/etc/sudoers`, plus user and password entries when it creates or updates a local account for a lightweight directory bridging session. It reads sudo rules only from sudoers files. It doesn't read sudo rules that SSSD or LDAP supply.

For the requirements that an endpoint must meet, see [Linux registration prerequisites](./linux-registration-prerequisites.md).

## Scan Mode and Protect Mode

On the **Grant Access** screen, each Linux system has a **Scan Mode** setting and a **Protect Mode** setting.

| Setting | Value | Effect |
| --- | --- | --- |
| **Scan Mode** | **Enabled** | The product scans the system on a schedule and when you click **Rescan**. |
| **Protect Mode** | **Disabled** | The product reports the sudo access that exists on the system and leaves it in place. During a JITA session it adds the user to the file it writes. |
| **Protect Mode** | **New Accounts: JITA** | The product removes sudo access from every account that isn't persistent and lists the accounts it finds in the inventory with **Persistent** set to **No**. Users get sudo access through JITA sessions. |
| **Protect Mode** | **New Accounts: Deny** | Same as **New Accounts: JITA**, except the product doesn't add accounts that it finds in sudoers to the inventory. You can't make them persistent. |

![The Scan Mode, Protect Mode, and Directory Bridging settings of a Linux system on the Grant Access screen](/images/privilegesecurediscovery/endpoint-preparation/linux-grant-access-controls.webp)

In a Protect mode, the product writes the sudo rules that it stores for the system, called the staged sudoers, back to the endpoint at each scan. It keeps these entries:

- Lines that aren't sudo rules, such as `Defaults` lines.
- Rules for accounts that are persistent or have an active JITA session.

The product marks `root`, `secureone`, and the service account as persistent automatically. The product removes every other rule from the file, including group rules such as `%sudo` and `%wheel`.

:::warning
Before you turn on a Protect mode, add every account and group that must keep sudo access to the inventory and set it to persistent. For example, members of the `%sudo` group lose sudo access at the next scan unless you make the group persistent.
:::

For example, a system has these rules, the service account is `svc-netwrix`, and Protect Mode is **New Accounts: JITA**:

```text
root ALL=(ALL:ALL) ALL
%sudo ALL=(ALL:ALL) ALL
alice ALL=(ALL) NOPASSWD:ALL
```

At the next scan, the product writes this file. The `%sudo` and `alice` rules are gone until someone makes them persistent or starts a JITA session:

```text
root ALL=(ALL:ALL) ALL
svc-netwrix ALL=(ALL) NOPASSWD:ALL # S1 Service Account
```

## JITA sessions on Linux

A JITA session grants a user sudo access for a limited time. The steps depend on the directory bridging setting of the system. For the settings, see [Linux systems and Active Directory](./linux-with-active-directory.md).

With lightweight directory bridging, which the UI labels **SecureONE**, a session works like this:

1. A user requests access. If the sign-in method didn't supply the user's Active Directory (AD) password, the UI asks for it. For how the product handles it, see [Password handling in Linux lightweight directory bridging](./linux-directory-bridging.md).
2. The product creates a local account that has the user's AD user name and password, or updates the account if it exists. The account entry in `/etc/passwd` has the comment `SecureONE AD Bridged Account`:

   ```text
   jpatel:x:1005:1005:SecureONE AD Bridged Account:/home/jpatel:/bin/sh
   ```

3. The product adds the user to the sudoers file with the comment `# S1 Active User`.
4. The user connects over SSH with the user name only, without the domain.
5. When the session ends, the product removes the sudoers entry and sets a random 32-character password on the local account. The account stays on the system.

With SSSD, Centrify, or PowerBroker, the product only adds and removes the sudoers entry. It doesn't create or change local accounts.

## Register Linux systems

Use one of the following methods:

- Register one system with the API. See [Register Linux systems by using the API](../bulk-onboarding/register-linux-systems.md).
- Register many systems from a spreadsheet with the Quickstart tool. See [Bulk onboarding and reporting](../bulk-onboarding/bulk-onboarding-and-reporting.md).
- Set a domain Linux service account so that systems found in AD register without per-system credentials. See [Register Linux systems with a domain service account](./linux-simplified-registration.md).
