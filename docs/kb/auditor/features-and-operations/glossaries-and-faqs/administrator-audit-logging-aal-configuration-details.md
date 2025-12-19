---
description: >-
  Explains why and how to enable Administrator Audit Logging (AAL) on Exchange
  servers for Netwrix Auditor, including the required commands and details about
  excluded cmdlets.
keywords:
  - AAL
  - Administrator audit logging
  - Exchange
  - Netwrix Auditor
  - Set-AdminAuditLogConfig
  - SetAALExcludedCmdlets
  - AdminAuditLogs
  - arbitration mailbox
products:
  - auditor
sidebar_label: Administrator Audit Logging (AAL) configuration de
tags: []
title: "Administrator Audit Logging (AAL) configuration details"
knowledge_article_id: kA00g000000H9SDCA0
---

# Administrator Audit Logging (AAL) configuration details

**Q:** Why do you need to enable AAL (Administrator audit logging) on your Exchange servers?  
**A:** AAL is one of the necessary components which must be enabled for successful auditing by Netwrix Auditor for Exchange. Netwrix Auditor uses AAL data to identify an account which made a change in Exchange 2010+ server configuration. When AAL is not configured, Netwrix Auditor detects changes (which were made on Exchange servers) but includes “System” as WHO CHANGED instead of the real account name.

**Q:** How does administrator audit logging work?  
**A:** Please refer to the following Microsoft KB article: https://learn.microsoft.com/en-us/exchange/policy-and-compliance/admin-audit-logging/admin-audit-logging

**Q:** How does Netwrix Auditor for Exchange deal with Exchange servers after the AAL is configured?  
**A:** Netwrix Auditor reads the AAL mailbox on specified Exchange servers. Considering the fact AAL data is being replicated within its exchange organization, Netwrix Auditor needs to connect to just one Exchange server. The server which will be used to read AAL data can be specified manually.

**Q:** What is the command we need to run to enable and configure AAL consist of? What does it do?  
**A:** To enable and configure AAL you need to run 2 commands:

1. Exchange 2010:
   ```powershell
   Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets *
   ```

   Exchange 2013+:
   ```powershell
   Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -LogLevel Verbose
   ```

   - `Set-AdminAuditLogConfig` cmdlet is being used to configure the administrator audit logging configuration settings  
   - `AdminAuditLogEnabled` cmdlet with ` $true` parameter enables the administrator audit logging  
   - `AdminAuditLogAgeLimit ` cmdlet with `30` parameter specifies how long audit log entries will be retained (30 days in our case)  
   - `AdminAuditLogCmdlets ` cmdlet determines which cmdlets will be audited. Running this cmdlet with `* ` parameter we configuring administrator audit logging to audit all cmdlets  
   - **LogLevel** cmdled determines the level of detalization for generated logs. With **Verbose** Exchange also logs previous values of any changed attributes.  

   For more details regarding these cmdlets please refer to the same article: https://learn.microsoft.com/en-us/exchange/policy-and-compliance/admin-audit-logging/admin-audit-logging

2. `<Path_To_SetAALExcludedCmdlets_File>SetAALExcludedCmdlets.ps1`  

   This command runs `SetAALExcludedCmdlets.ps1` cmdlet which is located in the Active Directory Auditing subfolder of the Netwrix Auditor installation directory. `SetAALExcludedCmdlets.ps1` cmdlet excludes the following cmdlets from being audited (these cmdlets are being used very often and are not important for auditing):

   - `*-InboxRule`  
     http://technet.microsoft.com/en-us/library/dd335170%28v=exchg.150%29.aspx  
     http://technet.microsoft.com/en-us/library/dd351272%28v=exchg.141%29.aspx  
     http://technet.microsoft.com/en-us/library/dd351062%28v=exchg.150%29.aspx  
     http://technet.microsoft.com/en-us/library/dd351089%28v=exchg.150%29.aspx

   - `*-MailboxAutoReplyConfiguration`  
     http://technet.microsoft.com/en-us/library/dd638217%28v=exchg.150%29.aspx  
     http://technet.microsoft.com/en-us/library/dd638081%28v=exchg.150%29.aspx

   - `Set-MailboxAuditBypassAssociation`  
     http://technet.microsoft.com/en-us/library/ff696758%28v=exchg.141%29.aspx

   - `Set-MailboxAutoReplyConfiguration`  
     http://technet.microsoft.com/en-us/library/dd638217%28v=exchg.141%29.aspx

   - `Set-MailboxCalendarConfiguration`  
     http://technet.microsoft.com/en-us/library/dd335075%28v=exchg.141%29.aspx

   - `Set-MailboxCalendarFolder`  
     http://technet.microsoft.com/en-us/library/dd298124%28v=exchg.141%29.aspx

   - `Set-MailboxFolderPermission`  
     http://technet.microsoft.com/en-us/library/ff522363%28v=exchg.141%29.aspx

   - `Set-MailboxJunkEmailConfiguration`  
     http://technet.microsoft.com/en-us/library/dd979780%28v=exchg.141%29.aspx

   - `Set-MailboxMessageConfiguration`  
     http://technet.microsoft.com/en-us/library/dd638117%28v=exchg.141%29.aspx

   - `Set-MailboxRegionalConfiguration`  
     http://technet.microsoft.com/en-us/library/dd351103%28v=exchg.141%29.aspx

   - `Set-MailboxSpellingConfiguration`  
     http://technet.microsoft.com/en-us/library/dd298020%28v=exchg.141%29.aspx

**Q:**  Can we enable administrator audit logging on just one Exchange server?  
**A:** Administrator audit logging is being enabled against all Exchange servers (because Exchange configuration is being shared between all Exchange servers in the Exchange organization) in the managed Exchange organizations. To collect the administrator audit logging data, Netwrix Auditor needs to access just one dedicated Exchange server.

**Q:** How will enabling administrator audit logging affect Exchange servers performance?  
**A:** By default, the admin audit log is enabled in Exchange Server 2010 and newer. The log results are stored in the arbitration mailbox in the AdminAuditLogs folder. If cmdlets are executed in the Exchange Management Shell frequently, multiple log entries are generated, and may cause the size of the database to grow quickly. For more details please refer to the following Microsoft KB article: https://learn.microsoft.com/en-us/exchange/policy-and-compliance/admin-audit-logging/admin-audit-logging

Please note: while configuring administrator audit logging we exclude several particular cmdlets by running `SetAALExcludedCmdlets.ps1` command (see above command # 2) which decreases the number of auditing records and helps to hold the database size under control.

**Q:** Can we review the administrator audit logging content?  
**A:** Yes. Please please refer to the following Microsoft KB article: https://learn.microsoft.com/en-us/exchange/policy-and-compliance/admin-audit-logging/admin-audit-logging
