---
description: >-
  Troubleshoot when Netwrix Auditor change reports show "System" as the change
  initiator and list the domain controller as "unknown", including diagnostic
  steps and data to collect for support.
keywords:
  - Netwrix Auditor
  - change report
  - System
  - Security event log
  - domain controller
  - TraceLevel
  - ADEVT
  - auditing
  - IgnoreAuditCheckResultError
products:
  - auditor
sidebar_label: Troubleshoot Changes Listed as System
tags: []
title: "How to troubleshoot issue when changes are listed as made by System in a change report"
knowledge_article_id: kA00g000000H9YkCAK
---

# How to troubleshoot issue when changes are listed as made by System in a change report

You have configured change auditing in accordance with Netwrix Auditor Installation and Configuration guide (Installation and Configuration Guide), the Change Summary reports contain no warningserrors, however some changes are listed as made by the "System" account instead of the real user.  Also the domain controller where these changes were made on is listed as "unknown".

Active DirectoryGroup PolicyExchange (if you are monitor Exchange 2007, 2003) Change Reporters receive information regarding change initiator from Security event logs located on domain controllers. Once the corresponding Security event is found it is being added to the related change. The reason why the product includes "System"� as who changed for the particular changes is because it cannot find the corresponding Security event.  In situation when auditing is correctly configured (product does not complain about auditing configuration) there could be several reasons why the Security events can be missed:

1. Netwrix Auditor runs under an account with limited rights and all warnings are omitted according to the product settings. In this case, the Security event logs can be overwritten or one of the managed domain controllers can be inaccessible but no warnings will be added into Change Summary reports and sessions in the Netwrix Auditor console.
2. The Security event log auto backup is enabled but the data processing account account does not have rights to access the directory where the logs are backed up.
3. Other reasons that need be addressed by Netwrix technical support, for example:

- Security events appear with a huge delay in the Security event log (after a change is made) on monitored domain controllers;
- Security events are collected by Netwrix Auditor but not listed in the Change Summaries;
- Security events are listed in the Security event log (for corresponding changes) but not collected by Netwrix Auditor.

Navigate to one of the possible solutions that correspond to the issues described in the **Cause** section above:

1. To diagnose and troubleshoot the issue, provide the data processing account account with administrative rights (add to the **Domain Admins** user group) and disable errors omitting (set the **IgnoreAuditCheckResultError** registry key to **`0`**, it is located in the following registry hive `HKEY_LOCAL_MACHINESOFTWARE(Wow6432Node)NetwrixAD Change Reporter`).  This action allows you to see whether:

   - The error persists while running the product under a domain admin account;
   - There are any auditing problems that need to be addressed  (warnings will appear in the Change Summary reports and in the sessions in the Netwrix Auditor console)

2. If you add the data processing account to the **Domain Admins** group and the issue has been resolved, this may indicate that the data processing account that runs Netwrix Auditor has no rights to read the **Security event log backups**. To resolve this issue and keep running the product under your data processing account without the domain administrator rights, provide it with the following rights and permissions:

   - Permissions to the following registry key on each Domain Controller in the target domain: `HKEY_LOCAL_MACHINESystemCurrentControlSetServicesEventLogSecurity.`
   - Add the data processing account to one of the following groups in the monitored domain: **Print Operators**, **Server Operators**.

3. If you provided the data processing account with the domain administrator rights, see no warnings but still receive reports with "**System**" as "**Who Changed**" (for particular changes), open a support ticket on the Netwrix support portal (http://www.netwrix.com/support.html).  Gather and provide the following information:

   - Enable diagnostic logging:
     1. Open **Registry Editor** and navigate to the`HKEY_LOCAL_MACHINESOFTWARE(Wow6432Node)NetwrixAD Change Reporte`r registry hive.
     2. Right-click the **TraceLevel** registry key and set its value to "`31`" (decimal).

   - Reproduce the issue - Receive a report with "**System**" as "**Who changed**" (These steps must be taken as soon as possible after you received the Changed Summary report, because the Security event logs may get overwritten)

     - Save the Change Summary that contains **System** in the "**Who changed**" column.
     - Select two or three objects that were changed by "**System**" (in the received report) and generate metadata for each of the selected objects and save the results into a text file. For instructions on how to generate metadata for an Active Directory object, refer to the following Microsoft kb article: http://technet.microsoft.com/en-us/library/cc755360(v=ws.10).aspx
     - In the generated metadata results find the domain controller where a change was done and save the Security event log file from that domain controller.  Perform these steps for each selected object. Refer to the following article for details of how to use metadata and determine the domain controller where the change was made http://blogs.technet.com/b/brad_rutkowski/archive/2006/09/21/hey-who-deleted-that-user-from-ad.aspx
     - Navigate to the Audit Archive directory for the monitored domain Managed Object and copy files with `*.ADEVT` extension whose name starts with the domain controller name you found on previous step  and that were created  the day you received the report  (see previous step) and one day after (e.g. if you received summary report at 3 A.M on Wednesday, gather `*.ADEVT` files for the corresponding domain controller which was created on Tuesday and Wednesday.  If you are gathering this data on Thursday, please also include files created on Thursday).
     - Netwrix Auditor tracing log files (the entire contents of the **Tracing** subfolder of the `%Netwrix Auditor installation folder%Active Directory Auditing` folder).
     - Archive these files and contact Netwrix technical support.
