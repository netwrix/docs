---
title: "Linux systems overview"
description: "Learn how Privilege Secure for Discovery registers Linux systems, grants just-in-time access, applies Protect modes, and changes sudoers."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery manages Linux systems without an agent. It uses a service account with SSH access and sudo permissions on each endpoint to scan, inventory, and change sudo access. This page explains how registration, just-in-time access (JITA), and Protect modes work for Linux.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Prepare to register Linux systems

Registering a Linux system requires preparation similar to Windows systems:

- A service account that can register the system. This account needs sudo permissions on the Linux endpoint. For the full list of requirements, see [Linux registration prerequisites](./linux-registration-prerequisites.md).
- A sudo-enabled user. For users who are experienced with Linux, add the following line to `/etc/sudoers` for the user `example_user`:

  ```text
  example_user ALL=(ALL) NOPASSWD: ALL
  ```

  For a guided procedure, see [Add a sudo user on an Ubuntu system](./linux-add-a-sudo-user.md).

## Register Linux systems

Use one of the following methods:

- Register one system by calling the registration API. For more information, see [Register Linux systems by using the API](../bulk-onboarding/register-linux-systems.md).
- Register many systems from a spreadsheet by using the Quickstart tool. For more information, see [Bulk onboarding and reporting](../bulk-onboarding/bulk-onboarding-and-reporting.md).
- Configure a domain Linux service account so that systems found in Active Directory use one existing account. For more information, see [Register Linux systems with a domain service account](./linux-simplified-registration.md).

The registration fields include the administrator accounts that Privilege Secure for Discovery adds to the Linux endpoint for JITA access.

## JITA requests for Linux systems

Two kinds of account take part in a Linux JITA session:

- Domain account. This account is linked to the local Linux account on the endpoint and appears in the Privilege Secure for Discovery inventory.
- Local Linux account. This account exists on the Linux system to allow SSH access during the JITA session.

A Linux JITA session behaves as follows:

1. A user requests JITA for a Linux system.
2. If this is the first request by the user for the system, Privilege Secure for Discovery creates a local account on the Linux machine by using the user's Active Directory credentials. For example, the entry in `/etc/passwd` for the user `example_user` looks like this:

   ```text
   example_user:x:1005:1005:PrivilegeSecure AD Bridged Account:/home/example_user:/bin/sh
   ```

   The user can then connect to the Linux system over SSH with the user name only (case sensitive), with no domain.
3. Privilege Secure for Discovery adds an entry for the account to the sudoers configuration to grant sudo capability.
4. When the JITA session expires, Privilege Secure for Discovery removes the sudoers entry for the user, which removes the sudo capability, and scrambles the password on the account. The local account created from the domain account remains in `/etc/passwd`.

## Protect modes

Users should use a provisioned domain account to get JITA access to a Linux system. Protect modes apply to accounts that were added locally to the `/etc/sudoers` file or the `/etc/sudoers.d` directory.

Back up the original sudoers file before you place a system in a Protect mode. For example:

```bash
sudo cp /etc/sudoers /etc/sudoers.orig
```

### Protect mode: JITA

- You can grant permanent access by setting an account to persistent, for example for a service account that needs access at all times.
- Privilege Secure for Discovery recognizes accounts newly added to `/etc/sudoers` or the `/etc/sudoers.d` directory.
- Recognized accounts are added to the Privilege Secure for Discovery inventory with the policy **Persistent: No** and **On Host: No**.
- The account is removed from `/etc/sudoers` or the `/etc/sudoers.d` directory.

### Protect mode: DENY

Protect mode DENY differs from Protect mode JITA in one way: Privilege Secure for Discovery doesn't add the discovered local account to its inventory, so you can't set these accounts to persistent.

## Files that Privilege Secure for Discovery reads and writes

Privilege Secure for Discovery works with three locations on a Linux system, each with read and write access:

- The `/etc/sudoers.d` directory
- The `/etc/passwd` file
- The `/etc/sudoers` file

Privilege Secure for Discovery determines whether an account exists on a Linux system from `/etc/passwd`, which doesn't define permissions. It reads `/etc/sudoers` to check for user and group privilege specifications, and it modifies `/etc/sudoers` during JITA sessions and when sessions expire.

Privilege Secure for Discovery doesn't evaluate which users are members of the `sudo` group. Some Linux distributions refer to this group as `wheel`. The following sudoers line grants this group access:

```text
# Allow members of group sudo to execute any command
%sudo    ALL=(ALL:ALL) ALL
```
