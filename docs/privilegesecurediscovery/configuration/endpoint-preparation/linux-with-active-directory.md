---
title: "Linux systems and Active Directory"
description: "Learn how Privilege Secure for Discovery manages sudo access and user sign-in on Linux systems that use Active Directory accounts."
sidebar_position: 20
---

Netwrix Privilege Secure for Discovery manages Linux privileged access without agents. It works with local accounts and with Active Directory (AD) accounts, and it fits on-premises, hybrid, and cloud-hosted environments. This page explains how Linux systems are managed, how users authenticate, and how to manage sudo access.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Design characteristics

- No agents to install or update, no AD dependencies on the endpoint, and no `dzdo` or `pbrun` requirement.
- Minimal prerequisites: Python, SSH, and sudo.
- AD groups can provide role-based privileged access to Linux systems.
- Supported scenarios include on-premises, cloud-hosted, virtual machines, and containers. Operating system variants include RHEL, Ubuntu, CentOS, Oracle Linux, and other distributions. For the supported versions, see [Supported platforms](../../requirements/supported-platforms.md).
- The REST API covers registering, configuring, and decommissioning systems, provisioning privileged access, and starting and expiring privileged access.
- You can set sudo with a tool such as Ansible, and Privilege Secure for Discovery then converts that access to JITA.
- The product works with directory-bridging and authentication solutions such as Centrify, PowerBroker Open, and SSSD.
- It scans, parses, and stores privileged access permissions centrally, and it reports on every account with privileged access.
- You can view the privileged access of a user or group without parsing sudo syntax. Skilled Linux administrators can still use the full capability of sudo.

## How Linux systems are managed

- Privilege Secure for Discovery manages Linux systems without an agent. Registration establishes a local service account with SSH access and sudo permissions. For more information, see [Linux systems overview](./linux-registration-modes.md).
- AD-joined Linux systems that use Centrify, PowerBroker Open, or SSSD with realmd are discovered in AD before registration. They can't be scanned or protected until a service account exists on the system.
- Privilege Secure for Discovery scans, inventories, and changes the sudo access of local and domain accounts over SSH, by using its service account. This keeps authorized JITA and persistent sudo access enforced and reportable.
- With lightweight directory bridging, Privilege Secure for Discovery controls sudo authorizations and creates local accounts that correspond to domain users. Domain sign-in is unavailable on systems that aren't AD-joined, so the product creates a local account with the same user name and password as the domain user. When the JITA session ends, it scrambles the local account password so that the user can't sign in until the next JITA session.
- With Centrify, PowerBroker Open, or SSSD directory-bridged authentication, Privilege Secure for Discovery controls sudo authorizations. It doesn't create or modify any local accounts except its service account.

## User authentication to Linux systems

### Lightweight directory bridging

Users sign in to a local account that Privilege Secure for Discovery created. The account has the same user name and password as the user's domain account.

- The web portal collects the domain credential and converts it to the hashed format that Linux uses, which it places in `/etc/shadow`.
- The user signs in to the system with the domain user name and password.
- When the JITA session ends, the password reset stops the user from signing in again.

Consider the following caveats:

- If sudo permissions aren't restricted, users can create other local accounts that Privilege Secure for Discovery doesn't manage.
- If sudo permissions aren't restricted, users can authorize SSH keys for other users.
- You can use the Linux system configuration, such as `access.conf`, to allow or deny sign-in.

### AD-bridged authentication providers

This applies to Centrify, PowerBroker, and SSSD on RHEL.

- The user signs in with a local or AD account, and the authentication provider authenticates the user.
- The Linux system configuration and the authentication provider allow or deny sign-in.

## View and change sudo access for a system

- The **Administrators** inventory for a system lists all local, domain, and unknown users and groups that have sudo permissions on the system. It summarizes the accounts with sudo permissions and parses permissions that are granted directly by name, through user aliases, and through user lists.
- Each time Privilege Secure for Discovery scans a system, it stores the full content of the sudoers file and any included files. You can view this content in the UI.
- You can open the raw sudoers content for a system to view and change it.
- You can discard your changes and use the sudoers file that was last discovered on the system.
- Access changes in the inventory and in the raw sudoers content stay synchronized.
- When Privilege Secure for Discovery protects a system, or starts a JITA session for a user while protection is off, it generates a new sudoers file. The file is based on the current authorized sudo access in the inventory, including ongoing JITA sessions.

For the sudoers editor, see [Edit sudoers with granular sudo control](./linux-granular-sudo.md).

## Starting scenarios for managing sudo access

### Sudo is unmanaged

1. Scan the systems.
2. Evaluate and adjust permissions in the UI or through the API or the Quickstart tool, and test the sudo permissions.
3. Set permissions consistently across many systems. Get the sudoers definition ID from the raw sudoers screen, then set it on many systems with the Quickstart tool or the API. For more information, see [Replicate sudo permissions to many systems](./linux-replicate-sudo-permissions.md).
4. Turn on Protect mode.

### Sudo is managed centrally with Ansible

1. Turn off Ansible and begin managing sudo in Privilege Secure for Discovery as described in the previous scenario.
2. If you need to update sudo with Ansible later, place the systems in Scan mode, push the changes from Ansible, scan the systems, configure accounts as JITA or persistent as needed, and test access.
3. Optionally, set permissions consistently across many systems.
4. Place the systems back in Protect mode.

### Sudo is managed through LDAP, AD, or a proprietary system

1. Export the permissions by account.
2. Create an equivalent sudoers configuration.
3. Place it in the sudoers content for the system, in the UI or through the API.
4. Configure accounts as JITA or persistent as needed, and test access.
5. Optionally, set permissions consistently across many systems.
6. Turn on Protect mode.

## Use JITA with Linux

1. Sign in to Privilege Secure for Discovery with your domain user account.
2. Find the system on the **Grant Access** screen.
3. Start JITA for an AD directory account. If the system uses lightweight directory bridging and you sign in with SAML single sign-on (SSO), enter your AD credentials. The product needs them to set the password on the local account it creates.
4. Connect to the system over SSH with the domain user name.
5. Use sudo as usual.
6. Sign out.
7. Expire the JITA session.

:::note
In some scenarios, you can use the API to start Linux JITA for a user.
:::

Depending on the bridging configuration, systems can accept short names or fully qualified names. The fully qualified name is expected to always work. A user can sign in with `domain\username` or `username@domain`.
