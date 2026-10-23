---
title: "Linux registration prerequisites"
description: "Review the network, SSH, sudo, and Python requirements that a Linux system must meet before you register it with Privilege Secure for Discovery."
sidebar_position: 40
---

This page lists what a Linux system must provide before you register it with Netwrix Privilege Secure for Discovery. For the supported distributions and versions, see [Supported platforms](../../requirements/supported-platforms.md). To understand why the product needs these items, see [Linux systems overview](./linux-registration-modes.md).

Back up `/etc/sudoers` and `/etc/sudoers.d` on each endpoint first, because the first scan rewrites `/etc/sudoers`.

## Network

- The FQDN of the endpoint resolves in DNS from the Privilege Secure for Discovery server.
- The endpoint answers ping (ICMP echo request). If it doesn't, the product reports that it can't reach the system.
- TCP port 22 is open from the server to the endpoint. The SSH port is the same for all systems.
- If you restrict SSH access by user or group (for example with `AllowUsers` in `sshd_config`), allow the service account.

## SSH and Python

- The SSH server has the SFTP subsystem enabled. Check that `sshd_config` has a `Subsystem sftp` line. Without it, the product reports `SSH connection error: Channel closed.`
- The service account can write to `/tmp`.
- The endpoint has Python 2.7 or Python 3. The product looks for `python3`, then `python`, then `python2`. If it finds none, it reports `Could not find a Python interpreter on the remote system`. Install a vendor-supported `python3` package on minimal images.
- The `visudo` command is installed. The product uses it to validate every sudoers file before it installs the file.

The product doesn't require you to change the SELinux mode on RHEL or CentOS endpoints. It only reads the SELinux status.

## Service account

The account that you give at registration becomes the service account that the product uses for every later scan. Don't delete it, and don't remove its sudo rights, after registration. If you set a domain or global Linux service account, the product uses that account instead. For the domain setting, see [Register Linux systems with a domain service account](./linux-simplified-registration.md).

The account must meet these requirements:

- It exists on the endpoint and can sign in over SSH with a password or an SSH key.
- It can run any command as root with `sudo`. To create it, see [Add a sudo user on an Ubuntu system](./linux-add-a-sudo-user.md).
- With password authentication, `sudo` asks for the account's own password, not the password of root. The product sends the account password when `sudo` prompts for it.
- With key authentication, `sudo` doesn't ask for a password, because the product has none to send. Use a `NOPASSWD` rule. Otherwise the product reports `Sudo permissions error`.

After the first successful scan, the product adds the rule `<service-account> ALL=(ALL) NOPASSWD:ALL # S1 Service Account` to `/etc/sudoers`.

User names and passwords on Linux are case sensitive. Enter them exactly as they exist on the endpoint.

## Distribution-specific settings

On SUSE Linux Enterprise Server, the default `/etc/sudoers` asks for the password of root. Open the file with `sudo visudo` and comment out these two lines. Then `sudo` asks for the password of the account that runs it:

```text
Defaults targetpw   # ask for the password of the target user i.e. root
ALL   ALL=(ALL) ALL   # WARNING! Only use this together with 'Defaults targetpw'!
```

## Register the system

After the endpoint meets these requirements, register it with one of the methods in [Linux systems overview](./linux-registration-modes.md#register-linux-systems).
