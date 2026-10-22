---
title: "Linux systems and Active Directory"
description: "Choose a directory bridging setting for Linux systems, understand how users sign in, and move sudo management to Privilege Secure for Discovery."
sidebar_position: 20
---

Netwrix Privilege Secure for Discovery manages privileged access to Linux systems without agents, whether the systems use local accounts or Active Directory (AD) accounts. This page explains the directory bridging settings, how users sign in under each one, and how to start managing sudo access that you manage another way today. Users get sudo access through just-in-time access (JITA) sessions. For how scans and Protect modes work, see [Linux systems overview](./linux-registration-modes.md).

## Directory bridging settings

The **Directory Bridging** setting of a system tells the product how Linux resolves AD accounts. Change it on the **Grant Access** screen or in the Quickstart tool.

| Setting | Use it when | What the product does |
| --- | --- | --- |
| **SecureONE** | The system isn't joined to AD, or has no bridging software. This setting is lightweight directory bridging. | Creates a local account with the user's AD user name and password for each JITA session, and sets a random password when the session ends. |
| **SSSD** | The system is joined to AD with the System Security Services Daemon (SSSD). | Changes sudoers only. Reads `/etc/sssd/sssd.conf` and `/etc/sssd/conf.d` to match names and case. |
| **PowerBroker** | The system uses PowerBroker Identity Services. | Changes sudoers only. Reads `/etc/pbis/user-ignore` and `/etc/pbis/group-ignore`. |
| **Centrify** | The system uses Centrify. | Changes sudoers only. |

The third-party settings need a domain. When you choose one, the UI asks you to select the domain of the system. If the system has no domain, the UI shows `Invalid domain selected for the system.`

If you choose **SSSD** before the first scan, the product can't match names and shows `SSSD config does not exist. Cannot determine casing logic as it differs between SSSD 1.x and 2.x. Please scan the system to source the SSSD config.` Scan the system, and then try again.

## How users sign in

### With lightweight directory bridging

Users sign in over SSH to the local account that the product created. Users enter only the AD user name, without the domain, and the AD password.

- The product hashes the password in the format that Linux uses and stores it with the local account.
- When the JITA session ends, the product sets a new random password, so the user can't sign in until the next session.
- Sign-in rules on the system, such as `access.conf`, still apply.

Because the system doesn't restrict who can create accounts, a user with unrestricted sudo access during a session can create other local accounts or authorize SSH keys that the product doesn't manage. Limit the sudo rules that you grant if this matters in your environment.

### With SSSD, PowerBroker, or Centrify

Users sign in with their AD account, and the bridging software authenticates them. The product doesn't create or change accounts. The Linux configuration and the bridging software decide who can sign in.

## View and change sudo access

On the **Grant Access** screen, the **Administrator Accounts** list shows every local, domain, and unknown account or group that has sudo permissions on the system. For each account, the list shows whether the access is persistent and whether the rule is on the system.

- Select **Action** > **Sudo Permissions** to see the rules for one account, without reading sudoers syntax.
- Select **Sudoers** to view and edit the full sudoers content that the product stores for the system.

Both views use the same stored data. For the editor, see [Edit sudoers with granular sudo control](./linux-granular-sudo.md).

## Start managing sudo access

Pick the scenario that matches how you manage sudo today. In every scenario, back up `/etc/sudoers` first. See the warning in [Linux systems overview](./linux-registration-modes.md).

### Sudo is unmanaged

1. Register the systems and scan them.
2. Review the accounts in each **Administrator Accounts** list. Set the accounts that must always have access to persistent.
3. Edit the sudoers content if needed, and apply the same content to many systems. See [Replicate sudo permissions to many systems](./linux-replicate-sudo-permissions.md).
4. Set **Protect Mode** to **New Accounts: JITA**.

### Sudo is managed with a tool such as Ansible

1. Stop the tool from changing sudo on the registered systems. Manage sudo in the product from this point.
2. To change sudo with the tool later, set **Protect Mode** to **Disabled**, run the tool, rescan the systems, and review the accounts. Then set **Protect Mode** back.

### Sudo is managed in LDAP or another directory

The product reads sudo rules from sudoers files only. It doesn't read rules that SSSD or LDAP supply.

1. Export the permissions for each account from your directory.
2. Write equivalent sudoers rules and enter them in the sudoers content of the system, in the UI or through the API.
3. Set the accounts that need permanent access to persistent.
4. Set **Protect Mode** to **New Accounts: JITA**.

## Use JITA on a Linux system

1. Sign in to Privilege Secure for Discovery with your domain account.
2. Go to **Access** > **Grant Access** and find the system.
3. Request access. With lightweight directory bridging, the product needs your AD password to set the password of the local account. Enter it when the UI asks, which happens when you sign in with Security Assertion Markup Language (SAML) single sign-on (SSO).
4. Connect to the system over SSH with your user name.
5. Run commands with `sudo`.
6. When you finish, expire the session. For details, see [Start and manage JITA sessions](../../admin/systems/start-and-manage-jita-sessions.md).

An administrator can't request access for another user on a system that uses lightweight directory bridging. The product shows `JITA requests on behalf of another user are not supported for Mac systems and Linux systems using SecureONE directory bridging.`
