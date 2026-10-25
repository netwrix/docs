---
title: "Active Directory sync and scan problems"
description: "Fix a stale Failed sync status, a stuck or failing Active Directory sync, hosts that aren't scanned, and Active Directory lockouts caused by host scans."
sidebar_position: 50
---

# Active Directory sync and scan problems

Active Directory (AD) sync reads users, groups, and computers from a domain. A host scan reads the operating system and other details from each resource. This page lists the symptoms you can see when either one fails, with the cause and the fix for each.

To check a sync, open the domain from **Resources** and read the **History** and **Sync Errors** tabs. To check a scan, open the resource and read its history. See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md).

## The Sync AD task shows Failed but the domain synchronizes

**Symptom:** On **Configuration** > **Scheduled Tasks**, the task **Sync AD** `<domain>` shows the Last Status **Failed** and an old Last Run time. **View Logs** for the task shows only information lines. The **Sync Errors** tab for the domain shows **None**. The **History** tab for the domain shows a more recent successful sync than the task's last run.

**Cause:** The status is stale. No sync error was logged. An upgrade can leave the task in this state.

**Fix:**

1. Select **Resources**, and open the domain.
1. Change the **At** time of the schedule, for example from `02:00` to `03:00`, and click **Save**. The status of the task changes from **Failed** to **Scheduled**.
1. Click **Sync**. Don't click **Full Sync**.
1. On the **History** tab, check for the entry "Domain `<domain>` sync complete."
1. Change **At** back to the original time, and click **Save**.

For the task list, see [Scheduled tasks](/docs/privilegesecure/26.07/admin/service-nodes/scheduled-tasks.md). For the same issue after an upgrade, see [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md#the-scheduled-active-directory-sync-fails-after-the-upgrade).

## The sync fails with a duplicate key error on group membership

**Symptom:** The **Sync Errors** tab or the logs show a message such as "problem inserting group membership" with a duplicate key violation on `IX_active_directory_group_host_user_group_id_member_id`.

**Cause:** On a SQL Server database, a sync that can't get its database lock within 3 seconds continues without it. Two sync runs can then write the same group membership at the same time, and the second insert fails. PostgreSQL waits for the lock, so it doesn't have this problem.

**Fix:** Upgrade to 26.07.3 or later. From 26.07.3, a sync on SQL Server waits for the lock, and a domain that is already syncing skips a second run. If the error continues after the upgrade, contact [Netwrix Support](https://www.netwrix.com/support.html) with the **Sync Errors** text.

## A full sync stops at "Processing group members"

**Symptom:** A **Full Sync** stays at the "Processing group members" step for a long time.

**Cause:** The sync doesn't read every group in the domain. It starts from the seed groups, which are Domain Admins, Enterprise Admins, and the groups that hold a role in Privilege Secure. It then follows nested groups. A very large group with deep nesting makes this step slow.

**Fix:** Wait, and check the **History** tab for progress entries such as "Synchronized N group member relationships for domain". If no entries appear for an extended period, upgrade to 26.07.3 or later. Release 26.07.3 looks up nested groups in batches of up to 200 groups per directory query, instead of one query for each group. For how the sync finds group members, see [How Active Directory synchronization works](/docs/privilegesecure/26.07/resources/ad-sync.md#how-group-members-are-found).

{/* TODO verify: how long a large sync should take before you contact Support. Release code and public sources set no time limit; it depends on domain size. */}

## A host scan fails with a null platform ID error

**Symptom:** A scan or sync fails with the error "Cannot convert null to type 'System.Guid'" for the platform ID. A Windows resource added from Active Directory can also keep a blank operating system and IP address after its first scan.

**Fix:** Upgrade to 26.07.3 or later. On an earlier release, set the platform on the resource: select **Resources**, select the checkbox of the resource, select **Change Platform**, choose the platform, and select **Okay**. Then scan the resource again. See [Change the platform of resources](/docs/privilegesecure/26.07/resources/overview.md#change-the-platform-of-resources) and [An error mentions a null PlatformID](/docs/privilegesecure/26.07/install/troubleshoot-installation.md#an-error-mentions-a-null-platformid).

## Host scans cause Active Directory account lockouts

**Symptom:** Accounts that Privilege Secure manages are locked out in Active Directory again and again. For the affected resources, the operating system is blank after a host scan. Logoff and monitor steps fail for those resources with the message "Unsupported OS". Password rotation can then run while a user still has a live session that uses the old password.

**Cause:** The host scan connects to the resource with PowerShell remoting, and the resource then has to contact a domain controller. This second network hop is a double hop. It fails when Kerberos delegation between the resource and the domain controller isn't possible, so the scan doesn't record the operating system. Without an operating system, the logoff and monitor steps fail with "Unsupported OS". Password rotation still runs while a user's session uses the old password, and the old password then locks the account.

**Fix:** Configure Kerberos delegation between the resource and the domain controllers. With resource-based constrained delegation, you configure each domain controller to accept delegated credentials from the resource's computer account. Microsoft documents this method for Windows Server 2012 and later in [Making the second hop in PowerShell Remoting](https://learn.microsoft.com/en-us/powershell/scripting/security/remoting/ps-remoting-second-hop). Accounts that have **Account is sensitive and cannot be delegated** selected can't be delegated. See [Kerberos delegation](/docs/privilegesecure/26.07/requirements/target-environments.md#kerberos-delegation). Then scan the resource again and check that the operating system appears.

{/* TODO verify: that Netwrix supports resource-based constrained delegation specifically for the host scan second hop. Release code doesn't state a supported delegation type; the method above comes from Microsoft's PowerShell remoting documentation. */}

:::note
These lockouts are on accounts in Active Directory. They are separate from the lockout that blocks a user from signing in to the Privilege Secure console. For the console lockout, see [Sign-in lockout and unlocking](/docs/privilegesecure/26.07/admin/users-groups/user-details.md#sign-in-lockout-and-unlocking).
:::

## Linux resources aren't scanned after an upgrade to 26.07.1

**Symptom:** After an upgrade to 26.07.1, scans of Linux resources fail, even though the platform is set correctly on the resource.

**Cause:** One reported cause is a sudoers file on the Linux resource that doesn't allow every command the scan runs for the service account. The scan fails when sudo refuses one of them.

**Fix:** Check the sudoers file for the service account against the commands that Privilege Secure needs. Allow only those commands. Don't grant the account unrestricted sudo access. For the account setup, see [Linux targets](/docs/privilegesecure/26.07/requirements/target-environments.md#linux-targets) and [Creating a Least Privilege Service Account for Linux Resources](/docs/kb/privilegesecure/user-and-service-accounts/creating-a-least-privilege-service-account-for-linux-resources).

If the scan still fails after the account has every listed command, contact [Netwrix Support](https://www.netwrix.com/support.html). See also [Known issues](/docs/privilegesecure/26.07/troubleshooting/known-issues.md).

In 26.07.3, the Linux command plans run these commands through `sudo`: `getent`, `id`, `useradd`, `usermod`, `userdel`, `groupadd`, `gpasswd`, `chpasswd`, `pkill`, `who`, `w`, `last`, `write`, `find`, `test`, `md5sum`, `/bin/rm`, `/usr/sbin/adcli`, `/bin/sh`, and `/bin/bash`. The plan that adds a sudoers file also runs `visudo`, `tee`, `/bin/mv`, `/bin/chmod`, `/bin/grep`, `/bin/sed`, and `stat`. The plans call the commands shown with a full path by that exact path, and sudoers rules match on the command path, so write those rules with the full path. The plans resolve the other commands through the target's PATH.

The account scan runs `/bin/bash` through `sudo`, and the SSH key certificate operations run `/bin/sh` through `sudo`. Allowing a shell through `sudo` is effectively full root access. Grant these only on resources where you use those operations, and accept that the service account then has unrestricted root. On other resources, ensure the sudoers file allows each command that the operations on that resource need.

{/* TODO verify: whether 26.07.3 fixes the Linux scan failure after an upgrade to 26.07.1. Release code shows the plans above but doesn't identify which command the scan was refused. */}

## Related topics

- [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md)
- [How Active Directory synchronization works](/docs/privilegesecure/26.07/resources/ad-sync.md)
- [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md)
- [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md)
