---
title: "Active Directory Auditing In Netwrix 1Secure"
sidebar_label: "Active Directory Auditing"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Active Directory Auditing

To collect data from Active Directory, you need an account with specific permissions. The following
options are available:

## Use Domain Admin Account

You can use an account from the Domain Admins group. This account inherently has all necessary
permissions for data collection.

## Use Non-Domain Admin Account

If using a Non-Domain Admin account, set up the account with specific permissions depending on the
following aspects:

|                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the target domain                                                                                                                  | Account Permission Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Do you plan to use [Network Traffic Compression](/docs/1secure/setup-and-configuration/network-configuration.md) for data processing? | If **YES**, account must belong to Domain Admin group. If **NO**, add an account to 'Manage auditing and security log' policy. See [Configure the Manage Auditing and Security Log Policy](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) for more information.                                                                                                                                                                                                                                                                       |
| Do you plan to use AD Deleted Objects container for data processing?                                                                  | If **YES**, account requires Read permission on the read container. See [Granting Permissions for 'Deleted Objects' Container](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) topic for more information.                                                                                                                                                                                                                                                                                                                     |
| Is auto-backup _enabled_ for the domain controller event logs?                                                                        | If **YES**, account needs the following: - Access to specific registry key on the domain controllers. See[Assigning Permission To Read the Registry Key](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) for additional information. - Membership in either Administrators, Print Operators, or Server Operators group. - Read/Write and Full Control permissions on the logs back up folder.                                                                                                                                  |
| Is there an on-premises Exchange server in your Active Directory domain?                                                              | If **YES**, account needs the following: - Membership in the **Organization Management** or **Records Management** group or having Audit Logs management role. See [Assigning Management Roles](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) topic for additional information. - Adjustment of the Exchange Administrator Audit Logging settings. See [Configure Exchange Administrator Audit Logging Settings](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) topic for additional information. |

## Use GMSA

You can use group Managed Service Accounts (gMSA) as data collecting accounts. It should also meet
the same requirements.

**NOTE:** If you are using gMSA for data collection, consider that AAL event data collection from
your on-premise Exchange server will not be possible. Thus, changes made to your Active Directory
domain via that Exchange server will be reported with _domain\\Exchange_server_name$_ instead of the
initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

For more information on gMSA, refer to [Using Group Managed Service Account (gMSA)](/docs/1secure/data-sources/gmsa.md)
and to
[Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

# Configure Exchange Administrator Audit Logging Settings

To be able to audit and report who made changes to the Exchange servers in your on-premises
infrastructure, or to Active Directory via the Exchange, ensure the Exchange Administrator Audit
Logging (AAL) settings are configured as follows:

| Setting               | Value                                                                                                                                                                                                                                                                                                                                                  | Comment                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| AdminAuditLogEnabled  | True                                                                                                                                                                                                                                                                                                                                                   | Enables audit logging                                                            |
| AdminAuditLogAgeLimit | 30                                                                                                                                                                                                                                                                                                                                                     | Determines how long audit log entries will be retained (default is 90 days)      |
| AdminAuditLogCmdlets  | \*                                                                                                                                                                                                                                                                                                                                                     | Instructs the program to create a log entry for every cmdlet that is run.        |
| LogLevel              | Verbose                                                                                                                                                                                                                                                                                                                                                | Sets logging level.                                                              |
| ExcludedCmdlets       | \*-InboxRule, \*-MailboxAutoReplyConfiguration, Set-MailboxAuditBypassAssociation, Set-MailboxAutoReplyConfiguration, Set-MailboxCalendarConfiguration, Set-MailboxCalendarFolder, Set-MailboxFolderPermission, Set-MailboxJunkEmailConfiguration, Set-MailboxMessageConfiguration, Set-MailboxRegionalConfiguration, Set-MailboxSpellingConfiguration | This list of exclusions is set up as explained in step 3 of the procedure below. |

To configure these settings manually, refer to the procedure described below.

You can perform this procedure on any of the Exchange servers, and these settings will then be
replicated to all Exchange servers in the domain.

Follow the steps to configure Exchange Administrator Audit Logging settings.

**Step 1 –** On the computer where the monitored Exchange server is installed, navigate to **Start →
Programs → Exchange Management Shell**.

**Step 2 –** Execute the following command depending on your Exchange version:

- Exchange 2019, 2016 and 2013

  `Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -LogLevel Verbose`

- Exchange 2010

`Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets *`

1. To reduce server load, you can exclude the cmdlets listed in the table above from Exchange
   logging. For that:

   1. On the computer where Netwrix 1Secure is installed, browse to the _%Netwrix Auditor Server
      installation folder%/Active Directory Auditing_ folder, locate the
      **SetAALExcludedCmdlets.ps1** PowerShell script file and copy it to Exchange server.
   2. In **Exchange Management Shell**, run this script using the command line:

      `<Path_To_SetAALExcludedCmdlets_File>.\SetAALExcludedCmdlets.ps1`

   Make sure your policies allow script execution.

# Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools**→ Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` → Domains → `<domain_name>` →
Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies → Windows Settings → Security Settings → Local
Policies.**

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the **Manage auditing and security log Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

**Step 7 –** Navigate to **Start → Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

## **Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

id: configure-basic-domain-audit-policies
title: "Configure Basic Domain Audit Policies"
pagination_label: "Configure Basic Domain Audit Policies"
sidebar_label: "Configure Basic Domain Audit Policies"
sidebar_position: 106
description: "Learn how to configure basic domain audit policies to track user account and group changes."

id: configure-advanced-audit-policies
title: "Configure Advanced Audit Policies"
pagination_label: "Configure Advanced Audit Policies"
sidebar_label: "Configure Advanced Audit Policies"
sidebar_position: 103
description: "Learn how to configure advanced audit policies for more granular Active Directory change tracking."

id: configure-object-level-auditing
title: "Configure Object-Level Auditing"
pagination_label: "Configure Object-Level Auditing"
sidebar_label: "Configure Object-Level Auditing"
sidebar_position: 108
description: "Learn how to configure object-level auditing for Domain and Configuration partitions to collect user activity information."
