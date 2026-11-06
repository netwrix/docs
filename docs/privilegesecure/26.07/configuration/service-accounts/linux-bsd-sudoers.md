---
title: "Configure a least-privilege sudoers policy for Linux and BSD"
description: "Create a sudoers policy that lets the Privilege Secure service account manage Linux and BSD resources with only the commands it needs."
sidebar_position: 30
---

# Configure a least-privilege sudoers policy for Linux and BSD

Netwrix Privilege Secure for Access Management (Privilege Secure) signs in to Linux and BSD resources as a service account and runs commands with `sudo`. Granting that account `ALL=(ALL) NOPASSWD: ALL` works, but a single misused credential then gives full root access on the host. This page shows a policy that allows only the commands Privilege Secure runs.

Use the policy as a starting point. Adjust the command lists to the resource, and don't grant a command that the account never runs.

## Before you begin

- Create the local account on the resource, or use a central domain account for hosts bridged to Active Directory. For Linux, `useradd svc_sbpam -m` creates a local account.
- Use the same account name in the sudoers file and in the Privilege Secure service account. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md).
- Confirm that `sudo` is installed. On Linux, `sudo` is part of the base system. On BSD, it's an installed package, so its files are under `/usr/local`.
- Replace `svc_sbpam` in the examples with your account name.

## Create the policy file

Create a file named after the account in the sudoers drop-in directory. Sudo ignores a drop-in file unless root owns it and only root can write to it.

| | Linux | BSD |
| --- | --- | --- |
| Directory | `/etc/sudoers.d` | `/usr/local/etc/sudoers.d` |
| Owner | `root:root` | `root:wheel` |
| Mode | `0440` | `0440` |

On Linux:

```bash
chown root:root /etc/sudoers.d/svc_sbpam
chmod 0440 /etc/sudoers.d/svc_sbpam
```

On BSD:

```bash
chown root:wheel /usr/local/etc/sudoers.d/svc_sbpam
chmod 0440 /usr/local/etc/sudoers.d/svc_sbpam
```

### Give every alias a unique name

`Cmnd_Alias` names are global across every file in the drop-in directory. If two files declare an alias with the same name, `sudo` fails with an `Alias already defined` parse error and refuses to load its configuration for every account on the host, not only the two that collided.

Before you install a policy file:

1. Prefix each `Cmnd_Alias` name with the account name or another tag that's unique to the account. The examples use the prefix `SVC_`.
1. Confirm that no other file in the drop-in directory uses the same alias names.
1. Check the syntax with `visudo -cf <file>`.
1. After you install the file, run `sudo -l` as the service account to confirm the policy.

## Add the policy

The command lists apply to Privilege Secure 26.07.3 and later. Add the block for the platform to the file. Each alias covers one group of commands:

| Alias | Used for |
| --- | --- |
| `SVC_ACT_CHKSUM` | Checking the state of a file, as in **Monitor File for Changes**. |
| `SVC_ACT_SUDOERS` | Writing, checking, and removing the rule files that **Add Sudoers rule** creates. |
| `SVC_SB_PASS` | Creating, changing, locking, and deleting local accounts and groups. |
| `SVC_SB_CMNDS` | Read-only lookups, ending a user's processes, session state, and messages. |
| `SVC_SB_SHELL` | Running a shell wrapper for scripted commands, such as the account scan and SSH key operations. |

### Linux

```text
Cmnd_Alias SVC_ACT_CHKSUM = /usr/bin/find, /usr/bin/test, /usr/bin/stat, /usr/bin/md5sum
Cmnd_Alias SVC_ACT_SUDOERS = /usr/bin/tee, /usr/sbin/visudo, /bin/rm, /bin/mv, /bin/chmod, /bin/sed
Cmnd_Alias SVC_SB_PASS = /usr/bin/chpasswd, /usr/sbin/chpasswd, /usr/sbin/usermod, /usr/sbin/userdel, /usr/sbin/useradd, /usr/sbin/groupadd, /usr/sbin/groupdel, /usr/bin/gpasswd
Cmnd_Alias SVC_SB_CMNDS = /usr/bin/getent, /bin/grep, /usr/bin/id, /usr/sbin/adcli, /bin/ps, /usr/bin/pkill, /usr/bin/who, /usr/bin/w, /usr/bin/last, /usr/bin/write
Cmnd_Alias SVC_SB_SHELL = /bin/bash -c *, /bin/sh -c *

svc_sbpam ALL = NOPASSWD: SVC_ACT_CHKSUM, SVC_ACT_SUDOERS, SVC_SB_PASS, SVC_SB_CMNDS, SVC_SB_SHELL
Defaults:svc_sbpam !requiretty
```

### BSD

```text
Cmnd_Alias SVC_ACT_CHKSUM = /usr/bin/find, /bin/test, /sbin/md5sum
Cmnd_Alias SVC_ACT_SUDOERS = /usr/bin/tee, /usr/local/sbin/visudo, /bin/rm, /bin/mv, /bin/chmod, /usr/bin/sed
Cmnd_Alias SVC_SB_PASS = /usr/sbin/pw
Cmnd_Alias SVC_SB_CMNDS = /usr/bin/grep, /bin/cat, /bin/pkill, /usr/bin/who, /usr/bin/w, /usr/bin/last, /usr/bin/write
Cmnd_Alias SVC_SB_SHELL = /bin/sh -c *

svc_sbpam ALL = NOPASSWD: SVC_ACT_CHKSUM, SVC_ACT_SUDOERS, SVC_SB_PASS, SVC_SB_CMNDS, SVC_SB_SHELL
Defaults:svc_sbpam !requiretty
```

- `NOPASSWD` lets the account run the listed commands without a password prompt. Privilege Secure can't answer one.
- `!requiretty` lets the account run elevated commands in a non-interactive session.
- On an Azure Linux 4.0 resource, also add `Defaults:svc_sbpam !pam_session`. See [Prepare an Azure Linux resource](/docs/privilegesecure/26.07/configuration/service-accounts/prepare-azure-linux.md).
- Replace the `SVC_` prefix with a tag that's unique to the account when more than one service account uses the same host.
- The paths in the examples match a typical layout. Confirm each path on the host with `command -v <command>`, because some distributions keep a command in `/bin` and others in `/usr/bin`. On a system where `/bin` is a link to `/usr/bin`, either path matches.

:::warning
`SVC_SB_SHELL` lets the account run any command through a shell, which is effectively full root access. Privilege Secure uses `/bin/bash -c` for the account scan and `/bin/sh -c` for the SSH key certificate operations. Leave out the shell entries on resources where you don't use those operations. Then check the other aliases against the commands those resources run.
:::

For the full list of commands that the 26.07 command plans run, and what to do when a scan stops on a `sudo` error, see [Linux resources aren't scanned after an upgrade to 26.07.1](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md#linux-resources-arent-scanned-after-an-upgrade-to-26071).

## Check the policy

1. Validate the file before you rely on it:

   ```bash
   visudo -cf /etc/sudoers.d/svc_sbpam
   ```

   On BSD, use the `visudo` that the package installed, for example `/usr/local/sbin/visudo`, and the BSD file path.

1. List the account's permissions:

   ```bash
   sudo -l -U svc_sbpam
   ```

1. Test a command that the policy allows and a closely related command that it must refuse.

Keep a second privileged session open while you test, so a broken rule can't lock you out.

## Add a command that's missing

If a scan or a session fails with `sudo: no tty present and no askpass program specified`, or with a password request, the account is probably missing a command. On the resource:

1. Search the logs for the account: `sudo grep svc_sbpam /var/log/*`.
1. Find the command that `sudo` refused and note its full path.
1. Add the path to the matching alias and validate the file again.

## Tags and patterns in sudoers rules

- To add sudoers tags such as `SETENV` or `LOG_OUTPUT` to the rules that the **Add Sudoers rule** action writes, see [Sudoers tags reference](/docs/privilegesecure/26.07/configuration/service-accounts/sudoers-tags-reference.md).
- To narrow an entry with wildcards, arguments, or regular expressions, see [Sudoers pattern reference](/docs/privilegesecure/26.07/configuration/service-accounts/sudoers-pattern-reference.md).

The **Add Sudoers rule** action writes its own rule file for the user who connects, separate from this policy. On BSD, the action writes its rule files to the `/usr/local/etc/sudoers.d` directory.
