---
title: "Device account and session actions"
description: "See the account actions and session actions that Privilege Secure runs on Linux, BSD, Cisco, PAN-OS, and custom platforms, and which commands each one needs."
sidebar_position: 50
---

# Device account and session actions

Privilege Secure manages local accounts on network devices and Linux or BSD hosts through SSH. Each platform has a set of command plans that run the actions: add, remove, enable, or disable an account; set its password; and add it to or remove it from a group. Some platforms also have session actions that report a signed-in user's state, end that user's processes, or send a message to that user's terminals.

The command plans are the same actions that Privilege Secure runs during a scan, a password rotation, or an activity. You don't run them by hand. Use this page to see what each action does on the target, and the commands it needs, so that a least-privilege account can run it. For the sudo policy that grants the Linux and BSD commands, see [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md).

## Account actions

| Action | Linux and BSD | Cisco IOS | PAN-OS |
| --- | --- | --- | --- |
| Add account | `useradd -m`, then `chpasswd` | `username <user> privilege <n> secret <pw>` and `password <pw>` | Set the user entry, then commit |
| Remove account | `userdel -r`, then remove the home directory | `no username <user>` | Delete the user entry, then commit |
| Enable account | `usermod -U` | (not supported) | (not supported) |
| Disable account | `usermod -L` | (not supported) | (not supported) |
| Set password | `chpasswd` | `username <user> secret <pw>` and `password <pw>` | Set the user entry, then commit |
| Add to a group | `usermod -aG` | (not supported) | (not supported) |
| Remove from a group | `gpasswd -d` | (not supported) | (not supported) |

### Linux and BSD

The plans that Linux and BSD use are the same. They cover:

- **Add account** (`AddUser`): `useradd -m`, then `chpasswd`. The plan retries until the account exists and the password is set.
- **Remove account** (`RemoveUser`): `userdel -r`, then it removes the home directory when the home directory isn't `/`.
- **Enable account** (`EnableUser`): `usermod -U`, then it reads `getent shadow` to confirm.
- **Disable account** (`DisableUser`): `usermod -L`, then it reads `getent shadow` to confirm.
- **Set password** (`SetUserPassword`): `chpasswd`, then the plan signs in to the target as that user to confirm the new password works.
- **Add to a group** (`AddGroupUser`): creates the group when it is missing, creates the user when it is missing, then `usermod -aG`.
- **Remove from a group** (`RemoveGroupUser`): `gpasswd -d`, then it reads `getent group` to confirm.
- **Add an SSH key certificate** (`SetUserSshKeyCert`) and **remove one** (`RemoveUserSshKeyCert`).

The commands are in the aliases `SVC_SB_PASS` and `SVC_SB_CMNDS`. The plans also read the account list with `getent passwd` and the password hash with `getent shadow`.

### Cisco IOS

A Cisco device has no separate enable or disable action, and no local group membership. The plans sign in to enable mode first, then configure the account:

- **Add account** (`AddUser`): `enable`, the enable password, `config t`, `username <user> privilege <n> secret <pw>`, `username <user> privilege <n> password <pw>`, `end`, `wr`.
- **Set password** (`SetUserPassword`): the same commands, without the privilege change.
- **Remove account** (`RemoveUser`): `enable`, the enable password, `config t`, `no username <user>`, `end`, `wr`.

Privilege Secure sets both the `secret` and the `password` value for an account, so either method can authenticate it. A Cisco device also has session actions: **get user sessions** (`show users`) and **remove a user session**.

### PAN-OS

PAN-OS account actions use the management API, not the command line. Each action sets the user entry under `/config/mgt-config/users`, then runs a commit. The commit uses a partial commit for the management-plane administrator, and the plan polls the commit job until it reports finished.

The PAN-OS plans set the user entry, so they cover **add account**, **remove account**, and **set password**. They also add and remove group membership.

## Session actions

A Linux or BSD resource also has session actions. They run against a user who is signed in on the target.

| Action | Command | Result |
| --- | --- | --- |
| Get session state | `who`, `w -h`, `last <user> -w` | The sign-in time and the idle time in minutes |
| End user processes | `pkill -9 -u "<user>"` | **user processes terminated**, or **user processes not confirmed terminated** |
| Send a message | `who`, then `write <user> <tty>` for each terminal | **message sent**, or **message not confirmed sent** |

These actions need the commands in the `SVC_SB_CMNDS` alias. For the details, see [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md#session-actions-on-a-linux-target).

## Find the domain controllers that a Linux host uses

On a Linux host that is joined to a domain, the scan can read the domain controllers that the host trusts. The plan runs `adcli info <domain>`. The resource needs the `adcli` command, which is in the `SVC_SB_CMNDS` alias. This makes the domain controllers that the host knows about available to Privilege Secure.

## Detect a custom platform operating system

For a resource on a custom platform, the detection plan runs `uname` over SSH and reports the operating system. It recognizes Linux, FreeBSD, OpenBSD, NetBSD, DragonFlyBSD, Darwin, macOS, AIX, SunOS, Solaris, Illumos, HP-UX, Minix, and Unix.

To set up a custom platform, see [Create a platform from an existing platform](/docs/privilegesecure/26.07/resources/platforms/platforms.md#create-a-platform-from-an-existing-platform).

## Related topics

- [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md)
- [Command plans](/docs/privilegesecure/26.07/resources/platforms/command-plans.md)
- [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md)
- [SSH client settings](/docs/privilegesecure/26.07/configuration/ssh-client-settings.md)