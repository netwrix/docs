---
title: "Exchange Administrator Audit Logging Settings"
description: "Exchange Administrator Audit Logging Settings"
sidebar_position: 20
---

# Exchange Administrator Audit Logging Settings

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

You can configure these settings automatically using Netwrix Auditor, as described in the
[Active Directory: Automatic Configuration](/docs/auditor/10.7/configuration/activedirectory/automatic.md) topic.

To configure them manually, refer to the procedure described below.

You can perform this procedure on any of the Exchange servers, and these settings will then be
replicated to all Exchange servers in the domain.

**To configure Exchange Administrator Audit Logging settings**

**Step 1 –** On the computer where the monitored Exchange server is installed, navigate to **Start →
Programs → Exchange Management Shell**.

**Step 2 –** Execute the following command depending on your Exchange version:

- Exchange 2019, 2016 and 2013

    `Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -LogLevel Verbose`

- Exchange 2010

`Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets *`

**Step 3 –** To reduce server load, you can exclude the cmdlets listed in the table above from
Exchange logging. For that:

- On the computer where Netwrix Auditor is installed, browse to the _%Netwrix Auditor Server
  installation folder%/Active Directory Auditing_ folder, locate the **SetAALExcludedCmdlets.ps1**
  PowerShell script file and copy it to Exchange server.

- In **Exchange Management Shell**, run this script using the command line:

    `<Path_To_SetAALExcludedCmdlets_File>.\SetAALExcludedCmdlets.ps1`

Make sure your policies allow script execution.
