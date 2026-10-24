---
title: "Active Directory sync and scan problems"
description: "Fix a stale Failed sync status, a stuck or failing Active Directory sync, hosts that aren't scanned, and Active Directory lockouts caused by host scans."
sidebar_position: 50
---

# Active Directory sync and scan problems

Active Directory (AD) sync reads users, groups, and computers from a domain. A host scan reads the operating system and other details from each resource. This page lists the symptoms you can see when either one fails, with the cause and the fix for each.

To check a sync, open the domain from **Resources** and read the **History** and **Sync Errors** tabs. To check a scan, open the resource and read its history. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains).

## The Sync AD task shows Failed but the domain synchronizes

**Symptom:** On **Configuration** > **Scheduled Tasks**, the task **Sync AD** `<domain>` shows the Last Status **Failed** and an old Last Run time. **View Logs** for the task shows only information lines. The **Sync Errors** tab for the domain shows **None**. The **History** tab for the domain shows a more recent successful sync than the task's last run.

**Cause:** The status is stale. No sync error was logged. An upgrade can leave the task in this state.

**Fix:**

1. Select **Resources**, and open the domain.
1. Change the **At** time of the schedule, for example from `02:00` to `03:00`, and click **Save**. The status of the task changes from **Failed** to **Scheduled**.
1. Click **Sync**. Don't click **Full Sync**.
1. On the **History** tab, check for the entry "Domain `<domain>` sync complete."
1. Change **At** back to the original time, and click **Save**.

For the task list, see [Scheduled tasks](/docs/privilegesecure/26_07/admin/service-nodes/scheduled-tasks). For the same issue after an upgrade, see [Upgrade Privilege Secure](/docs/privilegesecure/26_07/install/upgrade#the-scheduled-active-directory-sync-fails-after-the-upgrade).

## The sync fails with a duplicate key error on group membership

**Symptom:** The **Sync Errors** tab or the logs show a message such as "problem inserting group membership" with a duplicate key violation on `IX_active_directory_group_host_user_group_id_member_id`.

**Cause:** On a SQL Server database, two sync runs can write the same group membership at the same time, and the second insert fails.

**Fix:** Upgrade to 26.07.3 or later, which corrects the SQL Server lock that lets two syncs overlap. If the error continues after the upgrade, contact [Netwrix Support](https://www.netwrix.com/support.html) with the **Sync Errors** text.

{/* TODO verify: that the duplicate key fix is in 26.07.3 and whether SQL Server and PostgreSQL back ends are both affected. Sources: PSAM-619, PSAM-1313, PSAM-1359. */}

## A full sync stops at "Processing group members"

**Symptom:** A **Full Sync** stays at the "Processing group members" step for a long time.

**Cause:** The sync doesn't read every group in the domain. It starts from the seed groups, which are Domain Admins, Enterprise Admins, and the groups that hold a role in Privilege Secure. It then follows nested groups. A very large group with deep nesting makes this step slow.

**Fix:** Wait, and check the **History** tab for progress entries such as "Synchronized N group members for domain". If no entries appear for an extended period, upgrade to 26.07.3 or later. For how the sync finds group members, see [How Active Directory synchronization works](/docs/privilegesecure/26_07/resources/ad-sync#how-group-members-are-found).

{/* TODO verify: the first release that fixes the hang at "Processing group members", and how long a large sync should take before the reader contacts Support. Source: PSAM-1264. */}

## A host scan fails with a null platform ID error

**Symptom:** A scan or sync fails with the error "Cannot convert null to type 'System.Guid'" for the platform ID. A Windows resource added from Active Directory can also keep a blank operating system and IP address after its first scan.

**Fix:** Upgrade to 26.07.3 or later. On an earlier release, set the platform on the resource, and then scan the resource again. See [An error mentions a null PlatformID](/docs/privilegesecure/26_07/install/troubleshoot-installation#an-error-mentions-a-null-platformid).

{/* TODO verify: the UI path to set a resource platform */}

## Host scans cause Active Directory account lockouts

**Symptom:** Accounts that Privilege Secure manages are locked out in Active Directory again and again. For the affected resources, the operating system is blank after a host scan. Logoff and monitor steps fail for those resources with the message "Unsupported OS". Password rotation can then run while a user still has a live session that uses the old password.

**Cause:** The host scan connects to the resource with PowerShell remoting, and the resource then has to contact a domain controller. This second network hop is a double hop. It fails when Kerberos delegation between the resource and the domain controller isn't possible, so the scan doesn't record the operating system. Without an operating system, the logoff and monitor steps fail with "Unsupported OS". Password rotation still runs while a user's session uses the old password, and the old password then locks the account.

**Fix:** Configure Kerberos delegation, such as resource-based constrained delegation, between the resource and the domain controllers. See [Kerberos delegation](/docs/privilegesecure/26_07/requirements/target-environments#kerberos-delegation). Then scan the resource again and check that the operating system appears.

{/* TODO verify: the delegation configuration Netwrix supports (resource-based constrained delegation per PSAM-1331). */}

:::note
These lockouts are on accounts in Active Directory. They are separate from the lockout that blocks a user from signing in to the Privilege Secure console. For the console lockout, see [Sign-in lockout and unlocking](/docs/privilegesecure/26_07/admin/users-groups/user-details#sign-in-lockout-and-unlocking).
:::

## Linux resources aren't scanned after an upgrade to 26.07.1

**Symptom:** After an upgrade to 26.07.1, scans of Linux resources fail, even though the platform is set correctly on the resource.

**Cause:** One reported cause is a sudoers file on the Linux resource that doesn't allow every command the scan runs for the service account. The scan fails when sudo refuses one of them.

**Fix:** Check the sudoers file for the service account against the commands that Privilege Secure needs. Allow only those commands. Don't grant the account unrestricted sudo access. For the account setup and the command list, see [Linux targets](/docs/privilegesecure/26_07/requirements/target-environments#linux-targets) and [Creating a Least Privilege Service Account for Linux Resources](/docs/kb/privilegesecure/user-and-service-accounts/creating-a-least-privilege-service-account-for-linux-resources).

If the scan still fails after the account has every listed command, contact [Netwrix Support](https://www.netwrix.com/support.html). See also [Known issues](/docs/privilegesecure/26_07/troubleshooting/known-issues).

{/* TODO verify: the minimum sudoers command list for the 26.07.3 Linux plans, and whether 26.07.3 fixes the Linux scan failure. Source: PSAM-1367. */}

## Related topics

- [Active Directory domains](/docs/privilegesecure/26_07/resources/domains)
- [How Active Directory synchronization works](/docs/privilegesecure/26_07/resources/ad-sync)
- [Log files](/docs/privilegesecure/26_07/admin/audit-reporting/log-files)
- [Troubleshoot installation and upgrade](/docs/privilegesecure/26_07/install/troubleshoot-installation)
