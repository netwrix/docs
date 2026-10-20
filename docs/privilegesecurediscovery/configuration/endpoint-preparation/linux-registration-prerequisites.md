---
title: "Linux registration prerequisites"
description: "Review the SSH, sudo, and Python requirements that a Linux system must meet before you register it with Privilege Secure for Discovery."
sidebar_position: 40
---

A Linux system must meet the following requirements before it can register with Netwrix Privilege Secure for Discovery. Verify them on each endpoint before you register it.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Requirements

- SSH connectivity. The machine must be reachable by DNS: a ping to the fully qualified domain name (FQDN) must resolve to an IP address.
  - If you limit SSH access by user or group, allow the Privilege Secure for Discovery service account, `secureone` by default, to connect over SSH.
- A temporary user account with administrator (sudo) privileges.
  - The account must be in the `/etc/sudoers` file on each Linux system that you register.
  - If sudo requires a password, ensure sudo prompts for the user password, not the root password. For example, on SUSE Linux Enterprise Server, comment out the following lines by using `sudo visudo`:

    ```text
    Defaults targetpw # ask for the password of the target user i.e. root
    ALL ALL=(ALL) ALL # WARNING! Only use this together with 'Defaults targetpw'!
    ```

  - You can remove this account from the sudoers file, or from the system, after registration.
- Python 2.7 or Python 3 on the endpoint. Privilege Secure for Discovery looks for `python3`, then `python`, then `python2`. Most Linux distributions install Python by default. If yours doesn't, install a vendor-supported Python 3 package.

Linux user names and passwords are case sensitive. Credentials that you use through Active Directory lightweight bridging or locally on the Linux endpoint must match exactly the case in which they were created.

## Distribution-specific checks

For the supported Linux distributions and versions, see [Supported platforms](../../requirements/supported-platforms.md). Confirm the following items for your distribution.

| Distribution | Checks |
| --- | --- |
| Debian | Python is installed (default installation). |
| Red Hat Enterprise Linux (RHEL) and CentOS | Disable SELinux. Install Python 3 if the system image doesn't include it. |
| SUSE | Python is installed. Sudo commands request the registration user's password, not the root password, or the registration account has passwordless sudo for all commands. The `/tmp` directory exists with open permissions. |
| Ubuntu | Python is installed. SSH is installed on the endpoint. On Ubuntu 22.04 and later, add `PubkeyAcceptedKeyTypes +ssh-rsa` to the bottom of `/etc/ssh/sshd_config`, then restart the SSH service with `sudo systemctl restart sshd`. |

## Register the system

After the endpoint meets these requirements, register it in one of the following ways:

- Register one system by using the API. For more information, see [Register Linux systems by using the API](../bulk-onboarding/register-linux-systems.md).
- Register systems by using a domain Linux service account. For more information, see [Register Linux systems with a domain service account](./linux-simplified-registration.md).
